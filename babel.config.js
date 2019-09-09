module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
};
