import Navbar from "./components/layout/Navbar";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />

      <AppRoutes />
    </>
  );
}

export default App;
