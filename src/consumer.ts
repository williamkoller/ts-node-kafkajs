import { kafka } from './kafka';

const run = async () => {
  const consumer = kafka.consumer({
    groupId: 'ts-node',
  });
  await consumer.connect();
  await consumer.subscribe({ topic: 'TS_NODE_KAFKAJS', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, message, partition }) => {
      console.log({
        topic,
        partition,
        value: message.value?.toString(),
        offset: Number(message.offset),
      });
    },
  });
};

run().catch(console.error);
