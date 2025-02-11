export const MAIN_URL = "http://localhost:3333";

// auth
const AUTH_URL = `${MAIN_URL}/auth`;
export const VERIFY_TOKEN_URL = `${AUTH_URL}/verifyToken`;
export const REGISTER_URL = `${AUTH_URL}/register`;
export const LOGIN_URL = `${AUTH_URL}/login`;
export const LOGOUT_URL = `${AUTH_URL}/logout`;
export const RELOGIN_URL = `${AUTH_URL}/relogin`;

// product
export const PRODUCT_URL = `${MAIN_URL}/product`;
export const MAIN_PRODUCT_URL = `${PRODUCT_URL}/main`;
export const VARIANT_PRODUCT_URL = `${PRODUCT_URL}/variant`;

// customer
export const CUSTOMER_URL = `${MAIN_URL}/customer`;

// category
export const CATEGORY_URL = `${MAIN_URL}/category`;
// user
export const USER_URL = `${MAIN_URL}/user`;

// testing
export const TESTING_URL = `${MAIN_URL}/testing`;
export const TESINT_COOKIE_URL = `${TESTING_URL}/cookie`;
