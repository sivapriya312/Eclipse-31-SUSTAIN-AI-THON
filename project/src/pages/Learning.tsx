import React from 'react';
import { BookOpen, Play, CheckCircle, Clock } from 'lucide-react';

const Learning = () => {
  const modules = [
    {
      id: 1,
      title: "Understanding Stress and Anxiety",
      description: "Learn about the science of stress and effective coping mechanisms",
      duration: "45 mins",
      progress: 80,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=300",
    },
    {
      id: 2,
      title: "Building Healthy Relationships",
      description: "Develop skills for maintaining positive connections with others",
      duration: "30 mins",
      progress: 60,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=300",
    },
    {
      id: 3,
      title: "Time Management Essentials",
      description: "Master techniques for better productivity and reduced stress",
      duration: "35 mins",
      progress: 40,
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=300",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Educational Modules</h1>
        <p className="mt-2 text-gray-600">Learn about mental health and well-being through interactive lessons</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <BookOpen className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-gray-600">Modules Available</div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">5</div>
            <div className="text-gray-600">Completed</div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">2.5h</div>
            <div className="text-gray-600">Learning Time</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <div key={module.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <img src={module.image} alt={module.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-gray-900">{module.title}</h3>
              <p className="mt-2 text-gray-600">{module.description}</p>
              
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>{module.duration}</span>
              </div>

              <div className="mt-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        Progress: {module.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                    <div
                      style={{ width: `${module.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>
              </div>

              <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center">
                <Play className="w-4 h-4 mr-2" />
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learning;