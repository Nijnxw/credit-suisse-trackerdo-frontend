import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel, withStyles } from "@material-ui/core"

const headCells = [
  { id: 'title', disablePadding: true, label: 'Task Name' },
  { id: 'status', disablePadding: false, label: 'Status' },
  { id: 'due_date', disablePadding: false, label: 'Due Date' },
  { id: 'desc', disablePadding: false, label: 'Description' },
]

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontWeight: 'bold',
  }
}))(TableCell)

const CustomTableHead = (props) => {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all tasks' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

CustomTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default CustomTableHead
