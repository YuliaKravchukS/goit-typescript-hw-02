import { Image } from "../App/App.types";

export interface ImageCardProps {
  image: Image;
  openModal: (id: number) => void;
}
