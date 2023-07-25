import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations'],
    }
  }
}

export default config
