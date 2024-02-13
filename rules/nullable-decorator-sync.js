module.exports = (fields = []) => ({
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce Typeorm, NestJS Graphql and NestJs Query decorators to be nullable when the property is optional',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [], // no options
  },

  create(context) {
    return {
      Decorator(node) {
        if (node.expression && node.expression.callee) {
          if (!fields.includes(node.expression.callee.name)) {
            return;
          }
          const isParentOptional = node.parent && node.parent.optional;

          const properties = node.expression.arguments?.reduce((property, current) => {
            if (current.type === 'ObjectExpression') {
              return [...property, ...current.properties]
            }
            return property;
          }, []);

          const nullableDecorator = properties.find(prop => prop.key.name === 'nullable' && prop.value.value === true);

          if (isParentOptional && !nullableDecorator) {
            context.report({
              node: node.parent,
              message: `Property "${node.parent.key.name}" is optional, but "${node.expression.callee.name}" decorator is not set as nullable`,
            });
          }

          if (!isParentOptional && nullableDecorator) {
            context.report({
              node: node.parent,
              message: `Property "${node.parent.key.name}" is not optional, but "${node.expression.callee.name}" decorator is set as nullable`,
            });
          }
        }
      },
    };
  },
});
