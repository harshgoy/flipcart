import mongoose from "mongoose";
export const Connection = async (URL) => {

    try{
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log("mongoDB is now connected")


    }
        catch(error){

            console.log(`error while connecting to DB is `, error)
        }
    
}
export default Connection;

