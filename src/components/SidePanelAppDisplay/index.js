import { SidePanelApp } from "./SidePanelApp";
import { styles } from "./SidePanelApp.styles";

export const SidePanelAppsComponent = (props) => {
  return (
    <div
      style={{
        width: "100%",
        flexWrap: "wrap",
        margin: "auto",
        height: "100%",
        transform: "scale(1.5)",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {props.apps &&
        props.apps.map((results) => {
          return (
            <SidePanelApp
              key={results.id}
              styles={styles.sidePanelContainer}
              title={results.title}
              titleStyles={styles.title}
              image={results.image}
              imageStyle={styles.sidePanelImg}
              className={"appComp"}
              url={results.url}
            />
          );
        })}
    </div>
  );
};
