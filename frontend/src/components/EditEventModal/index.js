import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditEvent from './EditEvent';

function EditEventModal({event}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Event</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditEvent closeModal={() => setShowModal(false)} event={event} />
        </Modal>
      )}
    </>
  );
}

export default EditEventModal;
