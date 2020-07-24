const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const babel = { dangerouslyAddModulePathsToTranspile: ['node_modules'] }
  return await createExpoWebpackConfigAsync({ ...env, babel }, argv)
}
