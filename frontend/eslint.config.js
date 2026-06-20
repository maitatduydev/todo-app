import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
            prettierConfig,
        ],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            prettier: prettierPlugin,
        },
        settings: {
            react: { version: "detect" },
            "import/resolver": {
                node: {
                    paths: [path.resolve(__dirname, "")],
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/jsx-no-target-blank": "warn",
            "prettier/prettier": [
                "warn",
                {
                    arrowParens: "always",
                    semi: true,
                    trailingComma: "all",
                    tabWidth: 4,
                    endOfLine: "auto",
                    useTabs: false,
                    singleQuote: false,
                    printWidth: 100,
                    jsxSingleQuote: false,
                },
            ],
        },
    },
]);
