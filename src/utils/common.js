export function validateRegex(v,r) {
    return r.test(String(v).toLowerCase());
}