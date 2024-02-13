module.exports = {
  rules: {
    "nullable-sync": require('./rules/nullable-decorator-sync')(["Column", "Field", "FilterableField"]),
    'graphql-nullable-sync': require('./rules/nullable-decorator-sync')(["Field"]),
    'typeorm-nullable-sync': require('./rules/nullable-decorator-sync')("Column"),
    'nestjs-query-nullable-sync': require('./rules/nullable-decorator-sync')("FilterableField"),
  },
};
