export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BonusItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  description: string[];
  bulletPoints: string[];
  ctaText?: string;
}
