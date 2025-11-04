import axios from "axios";

const api = axios.create({
    baseURL: " https://journalserver-2.onrender.com/summary"
})

export const fetchSummary = async (token)=>{
    try{
        const res = await api.get('/getsummary', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if(res.status === 200){
            return res.data;  
        }
        else {
            throw new Error("Failed to fetch summary")  ; 
        }
    } catch(err){
        console.log(err);
        throw new Error("Failed to fetch summary")
    }
}

export const addSummary = async (token, data) => {
    try{
        const res = await api.post('/addsummary', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if(res.status === 200){
            return res.data;
        }
        else {
            throw new Error("Failed to send summary")
        }    
    } catch(err){
        console.log(err);
        throw new Error("Failed to send summary")
    }
}