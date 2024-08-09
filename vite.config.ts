import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';
import { json } from 'stream/consumers';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      name: '_',
      entry: resolve(__dirname, 'src/Component.tsx'),
      formats: ['iife'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['solid-js', 'solid-js/web'],
      output: {
        globals: {
          'solid-js': 'solid',
          'solid-js/web': 'solidWeb',
        },
        plugins: [
          {
            name: 'wrap-with-arrow-function',
            renderChunk(code) {
              // Regular expression to match the IIFE function assignment and replace it
              const modifiedCode = code
                .replace(/var \w+=function\(([\w,]*)\)\{/g, '(($1)=>{') // Replace with arrow function and wrap in parentheses
                .replace(/}\(([\w,]*)\);\n$/, '})($1);'); // Close the IIFE with the arguments

              return JSON.stringify(modifiedCode);
            },
          },
        ],
      },
    },
  },
});
