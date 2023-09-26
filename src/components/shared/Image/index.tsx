import {memo} from 'react'

import './index.css'

interface ImageProps {
  image: string | null
  addImage: () => void
}

// const selectFile = () => {
//   document.getElementById('upload-image')?.click();
// }
export const Image = memo(({image, addImage}: ImageProps) => {
  return (
    <div className='image-container'>
      {/* <input type="file" accept='image/*' name="upload-image" id="upload-image" className='hidden' /> */}
      <div className='image-header'>
        <div className='add-image' onClick={addImage}>
        </div>
      </div>
      <div className="image-body">
        {image && <img src={image} alt='selected' />}
        {!image && <h2>NO IMAGE SELECTED</h2>}
      </div>
    </div>
  )
})