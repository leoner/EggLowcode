import './index.scss';
import type { PluginProps } from '@alilc/lowcode-types';

import { useModel } from 'umi';

export interface IProps {
  logo?: string;
  href?: string;
}

const Logo: React.FC<IProps & PluginProps> = (props): React.ReactElement => {
  const { name } = useModel('global')
  console.info('=====>', name);
  return (
    <div className="lowcode-plugin-logo">
       <a className="logo" title={name} target="blank" href={props.href || 'https://lowcode-engine.cn'} style={{ backgroundImage: `url(${props.logo})` }} />
    </div>
  );
};

export default Logo;
