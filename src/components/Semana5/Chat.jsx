import React, { useState } from 'react';

export default function Chat({ contact }) {
  const [message, setMessage] = useState('');

  return (
    <div>
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button onClick={() => sendMessage(contact.email, message)}>
        Send to {contact.name}
      </button>
    </div>
  );
}

function sendMessage(email, message) {
  console.log(`Sending message to ${email}: ${message}`);
}
