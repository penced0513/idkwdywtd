import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateGroup from './CreateGroup';

function CreateGroupModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create Group</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateGroup closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default CreateGroupModal;
