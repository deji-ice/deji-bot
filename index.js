require('dotenv').config();
const rwClient = require("./twitterClient");
const CronJob = require("cron").CronJob;


const tweet = async ()=>{
    try {

        await rwClient.v2.tweet("its 11:40am! Good Morning and have a very productive day!")
        console.log("tweeted!")
    } catch (error) {
        console.error(error)
    }
}

const job = new CronJob("40 11 * * *", ()=>{
    console.log("cron job is working")
    tweet()
})
job.start();
// tweet()