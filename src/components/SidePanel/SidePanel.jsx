import { FetchResponse } from "../../App.modules";
import { MyApps } from "../../pages/MyApps/MyApps";
import React from "react";
import { SidePanelProps } from "./SidePanel.modules";
import { styles } from "./sidePanel.styles"

export const SidePanelComp: React.FC<SidePanelProps> = (props) => {
    return (
        <>
          {props.apps &&
            props.apps.map((results) => {
              return (
                <MyApps
                  key={results.id}
                  styles={styles.appContainer}
                  title={results.title}
                  image={results.image}
                  imageStyle={styles.img}
                  titleStyles={styles.title}
                />
              );
            })}
        </>
      );
}