
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

enum ConversionType {
    CelsiusToFahrenheit = 'Celsius to Fahrenheit',
    FahrenheitToCelsius = 'Fahrenheit to Celsius',
}

const TemperatureConverter: React.FC = () => {
    const [value, setValue] = useState<number | ''>('');
    const [conversionType, setConversionType] = useState<ConversionType>(
        ConversionType.CelsiusToFahrenheit
    );
    const [result, setResult] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const convertTemperature = () => {
        if (value === '') {
            alert('Por favor, ingrese un número.');
            return;
        }

        const numericValue = parseFloat(value as string);

        if (
            isNaN(numericValue) ||
            (conversionType === ConversionType.CelsiusToFahrenheit &&
                numericValue < -273.15) ||
            (conversionType === ConversionType.FahrenheitToCelsius &&
                numericValue < -459.67)
        ) {
            setErrorMessage('El valor que ingresó es menor al cero absoluto.');
            setResult(null);
            return;
        }

        setErrorMessage(null);

        let convertedValue: number;

        if (conversionType === ConversionType.CelsiusToFahrenheit) {
            convertedValue = (numericValue * 9) / 5 + 32;
        } else {
            convertedValue = ((numericValue - 32) * 5) / 9;
        }

        setResult(convertedValue);
    };

    return (
        <Container className="my-5">
            <Row className="">
                <Col className="col-md-6 mx-auto">
                    <h2 className='text-center text-dark rounded-3 p-3'>
                        Conversor de Temperatura
                    </h2>
                    <div className="form-group mb-2">
                        <select
                            className="form-control"
                            value={conversionType}
                            onChange={(e) => setConversionType(e.target.value as ConversionType)}
                        >
                            <option value={ConversionType.CelsiusToFahrenheit}>
                                Convertir °C a °F
                            </option>
                            <option value={ConversionType.FahrenheitToCelsius}>
                                Convertir °F a °C
                            </option>
                        </select>
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese un valor"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <div className="mt-2 d-flex justify-content-center">
                        <Button className="btn-primary btn-outline-danger text-white fw-bold border border-black" onClick={convertTemperature}>
                            Hacer Conversión
                        </Button>
                    </div>
                    {errorMessage && (
                        <div className="alert alert-danger mt-3">{errorMessage}</div>
                    )}
                    {result !== null && (
                        <div className="alert alert-success mt-3">
                            Resultado: {result.toFixed(2)}
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default TemperatureConverter;



