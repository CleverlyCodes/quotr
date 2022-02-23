import './App.css';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import QuoteInputSheet from './components/QuoteInputSheet/QuoteInputSheet';

function App() {
  
  const [items, setItems] = useState([
    {
      description: 'Website Design',
      amount: '10000',
    },
    {
      description: 'Website Engineering',
      amount: '20000',
    },
    {
      description: '',
      amount: '',
    },
  ]);

  const [isGenerated, setGenerated] = useState(false);

  function generateQuote() {
    console.log(items);
    setGenerated(true);
  }

  useEffect(() => {}, [items])

  return (
    <div className="App">
      <header className="App-header py-5"> 
        <Container>
          <Row className="mb-5">
            <Col>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
          </Row>

          <QuoteInputSheet items={items} setItems={setItems}></QuoteInputSheet>

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