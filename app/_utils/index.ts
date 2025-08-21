/**
 * Utility function to combine CSS class names
 */
export function cn(...classes: (string | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
}

/**
 * Utility function to format dates
 */
export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

/**
 * Utility function to validate email addresses
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
