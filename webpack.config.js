const webpack = require('webpack');
const path = require('path');
const sveltePreprocess = require('svelte-preprocess');

const preprocess = sveltePreprocess({
  transformers: {
    scss: {
      includePaths: ['node_modules', 'src'],
    },
  },
});

const _config = require('sapper/config/webpack.js');
const pkg = require('./package.json');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const alias = { svelte: path.resolve('node_modules', 'svelte') };
const extensions = ['.mjs', '.js', '.json', '.svelte', '.tsx', '.ts', '.html'];
const mainFields = ['svelte', 'module', 'browser', 'main'];

const config = {
  client: {
    entry: _config.client.entry(),
    output: _config.client.output(),
    resolve: {
      alias,
      extensions,
      mainFields,
    },
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              dev,
              hydratable: true,
              hotReload: false, // pending https://github.com/sveltejs/svelte/issues/2377
              preprocess,
              // preprocess: {
              //   style: ({ content, attributes }) => {
              //     if (attributes.type !== 'text/scss') return;

              //     return new Promise((resolve, reject) => {
              //       sass.render(
              //         {
              //           data: content,
              //           includePaths: ['src'],
              //           sourceMap: true,
              //           outFile: 'x', // this is necessary, but is ignored
              //         },
              //         (err, result) => {
              //           if (err) return reject(err);
              //           console.log(result);
              //           resolve({
              //             code: result.css.toString(),
              //             map: result.map.toString(),
              //           });
              //         },
              //       );
              //     });
              //   },
              // },
            },
          },
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    mode,
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      // dev && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
    ].filter(Boolean),
    devtool: dev && 'inline-source-map',
  },
  server: {
    entry: _config.server.entry(),
    output: _config.server.output(),
    target: 'node',
    resolve: {
      alias,
      extensions,
      mainFields,
    },
    externals: Object.keys(pkg.dependencies).concat('encoding'),
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              css: false,
              generate: 'ssr',
              dev,
              preprocess,
            },
          },
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    mode: process.env.NODE_ENV,
    performance: {
      hints: false, // it doesn't matter if server.js is large
    },
  },

  serviceworker: {
    entry: _config.serviceworker.entry(),
    output: _config.serviceworker.output(),
    mode: process.env.NODE_ENV,
    resolve: {
      alias,
      extensions,
      mainFields,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  },
};

module.exports = config;
