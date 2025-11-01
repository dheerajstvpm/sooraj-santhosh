"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, subject, message } = formData;
    const mailtoLink = `mailto:sslive@soorajsanthosh.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}

${message}`)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      id="contact-page"
      className="h-lvh text-center flex flex-col items-center justify-center py-10"
    >
      <div className="flex flex-col gap-10 justify-center items-stretch">
        <h1 className="text-5xl font-bold">Get in touch</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="name" className="floating-label form-control">
            <span>Name</span>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="input input-md"
              required
            />
          </label>
          <label htmlFor="subject" className="floating-label form-control">
            <span>Subject</span>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="input input-md"
              required
            />
          </label>
          <label htmlFor="message" className="floating-label form-control">
            <span>Message</span>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="textarea textarea-md"
              required
            />
          </label>
          <button type="submit" className="btn btn-outline w-full rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
