import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import OnBoarding from "./pages/onboarding";
import JobListing from "./pages/job-listing";
import JobPage from "./pages/job";
import PostJob from "./pages/post-job";
import SavedJobs from "./pages/saved-jobs";
import MyJobs from "./pages/my-jobs";
import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import ProtectedRoutes from "./components/protected-routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoutes>
            <OnBoarding />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoutes>
            <JobListing />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoutes>
            <JobPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoutes>
            <PostJob />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoutes>
            <SavedJobs />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoutes>
            <MyJobs />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
