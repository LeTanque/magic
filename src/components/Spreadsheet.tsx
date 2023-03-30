import { Box, Flex } from '@chakra-ui/react';
import _ from 'lodash';
import React, { useState } from 'react';

import Cell from 'components/Cell';
import TableLabels from 'components/TableLabels';

const NUM_ROWS = 10;
const NUM_COLUMNS = 10;

const Spreadsheet: React.FC = () => {
  const [cellState, setCellState] = useState(
    _.times(NUM_ROWS, () => _.times(NUM_COLUMNS, _.constant(''))),
  );

  return (
    <Box width="full" className='spreadsheetContainer'>
      {cellState.map((row, rowIdx) => {
        return (
          <Flex key={String(rowIdx)}>
            {row.map((cellValue, columnIdx) => {
              if (columnIdx === 0 && rowIdx >= 0) {
                return (
                  <TableLabels
                    key={`${rowIdx}/${columnIdx}`}
                    value={cellValue}
                    onChange={(newValue: string) => {
                      const newRow = [
                        ...cellState[rowIdx].slice(0, columnIdx),
                        newValue,
                        ...cellState[rowIdx].slice(columnIdx + 1),
                      ];
                      setCellState([
                        ...cellState.slice(0, rowIdx),
                        newRow,
                        ...cellState.slice(rowIdx + 1),
                      ]);
                    }}
                  />
                )
              }
              else if (columnIdx > 0 && rowIdx === 0) {
                return (
                  <TableLabels
                    key={`${rowIdx}/${columnIdx}`}
                    value={cellValue}
                    onChange={(newValue: string) => {
                      const newRow = [
                        ...cellState[rowIdx].slice(0, columnIdx),
                        newValue,
                        ...cellState[rowIdx].slice(columnIdx + 1),
                      ];
                      setCellState([
                        ...cellState.slice(0, rowIdx),
                        newRow,
                        ...cellState.slice(rowIdx + 1),
                      ]);
                    }}
                  />
                )
              }
              
              else {
                return (
                  <Cell
                    key={`${rowIdx}/${columnIdx}`}
                    value={cellValue}
                    onChange={(newValue: string) => {
                      const newRow = [
                        ...cellState[rowIdx].slice(0, columnIdx),
                        newValue,
                        ...cellState[rowIdx].slice(columnIdx + 1),
                      ];
                      setCellState([
                        ...cellState.slice(0, rowIdx),
                        newRow,
                        ...cellState.slice(rowIdx + 1),
                      ]);
                    }}
                  />
                )
              }
            })}
          </Flex>
        );
      })}
    </Box>
  );
};

export default Spreadsheet;
