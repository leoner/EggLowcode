import { Link, IRouteComponentProps } from 'umi';
import styles from './index.less';
import './global.scss';

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/lowcode" style={{fontSize: '1.5em', paddingBottom: '10px'}}>编辑</Link>
        </li>
        <li>
          <Link to="/preview" style={{fontSize: '1.5em', paddingBottom: '10px'}}>预览</Link>
        </li>
      </ul>
      { children }
    </div>

  );
}
