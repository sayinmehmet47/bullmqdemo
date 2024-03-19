# BullMQ Demo

This is a simple demo application that shows how to use BullMQ, a popular job processing library for Node.js, with a user interface.

## Prerequisites

- Node.js (version 14 or higher)
- Redis (version 6 or higher)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/bullmqdemo.git
cd bullmqdemo
Install the dependencies:
```



```bash
npm install
Start the Redis server:

```bash
docker run -p 6379:6379 -d redis:6.2.6
Or, if you have Redis installed locally, start the Redis server using your preferred method.

Run the Express server and worker:

```bash
node start.js
This command will run both the server and the worker concurrently.

Access the BullMQ UI:

Open your browser and navigate to http://localhost:3000/admin/queues.

Usage
Adding Jobs
To add a job to the queue, send a POST request to http://localhost:3000/addJob with a JSON body containing the job data:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"jobData": "test"}' http://localhost:3000/addJob

Viewing Jobs
To view the jobs in the queue, access the BullMQ UI at http://localhost:3000/admin/queues.

Worker
The worker is responsible for processing the jobs in the queue. It listens for new jobs and processes them as they become available.

Technologies Used
BullMQ: A popular job processing library for Node.js.
Express: A web framework for Node.js.
TypeScript: A statically typed superset of JavaScript.
Redis: An in-memory data structure store, used as a database, cache, and message broker.
WebSocket: A protocol for real-time communication between a client and a server.
````
