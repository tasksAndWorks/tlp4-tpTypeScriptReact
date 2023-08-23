import { useState } from "react";

// !Styles
// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom Styles
import './App.css'

//Custom components
import { Navigation } from "./components/common/navigation/Navigation";
import CalculatorForm from "./components/excercises/CalculadoraSimple2";
import EvenOddCounter from "./components/excercises/ContadorParesImpares";




enum Option {
  Option1 = 'Option1',
  Option2 = 'Option2',
}


function App() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as Option);
  };

  const renderModelComponent = () => {
    switch (selectedOption) {
      case Option.Option1:
        return <CalculatorForm/>;
      case Option.Option2:
        return <EvenOddCounter/>;
      default:
        return <div></div>;
    }
  };

  return (
    <div className="">
      <header className="">
        <Navigation/>
      </header>
      <main className="vh-100">
        <Container className="">
          <Row className="mt-5">
            <Col xs={6} className="mx-auto">
              <select
                className="form-select m-auto align-content-center"
                onChange={handleSelectChange}
                value={selectedOption || ''}
              >
                <option value="">Selecciona una funcionalidad... 🔣</option>
                <option value={Option.Option1}>Calculadora Simple</option>
                <option value={Option.Option2}>Contador Pares/Impares</option>
              </select>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>{renderModelComponent()}</Col>
          </Row>
        </Container>
      </main>
      <footer className="py-5 bg-dark">
        <Container className="px-4">
          <p className="text-center text-white">
            Copyright &copy; MARnVEL 2023
          </p>
        </Container>
      </footer>


    </div>
  )
}

export default App
