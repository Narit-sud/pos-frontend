import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid"
import { productService } from "../../services/product"
import { useEffect, useState } from "react"

function ProductPage() {
    const [rows, setRows] = useState<GridRowsProp>([])
    const [loading, setLoading] = useState<boolean>(true)

    const columns: GridColDef[] = [
        { field: "id", headerName: "Id", width: 150 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "category", headerName: "Category", width: 150 },
        { field: "price", headerName: "Price", width: 150 },
        { field: "cost", headerName: "Cost", width: 150 },
        { field: "stock", headerName: "Stock", width: 150 },
        { field: "detail", headerName: "Detail", width: 150 },
    ]

    const getData = async () => {
        setLoading(true)
        const data = await productService.getAll()
        if (data !== null) {
            // Map the data if necessary to fit the GridRowsProp structure
            const formattedData = data.map((item) => ({
                id: item.id, // Ensure the id field is present
                name: item.name,
                category: item.category,
                price: item.price,
                cost: item.cost,
                stock: item.stock,
                detail: "View Detail", // Example detail column (you can make it a link or button)
            }))
            setRows(formattedData) // Update rows with the fetched data
        }
        setLoading(false) // Set loading state to false once the data is loaded
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            {loading ? (
                <div>Loading...</div> // Show a loading message or spinner
            ) : (
                <DataGrid
                    rows={rows}
                    columns={columns}
                    onRowClick={(params) => {
                        console.log(params.row) // Handle row click event
                    }}
                />
            )}
        </div>
    )
}

export default ProductPage
