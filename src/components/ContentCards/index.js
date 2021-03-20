import React from "react";
import { Row, Col } from "reactstrap";
import { Cardd } from "../Card";
import data from "../../mock/data.json";

export const ContentCards = () => {
  return (
    <>
      <Row>
        <Col sm="12" md={{ size: 7, offset: 2 }}>
          {data.map((item) => (
            <Cardd key={item.id} data={item} />
          ))}
        </Col>
      </Row>
    </>
  );
};
