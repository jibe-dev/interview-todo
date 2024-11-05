import { NavLink, Outlet } from 'react-router-dom';
import styles from './Root.module.css';

export function Root() {
  return (
    <main className={styles.main}>
      <ul className={styles.navigation}>
        <li className={styles.item}>
          <NavLink to="/">&gt; List</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/trash">&gt; Trash</NavLink>
        </li>
      </ul>
      <Outlet />
    </main>
  );
}
