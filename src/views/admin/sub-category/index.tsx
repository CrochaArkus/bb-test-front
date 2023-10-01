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

export const SubCategory = memo(() => {
  const [featuredHeaderFooter, setFeaturedHeaderFooter] = useState(false)
  const [bannerIconsSection, setBannerIconsSection] = useState(false)
  const [titlesSection, setTitlesSection] = useState(false)
  const [useExternalUrl, setUseExternalUrl] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('' as string)
  const [categoryName, setCategoryName] = useState('' as string)
  const [modalOpen, setModalOpen] = useState(false)
  const [image, setImage] = useState(null)

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  const handleFeaturedHeaderFooter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeaturedHeaderFooter(e.target.checked)
  }

  const handleBannerIconsSection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBannerIconsSection(e.target.checked)
  }

  const handleTitlesSection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitlesSection(e.target.checked)
  }

  const handleCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value)
  }

  const handleUseExternalUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUseExternalUrl(e.target.checked)
  }

  const handleSubcategoryCloseModal = () => {
    setModalOpen(false)
  }

  const handleAddImage = () => {
    setModalOpen(true)
  }

  const handleSetImage = (image: any) => {
    setImage(image)
  } 

  const save = () => {
    window.location.href = '/admin/categories'
  }
  return (
    <div>
      <div>
        <Select label='Select Category' onchange={handleCategoryChange} options={MOCK} required />
      </div>
      <div className='label-group'>
        <CheckBox label='Featured in header and footer' checked={featuredHeaderFooter} id='header-and-footer' onchange={handleFeaturedHeaderFooter}  />
        <CheckBox label='Featured in header and footer' checked={bannerIconsSection} id='header-and-footer' onchange={handleBannerIconsSection}  />
        <CheckBox label='Featured in header and footer' checked={titlesSection} id='header-and-footer' onchange={handleTitlesSection}  />
      </div>
      <div>
        <Button label='Choose Category Icon' onClick={() => {}} />
      </div>
      <div>
        <TextInput label='Category Name' onchange={handleCategoryName} required  value={categoryName} id='category-text' />
      </div>
      <div className='label-group'>
        <CheckBox label='Featured in header and footer' checked={useExternalUrl} id='header-and-footer' onchange={handleUseExternalUrl}  />
      </div>
      <div>
        <Image image={image} addImage={handleAddImage} title='Select Thumbnail' />
      </div>
      <div>
        <Button label='Save' onClick={save} />
      </div>
      <Modal modalHeader='Select an image from the list or upload a new image:' modalBody={SubCategoryModal} isOpen={modalOpen} closeModal={handleSubcategoryCloseModal} setImage={handleSetImage} />
    </div>
  )
})