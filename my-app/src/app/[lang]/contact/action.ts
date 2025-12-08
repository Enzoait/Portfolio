"use server";

import { sendMail } from "@/utils/mail/sendMail";

export async function sendContactMail(formData: FormData): Promise<boolean> {

  const fullName = formData.get("name")?.toString() ?? "";
  const email = formData.get("mail")?.toString() ?? "";
  const message = formData.get("message")?.toString() ?? "";
  const company = formData.get("company")?.toString() ?? "";
  const messageHasLink = /https?:\/\/|www\./.test(message);
if (messageHasLink) {
    return false;
}

await sendMail(fullName, email, message, company);
return true;
}
