import React from 'react'
import {
  FileUploadContainer,
  FormField,
  FileUploadText,
  UploadFileBtn,
} from './FileUpload.js'

const FileUpload = (props) => {
  const onFileChange = () => {
    var uploadedFile = document.querySelector('input[type=file]').files[0]
    var allowedFileFormats = ['txt', 'rtf', 'md', 'file']
    if (typeof uploadedFile !== 'undefined') {
      if (allowedFileFormats.includes(uploadedFile.name.split('.')[1])) {
        document.getElementById('uploadText').innerHTML = '...Processing...'
        props.setUploadedFile(uploadedFile)
      } else {
        document.getElementById('uploadText').innerHTML =
          'The supported file formats are .txt .rtf .file .md'
      }
    }
  }
  return (
    <>
      <FileUploadContainer>
        <FileUploadText type data-testid="uploadText" id="uploadText">
          Upload a text and the most occuring word in the text will be surronded by foo
          and bar!
        </FileUploadText>
        <UploadFileBtn>
          <i className="fas fa-file-upload" />
          <span data-testid = "fileFieldText"> Upload a text file </span>
          <FormField data-testid = "fileField" type="file" onChange={onFileChange} />
        </UploadFileBtn>
      </FileUploadContainer>
    </>
  )
}
export default FileUpload