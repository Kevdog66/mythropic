import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/unsplash.jpg")' }}
    >
      <Header />

      {/* Optional: translucent overlay */}
      <div className="flex-1 p-8 space-y-16 bg-white/80 backdrop-blur-sm">
        <section className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            AI Innovations: Shaping the Future
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-700 mb-8">
            At Mythropic, we deliver AI-powered solutions designed to empower, transform, and innovate.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-100 p-6 rounded">
            <h2 className="text-xl font-bold mb-2">Request a Demo</h2>
            <p>Explore our AI solutions tailored to your business.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h2 className="text-xl font-bold mb-2">Request Free Trial</h2>
            <p>Experience Mythropic’s features firsthand with a free trial.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded">
            <h2 className="text-xl font-bold mb-2">Coming Soon: Fall Launch</h2>
            <p>Stay tuned for exciting updates and features in Fall!</p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-6 rounded text-center">
            <h2 className="text-2xl font-bold mb-2">Solutions</h2>
            <p>Explore our range of solutions and platforms like OSIRIS.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded text-center">
            <h2 className="text-2xl font-bold mb-2">Resources</h2>
            <p>Learn from our articles, customer use cases, and Gen AI blogs.</p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Company</h2>
          <p>About Us | Vision & Mission | Team | Newsroom | Careers | Privacy & Security</p>
          <p>Certifications: ISO 27001, SOC 2, GDPR Compliance</p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
