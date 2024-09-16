"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const Slide = () => {
  return (
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src="https://www.gemstonelights.com/wp-content/uploads/2021/10/Final-104-copy-2-scaled-1.jpg" />}
        itemTwo={<ReactCompareSliderImage src="https://www.gemstonelights.com/wp-content/uploads/2021/10/Final-92-scaled-1.jpg" />}
        style={{ width: '100%', height: '270px', borderRadius: "8px", margin: "2rem 0" }} // Set width to be half of the height
      />
  );
};

export default Slide;
