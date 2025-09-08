/**
 * Formats a date string into Indian English format
 * @param {string} isoString - The ISO date string to format
 * @param {('full'|'short'|'time')} [format='full'] - The format type to use
 * @returns {string} The formatted date string in Indian English
 * 
 * @example
 * // returns "Monday, 1 January 2024"
 * formatEventDate("2024-01-01T00:00:00.000Z", "full")
 * 
 * // returns "1 January 2024"
 * formatEventDate("2024-01-01T00:00:00.000Z", "short")
 * 
 * // returns "00:00"
 * formatEventDate("2024-01-01T00:00:00.000Z", "time")
 */
export const formatEventDate = (isoString, format = 'full') => {
    const date = new Date(isoString);

    const formats = {
        full: {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'Asia/Kolkata'
        },
        short: {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'Asia/Kolkata'
        },
        time: {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Asia/Kolkata'
        }
    };

    // Use English (India) locale for formatting
    let formatted;
    if (format === 'time') {
        formatted = date.toLocaleTimeString('en-IN', formats[format]);
    } else {
        formatted = date.toLocaleDateString('en-IN', formats[format]);
    }

    // For 'full', ensure format is "Weekday, D Month YYYY"
    if (format === 'full') {
        const parts = formatted.split(', ');
        if (parts.length === 2) {
            formatted = `${parts[0]}, ${parts[1]}`;
        }
    }

    return formatted;
};