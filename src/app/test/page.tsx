"use client"
import { useEffect } from "react"
import { categoryService } from "@/services/category"

export default function Page() {
    useEffect(() => {
        categoryService.getAll()
    }, [])
    return <div>test page</div>
}
