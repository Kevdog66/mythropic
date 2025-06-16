import Header from '../../components/Header';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">Our Solutions</h1>
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          We are currently developing innovative solutions to help drive AI-driven success across industries.
          More details will be shared here soon.
        </p>
      </main>
    </div>
  );
}
