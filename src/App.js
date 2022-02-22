import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

function App() {
  const [items, setItems] = useState([]);

  function addItem() {
    setItems([...items, {
      description: '',
      amount: '',
    }]);
  };

  function editItemDescription(index, value) {
    let currentItems = [...items];
    currentItems[index].description = value;
    setItems(currentItems);
  }

  function editItemAmount(index, value) {
    let currentItems = [...items];
    currentItems[index].amount = value;
    setItems(currentItems);
  }

  function generateQuote() {
    console.log(items);  
  }

  useEffect(() => {}, [items])

  return (
    <div className="App">
      <header className="App-header py-5"> 
        <Container>
          <Row className="mb-5">
            <h1 classNames="mb-5">QUOTR</h1>
          </Row>

          <Row className="mb-4">
            <Col>
              <textarea placeholder="service description" className="w-100 px-3 py-1 fs-6"/>
            </Col>
          </Row>

          {
            items.map((item, index) => (
              <Row className="mt-3">
                <Col xs="8">
                  <Form.Control value={item.description} onChange={(e) => editItemDescription(index, e.target.value)} type="email" placeholder="Description" />
                </Col>
    
                <Col xs="3">
                  <Form.Control value={item.amount} onChange={(e) => editItemAmount(index, e.target.value)} type="email" placeholder="Amount" />
                </Col>

                <Col xs="1">
                  <Button className="w-100 align-top btn-danger fs-6 px-1">Remove</Button>
                </Col>
              </Row>
            ))
          }

          <Row className="mt-3">
            <Col>
              <Button className="w-100 btn-success fw-bold" onClick={addItem}>Add Item</Button>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col></Col>

            <Col>
              <Button className="w-100 btn-primary fw-bold" onClick={generateQuote}>GeneRate</Button>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;