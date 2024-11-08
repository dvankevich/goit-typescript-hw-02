import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ results, openModal }) => {
  return (
    <div>
      <h2>Image Gallery</h2>
      <p>{results.length}</p>
      <ul className={s.imagesList}>
        {/* {results.map(({ id, description, urls: { small, regular } }) => { */}
        {results.map(img => {
          return (
            <li
              key={img.id}
              className={s.imagesListItem}
              onClick={() => openModal(img)}
            >
              <ImageCard
                small={img.urls.small}
                regular={img.url.regular}
                description={img.description}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
