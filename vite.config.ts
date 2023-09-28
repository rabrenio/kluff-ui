import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'
import { peerDependencies } from './package.json'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: {
        main: path.resolve(__dirname, 'src/index.ts'),
        'utils/theme': path.resolve(__dirname, 'src/utils/theme.ts'),
        'utils/useToggle': path.resolve(__dirname, 'src/utils/useToggle.ts'),
        'utils/useMenuState': path.resolve(
          __dirname,
          'src/utils/useMenuState.ts'
        ),
        'utils/objectFields': path.resolve(
          __dirname,
          'src/utils/objectFields.ts'
        ),
      },
      name: '@kluff/ui',
      formats: ['es'],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
