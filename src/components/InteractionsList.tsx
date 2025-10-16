'use client';

import { Interaction } from '@/data/types';

export default function InteractionsList({ interactions }: { interactions: Interaction[] }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Recent Interactions</h2>
      <ul className="divide-y divide-gray-200">
        {interactions.map((interaction) => (
          <li key={interaction.id} className="py-3">
            <p className="text-sm font-medium text-gray-900">{interaction.type} on {interaction.date}</p>
            <p className="text-sm text-gray-500">{interaction.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}