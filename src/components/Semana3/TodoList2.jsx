import React from 'react';

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList2() {
  return (
    <div style={person.theme} className="todo-list">
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
      <style jsx>{`
        .avatar {
          border-radius: 50%;
          width: 100px;
          height: 100px;
        }
        .todo-list {
          padding: 20px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
