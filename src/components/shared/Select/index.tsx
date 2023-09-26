import { memo } from 'react'

import './index.css'

interface SelectProps {
  options: { label: string, value: string }[]
  label: string
  onchange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  required?: boolean
}


export const Select = memo(({ options, onchange, label, required = false }: SelectProps) => {
  return (
    <div className="uk-form-select select" data-uk-form-select>
    <div>{label} {required && <span className='required'>*</span>}</div>
    
    <select onChange={onchange}>
        <option value="" disabled selected>Choose One...</option>
        {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
        ))}
    </select>
</div>
  )
})