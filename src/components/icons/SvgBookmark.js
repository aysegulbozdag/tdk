import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBookmark(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="auto"
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="bookmark_svg__feather bookmark_svg__feather-bookmark"
      {...props}>
      <Path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
    </Svg>
  );
}

export default SvgBookmark;