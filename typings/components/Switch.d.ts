import * as React from 'react';

import { SwitchProps as NativeSwitchProps } from 'react-native';

import { ThemeShape } from '../types';

export interface SwitchColor {
  on: string;
  off: string;
  disabled: string;
}

export interface SwitchProps extends NativeSwitchProps {
  color?: string;
  theme?: ThemeShape;
  gripTrackColor?: SwitchColor;
  gripColor: SwitchColor;
}

export declare class Switch extends React.Component<SwitchProps> {}
