
import Link from 'next/link';

export default function HelpPage() {
  return (
    <main className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="text-indigo-600 hover:text-indigo-900">
            &larr; Back to Dashboard
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Help & Documentation</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-lg text-gray-500">This is a placeholder for the help and documentation page.</p>
        </div>
      </div>
    </main>
  );
}
