const express = require('express');
const axios = require('axios').default;
const app = express();
require('dotenv').config();


const isPrime = (num) => {
    if(num<2) return false;
    for(let i=2;i<=num/2;i++){
        if(num%i===0) return false;
    }
    return true;
}


app.get('/', (req, res) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Ranchi&appid=${process.env.API_KEY}`)
    .then(function (response) {
        let currdatetime = new Date ();
        let date = currdatetime.getDate();
        //we can replace date with a prime/non-prime number to test functionality
        if(isPrime(date)) {
            console.log(response.data);
            res.status(200).json(response.data);
        }
        else{
            console.log("Date is Not prime");
            res.status(200).send("Date is Not prime");
        };
    })
    .catch(function (error) {
        console.log(error);
    })
});



app.listen(2000, ()=> {
    console.log(`App is listening at port 2000`);
})