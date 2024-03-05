
import { TwitterApi} from "twitter-api-v2";
//clentSecret = 0p9wnpOjLn__27_4-vFMOlhmjBehvVTXVz5lP4csdulEpBfbqQ
//clientId= TVhycWN3UERzbmhmbmVLZ0k2c2c6MTpjaQ
const client = new TwitterApi({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_SECRET,
}) 

const rwClient =  client.readWrite

export default rwClient