import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid"
import { getAllProduct } from "../../services/product"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useCategory } from "../../contexts/CategoryContext"

function ProductPage() {
    const navigate = useNavigate()
    const [rows, setRows] = useState<GridRowsProp>([])
    const { categories } = useCategory()

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
        const data = await getAllProduct()
        const reShapeData = data.map((item) => {
            const catName = categories.find((cat) => cat.id === item.category)
            if (catName) {
                return { ...item, category: catName.name }
            } else {
                return item
            }
        })
        if (data !== null) {
            const formattedData = reShapeData.map((item) => ({
                id: item.id,
                name: item.name,
                category: item.category,
                price: item.price,
                cost: item.cost,
                stock: item.stock,
                detail: "View Detail",
            }))
            setRows(formattedData)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                onRowClick={(params) => {
                    navigate(`edit/${params.row.id}`)
                }}
                slotProps={{
                    loadingOverlay: {
                        variant: "linear-progress",
                        noRowsVariant: "skeleton",
                    },
                }}
            />
        </div>
    )
}

export default ProductPage
