const certifications = [
    {
      title: 'SOC 2 Type II',
      description: 'Annual audit of security controls and processes',
      icon: '/icons/soc2.svg',
    },
    {
      title: 'GDPR Compliant',
      description: 'Full EU data protection compliance',
      icon: '/icons/gdpr.svg',
    },
    {
      title: 'ISO 27001',
      description: 'Information security management certified',
      icon: '/icons/iso.svg',
    },
    {
      title: 'EU AI Act Ready',
      description: 'Prepared for upcoming AI regulations',
      icon: '/icons/euai.svg',
    },
    {
      title: 'PCI DSS Level 1',
      description: 'Payment card data security standard',
      icon: '/icons/pci.svg',
    },
  ]
  
  export default function CertificationsPage() {
    return (
      <div className="min-h-screen bg-white text-black px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Enterprise <span className="text-purple-600">Certifications & Compliance</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Meeting the highest standards in AI security and data protection
          </p>
  
          <div className="flex justify-center items-start gap-6 flex-wrap px-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="w-64 h-64 bg-gray-100 border border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-md"
              >
                <img src={cert.icon} alt={cert.title} className="h-12 w-12 object-contain mb-4" />
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-700">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  