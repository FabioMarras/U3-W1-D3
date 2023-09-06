import { Component } from "react";
import libreria from "../BookImg/fantasy.json";
import SingleBook from "./SingleBook";

class AllTheBooks extends Component {
  state = {
    selectBook: null,
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {libreria.map((Libro, index) => (
            <SingleBook book={Libro} key={`libro-${index}`} />
          ))}
        </div>
      </div>
    );
  }
}

export default AllTheBooks;
