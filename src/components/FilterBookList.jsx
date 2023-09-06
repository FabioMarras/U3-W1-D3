import { Component } from "react";
import { Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class FilterBookList extends Component {
  state = {
    reservation: {
      name: "",
    },
  };

  render() {
    return (
      <Container className={this.props.className}>
        <h2 className="text.center"> Form </h2>
        <Row className="justify-content-center">
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search the NAME of book</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Book name"
                  value={this.state.reservation.name}
                  onChange={(e) => this.setState({ reservation: { name: e.target.value } })}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <p>
          Libro cercato: <span className="fs-3">{this.state.reservation.name}</span>
        </p>
      </Container>
    );
  }
}
export default FilterBookList;
