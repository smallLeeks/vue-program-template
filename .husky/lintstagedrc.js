module.exports = {
    'src/**/*.{vue,js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
    '{!(package)*.json,.!(browserslist)*rc}': ['prettier --write--parser json'],
    'package.json': ['prettier --write'],
    '*.md': ['prettier --write'],
}
