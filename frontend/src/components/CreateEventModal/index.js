import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateEvent from './CreateEvent';

function CreateEventModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create Event</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateEvent closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default CreateEventModal;
