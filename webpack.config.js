// import
const path = require('path')  // path 전역 모듈
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

// export
module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],  // js, vue 확장자를 명시하지 않아도 에러 발생 막음
    alias: {  // 경로 별칭
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    }
  },
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './src/main.js',

  // 결과물(Bundle)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true  // 새롭게 build 했을 때, 기존에 필요하지 않은 파일을 제거
  },

  module: {
    rules: [
      {
        test: /\.vue$/,  // .vue로 끝나는 파일
        use: 'vue-loader'  // Webpack에서 vue 파일을 읽어내는 용도
      },
      {
        test: /\.s?css$/,  // .css로 끝나는 파일
        use: [
          // 순서 중요!
          'vue-style-loader',  // Vue 파일 내의 style 태그를 해석해서 동작시키는 용도
          'style-loader',  // HTML의 style 태그에 해석된 내용을 삽입하는 용도
          'css-loader',  // Javascript에서 css파일을 해석하는 용도
          'postcss-loader',  // sass-loader롤 통해 해석된 내용에 공급업체 접두사를 적용하는 용도
          'sass-loader'  // Webpack에서 scss파일을 읽어내는 용도
        ]
      },
      {
        test: /\.js$/,  // .js로 끝나는 파일
        use: [
          'babel-loader'  // Webpack에서 js파일을 읽어내는 용도
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,  // png, jpg, jpeg, git, webp로 끝나는 파일
        use: 'file-loader'
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    host: 'localhost'
  }
}