import React, { useEffect, useState } from "react";
import { RowToolBar, ToolBar } from "./ToolBar";

import { styles } from "./ToolBar.styles";

export const ToolBarComponent = (props) => {
  const [appLayout, setAppLayout] = useState(false);
  return (
    <>
      <h1>Testing</h1>
      <button onClick={() => setAppLayout(!appLayout)}>Grid</button>

      {appLayout ? (
        <ToolBar style={styles.container} component={props.component} />
      ) : (
        <RowToolBar style={styles.container} component={props.component} />
      )}
    </>
  );
};
