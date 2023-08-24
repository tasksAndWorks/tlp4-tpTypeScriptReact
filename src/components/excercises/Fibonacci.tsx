
import React, { useState } from 'react';

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

        const nValue = parseInt(n as string);

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
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h2>Secuencia de Fibonacci</h2>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese un número (N)"
                            value={n}
                            onChange={(e) => setN(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={calculateFibonacci}>
                        Calcular Sucesión
                    </button>
                    {errorMessage && (
                        <div className="alert alert-danger mt-3">{errorMessage}</div>
                    )}
                    {fibonacciNumbers.length > 0 && (
                        <div className="alert alert-success mt-3">
                            Primeros {n} números de la secuencia de Fibonacci:{' '}
                            {fibonacciNumbers.join(', ')}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FibonacciSequence;

