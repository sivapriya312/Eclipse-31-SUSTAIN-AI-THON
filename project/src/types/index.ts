export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'counselor' | 'parent' | 'teacher';
  avatar?: string;
}

export interface MoodEntry {
  id: string;
  userId: string;
  mood: number;
  emoji: string;
  note: string;
  timestamp: string;
}

export interface Resource {
  id: string;
  title: string;
  category: 'exercise' | 'article' | 'meditation' | 'journal';
  description: string;
  content: string;
  thumbnail: string;
}

export interface ForumPost {
  id: string;
  title: string;
  content: string;
  authorId: string;
  timestamp: string;
  anonymous: boolean;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  deadline?: string;
}