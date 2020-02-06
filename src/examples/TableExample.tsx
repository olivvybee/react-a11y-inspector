import React from 'react';

export const TableExample = () => (
  <table
    role="table"
    data-test-component="StencilReactTable"
    className="css-1le61gv">
    <thead role="rowgroup" className="css-17d2jmz">
      <tr role="row" className="css-1w4asze">
        <th scope="col" role="columnheader" className="css-4149fn">
          <div data-test-component="StencilReactText" className="css-eji7c0">
            Typescript version
          </div>
        </th>
        <th scope="col" role="columnheader" className="css-4149fn">
          <div data-test-component="StencilReactText" className="css-eji7c0">
            Compatibility
          </div>
        </th>
      </tr>
    </thead>
    <tbody role="rowgroup" className="css-0">
      <tr
        className="css-1w4asze"
        data-test-component="StencilReactTableRow"
        role="row">
        <td role="cell" className="css-mskvor">
          <div data-test-component="StencilReactText" className="css-ury07k">
            &lt; 2.6
          </div>
        </td>
        <td role="cell" className="css-mskvor">
          <div className="css-gmvvl2">
            <div data-test-component="StencilReactText" className="css-5yh8lu">
              <div
                data-test-component="StencilReactRow"
                className="css-11adspe">
                <svg
                  color="negative"
                  display="block"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stencilSvgIcon css-4eyzm2"
                  width="16"
                  height="16"
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 16 16"
                  data-test-component="StencilReactIcon"
                  data-test-id="IconCrossCircleSmall"
                  style={{ width: '16px', height: '16px' }}>
                  <path
                    fill-rule="evenodd"
                    fill="currentColor"
                    d="M8,0 C12.4112,0 16,3.5888 16,8 C16,12.4112 12.4112,16 8,16 C3.5888,16 0,12.4112 0,8 C0,3.5888 3.5888,0 8,0 Z M11.707,4.293 C11.316,3.902 10.684,3.902 10.293,4.293 L8,6.586 L5.707,4.293 C5.316,3.902 4.684,3.902 4.293,4.293 C3.902,4.684 3.902,5.316 4.293,5.707 L6.586,8 L4.293,10.293 C3.902,10.684 3.902,11.316 4.293,11.707 C4.488,11.902 4.744,12 5,12 C5.256,12 5.512,11.902 5.707,11.707 L8,9.414 L10.293,11.707 C10.488,11.902 10.744,12 11,12 C11.256,12 11.512,11.902 11.707,11.707 C12.098,11.316 12.098,10.684 11.707,10.293 L9.414,8 L11.707,5.707 C12.098,5.316 12.098,4.684 11.707,4.293 Z"></path>
                </svg>
                <div className="css-1yr2x60"></div>{' '}
                <div className="css-1yr2x60"></div>Not compatible
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr
        className="css-1w4asze"
        data-test-component="StencilReactTableRow"
        role="row">
        <td role="cell" className="css-mskvor">
          <div data-test-component="StencilReactText" className="css-ury07k">
            &gt;= 2.6 and &lt;= 3.4
          </div>
        </td>
        <td role="cell" className="css-mskvor">
          <div className="css-gmvvl2">
            <div data-test-component="StencilReactText" className="css-5yh8lu">
              <div
                data-test-component="StencilReactRow"
                className="css-11adspe">
                <svg
                  color="positive"
                  display="block"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stencilSvgIcon css-143x1fl"
                  width="16"
                  height="16"
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 16 16"
                  data-test-component="StencilReactIcon"
                  data-test-id="IconCheckCircleSmall"
                  style={{ width: '16px', height: '16px' }}>
                  <path
                    fill-rule="evenodd"
                    fill="currentColor"
                    d="M12.7686,5.6406 L7.7686,11.6406 C7.5876,11.8566 7.3266,11.9866 7.0446,11.9986 C7.0306,11.9996 7.0146,11.9996 6.9996,11.9996 C6.7356,11.9996 6.4806,11.8956 6.2926,11.7066 L3.2926,8.7066 C2.9026,8.3166 2.9026,7.6836 3.2926,7.2926 C3.6836,6.9026 4.3166,6.9026 4.7066,7.2926 L6.9326,9.5186 L11.2316,4.3596 C11.5856,3.9356 12.2146,3.8786 12.6406,4.2316 C13.0646,4.5846 13.1226,5.2156 12.7686,5.6406 M7.9996,-0.0004 C3.5816,-0.0004 -0.0004,3.5816 -0.0004,7.9996 C-0.0004,12.4176 3.5816,15.9996 7.9996,15.9996 C12.4176,15.9996 15.9996,12.4176 15.9996,7.9996 C15.9996,3.5816 12.4176,-0.0004 7.9996,-0.0004"></path>
                </svg>
                <div className="css-1yr2x60"></div>{' '}
                <div className="css-1yr2x60"></div>Compatible
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr
        className="css-1w4asze"
        data-test-component="StencilReactTableRow"
        role="row">
        <td role="cell" className="css-mskvor">
          <div data-test-component="StencilReactText" className="css-ury07k">
            &gt; 3.4
          </div>
        </td>
        <td role="cell" className="css-mskvor">
          <div className="css-gmvvl2">
            <div data-test-component="StencilReactText" className="css-5yh8lu">
              <div
                data-test-component="StencilReactRow"
                className="css-11adspe">
                <svg
                  color="warning"
                  display="block"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stencilSvgIcon css-1jitjtq"
                  width="16"
                  height="16"
                  // role="presentation"
                  // aria-hidden="true"

                  focusable="false"
                  viewBox="0 0 16 16"
                  data-test-component="StencilReactIcon"
                  data-test-id="IconExclamationTriangleSmall"
                  style={{ width: '16px', height: '16px' }}>
                  <path
                    fill-rule="evenodd"
                    fill="currentColor"
                    d="M8.8891,8.9155 C8.8891,9.4685 8.4421,9.9155 7.8891,9.9155 C7.3361,9.9155 6.8891,9.4685 6.8891,8.9155 L6.8891,4.9155 C6.8891,4.3625 7.3361,3.9155 7.8891,3.9155 C8.4421,3.9155 8.8891,4.3625 8.8891,4.9155 L8.8891,8.9155 Z M8.5991,13.6255 C8.4981,13.7155 8.3891,13.7855 8.2691,13.8355 C8.1491,13.8855 8.0191,13.9155 7.8891,13.9155 C7.6181,13.9155 7.3681,13.8145 7.1791,13.6255 C6.9891,13.4355 6.8891,13.1855 6.8891,12.9155 C6.8891,12.6555 6.9981,12.3945 7.1791,12.2055 C7.4091,11.9755 7.7591,11.8755 8.0891,11.9355 C8.1491,11.9455 8.2081,11.9655 8.2691,11.9955 C8.3281,12.0155 8.3891,12.0455 8.4491,12.0855 C8.4981,12.1155 8.5491,12.1655 8.5991,12.2055 C8.6891,12.2955 8.7591,12.4055 8.8091,12.5355 C8.8591,12.6555 8.8891,12.7855 8.8891,12.9155 C8.8891,13.1855 8.7881,13.4355 8.5991,13.6255 Z M15.6731,14.0605 L8.6731,0.9355 C8.3651,0.3545 7.4131,0.3545 7.1051,0.9355 L0.1051,14.0605 C-0.0429,14.3355 -0.0339,14.6675 0.1261,14.9355 C0.2871,15.2025 0.5761,15.3665 0.8891,15.3665 L14.8891,15.3665 C15.2011,15.3665 15.4911,15.2025 15.6521,14.9355 C15.8121,14.6675 15.8211,14.3355 15.6731,14.0605 Z"></path>
                </svg>
                <div className="css-1yr2x60"></div>{' '}
                <div className="css-1yr2x60"></div>Not tested
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
);
