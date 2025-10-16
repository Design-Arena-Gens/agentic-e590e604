'use client';

import { Lead } from '@/data/types';
import Link from 'next/link';

export default function LeadsList({ leads }: { leads: Lead[] }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Leads</h2>
      <ul className="divide-y divide-gray-200">
        {leads.map((lead) => (
          <li key={lead.id} className="py-3 hover:bg-gray-50">
            <Link href={`/leads/${lead.id}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-medium text-gray-900">{lead.name}</p>
                  <p className="text-sm text-gray-500">{lead.email}</p>
                </div>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  lead.status === 'new' ? 'bg-blue-100 text-blue-800' :
                  lead.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                  lead.status === 'qualified' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {lead.status}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}