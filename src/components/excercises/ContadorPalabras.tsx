
import React, { useState } from 'react';

const WordCounter: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [wordCount, setWordCount] = useState<number | null>(null);

  const countWords = () => {
    const words = inputText.split(/\s+/).filter((word) => word !== '');
    setWordCount(words.length);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2>Contador de Palabras</h2>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Ingrese una oración"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={countWords}>
            Contar Palabras
          </button>
          {wordCount !== null && (
            <div className="alert alert-success mt-3">
              Cantidad de Palabras: {wordCount}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WordCounter;



