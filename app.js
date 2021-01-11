const express = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


const app = express();
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const dbURI = "mongodb+srv://simon_bucko:bucino36@nodejstrial.wsvkl.mongodb.net/Node_tuts?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


app.get('/', (req, res) => {
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about', { title: "About" });
});

app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: "Create Blog" });
});
