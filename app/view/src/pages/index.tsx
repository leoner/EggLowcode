import React, { useEffect, useRef, useCallback, useState } from 'react';
import { init, plugins, common, skeleton, config } from '@alilc/lowcode-engine';
import registerPlugins from '@/components/plugin';
import EditorView from '@/components/EditorView';

import '@/components/universal/global.scss';

const LowcodePageList = () => {
  console.info('1=============init');
  const [hasPluginInited, setHasPluginInited] = useState(false);
  // const params = useParams<{schemaId: string}>();

  const init = useCallback(async () => {
    await registerPlugins();
  }, []);
  // 1. 找到当前默认的 schemaId
  useEffect(() => {
    // console.info('======>', params);
    // 现在插件和 schema 是混在一起的， 是不是可以分开
    init().then(() => {
      console.info('1==================');
      setHasPluginInited(true);
    }).catch(err => {
      console.error(err)
      location.reload();
    });
    /*
    // 暂时不销毁，如果发现插件已经注册, 重新刷新页面
    return () => {
      plugins.dispose().then(() => {
        console.info('====>plugins destroy success');
      });
    }
    */
  }, [])

  return hasPluginInited && <EditorView/>
};

export default LowcodePageList;

