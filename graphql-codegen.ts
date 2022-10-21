import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  generates: {
    './src/types.ts': {
      plugins: ['typescript'],
      config: {
        skipTypename: true,
      },
    },
  },
};

export default config;
