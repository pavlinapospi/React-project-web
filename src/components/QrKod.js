import { useState } from 'react';
import "./QrKod.css";
import { TbScubaMask } from "react-icons/tb";

const App = () => {
  const [text, setText] = useState('');
  const [qrImageUrl, setQrImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text) {
      setLoading(true);
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
      fetch(url)
        .then(response => {
          if (!response) {
          new Error("Chyba při načítání dat");
          }
          return response;
        })
        .then(response => response.url)
        .then(url => {
          setQrImageUrl(url);
          setText("");
          setLoading(false);
          setError(null);
        })
        .catch(error => {
          setError("Došlo k chybě při generování QR kódu. Zkuste to prosím znovu.");
          setLoading(false);
        });
    }
  };

  return (
    <section className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Vložit URL nebo text</h2>
          <input
            type="text"
            id="qrText"
            placeholder="Text or URL"
            value={text}
            onChange={handleInputChange}
          />
          <button type="submit">Generovat QR kód</button>
        </form>
      </div>
      <div id="imageBox">
        <h2>Váš QR kód</h2>
        {loading ? (
          <h1>Načítání dat...</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          qrImageUrl && <img src={qrImageUrl} id="qrImage" alt="Generated QR Code" />
        )}
      </div>
      <div>
        <div className='icon-mask'>
          <TbScubaMask />
        </div>
      </div>
    </section>
  );
};

export default App;