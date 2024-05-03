import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.type";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <div>
      <button type="button" onClick={onLoadMore} className={css.btnLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
