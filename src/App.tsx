import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DonationPage from './pages/DonationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminLayout from './pages/admin/AdminLayout';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ManageStatsPage from './pages/admin/ManageStatsPage';
import ManageSlidesPage from './pages/admin/ManageSlidesPage';
import ManageEventsPage from './pages/admin/ManageEventsPage';
import ManageNoticePage from './pages/admin/ManageNoticePage';
import ManageMembersPage from './pages/admin/ManageMembersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/donation" element={<DonationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="stats" element={<ManageStatsPage />} />
            <Route path="slides" element={<ManageSlidesPage />} />
            <Route path="events" element={<ManageEventsPage />} />
            <Route path="notice" element={<ManageNoticePage />} />
            <Route path="members" element={<ManageMembersPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
