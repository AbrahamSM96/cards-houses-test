import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { CardDetailCarousel } from "../CardDetailCarousel";
import { CardDetailText } from "../CardDetailText";
import { ContentText, ContentCarousel } from "./styles";

export const CardDetail = ({ toggle, isOpen, data, formatValue }) => {
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ContentCarousel>
          <CardDetailCarousel data={data} />
        </ContentCarousel>
        <ContentText>
          <CardDetailText data={data} formatValue={formatValue} />
        </ContentText>
      </Modal>
    </>
  );
};
