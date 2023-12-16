// pages/results.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Results() {
    // Dummy data - replace this with actual data from your backend
    const voteResults = [
        { employeeName: 'Employee 1', votes: 150 },
        { employeeName: 'Employee 2', votes: 120 },
        { employeeName: 'Employee 3', votes: 90 },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-2">
            <Head>
                <title>Voting Results</title>
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-4xl font-bold mb-6">Employee of the Year Voting Results</h1>

                <div className="w-full max-w-md">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Employee</th>
                                <th className="px-4 py-2">Votes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {voteResults.map((result, index) => (
                                <tr key={index} className="bg-gray-10">
                                    <td className="border px-4 py-2">{result.employeeName}</td>
                                    <td className="border px-4 py-2">{result.votes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                <Link href="/">
                    <div className="text-blue-600 hover:underline">Go back to Home</div>
                </Link>
            </footer>
        </div>
    );
}
