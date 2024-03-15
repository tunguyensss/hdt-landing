"use client";

import TextArea from "@/components/form/text-area";
import TextInput from "@/components/form/text-input";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface ContactFormProps {
  dict: any;
}
export default function ContactForm({ dict }: ContactFormProps) {
  const [loading, setLoading] = useState(false);

  const methods = useForm();

  const handleSubmit = (data: any) => {
    console.log("🚀 ~ handleSubmit ~ data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onClick={methods.handleSubmit(handleSubmit)}>
        <div className="flex flex-wrap flex-row -mx-4">
          <div className="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
            <label className="inline-block mb-2" htmlFor="name">
              {dict.contact_us.form.name}
            </label>
            <TextInput name="name" />
          </div>
          <div className="flex-shrink w-full max-w-full md:w-1/2 px-4 mb-6">
            <label className="inline-block mb-2" htmlFor="email">
              {dict.contact_us.form.email}
            </label>
            <TextInput name="email" type="email" inputMode="email" />
          </div>
        </div>
        <div className="mb-6">
          <label className="inline-block mb-2" htmlFor="subject">
            {dict.contact_us.form.subject}
          </label>
          <TextInput name="subject" type="text" />
        </div>
        <div className="mb-6">
          <label className="inline-block mb-2" htmlFor="messages">
            {dict.contact_us.form.message}
          </label>
          <TextArea name="messages" type="text" />
        </div>
        <div className="text-center mb-6">
          <button
            type="submit"
            className="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border border-black hover:text-white hover:ring-0 focus:outline-none focus:ring-0"
          >
            {dict.contact_us.form.send_message}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
