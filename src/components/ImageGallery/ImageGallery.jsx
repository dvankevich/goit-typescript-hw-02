const ImageGallery = ({ results }) => {
  return (
    <div>
      <h2>Image Gallery</h2>
      <p>{results.length}</p>
      <ul>
        {results.map(({ id, description, urls: { small, regular } }) => {
          return (
            <li key={id}>
              small={small}
              regular={regular}
              description={description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
