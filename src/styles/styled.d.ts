/* eslint @typescript-esling/no-empty-interface: "off" */

import 'styled-components';

import {defaultTheme} from './themes';

export type Theme = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}