import styled from 'styled-components'
export const Button = styled.button`
  background-color: #fff;
  color: #72c122;
  border: 1px solid #72c122;
  width: 11em;
  float: right;
  padding: 0.3em;
  margin-top: 1em;

  &:hover {
    background: #72c122;
    color: #fff;
  }
`
export const ButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-end;
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, auto));

  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-bottom: 1em;
`

export const ImageContent = styled.div`
  position: relative;
`
export const ImageContentText = styled.div`
  position: absolute;
  bottom: 0px;
  background: linear-gradient(to right, #72c122, transparent);
  width: 10em;
  color: #fff;
`

export const ImageText = styled.div`
  font-size: 1.2em;
  margin: 0;
  padding-left: 1em;
`

export const Img = styled.img`
  object-fit: cover;
  height: 100%;
`

export const TextContent = styled.div`
  padding: 0.5em 1em;
`

export const TextHead = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Title = styled.div`
  font-size: 1em;
  font-weight: 600;
`

export const HeadTitle = styled.div`
  small {
    &::before {
      content: '•';
      color: #c11f1f;
      margin-right: 0.5em;
    }
  }
`
export const HeadPrice = styled.div`
  padding: 0rem 1em;
`
export const Price = styled.div`
  font-size: 1.3em;
  color: #72c122;
`
export const Description = styled.p`
  padding: 0.5rem 0em;
  color: #7f7f7f;
`
