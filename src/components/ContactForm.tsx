
import { useState } from 'react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    // setTimeout(() => {
    //   toast.success('Your message has been sent!');
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    //   setIsSubmitting(false);
    // }, 1500);
    try {
      const res = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Your message has been sent!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error(data.error || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent1 focus:border-transparent"
          placeholder="Your name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent1 focus:border-transparent"
          placeholder="mail@example.com"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent1 focus:border-transparent"
          placeholder="Your message here..."
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full flex justify-center items-center"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

    </form>
  );
};

export default ContactForm;
