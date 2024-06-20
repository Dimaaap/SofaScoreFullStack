import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};