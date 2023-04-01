import React, { useContext } from "react";
import { Box, styled } from "@mui/material";
import { DataContext } from "../context/DataProvider"
import Editor from "./Editor";


const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        language="xml"
        display_name="HTML"
        icon="</>"
        color="red"
        value={html}
        onChange={setHtml}
      />
      <Editor
        language="xml"
        display_name="CSS"
        icon="::"
        color="skyblue"
        value={css}
        onChange={setCss}
      />
      <Editor
        language="xml"
        display_name="JS"
        icon="{}"
        color="yellow"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default Code;

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
  margin: 10px 10px;
`;
