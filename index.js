import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { getAllRestaurants, getRestaurantById, createRestaurant } 
  from "./src/restaurants.js";
import dbConnect from "./src/dbConnect.js";
dotenv.config();

const PORT = process.env.PORT || 3030;

const app = express();
app.use(cors());
app.use(express.json());

// set up our routes
app.get('/restaurants', getAllRestaurants);

app.get('/restaurants/:restId', getRestaurantById);

app.post('/restaurants', createRestaurant);

// listen on port 
app.listen(PORT, () => {
    console.log(`Listening on http://localhost${PORT}...`);
})
