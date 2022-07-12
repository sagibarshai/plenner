import React, { useState } from 'react';
import {
  PopupContainer,
  Header,
  Title,
  Icon,
  MainContainer,
  SubTitle,
  TabelsContainer,
  TableContainer,
  Text,
} from './styledComponents';
import { ReactComponent as XIcon } from '../../../images/svg/xIcon.svg';
import { ReactComponent as RightArrow } from '../../../images/svg/rightArrow.svg';
import { ReactComponent as LeftArrow } from '../../../images/svg/leftArrow.svg';
import { ReactComponent as CircleTable } from '../../../images/svg/circleTable.svg';
import { ReactComponent as SmallCircleTable } from '../../../images/svg/smallCircleTable.svg';
import { ReactComponent as EllipseTable } from '../../../images/svg/ellipseTable.svg';
import { ReactComponent as RectangleTable } from '../../../images/svg/rectangleTable.svg';
const AddTable = ({ togglePopupHandler }) => {
  const [tableDetails, setTableDetails] = useState({
    size: '"120 X 140"',
    chairs: '12',
  });
  return (
    <PopupContainer>
      <Header>
        <Title>Add Table</Title>
        <Icon onClick={togglePopupHandler} marginRight="31.53px">
          <XIcon />
        </Icon>
      </Header>
      <MainContainer>
        <SubTitle>Select table type:</SubTitle>
        <TabelsContainer>
          <Icon>
            <LeftArrow />
          </Icon>
          <TableContainer>
            <Icon>
              <CircleTable />
            </Icon>
            <Text>{tableDetails.size}</Text>
            <Text>{tableDetails.chairs}</Text>
          </TableContainer>
          <TableContainer>
            <Icon>
              <RectangleTable />
            </Icon>
            <Text>{tableDetails.size}</Text>
            <Text>{tableDetails.chairs}</Text>
          </TableContainer>
          <TableContainer>
            <Icon>
              <EllipseTable />
            </Icon>
            <Text>{tableDetails.size}</Text>
            <Text>{tableDetails.chairs}</Text>
          </TableContainer>
          <TableContainer>
            <Icon>
              <SmallCircleTable />
            </Icon>
            <Text>{tableDetails.size}</Text>
            <Text>{tableDetails.chairs}</Text>
          </TableContainer>
          <Icon>
            <RightArrow />
          </Icon>
        </TabelsContainer>
      </MainContainer>
    </PopupContainer>
  );
};
export default AddTable;
