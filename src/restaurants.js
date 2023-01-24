import dbConnect from "./dbConnect.js";

export function getAllRestaurants(req, res) {
    const db = dbConnect()
    res.send('All Restaurants')
}

export function getRestaurantById(req, res) {
    const db = dbConnect()
    // const restId = req.params.restId
    const { restId } = req.params //.restId is no longer needs, the long way is no destructing
    res.send('Got Restaurant: ' + restId)
}

export function createRestaurant(req, res) {

    const db = dbConnect()
    const newRestaurant = req.body
    res.status(201).send('Added Restaurat')
}
