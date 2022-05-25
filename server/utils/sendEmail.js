const nodemailer = require('nodemailer')
const nodemailerConfig = require('./nodemailerConfig')
const sgMail = require('@sendgrid/mail')

const sendEmailEthreal = async ({to,subject,html}) => {
    let testAccount = await nodemailer.createTestAccount();

    // Then connect to our service-- create transport and pass in the value
    const transporter = nodemailer.createTransport(nodemailerConfig);

    return transporter.sendMail({
        from: '"Md Murad 👻" <murad@example.com>', // sender address
        to,
        subject,
        html,
      });

}

const sendEmail = async ({to,subject,html}) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
   
    from: 'westlycanada@gmail.com',
    to,
    subject,
   
    html,
  }

  const info = await sgMail.send(msg)
  

}

module.exports = sendEmail