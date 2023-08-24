import React, { useState } from 'react';

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

// Interfaz para el estado del componente
interface CalculatorFormState {
    value1: number | '';
    value2: number | '';
    selectedOperation: Operation;
    result: number | null;
}



const CalculatorForm: React.FC = () => {
    // Estados para los valores de los inputs, la operación seleccionada y el resultado
    const [value1, setValue1] = useState<number | ''>('');
    const [value2, setValue2] = useState<number | ''>('');
    const [selectedOperation, setSelectedOperation] = useState<string>('add');
    const [result, setResult] = useState<number | null>(null);

    // Función para manejar el cambio en los inputs
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        inputName: string
    ) => {
        const newValue = event.target.value;
        // console.log('El valor: ', newValue);
        // console.log(typeof newValue);
        
        // Validar que solo se ingresen números (flotantes o enteros)
        if (/^\d*\.?\d*$/.test(newValue) || newValue === '') {
            const parsedValue = parseFloat(newValue);

            if (isNaN(parsedValue)) {
                console.log("El valor no es un número válido");
                return;
            }

            inputName === 'value1' ? setValue1(parsedValue) : setValue2(parsedValue);
        }
    };

    // Función para manejar el cambio en el select de las operaciones
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('El value dentro del handleSelectChange: ', event.target.value);
        setSelectedOperation(event.target.value);
    };

    // Función para calcular el resultado
    const calculateResult = () => {
        if (
            value1 === '' || value2 === ''
        ) {
            setResult(null);
            return;
        }

        const num1 = value1;
        const num2 = value2;

        switch (selectedOperation) {
        case Operation.ADD:
            setResult(num1 + num2);
            break;
        case Operation.SUBTRACT:
            setResult(num1 - num2);
            break;
        case Operation.MULTIPLY:
            setResult(num1 * num2);
            break;
        case Operation.DIVIDE:
            if (num2 === 0) {
                setResult(null);
            } else {
                setResult(num1 / num2);
            }
            break;
        default:
            setResult(null);
            break;
        }
    };

    return (
        <Container className="my-5">
            <Row className="row">
                <Col className="col-md-6 mx-auto">
                    <h2 className='text-center text-info-emphasis rounded-3 text-bg-info p-3'>Calculadora</h2>
                    <div className="form-group mb-1">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese el primer valor"
                            value={value1}
                            onChange={(e) => handleInputChange(e, 'value1')}
                        />
                    </div>

                    <div className="form-group mb-1">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese el segundo valor"
                            value={value2}
                            onChange={(e) => handleInputChange(e, 'value2')}
                        />
                    </div>

                    <div className="form-group">
                        <select
                            className="form-control"
                            value={selectedOperation}
                            onChange={handleSelectChange}
                        >
                            <option value="add">Sumar</option>
                            <option value="subtract">Restar</option>
                            <option value="multiply">Multiplicar</option>
                            <option value="divide">Dividir</option>
                        </select>
                    </div>

                    <div className="mt-2 d-flex justify-content-center">
                        <Button className="btn-primary btn-outline-danger text-white fw-bold border border-black" onClick={calculateResult}>
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
};

export default CalculatorForm;
