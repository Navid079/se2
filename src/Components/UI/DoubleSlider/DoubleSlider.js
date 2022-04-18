import React, { useRef } from 'react';
import './DoubleSlider.css';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

export default function DoubleSlider({
  className,
  min,
  max,
  start,
  end,
  step,
  onUpdate,
}) {
  let currentStart = Math.floor(start / (max - min));
  let currentEnd = Math.floor(end / (max - min));

  const sliderUpdateHandler = (values, handle, ueValues, tap, positions) => {
    const [startPosition, endPosition] = positions;

    currentStart = startPosition;
    currentEnd = endPosition;
    console.log('Handler is called');
    if (!onUpdate) return;
    onUpdate(handle, values, positions);
  };

  return (
    <Nouislider
      className={`double-slider ${className || ''}`}
      range={{ min: min, max: max }}
      start={[start, end]}
      connect
      step={step}
      onUpdate={sliderUpdateHandler}
    />
  );
}
