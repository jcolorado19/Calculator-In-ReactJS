import React from 'react';
import { useInput } from './hooks/useInput';

import * as math from 'mathjs';

function Buttons() {
  const { state, setState } = useInput();

  const calcBtns = [];
  const numLock = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, '%'];

  numLock.forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          setState(state + e.target.value);
        }}
        value={item}
        key={item}
      >
        {item}
      </button>,
    );
  });

  return (
    <>
      <div className='show-input subgrid'>{state}</div>
      <div className='digits flex'>{calcBtns}</div>
      <div className='modifiers subgrid'>
        {/* clear button */}

        <button
          className='modifiers_btn'
          onClick={() => setState(state.substr(0, state.length - 1))}
        >
          Backspace
        </button>

        {/* clear all */}
        <button className='modifiers_btn' onClick={() => setState('')} value=''>
          AC
        </button>
      </div>
      <div className='operations subgrid'>
        {/* add button */}
        <button
          className='operations_btn'
          onClick={(e) => {
            try {
              setState(
                String(math.evaluate(state)).length > 3 &&
                  String(math.evaluate(state)).includes('.')
                  ? String(math.evaluate(state).toFixed(4))
                  : String(math.evaluate(state)),
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value='='
        >
          =
        </button>

        {/* minus btn */}
        <button
          className='operations_btn'
          onClick={(e) => setState(state + e.target.value)}
          value='-'
        >
          -
        </button>

        <button
          className='operations_btn'
          onClick={(e) => setState(state + e.target.value)}
          value='*'
        >
          *
        </button>

        <button
          className='operations_btn'
          onClick={(e) => setState(state + e.target.value)}
          value='/'
        >
          /
        </button>
        {/* "=" btn */}
        <button
          className='operations_btn'
          onClick={(e) => setState(state + e.target.value)}
          value='+'
        >
          +
        </button>
      </div>
    </>
  );
}

export default Buttons;
