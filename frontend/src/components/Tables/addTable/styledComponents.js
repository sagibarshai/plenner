import styled from 'styled-components';
export const PopupContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  width: 606px;
  height: 497px;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 34px;
`;
export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-style: light;
  font-size: 2.4rem;
  line-height: 28px;
  letter-spacing: 0.4px;
  margin-left: 30px;
  font-weight: 300;
`;
export const Icon = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  ${(props) => (props.marginRight ? `margin-right:${props.marginRight}` : ``)};
  ${(props) =>
    props.center
      ? `
position: absolute;
top:50%;
transform: translate(-50% , -50%);
`
      : ``}
`;
export const MainContainer = styled.div`
  width: 566px;
  height: 341px;
  margin: 18px auto 0 auto;
  background-color: #f5f7fa;
  text-align: center;
`;
export const SubTitle = styled.h3`
  margin: 0 auto 0 auto;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 15px;
  display: inline-block;
  margin-top: 43px;
`;
export const TabelsContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 14px;
`;
export const TableContainer = styled.div`
  position: relative;
  width: 120px;
  min-height: 140px;
  background-color: white;
`;
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 12px;
  text-align: left;
  margin-left: 8px;
`;
