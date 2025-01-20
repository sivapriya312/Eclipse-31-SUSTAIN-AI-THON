import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BarChart2, Users, MessageCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-800 mb-4">Welcome to ZenBliss</h1>
        <p className="text-lg text-primary-600">Your digital sanctuary for mental wellness and personal growth</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/resources" className="block p-6 bg-white rounded-lg border border-primary-200 hover:bg-primary-50">
          <BookOpen className="w-8 h-8 text-primary-500 mb-2" />
          <h5 className="mb-2 text-xl font-bold tracking-tight text-primary-800">Self-Help Resources</h5>
          <p className="text-primary-600">Access guided exercises, meditation, and journaling tools</p>
        </Link>

        <Link to="/mood" className="block p-6 bg-white rounded-lg border border-primary-200 hover:bg-primary-50">
          <BarChart2 className="w-8 h-8 text-primary-500 mb-2" />
          <h5 className="mb-2 text-xl font-bold tracking-tight text-primary-800">Mood Tracker</h5>
          <p className="text-primary-600">Track your daily moods and monitor your progress</p>
        </Link>

        <Link to="/forum" className="block p-6 bg-white rounded-lg border border-primary-200 hover:bg-primary-50">
          <Users className="w-8 h-8 text-primary-500 mb-2" />
          <h5 className="mb-2 text-xl font-bold tracking-tight text-primary-800">Peer Support</h5>
          <p className="text-primary-600">Connect with others in a safe, anonymous space</p>
        </Link>

        <Link to="/counseling" className="block p-6 bg-white rounded-lg border border-primary-200 hover:bg-primary-50">
          <MessageCircle className="w-8 h-8 text-primary-500 mb-2" />
          <h5 className="mb-2 text-xl font-bold tracking-tight text-primary-800">Counseling</h5>
          <p className="text-primary-600">Chat with licensed counselors anonymously</p>
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg border border-primary-200">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">Daily Wellness Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-primary-50 rounded-lg">
            <h3 className="font-semibold text-primary-800">Mindful Breathing</h3>
            <p className="text-primary-600">Take 5 deep breaths when feeling stressed</p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg">
            <h3 className="font-semibold text-primary-800">Movement Break</h3>
            <p className="text-primary-600">Stand up and stretch every hour</p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg">
            <h3 className="font-semibold text-primary-800">Gratitude Practice</h3>
            <p className="text-primary-600">List 3 things you're grateful for today</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;