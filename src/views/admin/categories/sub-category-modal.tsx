import { Select } from '../../../components/shared/Select/index';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image } from '../../../components/shared/Image';

import './sub-category-modal.css'
import { SelectFile } from '../../../components/categories/SelectFile';
import { Button } from '../../../components/shared/Button';

//TODO: ADD IMAGE ENDPOINT


interface SubCategoryModalProps {
  closeModal?: () => void,
  setImage: (images: any) => void
}


export const SubCategoryModal = ({setImage, closeModal = () => {}}: SubCategoryModalProps) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [existingFileSelected, setExistingFileSelected] = useState(true)

  const handleImageChange = (image: any) => {
    setSelectedImage(image)
  }

  const handleTabChange = (existingFileSelected: boolean) => {
    setExistingFileSelected(existingFileSelected)
  }

  const confirmSelectedFile = () => {
    //TODO: ADD AXIOS CALL TO ADD IMAGE ENDPOINT
    closeModal()
    setImage(selectedImage)
  }


  return (
    <div>
    <div className='flex-container'>
      <div className='category-image-container'>
        <div>
          <div className='flex-image-container'>
            { existingFileSelected && <Image image={null} addImage={() => {}} hideAddImage title='Selected Image' />}
            <Image image={selectedImage} addImage={() => {}} hideHeader title='Preview' />
          </div>
          <div>
            <Button label='Confirm Selected File' onClick={confirmSelectedFile} />
          </div>
        </div>
        <SelectFile setSelectedFile={handleImageChange} existingFileSelected={existingFileSelected} setExistingFileSelected={handleTabChange} />
      </div>
    </div>
  </div>
  )
}
