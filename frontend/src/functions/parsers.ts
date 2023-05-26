export function parseMonetaryValue(value: number): string{
    return "R$ " + value.toFixed(2).toString().replace('.', ',');
}