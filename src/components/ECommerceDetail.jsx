import { motion } from 'framer-motion';
import { ArrowLeft, Menu, ChevronDown, MessageCircle, ShoppingCart, CreditCard, Users, BarChart3, Shield, Smartphone } from 'lucide-react';
import { useState } from 'react';

const ECommerceDetail = ({ onNavigateBack }) => {
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
                E-Commerce Platform
              </h1>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                TECHNOLOGY
              </h3>
              <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                React, Node.js, Express.js, MongoDB, JavaScript
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
                  A comprehensive e-commerce platform built with React for the frontend 
                  and Node.js with Express.js for the backend. This platform provides a complete 
                  solution for online shopping with modern features including user authentication, 
                  product catalog management, shopping cart functionality, and secure payment processing.
                </p>
                <p>
                  The platform features a comprehensive dashboard for both customers and administrators. 
                  Customers can browse products, manage their shopping cart, track orders, and 
                  manage their profiles. Administrators can manage inventory, process orders, 
                  and analyze sales data. MongoDB database is used to store product information, 
                  user data, and order details with optimal performance.
                </p>
                <p>
                  The platform also includes advanced product search and filtering capabilities 
                  based on categories, price range, and ratings. Real-time notifications provide 
                  order updates and promotional offers. Responsive design ensures optimal 
                  experience across all devices, from mobile phones to desktop computers.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/q1.png" 
                alt="Job Search Interface" 
                className="w-full h-80 object-contain"
              />
              <div className="p-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Product Catalog Interface</h5>
                <p className="text-gray-600 text-sm">
                  Main product catalog interface with advanced search and filtering features. 
                  Users can browse products by category, price range, and customer ratings.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/q2.png" 
                alt="Job Application Process" 
                className="w-full h-80 object-contain"
              />
              <div className="p-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Shopping Cart Process</h5>
                <p className="text-gray-600 text-sm">
                  Streamlined shopping cart and checkout process. Users can add products to cart, 
                  review their selection, and proceed to secure payment with ease.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/q3.png" 
                alt="User Profile Dashboard" 
                className="w-full h-80 object-contain"
              />
              <div className="p-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Customer Profile Dashboard</h5>
                <p className="text-gray-600 text-sm">
                  Personal dashboard for customers with comprehensive profile management. 
                  Users can manage personal information, order history, and preferences.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/q4.png" 
                alt="Company Dashboard" 
                className="w-full h-80 object-contain"
              />
              <div className="p-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Admin Dashboard</h5>
                <p className="text-gray-600 text-sm">
                  Dedicated dashboard for administrators to manage the e-commerce platform. 
                  Features include inventory management, order processing, and customer support tools.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/q5.png" 
                alt="Job Posting Management" 
                className="w-full h-80 object-contain"
              />
              <div className="p-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Product Management</h5>
                <p className="text-gray-600 text-sm">
                  Comprehensive product management system. Administrators can create, 
                  edit, and manage product listings with detailed information and images.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/q6.png" 
                alt="Application Management" 
                className="w-full h-80 object-contain"
              />
              <div className="p-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Order Management</h5>
                <p className="text-gray-600 text-sm">
                  Order management panel for administrators and customers. Administrators can 
                  review, process, and track orders efficiently with real-time updates.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/q7.png" 
                alt="Analytics Dashboard" 
                className="w-full h-80 object-contain"
              />
              <div className="p-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h5>
                <p className="text-gray-600 text-sm">
                  Analytics dashboard providing deep insights into platform performance. 
                  Data visualization for tracking sales, popular products, and customer behavior.
                </p>
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
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Product Search</h5>
              </div>
              <p className="text-gray-600">Advanced product search with filters for category, price, and ratings</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Shopping Cart</h5>
              </div>
              <p className="text-gray-600">Easy and integrated shopping cart and checkout system</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Profile Management</h5>
              </div>
              <p className="text-gray-600">Comprehensive customer profile and account management</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Admin Dashboard</h5>
              </div>
              <p className="text-gray-600">Administrative dashboard for managing products and orders</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Security</h5>
              </div>
              <p className="text-gray-600">Data security with JWT authentication and strong encryption</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <Smartphone className="h-6 w-6 text-indigo-600" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900">Responsive Design</h5>
              </div>
              <p className="text-gray-600">Responsive design optimized for all devices and screen sizes</p>
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

export default ECommerceDetail;
