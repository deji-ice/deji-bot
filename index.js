require('dotenv').config();
const rwClient = require("./twitterClient");
const CronJob = require("cron").CronJob;


const tweet = async ()=>{
    try {
        await rwClient.v2.tweet("its 11:40am! Good Morning! and have a very productive day!")
        console.log("tweeted!")
    } catch (error) {
        console.error(error)
    }
}
const btweet = async ()=>{
    try {
        await rwClient.v2.tweet("Yoo its 10:00am Nigerian time!(hopefully it's right this time lol) Good Morning @Aguda__David @ayomibaby @bimpeayorinde and have a very productive day! God Bless You!")
    } catch (error) {
        console.error(error)
    }
}


const job = new CronJob("40 11 * * *", ()=>{
    tweet()
})
const bjob = new CronJob("00 10 * * *", ()=>{
    btweet()
})

job.start();
bjob.start()
// tweet()