
import { useState } from 'react';

const WordCounter: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [wordCount, setWordCount] = useState<number | null>(null);

  const countWords = () => {
    const words = inputText.split(/\s+/).filter((word) => word !== '');
    setWordCount(words.length);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h2 className='text-center text-dark rounded-3 p-3'>Contador de Palabras</h2>
          <div className="form-group mb-1">
            <textarea
              className="form-control"
              placeholder="Ingrese una oración"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          <div className="mt-2 d-flex justify-content-center">
            <button className="btn btn-primary" onClick={countWords}>
              Contar Palabras
            </button>
          </div>
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



