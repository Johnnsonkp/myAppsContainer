import { Auth } from "./Auth";
import { styles } from "./Auth.styles";

const AuthContainer = (props) => {
  return (
    <Auth
      login={props.login}
      loginToggle={props.loginToggle}
      style={styles.container}
    />
  );
};
export { Auth, AuthContainer };
