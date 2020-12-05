const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.json())

const users = require('./routes/users')
const doctors = require('./routes/doctors')

// connect to database
mongoose.connect('mongodb+srv://sch:2311@cluster0.p2men.mongodb.net/covapp?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true,useFindAndModify:false})
    .then(()=> console.log('Connected MongoDB'))
    .catch(() => console.error('Could Not Connect'));

// api endpoint calling
app.use('/api/users',users)
app.use('/api/doctors',doctors)

const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Listening on Port ${port} ..`));