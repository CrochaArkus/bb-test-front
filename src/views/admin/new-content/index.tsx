import { memo, useState } from 'react'
import { Select } from '../../../components/shared/Select'
import { CheckBox } from '../../../components/shared/CheckBox/index';

import './index.css'
import { Button } from '../../../components/shared/Button';
import { TextInput } from '../../../components/shared/TextInput';
import { Image } from '../../../components/shared/Image';
import { Modal } from '../../../components/shared/Modal';
import { SubCategoryModal } from '../categories/sub-category-modal'

const MOCK = [
  {
    label: 'First',
    value: '1'
  },{
    label: 'Last',
    value: '2'
  }
];

export const NewContent = memo(() => {
  const [modalOpen, setModalOpen] = useState(false)
  const [title, setTitle] = useState('' as string)
  const [prettyUrl, setPrettyUrl] = useState('' as string)
  const [subtitle, setSubtitle] = useState('' as string)
  const [headline, setHeadline] = useState('' as string)
  const [author, setAuthor] = useState('' as string)
  const [onlyOnHomePage, setOnlyOnHomePage] = useState(false)
  const [image, setImage] = useState(null)

  const setTitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const setPrettyUrlValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrettyUrl(e.target.value)
  }

  const setSubtitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubtitle(e.target.value)
  }

  const setHeadlineValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeadline(e.target.value)
  }

  const setAuthorValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value)
  }

  const handleSubcategoryCloseModal = () => {
    setModalOpen(false)
  }

  const handleAddImage = () => {
    setModalOpen(true)
  }

  const handleSetOnlyOnHomePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOnlyOnHomePage(e.target.checked)
  }

  const handleSetImage = (image: any) => {
    setImage(image)
  } 

  const save = () => {
    window.location.href = '/admin/categories'
  }

  return (
    <div>
      <div className='new-content-input-container'>
        <TextInput label='Category Name' onchange={setTitleValue} required  value={title} id='category-text' />
        <TextInput label='Pretty Url' onchange={setPrettyUrlValue} value={prettyUrl} id='category-text' />
        <TextInput label='Subtitle' onchange={setSubtitleValue} value={subtitle} id='category-text' />
        <TextInput label='Headline' onchange={setHeadlineValue} value={headline} id='category-text' />
        <TextInput label='Author' onchange={setAuthorValue} value={author} id='category-text' />
      </div>
      <div>
        <div>Document Date {image}</div>
        <input type="date" name="" id="" />
      </div>
      <div className='middle-align'>
        <Image image={image} addImage={handleAddImage} title='Select Thumbnail'  />
        <CheckBox label='Featured in header and footer' checked={onlyOnHomePage} id='header-and-footer' onchange={handleSetOnlyOnHomePage}  />

      </div>
      <div>
        <Button label='Save' onClick={save} />
      </div>
      <Modal modalHeader='Select an image from the list or upload a new image:' modalBody={SubCategoryModal} isOpen={modalOpen} closeModal={handleSubcategoryCloseModal} setImage={handleSetImage} />
    </div>
  )
})