import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ results }) => {
  return (
    <div>
      <h2>Image Gallery</h2>
      <p>{results.length}</p>
      <ul className={s.imagesList}>
        {results.map(({ id, description, urls: { small, regular } }) => {
          return (
            <li key={id} className={s.imagesListItem}>
              <ImageCard
                small={small}
                regular={regular}
                description={description}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
