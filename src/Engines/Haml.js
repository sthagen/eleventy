const HamlLib = require("hamljs");
const TemplateEngine = require("./TemplateEngine");

class Haml extends TemplateEngine {
  constructor(name, includesDir, config) {
    super(name, includesDir, config);

    this.setLibrary(this.config.libraryOverrides.haml);
  }

  setLibrary(lib) {
    this.hamlLib = lib || HamlLib;
    this.setEngineLib(lib);
  }

  async compile(str) {
    return this.hamlLib.compile(str);
  }
}

module.exports = Haml;
