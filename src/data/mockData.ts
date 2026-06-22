import type { SpareRequest, ShippingItem, ReturnItem, SalesRecord } from '@/types';

export const mockRequests: SpareRequest[] = [
  {
    id: 1,
    name: 'Max Müller',
    part: 'Hinterer Stoßdämpfer für BMW 320d',
    status: 'Neue Anfrage',
    oem: 'Nicht angegeben',
    time: 'Heute, 14:32',
    fahrzeugschein: 'fahrzeugschein-max-mueller.pdf',
    photos: ['stossdaempfer-alt.jpg'],
    phone: true,
    vehicle: { model: 'BMW 320d', year: '2017', vin: 'WBA************' },
    notes: 'Kunde hat es eilig\nBevorzugt Sachs\nMorgen anrufen',
    chat: [
      { from: 'customer', text: 'Hallo, ich suche einen hinteren Stoßdämpfer für einen BMW 320d Baujahr 2017.' },
      { from: 'assistant', text: 'Danke. Bitte laden Sie den Fahrzeugschein hoch, damit unser Expertenteam die VIN prüfen kann.' },
      { from: 'customer', text: 'Fahrzeugschein wurde hochgeladen.' },
    ],
  },
  {
    id: 2,
    name: 'Anna Schneider',
    part: 'Bremsbeläge für VW Golf 7',
    status: 'In Bearbeitung',
    oem: '5Q0698451M',
    time: 'Heute, 13:08',
    fahrzeugschein: 'fahrzeugschein-anna.jpg',
    photos: ['bremsbelaege-verpackung.jpg', 'teilenummer.jpg'],
    phone: false,
    vehicle: { model: 'VW Golf 7', year: '2016', vin: 'WVW************' },
    notes: 'Prefers OEM quality',
    chat: [
      { from: 'customer', text: 'Ich benötige Bremsbeläge für einen VW Golf 7.' },
      { from: 'admin', text: 'Hallo, wir prüfen Ihre Anfrage gerade.' },
    ],
  },
  {
    id: 3,
    name: 'Deniz Kaya',
    part: 'Linker Scheinwerfer für Mercedes C220',
    status: 'Angebot gesendet',
    oem: 'A2059067303',
    time: 'Gestern, 17:46',
    fahrzeugschein: 'schein-deniz.pdf',
    photos: ['scheinwerfer-links.jpg'],
    phone: true,
    vehicle: { model: 'Mercedes C220', year: '2018', vin: 'WDD************' },
    notes: 'Asked for fast delivery',
    chat: [
      { from: 'customer', text: 'Ich suche einen linken Scheinwerfer für Mercedes C220.' },
      { from: 'admin', text: 'Wir haben passende Optionen vorbereitet.' },
      {
        from: 'offer',
        offer: { brand: 'Hella', product: 'Scheinwerfer links', price: '249 €', delivery: '2-4 Werktage', warranty: '12 Monate Gewährleistung', image: 'scheinwerfer-produkt.jpg' },
      },
    ],
  },
  {
    id: 4,
    name: 'Laura Becker',
    part: 'Außenspiegel rechts für Opel Astra',
    status: 'Angenommen',
    oem: 'Nicht angegeben',
    time: 'Gestern, 10:15',
    fahrzeugschein: 'fahrzeugschein-laura.png',
    photos: ['spiegel-defekt.jpg'],
    phone: true,
    vehicle: { model: 'Opel Astra', year: '2019', vin: 'W0L************' },
    notes: 'Waiting for shipment',
    chat: [
      { from: 'customer', text: 'Ich brauche einen rechten Außenspiegel für Opel Astra.' },
      {
        from: 'offer',
        offer: { brand: 'VAN WEZEL', product: 'Außenspiegel rechts', price: '119 €', delivery: '3 Werktage', warranty: '12 Monate Gewährleistung', image: 'aussenspiegel.jpg' },
      },
      { from: 'customer', text: 'Ich möchte dieses Produkt bestellen.' },
    ],
  },
];

export const shippingItems: ShippingItem[] = [
  { customer: 'Laura Becker', vehicle: 'Opel Astra', product: 'VAN WEZEL Außenspiegel rechts', address: 'Musterstraße 12, 50667 Köln', order: 'ET-24018' },
  { customer: 'Deniz Kaya', vehicle: 'Mercedes C220', product: 'Hella Scheinwerfer links', address: 'Hafenweg 8, 20457 Hamburg', order: 'ET-24019' },
];

export const returnItems: ReturnItem[] = [
  { customer: 'Jonas Weber', order: 'ET-23991', reason: 'Kunde hat falsche Seite bestellt', status: 'Anfrage erhalten' },
  { customer: 'Mira Özkan', order: 'ET-23984', reason: 'Verpackung beschädigt angekommen', status: 'Prüfung läuft' },
  { customer: 'Tobias Schmitt', order: 'ET-23972', reason: 'Austausch nach Expertenteam-Prüfung', status: 'Austausch genehmigt' },
];

export const salesRecords: SalesRecord[] = [
  {
    id: 1, date: '12.06.2026', orderNumber: 'ET-1001', invoiceNumber: 'RE-2026-0001',
    customerName: 'Max Müller', vehicle: 'BMW 320d', vin: 'WBA************',
    part: 'Hinterer Stoßdämpfer', oem: '33526791551', brand: 'Sachs', supplier: 'Inter Cars',
    costPrice: '63 €', salePrice: '89 €', vat: '19%', paymentStatus: 'Bezahlt',
    shippingStatus: 'Versendet', trackingNumber: 'DHL123456789', notes: 'Kunde bevorzugt Sachs.',
  },
  {
    id: 2, date: '11.06.2026', orderNumber: 'ET-1002', invoiceNumber: 'RE-2026-0002',
    customerName: 'Deniz Kaya', vehicle: 'Mercedes C220', vin: 'WDD************',
    part: 'Scheinwerfer links', oem: 'A2059067303', brand: 'Hella', supplier: 'WM Fahrzeugteile',
    costPrice: '181 €', salePrice: '249 €', vat: '19%', paymentStatus: 'Bezahlt',
    shippingStatus: 'Versendet', trackingNumber: 'DHL987654321', notes: 'Expressversand angefragt.',
  },
  {
    id: 3, sourceRequestId: 4, date: '10.06.2026', orderNumber: 'ET-1003', invoiceNumber: 'RE-2026-0003',
    customerName: 'Laura Becker', vehicle: 'Opel Astra', vin: 'W0L************',
    part: 'Außenspiegel rechts', oem: 'Nicht angegeben', brand: 'VAN WEZEL', supplier: 'Stahlgruber',
    costPrice: '82 €', salePrice: '119 €', vat: '19%', paymentStatus: 'Offen',
    shippingStatus: 'Nicht versendet', trackingNumber: '', notes: 'Bestellung angenommen, Versand offen.',
  },
];

export const salesColumns: [string, string][] = [
  ['date', 'Datum'], ['orderNumber', 'Bestellnummer'], ['invoiceNumber', 'Rechnungsnummer'],
  ['customerName', 'Kundenname'], ['vehicle', 'Fahrzeug'], ['vin', 'VIN'],
  ['part', 'Ersatzteil'], ['oem', 'OEM-Nummer'], ['brand', 'Marke'], ['supplier', 'Lieferant'],
  ['costPrice', 'Einkaufspreis'], ['salePrice', 'Verkaufspreis'], ['profit', 'Gewinn'],
  ['vat', 'MwSt.'], ['paymentStatus', 'Zahlungsstatus'], ['shippingStatus', 'Versandstatus'],
  ['trackingNumber', 'Trackingnummer'], ['notes', 'Notizen'],
];
