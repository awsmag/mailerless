const sender = process.env.SENDER;
const replyto = process.env.REPLYTO;

function sendHTMLEmail(mailer, email) {
  return mailer.sendEmail({
    "Destination": {
      "ToAddresses": email.recipient.split(",")
    },
    "Message": {
      "Body": {
        "Html": {
         "Charset": "UTF-8",
         "Data": `${email.body}`
        }
       },
       "Subject": {
        "Charset": "UTF-8",
        "Data": `${email.subject}`
       }
      },
    "Source": email.sender || sender,
    "ReplyToAddresses": email.replyto || replyto
  }).promise();
}

module.exports = {sendHTMLEmail};
