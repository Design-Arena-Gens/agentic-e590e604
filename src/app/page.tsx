
import LeadsList from '@/components/LeadsList';
import TasksList from '@/components/TasksList';
import InteractionsList from '@/components/InteractionsList';
import CreateLeadForm from '@/components/CreateLeadForm';
import CreateTaskForm from '@/components/CreateTaskForm';
import LogInteractionForm from '@/components/LogInteractionForm';
import { Lead, Task, Interaction } from '@/data/types';
import { leads, tasks, interactions } from '@/data/mock';

async function getLeads(): Promise<Lead[]> {
  return new Promise((resolve) => resolve(leads));
}

async function getTasks(): Promise<Task[]> {
  return new Promise((resolve) => resolve(tasks));
}

async function getInteractions(): Promise<Interaction[]> {
  return new Promise((resolve) => resolve(interactions));
}


export default async function Home() {
  const leadsData = await getLeads();
  const tasksData = await getTasks();
  const interactionsData = await getInteractions();

  return (
    <main className="bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <LeadsList leads={leadsData} />
          </div>
          <div className="space-y-6">
            <CreateLeadForm />
            <CreateTaskForm />
            <LogInteractionForm />
          </div>
          <div className="md:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TasksList tasks={tasksData} />
              <InteractionsList interactions={interactionsData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
