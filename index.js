const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('YAY oppphh !! my sencond code for bakcend')
})

const users = [
    {id: 1, name: 'shabnor', email: 'shabnor@gmail.com', phone: '018888888'},
    {id: 2, name: 'bobita', email: 'bobita@gmail.com', phone: '018888888'},
    {id: 3, name: 'jasim', email: 'jasim@gmail.com', phone: '018888888'},
    {id: 4, name: 'bonani', email: 'bonani@gmail.com', phone: '018888888'},
    {id: 5, name: 'kakoli', email: 'kakoli@gmail.com', phone: '018888888'},
    {id: 6, name: 'siam', email: 'siam@gmail.com', phone: '018888888'},
    {id: 7, name: 'tonmoy', email: 'tonmoy@gmail.com', phone: '018888888'},
    {id: 8, name: 'sipi', email: 'lipi@gmail.com', phone: '018888888'},
    {id: 9, name: 'sipi', email: 'tipi@gmail.com', phone: '018888888'},
]

app.get('/users', (req, res)=>{
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user=> user.name.toLowerCase().includes(search))
        res.send(matched)
    }else{
        res.send(users)
    }
})

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u=> u.id === id);
    res.send(user)
})

app.post('/user', (req, res)=>{
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})


const fruits = [
    'mango', 'jam', 'banana', 'sofeda', 'apple'
]

app.get('/fruits', (req, res)=>{
    res.send(fruits)
})

app.listen(port, ()=>{
    console.log('example app port', port );
})