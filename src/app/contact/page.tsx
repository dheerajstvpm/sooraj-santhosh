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
    <div id="contact-page" className="min-h-[calc(100dvh-124px)] bg-base-200 text-center flex justify-center py-10">
      <div className="flex flex-col gap-10 justify-center items-stretch">
        <h1 className="text-5xl font-bold">Contact Me</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div> */}
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
          {/* <div className="form-control">
              <label htmlFor="subject" className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input input-bordered w-full"
                required
              />
            </div> */}
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
          {/* <div className="form-control">
              <label htmlFor="message" className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered h-24 w-full"
                required
              ></textarea>
            </div> */}
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
