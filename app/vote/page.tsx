// pages/vote.tsx
'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Authenticator } from "@aws-amplify/ui-react";

export default function Vote() {
    const [selectedEmployee, setSelectedEmployee] = useState('');

    // Dummy data - replace this with actual data from your backend
    const employees = [
        { id: 'emp1', name: 'Employee 1' },
        { id: 'emp2', name: 'Employee 2' },
        { id: 'emp3', name: 'Employee 3' },
    ];

    const handleVote = () => {
        console.log('Voted for:', selectedEmployee);
        // Here, you would have logic to submit the vote to your backend
    };

    return (
        <Authenticator>
        <div className="min-h-screen flex flex-col items-center justify-center py-2">
            <Head>
                <title>Vote for Employee of the Year</title>
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-4xl font-bold mb-6">Vote for Employee of the Year</h1>

                <div className="w-full max-w-md">
                    {employees.map((employee) => (
                        <div key={employee.id} className="flex items-center mb-4">
                            <input
                                type="radio"
                                id={employee.id}
                                name="employee"
                                value={employee.id}
                                className="mr-2"
                                onChange={(e) => setSelectedEmployee(e.target.value)}
                            />
                            <label htmlFor={employee.id} className="cursor-pointer">
                                {employee.name}
                            </label>
                        </div>
                    ))}
                </div>

                <button
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleVote}
                    disabled={!selectedEmployee}
                >
                    Submit Vote
                </button>
            </main>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                <Link href="/">
                    <div className="text-blue-600 hover:underline">Go back to Home</div>
                </Link>
            </footer>
        </div>
        </Authenticator>
    );
}
