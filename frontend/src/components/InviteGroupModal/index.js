import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import InviteGroup from './InviteGroup';

function InviteGroupModal({setPendingMembers2}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Invite to Group</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <InviteGroup setPendingMembers2={setPendingMembers2} closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default InviteGroupModal;
