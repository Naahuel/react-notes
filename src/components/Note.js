import React from 'react';

const Note = ({ title, content }) => {
  return (
    <article className="Note">
      <h1>{title}</h1>
      <div className="content">
        {content}
      </div>
    </article>
  );
}

export default Note