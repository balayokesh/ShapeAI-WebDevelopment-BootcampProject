const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.post('/', (req, res) => {
    let n1 = Number(req.body.num1);
    let n2 = Number(req.body.num2);
    res.send("The answer is:" + n1 / (n2*n2));
});

app.listen(3000, () => {
    console.log(`Server started at port: 3000`);
});