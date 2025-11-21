import nodemailer from "nodemailer";
import { google } from "googleapis";

// a mettre dans un fichier .env
const CLIENT_ID = "VOTRE_CLIENT_ID";
const CLIENT_SECRET = "VOTRE_CLIENT_SECRET";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "VOTRE_REFRESH_TOKEN";

export async function sendMailOAuth(
  name: string,
  mail: string,
  company: string,
  message: string
) : Promise<boolean> {
  try {
    const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  const accessToken = await oAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "votre-adresse@gmail.com",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken?.token || "",
    },
  });

  const info = await transporter.sendMail({
    from: "votre-adresse@gmail.com",
    to: "destinataire@example.com",
    subject: `${name} ${company != "" ? "de " + company : ""} vous a envoyé un message depuis votre portfolio.`,
    text: `${mail}\n${message}`,
  });

  console.log("Message envoyé :", info.messageId);
  return true;
  }
  catch (error) {
    console.error("Erreur lors de l'envoi du message :", error);
    return false;
  }
}
