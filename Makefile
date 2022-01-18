.PHONY: init

build:
	@npm run build

clean:
	@npm run clean

test:
	@npm run -s test

publish:
	@npm run publish

# https://medium.com/geekculture/building-a-node-js-cli-with-typescript-packaged-and-distributed-via-homebrew-15ba2fadcb81
init:
	@npm init -y
	@npm i typescript @types/node -D
	@npx tsc --init
	@# update tsconfig.json
	@mkdir -p src
	@touch src/cli.ts
	@npx tsc
	@ls build
	@npm i yargs --save
	@npm i @types/yargs -D --save
	@mkdir src/commands
	@touch src/commands/greet.ts
