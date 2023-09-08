import { Button, Modal } from 'react-bootstrap';

const ConfirmationModal = ({
  showModal,
  handleDelete,
  handleCloseModal,
  loading,
}) => (
  <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title>Confirm Deletion</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={handleCloseModal}>
        Cancel
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        {loading ? 'Loading...' : 'Delete'}
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ConfirmationModal;
