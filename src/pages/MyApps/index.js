import { MyApps } from "./MyApps";
import { styles } from "./myApps.styles";

export const MyAppsComponent = (props) => {
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
};
