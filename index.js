// Mail queue 
const { sendMailQueue, quotationQueue } = require('./queues');

// Wait 5 seconds before process and try to run 3 times
const jobOptions = {
    delay: 5000,
    attempts: 3,
};

// Add email send job to queue
sendMailQueue.add({}, jobOptions);

// Cron-based job
// Repeat quotation job at every minute from 8-17 hours on business days (Monday to Friday)
quotationQueue.add({}, { repeat: { cron: '* 8-17 * * 1-5' }});
