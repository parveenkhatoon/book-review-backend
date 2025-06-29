// import Redis from 'ioredis';
// import dotenv from 'dotenv';
// dotenv.config();
// const redis = new Redis({
//   host: process.env.REDIS_HOST,
//   port: Number(process.env.REDIS_PORT),
// });
// redis.on('connect', () => console.log('Redis connected'));
// redis.on('error', (err) => console.error('Redis error:', err));

import { createClient } from 'redis';

const client =  createClient({
    username: 'default',
    password: 'lVmx65iNlASG03htlPBYluqvZcrWrPna',
    socket: {
        host: '',
        port: 11786
    }
});

client.on('error', (err) => {
  console.error('Redis Client Error', err);
});

export const connectRedis = async () => {
  if (!client.isOpen) {
    await client.connect();
    console.log('Redis Connected');
  }
};

export default client;
