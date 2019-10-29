module.exports = ({ env }) => ({
  plugins: [
    require('autoprefixer')({
    }), require('cssnano')({
      preset: [
        'default', {
          removeAll: true
        }
      ]
    }), require('css-mqpacker')({
    }),
  ],
})