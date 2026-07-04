module.exports = ({ env } = {}) => {
  // Minimal PostCSS config: only autoprefixer when available.
  const plugins = {}
  try {
    // only add autoprefixer if installed
    // eslint-disable-next-line global-require
    const autoprefixer = require('autoprefixer')
    plugins.autoprefixer = autoprefixer()
  } catch (e) {
    // noop
  }
  return { plugins }
}
