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

export interface Spec extends TurboModule {
  +notifyTaskFinished: (taskId: number) => void;
  +notifyTaskRetry: (taskId: number) => Promise<boolean>;
}

export default (TurboModuleRegistry.get<Spec>('HeadlessJsTaskSupport'): ?Spec);
