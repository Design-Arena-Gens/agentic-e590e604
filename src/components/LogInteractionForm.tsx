
'use client';

import { useState } from 'react';

export default function LogInteractionForm() {
  const [type, setType] = useState<'email' | 'phone' | 'meeting'>('email');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    console.log({ type, notes });
    setType('email');
    setNotes('');
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Log Interaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value as 'email' | 'phone' | 'meeting')}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="meeting">Meeting</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Log Interaction
        </button>
      </form>
    </div>
  );
}
