import {
  DataGrid as ReactDataGrid,
  type DataGridProps as ReactDataGridProps,
} from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'

const StyledDataGrid = styled(ReactDataGrid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '& .MuiDataGrid-columnHeaders': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-footerContainer': {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  '& .MuiDataGrid-cell': {
    color:
      theme.palette.mode === 'light'
        ? 'rgba(0,0,0,.85)'
        : 'rgba(255,255,255,0.85)',
    '& .MuiDataGrid-colCell, .MuiDataGrid-cell': {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    '& .MuiDataGrid-cell': {
      color: theme.palette.divider,
    },
  },
}))

const DEFAULT_ROWS_PER_PAGE_OPTIONS = [5]

export type DataGridProps = ReactDataGridProps
export default function DataGrid({
  autoHeight = true,
  checkboxSelection = true,
  disableSelectionOnClick = true,
  pageSize = 10,
  rowsPerPageOptions = DEFAULT_ROWS_PER_PAGE_OPTIONS,
  ...props
}: DataGridProps) {
  return (
    <StyledDataGrid
      {...props}
      pageSize={pageSize}
      rowsPerPageOptions={rowsPerPageOptions}
      autoHeight={autoHeight}
      checkboxSelection={checkboxSelection}
      disableSelectionOnClick={disableSelectionOnClick}
    />
  )
}
