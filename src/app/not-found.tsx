
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-indigo-600">404</h1>
        <p className="text-2xl md:text-3xl font-light text-gray-800 mt-4">
          Sorry, we couldn&apos;t find this page.
        </p>
        <p className="mt-4 text-gray-500">
          But don&apos;t worry, you can find plenty of other things on our homepage.
        </p>
        <Link href="/" className="mt-6 inline-block bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700">
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
