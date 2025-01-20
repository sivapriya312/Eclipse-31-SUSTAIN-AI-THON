import React from 'react';
import { Bell, Lock, Eye, Moon, User, Globe } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Settings</h1>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Account Settings</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">Profile Information</h3>
                  <p className="text-gray-600">Update your personal details</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700">Edit</button>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Lock className="w-5 h-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">Privacy Settings</h3>
                  <p className="text-gray-600">Manage your privacy preferences</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700">Configure</button>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  <p className="text-gray-600">Choose what updates you receive</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700">Manage</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">App Settings</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">Language</h3>
                  <p className="text-gray-600">Select your preferred language</p>
                </div>
              </div>
              <select className="rounded-md border-gray-300">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Moon className="w-5 h-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">Dark Mode</h3>
                  <p className="text-gray-600">Toggle dark mode theme</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-gray-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">Accessibility</h3>
                  <p className="text-gray-600">Customize accessibility options</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700">Configure</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4">
          <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;