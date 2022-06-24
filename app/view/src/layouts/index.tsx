import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">编辑</Link>
        </li>
        <li>
          <Link to="/preview">预览</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
