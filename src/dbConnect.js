import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"
import { service_account } from "../secrets.js";
// import dotenv from "dotenv"
// dotenv.config()
// TODO: need to import serviceAccount from env file
export default function dbConnect() {
    // check if NOT connected 
    if (!getApps().length) { // !getApps() also works... !getApps().length works because when it reaches 0 it will become truthy instead of it being the default falesy (being 0)
        initializeApp({
            credential: cert(service_account)
        });
        // connect
    }
    // return db-connection
    return getFirestore();
}
