export type RequestStatus = 'Neue Anfrage' | 'In Bearbeitung' | 'Angebot gesendet' | 'Angenommen' | 'Abgeschlossen';

export interface ChatMessage {
  from: 'customer' | 'admin' | 'assistant' | 'offer';
  text?: string;
  offer?: {
    brand: string;
    product: string;
    price: string;
    delivery: string;
    warranty?: string;
    image?: string;
  };
}

export interface Vehicle {
  model: string;
  year: string;
  vin: string;
}

export interface SpareRequest {
  id: number;
  name: string;
  part: string;
  status: RequestStatus;
  oem: string;
  time: string;
  fahrzeugschein: string;
  photos: string[];
  phone: boolean;
  vehicle: Vehicle;
  notes: string;
  chat: ChatMessage[];
}

export interface ShippingItem {
  customer: string;
  vehicle: string;
  product: string;
  address: string;
  order: string;
}

export interface ReturnItem {
  customer: string;
  order: string;
  reason: string;
  status: string;
}

export interface SalesRecord {
  id: number;
  sourceRequestId?: number;
  date: string;
  orderNumber: string;
  invoiceNumber: string;
  customerName: string;
  vehicle: string;
  vin: string;
  part: string;
  oem: string;
  brand: string;
  supplier: string;
  costPrice: string;
  salePrice: string;
  vat: string;
  paymentStatus: string;
  shippingStatus: string;
  trackingNumber: string;
  notes: string;
}

export type Language = 'de' | 'tr' | 'en' | 'ar' | 'pl' | 'ro' | 'ru';

export type AdminPanel = 'requests' | 'shipping' | 'returns' | 'accounting';
