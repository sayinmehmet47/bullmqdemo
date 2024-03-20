import { NextFunction } from 'express';
import { ExpressAdapter } from '@bull-board/express';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { createBullBoard } from '@bull-board/api';
import { addJobToQueue, myQueue } from './queue';

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
  queues: [new BullMQAdapter(myQueue)],
  serverAdapter: serverAdapter,
});

// server.js
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json()); // Middleware to parse JSON bodies

// Your BullMQ setup goes here

app.get('/', (req, res) => {
  res.send('Express server is running.');
});

// server.js (continued)
app.post('/addJob', async (req, res, next: NextFunction) => {
  console.warn(req.body);
  const { jobData } = req.body;

  try {
    const job = await addJobToQueue(jobData);
    res.json({ jobId: job.id });
    return next();
  } catch (error) {
    console.error(`Error adding job to the queue: ${error}`);
    res.status(500).send('Failed to add job to the queue.');
  }
});

app.use('/admin/queues', serverAdapter.getRouter());

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
  console.log(
    `Admin queues listening at http://localhost:${port}/admin/queues`
  );
});
