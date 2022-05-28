import redis from "redis";
import globalConfig from "../config/globalConfig";

const client = redis.createClient(globalConfig.REDIS_URL);

//client.on("connect", () => {
//  console.log("Connected to redis");
//});

export { client };
