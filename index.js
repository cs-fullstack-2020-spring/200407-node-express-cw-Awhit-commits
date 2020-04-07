//Setting up dependecies to run server
const express = require('express');

//Setting a port to 5000 for localhost
const port = 5000;

const app = express();
studentArray = [{name:"Andrew",confidence:"High"},{name:"Jared",confidence:"Low"}]



//Exercise 1

//Set root path to show text on the page
app.get('/' ,(req,res) =>{
    res.send('Welcome to my node + express server')
})

//Exercise 2 
//Define a variable and set it to my name
app.get('/displayName',(req,res)=>{
    let userName = "Andrew"
    res.send(`My name is ${userName}`)
})

//Exercise 3
//Route using params  
app.get('/student/:id',(req,res)=>{
    studentArray.forEach((student,index) => {
        if (index == req.params.id){
            res.send(`This student name is ${student.name} and their confidence is ${student.confidence}`)
        }
        
    });

})
//Exercise 4

//Route displaying all of the elements in studentArray
app.get('/allStudents',(req,res) =>{
    // studentArray.map((student) =>{
    //     res.send(`Student Name: ${student.name} Student Confidence: ${student.confidence}`)

    // })
    res.send(studentArray)
})

app.listen(port,console.log(`Server is listening on localhost: ${port}`))