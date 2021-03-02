import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
function SvgCircle(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="circle_svg__feather circle_svg__feather-circle"
      {...props}>
      <Path cx={12} cy={12} r={10} />
    </Svg>
  );
}

export default SvgCircle;
