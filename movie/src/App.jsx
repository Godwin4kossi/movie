import { useState } from "react";
import MovieCard from "./components/MovieCard";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MovieCard movie={{title: "Tim's Film", release_date: "2024"}}/>
      <MovieCard movie={{title: "Tim's Film", release_date: "2024"}}/>
    </>
  );
}
export default App;
