import React, { useState } from 'react';
import { Button } from '../ui/button';
import { IoMenu, IoCloseSharp } from 'react-icons/io5';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Button onClick={toggle} variant={'ghost'} size={'icon'}>
      {isMenuOpen ? <IoCloseSharp /> : <IoMenu />}
    </Button>
  );
};

export default MobileMenu;
