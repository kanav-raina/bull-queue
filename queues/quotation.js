// import Queue from 'bull';
// import {quotationJob} from '../jobs';
// import {config} from "@/config";

// export const quotationQueue = new Queue('quotationQueue', config.redis.url);

// quotationQueue.process(quotationJob);
const Queue = require('bull');
const quotationJob = require('../jobs/quotation');

const quotationQueue = new Queue('quotationQueue', "redis://127.0.0.1:6379");

quotationQueue.process(quotationJob);

module.exports = quotationQueue;

