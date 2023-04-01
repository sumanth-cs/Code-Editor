import { useState, useEffect, useContext } from "react";

import { DataContext } from "../context/DataProvider";

import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  height: 50vh;
  background-color: white;
  color: black;
  margin: 0px 17px;
  border-radius: 5px;
`;

const Result = () => {
  const [src, setSrc] = useState("");
  const { html, css, js } = useContext(DataContext);

  const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 250);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [html, css, js]);

  return (
    <Container>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
