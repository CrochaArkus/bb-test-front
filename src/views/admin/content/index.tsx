import { memo, useState } from 'react'
import { FormContainer } from '../../../components/shared/FormContainer'
import { Select } from '../../../components/shared/Select'
import { MOCK } from './MOCK'
import './index.css'
import { Button } from '../../../components/shared/Button'
import { HEADERS_TRANSLATE, ITEMS } from '../test/constants'
import { Catalog } from '../../../components/shared/Catalog'

import ADD_IMAGE from '../../../assets/add.png';

export const Content = memo(() => {
  const [filter, setFilter] = useState('' as string)


  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value)
    console.log(filter);
  }


  const handleModifyItem = (item: any) => {
    if (item.length === 0) return
    window.location.href = `/admin/categories/sub-category?id=${item[0]}`
  }

  const handleDeleteItem = (item: any) => {
    if (item.length === 0) return
    alert(`Deleting item with id ${item[0]}`)
  }

  return (
    <div>
      <FormContainer title='MANAGE CONTENT CATEGORIES'>
      <div className='categories-container'>
          <Select label='Filter by:' options={MOCK} onchange={handleFilterChange} inline />
          <input className="uk-search-input search" type="text" placeholder="" aria-label="" />
          <Select label='' options={MOCK} onchange={handleFilterChange} inline />
        </div>
        <div className='categories-container'>
          <Select label='Filter by:' options={MOCK} onchange={handleFilterChange} inline />
          <Select label='Filter by:' options={MOCK} onchange={handleFilterChange} inline />
          <Select label='Filter by:' options={MOCK} onchange={handleFilterChange} inline />
        </div>
        <div className='categories-container'>
          <input className="uk-search-input search" type="search" placeholder="Search by Name:" aria-label="" />
          <Button label='Go' onClick={() => {}} />
          <a href='#'>Reset</a>
        </div>

        <div className='sub-categories-container'>  
          <div className='sub-categories-items'>
            <a href='/admin/content/new' className='sub-category-button'>
              <img src={ADD_IMAGE} width={'15px'} alt='open new sub category'/> New Content</a>
          </div>
        </div>
        <div className='upper-catalog-menu'>
          <Button label='Download Content Report' onClick={() => {}} />
          <a href='#' className=''>Re-order Mobile Trending</a>
          <a href='#' className=''>Re-order Trending</a>
        </div>
      </FormContainer>
      <Catalog headers={HEADERS_TRANSLATE} ignoreValues={['category']} items={ITEMS} editFunction={handleModifyItem} deleteFunction={handleDeleteItem} />


    </div>
  )
})