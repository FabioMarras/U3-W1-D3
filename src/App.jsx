import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter ";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import libreria from "../src/BookImg/fantasy.json";
import BookList from "./components/BookList";
import FilterBookList from "./components/FilterBookList";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <FilterBookList />
      <SingleBook book={libreria[1]} />
      <BookList />
      {/* <Form className="mb-5" /> */}
      {/* <AlltheBooks /> */}
      <MyFooter />
    </div>
  );
}

export default App;
