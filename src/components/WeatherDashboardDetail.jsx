import { motion } from 'framer-motion';
import { ArrowLeft, Menu, ChevronDown, MessageCircle, Cloud, MapPin, Thermometer, Wind, Droplets, Sun } from 'lucide-react';
import { useState } from 'react';

const WeatherDashboardDetail = ({ onNavigateBack }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => onNavigateBack && onNavigateBack('home')}
              className="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
              <span className="text-lg font-semibold text-gray-800">Alvalens</span>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-800"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Project Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                PROJECT
              </h2>
              <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Weather Dashboard
              </h1>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                TECHNOLOGY
              </h3>
              <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                JavaScript, OpenWeather API, Chart.js, HTML5, CSS3
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                YEAR
              </h3>
              <p className="text-xl font-semibold text-gray-900">2024</p>
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
                DESCRIPTION
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Dashboard cuaca responsif yang dikembangkan menggunakan JavaScript vanilla dengan 
                  integrasi OpenWeather API. Aplikasi ini menyediakan informasi cuaca yang komprehensif 
                  dengan tampilan yang menarik dan interaktif, termasuk peta cuaca dan grafik analitik.
                </p>
                <p>
                  Dashboard menampilkan data cuaca real-time berdasarkan lokasi pengguna dengan 
                  fitur pencarian kota. Informasi yang ditampilkan meliputi suhu, kelembaban, 
                  kecepatan angin, tekanan udara, dan prediksi cuaca 5 hari ke depan. 
                  Grafik interaktif menggunakan Chart.js untuk visualisasi data yang lebih menarik.
                </p>
                <p>
                  Aplikasi juga dilengkapi dengan peta cuaca interaktif yang menampilkan kondisi 
                  cuaca di berbagai lokasi secara visual. Sistem caching lokal memastikan performa 
                  yang optimal dan mengurangi penggunaan bandwidth. Desain responsif memastikan 
                  pengalaman yang optimal di semua perangkat.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Large Screenshots Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h4 className="text-2xl font-bold text-gray-900 mb-12 text-center">Screenshots</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/p1.png" 
                alt="Main Dashboard" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/p2.png" 
                alt="Weather Details" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/p3.png" 
                alt="5-Day Forecast" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/p4.png" 
                alt="Interactive Map" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/p5.png" 
                alt="Analytics Charts" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/p6.png" 
                alt="Location Search" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/p7.png" 
                alt="Mobile View" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/p8.png" 
                alt="Settings" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/p9.png" 
                alt="Weather Alerts" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h4 className="text-2xl font-bold text-gray-900 mb-12 text-center">Key Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Real-time Weather</h5>
              </div>
              <p className="text-gray-600">Data cuaca real-time dengan update otomatis setiap menit</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Location-based</h5>
              </div>
              <p className="text-gray-600">Informasi cuaca berdasarkan lokasi pengguna dengan GPS</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Thermometer className="h-6 w-6 text-purple-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Detailed Metrics</h5>
              </div>
              <p className="text-gray-600">Metrik cuaca lengkap: suhu, kelembaban, tekanan, angin</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Wind className="h-6 w-6 text-orange-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">5-Day Forecast</h5>
              </div>
              <p className="text-gray-600">Prediksi cuaca 5 hari ke depan dengan akurasi tinggi</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Droplets className="h-6 w-6 text-red-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Interactive Charts</h5>
              </div>
              <p className="text-gray-600">Grafik interaktif untuk visualisasi data cuaca</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Sun className="h-6 w-6 text-indigo-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Weather Maps</h5>
              </div>
              <p className="text-gray-600">Peta cuaca interaktif dengan overlay kondisi real-time</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-12 max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg mb-6">Want something like this?</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white px-12 py-4 rounded-full flex items-center space-x-3 hover:bg-gray-800 transition-colors text-lg font-semibold"
              >
                <span>Contact Me</span>
                <ChevronDown className="h-5 w-5 rotate-90" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center">
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-500 text-lg">©2025 - Alvalens</p>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex items-end space-x-3">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
            <p className="text-gray-700 text-sm">Are you looking for some help?</p>
          </div>
          <div className="relative">
            <button className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
              <MessageCircle className="h-5 w-5" />
            </button>
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboardDetail;
