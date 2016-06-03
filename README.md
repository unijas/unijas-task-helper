# unijas-task-helper
Library of helper-functions, used in our gulp-tasks

## Api

### Helper.readConfigFile()
require given file or the default-config-file and read in the stylus-conf
@param  {[String]} pwd   dir the calling module runs in
@param  {[String]} file  file path to the config-file to use
@return {[Object]}      stylus config-object

### Helper.buildPathes()
@param  {[Array]} pathes Elements are file-glob-arrays
@return {[Array]}        paths/file-globs as strings with prefixed cw
