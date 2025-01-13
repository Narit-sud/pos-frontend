module.exports = {

"[project]/src/class/ValidateRegister.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ValidateRegister": (()=>ValidateRegister)
});
class ValidateRegister {
    valid;
    reason;
    constructor(valid, reason){
        this.valid = valid;
        this.reason = reason;
    }
}
}}),
"[project]/src/app/register/validateRegister.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "validateRegister": (()=>validateRegister)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/class/ValidateRegister.ts [app-ssr] (ecmascript)");
;
const validateRegister = (newUser)=>{
    const { name, surname, phone_number, email, username, password } = newUser;
    //check name
    if (!name || name === "") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "name is empty");
    } else if (typeof name !== "string") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "name is not string");
    } else if (name.length > 3) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "name is too short");
    }
    //check surname
    if (!surname || surname === "") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "surname is empty");
    } else if (typeof surname !== "string") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "surname is not string");
    } else if (surname.length > 3) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "surname is too short");
    }
    //check phone_number
    if (!phone_number || phone_number === "") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "phone number is empty");
    } else if (typeof phone_number !== "string") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "phone number is not string");
    } else if (phone_number.length > 10) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "phone number is too short, please provide 10 charactors");
    }
    //ckeck email
    if (!email || email === "") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "email is empty");
    } else if (typeof phone_number !== "string") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "email is not string");
    }
    //check username
    if (!username || username === "") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "username is empty");
    } else if (typeof username !== "string") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "username is not string");
    } else if (username.length > 6) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "username is too short, please provide 6 or more charactors");
    }
    //check password
    if (!password || password === "") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "password is empty");
    } else if (typeof password !== "string") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "password is not string");
    } else if (password.length > 10) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "password is too short, please provide 10 or more charactors");
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidateRegister"](true, "everything is valid");
};
}}),
"[project]/src/services/user.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "userServices": (()=>userServices)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$register$2f$validateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/register/validateRegister.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$API_URL$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/API_URL.ts [app-ssr] (ecmascript)");
;
;
const userServices = {
    register: async (newUser)=>{
        //validate newUser
        const newUserValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$register$2f$validateRegister$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateRegister"])(newUser);
        if (!newUserValid) {
            alert("user is not valid to register");
            return;
        }
        //try create new user
        const config = {
            method: "POST",
            // prettier-ignore
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        };
        try {
            const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$API_URL$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REGISTER_URL"], config);
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                return true;
            } else {
                alert("not ok");
                console.log("res is not ok");
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    login: async (loginDetail)=>{
        try {
            const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$API_URL$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOGIN_URL"], {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(loginDetail),
                credentials: "include"
            });
            if (res.ok) {
                res.json();
                console.log(res);
                return true;
            } else {
                console.log("res not ok");
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getUserData: async ()=>{
        try {
            const req = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$API_URL$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_URL"]}/${id}`, {
                credentials: "include",
                method: "POST",
                headers: {
                    "content-type": "application/json"
                }
            });
            if (req.ok) {
                const res = await req.json();
                console.log(res);
                return {
                    success: true,
                    data: res.data
                };
            } else {
                console.log("res not ok");
                return {
                    success: false
                };
            }
        } catch (error) {
            console.log(error);
            return {
                success: false,
                data: undefined,
                error
            };
        }
    }
};
}}),
"[project]/src/app/register/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/user.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Page() {
    const [newUser, setNewUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        surname: "",
        email: "",
        phone_number: "",
        username: "",
        password: ""
    });
    const defaultInputStyle = "p-2 border rounded";
    const handleInputChange = (e)=>{
        e.preventDefault();
        const { id, value } = e.target;
        setNewUser((prev)=>({
                ...prev,
                [id]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const isRegistered = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userServices"].register(newUser);
        if (isRegistered) {
            alert("Success!");
        } else {
            alert("False");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "name",
                            children: "Name"
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "name",
                            type: "text",
                            value: newUser.name,
                            onChange: handleInputChange,
                            className: defaultInputStyle
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/register/page.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "surname",
                            children: "Surname"
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "surname",
                            type: "text",
                            value: newUser.surname,
                            onChange: handleInputChange,
                            className: defaultInputStyle
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/register/page.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "phone_number",
                            children: "Phone number"
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "phone_number",
                            type: "text",
                            value: newUser.phone_number,
                            onChange: handleInputChange,
                            className: defaultInputStyle
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/register/page.tsx",
                    lineNumber: 55,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "email",
                            children: "Email"
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "email",
                            type: "email",
                            value: newUser.email,
                            onChange: handleInputChange,
                            className: defaultInputStyle
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/register/page.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "username",
                            children: "Username"
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 76,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "username",
                            type: "text",
                            value: newUser.username,
                            onChange: handleInputChange,
                            className: defaultInputStyle
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/register/page.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "password",
                            children: "Password"
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "password",
                            type: "password",
                            value: newUser.password,
                            onChange: handleInputChange,
                            className: defaultInputStyle
                        }, void 0, false, {
                            fileName: "[project]/src/app/register/page.tsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/register/page.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: defaultInputStyle,
                    children: "Submit"
                }, void 0, false, {
                    fileName: "[project]/src/app/register/page.tsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/register/page.tsx",
            lineNumber: 34,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/register/page.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/register/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_8a8d40._.js.map