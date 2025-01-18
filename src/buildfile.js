
exports.base = require('./cpide/base/buildfile').collectModules();
exports.editor = require('./cpide/editor/buildfile').collectModules();
exports.languages = require('./cpide/languages/buildfile').collectModules();
exports.vscode = require('./cpide/workbench/buildfile').collectModules(['cpide/workbench/workbench.main']);
exports.standaloneLanguages = require('./cpide/editor/standalone-languages/buildfile').collectModules();

exports.entrypoint = function (name) {
	return [{ name: name, include: [], exclude: ['cpide/css', 'cpide/nls', 'cpide/text'] }];
};
