import axios from "axios";

const URL='';
export const authenticateSignUp=async (data)=>{

    try{
        return await axios.post(`${URL}/signup`,data)
    }catch(error){
        console.log("error while connecting with signup api ",error)

    }

}

export const authenticateLogin=async (data)=>{

    try{
        return await axios.post(`${URL}/login`,data)
    }catch(error){
        console.log("error while connecting with login api ",error);
        return error.response;

    }

}

export const payUsingPaytm= async(data)=>{

try{
    let response= await axios.post(`${URL}/payment`,data);
    
    return response.data;
    

}catch(error){
    console.log('error while contacting paytm API',error);
}
}