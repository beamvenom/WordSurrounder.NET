import styled from 'styled-components'

export const FileUploadContainer = styled.section`
  position: relative;
  vertical-align: bottom;
  border: 2px dotted lightgray;
  padding: 35px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`

export const FormField = styled.input`
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &:focus {
    outline: none;
  }
`

export const FileUploadText = styled.p`
  font-weight: bold;
  letter-spacing: 2.2px;
  margin-top: 0;
  text-align: center;
`

export const UploadFileBtn = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #3498db;
  cursor: pointer;
  font-size: 1rem;
  line-height: ;
  padding: 1.1em 2.8em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  border-radius: 6px;
  color: #3498db;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 200ms ease-in-out;
  font-family: 'Open Sans', sans-serif;
  width: 45%;
  display: flex;
  align-items: center;
  padding-right: 0;
  justify-content: center;

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background: #3498db;
    z-index: -1;
    transition: width 250ms ease-in-out;
  }

  i {
    font-size: 30px;
    margin-right: 5px;
    border-right: 2px solid;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 500px) {
    width: 70%;
  }

  @media only screen and (max-width: 350px) {
    width: 100%;
  }

  &:hover {
    color: #fff;
    outline: 0;
    background: transparent;

    &:after {
      width: 110%;
    }
  }

  &:focus {
    outline: 0;
    background: transparent;
  }

  &:disabled {
    opacity: 0.4;
    filter: grayscale(100%);
    pointer-events: none;
  }
`
