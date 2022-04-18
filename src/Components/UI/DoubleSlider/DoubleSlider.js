import React from 'react';
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
  const sliderUpdateHandler = (values, handle, ueValues, tap, positions) => {
    try {
      onUpdate(handle, values, positions);
    } catch {}
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
