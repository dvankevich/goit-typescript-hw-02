import s from './LoadMoreBtm.module.css';

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button className={s.button} type="button" onClick={handleLoadMore}>
      Load more ...
    </button>
  );
};

export default LoadMoreBtn;
