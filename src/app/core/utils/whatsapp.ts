export function whatsappUrl(phone: string, message: string): string | null {
  const number = phone.replace(/[\s+()-]/g, '');
  return /^519\d{8}$/.test(number)
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : null;
}
