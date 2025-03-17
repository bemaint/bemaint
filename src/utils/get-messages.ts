export async function getMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch {
    // Re-throw with a more descriptive error message
    throw new Error(`Failed to load messages for locale: ${locale}`);
  }
}
