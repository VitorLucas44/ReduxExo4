import React from 'react';
import { useSelector } from 'react-redux';

function Footer() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div className="footer" style={{ backgroundColor: theme }}>
      <p>Footer</p>
    </div>
  );
}

export default Footer;
