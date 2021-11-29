/* eslint-env node */

import beeper from 'beeper';
import chalk from 'chalk';
import gulp from 'gulp';
import log from 'fancy-log';
import sassdoc from 'sassdoc';
import sasslint from 'gulp-stylelint';

const paths = {
  TEST_DIR: 'test/',
  SASS_DIR: 'sass/',
  IGNORE: ['!**/.#*', '!**/flycheck_*'],
  // @@@ remove these as they are migrated
  IGNORE_SASS: [
    '!sass/animate/**/*.scss',
    '!sass/core/**/*.scss',
    '!sass/scale/**/*.scss',
    '!sass/type/**/*.scss',
  ],
  init: function () {
    this.SASS = [this.SASS_DIR + '**/*.scss']
      .concat(this.IGNORE)
      .concat(this.IGNORE_SASS);
    this.ALL_SASS = [
      this.SASS_DIR + '**/*.scss',
      this.TEST_DIR + '**/*.scss',
    ].concat(this.IGNORE);
    return this;
  },
}.init();

const onError = function (err) {
  log.error(chalk.red(err.message));
  beeper();
  this.emit('end');
};

const sasslintTask = (src, failOnError, shouldLog) => {
  if (shouldLog) {
    const cmd = `sasslint ${src}`;
    log('Running', `'${chalk.cyan(cmd)}'...`);
  }
  const stream = gulp.src(src).pipe(
    sasslint({
      reporters: [{ formatter: 'string', console: true }],
      failAfterError: failOnError,
    }),
  );
  if (!failOnError) {
    stream.on('error', onError);
  }
  return stream;
};

gulp.task('sasslint', () => sasslintTask(paths.SASS, true));

gulp.task('sasslint-nofail', () => sasslintTask(paths.SASS));

gulp.task('sassdoc', () => gulp.src(paths.SASS).pipe(sassdoc()));

gulp.task('watch', (cb) => {
  gulp.watch(paths.SASS, gulp.parallel('sassdoc'));

  // lint scss on changes
  gulp.watch(paths.ALL_SASS).on('all', (event, filepath) => {
    if (event === 'add' || event === 'change') {
      sasslintTask(filepath, false, true);
    }
  });

  // lint all scss when rules change
  gulp.watch('**/.stylelintrc.yml', gulp.parallel('sasslint-nofail'));

  cb();
});
