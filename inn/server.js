const cors=require('cors');
const express=require('express');
const app = express();

const port=4001;

const server=require('http').createServer(app);

app.use(cors({
    origin:['http://localhost:4200'],
    "methods":"GET,PUT,POST",
    "preflightContinue":false,
    "optionSuccessStatus":204,
    credentials:true
}));

server.listen(process.env.PORT || 4001, () => console.log('server is running on port 4001'));
