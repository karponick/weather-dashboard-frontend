// functions to help with temperature conversions
export function KtoC(k) {
    return (k - 273.15).toFixed(1);
}
export function KtoF(k) {
    return ((k - 273.15) * (9 / 5) + 32).toFixed(1);
}
export function CtoF(c) {
    return (c * 9 / 5 + 32).toFixed(1);
}
export function FtoC(f) {
    return (f - 32 * 5 / 9).toFixed(1);
}