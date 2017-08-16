const proxyquire = require("proxyquire")

switch (process.argv[2]) {
  // Override "start" script
  case "start": {
    process.env.BABEL_ENV = "development"
    process.env.NODE_ENV = "development"

    const config = require("react-scripts/config/webpack.config.dev")
    const override = require("./webpack.config.dev.override")

    proxyquire("react-scripts/scripts/start.js", {
      "../config/webpack.config.dev": override(config)
    })
    break
  }

  // Override "build" script
  case "build": {
    process.env.BABEL_ENV = "production"
    process.env.NODE_ENV = "production"

    const config = require("react-scripts/config/webpack.config.prod")
    const override = require("./webpack.config.prod.override")

    proxyquire("react-scripts/scripts/build.js", {
      "../config/webpack.config.prod": override(config)
    })
    break
  }

  default: {
    console.log(
      "react-scripts-proxy only supports 'start', and 'build' options."
    )
    process.exit(-1)
  }
}
