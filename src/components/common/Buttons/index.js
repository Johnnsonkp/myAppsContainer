import { FormToggle, FormToggleButton } from "./Buttons";

import { styles } from "./Buttons.styles";

export const FormToggleButtonComp = (props) => {
  return (
    <FormToggleButton
      style={props.formToggler ? styles.showFormButton : styles.hideFormButton}
      onClickFunc={() => props.onClickFunc}
    />
  );
};
export { FormToggle };
