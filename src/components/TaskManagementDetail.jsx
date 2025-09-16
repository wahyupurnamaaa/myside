import { motion } from 'framer-motion';
import { ArrowLeft, Menu, ChevronDown, MessageCircle, CheckSquare, Users, Calendar, BarChart3, Bell, Settings, Smartphone, Database, Download } from 'lucide-react';
import { useState } from 'react';

const TaskManagementDetail = ({ onNavigateBack }) => {
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
                Pharmacy Management System
              </h1>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                TECHNOLOGY
              </h3>
              <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                Java, Netbeans, MySQL
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
                  A comprehensive pharmacy management system developed using Java NetBeans 
                  with MySQL database. This desktop application is specifically designed for 
                  pharmacies and drug stores to manage medicine inventory, sales transactions, 
                  and financial reports in an integrated and efficient manner.
                </p>
                <p>
                  The system features comprehensive medicine management including stock-in 
                  recording, stock-out tracking, and medicine expiration date monitoring. 
                  Each medicine has a unique code, name, category, price, and supplier 
                  information that can be easily managed through a user-friendly interface.
                </p>
                <p>
                  Key features include automated receipt printing system, real-time inventory 
                  management, daily/monthly sales reports, medicine expiration alerts, and 
                  data backup system. The application also supports multi-user access with 
                  different permission levels for administrators and cashiers, plus printer 
                  integration for printing receipts and reports.
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
          
          {/* Mobile Application Screenshots */}
          <div>
            <h5 className="text-xl font-semibold text-gray-800 mb-8 text-center">Desktop Application Interface</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z1.png" 
                  alt="Login Screen - Task Management App" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Login Page</h6>
                  <p className="text-gray-600 text-sm">
                    Pharmacy system login page with username and password input. 
                    Secure desktop interface that is easy to use for multi-user access.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z2.png" 
                  alt="Dashboard - Task Overview" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Main Dashboard</h6>
                  <p className="text-gray-600 text-sm">
                    Main dashboard displaying sales summary, medicine stock, 
                    and navigation menu including sales, medicine management, and reports.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z3.png" 
                  alt="Kanban Board View" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Stock Management</h6>
                  <p className="text-gray-600 text-sm">
                    Medicine stock management interface with quantity monitoring, 
                    expiration dates, and availability status tracking.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z4.png" 
                  alt="Add New Task Screen" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Add New Medicine</h6>
                  <p className="text-gray-600 text-sm">
                    Form for adding new medicine with input fields for name, medicine code, 
                    price, stock, expiration date, and supplier information.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z5.png" 
                  alt="Task Details View" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Medicine Details</h6>
                  <p className="text-gray-600 text-sm">
                    Medicine details page displaying complete information including 
                    name, price, stock, expiration date, supplier, and edit/delete options.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z6.png" 
                  alt="Calendar View" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Sales Transaction</h6>
                  <p className="text-gray-600 text-sm">
                    Sales transaction page with medicine search, 
                    total calculation, and automatic receipt printing.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z7.png" 
                  alt="Analytics Dashboard" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Sales Report</h6>
                  <p className="text-gray-600 text-sm">
                    Report dashboard displaying sales charts, profit 
                    statistics, and sales trend analysis in chart format.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z8.png" 
                  alt="Settings Screen" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Settings</h6>
                  <p className="text-gray-600 text-sm">
                    System settings page for managing users, data backup, 
                    printer configuration, and other pharmacy settings.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z9.png" 
                  alt="Physical Phone Display" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Desktop Display</h6>
                  <p className="text-gray-600 text-sm">
                    Application screenshot running on Windows desktop, 
                    showing dashboard display with user-friendly interface.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z10.png" 
                  alt="Task Categories Screen" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Medicine Categories</h6>
                  <p className="text-gray-600 text-sm">
                    Page for managing medicine categories with options to add, 
                    edit, and delete medicine categories as needed.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z11.png" 
                  alt="Priority Settings" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Price Settings</h6>
                  <p className="text-gray-600 text-sm">
                    Medicine price settings page with selling price, buying price, 
                    and profit margin options for each medicine category.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z12.png" 
                  alt="Notification Center" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Expiration Alert</h6>
                  <p className="text-gray-600 text-sm">
                    Notification center for viewing medicines nearing expiration, 
                    low stock alerts, and restock reminders in one place.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z13.png" 
                  alt="Search and Filter" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Medicine Search</h6>
                  <p className="text-gray-600 text-sm">
                    Search and filter feature to find medicines based on 
                    name, code, category, or supplier with real-time results.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z14.png" 
                  alt="Task Statistics" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Sales Statistics</h6>
                  <p className="text-gray-600 text-sm">
                    Statistics page displaying sales charts, 
                    transaction count, and daily/weekly profit analysis.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z15.png" 
                  alt="Export and Backup" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">Export and Backup</h6>
                  <p className="text-gray-600 text-sm">
                    Feature to export sales data to PDF/Excel format and backup 
                    MySQL database for security and portability.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/z16.png" 
                  alt="About and Help" 
                  className="w-full h-80 object-contain"
                />
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-900 mb-2">About and Help</h6>
                  <p className="text-gray-600 text-sm">
                    About page for the pharmacy system with version information, 
                    user guide, and technical support contact.
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
                  <CheckSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Medicine Management</h5>
              </div>
              <p className="text-gray-600">Complete system for managing medicine data, stock, and supplier information</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Sales System</h5>
              </div>
              <p className="text-gray-600">Sales transactions with automatic receipt printing and real-time reports</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Expiration Alert</h5>
              </div>
              <p className="text-gray-600">Automatic notifications for medicines nearing or past expiration</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Financial Reports</h5>
              </div>
              <p className="text-gray-600">Daily, monthly sales reports and profit/loss analysis</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Bell className="h-6 w-6 text-red-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Multi-User Access</h5>
              </div>
              <p className="text-gray-600">Different access levels for administrators and cashiers with guaranteed security</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Database className="h-6 w-6 text-indigo-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">MySQL Database</h5>
              </div>
              <p className="text-gray-600">Integrated data storage with automatic backup and recovery</p>
            </div>
          </div>
        </motion.div>

        {/* Job Finder UI App Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20"
        >
          <h4 className="text-2xl font-bold text-gray-900 mb-12 text-center">Job Finder UI App</h4>
          <div className="bg-white rounded-2xl shadow-lg p-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h5 className="text-xl font-semibold text-gray-900 mb-6">Job Finder Application Description</h5>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Job Finder UI App is a mobile application designed to help job seekers 
                    find job opportunities that match their qualifications and preferences. 
                    This application is developed using Android Studio with modern Material Design.
                  </p>
                  <p>
                    Key features of the application include job search by location, job category, 
                    and salary. Users can save favorite job listings, apply for jobs directly, 
                    and receive notifications for jobs that match their profile.
                  </p>
                  <p>
                    The application also includes a user profile system that allows job seekers 
                    to upload their CV, add skills, and set search preferences. The analytics 
                    dashboard provides insights about application status and relevant job opportunities.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Active Jobs</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">10K+</div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Customer Support</div>
                </div>
              </div>
            </div>
            
            {/* Job Finder Screenshots */}
            <div className="mt-12">
              <h6 className="text-lg font-semibold text-gray-800 mb-6 text-center">Screenshots Job Finder UI</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src="/q1.png" 
                    alt="Job Finder Login Screen" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h6 className="text-sm font-semibold text-gray-900 mb-1">Login Page</h6>
                    <p className="text-gray-600 text-xs">
                      Login with email/username and password to access the application
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src="/q2.png" 
                    alt="Job Search Dashboard" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h6 className="text-sm font-semibold text-gray-900 mb-1">Search Dashboard</h6>
                    <p className="text-gray-600 text-xs">
                      Main dashboard with job search and filtering features
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src="/q3.png" 
                    alt="Job Listings" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h6 className="text-sm font-semibold text-gray-900 mb-1">Job Listings</h6>
                    <p className="text-gray-600 text-xs">
                      Job listings with company information, position, and salary
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src="/q4.png" 
                    alt="Job Details" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h6 className="text-sm font-semibold text-gray-900 mb-1">Job Details</h6>
                    <p className="text-gray-600 text-xs">
                      Job details page with complete description and apply button
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src="/q5.png" 
                    alt="User Profile" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h6 className="text-sm font-semibold text-gray-900 mb-1">User Profile</h6>
                    <p className="text-gray-600 text-xs">
                      Profile page to manage CV, skills, and search preferences
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src="/q6.png" 
                    alt="Application Status" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h6 className="text-sm font-semibold text-gray-900 mb-1">Application Status</h6>
                    <p className="text-gray-600 text-xs">
                      Track job application status and receive updates from companies
                    </p>
                  </div>
                </div>
              </div>
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

export default TaskManagementDetail;
