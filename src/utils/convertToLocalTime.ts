export default function convertToLocalTime(utcDateString: string) {
    const utcDate = new Date(utcDateString);
    const localDate = new Date(utcDate.getTime() + 7 * 60 * 60 * 1000);
    return localDate.toLocaleString();
}
