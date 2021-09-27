import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import InviteEvent from './InviteEvent';

function InviteEventModal({setPendingMembers2}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Invite to Event</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <InviteEvent setPendingMembers2={setPendingMembers2} closeModal={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default InviteEventModal;
