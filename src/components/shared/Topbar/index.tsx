import { memo } from 'react'

import './index.css'

export const Topbar = memo(() => {
  return (
    <div className='container'>
      <div className='sidenav'>
        <div>
          <button className='logout'>Logout</button>
        </div>
        <div>
          <button className='layout-pages'>Layout Pages</button>
        </div>
      </div>
      <div className='content'>
      <div className='right-bar'></div>
      <button className="marketing-center">eXp Marketing Center</button>
      </div>
    </div>
  )
})