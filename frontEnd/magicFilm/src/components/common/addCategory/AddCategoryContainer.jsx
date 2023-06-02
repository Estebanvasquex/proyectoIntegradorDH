import React, { useState } from "react";
import AddCategory from "./AddCategory";

import "./addCategory.css";

const AddCategoryContainer = () => {
  const initialState = {
    title: "",
    description: "",
    image: "",
    /* file: "", */
  };
  const [state, setState] = useState(initialState);
  
  return (
    <div>
      <AddCategory state={state} setState={setState} />
    </div>
  );
};

export default AddCategoryContainer;
