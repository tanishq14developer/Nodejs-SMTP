const nodemailer = require('nodemailer');



const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "your_user",
      pass: "your_pass"
    }
  });

  const val = Math.floor(1000 + Math.random() * 9000);


  let  message = `Hello there we are working on this hope you are doing well and you opt in ${val}`; // Here you can replace the message with your HTML code.
 
  const  mailOptions = {
    from: process.env.EMAIL_FROM,
    to: "tanishq.happy@gmail.com", // the user email
    subject: ' Reset your Password',
    html: `<h4>Reset Password</h4>
                   ${message}`
   };
 
 
  transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
});
 
 