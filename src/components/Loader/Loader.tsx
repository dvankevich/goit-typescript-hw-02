import { MagnifyingGlass } from 'react-loader-spinner';
// можна залишити без типізації, тому що, немає пропсів і немає логіки яка потребує типізації
const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{}}
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
};

export default Loader;
