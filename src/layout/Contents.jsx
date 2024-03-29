import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Form } from "react-bootstrap";
import Card from "../components/Content_Card";
import "./../resources/css/Common.css";
import { useSelector, useDispatch } from "react-redux";
import { addSubscriber, removeSubscriber } from "../redux/actions";

const Content_box = styled.div`
  margin-top: 80px;
`;

const Content = () => {
  const { isLogged } = useSelector((state) => ({
    isLogged: state.isLogged,
  }));
  console.log("Content= " + isLogged);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addSubscriber());
  };

  return (
    <Content_box>
      <Container fluid="xl">
        <Row className="row_right">
          <div className="mb-4 w-25 row_padding_0">
            <Form.Select aria-label="Default select example">
              <option value="1">최신순</option>
              <option value="2">거리순</option>
              <option value="3">-</option>
            </Form.Select>
          </div>
        </Row>
        <Row>
          <Card></Card>
        </Row>
      </Container>
    </Content_box>
  );
};

export default Content;
