import React from "react";
import {
  ContentTitle,
  ContentPrice,
  ContentDescription,
  Title,
} from "./styles";

export const CardDetailText = ({ data, formatValue }) => {
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
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const upperProperty = capitalize(type_property);
  const upperOperation = capitalize(type_operation);
  return (
    <>
      <ContentTitle>
        <Title>
          {`Detalles de ${address.street} #${address.number_ext} `}
          <span>Int. ${address.number_int}</span>
        </Title>
        <hr
          style={{
            background: "#000",
            marginRight: "22em",
            marginTop: ".5em",
            marginBottom: "0",
          }}
        />
      </ContentTitle>
      <ContentPrice>
        <span>{`$${formatValue} MDP`}</span>
        <small>{`${upperProperty} en ${upperOperation}`}</small>
      </ContentPrice>
      <ContentDescription>
        <p>{description}</p>
      </ContentDescription>
    </>
  );
};
