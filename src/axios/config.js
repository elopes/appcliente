import axios from "axios";

const fetch=axios.create({
    //baseURL: "https://jsonplaceholder.typicode.com",
    baseURL: "http://127.0.0.1:8000/api/v1",
    
    headers:{
        "Content-Type":"application/json",
        "Token":"wehrmann",
    },
});

export default fetch;