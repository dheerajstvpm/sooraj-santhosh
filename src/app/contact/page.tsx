import React from 'react';
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-8">
        Have a question or want to get in touch? Fill out the form below.
      </p>
      <ContactForm />
    </Layout>
  );
};

export default Contact;