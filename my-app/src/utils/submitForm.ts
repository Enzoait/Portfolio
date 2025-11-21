export type FormValues = {
    fullName: string;
    email: string;
    company: string;
    message: string;
};

export function submitForm(): Promise<FormValues> {
    const formEl = document.getElementById("myForm") as HTMLFormElement | null;
    return new Promise((resolve, reject) => {
        if (!formEl) return reject(new Error("Form not found"));

        const submitHandler = (e: Event) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;

            const nameInput = form.elements.namedItem("name") as HTMLInputElement | null;
            const mailInput = form.elements.namedItem("mail") as HTMLInputElement | null;
            const companyInput = form.elements.namedItem("company") as HTMLInputElement | null;
            const messageInput = form.elements.namedItem("message") as HTMLInputElement | null;

            const fullName = nameInput?.value ?? "";
            const email = mailInput?.value ?? "";
            const company = companyInput?.value ?? "";
            const message = messageInput?.value ?? "";

            formEl.removeEventListener("submit", submitHandler);
            resolve({ fullName, email, company, message });
        };

        // Prevent attaching multiple listeners if called more than once
        formEl.addEventListener("submit", submitHandler);
    });
}
