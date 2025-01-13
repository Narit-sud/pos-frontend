(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_7e2d8a._.js", {

"[project]/src/services/product.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "productService": (()=>productService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$API_URL$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/API_URL.ts [app-client] (ecmascript)");
;
const productService = {
    getAll: async ()=>{
        try {
            const req = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$API_URL$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_URL"], {
                credentials: "include"
            });
            const res = await req.json();
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    getById: async (id)=>{
        try {
            const req = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$API_URL$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_URL"]}/${id}`, {
                credentials: "include"
            });
            const res = await req.json();
            return res.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    update: async (updatedProduct)=>{
        try {
            const req = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$API_URL$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_URL"]}/${updatedProduct.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(updatedProduct)
            });
            const res = await req.json();
            return res.success;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    create: async (newProduct)=>{
        try {
            const req = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$API_URL$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_URL"], {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(newProduct)
            });
            const res = await req.json();
            console.log(res);
            return res.success;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/product/ProductForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CategoryContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/contexts/CategoryContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/product.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const defaultInputStyle = "p-2 border rounded";
function ProductForm(props) {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { productId } = props;
    const { categoryList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CategoryContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategory"])();
    const [thisProduct, setThisProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: 0,
        name: "",
        category: 0,
        price: 0,
        cost: 0,
        stock: 0,
        detail: ""
    });
    const getCategory = (newCat)=>{
        const findCat = categoryList.find((cat)=>cat.name === newCat);
        if (findCat) {
            setThisProduct((prev)=>({
                    ...prev,
                    category: findCat.id
                }));
        }
    };
    const ckeckMode = async ()=>{
        if (productId) {
            setMode("edit");
            const loadProduct = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productService"].getById(productId);
            setThisProduct({
                ...loadProduct,
                id: productId
            });
        } else {
            setMode("create");
        }
    };
    const handleInputChange = (e)=>{
        const { id, value } = e.target;
        setThisProduct((prev)=>({
                ...prev,
                [id]: id === "category" || id === "price" || id === "cost" || id === "stock" ? Number(value) : value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (mode === "edit") {
            // do something
            const updatedProduct = thisProduct;
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productService"].update(updatedProduct);
            if (updated) {
                alert("update success");
            } else {
                alert("update failed");
            }
            return;
        }
        if (mode === "create") {
            const newProduct = thisProduct;
            const created = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productService"].create(newProduct);
            if (created) {
                alert("create new product success");
            } else {
                alert("create failed");
            }
            return;
        }
    };
    // useEffect(() => {}, [getCategory])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductForm.useEffect": ()=>{
            ckeckMode();
        }
    }["ProductForm.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "name",
                            children: "Product Name"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductForm.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "name",
                            type: "text",
                            value: thisProduct.name,
                            onChange: handleInputChange,
                            className: defaultInputStyle
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductForm.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/product/ProductForm.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "category",
                            children: "Category"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductForm.tsx",
                            lineNumber: 114,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "category",
                            value: thisProduct.category,
                            className: defaultInputStyle,
                            onChange: handleInputChange,
                            children: categoryList.map((cat)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: cat.id,
                                    children: cat.name
                                }, cat.id, false, {
                                    fileName: "[project]/src/components/product/ProductForm.tsx",
                                    lineNumber: 123,
                                    columnNumber: 33
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductForm.tsx",
                            lineNumber: 115,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/product/ProductForm.tsx",
                    lineNumber: 113,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "price",
                            children: "Price"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductForm.tsx",
                            lineNumber: 131,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "price",
                            type: "number",
                            value: thisProduct.price,
                            onChange: handleInputChange,
                            className: defaultInputStyle
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductForm.tsx",
                            lineNumber: 132,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/product/ProductForm.tsx",
                    lineNumber: 130,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "cost",
                            children: "Cost"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductForm.tsx",
                            lineNumber: 141,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "cost",
                            type: "number",
                            value: thisProduct.cost,
                            onChange: handleInputChange,
                            className: defaultInputStyle
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductForm.tsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/product/ProductForm.tsx",
                    lineNumber: 140,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "stock",
                            children: "Stock"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductForm.tsx",
                            lineNumber: 151,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "stock",
                            type: "number",
                            value: thisProduct.stock,
                            onChange: handleInputChange,
                            className: defaultInputStyle
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductForm.tsx",
                            lineNumber: 152,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/product/ProductForm.tsx",
                    lineNumber: 150,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col p-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "detail",
                            children: "Detail"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductForm.tsx",
                            lineNumber: 161,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "detail",
                            type: "text",
                            value: thisProduct.detail,
                            onChange: handleInputChange,
                            className: defaultInputStyle
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/ProductForm.tsx",
                            lineNumber: 162,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/product/ProductForm.tsx",
                    lineNumber: 160,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: defaultInputStyle,
                    children: "Submit"
                }, void 0, false, {
                    fileName: "[project]/src/components/product/ProductForm.tsx",
                    lineNumber: 170,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/product/ProductForm.tsx",
            lineNumber: 102,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_s(ProductForm, "6RvL+c6ps61dnSqzvilmf8JAlJQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$CategoryContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCategory"]
    ];
});
_c = ProductForm;
const __TURBOPACK__default__export__ = ProductForm;
var _c;
__turbopack_refresh__.register(_c, "ProductForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/product/new/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_7e2d8a._.js.map