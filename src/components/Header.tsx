
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          <Link href="/">Sales CRM</Link>
        </h1>
        <nav className="space-x-4">
          <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Dashboard
          </Link>
          <Link href="/profile" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Profile
          </Link>
          <Link href="/settings" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Settings
          </Link>
          <Link href="/help" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Help
          </Link>
          <button
            onClick={() => alert('Logged out!')}
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}
