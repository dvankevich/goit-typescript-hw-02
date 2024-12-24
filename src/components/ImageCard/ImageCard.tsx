import s from './ImageCard.module.css';

type ImageCardProps = {
  description: string | undefined;
  small: string;
};

const ImageCard = ({ description = '', small }: ImageCardProps) => {
  return <img className={s.img} src={small} alt={description} />;
};

export default ImageCard;
