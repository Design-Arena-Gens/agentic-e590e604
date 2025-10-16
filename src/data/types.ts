
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'new' | 'contacted' | 'qualified' | 'lost';
}

export interface Interaction {
  id: string;
  leadId: string;
  date: string;
  type: 'email' | 'phone' | 'meeting';
  notes: string;
}

export interface Task {
  id: string;
  leadId: string;
  title: string;
  dueDate: string;
  completed: boolean;
}
