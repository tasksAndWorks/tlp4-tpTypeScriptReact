import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

enum TipoContador {
    Par = "par",
    Impar = "impar",
}

interface Rango {
    inicio: number;
    fin: number
}

const EvenOddCounter: React.FC = () => {
    const [start, setStart] = useState<number | ''>('');
    const [end, setEnd] = useState<number | ''>('');
    const [evenCount, setEvenCount] = useState<number | null>(null);
    const [oddCount, setOddCount] = useState<number | null>(null);

    const countEvenOdd = () => {
        if (start === '' || end === '') {
            // Validar que ambos extremos del rango estén ingresados
            alert('Por favor, ingrese ambos extremos del rango.');
            return;
        }
        // console.log('El start dentro del coutnEvenOdd: ', start)
        const startValue = parseInt(start as string);
        const endValue = parseInt(end as string);

        if (isNaN(startValue) || isNaN(endValue)) {
            // Validar que los valores ingresados sean números válidos
            alert('Por favor, ingrese números válidos.');
            return;
        }

        let even = 0;
        let odd = 0;

        for (let i = startValue; i <= endValue; i++) {
            if (i % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }

        setEvenCount(even);
        setOddCount(odd);
    };

    return (
        <Container className="mt-5">
        <Row className="">
            <Col className="col-md-6 mx-auto">
            <h2>Contador de Números Pares e Impares</h2>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese el extremo inicial del rango"
                    value={ start }
                    onChange={(e) => setStart(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ingrese el extremo final del rango"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={countEvenOdd}>
                Calcular Cantidad Pares e Impares
            </button>
            {evenCount !== null && oddCount !== null && (
                <div className="alert alert-success mt-3">
                    Resultado: Números Pares: {evenCount}, Números Impares: {oddCount}
                </div>
            )}
            </Col>
        </Row>
        </Container>
    );
};

export default EvenOddCounter;
