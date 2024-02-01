import styled from 'styled-components';

export const ContainerLoading = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background:
    radial-gradient(farthest-side,var(--primary) 94%,#0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%,var(--primary));
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation:s3 .5s infinite linear;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);



  @keyframes s3{
    100%{transform: rotate(1turn)}
  }
`;
