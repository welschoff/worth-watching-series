import { useState } from 'react';
import styles from './AddButton.module.css';

function AddButton() {
  const [isActive, setActive] = useState(Boolean);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 27 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={isActive ? styles.active : styles.inactive}
        onClick={handleClick}
        d="M0.52585 4.79832C-0.700445 8.02601 0.325826 11.3104 2.48857 13.785C3.91611 15.4631 5.62221 16.9094 7.36648 18.1739C8.97123 19.4464 12.5625 21.9641 13.5144 22.0341C14.3558 21.8971 15.2998 21.0866 15.9678 20.6695C19.7212 18.239 23.7616 15.2833 25.8102 12.0516C27.5279 8.94907 27.531 5.11162 24.8578 2.73298C21.3914 0.0709574 16.1655 0.591122 13.5144 3.37226C12.8024 2.58547 11.9269 1.96668 10.8878 1.51591C6.67555 0.0836267 2.29347 1.54309 0.52585 4.79832V4.79832Z"
        fill=""
      />
    </svg>
  );
}

export default AddButton;
