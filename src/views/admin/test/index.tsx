import { memo, useState } from 'react'
import { CheckBox } from '../../../components/shared/CheckBox'
import { Button } from '../../../components/shared/Button/index';
import { Select } from '../../../components/shared/Select';
import { CHECKBOX_LABEL_NOT_REQIRED_TEXT, CHECKBOX_LABEL_REQUIRED_TEXT, BUTTON_LABEL, SELECT_OPTIONS, ITEMS, HEADERS_TRANSLATE } from './constants';
import { TextInput } from '../../../components/shared/TextInput';
import { Image } from '../../../components/shared/Image';
import { Modal } from '../../../components/shared/Modal';
import { Catalog } from '../../../components/shared/Catalog';

export const Test = memo(() => {
  const [checkedRequired, setCheckedRequired] = useState(false)
  const [checkedNotRequired, setCheckedNotRequired] = useState(false)
  const [inputText, setInputText] = useState('')
  const [inputTextRequired, setInputTextRequired] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  
  const handleCheckedRequired = (ev: React.ChangeEvent<HTMLInputElement>) => {
    alert(ev.target.value);
    setCheckedRequired(!checkedRequired)
  }

  const handleCheckedNotRequired = () => {
    setCheckedNotRequired(!checkedNotRequired)
  }

  const handleButtonClicked = () => {
    alert('button clicked');
  }

  const handleSelectChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    alert(ev.target.value);
  }

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(ev.target.value);
  }

  const handleInputRequiredChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputTextRequired(ev.target.value);
  }

  const openModal = () => {
    setModalOpen(true)
  }

  const modalBody = (
      <div>
        <h1>Modal body</h1>
      </div>
    )

    const handleModalClose = () => {
      setModalOpen(false)
    }
  

  return (
    <div>
      <h1>Checkboxes</h1>
      <CheckBox id="test-required" label={CHECKBOX_LABEL_REQUIRED_TEXT} value="test" checked={checkedRequired} onchange={handleCheckedRequired} />
      <CheckBox id="test-not-required" label={CHECKBOX_LABEL_NOT_REQIRED_TEXT} value="test" checked={checkedNotRequired} onchange={handleCheckedNotRequired} required={true}/>
      <div>
        <hr />
        <div>id: is the given id to the checkbox.</div>
        <div>label: is the label that will be shown by the checkbox.</div>
        <div>value: is the value that will be returned on the onChange function.</div>
        <div>checked: shows the thick if it is true.</div>
        <div>onchange: function to execute when the checkbox is clicked.</div>
        <div>required: shows the * if it is true.</div>
        <hr />

      </div>

      <h1>Buttons</h1>

      <Button label={BUTTON_LABEL} onClick={handleButtonClicked} />

      <h1>Select</h1>
      <Select options={SELECT_OPTIONS} onchange={handleSelectChange} label={'not required'} />
      <Select options={SELECT_OPTIONS} onchange={handleSelectChange} label={'required'} required/>

      <h1>Text input</h1>
      <TextInput id="test-input" label="not required" value={inputText} onchange={handleInputChange} />
      <TextInput id="test-input-required" label="required" value={inputTextRequired} onchange={handleInputRequiredChange} required />
      <hr />

      <h1>Image Container / Modal</h1>
      <Image image={''} addImage={openModal} />
      <Image image={'https://habitatweb.mx/wp-content/uploads/2015/08/webapp.png'} addImage={openModal} />
      <Modal modalHeader='Select an image from the list or upload a new image:' modalBody={modalBody} isOpen={modalOpen} closeModal={handleModalClose} />
      <hr />

      <h1>Catalog</h1>
      <Catalog headers={HEADERS_TRANSLATE} ignoreValues={['category']} items={ITEMS} editFunction={() => {}} />
      <hr />
    </div>
  )
})