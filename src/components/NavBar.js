import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../themeSlice';

function Navbar() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeTheme(e.target.value));
  };

  return (
    <div className="navbar" style={{ backgroundColor: theme }}>
      <h1>Mon projet React redux toolkit</h1>
      <select value={theme} onChange={handleChange}>
        <option value="red">Rouge</option>
        <option value="blue">Bleu</option>
        <option value="purple">Violet</option>
        <option value="yellow">Jaune</option>
      </select>
    </div>
  );
}

export default Navbar;

