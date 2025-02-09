import { ReactNode } from 'react';
import { Search } from '@components';

type HeaderSectionProps = {
  children?: ReactNode;
};

const HeaderSection = ({ children }: HeaderSectionProps) => {
  return (
    <header>
      <Search />
      {children}
    </header>
  );
};

export default HeaderSection;
