import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/" style={{fontSize: '2em'}}>编辑</Link>
        </li>
        <li>
          <Link to="/preview" style={{fontSize: '2em'}}>预览</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
