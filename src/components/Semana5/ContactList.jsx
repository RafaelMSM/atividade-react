import React from 'react';

export default function ContactList({ contacts, selectedContact, onSelect }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.email}>
          <button
            onClick={() => onSelect(contact)}
            style={{
              fontWeight: contact === selectedContact ? 'bold' : 'normal'
            }}
          >
            {contact.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
