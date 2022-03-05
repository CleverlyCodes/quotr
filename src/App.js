import './App.css';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import QuoteInputSheet from './components/QuoteInputSheet/QuoteInputSheet';
import QuoteOutputSheet from './components/QuoteOutputSheet/QuoteOutputSheet';
import AlertMessage from './components/AlertMessage/AlertMessage';

function App() {
  const [alert, setAlert] = useState({
    message: '',
    isShown: false,
    status: 'success',
  });
  
  const [items, setItems] = useState([
    {
      description: 'Website Design - Using design tools, we will create a layout and UX stylesheet complete with up to 3 revisions',
      amount: 10000,
    },
    {
      description: 'Website Engineering - Using the latest tools in website engineering, we will use the latest frameworks and automations to deliver a high performing website',
      amount: 20000,
    },
    {
      description: '',
      amount: 0,
    },
  ]);

  const [config, setConfig] = useState({
    tite: '',
    description: 'This is your company description. Place anything here to make your quote more appealing to your target customer',
    currency: '$',
    tax: 0.03,
    preparedByName: '',
    preparedByPosition: '',
  });

  const [taxTotal, setTaxTotal] = useState(0.0); 
  const [total, setTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const [isGenerated, setGenerated] = useState(false);

  useEffect(() => {
    let sum = 0;
    items.map(item => {
      sum+=item.amount;
    });

    let tax = sum * config.tax;
    const grandTotal = sum + tax;

    setTotal(sum);
    setTaxTotal(tax);
    setGrandTotal(grandTotal);
  }, [items, config.tax]);

  return (
    <div className="App">
      <header className="App-header py-5"> 
        <Container>
          <Row className="mb-5 no-print">
            <Col>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
          </Row>

          {
            isGenerated ?
              <QuoteOutputSheet items={items} setGenerated={setGenerated} config={config} total={total}></QuoteOutputSheet>
            :
              <QuoteInputSheet items={items} setItems={setItems} setGenerated={setGenerated} config={config} setConfig={setConfig} total={total} taxTotal={taxTotal} grandTotal={grandTotal} setAlert={setAlert}></QuoteInputSheet>
          }

          <AlertMessage alert={alert}></AlertMessage>
        </Container>
      </header>
    </div>
  );
}

export default App;