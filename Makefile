
install: 
	npm i

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

plain:
	node bin/gendiff.js --format plain __fixtures__/file1.json __fixtures__/file2.json

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test