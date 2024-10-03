import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.PASSMAIL,
      pass: process.env.PASSKEY,
    },
  });

  // Define the email options
  const mailOptions = {
    from: process.env.PASSMAIL,
    to: options.to,
    subject: options.subject,
    text: options.text,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email sending failed due to internal server error"); // You can also log this error message
  }
};
