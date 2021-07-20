module.exports = function (config) {
  config.set({
    frameworks: ["jasmine-jquery", "jasmine", "jasmine-matchers", "browserify"],
    preprocessors: {
      "spec/*.js": ["browserify"],
      "src/js/*.js": ["browserify"],
    },
    files: [
      "https://code.jquery.com/jquery-1.11.2.min.js",
      "*.js",
      "spec/**/*.spec.js",
    ],
    plugins: [
      "karma-jasmine",
      "karma-jasmine-matchers",
      "karma-chrome-launcher",
      "karma-browserify",
      "karma-requirejs",
      "karma-jasmine-jquery",
    ],
    reporters: ["dots"],
    colors: true,
    browsers: ["ChromeHeadless"],
    singleRun: false,
  });
};

/*
module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'jasmine-matchers'],
    preprocessors: {
      '*.js': ['coverage']
    },
    files: [
      "./custom-matchers.js",
      '*.js',
      '*.spec.js'
    ],
    plugins: [
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-chrome-launcher',
      'karma-coverage'
    ],
    reporters: ['dots', 'coverage'],
    colors: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'html', subdir: 'html'}
      ]
    }
  })
};

*/
