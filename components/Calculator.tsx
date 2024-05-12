'use client';
import React, { useRef, useState } from 'react';
import * as math from 'mathjs';

const regex = /[0-9*+=/-]+/g;

const Calculator = () => {
  const [number, setNumber] = useState<number | string>('');
  const operatorRef = useRef<{ prevNums: number[]; operator: string[] }>({
    prevNums: [],
    operator: [],
  });

  const handleNumber = (num: number) => {
    setNumber((prev) => {
      if (prev === 0) return num.toString();
      return prev + num.toString();
    });
  };

  // 紀錄數字與運算符號
  const handleOperator = (operator: string) => {
    operatorRef.current.prevNums = [...operatorRef.current.prevNums, +number];
    operatorRef.current.operator = [...operatorRef.current.operator, operator];
    setNumber(0);
  };

  const handleResult = () => {
    // 加上最後 input 上的數字
    operatorRef.current.prevNums = [...operatorRef.current.prevNums, +number];
    // 將 prevNums 與 operator 進行運算
    const result = operatorRef.current.prevNums.reduce((acc, num, idx) => {
      switch (operatorRef.current.operator[idx - 1]) {
        case '+':
          return +math.add(math.bignumber(acc), math.bignumber(num));
        case '-':
          return +math.subtract(math.bignumber(acc), math.bignumber(num));
        case '*':
          return +math.multiply(math.bignumber(acc), math.bignumber(num));
        case '/':
          return +math.divide(math.bignumber(acc), math.bignumber(num));
        default:
          return num;
      }
    });

    operatorRef.current.prevNums = [];
    operatorRef.current.operator = [];
    setNumber(result.toString());
  };

  return (
    <div className='flex flex-col gap-5'>
      <h1>React TS Calculator</h1>
      <div>
        <input
          className='rounded-md text-right w-full h-[72px] px-5 bg-[#232c43] text-2xl '
          type='text'
          // readonly
          value={number || 0}
          onChange={(e) => {
            if (regex.test(e.target.value)) {
              console.log(e.target.value);
            }
          }}
        />
      </div>
      <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout gap-3 bg-[#232c43] p-5 rounded-md'>
        {/* numbers */}
        <button onClick={() => handleNumber(1)} className='common-btn grid-in-one'>
          1
        </button>
        <button onClick={() => handleNumber(2)} className='common-btn grid-in-two'>
          2
        </button>
        <button onClick={() => handleNumber(3)} className='common-btn grid-in-three'>
          3
        </button>
        <button onClick={() => handleNumber(4)} className='common-btn grid-in-four'>
          4
        </button>
        <button onClick={() => handleNumber(5)} className='common-btn grid-in-five'>
          5
        </button>
        <button onClick={() => handleNumber(6)} className='common-btn grid-in-six'>
          6
        </button>
        <button onClick={() => handleNumber(7)} className='common-btn grid-in-seven'>
          7
        </button>
        <button onClick={() => handleNumber(8)} className='common-btn grid-in-eight'>
          8
        </button>
        <button onClick={() => handleNumber(9)} className='common-btn grid-in-nine'>
          9
        </button>
        <button onClick={() => handleNumber(0)} className='common-btn grid-in-zero'>
          0
        </button>
        <button
          onClick={() => {
            setNumber((prev) => {
              if (prev.toString().includes('.')) return prev;
              return prev + '.';
            });
          }}
          className='common-btn grid-in-dot'
        >
          .
        </button>

        {/* operators */}
        <button
          onClick={() => {
            handleOperator('/');
          }}
          className='common-btn grid-in-divide'
        >
          /
        </button>
        <button
          onClick={() => {
            handleOperator('*');
          }}
          className='common-btn grid-in-mult'
        >
          x
        </button>
        <button
          onClick={() => {
            handleOperator('-');
          }}
          className='common-btn grid-in-minus'
        >
          -
        </button>
        <button
          onClick={() => {
            handleOperator('+');
          }}
          className='common-btn grid-in-add'
        >
          +
        </button>

        {/* others */}
        <button onClick={() => setNumber(0)} className='common-btn grid-in-cancel'>
          CAN
        </button>
        <button
          onClick={() => setNumber((prev) => prev.toString().slice(0, -1))}
          className='common-btn grid-in-del'
        >
          DEL
        </button>
        <button onClick={handleResult} className='common-btn grid-in-equal'>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
