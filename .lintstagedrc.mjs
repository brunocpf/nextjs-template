import { relative } from "path";

const buildEslintCommand = (filenames) =>
  `eslint --fix --max-warnings=0 --file ${filenames
    .map((f) => relative(process.cwd(), f))
    .map((f) => {
      console.log(f);
      return f;
    })
    .join(" --file ")}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames
    .map((f) => relative(process.cwd(), f))
    .map((f) => {
      console.log(f);
      return f;
    })
    .join(" ")}`;

const lintStagedConfig = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, buildPrettierCommand],
};

export default lintStagedConfig;
