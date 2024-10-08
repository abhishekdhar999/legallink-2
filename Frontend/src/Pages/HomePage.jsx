import React from 'react'

const HomePage = () => {
  return (
    <>
   
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      {/* Navigation */}
      <header className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold tracking-wide">DevSpace</div>
        <nav className="space-x-8 text-lg">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">Features</a>
          <a href="#" className="hover:text-blue-400">Pricing</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </nav>
        <button className="bg-blue-600 py-2 px-6 rounded-lg hover:bg-blue-500 transition-all">Sign Up</button>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-stars flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-3xl mx-auto hero-transition hover:opacity-90">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Explore the Future of Development
          </h1>
          <p className="text-xl mb-8">
            Innovative tools and resources for developers to reach new heights in their coding journey. Experience seamless integration, collaboration, and learning.
          </p>
          <a href="#features" className="bg-blue-600 py-3 px-8 rounded-full text-lg hover:bg-blue-500 transition-all">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="feature1-image-url.jpg" alt="Feature 1" className="mb-6 mx-auto"/>
              <h3 className="text-2xl font-semibold mb-4">Collaborative Coding</h3>
              <p className="text-lg">Work together with your team in real-time using the best collaborative tools.</p>
            </div>
            <div className="p-8 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="feature2-image-url.jpg" alt="Feature 2" className="mb-6 mx-auto"/>
              <h3 className="text-2xl font-semibold mb-4">Cloud Integration</h3>
              <p className="text-lg">Seamless cloud integration to keep your projects synced and accessible anywhere.</p>
            </div>
            <div className="p-8 bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="feature3-image-url.jpg" alt="Feature 3" className="mb-6 mx-auto"/>
              <h3 className="text-2xl font-semibold mb-4">AI-Powered Assistance</h3>
              <p className="text-lg">Smart coding assistants to boost your productivity with AI-driven insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Basic Plan</h3>
              <p className="text-lg mb-4">For beginners looking to explore the basics of development.</p>
              <p className="text-3xl font-bold mb-8">$10/month</p>
              <button className="bg-blue-600 py-3 px-8 rounded-full hover:bg-blue-500 transition-all">Sign Up</button>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Pro Plan</h3>
              <p className="text-lg mb-4">For professionals ready to take their skills to the next level.</p>
              <p className="text-3xl font-bold mb-8">$25/month</p>
              <button className="bg-blue-600 py-3 px-8 rounded-full hover:bg-blue-500 transition-all">Sign Up</button>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
              <p className="text-lg mb-4">For large teams and enterprises looking for advanced tools.</p>
              <p className="text-3xl font-bold mb-8">$50/month</p>
              <button className="bg-blue-600 py-3 px-8 rounded-full hover:bg-blue-500 transition-all">Sign Up</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-center text-white">
        <p>&copy; 2024 DevSpace. All rights reserved.</p>
      </footer>
    </div>





    <section className="bg-blue-100 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600">Popular Mentor of the Week</h2>
        <div className="mt-8 flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
            <img className="w-32 h-32 rounded-full mx-auto" src="/path/to/mentor-photo.jpg" alt="Mentor" />
            <h3 className="mt-4 text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Expert in Web Development</p>
            <p className="mt-2 text-gray-500">John has 10 years of experience in teaching full-stack web development.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">View Profile</button>
          </div>
        </div>
      </div>
    </section>
    </>

  );
};

export default HomePage;
