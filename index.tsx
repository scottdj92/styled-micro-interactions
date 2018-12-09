import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const Title = styled("h1")`
    color: coral;
`;

const App: React.FunctionComponent = () => (
    <Title>Hello world</Title>
);

ReactDOM.render(<App/>, document.getElementById("app"));
