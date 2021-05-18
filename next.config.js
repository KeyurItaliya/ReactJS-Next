module.exports = {
  serverRuntimeConfig: {
      myvarpass: 'server-runtime ' + process.env.MYVAR,
  },
  publicRuntimeConfig: {
      myvarpass: 'public-runtime ' + process.env.MYVAR,
  },
  env: {
      myvarpass: 'build-time ' + process.env.MYVAR
  }
}