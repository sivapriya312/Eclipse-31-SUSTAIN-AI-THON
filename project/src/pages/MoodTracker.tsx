import React, { useState, useMemo } from 'react';
import { LineChart as LineChartIcon, BookOpen, Pencil, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface MoodLog {
  mood: number;
  emoji: string;
  label: string;
  timestamp: Date;
  note: string;
}

interface ChartData {
  name: string;
  value: number;
}

const MoodTracker = () => {
  const [currentMood, setCurrentMood] = useState<number | null>(null);
  const [note, setNote] = useState('');
  const [moodHistory, setMoodHistory] = useState<MoodLog[]>([]);

  const moods = [
    { value: 1, emoji: '😡', label: 'Angry' },
    { value: 2, emoji: '😢', label: 'Sad' },
    { value: 3, emoji: '😐', label: 'Neutral' },
    { value: 4, emoji: '🙂', label: 'Happy' },
    { value: 5, emoji: '😄', label: 'Very Happy' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMood !== null) {
      const selectedMood = moods.find(m => m.value === currentMood);
      if (selectedMood) {
        const newMoodLog: MoodLog = {
          mood: currentMood,
          emoji: selectedMood.emoji,
          label: selectedMood.label,
          timestamp: new Date(),
          note: note
        };
        setMoodHistory(prev => [newMoodLog, ...prev]);
        setNote('');
        setCurrentMood(null);
      }
    }
  };

  const chartData: ChartData[] = useMemo(() => {
    return moodHistory
      .slice()
      .reverse()
      .map(log => ({
        name: log.timestamp.toLocaleDateString(),
        value: log.mood
      }));
  }, [moodHistory]);

  const moodAnalysis = useMemo(() => {
    if (moodHistory.length < 5) return null;

    const recentMoods = moodHistory.slice(0, 10);
    const averageMood = recentMoods.reduce((acc, log) => acc + log.mood, 0) / recentMoods.length;
    const negativeCount = recentMoods.filter(log => log.mood <= 2).length;

    const suggestions = [];
    if (averageMood <= 3) {
      suggestions.push({
        title: 'Mindful Breathing',
        description: 'Practice breathing exercises to reduce stress and anxiety',
        icon: Wind,
        link: '/breathing'
      });
      suggestions.push({
        title: 'Gratitude Journal',
        description: "Write down things you're grateful for",
        icon: Pencil,
        link: '/resources'
      });
    }
    if (negativeCount >= 3) {
      suggestions.push({
        title: 'Self-Help Resources',
        description: 'Explore our collection of wellness articles',
        icon: BookOpen,
        link: '/resources'
      });
    }

    return {
      averageMood,
      suggestions
    };
  }, [moodHistory]);

  const selectedMood = currentMood ? moods.find(m => m.value === currentMood) : null;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How are you feeling today?</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-between items-center">
            {moods.map((mood) => (
              <button
                key={mood.value}
                type="button"
                onClick={() => setCurrentMood(mood.value)}
                className={`p-4 rounded-full text-4xl transition-transform hover:scale-110 ${
                  currentMood === mood.value ? 'transform scale-125 ring-2 ring-blue-500' : ''
                }`}
              >
                {mood.emoji}
              </button>
            ))}
          </div>

          {selectedMood && (
            <div className="text-center text-lg font-medium text-blue-600">
              You're feeling {selectedMood.label}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Add a note (optional)
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={currentMood === null}
              className="w-48 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Log Mood
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Mood History</h3>
            <LineChartIcon className="w-6 h-6 text-gray-500" />
          </div>
          <div className="space-y-4">
            {moodHistory.map((log, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <span className="text-2xl">{log.emoji}</span>
                <div>
                  <div className="font-medium text-gray-900">{log.label}</div>
                  <div className="text-sm text-gray-500">
                    {log.timestamp.toLocaleTimeString()} - {log.timestamp.toLocaleDateString()}
                  </div>
                  {log.note && <div className="text-sm text-gray-600 mt-1">{log.note}</div>}
                </div>
              </div>
            ))}
            {moodHistory.length === 0 && (
              <div className="text-center text-gray-500 py-4">
                No mood entries yet
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Mood Analysis</h3>
            <LineChartIcon className="w-6 h-6 text-gray-500" />
          </div>
          {moodHistory.length >= 5 ? (
            <div className="space-y-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[1, 5]} ticks={[1, 2, 3, 4, 5]} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ fill: '#3b82f6' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {moodAnalysis && moodAnalysis.suggestions.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Suggested Activities</h4>
                  <div className="grid gap-4">
                    {moodAnalysis.suggestions.map((suggestion, index) => {
                      const Icon = suggestion.icon;
                      return (
                        <Link
                          key={index}
                          to={suggestion.link}
                          className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                        >
                          <Icon className="w-5 h-5 text-blue-500" />
                          <div>
                            <div className="font-medium text-blue-900">{suggestion.title}</div>
                            <div className="text-sm text-blue-600">{suggestion.description}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-4">
              Add at least 5 mood entries to see analysis
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MoodTracker;