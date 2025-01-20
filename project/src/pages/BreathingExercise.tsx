import React, { useState, useEffect } from 'react';
import { Wind, Pause } from 'lucide-react';

const BreathingExercise = () => {
  const [isBreathingIn, setIsBreathingIn] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    let interval: number | undefined;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            setIsBreathingIn((prev) => !prev);
            return 5;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const handleStop = () => {
    setIsActive(false);
    setTimer(5);
    setIsBreathingIn(true);
  };

  const handleStart = () => {
    setIsActive(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary-800 mb-4">Mindful Breathing Exercise</h1>
        <p className="text-lg text-primary-600">Follow the rhythm to practice mindful breathing</p>
      </div>

      <div className="bg-white p-8 rounded-lg border border-primary-200 text-center">
        <div className="mb-8">
          <Wind className={`w-16 h-16 mx-auto mb-4 text-primary-500 ${
            isBreathingIn ? 'animate-pulse' : ''
          }`} />
          <div className="text-4xl font-bold text-primary-700 mb-2">
            {isBreathingIn ? 'Breathe In' : 'Breathe Out'}
          </div>
          <div className="text-2xl text-primary-600">{timer}</div>
        </div>

        {isActive ? (
          <button
            onClick={handleStop}
            className="flex items-center justify-center w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Pause className="w-5 h-5 mr-2" />
            Stop Exercise
          </button>
        ) : (
          <button
            onClick={handleStart}
            className="flex items-center justify-center w-full px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Wind className="w-5 h-5 mr-2" />
            Start Exercise
          </button>
        )}
      </div>

      <div className="bg-primary-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-primary-800 mb-2">Benefits of Mindful Breathing</h2>
        <ul className="list-disc list-inside text-primary-600 space-y-2">
          <li>Reduces stress and anxiety</li>
          <li>Improves focus and concentration</li>
          <li>Helps regulate emotions</li>
          <li>Promotes better sleep quality</li>
        </ul>
      </div>
    </div>
  );
};

export default BreathingExercise;