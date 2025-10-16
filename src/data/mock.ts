
import { Lead, Interaction, Task } from './types';

export const leads: Lead[] = [
  { id: '1', name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', status: 'new' },
  { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '098-765-4321', status: 'contacted' },
  { id: '3', name: 'Peter Jones', email: 'peter.jones@example.com', phone: '111-222-3333', status: 'qualified' },
];

export const interactions: Interaction[] = [
  { id: '1', leadId: '2', date: '2025-10-15', type: 'email', notes: 'Sent introductory email.' },
  { id: '2', leadId: '3', date: '2025-10-16', type: 'phone', notes: 'Had a discovery call.' },
];

export const tasks: Task[] = [
  { id: '1', leadId: '1', title: 'Follow up with John Doe', dueDate: '2025-10-20', completed: false },
  { id: '2', leadId: '2', title: 'Send proposal to Jane Smith', dueDate: '2025-10-18', completed: false },
  { id: '3', leadId: '3', title: 'Schedule a demo with Peter Jones', dueDate: '2025-10-22', completed: true },
];
