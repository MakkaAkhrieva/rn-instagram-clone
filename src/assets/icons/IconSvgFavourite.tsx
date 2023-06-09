import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const IconSvgFavourite = (props: SvgProps) => {
  return (
    <Svg width="23" height="20" fill="none" {...props}>
      <Path
        stroke="#000"
        strokeWidth={1.8}
        d="m11.314 4.183-.65-.63-.39-.377a120.2 120.2 0 0 1-.633-.615C8.001.954 5.742.498 3.933 1.28 2.119 2.062.857 4.056.9 6.288c.033 1.692.742 3.192 1.775 4.676 2.255 3.244 5.314 5.68 8.577 8.066 2.378-1.731 4.642-3.518 6.597-5.633l.661.611-.66-.61c1.658-1.795 3.024-3.61 3.582-5.859.588-2.367-.418-4.832-2.333-5.984l-7.786 2.628Zm0 0 .627-.653m-.627.653.627-.653m0 0c.144-.15.271-.289.39-.419.23-.249.432-.468.67-.684h.001M11.94 3.53l1.062-1.104m0 0C14.865.732 17.278.46 19.1 1.554l-6.098.872Z"
      />
    </Svg>
  );
};
