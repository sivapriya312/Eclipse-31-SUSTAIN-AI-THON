import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Home from './pages/Home';
import Resources from './pages/Resources';
import BreathingExercise from './pages/BreathingExercise';
import MoodTracker from './pages/MoodTracker';
import Forum from './pages/Forum';
import Counseling from './pages/Counseling';
import Challenges from './pages/Challenges';
import Learning from './pages/Learning';
import Settings from './pages/Settings';
import ParentDashboard from './pages/ParentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/resources" element={
            <ProtectedRoute>
              <Layout>
                <Resources />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/breathing" element={
            <ProtectedRoute>
              <Layout>
                <BreathingExercise />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/mood" element={
            <ProtectedRoute>
              <Layout>
                <MoodTracker />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/forum" element={
            <ProtectedRoute>
              <Layout>
                <Forum />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/counseling" element={
            <ProtectedRoute>
              <Layout>
                <Counseling />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/challenges" element={
            <ProtectedRoute>
              <Layout>
                <Challenges />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/learn" element={
            <ProtectedRoute>
              <Layout>
                <Learning />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute>
              <Layout>
                <Settings />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/parent-dashboard" element={
            <ProtectedRoute>
              <Layout>
                <ParentDashboard />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="/teacher-dashboard" element={
            <ProtectedRoute>
              <Layout>
                <TeacherDashboard />
              </Layout>
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;