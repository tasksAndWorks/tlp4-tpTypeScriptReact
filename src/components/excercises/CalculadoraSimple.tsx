
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

// Enum para las operaciones
enum Operation {
  ADD = 'add',
  SUBTRACT = 'subtract',
  MULTIPLY = 'multiply',
  DIVIDE = 'divide',
}

// Interfaz para las propiedades del componente
interface CalculatorFormProps {}

// Interfaz para el estado del componente
interface CalculatorFormState {
  value1: number | '';
  value2: number | '';
  selectedOperation: Operation;
  result: number | null;
}

class CalculatorForm extends Component<
  CalculatorFormProps,
  CalculatorFormState
> {
  constructor(props: CalculatorFormProps) {
    super(props);

    this.state = {
      value1: '',
      value2: '',
      selectedOperation: Operation.ADD,
      result: null,
    };
  }

  handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    inputName: 'value1' | 'value2'
  ) => {
    const newValue = event.target.value;
    // Validar que solo se ingresen números (flotantes o enteros)
    if (/^\d*\.?\d*$/.test(newValue) || newValue === '') {
      this.setState({ [inputName]: newValue } as Pick<
        CalculatorFormState,
        keyof CalculatorFormState
      >);
    }
  };

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectedOperation: event.target.value as Operation,
    });
  };

  calculateResult = () => {
    const { value1, value2, selectedOperation } = this.state;

    if (value1 === '' || value2 === '') {
      this.setState({ result: null });
      return;
    }

    const num1 = parseFloat(value1 as string);
    const num2 = parseFloat(value2 as string);

    switch (selectedOperation) {
      case Operation.ADD:
        this.setState({ result: num1 + num2 });
        break;
      case Operation.SUBTRACT:
        this.setState({ result: num1 - num2 });
        break;
      case Operation.MULTIPLY:
        this.setState({ result: num1 * num2 });
        break;
      case Operation.DIVIDE:
        if (num2 === 0) {
          this.setState({ result: null });
        } else {
          this.setState({ result: num1 / num2 });
        }
        break;
      default:
        this.setState({ result: null });
        break;
    }
  };

  render() {
    const { value1, value2, selectedOperation, result } = this.state;

    return (
      <Container className="mt-5">
        <Row className="">
          <Col className="col-md-6 mx-auto">
            <h2 className='text-center text-info-emphasis rounded-1 text-bg-info'>Calculadora</h2>
            <div className="form-group mb-1">
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese el primer valor"
                value={value1}
                onChange={(e) => this.handleInputChange(e, 'value1')}
              />
            </div>
            
            <div className="form-group mb-1">
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese el segundo valor"
                value={value2}
                onChange={(e) => this.handleInputChange(e, 'value2')}
              />
            </div>

            <div className="form-group">
              <select
                className="form-control"
                value={selectedOperation}
                onChange={this.handleSelectChange}
              >
                {Object.values(Operation).map((op) => (
                  <option key={op} value={op}>
                    {op.charAt(0).toUpperCase() + op.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-2 d-flex justify-content-center">
              <Button
                className="btn-primary btn-outline-danger text-white"
                onClick={this.calculateResult}
              >
                Calcular
              </Button>
            </div>
            {result !== null && (
              <div className="alert alert-success mt-3">
                Resultado: {result}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CalculatorForm;
