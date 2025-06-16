import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 p-8 space-y-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 mb-8">
          Choose the plan that fits your needs. Whether you're an individual or an enterprise, Mythropic has a solution for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Trial/Individual Plan */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Trial/Individual</h2>
            <p className="text-3xl font-bold mb-4">$0</p>
            <ul className="text-left mb-4 space-y-2">
              <li>✅ Free 14-day trial</li>
              <li>✅ Access to core features</li>
              <li>✅ Email support</li>
            </ul>
            <button className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800">Get Started</button>
          </div>

          {/* Business Plan */}
          <div className="bg-white border border-purple-700 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Business</h2>
            <p className="text-3xl font-bold mb-4">$49/mo</p>
            <ul className="text-left mb-4 space-y-2">
              <li>✅ Advanced analytics</li>
              <li>✅ Custom reporting</li>
              <li>✅ Priority support</li>
            </ul>
            <button className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800">Choose Plan</button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
            <p className="text-3xl font-bold mb-4">Contact Us</p>
            <ul className="text-left mb-4 space-y-2">
              <li>✅ Custom solutions</li>
              <li>✅ Dedicated account manager</li>
              <li>✅ 24/7 support</li>
            </ul>
            <button className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800">Contact Sales</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
