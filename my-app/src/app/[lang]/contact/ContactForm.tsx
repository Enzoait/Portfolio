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
import { toast } from "sonner";

export function ContactForm({dict}: {dict: any}) {
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    var result = await sendContactMail(formData);

    if (result === 0) {
      toast.error(dict.alerts.invalidEmail);
      return;
    }
    else if (result === 1) {
      toast.error(dict.alerts.linkDetected);
      return;
    }

    toast.success(dict.alerts.messageSent);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Contact</FieldLegend>
          <FieldDescription>
            {dict.form.description}
          </FieldDescription>
          <FieldGroup>
            <div className="flex justify-between gap-3">
              <Field>
                <FieldLabel htmlFor="contact-full-name">{dict.form.name} *</FieldLabel>
                <Input
                  id="contact-full-name"
                  placeholder="John Doe"
                  name="name"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="contact-email">{dict.form.email} *</FieldLabel>
                <Input
                  id="contact-email"
                  placeholder="john.doe@example.com"
                  name="mail"
                  required
                />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="contact-company">{dict.form.company}</FieldLabel>
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
              <FieldLabel htmlFor="contact-message">{dict.form.messageTitle} *</FieldLabel>
              <Textarea
                id="contact-message"
                placeholder={dict.form.message}
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