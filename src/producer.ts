import { partitioners } from './partitioners';
import { kafka } from './kafka';
import { randomUUID } from 'node:crypto';

const send = async () => {
  const producer = kafka.producer({
    createPartitioner: partitioners.LegacyPartitioner,
  });
  await producer.connect();

  await producer.send({
    topic: 'TS_NODE_KAFKAJS',
    messages: [
      {
        key: randomUUID(),
        value: 'Hello, William Koller',
      },
    ],
  });

  await producer.disconnect();
};

send().catch(console.error);
