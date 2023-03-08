import { styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const StyledDataGrid = styled(DataGrid)(() => ({
  border: 0,
  color: '#000000',
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeader': {
    borderRight: '1px solid #e4e4e4',
    color: '#5E5E5E',
    width: 'auto !important',
    minWidth: 'none !important',
    maxWidth: 'none !important'
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: '1px solid #E4E4E4',
  },
  '& .MuiDataGrid-cell': {
    fontSize: '1rem',
    borderRight: 0,
    maxHeight: '70px !important',
    minHeight: '70px !important'
  },
  '& .MuiDataGrid-row': {
    background: '#ffffff',
    maxHeight: '70px !important',
    minHeight: '70px !important'
  },
  '& .MuiPaginationItem-root': {
    borderRadius: '50%'
  }
}));