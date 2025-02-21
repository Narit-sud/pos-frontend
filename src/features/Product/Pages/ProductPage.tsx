import { Box, Tabs, Tab, Typography } from "@mui/material";
import ProductTable from "../components/ProductTable";
import { useState } from "react";
import CategoryTable from "../components/CategoryTable";

export function ProductPage() {
    const [tab, setTab] = useState(0);
    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 4 }}>
                Products
            </Typography>
            <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)}>
                <Tab label="List" />
                <Tab label="Category" />
                <Tab label="Sort" />
            </Tabs>
            {tab === 0 && <ProductTable />}
            {tab === 1 && <CategoryTable />}
            {tab === 2 && <div>sorting component will sit here</div>}
        </Box>
    );
}
