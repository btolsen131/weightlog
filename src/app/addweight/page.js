'use client'
import { useState } from 'react';
import { redirect } from 'next/navigation';

export default function AddWeight() {
  const [datetime, setDatetime] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      var bodyObj = {
        "datetime":datetime,
        "weight":weight
      };
      console.log(bodyObj);
      const response = await fetch('/api/Weights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObj)
      });

      if (response.ok) {
        redirect('/');
      } else {
        throw new Error("Error posting weight");
      }

    } catch (error) {
      console.error('Error adding weight:', error);
      alert('Failed to add weight');
    }
  };

  return (
    <div>
      <h1>Add Weight</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date and Time:</label>
          <input type="date" value={datetime} onChange={(e) => setDatetime(e.target.value)} required />
        </div>
        <div>
          <label>Weight:</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        </div>
        <button type="submit">Add Weight</button>
      </form>
    </div>
  );
}
