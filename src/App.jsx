
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./layout/PublicLayout";
import Hero from "./components/Hero";
import HomePage from "./pages/HomePage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CaseStudyDetailPage from "./pages/CaseStudyDetailPage";
import AboutPage from "./pages/AboutPage";

function PlaceholderPage({ title }) {
  return (
    <main className="min-h-[65vh] px-6 py-24 text-center">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        {title}
      </h1>
    </main>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <a href="/" className="underline">Return home</a>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={ <HomePage/>} />
          <Route path="/case-studies" element={<CaseStudiesPage/>} />
          <Route
            path="/case-studies/:slug"
            element={<CaseStudyDetailPage />}
          />
          {/* <Route
            path="case-studies"
            element={<PlaceholderPage title="Case Studies" />}
          /> */}
          <Route
            path="about"
            element={<AboutPage/>}
          />
          <Route
            path="pages"
            element={<PlaceholderPage title="Pages" />}
          />
          <Route
            path="blog"
            element={<PlaceholderPage title="Blog" />}
          />
          <Route
            path="contact"
            element={<PlaceholderPage title="Start a Project" />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
