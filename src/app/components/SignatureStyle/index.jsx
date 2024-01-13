import { useState } from 'react';
import './signatureStyle.scss';

const signatureStyles = [
  { value: 'cursive', label: 'Signature 1', font: 'cursive' },
  { value: 'Monospace', label: 'Signature 2', font: 'Monospace' },
];

const SignatureStyle = ({ onSelect = () => null }) => {
  const [selectedStyle, setSelectedStyle] = useState('');

  const handleStyleChange = event => {
    const selectedValue = JSON.parse(event.target.value);
    setSelectedStyle(selectedValue);
    onSelect(selectedValue.value);
  };

  return (
    <div className="signature-selector">
      <h2>Select Signature Style</h2>
      {selectedStyle && (
        <div
          className="selected-style-preview"
          style={{ fontFamily: selectedStyle.value }}
        >
          {selectedStyle.label}
        </div>
      )}
      <div className="radio-buttons">
        {signatureStyles.map(item => {
          let strItem = JSON.stringify(item);
          return (
            <label key={item.value} style={{ fontFamily: item.font }}>
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
