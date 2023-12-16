// pages/dashboard.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-2">
            <Head>
                <title>Employee of the Year Dashboard</title>
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-4xl font-bold mb-6">Employee of the Year Dashboard</h1>

                <div className="w-full max-w-xs">
                    <ul className="flex flex-col items-center">
                        <li className="mb-4">
                            <Link href="/vote">
                                <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                                    Vote Now
                                </div>
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link href="/results">
                                <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                                    View Results
                                </div>
                            </Link>
                        </li>
                        {/* Add more links or buttons for other features as needed */}
                    </ul>
                </div>
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                <Link href="/">
                    <div className="text-blue-600 hover:underline cursor-pointer">
                        Go back to Home
                    </div>
                </Link>
            </footer>
        </div>
    );
}
