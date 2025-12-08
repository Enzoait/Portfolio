"use server";

import { sendMail } from "@/utils/mail/sendMail";

export async function sendContactMail(formData: FormData): Promise<number> {
  const fullName = formData.get("name")?.toString() ?? "";
  const email = formData.get("mail")?.toString() ?? "";
  const message = formData.get("message")?.toString() ?? "";
  const company = formData.get("company")?.toString() ?? "";
  const messageHasLink = /https?:\/\/|www\./.test(message);
  const invalidEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (invalidEmail) {
    return 0;
  }
  if (messageHasLink) {
    return 1;
  }

  await sendMail(fullName, email, message, company);
  return 2;
}
