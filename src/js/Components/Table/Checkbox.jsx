import React, { forwardRef, useRef, useEffect } from 'react';

const Checkbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <>
    <div>
      <input type="checkbox" ref={resolvedRef} {...rest}/>
      <span>  Alternar todos</span>
      </div>
    </>
  )
})

export default Checkbox;