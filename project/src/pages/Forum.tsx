import React from 'react';
import { MessageSquare, Users, Shield } from 'lucide-react';

const Forum = () => {
  const topics = [
    {
      id: 1,
      title: "Dealing with Academic Pressure",
      replies: 23,
      lastActive: "2 hours ago",
      tags: ["stress", "academics"],
    },
    {
      id: 2,
      title: "Making Friends in College",
      replies: 15,
      lastActive: "1 day ago",
      tags: ["social", "relationships"],
    },
    {
      id: 3,
      title: "Time Management Tips",
      replies: 45,
      lastActive: "3 hours ago",
      tags: ["productivity", "study"],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Peer Support Forum</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          New Discussion
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Shield className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-900">Community Guidelines</h3>
            <p className="text-blue-800">This is a safe space for support. Be respectful, maintain anonymity, and report any concerning content.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">1,234</div>
          <div className="text-gray-600">Community Members</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <MessageSquare className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">567</div>
          <div className="text-gray-600">Active Discussions</div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
          <Shield className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">24/7</div>
          <div className="text-gray-600">Moderation Support</div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Recent Discussions</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {topics.map((topic) => (
            <div key={topic.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{topic.title}</h3>
                  <div className="mt-1 space-x-2">
                    {topic.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <div>{topic.replies} replies</div>
                  <div>Last active {topic.lastActive}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forum;