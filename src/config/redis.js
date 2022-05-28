import redis from "redis";

const client = redis.createClient({
  host: "localhost",
  port: "6379",
  //password: REDIS_PASSWORD,
});

//client.on("connect", () => {
//  console.log("Connected to redis");
//});

export { client };
