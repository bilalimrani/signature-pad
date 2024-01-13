import { useEffect, useRef } from 'react';
import SignaturePad from 'signature_pad';
import './signaturePad.scss';

const SignaturePadCanvas = () => {
  const canvasRef = useRef(null);
  const signaturePadRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    signaturePadRef.current = new SignaturePad(canvas);

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);

    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext('2d').scale(ratio, ratio);
    signaturePadRef.current.clear();
  };

  const handleClear = () => {
    signaturePadRef.current.clear();
  };

  const handleSave = () => {
    const dataUrl = signaturePadRef.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'signature.jpg';
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(dataUrl);
  };

  return (
    <div className="container">
      <canvas ref={canvasRef} />
      <div>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default SignaturePadCanvas;
