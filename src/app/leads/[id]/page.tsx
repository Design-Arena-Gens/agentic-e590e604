
'use client';

import { Lead, Task, Interaction } from '@/data/types';
import { leads, tasks, interactions } from '@/data/mock';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function LeadDetailsPage() {
  const [lead, setLead] = useState<Lead | null>(null);
  const [leadTasks, setLeadTasks] = useState<Task[]>([]);
  const [leadInteractions, setLeadInteractions] = useState<Interaction[]>([]);
  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    const foundLead = leads.find((l) => l.id === id);
    if (foundLead) {
      setLead(foundLead);
      setLeadTasks(tasks.filter((t) => t.leadId === id));
      setLeadInteractions(interactions.filter((i) => i.leadId === id));
    }
  }, [id]);

  if (!lead) {
    return (
      <main className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Lead not found</h1>
          <Link href="/" className="text-indigo-600 hover:text-indigo-900">
            &larr; Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-indigo-600 hover:text-indigo-900">
            &larr; Back to Dashboard
          </Link>
        </div>
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{lead.name}</h1>
          <p className="text-lg text-gray-500">{lead.email}</p>
          <p className="text-lg text-gray-500">{lead.phone}</p>
          <span className={`mt-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${
            lead.status === 'new' ? 'bg-blue-100 text-blue-800' :
            lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
            lead.status === 'qualified' ? 'bg-green-100 text-green-800' :
            'bg-red-100 text-red-800'
          }`}>
            {lead.status}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tasks</h2>
            <div className="bg-white shadow rounded-lg p-4">
              <ul className="divide-y divide-gray-200">
                {leadTasks.map((task) => (
                  <li key={task.id} className="py-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`text-lg font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>{task.title}</p>
                        <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                      </div>
                      <input type="checkbox" checked={task.completed} readOnly className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Interactions</h2>
            <div className="bg-white shadow rounded-lg p-4">
              <ul className="divide-y divide-gray-200">
                {leadInteractions.map((interaction) => (
                  <li key={interaction.id} className="py-3">
                    <p className="text-sm font-medium text-gray-900">{interaction.type} on {interaction.date}</p>
                    <p className="text-sm text-gray-500">{interaction.notes}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
