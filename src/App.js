import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const HomePage = lazy(() => import("./Pages/HomePage"));
const FlixBotPage = lazy(() => import("./Pages/FlixBotPage"));

const App = () => {
  return (
    <Suspense fallback="<h1> Loading The Page !! Please Hang On !!</h1>">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/bot" element={<FlixBotPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
