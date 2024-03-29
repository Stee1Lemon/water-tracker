import { ContainerRef } from './Container.styled';

export const Container = ({ children }) => {
  return <ContainerRef>{children}</ContainerRef>;
};
