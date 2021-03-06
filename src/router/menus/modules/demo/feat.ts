import type { MenuModule } from '/@/router/types.d';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 19,
  menu: {
    name: t('routes.demo.feat.feat'),
    path: '/feat',

    children: [
      {
        path: 'icon',
        name: t('routes.demo.feat.icon'),
      },
      {
        path: 'tabs',
        name: t('routes.demo.feat.tabs'),
      },
      {
        path: 'context-menu',
        name: t('routes.demo.feat.contextMenu'),
      },
      {
        path: 'download',
        name: t('routes.demo.feat.download'),
      },
      {
        path: 'click-out-side',
        name: t('routes.demo.feat.clickOutSide'),
      },
      {
        path: 'img-preview',
        name: t('routes.demo.feat.imgPreview'),
      },
      {
        path: 'copy',
        name: t('routes.demo.feat.copy'),
      },
      {
        path: 'msg',
        name: t('routes.demo.feat.msg'),
      },
      {
        path: 'watermark',
        name: t('routes.demo.feat.watermark'),
      },
      {
        path: 'full-screen',
        name: t('routes.demo.feat.fullScreen'),
      },
      {
        path: 'error-log',
        name: t('routes.demo.feat.errorLog'),
      },
      {
        path: 'testTab',
        name: t('routes.demo.feat.tab'),
        children: [
          {
            path: 'id1',
            name: t('routes.demo.feat.tab1'),
          },
          {
            path: 'id2',
            name: t('routes.demo.feat.tab2'),
          },
        ],
      },
    ],
  },
};
export default menu;
