import "./MyApps.scss";

import {
  AppstoreOutlined,
  CloseCircleOutlined,
  EditOutlined,
  EllipsisOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { deleteApp, updateApp } from "../../services/appServices";

import MenuDropDown from "../../components/common/MenuDropdown";
import { MyApps } from "./MyApps";
import { UpdateAppForm } from "../../components/common/forms";
import { styles } from "./myApps.styles";

export const MyAppsComponent = (props) => {
  const [appLayout, setAppLayout] = useState(true);
  const [updateFormToggler, setUpdateFormToggler] = useState(false);

  const deleteAppFunction = (e, id) => {
    e.preventDefault();
    return deleteApp(id).then(() => props.setRefresh(true));
  };
  const updateAppFunction = (e, id) => {
    e.preventDefault();
    return updateApp(id).then(() => props.setRefresh(true));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 30px",
          width: "90%",
          margin: "auto",
        }}
      >
        <h1 style={{ textDecoration: "overline" }}>{props.appsGroups}</h1>
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
          props.apps.map((results, index) => {
            return (
              <>
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
                  url={results.url}
                  elipsis={<EllipsisOutlined rotate={90} />}
                  MenuDropDown={
                    <MenuDropDown
                      menuItem1={" Update App"}
                      menuItem1Icon={<EditOutlined />}
                      menuItem2={" Delete App"}
                      menuItemId={results.id}
                      menuItem2Icon={
                        <CloseCircleOutlined
                          style={{
                            fontSize: "16px",
                            color: "red",
                            zIndex: "3000",
                          }}
                          onClick={(e) => deleteAppFunction(e, results.id)}
                        />
                      }
                      menuItem1Click={props.setUpdateFormToggler}
                      menuItem2Click={deleteAppFunction}
                      dropDownIcon={<EllipsisOutlined rotate={90} />}
                      // setFormToggler={props.setFormToggler}
                    />
                  }
                  elipsisStyle={{
                    position: "relative",
                    left: "65%",
                    bottom: "100%",
                  }}
                  deleteButton={
                    <CloseCircleOutlined
                      style={{
                        fontSize: "25px",
                        color: "red",
                        zIndex: "3000",
                      }}
                      onClick={(e) => deleteAppFunction(e, results.id)}
                    />
                  }
                />

                <UpdateAppForm
                  updateFormToggle={props.updateFormToggler}
                  key={index}
                  id={results.id}
                  title={results.title}
                  image={results.image}
                  url={results.url}
                  group={results.group}
                />
              </>
            );
          })}
      </div>
    </div>
  );
};
