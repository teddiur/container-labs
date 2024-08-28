const keys = require("./keys");
const redis = require("redis");

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redistPort,
  retry_strategy: () => 1000,
});

const sub = redisClient.duplicate();

function fib(index) {
  if (index < 2) return 1;
  return fib(index - 2) + fib(index - 1);
}

sub.on("message", (channel, message) => {
  console.log("calculating " + message);
  const result = fib(parseInt(message));
  redisClient.hset("values", message, result);
  console.log("calculated " + message + " fib equals " + result);
});

sub.subscribe("insert");
