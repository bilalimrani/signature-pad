import { useState } from 'react';
import './signatureStyle.scss';

const SignatureStyle = props => {
  const {
    signatureStyles = [
      { value: 'cursive', label: 'Signature 1' },
      { value: 'Monospace', label: 'Signature 2' },
      { value: 'Fantasy', label: 'Signature 3' },
      { value: 'Serif', label: 'Signature 4' },
    ],
  } = props;
  const [selectedStyle, setSelectedStyle] = useState(signatureStyles[0].value);

  const handleStyleChange = event => {
    const selectedValue = JSON.parse(event.target.value);
    setSelectedStyle(selectedValue);
  };

  return (
    <div className="signature-selector">
      <h2>Select Signature Style</h2>
      <div className="signature-input">
        {selectedStyle && <input style={{ fontFamily: selectedStyle.value }} />}
      </div>
      <div className="radio-buttons">
        {signatureStyles.map(item => {
          let strItem = JSON.stringify(item);
          return (
            <label
              className="item"
              key={item.value}
              style={{ fontFamily: item.value }}
            >
              <input
                type="radio"
                value={strItem}
                checked={selectedStyle.value === item.value}
                onChange={handleStyleChange}
              />
              {item.label}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default SignatureStyle;
