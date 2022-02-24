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
      description: 'Website Design - Using design tools, we will create a layout and UX stylesheet complete with up to 3 revisions',
      amount: '10000',
    },
    {
      description: 'Website Engineering - Using the latest tools in website engineering, we will use the latest frameworks and automations to deliver a high performing website',
      amount: '20000',
    },
    {
      description: '',
      amount: '',
    },
  ]);

  const [config, setConfig] = useState({
    description: 'This is your company description. Place anything here to make your quote more appealing to your target customer',
    currency: '$',
  });

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
              <QuoteOutputSheet items={items} setGenerated={setGenerated} config={config}></QuoteOutputSheet>
            :
              <QuoteInputSheet items={items} setItems={setItems} setGenerated={setGenerated} config={config} setConfig={setConfig}></QuoteInputSheet>
          }
        </Container>
      </header>
    </div>
  );
}

export default App;