import { useCallback, useEffect, useState, useRef } from "react";

const MultiRangeSlider = ({ min, max, onChange, initPriceRange, isClear }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  useEffect(() => {
    if (isClear && initPriceRange) {
      setMinVal(initPriceRange.min);
      setMaxVal(initPriceRange.max);
    }
  }, [isClear, initPriceRange]);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="relative flex justify-center items-center w-full">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        step={10}
        className="absolute w-full h-2 bg-transparent pointer-events-auto z-10 cursor-pointer"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        step={10}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className="absolute w-full h-2 bg-transparent pointer-events-auto z-10 cursor-pointer"
      />

      <div className="relative w-full py-6">
        <div className="absolute w-full h-3 bg-gray-200 rounded-full shadow-inner"></div>
        <div
          ref={range}
          className="absolute h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-md"
        ></div>
        <div className="absolute left-0 -mt-2 text-sm font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-200">
          ${minVal}
        </div>
        <div className="absolute right-0 -mt-2 text-sm font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded border border-blue-200">
          ${maxVal}
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;

