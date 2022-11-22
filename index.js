const express = require('express')
const app = express()
const cloudinary = require('cloudinary').v2

cloudinary.config({
    secure: true
  });
  
// Log the configuration
console.log(cloudinary.config());

app.get('/', async (req, res) => {
    try {
        const resultA = await cloudinary.uploader.upload('https://docs.google.com/uc?export=download&id=1siktRiZKgIVry_toIQraLXNaBEYLjYWh',
        { pages: true },
        function (error, result) { 
            console.log(result, error); 
        });
    } catch (error) {
        console.log("error: ", error);
    }

    res.json("success")
})




app.listen(8081, () => { console.log("On port") })
