import css from './LoadMoreBtn.module.css'
const LoadMoreBtn = ({onLoadMore}) => {

  return (
    <div>
      <button type="button" onClick={onLoadMore} className={css.btnLoadMore}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn