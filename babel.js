module.exports = function (api) {
  const bundler = api.caller(getBundler)
  const isWebpack = bundler === 'webpack'
  let platform = api.caller(getPlatform)

  if (!platform && isWebpack) {
    platform = 'web'
  }

  if (platform !== 'web') {
    return { presets: ['babel-preset-expo'] }
  }

  return {
    comments: false,
    compact: true,
    presets: [
      ['@babel/preset-env', { targets: 'defaults, iOS >= 9, IE >= 11', bugfixes: true }],
      ['@babel/preset-typescript']
    ],
    plugins: [
      ['@babel/plugin-syntax-flow'],
      ['babel-plugin-react-native-web'],
      ['babel-plugin-module-resolver', { alias: { 'react-native-vector-icons': '@expo/vector-icons' } }],
      ['@babel/plugin-transform-react-jsx']
    ]
  }
}

function getPlatform (caller) {
  return caller && caller.platform
}

function getBundler (caller) {
  if (!caller) return null

  const { bundler, name } = caller

  if (!bundler) {
    if (name === 'metro') {
      // This is a hack to determine if metro is being used.
      return 'metro'
    } else if (name === 'babel-loader') {
      // This won't work in all cases as tools like Next.js could change the name of their loader.
      return 'webpack'
    }
  }
  // Perhaps we should add a check to log once when an unexpected bundler is being used.
  return bundler || null
}
