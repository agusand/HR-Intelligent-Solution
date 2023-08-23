import { MenuList, MenuItem, Paper } from "@mui/material";

import MenuProps from "./MenuProps";
import styles from "./index.module.scss";

const CustomMenu = ({ options, isOpen }: MenuProps) => {
  return isOpen ? (
    <>
      <div className={styles.container}>
        <Paper>
          <MenuList>
            {options.map((option) => {
              return (
                <MenuItem onClick={option.onClick} key={option.tag}>
                  {option.tag}
                </MenuItem>
              );
            })}
          </MenuList>
        </Paper>
      </div>
    </>
  ) : null;
};

export default CustomMenu;
