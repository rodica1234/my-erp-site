// src/components/Alert.jsx
import React from 'react';

export default function Alert({ type, children }) {
  const style = {
    padding: '10px 15px',
    margin: '10px 0',
    borderRadius: '5px',
    backgroundColor: type === 'warning' ? '#ffeeba' : '#cce5ff',
    color: '#856404',
  };
  return <div style={style}>{children}</div>;
}
