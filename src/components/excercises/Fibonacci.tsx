
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

//Imponts


const FibonacciSequence: React.FC = () => {
    const [n, setN] = useState<number | ''>('');
    const [fibonacciNumbers, setFibonacciNumbers] = useState<number[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const calculateFibonacci = () => {
        if (n === '') {
            // Validar que el input no esté vacío
            alert('Por favor, ingrese un número.');
            return;
        }

        /*
        const parsedValue = parseInt(n);

        if (isNaN(parsedValue)) {
            console.log("El valor no es un número válido");
            return;
        }
        */

        // console.log('El n dentro del calculateFib: ', n);
        // console.log(typeof n);
        const nValue =Number(n);
        // console.log('El nValue dentro del Fib: ', nValue);
        // console.log('El tipo del nValue dentro del Fib: ', typeof nValue);

        if (isNaN(nValue) || nValue < 1) {
            // Validar que el valor ingresado sea un número entero positivo
            alert('Por favor, ingrese un número entero positivo.');
            return;
        }

        if (nValue > 250) {
            // Validar que el valor ingresado no sea mayor a 250
            setErrorMessage('Ingrese un número menor');
            setFibonacciNumbers([]);
            return;
        }

        setErrorMessage(null);

        const sequence: number[] = [0, 1];
        while (sequence.length < nValue) {
            const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
            sequence.push(next);
        }

        setFibonacciNumbers(sequence);
    };

    return (
        <Container className="my-5">
            <Row className="">
                <Col className="col-md-6 mx-auto">
                    <h2>Secuencia de Fibonacci</h2>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese un número (N)"
                            value={n}
                            onChange={(e) => setN(e.target.value)}
                        />
                    </div>
                    <div className="mt-2 d-flex justify-content-center">
                        <Button
                            className="btn-primary btn-outline-danger text-white fw-bold border border-black"
                            onClick={calculateFibonacci}
                        >
                            Calcular Sucesión
                        </Button>
                    </div>
                    {errorMessage && (
                        <div className="alert alert-danger mt-3">{errorMessage}</div>
                    )}
                    {fibonacciNumbers.length > 0 && (
                        <div className="alert alert-success mt-3">
                            Primeros {n} números de la secuencia de Fibonacci:{' '}
                            {fibonacciNumbers.join(', ')}
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default FibonacciSequence;

