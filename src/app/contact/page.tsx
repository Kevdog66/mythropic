import Header from '../../components/Header';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col items-center bg-black text-white p-8 flex-1">
        <h1 className="text-3xl font-bold mb-4">Drop us a line!</h1>
        <form className="w-full max-w-md flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-3 rounded border border-gray-300 bg-black text-white" />
          <input type="email" placeholder="Email*" className="p-3 rounded border border-gray-300 bg-black text-white" required />
          <textarea placeholder="Message" className="p-3 rounded border border-gray-300 bg-black text-white h-32"></textarea>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-white" />
            Sign up for our email list for updates, promotions, and more.
          </label>
          <button type="submit" className="bg-white text-black font-bold py-2 rounded hover:bg-gray-200">SEND</button>
        </form>
      </main>
    </div>
  );
}
