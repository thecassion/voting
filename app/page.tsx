// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2">
      <Head>
        <title>Employee of the Year Voting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">Employee of the Year Voting!</span>
        </h1>

        <p className="mt-3 text-2xl">
          Cast your vote and make a difference!
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/vote">
            <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 cursor-pointer">
              <h3 className="text-2xl font-bold">Vote Now &rarr;</h3>
              <p className="mt-4 text-xl">
                Participate in the voting process.
              </p>
            </div>
          </Link>

          <Link href="/results">
            <div className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600 cursor-pointer">
              <h3 className="text-2xl font-bold">View Results &rarr;</h3>
              <p className="mt-4 text-xl">
                See the current voting results.
              </p>
            </div>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Powered by <a href="https://nextjs.org" className="ml-1">Next.js</a>
      </footer>
    </div>
  )
}
