import * as React from 'react';
import Svg, {SvgProps, Circle} from 'react-native-svg';

export const IconSvgProoerties = (props: SvgProps) => {
  return (
    <Svg width="24" height="24" fill="none" {...props}>
      <Circle cx={6.5} cy={11.5} r={1.5} fill="#000" />
      <Circle cx={12} cy={11.5} r={1.5} fill="#000" />
      <Circle cx={17.5} cy={11.5} r={1.5} fill="#000" />
    </Svg>
  );
};
