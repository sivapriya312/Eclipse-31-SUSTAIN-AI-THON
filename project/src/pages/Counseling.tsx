import React, { useState } from 'react';
import { MessageCircle, Clock, Shield } from 'lucide-react';

const Counseling = () => {
  const [message, setMessage] = useState('');

  const counselors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Anxiety & Stress Management",
      availability: "Available Now",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Depression & Mood Disorders",
      availability: "Available in 15 mins",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Counseling Support</h1>
        <p className="mt-2 text-gray-600">Connect with licensed counselors for confidential support</p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Shield className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-900">Your Privacy Matters</h3>
            <p className="text-blue-800">All conversations are encrypted and completely confidential. You can choose to remain anonymous.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {counselors.map((counselor) => (
          <div key={counselor.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={counselor.image}
                  alt={counselor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{counselor.name}</h3>
                  <p className="text-gray-600">{counselor.specialty}</p>
                  <div className="mt-1 flex items-center text-sm">
                    <Clock className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-600">{counselor.availability}</span>
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Start Chat
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Quick Support</h2>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MessageCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div className="bg-gray-100 rounded-lg p-3">
                <p className="text-gray-800">How can I help you today?</p>
              </div>
            </div>
            
            <div className="flex items-end space-x-3">
              <div className="flex-grow">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counseling;