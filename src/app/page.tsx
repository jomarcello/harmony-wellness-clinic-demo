export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Harmony Wellness Clinic
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Dr. Sarah Thompson • integrative health
          </p>
          <p className="text-lg text-gray-500">
            📍 Austin, USA
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Welcome to Our Practice
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Experience personalized healthcare with our AI-powered practice management system.
          </p>
          <p className="text-gray-600 mb-6">
            Our advanced platform combines cutting-edge technology with compassionate care, 
            specializing in integrative health to help you achieve optimal health and wellness.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                🤖 AI-Powered Scheduling
              </h3>
              <p className="text-blue-700">
                Intelligent appointment management with automated scheduling and reminders.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                💬 Smart Communication
              </h3>
              <p className="text-green-700">
                Real-time chat support and voice-enabled patient assistance.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Schedule Appointment
          </button>
        </div>
      </div>
    </main>
  )
}
