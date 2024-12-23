import Modal from 'react-modal';
import s from './ImageModal.module.css';
import { ImageModalProps, Img } from '../types';

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, closeModal, img }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={s.Modal}
      overlayClassName={s.Overlay}
    >
      <h2 className={s.h2}>{img.alt_description}</h2>
      <div className={s.image}>
        <img
          className={s.img}
          src={img.urls.regular}
          alt={img.alt_description}
        />
      </div>
      <p>Likes: {img.likes}</p>
      <p>{img.description}</p>

      <p>Author name: {img.user.name}</p>
      {img.user.location && <p>location: {img.user.location}</p>}
      <p>total author photos: {img.user.total_photos}</p>

      {img.user.portfolio_url && (
        <a href={img.user.portfolio_url} target="_blank">
          Portfolio
        </a>
      )}
    </Modal>
  );
};

export default ImageModal;
