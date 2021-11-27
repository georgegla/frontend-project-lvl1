install:
	npm ci
	npm link
brain-games:
	node bin/brain-games.js
brain-calc:
	node bin/brain-calc.js
brain-gcd.js:
	node bin/brain-gcd.js
publish:
	npm publish --dry-run
lint:
	npx eslint .

