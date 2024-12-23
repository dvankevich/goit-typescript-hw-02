import s from './LoadMoreBtm.module.css';

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <button className={s.button} type="button" onClick={handleLoadMore}>
      Load more ...
    </button>
  );
};

export default LoadMoreBtn;
