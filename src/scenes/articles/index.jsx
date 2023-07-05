import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import Header from '../../components/Header';



const Articles = ({userData}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'end_year', headerName: 'End Year' },
        { field: 'intensity', headerName: 'Intensity' },
        { field: 'sector', headerName: 'Sector' },
        { field: 'topic', headerName: 'Topic' },
        { field: 'url', headerName: 'URL' },
        { field: 'region', headerName: 'Region' },
        { field: 'start_year', headerName: 'Start Year' },
        { field: 'impact', headerName: 'Impact' },
        { field: 'added', headerName: 'Added' },
        { field: 'published', headerName: 'Published' },
        { field: 'country', headerName: 'Country' },
        { field: 'relevance', headerName: 'Relevance' },
        { field: 'pestle', headerName: 'Pestle' },
        { field: 'source', headerName: 'Source' },
        { field: 'title', headerName: 'Title' },
        { field: 'likelihood', headerName: 'Likelihood' },
    ]
    return (
        <Box m='10px'>
            <Header title="Articles" subtitle="Collection of News Articles" />
            <Box m='20px 0 0 0'
                height='100vh'
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor:colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color:`${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={userData}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    )
}

export default Articles;