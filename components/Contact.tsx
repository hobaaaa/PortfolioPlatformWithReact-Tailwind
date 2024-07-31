"use client";

import { FormEvent, useState, ChangeEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!, // EmailJS servis ID'niz
        process.env.NEXT_PUBLIC_TEMPLATE_ID!, // EmailJS şablon ID'niz
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // EmailJS public key'iniz
      );

      if (result.status === 200) {
        setResponseMessage("Mesajınız başarıyla gönderildi!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("FAILED...", error);
      setResponseMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-4 pt-3 container mx-auto">
      <div className="">
        <h1 className="text-3xl font-bold">İletişim</h1>
        <form onSubmit={handleSubmit} className="text-lg mt-4" ref={form}>
          <div className="grid grid-cols-3 mb-4">
            <label htmlFor="name" className="">
              Adınız:{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="col-span-2 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500"
            />
          </div>
          <div className="grid grid-cols-3 mb-4">
            <label htmlFor="email">E-posta: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="col-span-2 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500"
            />
          </div>
          <div className="grid grid-cols-3 mb-4">
            <label htmlFor="message">Mesajınız: </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="col-span-2 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500 "
            />
          </div>
          <div className="grid justify-end">
            {responseMessage && <p className="mb-3">{responseMessage}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {isLoading ? "Gönderiliyor..." : "Gönder"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
