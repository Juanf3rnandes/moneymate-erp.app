import styles from "@/layouts/styles/layoutDefault.module.scss";

export default function PublicLayout() {
  return (
    <header className={styles.header_container}>
      <nav className={styles.nav_menu}>
        <div>
          <h1>MoneyMate</h1>
        </div>
      </nav>
    </header>
  );
}
