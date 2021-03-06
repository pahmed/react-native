/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import {TurboModuleRegistry, type TurboModule} from 'react-native';

export type ArrayType = string;
type AnotherArray = Array<ArrayType>;

export interface Spec extends TurboModule {
  +getArray: (a: Array<any>) => Array<string>;
  +getReadOnlyArray: (a: Array<any>) => $ReadOnlyArray<string>;
  +getArrayWithAlias: (a: AnotherArray, b: Array<ArrayType>) => AnotherArray;
}

export default (TurboModuleRegistry.getEnforcing<Spec>(
  'SampleTurboModule',
): Spec);
