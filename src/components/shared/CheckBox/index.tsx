import { memo } from 'react'

import './index.css'

interface CheckBoxProps {
  checked: boolean
  id: string
  label: string
  value: string
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

export const CheckBox = memo(({ checked, id, label, value, onchange, required = false }: CheckBoxProps) => {
  return (
    <div className='checkbox'>
      <label className='label'>
        <input type="checkbox" id={id} value={value} checked={checked} onChange={onchange} /> {label}
      </label>
      {required && <span className='required'>*</span>}
    </div>
  )
})