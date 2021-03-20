import styled from "styled-components";

export const ContentTitle = styled.div`
  padding-bottom: 1em;
`;

export const ContentPrice = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 600;
  }
  small {
    color: #a0a0a0;
  }
`;

export const ContentDescription = styled.div`
  width: 100%;
  height: auto;
  word-wrap: break-word;
  p {
    color: #7f7f7f;
  }
`;

export const Title = styled.div`
  font-size: 1em;
  font-weight: 600;
  span {
    font-weight: 400;
  }
`;
