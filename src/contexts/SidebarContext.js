import React, { createContext, useState } from 'react';

export const SidebarContext = createContext()

export const SidebarStore = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  )
};
