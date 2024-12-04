import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
const AuthPageLayout = lazy(() => import("./Pages/Layouts/AuthPageLayout"));
const ProtectedPageLayout = lazy(() =>
  import("./Pages/Layouts/ProtectedPageLayout")
);
const HomePage = lazy(() => import("./Pages/HomePage"));
const FlixBotPage = lazy(() => import("./Pages/FlixBotPage"));
const LoginForm = lazy(() => import("./components/LoginForm"));
const SignUpPage = lazy(() => import("./components/SignUpForm"));
const Upcoming = lazy(() => import("./Pages/Upcoming"));
const TopRated = lazy(() => import("./Pages/TopRated"));
const TopPopular = lazy(() => import("./Pages/TopPopular"));
const NowPlaying = lazy(() => import("./Pages/NowPlaying"));
const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route element={<ProtectedPageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/ai" element={<FlixBotPage />} />
            <Route path="/now_playing" element={<NowPlaying />} />
            <Route path="/top_rated" element={<TopRated />} />
            <Route path="/top_popular" element={<TopPopular />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Route>
          <Route element={<AuthPageLayout />}>
            <Route path="/signin" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
