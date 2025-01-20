import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Pencil, Heart, Wind } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      category: 'Meditation',
      icon: Wind,
      items: [
        {
          title: 'Mindful Breathing',
          duration: '5 min',
          image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=300',
          link: '/breathing'
        },
        {
          title: 'Stress Relief',
          duration: '10 min',
          image: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&q=80&w=300',
          link: '/stress-relief'
        },
      ],
    },
    {
      category: 'Articles',
      icon: BookOpen,
      items: [
        {
          title: 'Managing Test Anxiety',
          duration: '5 min read',
          image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=300',
          link: '/articles/test-anxiety'
        },
        {
          title: 'Healthy Sleep Habits',
          duration: '7 min read',
          image: 'https://images.unsplash.com/photo-1511295742362-92c96b1cf484?auto=format&fit=crop&q=80&w=300',
          link: '/articles/sleep-habits'
        },
      ],
    },
    {
      category: 'Journaling',
      icon: Pencil,
      items: [
        {
          title: 'Gratitude Journal',
          duration: 'Daily Practice',
          image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=300',
          link: '/journal/gratitude'
        },
        {
          title: 'Emotion Tracking',
          duration: 'Weekly Practice',
          image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=300',
          link: '/journal/emotions'
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-primary-800">Self-Help Resources</h1>
        <p className="mt-2 text-primary-600">Discover tools and guidance for your mental wellness journey</p>
      </div>

      {resources.map((section) => {
        const Icon = section.icon;
        return (
          <div key={section.category} className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon className="w-6 h-6 text-primary-500" />
              <h2 className="text-2xl font-bold text-primary-800">{section.category}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item) => (
                <Link 
                  key={item.title} 
                  to={item.link}
                  className="bg-white rounded-lg border border-primary-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-primary-800">{item.title}</h3>
                    <p className="text-primary-600">{item.duration}</p>
                    <button className="mt-2 inline-flex items-center text-primary-600 hover:text-primary-700">
                      <Heart className="w-4 h-4 mr-1" />
                      Save for later
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Resources;