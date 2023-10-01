import { memo } from 'react'

import './index.css'

interface FormContainerProps {
  children: React.ReactNode
  title: string
}

export const FormContainer = memo(({children, title}: FormContainerProps) => {
  return (
    <div className='form-container'>
      <div className='title'>
        {title}
      </div>
      <div className='form-children'>
        {children}
      </div>
    </div>
  )
})