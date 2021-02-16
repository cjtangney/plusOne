import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  namespace: 'plusone',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null, // comment line to disable service workers
      baseUrl: 'https://plus-one.vercel.app',
      copy: [
        { src: 'pages' }
      ]
    },
    {
      type: 'dist'
    }
  ],
  plugins: [
    sass({
      includePaths: [
        'node_modules/bootstrap/scss',
      ],
      injectGlobalPaths: [
        'src/global/app.scss'
      ],
    }),
  ],
  buildEs5: false,
  extras: {
    cloneNodeFix: true
  },
  devServer: {
    openBrowser: true
  }
};
