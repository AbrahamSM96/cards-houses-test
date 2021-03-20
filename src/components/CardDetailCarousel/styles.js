import styled from "styled-components";

export const ContentImage = styled.div`
  position: absolute;
  top: 90px;
  color: #fff;
  padding-left: 1em;
`;

export const Li = styled.div`
  &:before {
    content: "•";
    color: #c11f1f;
    margin-right: 0.5em;
  }
  small {
    height: 1.2em;
  }
`;

export const Price = styled.span`
  font-size: 1.5em;
  color: #72c122;
`;
