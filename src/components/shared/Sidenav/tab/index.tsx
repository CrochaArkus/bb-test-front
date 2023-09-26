import {memo} from 'react'

import './index.css'

type Item = {
  name: string,
  isActive: boolean
}
interface TabProps {
  title: string,
  items: Item[]
}

export const Tab = memo(({title, items} : TabProps) => {
  return (
    <>
      <div className='tab-container'>
        <div>
          <span uk-icon="chevron-down"></span>
          <span>{title}</span>
        </div>
      </div>
      <div className='items'>
        {items.map((item, index) => {
          return (
            <div key={index} className='item'>
              {item.name}
            </div>
          )
        })
        }
      </div>
    </>
  )
})