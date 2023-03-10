import { FieldValue } from "firebase-admin/firestore"
import dbConnect from "./dbConnect.js"
const collectionName = "restaurants"

// Get
export async function getAllRestaurants(req, res) {
    const db = dbConnect()
    const collection = await db.collection(collectionName)
        .orderBy("createdAt", "desc").get()
    const restaurants = collection.docs.map( doc => ({...doc.data(), restId: doc.id})) // element works too
    res.send(restaurants)
}

// Rest ID for Restaurants
export async function getRestaurantById(req, res) {
    const db = dbConnect()
    // const restId = req.params.restId
    const { restId } = req.params //.restId is no longer needs, the long way is no destructing
    const doc = await db.collection(collectionName).doc(restId).get()
    const rest = doc.data()

    res.send('Got Restaurant: ' + rest)
}

// Create
export async function createRestaurant(req, res) {
    const db = dbConnect()
    let newRestaurant = req.body
    // add a timestamp to the new restaurant
    newRestaurant.createdAt = FieldValue.serverTimestamp()
    await db.collection(collectionName).add(newRestaurant)
    res.status(201).send('Added Restaurant')
}

// Update 
export async function updateRestaurantById(req, res) { 
    const { restId } = req.params
    const updateInfo = req.body
    
    const db = dbConnect()
    await db.collection(collectionName).doc(restId).update(updateInfo)
    res.status(202).send("Restaurant Updated")
    
}

// Delete 
export async function deleteRestaurant(req, res) {
    const { restId } = req.params

    const db = dbConnect()
    await db.collection(collectionName).doc(restId).delete()
    res.send("Restaurant Deleted")
}
