import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import formats from '../../../formats';

export default function FormatsOptions({ handleClick }) {
  return (
    <div>
      {formats.map(format => (
        <Dropdown.Item onClick={() => handleClick(format)} key={format}>
          {format}
        </Dropdown.Item>
      ))}
    </div>
  );
}
