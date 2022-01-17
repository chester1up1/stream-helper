import styled from 'styled-components/macro';

export const ScWhiteForm = styled.div`
  background-color: #ffffff;
  width: 386px;
  height: auto;
  min-height: 288px;

  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const ScFormTitle = styled.div`
  color: #000000;
  font-size: 32px;
  font-weight: 800;
  text-transform: uppercase;
`;

export const ScFormConent = styled.div`
  flex-grow: 1;
`;

export const ScFormBottom = styled.div``;
