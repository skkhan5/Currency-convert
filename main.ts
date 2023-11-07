import inquirer from "inquirer";

let conversation ={
    "PKR":{
        "USD":0.0044,
        "GBP":0.8037,
        "PKR":1
    },
    "GBP":{
        "USD":1.21,
        "GBP":1271.79,
        "PKR":1
    },
    "USD":{
     "PKR":225.50,
     "GBP":0.83,
     "USD":1


}}

const answer :{
    from: "USD"|"PKR"|"GBP",
    to:"USD"|"PKR"|"GBP",
    amount:number
}
    = await inquirer.prompt([

{
    type:"list",
    name:"from",
    choices:["PKR", "USD", "GBP"],
    message:"select your currency"

},
{
    type:"list",
    name:"to",
    choices:["PKR", "USD", "GBP"],
    message:"select your corvertion currency"

},
{
    type:"number",
    name:"amount",
    choices:["PKR", "USD", "GBP"],
    message:"enter your amount"

},





])


const {from, to,amount}= answer

if (from && to && amount) {
   let result= conversation[from][to]*amount;
   console.log(`your convertion from ${from}to ${to} is ${result}`)
}else{
    console.log("invalid input")
}







