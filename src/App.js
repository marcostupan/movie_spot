
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/moviesList/movieList';
import Movie from './pages/movieDetail/movie';
import SearchResults from './components/SearchResults/SearchResults';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          <Route path='search/:term' element={<SearchResults/>}></Route>
          <Route path="/*" element={<h1>Pagina de erro</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
