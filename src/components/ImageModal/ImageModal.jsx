import {Modal, Overlay} from './ImageModal.module.css'
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    // height:'100%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');
const ImageModal = ({modalIsOpen, closeModal, modalImage}) => {
  return (
    
      <ReactModal
         isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={Modal}
        overlayClassName={Overlay}
        style={customStyles}
      >
      <img
          src={modalImage.urls.regular}
          alt={modalImage.alt_description}
        />
      </ReactModal>
    
  )
}

export default ImageModal