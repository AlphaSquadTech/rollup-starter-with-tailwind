import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload';

const production = !process.env.ROLLUP_WATCH;
export default {
	input: 'src/app.js',
	output: {
		file: 'public/bundle.js',
		format: 'iife',
		sourcemap: true
	},
	plugins: [
        !production && serve("public"),
        !production && livereload(),
		resolve(),
		commonjs(),
		production && terser(),
	]
};
