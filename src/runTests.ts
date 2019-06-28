// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as test from './test/test';

async function runTests() {
  await test.suite('infra');
  await test.suite('stepping/pause');
  await test.suite('stepping/threads');
  await test.report();
  process.exit(0);
}

runTests();
