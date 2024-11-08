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
      <h2>{img.alt_description}</h2>
      <div className={s.image}>
        <img src={img.urls.regular} alt={img.alt_description} />
      </div>
      <p>Likes: {img.likes}</p>
      <p>{img.description}</p>

      <h3>Author</h3>
      <p>Name: {img.user.name}</p>
      <p>location: {img.user.location}</p>
      {img.user.portfolio_url && (
        <a href={img.user.portfolio_url} target="_blank">
          Portfolio
        </a>
      )}
      <p>----------</p>
      <button onClick={closeModal}>close</button>
    </Modal>
  );
};

export default ImageModal;
