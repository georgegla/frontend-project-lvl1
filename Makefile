install:
	npm ci
	npm link
brain-games:
	node bin/brain-games.js
brain-calc:
	node bin/brain-calc.js
publish:
	npm publish --dry-run
lint:
	npx eslint .

