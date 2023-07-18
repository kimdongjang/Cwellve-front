const path = require('path')

module.exports = {
  // sass 옵션 설정
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    // svg 빌드 옵션
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
      }],
    })
    return config
  },
}