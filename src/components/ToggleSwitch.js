import React from 'react';

const ToggleSwitch = ({ onChange, checked }) => {
  return (
    <div
      className={`toggle-switch ${checked ? 'active' : ''}`}
      onClick={() => onChange(!checked)}
    >
      <div className={`toggle-switch-label ${checked ? 'active' : ''}`}>18+</div>
    </div>
  );
};

export default ToggleSwitch;