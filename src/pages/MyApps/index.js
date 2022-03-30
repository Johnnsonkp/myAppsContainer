import "./MyApps.css";

import {
  AlignCenterOutlined,
  AlignRightOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";

import { MyApps } from "./MyApps";
import { styles } from "./myApps.styles";

export const MyAppsComponent = (props) => {
  const [appLayout, setAppLayout] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 30px",
          width: "82%",
          margin: "auto",
        }}
      >
        <h1 style={{ textDecoration: "overline" }}>Testing</h1>
        <button
          style={styles.toolBarButton}
          onClick={() => setAppLayout(!appLayout)}
        >
          {appLayout ? (
            <UnorderedListOutlined style={{ fontSize: "20px" }} />
          ) : (
            <AppstoreOutlined style={{ fontSize: "20px" }} />
          )}
        </button>
      </div>

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
