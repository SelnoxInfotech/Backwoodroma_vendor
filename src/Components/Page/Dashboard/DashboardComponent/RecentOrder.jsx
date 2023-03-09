import React from "react";
import Button from '@mui/material/Button';
import { TbArrowsUpDown } from "react-icons/tb"

import Box from '@mui/material/Box';
import { DataGridPro, GridRow, GridColumnHeaders } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';

const MemoizedRow = React.memo(GridRow);

const MemoizedColumnHeaders = React.memo(GridColumnHeaders);
export default function OrderTrack() {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100000,
        editable: true,
    });
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 OrderTrack">
                    <div className="col-6 Hedding ">
                        <span> Recent Order </span>
                    </div>
                    <div className="col-6  AllButton">
                        <div>
                            <Button variant="contained" color="success" endIcon={<TbArrowsUpDown />}>
                                ALL
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-12 OrderTrack_detaile  border">
                    <Box sx={{ height: 520, width: '100%' }}>
                        <DataGridPro
                            {...data}
                            loading={data.rows.length === 0}
                            rowHeight={38}
                            checkboxSelection
                            disableRowSelectionOnClick
                            components={{
                                Row: MemoizedRow,
                                ColumnHeaders: MemoizedColumnHeaders,
                            }}
                        />
                    </Box>
                </div>
            </div>
        </div>
    )
}