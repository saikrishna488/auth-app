const data = [
    {
        username : "sai",
        password : "1234"
    },
    {
        username : "luffy",
        password : "1234"
    },
    {
        username : "nami",
        password : "1234"
    },
]

let authCheck = (username,password)=>{
    let valid = false
    data.forEach((item)=>{
        if(item.username === username && item.password === password){
            valid = true;
        }
    });
    return valid;
}

module.exports = authCheck;