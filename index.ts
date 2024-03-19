import Bull from 'bull';
import dotenv from 'dotenv';

dotenv.config();
const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

const redisOptions = {
  redis: {
    host: REDIS_HOST,
    port: Number(REDIS_PORT),
    password: REDIS_PASSWORD,
  },
};

const burgerQueue = new Bull('myqueue', redisOptions);

burgerQueue.process((payload, done) => {
  console.log('Preparing the burger!!!');
  setTimeout(() => {
    console.log('Burger ready!');
    done();
  }, 4000);
});

burgerQueue.add({
  bun: '🚀',
  cheese: '🍔',
  toppings: ['❤️', '🫁'],
});
