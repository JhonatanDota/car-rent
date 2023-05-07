export function parseMonetaryValue(value: number): string{
    return "R$ " + value.toString().replace('.', ',');
}