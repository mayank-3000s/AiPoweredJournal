import axios from "axios"

const api = axios.create({
    baseURL: "https://journalserver-2.onrender.com/user"
})
export const signup = async({name, email, password})=>{
    try{
        const response = await api.post("/signup", {name, email, password})
        if(response.status === 200){
            return response.data;   
        }
        else {
            throw new Error("Failed to signup")
        }
    } catch(error){
        console.log(error);
    }
}

export const login = async({email, password})=>{
    try{
        const response = await api.post("/login", {email, password})
        if(response.status === 200){
            return response.data; 
        }
        else {
            throw new Error("Failed to login")
        }
    } catch(error){
        console.log(error);
    }
}

export const profile = async(token)=>{
    try{
        const response = await api.get("/profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if(response.status === 200){
            return response.data;
        }
        else {
            throw new Error("Failed to get profile")
        }
    } catch(error){
        console.log(error);
    }
}

export const updateProfile = async(token, userInfo)=>{
    try{
        const response = await api.put("/updateprofile" , userInfo ,{
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        if(response.status === 200) return response.data;
        else {
            throw new Error("Failed to update profile")
        }
    } catch(error){
        console.log(error);
    }
}