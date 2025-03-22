import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold mb-8">
        Hello World! 👋
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Welcome to my first GitHub project
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/HolmgrenMark/first-project-on-github"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          View on GitHub
        </a>
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Learn Next.js
        </a>
      </div>
    </main>
  );
}
