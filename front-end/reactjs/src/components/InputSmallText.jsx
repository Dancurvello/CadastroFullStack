import React from 'react';

function InputSmallText({ label, value, onChange }) {
  return (
    <label>
      {label}:
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export default InputSmallText;
