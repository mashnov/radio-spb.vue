/* For jetbrains webstorm/phpstorm paths resolving */
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      store: path.resolve(__dirname, 'src/store'),
      images: path.resolve(__dirname, 'src/assets/images'),
      components: path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.js', '.vue'],
  },
};
