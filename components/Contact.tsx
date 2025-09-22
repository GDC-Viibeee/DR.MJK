// Contact.tsx
import React, { useState } from 'react';
import { send } from '@emailjs/browser';

type FormData = { name: string; email: string; subject: string; message: string };

const EMAILJS_SERVICE_ID = 'service_zxgbd4q';
const EMAILJS_TEMPLATE_ID = 'template_8b3hf9q';
const EMAILJS_PUBLIC_KEY = 'zpkOKnqLFEDdMPvk5';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const result = await send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      console.log('EmailJS result:', result);
      setStatus('Thank you — message sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('Something went wrong — please try again later.');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-900 bg-opacity-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-300 font-rubik mb-12">
          Contact Me
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800 bg-opacity-40 p-8 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-6">
              For inquiries, collaborations, or consultations, please use the form or contact me directly.
            </p>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                jagadeshkumar.mannam@gmail.com
              </p>
              <p className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +91 9573897644
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"/>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"/>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"></textarea>

            <button type="submit" disabled={loading} className="w-full px-6 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-400 transition duration-300">
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status && <p className={`text-center mt-4 ${status.startsWith('Thank') ? 'text-green-400' : 'text-red-400'}`}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
