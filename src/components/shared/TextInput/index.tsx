import { memo } from 'react'

import './index.css'

interface CheckBoxProps {
  id: string
  label: string
  value: string
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

export const TextInput = memo(({  id, label, value, onchange, required = false }: CheckBoxProps) => {
  return (
    <div className='text-input'>
      <div>
        <label className='label' htmlFor={id}>
          {label}
          {required && <span className='required'>*</span>}
        </label>
      </div>
      <input type="text" id={id} name={id} value={value} onChange={onchange} />
    </div>
  )
})