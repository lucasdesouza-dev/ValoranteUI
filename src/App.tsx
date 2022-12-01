import { Outlet } from "react-router-dom";

import Footer from "./layouts/Footer";
import NavBar from "./layouts/NavBar";
function App() {
  return (
    <div className="App min-w-[414px] ">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
