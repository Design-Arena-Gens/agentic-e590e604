'use client';

import { Task } from '@/data/types';

export default function TasksList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      <ul className="divide-y divide-gray-200">
        {tasks.map((task) => (
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
  );
}