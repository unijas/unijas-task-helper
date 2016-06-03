'use strict'

const Join = require('path').join
const Helper = {}

/**
 * ## readConfigFile
 * require given file or the default-config-file and read in the stylus-conf
 * @param  {[String]} pwd   dir the calling module runs in
 * @param  {[String]} file  file path to the config-file to use
 * @return {[Object]}      stylus config-object
 */
Helper.readConfigFile = function (pwd, file) {
  let module
  try {
    module = require(file)
  } catch (e) {
    module = require(Join(pwd, 'default.conf.json'))
  }
  return module
}

/**
 * ## buildPathes
 * @param  {[Array]} pathes Elements are file-glob-arrays
 * @return {[Array]}        paths/file-globs as strings with prefixed cwd
 */
Helper.buildPathes = function (pathes) {
  pathes = pathes.map(path => {
    return Join(process.cwd(), ...path)
  })
  return pathes
}

module.exports = Helper
