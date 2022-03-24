import "./MyApps.css";

import React, { useEffect, useState } from "react";

import { MyApps } from "./MyApps";
import { styles } from "./myApps.styles";

export const MyAppsComponent = (props) => {
  const [appLayout, setAppLayout] = useState(false);
  return (
    <div>
      <h1>Testing</h1>
      <button
        style={styles.toolBarButton}
        onClick={() => setAppLayout(!appLayout)}
      >
        Grid
      </button>

      <div style={appLayout ? styles.flexedRow : styles.flexedColumn}>
        {props.apps &&
          props.apps.map((results) => {
            return (
              <MyApps
                key={results.id}
                styles={
                  appLayout ? styles.columnContainer : styles.appContainer
                }
                title={results.title}
                image={results.image}
                imageStyle={styles.img}
                titleStyles={styles.title}
                className={"appComp"}
              />
            );
          })}
      </div>
    </div>
  );
};
