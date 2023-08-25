import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/browse" element={<div>Browse</div>} />
          <Route path="/messages" element={<div>Messages</div>} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
          <Route path="/support" element={<div>Support</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
