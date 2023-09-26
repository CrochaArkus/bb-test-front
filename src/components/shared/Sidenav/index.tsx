import {memo} from 'react'
import { Tab } from '../../sidenav/tab'
import { SITE_MANAGEMENT_TAB, DATA_MANAGEMENT_TAB, SITE_ADMINISTRATION_TAB } from '../../contants'

export const Sidenav = memo(() => {
  return (  
    <>
      <Tab title='SITE MANAGEMENT' items={SITE_MANAGEMENT_TAB} />
      <Tab title='DATA MANAGEMENT' items={DATA_MANAGEMENT_TAB} />
      <Tab title='SITE ADMINISTRATION' items={SITE_ADMINISTRATION_TAB} />
    </>
  )

})