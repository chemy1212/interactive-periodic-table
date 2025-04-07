
import React from 'react';
import elements from '../data/elements.json';

export default function PeriodicTable({ onSelect }) {
  return (
    <div className="periodic-table">
      {elements.map((el) => (
        <div
          key={el.number}
          className="element"
          onClick={() => onSelect(el)}
        >
          <strong>{el.symbol}</strong>
          <small>{el.number}</small>
        </div>
      ))}
    </div>
  );
}
