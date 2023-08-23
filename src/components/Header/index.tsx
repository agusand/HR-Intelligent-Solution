import styles from "./index.module.scss";
import useHeaderTitle from "./hooks/useHeaderTitle";
import useHeaderIconButtons from "./hooks/useHeaderIconButtons";

import IconButton from "components/IconButton";
import Logo from "components/Logo";

const Header = () => {
  const { iconButtons } = useHeaderIconButtons();
  const { title } = useHeaderTitle();

  return (
    <header className={styles.container}>
      <div className={styles.leftColumn}>
        <Logo />
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.iconButtonSection}>
          {iconButtons?.map((buttonProps) => {
            return (
              <IconButton
                className={styles.iconButton}
                key={buttonProps.alt}
                paddingZero
                {...buttonProps}
              />
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
