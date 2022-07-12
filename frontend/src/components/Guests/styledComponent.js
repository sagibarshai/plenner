import { style } from '@mui/system';
import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

//--------------------------Common--------------------------
export const ButtonCommonStyled = css`
  width: 150px;
  height: 32px;
  border-radius: 30px;
  background-color: white;
  border-color: grey;
  border-color: rgb(195, 195, 195);
`;

//--------------------------CSV--------------------------
export const CSVsectionStyled = styled.section`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;
export const CSVbuttonStyled = styled.div`
  ${ButtonCommonStyled}
  border: 0.5mm;
  border-style: groove;
  position: absolute;
  right: 200px;
  margin: auto;
  justify-content: center;
  color: black;
  text-align: center;
  line-height: 30px;
  padding-left: 20px;
  transform: translateY(-50%);
  font-size: 12px;
`;
export const AddButtonStyled = styled.button`
  width: 157px;
  height: 32px;
  background-color: #9077f6;
  border-radius: 30px;
  border: none;
  color: white;
  position: absolute;
  right: 32px;
  transform: translateY(-50%);
  &:hover {
    cursor: pointer;
  }
`;
export const TitleStyled = styled.h1`
  position: relative;
  left: 32px;
  font-size: 24px;
  font-weight: 300;
`;
export const DownloadIconStyle = styled.img`
  position: absolute;
  left: 24px;
  top: 7px;
`;
export const PlusIconStyled = styled.img`
  width: 12px;
  height: 12px;
  position: absolute;
  left: 22px;
  top: 10px;
`;
//--------------------------Filter--------------------------
export const FilterSectionStyled = styled.div`
  position: relative;
  background-color: #f5f7fa;
  width: 98%;
  height: 52px;
  margin: auto;
`;
export const FilterIconStyled = styled.img`
  position: absolute;
  top: 18px;
  left: 10px;
`;
export const FilterTitleStyled = styled.p`
  position: absolute;
  left: 32px;
  top: -2px;
`;
export const FilterFormStyled = styled.form`
  position: relative;
  display: flex;
  text-align: center;
  height: 52px;
  left: 24px;
  color: #61656c;
`;
export const FormContentStyled = styled.div`
  text-align: center;
  margin-top: 16px;
  height: 52px;
`;
export const LabelStyled = styled.label`
  margin-left: 20px;
  font-size: 14px;
  margin-top: 5px;
  /* margin-bottom: 16px; */
  /* height: 52px; */
  position: relative;
  bottom: 5px;
`;
export const TitleLabelStyled = styled.label`
  margin-left: 20px;
  font-size: 14px;
  margin-top: 5px;
  margin-top: 16px;
`;
export const DropDownStyled = styled.select`
  width: 160px;
  height: 32px;
  border-radius: 30px;
  border-color: rgb(195, 195, 195);
  padding-left: 10px;
  margin-left: 6px;
  transform: translateY(-15%);
  color: #61656c;
`;
export const InputStyled = styled.input`
  width: 125px;
  height: 28px;
  border-radius: 30px;
  border-style: groove;
  border-color: rgb(247, 247, 247);
  transform: translateY(-15%);
  padding-left: 35px;
  color: #61656c;
  margin-top: 16px;
`;
export const SearchIconStyled = styled.img`
  width: 16px;
  height: 16px;
  position: relative;
  left: 32px;
  top: 3px;
  z-index: 1;
  margin-top: 16px;
`;

//--------------------------Invitation--------------------------
export const InvitationSectionStyled = styled.section`
  width: 100%;
  height: 110px;
  position: relative;
`;

export const InvitationSentPstyled = styled.p`
  font-size: 18px;
  position: absolute;
  bottom: 25px;
  left: 30px;
  margin: 0;
`;
export const OutOfStyled = styled.span`
  font-size: 12px;
`;

export const SendButtonStyled = styled.div`
  ${ButtonCommonStyled}
  border: 0.5mm;
  border-style: groove;
  position: absolute;
  left: 270px;
  bottom: 20px;
  justify-content: center;
  color: black;
  text-align: center;
  line-height: 30px;
  padding-left: 20px;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;
export const SendIconStyled = styled.img`
  position: absolute;
  left: 24px;
  top: 8px;
`;

//--------------------------List section--------------------------

export const CommonTd = css`
  height: 60px;
  width: 13.936%;
  padding-left: 12px;
  line-height: 60px;
  box-shadow: inset 0px -1px 0px #ebeef5;
`;

export const commonTdTop = css`
  height: 60px;
  width: 13.936%;
  padding-left: 12px;
  line-height: 60px;
`;
export const TableSectionStyled = styled.div`
  width: 100%;
`;
export const TableStyled = styled.table`
  width: 96%;
  text-align: left;
  font-size: 14px;
  margin: auto;
`;
export const TheadStyled = styled.thead`
  height: 4rem;
  width: 100%;
`;
export const TbodyStyled = styled.tbody`
  width: 100%;
  height: 70px;
`;
export const TrStyled = styled.tr`
  display: flex;
  background-color: ${(props) => (!props.attending ? '#F5F7FA' : 'white')};
  color: ${(props) => (!props.attending ? '#A09FAF' : 'black')};
  width: 100%;
`;
export const LineStyled = styled.hr`
  height: 0.1px;
  margin: 0;
  color: red;
  border-width: 0.2px;
`;
export const ThStyled = styled.tr`
  display: flex;
  height: 33px;
  width: 100%;
  color: #909192;
`;
export const StandartTd = styled.td`
  ${CommonTd};
  width: ${(props) => (props ? props.width : '13.936%')};
  box-shadow: inset 0px -1px 0px #ebeef5;
  box-shadow: ${(props) => (!props.top ? 'inset 0px -1px 0px #EBEEF5' : 'none')};
`;
export const CheckboxTd = styled.td`
  ${CommonTd}
  width: 4%;
  box-shadow: ${(props) => (!props.top ? 'inset 0px -1px 0px #EBEEF5' : 'none')};
`;
export const NameTd = styled.td`
  ${CommonTd}
  width: 200px;
  font-weight: bold;
  box-shadow: ${(props) => (!props.top ? 'inset 0px -1px 0px #EBEEF5' : 'none')};
`;
export const InvitationTd = styled.td`
  ${CommonTd}
  position: relative;
  box-shadow: ${(props) => (!props.top ? 'inset 0px -1px 0px #EBEEF5' : 'none')};
`;
export const AttendingTd = styled.td`
  ${CommonTd}
  color: ${(props) => (props.attending ? '#009317' : '#A09FAF')};
  box-shadow: ${(props) => (!props.top ? 'inset 0px -1px 0px #EBEEF5' : 'none')};
`;
export const DeleteTd = styled.td`
  ${CommonTd}
  box-shadow: ${(props) => (!props.top ? 'inset 0px -1px 0px #EBEEF5' : 'none')};
`;
export const CheckBoxStyled = styled.img`
  margin: 0 auto;
`;
export const CommonIconStyle = css`
  position: relative;
  top: 3px;
`;
export const CircleVStyled = styled.img`
  ${CommonIconStyle}
`;
export const CircleCheckStyle = styled.img`
  display: ${(props) => (!props.attending ? 'none' : 'inline')};
  ${CommonIconStyle}
`;
export const CircleXStyle = styled.img`
  display: ${(props) => (props.attending ? 'none' : 'inline')};
  ${CommonIconStyle}
`;
export const DeleteIcon = styled.img`
  float: right;
  padding-top: 22px;
  padding-left: 22px;
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`;
export const SendMessageIcon = styled.img`
  float: right;
  padding-top: 23px;
  padding-left: 22px;
  &:hover {
    cursor: pointer;
  }
`;

//--------------------------Modal--------------------------

export const ModalCommonUnputStyled = css`
  width: 398px;
  height: 35px;
  border: none;
  padding-left: 10px;
  margin-top: 4px;
`;

export const ModalInputStyled = styled.input`
  ${ModalCommonUnputStyled}
`;

export const ModalDropDownStyled = styled.select`
  ${ModalCommonUnputStyled}
  width: 408px;
`;

export const CloseModalButton = styled.img`
  position: absolute;
  right: 32px;
  top: 42px;
  &:hover {
    cursor: pointer;
  }
`;

export const ModalP = styled.p`
  margin: auto;
`;

export const AddGuestButton = styled.button`
  ${ButtonCommonStyled}
  background-color: #9077F6;
  border: none;
  width: 103px;
  position: absolute;
  top: 470px;
  right: -20px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
