import nodemailer from "nodemailer";
import { EmailConstants } from "../../constants/email";

const emailConstants = new EmailConstants();

export async function sendMail(
  name: string,
  email: string,
  message: string,
  company: string
): Promise<boolean> {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailConstants.USER,
        pass: emailConstants.PASS,
      },
    });

    const info = await transporter.sendMail({
      from: emailConstants.USER,
      to: emailConstants.RECIPIENT,
      subject: `[PORTFOLIO] ${name} ${
        company ? `de ${company}` : ""
      } vous a envoyé un message.`,
      text: `Adresse email de l'expéditeur : ${email}\n\n${message}`,
      html: `<h1>Nouveau message de ${name} ${
        company ? `de ${company}` : ""
      }</h1><p>Adresse email de l'expéditeur : ${email}</p><p>${message}</p>`,
    });

    console.log("Message envoyé :", info.messageId);
    return true;
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return false;
  }
}
