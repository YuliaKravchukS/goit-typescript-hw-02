import css from "./ImageCard.module.css";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  const handleClick = (): void => {
    openModal(image.id);
  };
  return (
    <div className={css.wrapImg}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.description}
        onClick={handleClick}
      />
      <div className={css.descriptionCard}>
        <div>
          <p>Author: </p>
          <span>
            <b>{image.user.name}</b>
          </span>
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
  );
};

export default ImageCard;
