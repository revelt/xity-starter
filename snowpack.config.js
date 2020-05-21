module.exports = {
  scripts: {
    'build:js': '@snowpack/plugin-babel',
    'build:css': 'postcss',
    'mount:_site': 'mount _output --to /',
    'mount:src': 'mount assets --to /',
    'mount:static': 'mount static --to /',
    'mount:web_modules': 'mount web_modules',
    'run:11ty': 'eleventy',
    'run:11ty::watch': '$1 --watch',
  },
  plugins: ['@snowpack/plugin-babel'],
  installOptions: {},
  devOptions: {},
}
