// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/_globals.scss'),
      ],
    })
}

module.exports = {
	// existing config
}

module.exports = {
  siteName: 'epiqꓘ',
  siteDescription: '',
  titleTemplate: '%s',
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://hcmsdatabase.epiqk.ca', // required
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
        routes: {
          post: '/:year/:month/:day/:slug',
          post_tag: '/tag/:slug'
        },
        splitPostsIntoFragments: true, // default false
        downloadRemoteImagesFromPosts: true, // default false
        postImagesLocalPath: './wp-images/',
        downloadRemoteFeaturedImages: true, // default false
        featuredImagesLocalPath: './wp-images/'
      }
    }
  ],
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
	}
}
