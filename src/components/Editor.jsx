import "../index.css";
import { useState } from "react";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

import { Box, styled } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

function Editor({ language, display_name, icon, color, value, onChange }) {
  const [fullScreen, setFullScreen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Container style={fullScreen ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              borderRadius: 5,
              marginRight: 5,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              color: "#000",
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {display_name}
        </Heading>
        {fullScreen ? (
          <CloseFullscreenIcon
            fontSize="small"
            style={{ alignSelf: "center" }}
            onClick={() => {
              setFullScreen(!fullScreen);
            }}
          />
        ) : (
          <OpenInFullIcon
            fontSize="small"
            style={{ alignSelf: "center" }}
            onClick={() => {
              setFullScreen(!fullScreen);
            }}
          />
        )}
      </Header>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </Container>
  );
}

export default Editor;

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;
const Heading = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;
`;
