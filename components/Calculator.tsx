'use client';
import React, { useState } from 'react';
const regexIncludesNumbersCommas = /^(?:0|[1-9]\d*)(?:[.,]\d{0,18})?$|^$/g;
const Calculator = () => {
  const [number, setNumber] = useState(0);

  return (
    <div className='flex flex-col gap-5'>
      <h1>React TS Calculator</h1>
      <div className=''>
        <input
          className='rounded-md text-right w-full h-[72px] px-5 bg-[#232c43] text-2xl '
          type='text'
          value={number}
          onChange={(e) => {
            setNumber(Number(e.target.value));
          }}
        />
      </div>
      <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout gap-3 bg-[#232c43] p-5 rounded-md'>
        <button className='common-btn grid-in-cancel'>CAN</button>
        <button className='common-btn grid-in-del'>DEL</button>
        <button className='common-btn grid-in-divide'>/</button>
        <button className='common-btn grid-in-mult'>x</button>
        <button className='common-btn grid-in-seven'>7</button>
        <button className='common-btn grid-in-eight'>8</button>
        <button className='common-btn grid-in-nine'>9</button>
        <button className='common-btn grid-in-minus'>-</button>
        <button className='common-btn grid-in-four'>4</button>
        <button className='common-btn grid-in-five'>5</button>
        <button className='common-btn grid-in-six'>6</button>
        <button className='common-btn grid-in-add'>+</button>
        <button className='common-btn grid-in-one'>1</button>
        <button className='common-btn grid-in-two'>2</button>
        <button className='common-btn grid-in-three'>3</button>
        <button className='common-btn grid-in-zero'>0</button>
        <button className='common-btn grid-in-dot'>.</button>
        <button className='common-btn grid-in-equal'>=</button>
      </div>
    </div>
  );
};

export default Calculator;
