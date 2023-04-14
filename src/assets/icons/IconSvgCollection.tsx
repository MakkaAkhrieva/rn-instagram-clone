import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const IconSvgCollection = (props: SvgProps) => {
  return (
    <Svg width="18" height="22" fill="none" {...props}>
      <Path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M.9 20.078V.9h16.2v19.178l-7.524-6.27a.9.9 0 0 0-1.152 0L.9 20.079Z"
      />
    </Svg>
  );
};
