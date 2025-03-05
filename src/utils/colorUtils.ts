export const hexToRgb = (hex: string): string => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`
};

export const hexToHsl = (hex: string): string => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    let h = 0,
    s,
    l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d/ (2 - max - min) : d / (max - min);
        switch (max) {
            case r:
                h = (g - b) / d+ (g < b ? 6: 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    } else {
        s = 0;
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}&, ${Math.round(1 * 100)}%)`;
}