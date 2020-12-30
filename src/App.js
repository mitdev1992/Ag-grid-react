import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import jsonObj from './data.json'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './App.css';

const App = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState(jsonObj.data);

    return (
        <div className="ag-theme-alpine" style={ { height: 400, width: 1000 } }>
            <AgGridReact
                rowData={rowData}>
                <AgGridColumn field="shift"></AgGridColumn>
                <AgGridColumn field="total$"></AgGridColumn>
                <AgGridColumn field="shift1$"></AgGridColumn>
                <AgGridColumn field="shift2$"></AgGridColumn>
                <AgGridColumn field="shift3$"></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default App;