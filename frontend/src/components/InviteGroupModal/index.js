import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import InviteGroup from './InviteGroup';

function InviteGroupModal({name, groupPic}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Invite to Group</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <InviteGroup closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default InviteGroupModal;
