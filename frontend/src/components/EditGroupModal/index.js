import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditGroup from './EditGroup';

function EditGroupModal({name, groupPic}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Group</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditGroup closeModal={() => setShowModal(false)} name={name} groupPic={groupPic} />
        </Modal>
      )}
    </>
  );
}

export default EditGroupModal;
