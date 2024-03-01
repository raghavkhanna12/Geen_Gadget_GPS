const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors')
const { spawn } = require('child_process');
const nodePickle = require('node-pickle');
const fs = require('fs');

const pickledData = fs.readFileSync('mobile.pkl');


app.use(cors({
    origin: '*',
    credentials: true,
}));


app.use(express.json())
app.post('/', function (req, res) {
    const { lat, long } = req.body;
    console.log(lat, long);
    const process = spawn('python', ["./Map.py"]);
    process.stdout.on('data', (data) => {
        console.log(`${data}`)
    })
    res.send("Hello")
})
app.post('/mobile', function (req, res) {
    const { weight } = req.body;
    const process = spawn('python', ["./Mobile.py", 140]);
    process.stdout.on('data', (data) => {
        console.log(`${data}`)
    })
    nodePickle.loads(pickledData)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
    res.send("Hello")
})
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))