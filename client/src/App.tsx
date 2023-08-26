import { Button } from '@/components/ui/button';
import { TabsDemo } from '@/pages/Home';
import MyPage from './pages/MyPage';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/messages" element={<div>Messages</div>} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
          <Route path="/support" element={<div>Support</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
