module.exports = (api) => {
  api.cache.never();

  return {
    plugins: [
      "@babel/plugin-syntax-dynamic-import",
      [
        "@babel/plugin-transform-modules-commonjs",
        {
          allowTopLevelThis: true
        }
      ],
      "@babel/plugin-transform-destructuring",
      "@babel/plugin-transform-react-jsx",
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-transform-template-literals",
      "@babel/plugin-transform-runtime",
      "@babel/plugin-transform-classes",
      [
        "transform-react-remove-prop-types",
        {
          mode: "wrap",
          ignoreFilenames: ["node_modules"]
        }
      ]
    ],
    presets: [
      ["@babel/preset-env", { targets: { node: "current" } }],
      ["@babel/preset-react", { targets: { node: "current" } }]
    ]
  };
};
