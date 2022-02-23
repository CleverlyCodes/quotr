import './App.css';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import QuoteInputSheet from './components/QuoteInputSheet/QuoteInputSheet';
import QuoteOutputSheet from './components/QuoteOutputSheet/QuoteOutputSheet';

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

          {
            isGenerated ?
              <QuoteOutputSheet items={items} setGenerated={setGenerated}></QuoteOutputSheet>
            :
              <QuoteInputSheet items={items} setItems={setItems} setGenerated={setGenerated}></QuoteInputSheet>
          }
        </Container>
      </header>
    </div>
  );
}

export default App;