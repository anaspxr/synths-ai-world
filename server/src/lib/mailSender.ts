import { CustomError } from "./customErrors";
import { ENV } from "../configs/env";
import { Resend } from "resend";

const resend = new Resend(ENV.RESEND_API_KEY);

resend.apiKeys.create({ name: "Production" });

const mailSender = async (email: string, title: string, body: string) => {
  try {
    await resend.emails.send({
      from: "synths@contact.anasp.me",
      to: email,
      subject: title,
      html: body,
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.log(error);
    }
    throw new CustomError("Error while sending Email", 500);
  }
};

const noReplyMessage = `<div style="font-family: Arial, sans-serif; text-align: center">
  <p>
    This email is sent from an unattended mail box. Please do not reply to this
    mail. For support, contact me at anaspappadan@gmail.com.
  </p>
</div>
`;

export const sendRegisterOtpMail = async (email: string, otp: string) => {
  await mailSender(
    email,
    "Verify your email",
    `
    <div style="font-family: Arial, sans-serif; text-align: center;">
      <h2>Welcome to my Reddit clone!!</h2>
      <p>Please enter the following OTP to verify your email:</p>
      <h1 style="color: #5D6CEA;">${otp}</h1>
      <p>expires in 10 minutes</p>
      <br>
      <br>
      ${noReplyMessage}
    </div>
    `
  );
};

export const sendChangePasswordMail = async (email: string, otp: string) => {
  await mailSender(
    email,
    "Change Password",
    `
    <div style="font-family: Arial, sans-serif; text-align: center;">
      <h2>Reset your password</h2>
      <p>Please enter the following OTP to reset your password:</p>
      <h1 style="color: #FF4500;">${otp}</h1>
      <p>expires in 5 minutes</p>
    </div>
    `
  );
};

export const sendDeleteAccountMail = async (email: string) => {
  await mailSender(
    email,
    "Account Deleted",
    `
    <div style="font-family: Arial, sans-serif; text-align: center;">
      <h2>Your reddit-clone account has been deleted</h2>
      <p>Sorry to see you go. If you didn't request this, please contact us immediately.</p>
    </div>
    `
  );
};

export default mailSender;
