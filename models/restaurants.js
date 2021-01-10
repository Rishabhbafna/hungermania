const mongoose = require('mongoose')
const Review = require('./review')
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    url: String,
    filename: String
});

imageSchema.virtual('thumbnail').get(function(){
    return this.url.replace('/upload', '/upload/w_200,h_150')
})

const opts = { toJSON:{ virtuals: true } };

const restaurantSchema = new Schema({
    title: String,
    images:[imageSchema],
    price: Number,
    description: String,
    location: String,
    geometry: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'],// 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
}, opts);

restaurantSchema.virtual('properties.popUp').get(function(){
    return `<a href="/restaurants/${this._id}">${this.title}</a>`
})

restaurantSchema.post('findOneAndDelete', async function(data) {
    if(data){
        await Review.deleteMany({
            _id: {
                $in: data.reviews
            }
        })
    }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;