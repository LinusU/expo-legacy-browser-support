# iOS 9 and IE 11 support for Expo Web

All the config you need to get `expo build:web` to output code that's compatible with iOS 9 and Internet Explorer 11, in one easy to use package.

## Usage

1. Install package

    ```sh
    npm install --save-dev expo-legacy-browser-support
    ```

2. Configure babel (`babel.config.js`)

    ```diff
     module.exports = function(api) {
       api.cache(true);
       return {
    -    presets: ['babel-preset-expo'],
    +    presets: ['expo-legacy-browser-support/babel'],
       };
     };
    ```

3. Add WebPack config (`webpack.config.js`)

    ```js
    module.exports = require('expo-legacy-browser-support/webpack')
    ```

4. Add polyfills (`package.json`)

    ```diff
     {
       "version": "0.0.0",
    -  "main": "node_modules/expo/AppEntry.js",
    +  "main": "node_modules/expo-legacy-browser-support/AppEntry.js",
       "private": true,
       "scripts": {
    ```
