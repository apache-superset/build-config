# @superset-ui/build-config

Version-controlled build config for easy re-use and sharing 📝

### Install

```
npm install --save-dev @superset-ui/build-config
```

Before leveraging the build config provided you should remove any older dependencies or config files for the drivers you intend to use (e.g., remove `eslint` and `.eslintrc`). `@superset-ui/build-config` will handle these dependencies, and it will *auto-generate the config files for you*.

### Using drivers

This project is built with [🤖beemo](https://github.com/milesj/beemo), and therefore requires a
`"beemo"` configuration block in your `package.json` with a list of drivers you want to enable. You
can optionally configure drivers as shown below:

```
{
  "beemo": {
    "module": "@superset-ui/build-config",
    "drivers": [
      "babel",
      {
        "driver": "eslint",
        "args": ["--color", "--report-unused-disable-directives"]
      },
      {
        "driver": "jest",
        "env": { "NODE_ENV": "test" }
      },
      "prettier"
    ]
  }
}
```

### Executing drivers

Executing a driver will initialize 🤖 Beemo's pipeline, generate configuration files (e.g., it will
generate a `.eslintrc` or `prettier.config.js`, and execute the underlying driver binary and logging
to the console.

> All arguments passed to Beemo are passed to the driver's underlying binary.

You may define these commands as scripts:

```
// package.json
{
  "scripts": {
    "babel": "beemo babel ./src --out-dir ./lib",
    "eslint": "beemo eslint ./src ./tests",
    "jest": "beemo jest",
    "prettier": "beemo prettier --write \"./{src,tests}/**/*.{js,json,md}\""
  }
}
```

#### Driver documentation

Coming 🔜!

##### Jest

##### Babel

##### Prettier

##### Eslint

### Dotfiles

Because 🤖 `Beemo` _generates_ config files such as `.eslintrc`, `prettier.config.js`, etc., it's
useful to ignore these files. Running the following will add the appropriate `.gitignore` files for
you:

```
beemo sync-dotfiles --filter=gitignore
```
