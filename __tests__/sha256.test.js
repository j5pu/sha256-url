"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const child_process_1 = require("child_process");
const url = "https://github.com/j5pu/actions/archive/refs/tags/0.1.0.tar.gz";
const sha = (0, child_process_1.execSync)(`curl -fsSL "${url}" | openssl sha256`, { encoding: 'utf-8' });
test("sha256: function", async () => {
    expect(await (0, __1.sha256)(url)).toBe(sha.trim());
});
test('sha256: script', async () => {
    const dir = 'tmp="$(mktemp -d)"; url256="${PWD}"; cd "${tmp}"';
    const npm = 'npm init -y >/dev/null; npm install --quiet "${url256}" >/dev/null';
    const value = (0, child_process_1.execSync)(`${dir}; ${npm}; ./node_modules/.bin/sha256 ${url}`, { encoding: 'utf-8' });
    expect(value.trim()).toBe(sha.trim());
});
