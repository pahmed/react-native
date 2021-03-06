/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import {TurboModuleRegistry, type TurboModule} from 'react-native';

export interface Spec extends TurboModule {
  +getConstants: () => {||};
  +share: (
    content: {|title?: string, message?: string|},
    dialogTitle?: string,
  ) => Promise<{|action: string|}>;
}

export default (TurboModuleRegistry.get<Spec>('ShareModule'): ?Spec);
