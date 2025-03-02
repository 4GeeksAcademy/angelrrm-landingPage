import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Website</p>
      </div>
    </footer>
  );
};

export default Footer;