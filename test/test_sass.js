/* eslint-env node */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sassTrue from 'sass-true';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sassFile = path.join(__dirname, '.', 'index.scss');
sassTrue.runSass({ file: sassFile }, { describe, it });
