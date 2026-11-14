/**
 * Company logos, keyed by any name used in the content files.
 * Logos come from each company's official website (Mastercard's mark uses its published colours).
 * A company not listed here simply shows no logo.
 */
export const companyLogos: Record<string, { src: string; width: number; height: number }> = {
  Nextvant: { src: "/logos/nextvant.png", width: 256, height: 256 },
  TensorTonic: { src: "/logos/tensortonic.svg", width: 362, height: 252 },
  Mastercard: { src: "/logos/mastercard.svg", width: 97, height: 60 },
  "Mastercard Advisors": { src: "/logos/mastercard.svg", width: 97, height: 60 },
};
