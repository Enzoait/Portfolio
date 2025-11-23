import { getDictionary } from "../../../utils/dictionaries";
import Header from "@/components/Header";
import { LightRays } from "@/components/ui/light-rays";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormValues, submitForm } from "../../../utils/submitForm";
import { sendMail } from "@/utils/mail/sendMail";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  function handleSubmit(): void {
    var formValues : Promise<FormValues> = submitForm();
    formValues.then((value) => {
      sendMail(value.fullName, value.email, value.message, value.company);
    });
  }

  return (
    <>
      <Header params={params} />
      {/* Wrap background and content so LightRays can span full page height */}
      <div className="relative w-full items-center justify-center flex min-h-screen pt-20">
        <LightRays className="-z-10" length="100%" />
        <div className="flex flex-col self-center w-[50%] justify-center">
          <form>
            <FieldGroup>
              <FieldSet>
                <FieldLegend>Contact</FieldLegend>
                <FieldDescription>
                  Want to get in touch? Fill out the form below to send me an
                  email!
                </FieldDescription>
                <FieldGroup>
                  <div className="flex justify-between gap-3">
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                        Full Name *
                      </FieldLabel>
                      <Input
                        id="checkout-7j9-card-name-43j"
                        placeholder="John Doe"
                        name="name"
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                        Email *
                      </FieldLabel>
                      <Input
                        id="checkout-7j9-card-name-43j"
                        placeholder="john.doe@example.com"
                        name="mail"
                        required
                      />
                    </Field>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Company
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
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
                    <FieldLabel htmlFor="checkout-7j9-optional-comments">
                      Message *
                    </FieldLabel>
                    <Textarea
                      id="checkout-7j9-optional-comments"
                      placeholder="Write your message here..."
                      className="resize-none overflow-y-auto overflow-x-hidden"
                      name="message"
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
              <Field orientation="horizontal">
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
    </>
  );
}
