import { useState, useEffect, useCallback } from 'react';

import { config } from '@alilc/lowcode-engine';
import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler'
import registerPlugins from './plugin';
import EditView from './EditView';

const LowcodePage: React.FC = () => {
  const [inited, setInited] = useState(false);

  const init = useCallback(async () => {
    await registerPlugins();

    config.setConfig({
      // designMode: 'live',
      // locale: 'zh-CN',
      enableCondition: true,
      enableCanvasLock: true,
      // 默认绑定变量
      supportVariableGlobally: true,
      // simulatorUrl 在当 engine-core.js 同一个父路径下时是不需要配置的！！！
      // 这里因为用的是 alifd cdn，在不同 npm 包，engine-core.js 和 react-simulator-renderer.js 是不同路径
      simulatorUrl: [
        'https://alifd.alicdn.com/npm/@alilc/lowcode-react-simulator-renderer@latest/dist/css/react-simulator-renderer.css',
        'https://alifd.alicdn.com/npm/@alilc/lowcode-react-simulator-renderer@latest/dist/js/react-simulator-renderer.js'
      ],
      requestHandlersMap: {
        fetch: createFetchHandler()
      }
    });
  }, []);

  useEffect(() => {
    init().then(()=> {
      setInited(true);
    }).catch(() => {
      location.reload();
    });
  }, []);

  return (
    <div>
      { inited && <EditView/>}
    </div>
  );
};

export default LowcodePage;
