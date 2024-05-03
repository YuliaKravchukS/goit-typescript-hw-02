import css from './ImageCard.module.css'
const ImageCard = ({image, openModal}) => {
  const handleClick = () => {
    openModal(image.id);
  };
  return (
    <div className={css.wrapImg}>
  <img className={css.image} src={image.urls.small} alt={image.description} onClick={handleClick}/>
              <div className={css.descriptionCard}>
                 <div >
                   <p>Author: </p>
                   <span><b>{image.user.name}</b></span>
                 </div>
                <div>
                  <p>Likes: </p>
                  <b>{image.likes}</b>
                </div>
                 {/* <div>
                   <p>Portfolio:</p>
                   <a href='{image.links.html}'>link</a>
                 </div> */}
                 
              </div>
</div>
  )
}

export default ImageCard