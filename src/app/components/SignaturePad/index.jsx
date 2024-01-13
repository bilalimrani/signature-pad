import { useEffect, useRef, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SignaturePad from 'signature_pad';
import SignatureStyle from '../SignatureStyle';
import './signaturePad.scss';

const SignaturePadCanvas = () => {
  const canvasRef = useRef(null);
  const signaturePadRef = useRef(null);

  const [selectedSignatureStyle, setSelectedSignatureStyle] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    signaturePadRef.current = new SignaturePad(canvas);

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // useEffect(() => {
  //   const ctx = canvas.getContext('2d');
  //   ctx.font = `30px ${selectedSignatureStyle}`;

  //   ctx.fillText(signaturePadRef.current, 10, 40);
  // }, [selectedSignatureStyle]);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    signaturePadRef.current = new SignaturePad(canvas);
    const ratio = Math.max(window.devicePixelRatio || 1, 1);

    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext('2d').scale(ratio, ratio);

    canvas.font = `30px ${selectedSignatureStyle}`;
  };

  const handleClear = () => {
    signaturePadRef.current.clear();
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.font = `30px, ${selectedSignatureStyle}`;

    var image = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    console.log(image);

    const link = document.createElement('a');
    link.download = 'signature.jpg';
    link.href = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSignatureSelect = selectedStyle => {
    setSelectedSignatureStyle(selectedStyle);
  };

  return (
    <div className="container">
      <Tabs
        defaultActiveKey="draw"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="draw" title="Draw">
          <div className="container">
            <canvas ref={canvasRef} />
            <div>
              <button onClick={handleClear}>Clear</button>
              <button onClick={handleSave}>Save</button>
            </div>
          </div>
        </Tab>
        <Tab eventKey="type" title="Type">
          <SignatureStyle
            selectedSignatureStyle={selectedSignatureStyle}
            onSelect={handleSignatureSelect}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default SignaturePadCanvas;
