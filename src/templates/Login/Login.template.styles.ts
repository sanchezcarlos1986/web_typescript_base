import styled from 'styled-components/';

const Container = styled.div`
  border: 2px dashed purple;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
`;

const BackgroundWrapper = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;

  &:before {
    background: black;
    content: ' ';
    height: 100%;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`;

export const Styles = {
  Container: Container,
  BackgroundWrapper: BackgroundWrapper,
};
