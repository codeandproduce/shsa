const nodemailer = require('nodemailer');

var mailing = (name, email, subject, message) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port:25,
    auth:{
      user: 'management@shsa.co',
      pass: process.env.EMAIL_AUTH_PW
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  let HelperOptions = {
    from: `"${name}" <${email}`,
    to: 'management@shsa.co',
    subject: subject,
    text: `
    This was sent from: ${email}:

    ${message}
    `
  };
  return new Promise((resolve, reject) => {
    console.log(HelperOptions);
      transporter.sendMail(HelperOptions, (error, info) => {
      if(error){
        return reject();
      }
      resolve();
      console.log("The message sent");
      console.log(info);
    });
  });
}

module.exports = {mailing};
