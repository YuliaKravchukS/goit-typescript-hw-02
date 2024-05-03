import { Image } from "../App/App.types";

export interface ImageGalleryProps {
  images: Image[];
  openModal: (id: number) => void;
}
