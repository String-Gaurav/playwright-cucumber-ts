// cucumber.js
module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: [
      "features/step-definitions/**/*.ts",
      "tests/world.ts",
      "tests/hooks.ts"
    ],
    format: ["html:reports/report.html"],
    timeout: 10000  // ✅ Optional, increases max timeout to 60s
  }
};
