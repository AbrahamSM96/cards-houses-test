import React, { useState } from "react";
import { CardDetail } from "../CardDetail";
import dep from "../../images/dep.jpg";
import {
  Button,
  ImageContent,
  TextContent,
  TextHead,
  Card,
  Img,
  HeadTitle,
  HeadPrice,
  Description,
  ImageContentText,
  ImageText,
  Title,
  Price,
  ButtonContent,
} from "./styles";

export const Cardd = ({ data }) => {
  const {
    name,
    price,
    type_operation,
    type_property,
    phone,
    description,
    address,
    H5,
  } = data;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const upperProperty = capitalize(type_property);
  const upperOperation = capitalize(type_operation);

  const formatValue = price.toLocaleString();

  return (
    <Card>
      <ImageContent>
        <Img width="100%" height="180px" src={dep} alt=""></Img>
        <ImageContentText>
          <ImageText>Nuevo</ImageText>
        </ImageContentText>
      </ImageContent>
      <TextContent>
        <TextHead>
          <HeadTitle>
            <Title>{`${address.street} #${address.number_ext} Int. ${address.number_int}`}</Title>
            <small className="text-muted">{`${upperProperty} de ${upperOperation} en ${name} `}</small>
          </HeadTitle>
          <HeadPrice>
            <Price>{`$${formatValue} MDP`}</Price>
          </HeadPrice>
        </TextHead>

        <Description>{description}</Description>
        <ButtonContent>
          <Button onClick={toggle}>Ver propiedad</Button>
        </ButtonContent>
        <CardDetail
          toggle={toggle}
          isOpen={modal}
          closeBtn={closeBtn}
          data={data}
          formatValue={formatValue}
        />
      </TextContent>
    </Card>
  );
};
