// Maybe have a helper - or two 😊
import express from "express";

const App = express();

// Paths 🔗
App.get('/', (req, res) => {
    res.send('Yini Server Running!');
});

App.get('/Teams/:Team_ID', (req, res) => {
    res.send("Hi");
});

App.get('/Teams', (req, res) => {
    res.send("All Yini Teams");
})


// Can I know where the server is?
App.listen(9200, () => {
    console.log("Working on http://localhost:9200 💚");
});