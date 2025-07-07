import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DonationPage from './pages/DonationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { DataProvider } from './context/DataContext';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ManageEventsPage from './pages/admin/ManageEventsPage';
import ManageMarqueePage from './pages/admin/ManageMarqueePage';
import ManageMembersPage from './pages/admin/ManageMembersPage';
import ManageSlidesPage from './pages/admin/ManageSlidesPage';
import MembersPage from './pages/MembersPage';

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/donation" element={<DonationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="events" element={<ManageEventsPage />} />
            <Route path="marquee" element={<ManageMarqueePage />} />
            <Route path="members" element={<ManageMembersPage />} />
            <Route path="slides" element={<ManageSlidesPage />} />
          </Route>
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
