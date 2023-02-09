import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";

function App() {
  return (
    <Routes>
      <Route path="/projects/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/projects/home" replace />} />
    </Routes>
  );
}

export default App;
