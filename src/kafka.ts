import { Kafka } from 'kafkajs';
import * as dotenv from 'dotenv';

dotenv.config();

export const kafka = new Kafka({
  clientId: 'ts-node-kafkajs-started',
  brokers: ['localhost:9092'],
});
