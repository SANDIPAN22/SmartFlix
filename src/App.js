import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const AuthPageLayout = lazy(() => import("./Pages/Layouts/AuthPageLayout"));
const ProtectedPageLayout = lazy(() =>
  import("./Pages/Layouts/ProtectedPageLayout")
);
const HomePage = lazy(() => import("./Pages/HomePage"));
const FlixBotPage = lazy(() => import("./Pages/FlixBotPage"));
const LoginForm = lazy(() => import("./components/LoginForm"));
const SignUpPage = lazy(() => import("./components/SignUpForm"));

const App = () => {
  return (
    <Suspense fallback="<h1> Loading The Page !! Please Hang On !!</h1>">
      <Router>
        <Routes>
          <Route element={<ProtectedPageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/ai" element={<FlixBotPage />} />
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
