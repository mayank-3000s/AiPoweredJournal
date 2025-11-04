import {jwtDecode} from "jwt-decode"
export const saveToken = (token)=>{
    return localStorage.setItem("token", token);
}

export const getToken = ()=>{
    const token = localStorage.getItem("token") || ""
    if(!token) return null;
    try{
        const decodedToken = jwtDecode(token);
        if(decodedToken.exp * 1000 < Date.now()) {
            removeToken();
            return null;
        }
        return token;
    } catch(err) {
        console.log(err);
        
    }
}

export const removeToken = ()=>{
    return localStorage.removeItem("token");
}