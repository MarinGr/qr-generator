import QRCode from "qrcode"
import { useState } from "react"

function App() {
  const [url, setUrl] = useState("")
  const [qrcode, setQrcode] = useState("")

  function generateQRCode() {
    QRCode.toDataURL(url,
      {
        width: 600,
        margin: 3,
      },
      (err, url) => {
        !err ?
          setQrcode(url) :
          alert("Please enter your link or text")
    })
  }

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <input 
          type="text"
          placeholder="Enter your link or text..." 
          autoFocus
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && generateQRCode()}
      />
      <button onClick={generateQRCode}>Generate QR</button>
      { qrcode && 
      <>
        <img className="qr-img" src={qrcode} alt="QR code"/>
        <a href={qrcode} download="qrcode.png">Download PNG</a>
      </>
      }
    </div>
  )
}

export default App;
