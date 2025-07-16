import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import UserProfile from './components/UserProfile.jsx';

export default function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/user/12" replace />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
}
