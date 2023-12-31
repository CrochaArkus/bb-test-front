import {memo} from 'react'
import { Tab } from './tab'
import { SITE_MANAGEMENT_TAB, DATA_MANAGEMENT_TAB, SITE_ADMINISTRATION_TAB } from '../../constants'

export const Sidenav = memo(() => {
  return (  
    <>
      <Tab title='SITE MANAGEMENT' items={SITE_MANAGEMENT_TAB} />
      <Tab title='DATA MANAGEMENT' items={DATA_MANAGEMENT_TAB} />
      <Tab title='SITE ADMINISTRATION' items={SITE_ADMINISTRATION_TAB} />
    </>
  )

})