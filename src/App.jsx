
import React, { useState } from 'react';
import PeriodicTable from './components/PeriodicTable';
import ElementInfo from './components/ElementInfo';
import './App.css';

export default function App() {
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <div className="app">
      <h1>인터랙티브 주기율표</h1>
      <div className="container">
        <PeriodicTable onSelect={setSelectedElement} />
        <ElementInfo element={selectedElement} />
      </div>
    </div>
  );
}
