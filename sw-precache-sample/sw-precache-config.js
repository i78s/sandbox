const packageJson = require('./package.json');

module.exports = {
    swFile: 'app/service-worker.js',
    staticFileGlobs: [
        'app/**/*.html',
        'app/assets/**/*.css',
        'app/assets/**/*.js',
        'app/assets/images/**/*'
    ],
    stripPrefix: 'app/',

    cacheId: packageJson.name,
    verbose: true
};
