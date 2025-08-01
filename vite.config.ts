import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
          output: {
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
            assetFileNames: (assetInfo) => {
              const info = assetInfo.name.split('.');
              const ext = info[info.length - 1];
              if (/\.(css)$/.test(assetInfo.name)) {
                return `assets/css/[name]-[hash].${ext}`;
              }
              if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
                return `assets/images/[name]-[hash].${ext}`;
              }
              if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
                return `assets/fonts/[name]-[hash].${ext}`;
              }
              return `assets/[name]-[hash].${ext}`;
            }
          }
        }
      },
      publicDir: 'public'
    };
});
