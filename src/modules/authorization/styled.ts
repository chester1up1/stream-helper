import styled from 'styled-components';

export const ScAuthorization = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(15, 36, 0);
  background: linear-gradient(
    45deg,
    rgba(15, 36, 0, 1) 0%,
    rgba(9, 121, 93, 1) 35%,
    rgba(205, 0, 255, 1) 100%
  );
  .bottom {
    display: block;
    margin-top: 8px;
  }
  .bottom-link {
    color: ${({ theme }) => theme.colorViolet};
  }
  color: ${({ theme }) => theme.colorBlack};
  font-size: 12px;
`;
