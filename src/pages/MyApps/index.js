import React, { useEffect, useState } from "react";

import { MyApps } from "./MyApps";
import { styles } from "./myApps.styles";

export const MyAppsComponent = (props) => {
  console.log(props.apps);
  return (
    <>
      <MyApps
        styles={styles.appContainer}
        title={"test"}
        image={
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        }
        imageStyle={styles.img}
        titleStyles={styles.title}
      />
      <MyApps
        styles={styles.appContainer}
        title={"test"}
        image={
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        }
        imageStyle={styles.img}
        titleStyles={styles.title}
      />
    </>
  );
};
