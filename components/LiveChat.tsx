'use client'

import { motion } from 'framer-motion'
import { MessageCircle, X, Minimize2 } from 'lucide-react'
import { useState } from 'react'

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <>
      {/* Chat Widget Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open live chat"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Widget */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
        >
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Live Chat</h3>
              <p className="text-blue-100 text-sm">We're here to help!</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Minimize chat"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Chat Body */}
              <div className="p-4 h-64 overflow-y-auto">
                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-700">
                    👋 Hi! Welcome to Mahaworld. How can we help you today?
                  </p>
                </div>
                
                <div className="text-center text-gray-500 text-sm">
                  <p>💡 Integration Instructions:</p>
                  <p className="mt-2 text-xs">
                    Replace this component with your preferred chat service:
                  </p>
                  <ul className="text-xs mt-2 space-y-1">
                    <li>• Crisp.chat</li>
                    <li>• Tawk.to</li>
                    <li>• Intercom</li>
                    <li>• Zendesk Chat</li>
                  </ul>
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                    disabled
                  />
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    disabled
                  >
                    Send
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Chat integration required - see component code for setup instructions
                </p>
              </div>
            </>
          )}
        </motion.div>
      )}
    </>
  )
}

export default LiveChat 