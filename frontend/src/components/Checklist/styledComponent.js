import styled from "styled-components"
import Box from '@mui/material/Box'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox';

export const ChecklistContainer = styled.section`
   width:335px;
   min-height: 50%;
   float:right;
   margin:20px;
   border:1px solid #D8DEEA;
   border-radius:5px;
   background-color: #FFFFFF;
`

export const ChecklistHeader = styled.h1`
   font-size:24px;
   font-weight:300;
   margin-left:20px;
`

export const FieldTextDiv = styled.div`
   input{
      margin-top:2px;
      border-style:none;
      font-size:16px;
      font-family: IBM Plex Sans;
      font-weight: 500;
      margin-left: 25px; 
   }
`
export const BoxContainer = styled(Box)({
   display: 'flex'
})

export const FormControlWrapper = styled(FormGroup)({
   marginLeft: '30px',
   '& span': {
      fontFamily: 'IBM Plex Sans !important',
      fontWeight: '500 !important',
      color: '#413E60'
   }
})

export const MyCheckbox = styled(Checkbox)({
   color: '#9077F6 !important',
   '&.Mui-checked': {
      color: '#9077F6 !important'
   },
})

export const InputField = styled.input`
   outline:none;
`
