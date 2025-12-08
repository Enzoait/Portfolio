"use client";

import React from "react";

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { sendContactMail } from "../contact/action";
import { useRouter } from "next/navigation";

export function ContactForm({lang}: {lang: string}) {
  const router = useRouter();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    var success = await sendContactMail(formData);

    if (!success) {
      alert("A link has been detected in your message. Please remove any links and try again.");
      return;
    }

    router.replace(`/${lang}/contact`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Contact</FieldLegend>
          <FieldDescription>
            Want to get in touch? Fill out the form below to send me an email!
          </FieldDescription>
          <FieldGroup>
            <div className="flex justify-between gap-3">
              <Field>
                <FieldLabel htmlFor="contact-full-name">Full Name *</FieldLabel>
                <Input
                  id="contact-full-name"
                  placeholder="John Doe"
                  name="name"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="contact-email">Email *</FieldLabel>
                <Input
                  id="contact-email"
                  placeholder="john.doe@example.com"
                  name="mail"
                  required
                />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="contact-company">Company</FieldLabel>
              <Input
                id="contact-company"
                placeholder="Example"
                name="company"
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="contact-message">Message *</FieldLabel>
              <Textarea
                id="contact-message"
                placeholder="Write your message here..."
                className="resize-none overflow-y-auto overflow-x-hidden"
                name="message"
                required
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Field orientation="horizontal">
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}