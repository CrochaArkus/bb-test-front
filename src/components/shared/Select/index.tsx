import { memo } from 'react'

import './index.css'

interface SelectProps {
  options: { label: string, value: string }[]
  label: string
  onchange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  required?: boolean,
  inline?: boolean
}


export const Select = memo(({ options, onchange, label, required = false, inline = false }: SelectProps) => {
  return (
    <div className="uk-form-select select" style={{display: inline ? 'flex' : 'inherit'}} data-uk-form-select>
    <div className={inline ? 'inline': ''}>{label} {required && <span className='required'>*</span>}</div>
    
    <select onChange={onchange} defaultValue=''>
        <option value="" disabled>Choose One...</option>
        {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
        ))}
    </select>
</div>
  )
})