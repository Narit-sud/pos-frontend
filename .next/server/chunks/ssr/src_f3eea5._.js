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
    }
};
}}),
"[project]/src/app/login/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
        const isLogin = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$user$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userServices"].login(user);
        console.log("isLogin", isLogin);
        if (isLogin) {
        // redirect("/testCookie");
        }
    };
    const handleForgetPasswordButton = ()=>{
        console.log("fotget clicked");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "username",
                        children: "Username"
                    }, void 0, false, {
                        fileName: "[project]/src/app/login/page.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "username",
                        type: "text",
                        value: user.username,
                        onChange: handleInputChange,
                        className: defaultInputStyle
                    }, void 0, false, {
                        fileName: "[project]/src/app/login/page.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/login/page.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "password",
                        children: "Password"
                    }, void 0, false, {
                        fileName: "[project]/src/app/login/page.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "password",
                        type: "password",
                        value: user.password,
                        onChange: handleInputChange,
                        className: defaultInputStyle
                    }, void 0, false, {
                        fileName: "[project]/src/app/login/page.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/login/page.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLoginButton,
                        className: "p-2 border rounded",
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/src/app/login/page.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleForgetPasswordButton,
                        className: "p-2 border rounded",
                        children: "Forget password"
                    }, void 0, false, {
                        fileName: "[project]/src/app/login/page.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/login/page.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/login/page.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/login/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_f3eea5._.js.map