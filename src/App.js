import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MovieDetail from "./components/MovieDetail";
import HomePage from "./components/HomePage";
import BookMovie from "./components/BookMovie";

function App() {
  return (
    <div className="py-4">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="details/:id" element={<MovieDetail/>}></Route>
        <Route path="bookmovie/:id" element={<BookMovie/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
