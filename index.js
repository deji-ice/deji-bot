import express from "express";
import "dotenv/config";
import rwClient from "./twitterClient.js";
import { CronJob } from "cron";
import { error } from "console";

const port = 5000;
const app = express();

app.listen(port, () => console.log(`port is running on ${port}`));

const tweet = async () => {
  try {
    await rwClient.v2.tweet(
      "its 2:20pm! Good Morning! and have a very productive day! testing servers :)"
    );
    console.log("tweeted!");
  } catch (error) {
    console.error(error);
  }
};
// const btweet = async () => {
//   try {
//     await rwClient.v2.tweet(
//       "Yoo its 7:00am Nigerian time!(hopefully it's right this time lol) Good Morning @Aguda__David @ayomibaby @bimpeayorinde and have a very productive day! God Bless You!"
//     );
//   } catch (error) {
//     console.error(error);
//   }
// };

const job = new CronJob("45 14 * * *", () => {
  tweet();
});
// const bjob = new CronJob("00 07 * * *", () => {
//   btweet();
// });

// bjob.start();
job.start();

// tweet()

module.exports = app