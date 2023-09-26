import { memo } from 'react'

import './index.css'

interface ButtonProps {
  label: string
  onClick: () => void
}

export const Button = memo(({ label, onClick }: ButtonProps) => {
  return (
    <div className='button'>
        <button onClick={onClick}>{label}</button>
    </div>
  )
})