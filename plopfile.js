module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Generate a component template",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "What is the component name?",
      },
      {
        type: "list",
        name: "levelName",
        message: "What is the component level?",
        choices: [
          "atoms",
          "molecules",
          "organisms",
          "templates",
          "tokens",
          "utilities",
        ],
      },
    ],
    actions: [
      {
        type: "add",
        path:
          "src/components/{{levelName}}/{{kebabCase componentName}}/{{kebabCase componentName}}.tsx",
        templateFile: "src/plop-templates/component.tsx.hbs",
      },
      {
        type: "add",
        path:
          "src/components/{{levelName}}/{{kebabCase componentName}}/{{kebabCase componentName}}.module.scss",
        templateFile: "src/plop-templates/component.module.scss.hbs",
      },
      {
        type: "add",
        path:
          "src/components/{{levelName}}/{{kebabCase componentName}}/{{kebabCase componentName}}.stub.ts",
        templateFile: "src/plop-templates/component.stub.ts.hbs",
      },
      {
        type: "add",
        path:
          "src/components/{{levelName}}/{{kebabCase componentName}}/{{kebabCase componentName}}.stories.ts",
        templateFile: "src/plop-templates/component.stories.ts.hbs",
      },
    ],
  });
};
