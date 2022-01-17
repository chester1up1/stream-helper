import React, { useState } from 'react';
import { SingUpComponent } from './components/SignUp';
import { SingInComponent } from './components/SingIn';
import { ScTitle } from 'components/styles/common';
import { ScAuthorization } from './styled';

export enum PageType {
  SING_IN,
  SING_UP,
}

export interface AuthorizationComponentProps {
  chagePageType: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    type: PageType
  ) => void;
}

export const Authorization = () => {
  const [pageType, setPageType] = useState<PageType>(PageType.SING_IN);

  const handleChagePageType = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    type: PageType
  ) => {
    e.preventDefault();
    setPageType(type);
  };

  return (
    <ScAuthorization>
      <ScTitle uppercase white>
        <span className="violet-letter">S</span>tream{' '}
        <span className="green-letter">H</span>elper 🔥
      </ScTitle>
      {pageType === PageType.SING_IN ? (
        <SingInComponent chagePageType={handleChagePageType} />
      ) : (
        <SingUpComponent chagePageType={handleChagePageType} />
      )}
    </ScAuthorization>
  );
};
