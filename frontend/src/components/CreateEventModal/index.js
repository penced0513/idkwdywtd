import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateEvent from './CreateEvent';

function CreateEventModal({title}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>{title}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateEvent closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default CreateEventModal;
