// Copyright 2024 Jacobo Tarrio Barreiro. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export function getPower(I: Float32Array, Q: Float32Array): number {
  let power = 0;
  for (let i = 0; i < I.length; ++i) {
    const vI = I[i];
    const vQ = Q[i];
    power += vI * vI + vQ * vQ;
  }
  return power / I.length;
}
