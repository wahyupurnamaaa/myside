import { motion } from 'framer-motion';
import { ArrowLeft, Menu, ChevronDown, MessageCircle, QrCode, Smartphone, Database, Download } from 'lucide-react';
import { useState } from 'react';

const QRPresence = ({ onNavigateBack }) => {
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
                QR Code Attendance System
              </h1>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                TECHNOLOGY
              </h3>
              <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                Android Studio, Java, CodeIgniter, MySQL, PHP, HTML, CSS, JavaScript
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                YEAR
              </h3>
              <p className="text-xl font-semibold text-gray-900">2025</p>
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
                  A digital attendance system based on QR Code technology developed using Android Studio 
                  and web application. This system allows students to mark their attendance by scanning 
                  QR codes displayed by instructors, with real-time tracking and accurate attendance 
                  validation.
                </p>
                <p>
                  The mobile application features advanced capabilities including fast and accurate 
                  QR Code scanning, real-time attendance validation, instant notifications, and a 
                  dashboard to view attendance history. Attendance data is stored locally using SQLite 
                  and can be synchronized with the server for backup and data analysis.
                </p>
                <p>
                  The web application provides a comprehensive admin interface for managing employee data, 
                  generating attendance reports, and real-time attendance monitoring. The system also 
                  includes features to export attendance data to Excel format for evaluation and 
                  attendance reporting purposes.
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
          <h4 className="text-3xl font-bold text-gray-900 mb-16 text-center">Screenshots</h4>
          
          {/* Web Application Screenshots */}
          <div className="mb-16">
            <h5 className="text-xl font-semibold text-gray-800 mb-8 text-center">Web Application Interface</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/p1.png" 
                  alt="Web Application Interface" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Web Login Page</h6>
                  <p className="text-gray-600 text-sm">
                    Admin login page with username and password form. 
                    Displays system logo and attendance system information.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/p2.png" 
                  alt="Admin Dashboard - Employee Data" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Admin Dashboard - Employee Data</h6>
                  <p className="text-gray-600 text-sm">
                    Admin dashboard for managing employee data with comprehensive table 
                    displaying ID, QR Code, name, username, and contact information.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/p3.png" 
                  alt="My Profile Page" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">My Profile Page</h6>
                  <p className="text-gray-600 text-sm">
                    Employee profile page for viewing and editing personal information 
                    such as employee ID, name, username, and contact data.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/p4.png" 
                  alt="Absence Report Page" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Attendance Report</h6>
                  <p className="text-gray-600 text-sm">
                    Page for generating attendance reports with date filters 
                    and displaying all employee attendance data in table format.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/p5.png" 
                  alt="Report Data Table" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Report Data Table</h6>
                  <p className="text-gray-600 text-sm">
                    Detailed attendance report table displaying attendance data 
                    with employee ID, name, position, date, and time information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Application Screenshots */}
          <div>
            <h5 className="text-xl font-semibold text-gray-800 mb-8 text-center">Mobile Application Interface</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/p6.png" 
                  alt="Mobile Login Screen" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Mobile Login</h6>
                  <p className="text-gray-600 text-sm">
                    Mobile application login page with username and password input. 
                    Responsive interface that is easy to use on smartphones.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/p7.png" 
                  alt="Mobile Dashboard with QR Code" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Mobile Dashboard with QR Code</h6>
                  <p className="text-gray-600 text-sm">
                    Main mobile dashboard displaying QR Code for attendance and 
                    navigation menu including QR attendance, manual attendance, and history.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/p8.jpg" 
                  alt="Physical Phone Display" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Smartphone Display</h6>
                  <p className="text-gray-600 text-sm">
                    Application screenshot running on Samsung Galaxy S23 Edge smartphone, 
                    showing dashboard display with clear QR Code.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/p9.png" 
                  alt="Success and Failure Messages" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Attendance Result Notification</h6>
                  <p className="text-gray-600 text-sm">
                    Pop-up notification displaying attendance results, both successful 
                    (green with checkmark) and failed (red with X).
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/p10.png" 
                  alt="Mobile Attendance History" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Mobile Attendance History</h6>
                  <p className="text-gray-600 text-sm">
                    Attendance history page displaying employee attendance list 
                    with date, time, and attendance status information.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/p11.png" 
                  alt="Mobile Settings and Profile" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Mobile Settings</h6>
                  <p className="text-gray-600 text-sm">
                    Mobile application settings page for user profile configuration, 
                    notifications, and attendance preferences.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/p12.png" 
                  alt="Mobile QR Code Generation" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Generate QR Code Mobile</h6>
                  <p className="text-gray-600 text-sm">
                    Interface for generating attendance QR Code in mobile application with 
                    customizable time and course settings.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/p13.png" 
                  alt="Mobile QR Scanner Interface" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Mobile QR Scanner</h6>
                  <p className="text-gray-600 text-sm">
                    QR Code scanner interface in mobile application with real-time camera. 
                    Displays responsive scan area and visual guidance for attendance.
                  </p>
                </div>
              </div>
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
                  <QrCode className="h-6 w-6 text-blue-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">QR Code Scanner</h5>
              </div>
              <p className="text-gray-600">Fast and accurate QR Code scanner for student attendance</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Real-time Validation</h5>
              </div>
              <p className="text-gray-600">Real-time attendance time validation system</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Offline Support</h5>
              </div>
              <p className="text-gray-600">Attendance data stored locally using SQLite</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Download className="h-6 w-6 text-orange-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Data Export</h5>
              </div>
              <p className="text-gray-600">Export attendance data to Excel format for reporting</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Database className="h-6 w-6 text-red-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Server Sync</h5>
              </div>
              <p className="text-gray-600">Data synchronization with server for backup and analysis</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Smartphone className="h-6 w-6 text-indigo-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">History Tracking</h5>
              </div>
              <p className="text-gray-600">Dashboard to view complete attendance history</p>
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
                onClick={() => onNavigateBack && onNavigateBack('home')}
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
            <p className="text-gray-500 text-lg">©2025 - wahyupurnamaaa</p>
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

export default QRPresence;
