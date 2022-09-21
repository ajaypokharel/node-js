const express = require('express');
const router = express.Router();

router.get('//', (req, res) => {   
    res.send(`<h1>Fetching Students list...</h1>`);
});

router.get('/1', (req, res) => {
    user_1 = {
        "ID": "1",
        "Name": "Senpai",
        "Gender": "1",
        "Class": "32",
        "Seat": "15",
        "Club": "0",
        "Persona": "1",
        "Crush": "0",
        "BreastSize": "0",
        "Strength": "0",
        "Hairstyle": "1",
        "Color": "Black",
        "Eyes": "Black",
        "EyeType": "Default",
        "Stockings": "None",
        "Accessory": "0",
        "ScheduleTime": "7_7_8_13.01_13.375_15.5_16_17.25_99_99",
        "ScheduleDestination": "Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Clean_Hangout_Locker_Exit",
        "ScheduleAction": "Stand_Stand_Read_Sit_Eat_Sit_Clean_Read_Shoes_Stand",
        "Info": "An average student. \n \n Average grades, average looks, average life... \n \n I'm not sure what you see in him."
      }
     
    res.send(JSON.stringify(user_1, null, 3));
});

module.exports = router;