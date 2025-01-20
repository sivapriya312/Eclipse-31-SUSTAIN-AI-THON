import React from 'react';
import { Award, Trophy, Target, Zap } from 'lucide-react';

const Challenges = () => {
  const challenges = [
    {
      id: 1,
      title: "7 Days of Mindfulness",
      description: "Practice mindfulness meditation for 10 minutes daily",
      progress: 70,
      points: 100,
      participants: 234,
    },
    {
      id: 2,
      title: "Gratitude Journal Challenge",
      description: "Write three things you're grateful for each day",
      progress: 40,
      points: 75,
      participants: 156,
    },
    {
      id: 3,
      title: "Stress-Free Study Sessions",
      description: "Complete 4 focused study sessions with breaks",
      progress: 25,
      points: 150,
      participants: 189,
    },
  ];

  const achievements = [
    {
      id: 1,
      name: "Early Bird",
      description: "Completed morning meditation for 5 days",
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      id: 2,
      name: "Mindfulness Master",
      description: "Finished 10 guided meditation sessions",
      icon: Target,
      color: "text-purple-500",
    },
    {
      id: 3,
      name: "Consistency King",
      description: "Logged mood for 14 days straight",
      icon: Zap,
      color: "text-blue-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Wellness Challenges</h1>
        <p className="mt-2 text-gray-600">Complete challenges to earn points and unlock achievements</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <Award className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">1,250</div>
            <div className="text-gray-600">Points Earned</div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">8</div>
            <div className="text-gray-600">Achievements Unlocked</div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-center">
            <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-gray-600">Active Challenges</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Active Challenges</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{challenge.points} points</span>
                    <span>{challenge.participants} participants</span>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Join Challenge
                </button>
              </div>
              <div className="mt-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        Progress: {challenge.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                    <div
                      style={{ width: `${challenge.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Recent Achievements</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div key={achievement.id} className="bg-gray-50 rounded-lg p-4">
                <Icon className={`w-8 h-8 ${achievement.color} mb-2`} />
                <h3 className="font-semibold text-gray-900">{achievement.name}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Challenges;