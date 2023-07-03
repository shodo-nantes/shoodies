// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-commonjs,unicorn/prefer-module
require('esbuild').build({
    entryPoints: ['./src/server.ts'],
    bundle: true,
    platform: 'node',
    minify: true,
    outfile: './dist/server.js',
});
