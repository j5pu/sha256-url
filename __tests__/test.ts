import {sha256} from "../src";
import { execSync } from 'child_process';

const url = "https://github.com/j5pu/actions/archive/refs/tags/0.1.0.tar.gz"
const sha = execSync(`curl -fsSL "${url}" | openssl sha256`, { encoding: 'utf-8' });

test("shaurl: function", async () => {
  expect(await sha256(url)).toBe(sha.trim());
});

test('shaurl: script', async () => {
  const dir = 'tmp="$(mktemp -d)"; shaurl="${PWD}"; cd "${tmp}"'
  const npm = 'npm init -y >/dev/null; npm install --quiet "${shaurl}" >/dev/null'
  const value = execSync(
      `${dir}; ${npm}; ./node_modules/.bin/shaurl ${url}`, { encoding: 'utf-8' });
  expect(value.trim()).toBe(sha.trim());
  });
