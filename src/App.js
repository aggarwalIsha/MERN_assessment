import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signIn" element={<SignIn />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
