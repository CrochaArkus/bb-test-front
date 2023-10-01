import { memo } from 'react';

import './index.css';

type headerTranslate = {
  property: string,
  label: string,
  width: string
}

interface CatalogProps {
  items: any[],
  headers: headerTranslate[],
  ignoreValues: string[],
  editFunction?: (id: any) => void,
  deleteFunction?: (item: any) => void
}

export const Catalog = memo(({items, headers, ignoreValues, editFunction, deleteFunction}:CatalogProps) => {
  const sanitizedHeaders = headers.map(header => {
    return ignoreValues.indexOf(header.label) > -1 ? null : header
}).filter(header => header)

  const sanitizedItems: string[][] = [];

  items.forEach(item => {
    const tempSanitizedItems = Object.keys(item).map(key => {
      if (key === 'id') return item[key]
      return ignoreValues.indexOf(key) > -1 ? null : item[key]
    }).filter(item => item)
    
    sanitizedItems.push(tempSanitizedItems)
  })

  console.log(sanitizedItems);
  
  
  return (
    <div>
      <table className='uk-table uk-table-striped table'>
        <thead>
          <tr className='table-header'>
            {sanitizedHeaders.map((header, index) => {
              return (
                <th key={index} style={{ width: header?.width }}>{header?.label}</th>
              )
            })}
            {editFunction && <th onClick={editFunction}>Edit</th>}
            {deleteFunction && <th onClick={deleteFunction}>Delete</th>}
          </tr>
        </thead>
        <tbody>
          {sanitizedItems.map((sanitizedItem, index) => {
            return (
              <tr key={index}>
                {
                    sanitizedItem.map((item, index) => {
                      if (isNaN(parseInt(item))) {
                        return (
                          <td key={index}>{item}</td>
                        )
                      }
                    })
                }
                {editFunction && <td key={index} onClick={() => editFunction(sanitizedItem)} className='edit-button'>
                  <img src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png" alt='edit' /> 
                  </td>}
                {deleteFunction && <td key={index} onClick={() => deleteFunction(sanitizedItem)} className='edit-button'>
                  <img src="https://img.icons8.com/material-outlined/24/000000/delete--v1.png" alt='delete' />  
                </td>}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
})