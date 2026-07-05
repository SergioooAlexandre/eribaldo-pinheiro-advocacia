/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Area {
  title: string;
  icon: string;
  description: string;
  details: string[];
}

export interface Diferencial {
  title: string;
  description: string;
}

export interface ContactInfo {
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
  instagram: string;
  facebook: string;
  address: string;
  hours: string;
}
