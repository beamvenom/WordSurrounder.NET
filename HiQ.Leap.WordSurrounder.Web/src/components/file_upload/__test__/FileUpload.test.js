import React from 'react'
import { render, fireEvent , screen} from '@testing-library/react'
import FileUpload from '../FileUpload.jsx'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

let setUploadedFile
beforeEach(() => {
    setUploadedFile = jest.fn()
    render(<FileUpload setUploadedFile = {setUploadedFile}></FileUpload>)
    
  });

test("Upload text renders correctly",() =>{
    expect(screen.getByTestId("uploadText")).toHaveTextContent("Upload a text and the most occuring word in the text will be surronded by foo and bar!")
})
test("File field text renders correctly",() =>{
    expect(screen.getByTestId("fileFieldText")).toHaveTextContent("Upload a text file")
})
test("File field accepts text file correctly",() =>{
    const file = new File(['hello'], 'text-file.txt', { type: 'text/plain' })
    fireEvent.change(screen.getByTestId("fileField"), {
        target: { files: [file]},
    })
    let text = document.querySelector('input[type=file]')
    expect(text.files[0].name).toBe('text-file.txt')
    expect(screen.getByTestId("uploadText")).toHaveTextContent('...Processing...')
    expect(setUploadedFile).toHaveBeenCalledTimes(1)
})
test("File field denies incorrect file format correctly",() =>{
    const file = new File(['(⌐□_□)'], 'png-file.png', { type: 'image/png' })
    fireEvent.change(screen.getByTestId("fileField"), {
        target: { files: [file]},
    })
    let image = document.querySelector('input[type=file]')
    expect(image.files[0].name).toBe('png-file.png')
    expect(screen.getByTestId("uploadText")).toHaveTextContent('The supported file formats are .txt .rtf .file .md')
    expect(setUploadedFile).toHaveBeenCalledTimes(0)
})

test("matches snapshot", () => {
    const tree = renderer.create(<FileUpload></FileUpload>)
    expect(tree).toMatchSnapshot()
})