import { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  // color = () => {
  //   if (this.state.selected === true) return console.log("Sono True");
  //   else {
  //     console.log("Sono False");
  //   }
  // };

  changeState = () => {
    this.setState((stato) => ({
      selected: !stato.selected,
    }));
    console.log(this.state);
    // this.color();
  };

  render() {
    const { book } = this.props;
    const cardClass = this.state.selected ? "selFalse" : "selTrue";
    return (
      <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
        <Card className={cardClass}>
          <Card.Img onClick={this.changeState} src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SingleBook;
