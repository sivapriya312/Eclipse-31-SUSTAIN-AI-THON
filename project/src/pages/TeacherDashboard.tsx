import React from 'react';
import { Users, TrendingUp, AlertCircle, BarChart2 } from 'lucide-react';

const TeacherDashboard = () => {
  const classStats = [
    {
      label: "Class Average Mood",
      value: "7.2/10",
      change: "-0.3",
      trend: "down",
    },
    {
      label: "Stress Indicators",
      value: "Moderate",
      change: "+5%",
      trend: "up",
    },
    {
      label: "Engagement Level",
      value: "High",
      change: "+10%",
      trend: "up",
    },
  ];

  const alerts = [
    {
      id: 1,
      title: "Class Stress Peak",
      description: "Multiple students reporting high stress levels",
      severity: "high",
      affected: "8 students",
    },
    {
      id: 2,
      title: "Positive Trend",
      description: "Improved mood scores after wellness activities",
      severity: "low",
      affected: "Class-wide",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Contact Counselor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {classStats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Class Mood Distribution</h2>
            <BarChart2 className="w-5 h-5 text-gray-500" />
          </div>
          <div className="p-4">
            {/* Placeholder for mood distribution chart */}
            <div className="h-64 bg-gray-100 rounded-lg"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Trend Analysis</h2>
            <TrendingUp className="w-5 h-5 text-gray-500" />
          </div>
          <div className="p-4">
            {/* Placeholder for trend analysis chart */}
            <div className="h-64 bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Class Alerts</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {alerts.map((alert) => (
            <div key={alert.id} className="p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className={`w-5 h-5 ${
                  alert.severity === 'high' ? 'text-red-500' :
                  alert.severity === 'medium' ? 'text-yellow-500' :
                  'text-blue-500'
                }`} />
                <div>
                  <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                  <p className="text-gray-600">{alert.description}</p>
                  <p className="text-sm text-gray-500 mt-1">Affected: {alert.affected}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Recommended Actions</h2>
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-blue-500" />
            <div>
              <h3 className="font-semibold text-gray-900">Schedule Group Activity</h3>
              <p className="text-gray-600">Consider organizing a class wellness session</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-yellow-500" />
            <div>
              <h3 className="font-semibold text-gray-900">Stress Management Workshop</h3>
              <p className="text-gray-600">Plan a workshop focusing on exam preparation strategies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;