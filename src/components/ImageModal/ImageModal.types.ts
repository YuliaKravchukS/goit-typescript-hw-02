import { Image } from "../App/App.types";

export interface ImageModalProps {
  modalIsOpen: boolean;
  modalImage: Image | undefined;
  closeModal: () => void;
}
