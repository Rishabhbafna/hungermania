# HungerMania

![homePage](https://raw.githubusercontent.com/Rishabhbafna/hungermania/main/screenshots/homePage.PNG)  
![showPage](https://raw.githubusercontent.com/Rishabhbafna/hungermania/main/screenshots/showPage.PNG)
![clusterMap](https://raw.githubusercontent.com/Rishabhbafna/hungermania/main/screenshots/clusterMap.PNG)  


[HungerMania](https://afternoon-brushlands-75563.herokuapp.com/) is a website where users can create and review restaurants. In order to review or create a restaurant, you must have an account.

This project was created using **Node.js, Express, MongoDB, Mongooose and Bootstrap.** **Passport.js** was used to handle authentication. **Mapbox** was used to create and show maps and **Cloudinary** is used to store multimedia. **Mongo Atlas** is used as cloud database for storing all the info of restaurants, reviews and users. 

This project is hosted online using heroku. Check it out => [hungermania](https://afternoon-brushlands-75563.herokuapp.com/)

## Features
* Users can create, edit, and remove restaurants
* Users can review restaurants, and edit or remove their review
* User profiles have information (username and email), and they are the author of their restaurants only
* See restaurants on a cluster map on main page
* See location on map, reviews, and other info on show page

## Run it locally
1. Install [mongodb](https://www.mongodb.com/)
2. Create a cloudinary account to get an API key and secret code

```
git clone https://github.com/Rishabhbafna/hungermania.git
cd yelpcamp
npm install
```

Create a .env file (or just export manually in the terminal) in the root of the project and add the following:  

```
DATABASEURL='<url>'
API_KEY=''<key>
API_SECRET='<secret>'
```

Run ```mongod``` in another terminal and ```node app.js``` in the terminal with the project.  

Then go to [localhost:3000](http://localhost:3000/).

To get maps working check [this](https://www.mapbox.com/) out.
