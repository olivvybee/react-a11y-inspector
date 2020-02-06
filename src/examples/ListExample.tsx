import React from 'react';

export const ListExample = () => (
  <ol>
    <li aria-label="banana">Item one</li>
    <li>
      Item <span>two</span>
    </li>
    <li>
      Item three with{' '}
      <a href="https://stencil.a2z.com">magic underlined text</a>
    </li>
    <li id="hidden-element" aria-hidden={true}>
      Secret item{' '}
      <em>
        <strong>four</strong>
      </em>
    </li>
    <li>
      <div>
        <div aria-label="don't hide me">
          <div>Nesting is fun</div>
        </div>
      </div>
    </li>
  </ol>
);
