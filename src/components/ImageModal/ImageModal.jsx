import Modal from 'react-modal';
import s from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, closeModal, img }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={s.Modal}
      overlayClassName={s.Overlay}
    >
      <div className={s.image}>
        <img src={img.urls.regular} alt={img.alt_description} />
      </div>
      <h2>{img.alt_description}</h2>

      <p>Likes: {img.likes}</p>
      <button onClick={closeModal}>close</button>
    </Modal>
  );
};

export default ImageModal;
