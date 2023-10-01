import {memo} from 'react'

import './index.css'

const MOCK = [
  {
    name: 'test.jpg',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },{
    name: 'test1.jpg',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },{
    name: 'test2.jpg',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },{
    name: 'test3.jpg',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },{
    name: 'test4.jpg',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },{
    name: 'test5.jpg',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  }
]

interface SelectFileProps {
  setSelectedFile: (file: any) => void,
  existingFileSelected: boolean,
  setExistingFileSelected: (existingFileSelected: boolean) => void
}


export const SelectFile = memo(({setSelectedFile, existingFileSelected, setExistingFileSelected}: SelectFileProps) => {

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(URL.createObjectURL(event.target.files[0]))
    }
  }
   
  return (
    <div className='select-file-container'>
      <div>
        <span className='select-file-tab' 
          style={{background: existingFileSelected ? '#fff' : '#c5c5c5', color: existingFileSelected ? '#000': '#fff'}}
          onClick={() => setExistingFileSelected(true)}
        >SELECT EXISTING FILE</span>
        <span 
          className='select-file-tab' style={{background: !existingFileSelected ? '#fff' : '#c5c5c5', color: !existingFileSelected ? '#000': '#fff'}}
          onClick={() => setExistingFileSelected(false)}
        >UPLOAD NEW FILE</span>
      </div>
      { existingFileSelected && <div className='image-list'>
          {MOCK.map((item, index) =>{
            return (
            <div key={index} className='select-file-item' >
              <span>{item.name}</span>
            </div>
            )}
          )}
      </div>}
      { !existingFileSelected && 
      <div className='image-list'>
        <div className='choose-image'>
          <input type="file" name="Choose file" id="image"  accept="image/*"  onChange={onImageChange} />
        </div>
      </div>}
    </div>
  )
})