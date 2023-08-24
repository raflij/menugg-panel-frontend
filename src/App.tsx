import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/DashboardPage'
import Login from './pages/Auth/LoginPage';
import Signup from './pages/Auth/SignupPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ManageRestoPage from './pages/ManageRestoPage';
import ManageMenuPage from './pages/ManageMenuPage';
import UpgradePage from './pages/UpgradePage';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/analytics" element={<ProtectedRoute><AnalyticsPage /></ProtectedRoute>} />
              <Route path="/manage/restaurant" element={<ProtectedRoute><ManageRestoPage /></ProtectedRoute>} />
              <Route path="/manage/menu" element={<ProtectedRoute><ManageMenuPage /></ProtectedRoute>} />
              <Route path="/upgrade" element={<ProtectedRoute><UpgradePage /></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthContextProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
