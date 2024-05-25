import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chat from './Chat';
import ContactList from './ContactList';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-secondary text-white">
          <h1 style={{ margin: '0' }}>Messenger</h1>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
              />
            </div>
            <div className="col-md-8">
              <Chat key={to.email} contact={to} />
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <Link to="/semana5" className="btn btn-secondary">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];
