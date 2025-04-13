import React, { useState } from 'react';

interface ContactUsProps {
    source: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ source }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Të dhënat e dërguara:
          Email: ${email}
          Username: ${username}
          Mesazhi: ${message}`);
      };
    
    return (
        <div className="contact-us-container">
        <h1>Na Kontaktoni</h1>
        <form onSubmit={handleSubmit}>
            <div  className="form-group">
                <label htmlFor="email">Email </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">

                <label htmlFor="message"> Message </label> 
                <textarea 
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </div>

            <button type="submit">Dergo</button>
        </form>
        </div>
    );
};

export default ContactUs;