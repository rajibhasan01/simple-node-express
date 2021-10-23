const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello I am rajib hasan to learn express');
})


const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '0178888881' },
    { id: 1, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '0178888881' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '0178888881' },
    { id: 3, name: 'Soniya', email: 'Soniya@gmail.com', phone: '0178888881' },
    { id: 4, name: 'Susmita', email: 'Susmita@gmail.com', phone: '0178888881' },
]


app.get('/users', (req, res) => {
    const search = (req.query.search);
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    }
    else {
        res.send(users);
    }

});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]

    res.send(user)

    console.log(req.params.id);

});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'Oranges', 'banana'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');

})

app.listen(port, () => {
    console.log('Listening to port', port);
})