import { useState } from 'react';
import "./QrKod.css";
import { TbScubaMask } from "react-icons/tb";

const App = () => {
    const [text, setText] = useState('');
    const [qrImageUrl, setQrImageUrl] = useState('');
  
    const handleGenerate = async (e) => {
      e.preventDefault();
      if (text.length > 0) {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
        const response = await fetch(url);
        setQrImageUrl(response.url);
      }
    };
  
    return (
      <section className="container">
        <div className="wrapper">
          <form onSubmit={handleGenerate}>
            <h2>Vložit URL nebo text</h2>
            <input
              type="text"
              id="qrText"
              placeholder="Text or URL"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Generovat QR kód</button>
          </form>
        </div>
        <div id="imageBox">
            <h2>Váš QR kód</h2>
            {qrImageUrl && (
              <img src={qrImageUrl} id="qrImage" alt="Generated QR Code" />
            )}
          </div>
          <div> <div className='icon-mask'><TbScubaMask /></div></div>
      </section>
    );
  };
  
  export default App;
  


