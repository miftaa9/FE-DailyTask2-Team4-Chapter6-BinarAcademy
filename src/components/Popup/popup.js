import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>Tipe : Jeans</p>
        <p>Warna : Biru</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
