// export * from "./sendMail";
// export * from "./quotation";

module.exports = {
    sendMailQueue: require('./sendMail'),
    quotationQueue: require('./quotation'),
};
