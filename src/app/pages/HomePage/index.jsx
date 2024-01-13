import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import SignaturePad from 'app/components/SignaturePad';
import './homePage.scss';
import SignaturePadCanvas from 'app/components/SignaturePad';
import SignatureStyle from 'app/components/SignatureStyle';

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
          <Tabs
            defaultActiveKey="draw"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="draw" title="Draw">
              <SignaturePadCanvas />
            </Tab>
            <Tab eventKey="type" title="Type">
              <SignatureStyle />
            </Tab>
          </Tabs>
        </div>
      </Modal>
    </>
  );
};

export default HomePage;
