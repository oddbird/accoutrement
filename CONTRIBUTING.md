# Contributing to Accoutrement

Bug reports and feature requests are welcome,
but code is even better!
In all cases,
we ask you to follow the
[Sass community guidelines](https://sass-lang.com/community-guidelines).

## Issues

You are welcome to ask support questions
and file bug reports
via [Github Issues][issues].
In either case,
please provide:

- A minimum code sample that demonstrates the issue,
  and steps to reproduce
- Expected behavior and actual results
- How you've attempted to solve the problem

[issues]: https://github.com/oddbird/accoutrement/issues

## Development

Set up your environment
with the appropriate development dependencies:

```
yarn
```

As you work...

- Add or update any appropriate unit tests --
  using [True](https://www.oddbird.net/true/) --
  in the `test` directory,
  and make sure all tests are passing with `yarn test`
- Add your changes to the [changelog][]
- Update or add inline documentation
  using [SassDoc][sassdoc] as appropriate
  (compile to view the docs as-needed with `yarn docs`)

[changelog]: https://github.com/oddbird/accoutrement/blob/main/CHANGELOG.md
[sassdoc]: http://sassdoc.com/

## Committing

Linting and testing
should be done before every commit:

```
yarn commit
```

They can also be triggered individually:

```
yarn lint
yarn test
```

Once you've fixed any final errors or typos,
commit your changes, and submit a pull request!

## Pull Requests

We use the `main` branch for production-ready code,
and side-branches for everything in-progress
or up-for-debate.

When submitting a patch via pull request:

- Write a clear, descriptive commit message
- Keep it simple: one bug fix or feature per pull request
