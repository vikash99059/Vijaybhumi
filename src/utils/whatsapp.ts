export interface InquiryData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  vertical?: string;
  service?: string;
  serviceRequired?: string;
  projectLocation?: string;
  message: string;
}

export const BUSINESS_WHATSAPP_NUMBER = '917970904797';
export const DISPLAY_WHATSAPP_NUMBER = '+91 79709 04797';

export function buildWhatsAppMessage(data: InquiryData): string {
  const service = data.service || data.serviceRequired;
  
  const sections: (string | null)[] = [
    `*NEW INQUIRY — VIJAYBHUMI GROUP*`,
    `--------------------------------------`,
    `*Name:* ${data.name.trim()}`,
    data.company?.trim() ? `*Company:* ${data.company.trim()}` : null,
    `*Email:* ${data.email.trim()}`,
    `*Phone:* ${data.phone.trim()}`,
    data.vertical ? `*Business Vertical:* ${data.vertical}` : null,
    service ? `*Service Required:* ${service}` : null,
    data.projectLocation?.trim() ? `*Project Location:* ${data.projectLocation.trim()}` : null,
    `--------------------------------------`,
    `*Inquiry Details:*`,
    data.message.trim(),
    `--------------------------------------`,
    `_Sent via Vijaybhumi Group Official Portal_`
  ];

  return sections.filter(Boolean).join('\n');
}

export function getWhatsAppUrl(data: InquiryData): string {
  const message = buildWhatsAppMessage(data);
  return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppInquiry(data: InquiryData): string {
  const url = getWhatsAppUrl(data);
  
  // Try opening WhatsApp in a new tab/app
  try {
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) {
      // Popup might be blocked, fallback to direct location or return url
      window.location.href = url;
    }
  } catch (err) {
    console.error('Failed to open WhatsApp window:', err);
    window.location.href = url;
  }
  
  return url;
}
