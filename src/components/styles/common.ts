import styled from 'styled-components';
import { ColorsInterface } from 'theme/contracts';

interface TitleProps extends ColorsInterface {
  uppercase?: boolean;
  bold?: boolean;
}

export const ScTitle = styled.h1<TitleProps>`
  margin-top: 0;
  font-size: 56px;
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  font-weight: ${({ bold }) => bold && '800'};
  color: ${({ theme, violet, green, black, white }) => {
    switch (true) {
      case violet:
        return theme.colorViolet;
      case green:
        return theme.colorGreen;
      case black:
        return theme.colorBlack;
      case white:
        return theme.colorWhite;
      default:
        return theme.colorWhite;
    }
  }};
`;

export const ScSubTitle = styled.h2<TitleProps>`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 32px;
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  font-weight: ${({ bold }) => bold && '800'};
  color: ${({ theme, violet, green, black, white }) => {
    switch (true) {
      case violet:
        return theme.colorViolet;
      case green:
        return theme.colorGreen;
      case black:
        return theme.colorBlack;
      case white:
        return theme.colorWhite;
      default:
        return theme.colorWhite;
    }
  }};
`;
