import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import SignaturePad from 'app/components/SignaturePad';
import './homePage.scss';

const HomePage = () => {
  const [isShowSignature, setIsSignature] = useState(false);

  const handlePopup = () => {
    setIsSignature(!isShowSignature);
  };

  return (
    <>
      <button onClick={handlePopup}>Add Signature</button>
      <Modal size="lg" show={isShowSignature} onHide={setIsSignature}>
        <div className="container">
          <SignaturePad />
        </div>
      </Modal>
    </>
  );
};

export default HomePage;
