import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'Email',
        pass: "Password"
    }
})

export default async function sendEmail(recipient, subject, content, isHtml) {
    if (!recipient || !subject || !content || isHtml == null) {
      return "Some information is missing!";  // Return a meaningful message
    }
  
    try {
      const info = await transporter.sendMail({
        to: recipient,
        subject: subject,
        [isHtml ? 'html' : 'text']: content
      });
      return "Email Sent Successfully!";  // Return success message
    } catch (err) {
      throw err;  // Re-throw the error for higher-level handling
    }
  }
