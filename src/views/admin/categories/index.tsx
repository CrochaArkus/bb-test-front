import { memo, useEffect, useState } from 'react'
import { FormContainer } from '../../../components/shared/FormContainer'
import { Select } from '../../../components/shared/Select'
import { MOCK } from './MOCK'
import './index.css'
import { Button } from '../../../components/shared/Button'
import { HEADERS_TRANSLATE, ITEMS } from '../test/constants'
import { Catalog } from '../../../components/shared/Catalog'

import ADD_IMAGE from '../../../assets/add.png';

import axios from 'axios';


export const Categories = memo(() => {
  const [filter, setFilter] = useState('' as string)


  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value)
  }


  // useEffect(() => {
  //   axios.get('https://localhost:7123/api/Categories/All')
  //     .then(response => {
  //       console.log(response.data);
  //     });
  // }, []);

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
          <input className="uk-search-input search" type="search" placeholder="Search by Name:" aria-label="" />
          <Button label='Go' onClick={() => {}} />
          <a href='/admin/categories/new' className=''>Reset</a>
          <Button label='Clear Header Cache' onClick={() => {}} />
        </div>
        <div className='sub-categories-container'>  
          <div className='sub-categories-items'>
            <a href='/admin/categories/sub-category' className='sub-category-button'>
              <img src={ADD_IMAGE} width={'15px'} alt='open new sub category'/> New Sub-Category</a>
            <a href='/admin/categories/sub-category' className='sub-category-button'>
              <img src={ADD_IMAGE} width={'15px'} alt='open new inferior sub category' /> New inferior Sub-Category</a>
          </div>
        </div>
      </FormContainer>
      <Catalog headers={HEADERS_TRANSLATE} ignoreValues={['category', 'id']} items={ITEMS} editFunction={handleModifyItem} deleteFunction={handleDeleteItem} />


    </div>
  )
})