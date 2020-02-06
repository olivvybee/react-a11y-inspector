import React, { useContext, useState } from 'react';

import { context } from './Context';
import * as examples from './examples';

const ExamplePicker = () => {
  const [selected, setSelected] = useState(Object.keys(examples)[0]);
  const { setExample } = useContext(context);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 8,
        left: 8,
        padding: 16,
        border: '1px solid #007486',
        display: 'flex',
        flexDirection: 'column'
      }}>
      {Object.keys(examples).map(key => (
        <>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              type="radio"
              id={`example-${key}`}
              name="example"
              value={key}
              checked={selected === key}
              onChange={() => {
                const Example = (examples as any)[key];
                setSelected(key);
                setExample(<Example />);
              }}
            />
            <div style={{ width: 8 }} />
            <label htmlFor={`example-${key}`}>{key}</label>
          </div>
          <div style={{ height: 8 }} />
        </>
      ))}
    </div>
  );
};

export default ExamplePicker;
