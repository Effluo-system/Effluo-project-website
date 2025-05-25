import React, { useState } from 'react';
import emailImg from '../../assets/email.png';

const ContactUsComponent = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:effluo.system@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-6">
        {/* Left: Image and Contact Details */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4">
          <img
            src={emailImg}
            alt="Contact Illustration"
            className="w-1/3 h-auto rounded-lg object-cover"
          />
          <div className="text-center px-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              For further queries, please reach us at:
            </p>
            <a
              href="mailto:effluo.system@gmail.com"
              className="text-sky-300 font-semibold text-sm hover:underline"
            >
              effluo.system@gmail.com
            </a>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Hope this project helped you in some manner. Thank you!
            </p>
            <p className="mt-1 text-gray-500 italic text-sm">– Team Effulo –</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full md:w-1/2 border border-gray-300 rounded-lg p-3">
          <h2 className="mb-2 text-2xl tracking-tight font-extrabold text-center md:text-left text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-3 font-light text-center md:text-left text-gray-500 dark:text-gray-400 text-base">
            Got a technical issue? Want to send feedback? Let us know.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@flowbite.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Let us know how we can help you"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="py-2 px-4 text-sm font-medium text-white rounded-lg focus:outline-none"
              style={{ backgroundColor: '#3dd9e3' }}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsComponent;
