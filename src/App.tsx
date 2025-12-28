import React, { useState } from "react";
import { Button, Typography, Card, CardContent } from "@mui/material";

import PrimaryButton from "./Components/buttons/PrimaryButton";
import OutlineButton from "./Components/buttons/OutlineButton";
import IconButtonCustom from "./Components/buttons/IconButtonCustom";

import TextInput from "./Components/forms/TextInput";
import SelectInput from "./Components/forms/SelectInput";
import FormExample from "./Components/forms/FormExample";

import CustomModal from "./Components/modal/CustomModal";

const sectionContainer: React.CSSProperties = {
  flex: "1 1 48%",
  padding: "16px",
  borderRadius: "12px",
  background: "#ffffff",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const rowLayout: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  marginTop: "20px",
};

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "24px", fontFamily: "Segoe UI" }}>

      <Typography variant="h4" gutterBottom>
        React UI Components Playground
      </Typography>

      <Typography variant="subtitle1">
        A collection of reusable UI components built with React + MUI
      </Typography>

      {/* ================== ROW 1 : BUTTONS ================== */}
      <div style={rowLayout}>

        <div style={sectionContainer}>
          <Typography variant="h6" gutterBottom>
            Buttons Showcase
          </Typography>

          <div style={{ marginBottom: 10 }}>Primary Button</div>
          <PrimaryButton label="Click Me" onClick={() => alert("Button Clicked!")} />

          <div style={{ marginTop: 15, marginBottom: 10 }}>Outline Button</div>
          <OutlineButton label="Outline Me" onClick={() => alert("Outline Button Clicked!")} />

          <div style={{ marginTop: 15, marginBottom: 10 }}>Icon Button</div>
          <IconButtonCustom label="Save Item" />
        </div>

        {/* ================== INPUTS SECTION ================== */}

        <div style={sectionContainer}>
          <Typography variant="h6" gutterBottom>
            Form Inputs
          </Typography>

          <TextInput
            label="Type Something"
            value="sample text"
            onChange={() => alert("Text Changed")}
          />

          <SelectInput
            label="Select Value"
            value="value"
            options={["value", "test", "sample"]}
            onChange={(e) => alert(e.target.value)}
          />

          <FormExample />
        </div>
      </div>

      {/* ================== ROW 2 : MODAL SECTION ================== */}
      <div style={rowLayout}>

        <div style={sectionContainer}>
          <Typography variant="h6" gutterBottom>
            Modal Component
          </Typography>

          <Button variant="contained" onClick={() => setOpen(true)}>
            Open Modal
          </Button>

          <CustomModal open={open} onClose={() => setOpen(false)} title="User Details">
            <Typography variant="body1">
              This is a reusable custom modal component.
            </Typography>

            <Button
              variant="outlined"
              style={{ marginTop: 12 }}
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </CustomModal>
        </div>

        {/* Nice sample card */}
        <div style={sectionContainer}>
          <Card>
            <CardContent>
              <Typography variant="h6">Component Showcase Card</Typography>

              <Typography variant="body2">
                You can add more components here — tables, dashboards, charts, etc.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default App;
