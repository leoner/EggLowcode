import request from 'umi-request';
import { material, project } from '@alilc/lowcode-engine';
import { message } from 'antd';
import { filterPackages } from '@alilc/lowcode-plugin-inject'
import { TransformStage } from '@alilc/lowcode-types';

export const saveSchema = async (scenarioName: string = 'index') => {
  setProjectSchemaToLocalStorage(scenarioName);

  await setPackgesToLocalStorage(scenarioName);
  // window.localStorage.setItem(
  //   'projectSchema',
  //   JSON.stringify(project.exportSchema(TransformStage.Save))
  // );
  // const packages = await filterPackages(material.getAssets().packages);
  // window.localStorage.setItem(
  //   'packages',
  //   JSON.stringify(packages)
  // );
  message.success('成功保存到本地');
};

export const resetSchema = async (scenarioName: string = 'index') => {
  try {
    await new Promise<void>((resolve, reject) => {
      Dialog.confirm({
        content: '确定要重置吗？您所有的修改都将消失！',
        onOk: () => {
          resolve();
        },
        onCancel: () => {
          reject()
        },
      })
    })
  } catch(err) {
    return
  }

  window.localStorage.setItem(
    getLSName(scenarioName),
    JSON.stringify({
      componentsTree: [{ componentName: 'Page', fileName: 'sample' }],
      componentsMap: material.componentsMap,
      version: '1.0.0',
      i18n: {},
    })
  );
  project.getCurrentDocument()?.importSchema({ componentName: 'Page', fileName: 'sample' });
  project.simulatorHost?.rerender();
  message.success('成功重置页面');
}

const getLSName = (scenarioName: string, ns: string = 'projectSchema') => `${scenarioName}:${ns}`;

export const getProjectSchemaFromLocalStorage = (scenarioName: string) => {
  if (!scenarioName) {
    console.error('scenarioName is required!');
    return;
  }
  return JSON.parse(window.localStorage.getItem(getLSName(scenarioName)) || '{}');
}

const setProjectSchemaToLocalStorage = (scenarioName: string) => {
  if (!scenarioName) {
    console.error('scenarioName is required!');
    return;
  }
  window.localStorage.setItem(
    getLSName(scenarioName),
    JSON.stringify(project.exportSchema(TransformStage.Save))
  );
}

const setPackgesToLocalStorage = async (scenarioName: string) => {
  if (!scenarioName) {
    console.error('scenarioName is required!');
    return;
  }
  const packages = await filterPackages(material.getAssets().packages);
  window.localStorage.setItem(
    getLSName(scenarioName, 'packages'),
    JSON.stringify(packages),
  );
}

export const getPackagesFromLocalStorage = (scenarioName: string) => {
  if (!scenarioName) {
    console.error('scenarioName is required!');
    return;
  }
  return JSON.parse(window.localStorage.getItem(getLSName(scenarioName, 'packages')) || '[]');
}

export const getPageSchema = async (scenarioName: string = 'index') => {
  const pageSchema = getProjectSchemaFromLocalStorage(scenarioName).componentsTree?.[0]

  if (pageSchema) {
    return pageSchema;
  }

  return await request('/api/schema.json');
};