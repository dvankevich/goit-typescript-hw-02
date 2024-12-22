import s from './ImageCard.module.css';

const ImageCard = ({ description, small }) => {
  return <img className={s.img} src={small} alt={description} />;
};

export default ImageCard;
