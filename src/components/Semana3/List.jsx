import React from 'react';
import { people } from './data';
import { getImageUrl } from './utils';

export default function List() {
  const listItems = people.map(person => (
    <li key={person.id}>
      <img className="avatar" src={getImageUrl(person)} alt={person.name} />
      <div className="info">
        <p className="name"><b>{person.name}:</b></p>
        <p>{' ' + person.profession + ' known for ' + person.accomplishment}</p>
      </div>
    </li>
  ));
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
      <style jsx>{`
        .avatar {
          border-radius: 50%;
          width: 100px;
          height: 100px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .info {
          margin-left: 10px;
        }
        .name {
          font-size: 1.2em;
          margin: 0;
        }
        p {
          margin: 0;
        }
      `}</style>
    </article>
  );
}
