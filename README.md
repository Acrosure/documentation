# Acrosure API Documentation

An API Documentation for integration with Acrosure Insurance Gateway.

## Prerequisites

You're going to need:

 - **Linux or macOS** — Windows may work, but is unsupported.
 - **Ruby, version 2.3.1 or newer**
 - **Bundler** — If Ruby is already installed, but the `bundle` command doesn't work, just run `gem install bundler` in a terminal.

## Getting Started

With shell:
```shell
bundle install
bundle exec middleman server
```

With vagrant:
```shell
vagrant up
```

You can now see the docs at http://localhost:4567. Oh my, that was easy! 🤯

Now that it is all set up on your machine, you'll probably want to learn more about [editing Slate markdown](https://github.com/lord/slate/wiki/Markdown-Syntax), or [how to publish your docs](https://github.com/lord/slate/wiki/Deploying-Slate).

If you'd prefer to use Docker, instructions are available [in the wiki](https://github.com/lord/slate/wiki/Docker). (Although not officially support)

## Build & Deploy

Build:
```shell
bundle exec middleman build --clean
```

Deploy:
```shell
firebase deploy
```

## Note on JavaScript Runtime

For those who don't have JavaScript runtime or are experiencing JavaScript runtime issues with ExecJS, it is recommended to add the [rubyracer gem](https://github.com/cowboyd/therubyracer) to your gemfile and run `bundle` again.

-----

Powered by [Slate](https://github.com/lord/slate) 🤩
