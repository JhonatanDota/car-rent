export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

function getToken(){
    return localStorage.getItem("token");
}

export const HEADER = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
}