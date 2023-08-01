import React from 'react';
import messagesData from '../../data/data.json';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  messageId: number;
}

const ModalPortfolio: React.FC<ModalProps> = ({ isOpen, onClose, messageId }) => {
  if (!isOpen) return null;

  const message = messagesData.find((msg) => msg.id === messageId)?.message;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg"> {/* Aumentamos el z-index del Modal */}
        <p className='text-black'>{message}</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalPortfolio;

