import React, { forwardRef, useEffect } from 'react';

const Checkbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  useEffect(() => {
    if (ref) {
      ref.current.indeterminate = indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <div>
      <label className='flex gap-2 cursor-pointer'>
        <input type="checkbox" ref={ref} {...rest} />
        Alternar todos
      </label>
    </div>
  );
});

export default Checkbox;
