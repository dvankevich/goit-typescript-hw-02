import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, closeModal, img }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(19, 19, 19, 0.5)',
        },
        content: {
          padding: '0',
          height: 'max-content',
          overflow: 'hidden',
        },
      }}
    >
      <img src={img.urls.regular} alt={img.alt_description} />
    </Modal>
  );
};

export default ImageModal;
