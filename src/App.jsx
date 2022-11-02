import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

import { ListBags } from "./pages/ListBags";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<ListBags />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
