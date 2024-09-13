// Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  text: string;
  imageUrl: string;
}

export function Card({ title, text, imageUrl }: CardProps) {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={imageUrl}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
