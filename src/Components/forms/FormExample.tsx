import React, { useState } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import PrimaryButton from "../buttons/PrimaryButton";


const FormExample: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");

  return (
    <>
      <TextInput
        label="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <SelectInput
        label="Select Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        options={["Admin", "Manager", "User"]}
      />

      <PrimaryButton
        label="Submit"
        onClick={() => alert(`Name: ${name}, Role: ${role}`)}
      />
    </>
  );
};

export default FormExample;
