import {memo} from 'react'

import './index.css'

type Item = {
  name: string,
  isActive: boolean,
  url: string
}

interface TabProps {
  title: string,
  items: Item[]
}

export const Tab = memo(({title, items} : TabProps) => {
  const currentUrl = window.location.href;

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
          const isActive = item.url && currentUrl.includes(item.url) ? 'active' : ''
          return (
            <span  className={'item ' + isActive} >
              <a key={index} href={item.url} >
                {item.name}
              </a>
            </span>
          )
        })
        }
      </div>
    </>
  )
})