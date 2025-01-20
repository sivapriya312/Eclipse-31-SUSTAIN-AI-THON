import React from 'react';
import { BarChart2, TrendingUp, AlertCircle, Calendar } from 'lucide-react';

const ParentDashboard = () => {
  const trends = [
    {
      label: "Average Mood",
      value: "7.5/10",
      change: "+0.5",
      trend: "up",
    },
    {
      label: "Stress Level",
      value: "Medium",
      change: "-10%",
      trend: "down",
    },
    {
      label: "Activity Level",
      value: "High",
      change: "+15%",
      trend: "up",
    },
  ];

  const alerts = [
    {
      id: 1,
      title: "Mood Pattern Change",
      description: "Slight decrease in mood over the past week",
      severity: "low",
    },
    {
      id: 2,
      title: "Increased Stress",
      description: "Higher stress levels during exam period",
      severity: "medium",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Parent Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Contact Counselor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trends.map((trend) => (
          <div key={trend.label} className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">{trend.label}</p>
                <p className="text-2xl font-bold text-gray-900">{trend.value}</p>
              </div>
              <div className={`text-sm ${trend.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {trend.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Mood Trends</h2>
            <BarChart2 className="w-5 h-5 text-gray-500" />
          </div>
          <div className="p-4">
            {/* Placeholder for mood trend chart */}
            <div className="h-64 bg-gray-100 rounded-lg"></div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Activity Calendar</h2>
            <Calendar className="w-5 h-5 text-gray-500" />
          </div>
          <div className="p-4">
            {/* Placeholder for activity calendar */}
            <div className="h-64 bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Recent Alerts</h2>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParentDashboard;