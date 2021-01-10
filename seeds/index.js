const mongoose = require('mongoose');
const Restaurant = require('../models/restaurants');
const cities = require('./citiesUSA')
const { descriptors, places } = require('./helper');

mongoose.connect('mongodb://localhost:27017/hunger-mania', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("Database Connected");
});

const sample = (array)=>array[Math.floor(Math.random()*array.length)];

const seedDB = async ()=>{
    await Restaurant.deleteMany({});
    for(let i=0; i<250; i++){
        const price = Math.floor(Math.random()*500+50)
        const RandomCity = sample(cities)
        const restaurant = new Restaurant({
            title: `${sample(descriptors)} ${sample(places)}`,
            location: `${RandomCity.city}, ${RandomCity.state}`,
            author: '5ff17b355f07706ad41ad1ab',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quis aliquam debitis possimus tempora! Nihil perspiciatis nostrum impedit distinctio soluta facilis odit saepe est praesentium, explicabo voluptatem modi inventore nam?',
            price: price,
            geometry: { 
                coordinates:
                    [ 
                        RandomCity.longitude,
                        RandomCity.latitude 
                    ]   , 
                type: 'Point' 
            },
            images : [
                {                     
                    url : "https://res.cloudinary.com/rishabhbafna/image/upload/v1609855044/HungerMania/pqrzrofkwzgipsi8bios.jpg", 
                    filename : "HungerMania/pqrzrofkwzgipsi8bios" 
                }, 
                { 
                    url : "https://res.cloudinary.com/rishabhbafna/image/upload/v1609855097/HungerMania/hpev39mmogdtkq8umvl2.jpg", 
                    filename : "HungerMania/hpev39mmogdtkq8umvl2" 
                } 
            ]
        })
        await restaurant.save()
    }
    
}
seedDB().then(()=>{
    mongoose.connection.close();
})