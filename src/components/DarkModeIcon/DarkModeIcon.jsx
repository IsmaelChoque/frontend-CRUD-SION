import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../reduxtoolkit/slices/dark/darkSlice';

const DarkModeIcon = () => {
  const dispatch = useDispatch();

  const { darkMode } = useSelector((state) => state.dark);

  const handleClickDarkMode = () => {
    dispatch(setDarkMode(!darkMode));
  };

  return (
    <div onClick={() => handleClickDarkMode()} style={{ cursor: 'pointer' }}>
      <i
        className={`bi bi-${darkMode ? 'sun' : 'moon'}-fill h4`}
        style={{ color: darkMode && '#ffdd00' }}
      ></i>
    </div>
  );
};

export default DarkModeIcon;
