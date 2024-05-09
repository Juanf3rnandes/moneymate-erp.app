import styles from "../styles/layoutDefault.module.scss";
import { FaRegBell } from "react-icons/fa";

interface DefaultLayoutProps {
  userName: string;
  left?: React.ReactNode;
}

export default function DefaultLayout({ userName, left }: DefaultLayoutProps) {
  return (
    <>
      <header className={styles.header_container}>
        <nav className={styles.nav_menu}>
          <div className={styles.items_container}>
            <h1>MoneyMate</h1>
          </div>
          <div className={styles.menu_container}>
            <div className={styles.icons_container}>
              <FaRegBell size={20} />
            </div>
            <h3>{userName}</h3>
          </div>
        </nav>
      </header>
      {left && <div className={styles.left_container}>{left}</div>}
    </>
  );
}
