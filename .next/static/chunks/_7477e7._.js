(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_7477e7._.js", {

"[project]/src/class/ValidateRegister.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/register/validateRegister.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "validateRegister": (()=>validateRegister)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/class/ValidateRegister.ts [app-client] (ecmascript)");
;
const validateRegister = (newUser)=>{
    const { name, surname, phone_number, email, username, password } = newUser;
    //check name
    if (!name || name === "") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "name is empty");
    } else if (typeof name !== "string") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "name is not string");
    } else if (name.length > 3) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "name is too short");
    }
    //check surname
    if (!surname || surname === "") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "surname is empty");
    } else if (typeof surname !== "string") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "surname is not string");
    } else if (surname.length > 3) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "surname is too short");
    }
    //check phone_number
    if (!phone_number || phone_number === "") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "phone number is empty");
    } else if (typeof phone_number !== "string") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "phone number is not string");
    } else if (phone_number.length > 10) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "phone number is too short, please provide 10 charactors");
    }
    //ckeck email
    if (!email || email === "") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "email is empty");
    } else if (typeof phone_number !== "string") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "email is not string");
    }
    //check username
    if (!username || username === "") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "username is empty");
    } else if (typeof username !== "string") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "username is not string");
    } else if (username.length > 6) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "username is too short, please provide 6 or more charactors");
    }
    //check password
    if (!password || password === "") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "password is empty");
    } else if (typeof password !== "string") {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "password is not string");
    } else if (password.length > 10) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](false, "password is too short, please provide 10 or more charactors");
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$class$2f$ValidateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidateRegister"](true, "everything is valid");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/user.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "userServices": (()=>userServices)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$register$2f$validateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/register/validateRegister.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$API_URL$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/API_URL.ts [app-client] (ecmascript)");
;
;
const userServices = {
    register: async (newUser)=>{
        //validate newUser
        const newUserValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$register$2f$validateRegister$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateRegister"])(newUser);
        if (!newUserValid) {
            alert("user is not valid to register");
            return;
        }
        //try create new user
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        };
        try {
            const req = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$API_URL$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REGISTER_URL"], config);
            console.log(req);
            if (req.ok) {
                const res = await req.json();
                return res;
            } else {
                const res = await req.json();
                return res;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    login: async (loginDetail)=>{
        try {
            const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$API_URL$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOGIN_URL"], {
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
    getUserData: async (id)=>{
        try {
            const req = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$API_URL$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USER_URL"]}/${id}`, {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/login/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/user.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function Page() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        username: "",
        password: ""
    });
    const handleInputChange = (e)=>{
        const { id, value } = e.target;
        setUser((prev)=>({
                ...prev,
                [id]: value
            }));
    };
    const defaultInputStyle = "p-2 border rounded";
    const handleLoginButton = async ()=>{
        const isLogin = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userServices"].login(user);
        console.log("isLogin", isLogin);
        if (isLogin) {
            alert("Login complete");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])("/dashboard");
        } else {
            alert("login failed");
        }
    };
    const handleForgetPasswordButton = ()=>{
        console.log("fotget clicked");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "username",
                        children: "Username"
                    }, void 0, false, {
                        fileName: "[project]/src/app/login/page.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "username",
                        type: "text",
                        value: user.username,
                        onChange: handleInputChange,
                        className: defaultInputStyle
                    }, void 0, false, {
                        fileName: "[project]/src/app/login/page.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/login/page.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "password",
                        children: "Password"
                    }, void 0, false, {
                        fileName: "[project]/src/app/login/page.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "password",
                        type: "password",
                        value: user.password,
                        onChange: handleInputChange,
                        className: defaultInputStyle
                    }, void 0, false, {
                        fileName: "[project]/src/app/login/page.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/login/page.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLoginButton,
                        className: "rounded border p-2",
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/src/app/login/page.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleForgetPasswordButton,
                        className: "rounded border p-2",
                        children: "Forget password"
                    }, void 0, false, {
                        fileName: "[project]/src/app/login/page.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/login/page.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/login/page.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_s(Page, "vDflgNshR5XnYagkn7ppBnAjgfI=");
_c = Page;
var _c;
__turbopack_refresh__.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/login/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports = __turbopack_require__("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_7477e7._.js.map