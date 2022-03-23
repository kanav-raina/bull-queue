// import Queue from 'bull';
// import {sendMailJob }from '../jobs';
// import {config} from "@/config";

// // Create mail queue
// export const sendMailQueue = new Queue('sendMailQueue', config.redis.url);

// // Add function to process send mail job queue
// sendMailQueue.process(sendMailJob);

const Queue = require('bull');
const sendMailJob = require('../jobs/sendMail');

// Create mail queue
const sendMailQueue = new Queue('sendMailQueue', "redis://127.0.0.1:6379");

// Add function to process send mail job queue
sendMailQueue.process(sendMailJob);

module.exports = sendMailQueue;