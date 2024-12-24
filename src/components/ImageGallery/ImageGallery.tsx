import ImageCard from '../ImageCard/ImageCard';
import { ResultsImg } from '../types';
import s from './ImageGallery.module.css';

type ImageGalleryProps = {
  results: ResultsImg[];
  openModal: (img: ResultsImg) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ results, openModal }) => {
  return (
    <div>
      <ul className={s.imagesList}>
        {results.map(img => {
          return (
            <li
              key={img.id}
              className={s.imagesListItem}
              onClick={() => openModal(img)}
            >
              <ImageCard small={img.urls.small} description={img.description} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
