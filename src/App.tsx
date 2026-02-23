import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/Home";
import RootLayout from "@/layouts/RootLayout";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <RootLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<HomePage targetSection="courses" />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
