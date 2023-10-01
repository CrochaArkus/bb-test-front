import {memo, JSX} from 'react'

import './index.css'

interface ModalProps {
  modalHeader: string
  modalBody: ((props: any) => JSX.Element)
  isOpen: boolean
  closeModal: () => void,
  setImage?: (image: any) => void
}

export const Modal = memo(({modalHeader, modalBody, isOpen = false, closeModal, setImage = ()=>{}}: ModalProps) => {
  return (
    <div className='modal' style={{ display: isOpen ? 'inherit' : 'none' }}>
      <div className='background'></div>
      <div className='modal-content'>
        <div className='modal-header'>
          <span>{modalHeader}</span>
          <span className='close' onClick={closeModal}>X</span>
        </div>
        <div className='modal-body'>
          {modalBody({ closeModal, setImage })}
        </div>
        <div className='modal-footer'>
        </div>
      </div>
    </div>
  )
})