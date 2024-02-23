export const copyOnClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
};