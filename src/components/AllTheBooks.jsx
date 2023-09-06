import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import libreria from "../BookImg/fantasy.json";
import libreria2 from "../BookImg/horror.json";

class AllTheBooks extends Component {
  state = {
    selectBook: null,
  };

  cambiaCategoria = (categoria) => {
    this.setState({ x: categoria });
  };

  render() {
    const { x } = this.state;
    const libreriaCorrente = x === "fantasy" ? libreria : libreria2;
    console.log("Categoria: ", x);
    return (
      <div className="container">
        <Button variant="success" onClick={() => this.cambiaCategoria("fantasy")}>
          fantasy
        </Button>
        <Button variant="danger" onClick={() => this.cambiaCategoria("horror")}>
          horror
        </Button>
        <div className="row">
          {libreriaCorrente.map((Libro, index) => (
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3" key={`libro-${index}`}>
              {/* {console.log(index)} */}
              <Card>
                <Card.Img src={Libro.img} />
                <Card.Body>
                  <Card.Title>{Libro.title}</Card.Title>
                  <Card.Text>{Libro.category}</Card.Text>
                  <Button variant="primary">{Libro.price} $</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllTheBooks;
