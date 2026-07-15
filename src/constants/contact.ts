// Contact details shared across the site.
//
// The phone number is assembled at runtime from fragments so the full
// number never appears verbatim in source, the served HTML, or the JS
// bundle — spam scrapers pattern-matching for phone numbers won't find
// it. Never render PHONE_E164 as visible text; link to PHONE_TEL_HREF
// (one-tap call) or PHONE_WHATSAPP_HREF (WhatsApp chat) with a
// digit-free label like "Call Us" instead.
const PHONE_PARTS = ['+44', '7340', '695', '486'];

export const PHONE_E164 = PHONE_PARTS.join('');
export const PHONE_TEL_HREF = `tel:${PHONE_E164}`;
export const PHONE_WHATSAPP_HREF = `https://wa.me/${PHONE_E164.slice(1)}`;

export const CONTACT_EMAIL = 'hello@pthfndr.org';
