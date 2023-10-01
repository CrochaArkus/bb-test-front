import {memo} from 'react'

import './index.css'

interface ImageProps {
  image: string | null,
  addImage: () => void,
  title?: string,
  hideHeader?: boolean
  hideAddImage?: boolean
}

// const selectFile = () => {
//   document.getElementById('upload-image')?.click();
// }
export const Image = memo(({image, addImage, hideHeader = false, hideAddImage = false, title = ''}: ImageProps) => {
  return (
    <div className='image-container'>
      {/* <input type="file" accept='image/*' name="upload-image" id="upload-image" className='hidden' /> */}
      <span className='image-title'>{title}</span>
      {!hideHeader && <div className='image-header'>
        {!hideAddImage && <div className='add-image' onClick={addImage}>
        </div>}
      </div>}
      <div className="image-body">
        {image && <img src={image} alt='selected' />}
        {!image && <h2>NO IMAGE SELECTED</h2>}
      </div>
    </div>
  )
})