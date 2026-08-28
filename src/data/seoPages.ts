export type SeoPageGroup = 'marken' | 'teile' | 'ratgeber'

export interface SeoFaq {
  question: string
  answer: string
}

export interface SeoLink {
  label: string
  path: string
}

export interface SeoPageData {
  path: string
  group: SeoPageGroup
  eyebrow: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  sections: {
    heading: string
    body: string
    paragraphs?: string[]
    bullets?: string[]
    subsections?: {
      heading: string
      body: string
    }[]
    table?: {
      headers: [string, string, string]
      rows: [string, string, string][]
    }
    links?: SeoLink[]
  }[]
  faq: SeoFaq[]
  related: SeoLink[]
  ctaText: string
  secondaryCta?: SeoLink
  linkGroups?: {
    title: string
    links: SeoLink[]
  }[]
  faqCategories?: {
    title: string
    items: SeoFaq[]
  }[]
}

interface BrandProfile {
  name: string
  path: string
  title: string
  focus: string
  typicalParts: string
  dataHint: string
  mistake: string
  extraRelated?: SeoLink[]
}

interface PartProfile {
  name: string
  path: string
  title: string
  functionText: string
  differences: string
  mistake: string
  dataHint: string
}

const brandProfiles: BrandProfile[] = [
  {
    name: 'BMW',
    path: '/bmw-ersatzteile',
    title: 'BMW Ersatzteile passend anfragen',
    focus: 'Bei BMW spielen Baureihe, Motorcode, Ausstattungspaket und Produktionsmonat oft zusammen. Gerade bei Bremsen, Sensorik, Fahrwerk und Lichttechnik können kleine Unterschiede über die passende Variante entscheiden.',
    typicalParts: 'Häufig angefragt werden Bremsbeläge, Ölfilter, Batterien, Scheinwerfer, Querlenker, Lambdasonden und Sensoren.',
    dataHint: 'VIN, Fahrzeugschein und eine vorhandene BMW-Teilenummer helfen, Varianten sauber abzugrenzen.',
    mistake: 'Ein häufiger Fehler ist die Auswahl nur nach Modellbezeichnung wie 3er oder X5, ohne Motorisierung, Baujahr und Ausstattung zu prüfen.',
  },
  {
    name: 'VW',
    path: '/vw-ersatzteile',
    title: 'VW Ersatzteile passend anfragen',
    focus: 'Bei VW können PR-Codes, Motorisierung, Achse und Modellpflege entscheidend sein. Zwei Fahrzeuge mit gleichem Modellnamen können unterschiedliche Bremsanlagen, Filter oder Fahrwerksteile benötigen.',
    typicalParts: 'Typische Anfragen betreffen Bremsbeläge, Bremsscheiben, Ölfilter, Luftfilter, Stoßdämpfer, Zahnriemensätze und AGR-Ventile.',
    dataHint: 'Fahrzeugschein, VIN und bei VAG-Fahrzeugen besonders PR-Codes verbessern die Zuordnung deutlich.',
    mistake: 'Problematisch wird es, wenn nur Golf, Passat oder Tiguan genannt wird und die technische Ausstattung offen bleibt.',
    extraRelated: [{ label: 'PR-Code bei VAG verstehen', path: '/pr-code-vag' }],
  },
  {
    name: 'Mercedes',
    path: '/mercedes-ersatzteile',
    title: 'Mercedes Ersatzteile passend anfragen',
    focus: 'Mercedes Fahrzeuge unterscheiden sich je nach Baureihe, Motor, Ausstattungslinie und Fahrwerksvariante. Besonders bei Elektronik, Licht, Bremsen und Komfortausstattung sind genaue Daten wichtig.',
    typicalParts: 'Oft gesucht werden Bremsscheiben, Scheinwerfer, Batterien, Luftfilter, Lichtmaschinen, Radlager und Fahrwerksteile.',
    dataHint: 'VIN und OEM-Nummer sind bei Mercedes besonders hilfreich, weil Ausstattungscodes die Teileauswahl stark beeinflussen können.',
    mistake: 'Wer nur die Modellklasse nennt, übersieht leicht Unterschiede zwischen Limousine, T-Modell, Coupé, AMG-Line oder Nutzfahrzeugvarianten.',
  },
  {
    name: 'Audi',
    path: '/audi-ersatzteile',
    title: 'Audi Ersatzteile passend anfragen',
    focus: 'Audi Teile hängen häufig von Motor, Antrieb, Ausstattung, Lichtsystem und PR-Code ab. Bei quattro, S line oder Facelift-Modellen können andere Komponenten verbaut sein.',
    typicalParts: 'Häufige Anfragen sind Bremsen, Ölfilter, Scheinwerfer, Innenraumfilter, ABS-Sensoren, Turbolader und DPF-Komponenten.',
    dataHint: 'VIN, Fahrzeugschein, PR-Code und Fotos vom alten Teil helfen, die passende Audi-Variante zu prüfen.',
    mistake: 'Viele Fehlkäufe entstehen, wenn ein Teil optisch ähnlich wirkt, aber Steckverbindung, Achse oder Freigabe nicht passt.',
    extraRelated: [{ label: 'PR-Code bei VAG verstehen', path: '/pr-code-vag' }],
  },
  {
    name: 'Opel',
    path: '/opel-ersatzteile',
    title: 'Opel Ersatzteile passend anfragen',
    focus: 'Bei Opel sind Motorcode, Baujahr, Karosserieform und Ausstattung oft wichtiger als der Modellname allein. Das betrifft besonders Filter, Bremsen, Sensoren und Antriebsteile.',
    typicalParts: 'Angefragt werden unter anderem Ölfilter, Luftfilter, Bremsscheiben, Anlasser, Wasserpumpen, Lambdasonden und Kupplungssätze.',
    dataHint: 'Mit Fahrzeugschein, VIN oder einer sichtbaren OEM-Nummer kann TeilePilot24 die Auswahl besser eingrenzen.',
    mistake: 'Häufig werden Teile nur nach Astra, Corsa oder Insignia gesucht, obwohl Motorisierung und Bauzeitraum die Auswahl verändern.',
  },
  {
    name: 'Ford',
    path: '/ford-ersatzteile',
    title: 'Ford Ersatzteile mit VIN prüfen lassen',
    focus: 'Bei Ford können Baujahr, Motorfamilie, Ausstattung und Produktionszeitraum die Ersatzteilauswahl verändern. Besonders Focus, Fiesta, Kuga und Transit haben je nach Variante unterschiedliche technische Details.',
    typicalParts: 'Typische Ford Anfragen betreffen Bremsbeläge, Bremsscheiben, Ölfilter, Luftfilter, Lichtmaschinen, Anlasser, Kupplungssätze und Radlager.',
    dataHint: 'Für eine sichere Anfrage sind Fahrzeugschein, VIN oder vorhandene OEM-Nummern sinnvoll, ergänzt durch Fotos vom alten Teil.',
    mistake: 'Ein häufiger Fehler ist die Bestellung nach Modellname und Erstzulassung, obwohl innerhalb eines Baujahrs verschiedene Ausführungen verbaut sein können.',
  },
  {
    name: 'Renault',
    path: '/renault-ersatzteile',
    title: 'Renault Ersatzteile passend finden',
    focus: 'Renault Modelle unterscheiden sich oft nach Motorisierung, Karosserieform und Ausstattung. Bei Clio, Mégane, Captur, Kangoo oder Trafic können technische Varianten eng beieinanderliegen.',
    typicalParts: 'Häufig gesucht werden Filter, Zahnriemensätze, Wasserpumpen, Kupplungssätze, Stoßdämpfer, ABS-Sensoren und AGR-Ventile.',
    dataHint: 'TeilePilot24 gleicht Fahrzeugschein, VIN und OEM-Hinweise ab, damit die Anfrage nicht nur auf einer groben Modellsuche basiert.',
    mistake: 'Unsicher wird es, wenn ein Teil aus einer Liste gewählt wird, ohne Motorcode, Bauform oder Anschlussdetails zu prüfen.',
  },
  {
    name: 'Peugeot',
    path: '/peugeot-ersatzteile',
    title: 'Peugeot Ersatzteile mit Fahrzeugschein prüfen',
    focus: 'Peugeot Ersatzteile können sich nach Plattform, Motor, Abgasnorm und Ausstattung unterscheiden. Bei 208, 308, 3008, Partner oder Boxer ist deshalb eine genaue Zuordnung wichtig.',
    typicalParts: 'Oft angefragt werden Luftfilter, Ölfilter, DPF, Turbolader, Lambdasonden, Bremsteile, Kupplungssätze und Wasserpumpen.',
    dataHint: 'Ein Foto vom Fahrzeugschein und eine vorhandene Teilenummer helfen, die passenden Peugeot Teile einzugrenzen.',
    mistake: 'Viele Fehlbestellungen entstehen, wenn nur Hubraum oder Modellname verglichen wird und Abgasnorm, Baujahr oder Steckerform fehlen.',
  },
  {
    name: 'Fiat',
    path: '/fiat-ersatzteile',
    title: 'Fiat Ersatzteile einfach per WhatsApp anfragen',
    focus: 'Fiat Fahrzeuge wie 500, Panda, Punto, Tipo oder Ducato haben je nach Motorisierung und Bauzeitraum unterschiedliche Ersatzteilvarianten. Bei Transportern kommen oft zusätzliche Ausstattungsdetails hinzu.',
    typicalParts: 'Gefragt sind Bremsen, Filter, Lichtmaschinen, Anlasser, Wasserpumpen, Kupplungssätze, Radlager und Sensoren.',
    dataHint: 'Fahrzeugschein, VIN und Fotos vom alten Teil geben eine belastbare Grundlage für die Prüfung.',
    mistake: 'Gerade bei Ducato und älteren Modellen kann eine Auswahl nach Modellname allein zu falschen Bauformen oder Anschlüssen führen.',
  },
  {
    name: 'Toyota',
    path: '/toyota-ersatzteile',
    title: 'Toyota Ersatzteile mit OEM- und VIN-Prüfung',
    focus: 'Toyota Ersatzteile hängen häufig von Motor, Hybridtechnik, Ausstattung und Marktversion ab. Corolla, Yaris, RAV4, Auris oder Proace benötigen je nach Variante unterschiedliche Komponenten.',
    typicalParts: 'Häufig angefragt werden Filter, Bremsteile, Batterien, Radlager, Lambdasonden, Wasserpumpen, Luftfilter und Innenraumfilter.',
    dataHint: 'VIN, OEM-Nummer und Fahrzeugschein helfen, Toyota Varianten sauber voneinander zu trennen.',
    mistake: 'Ein häufiger Fehler ist die Annahme, dass Hybrid- und Benzinvarianten dieselben Komponenten verwenden.',
  },
  {
    name: 'Nissan',
    path: '/nissan-ersatzteile',
    title: 'Nissan Ersatzteile passend zum Fahrzeug finden',
    focus: 'Bei Nissan können Modellgeneration, Motor, Antrieb und Ausstattung entscheidend sein. Qashqai, Juke, Micra, X-Trail oder NV-Modelle haben je nach Bauzeitraum andere Teilevarianten.',
    typicalParts: 'Typische Anfragen betreffen Bremsscheiben, Filter, Kupplung, Turbolader, AGR-Ventile, Lambdasonden, ABS-Sensoren und Radlager.',
    dataHint: 'TeilePilot24 prüft Fahrzeugschein, VIN und vorhandene Nummern, bevor eine Variante empfohlen wird.',
    mistake: 'Fehler entstehen oft, wenn ein Teil für eine andere Modellgeneration gewählt wird, obwohl Name und Motor ähnlich klingen.',
  },
  {
    name: 'Volvo',
    path: '/volvo-ersatzteile',
    title: 'Volvo Ersatzteile sicher über Fahrzeugdaten prüfen',
    focus: 'Volvo Ersatzteile sind häufig von Baureihe, Motor, Sicherheitssystemen und Ausstattung abhängig. Bei V40, V60, XC60, XC90 oder Transporter-nahen Varianten zählt die genaue Fahrzeugausstattung.',
    typicalParts: 'Angefragt werden Bremsen, Filter, Scheinwerfer, Stoßdämpfer, Radlager, Sensoren, Lichtmaschinen und Batterien.',
    dataHint: 'VIN, Fahrzeugschein und OEM-Referenzen helfen, die passende Volvo Ausführung zu bestimmen.',
    mistake: 'Ein häufiger Stolperstein sind ähnliche Teile mit unterschiedlichen Sensoren, Steckern oder Zulassungen.',
  },
  {
    name: 'Skoda',
    path: '/skoda-ersatzteile',
    title: 'Skoda Ersatzteile mit PR-Code, VIN und OEM prüfen',
    focus: 'Skoda teilt viele technische Grundlagen mit VW, Audi und Seat. Gerade deshalb sind PR-Codes, Motorisierung, Achse und Ausstattung für die genaue Teileauswahl wichtig.',
    typicalParts: 'Typische Skoda Anfragen betreffen Bremsen, Filter, Stoßdämpfer, Zahnriemensätze, ABS-Sensoren, Scheinwerfer und Batterien.',
    dataHint: 'Fahrzeugschein, VIN, PR-Code und OEM-Nummer helfen, Octavia, Fabia, Superb, Kodiaq oder Karoq richtig zuzuordnen.',
    mistake: 'Problematisch ist eine reine Suche nach Modell und Baujahr, weil VAG-Varianten oft über Ausstattungscodes unterschieden werden.',
    extraRelated: [{ label: 'PR-Code bei VAG verstehen', path: '/pr-code-vag' }],
  },
  {
    name: 'Seat',
    path: '/seat-ersatzteile',
    title: 'Seat Ersatzteile passend zur Ausstattung finden',
    focus: 'Seat Modelle nutzen viele VAG-Komponenten, unterscheiden sich aber nach Motor, Ausstattung, Achse und PR-Code. Leon, Ibiza, Ateca und Alhambra können pro Baujahr mehrere Varianten haben.',
    typicalParts: 'Häufig gesucht werden Bremsbeläge, Bremsscheiben, Ölfilter, Luftfilter, Innenraumfilter, ABS-Sensoren und Zahnriemensätze.',
    dataHint: 'VIN, Fahrzeugschein und PR-Code machen die Anfrage deutlich verlässlicher als eine reine Modellsuche.',
    mistake: 'Fehlkäufe entstehen oft, wenn ein passendes Teil für VW oder Audi ungeprüft auf Seat übertragen wird.',
    extraRelated: [{ label: 'PR-Code bei VAG verstehen', path: '/pr-code-vag' }],
  },
  {
    name: 'Kia',
    path: '/kia-ersatzteile',
    title: 'Kia Ersatzteile mit Fahrzeugschein anfragen',
    focus: 'Kia Ersatzteile hängen von Modellgeneration, Motorisierung, Ausstattung und Bauzeitraum ab. Ceed, Sportage, Rio, Picanto oder Sorento können je nach Ausführung unterschiedliche Komponenten nutzen.',
    typicalParts: 'Gefragt sind Filter, Bremsen, Batterien, Radlager, Stoßdämpfer, Lambdasonden, Wasserpumpen und Kupplungssätze.',
    dataHint: 'Ein Foto vom Fahrzeugschein, die VIN oder eine OEM-Nummer helfen, die passende Kia Variante zu prüfen.',
    mistake: 'Unsicher wird es, wenn nur Modellname und Leistung verglichen werden, aber Bauzeitraum und Ausstattung fehlen.',
  },
  {
    name: 'Hyundai',
    path: '/hyundai-ersatzteile',
    title: 'Hyundai Ersatzteile passend und sicher finden',
    focus: 'Hyundai Fahrzeuge unterscheiden sich nach Generation, Motor, Ausstattung und Produktionszeitraum. i10, i20, i30, Tucson, Kona oder Santa Fe benötigen je nach Variante unterschiedliche Teile.',
    typicalParts: 'Häufig angefragt werden Ölfilter, Luftfilter, Innenraumfilter, Bremsteile, Anlasser, Lichtmaschinen, ABS-Sensoren und Radlager.',
    dataHint: 'TeilePilot24 gleicht Fahrzeugschein, VIN und vorhandene OEM-Nummern ab, bevor die Suche eingegrenzt wird.',
    mistake: 'Ein häufiger Fehler ist die Auswahl nach optischer Ähnlichkeit, obwohl Stecker, Sensoren oder technische Freigaben abweichen.',
  },
]

const partProfiles: PartProfile[] = [
  {
    name: 'Bremsbeläge',
    path: '/bremsbelaege',
    title: 'Bremsbeläge passend finden',
    functionText: 'Bremsbeläge übertragen den Druck des Bremssystems auf die Bremsscheibe und sind damit direkt sicherheitsrelevant.',
    differences: 'Sie unterscheiden sich nach Achse, Bremssystem, Verschleißsensor, Belagform, Dicke und Fahrzeugvariante.',
    mistake: 'Häufig werden Beläge bestellt, die optisch ähnlich wirken, aber nicht zum Bremssattel oder Sensoranschluss passen.',
    dataHint: 'Fahrzeugschein, VIN, PR-Code oder Fotos der alten Beläge helfen bei der Zuordnung.',
  },
  {
    name: 'Bremsscheiben',
    path: '/bremsscheiben',
    title: 'Bremsscheiben passend finden',
    functionText: 'Bremsscheiben bilden zusammen mit den Bremsbelägen die zentrale Reibfläche beim Bremsen.',
    differences: 'Wichtige Unterschiede sind Durchmesser, Dicke, Lochzahl, Belüftung, Achse und Bremssystem.',
    mistake: 'Ein typischer Fehler ist die Auswahl nach Modellname, obwohl vorne und hinten verschiedene Scheiben verbaut sein können.',
    dataHint: 'VIN, Fahrzeugschein und bei VAG-Fahrzeugen PR-Codes sind besonders hilfreich.',
  },
  {
    name: 'Scheinwerfer',
    path: '/scheinwerfer',
    title: 'Scheinwerfer passend finden',
    functionText: 'Scheinwerfer sorgen für Sicht und Sichtbarkeit und können je nach Fahrzeug stark in die Elektronik eingebunden sein.',
    differences: 'Halogen, Xenon, LED, Kurvenlicht, Stellmotor, Steuergerät, Tagfahrlicht und Ausstattung verändern die passende Version.',
    mistake: 'Oft wird ein Scheinwerfer nach Optik gewählt, obwohl Technik, Stecker oder Steuergerät nicht übereinstimmen.',
    dataHint: 'Fotos vom alten Scheinwerfer, VIN und OEM-Nummer sind für die Prüfung sehr wertvoll.',
  },
  {
    name: 'Ölfilter',
    path: '/oelfilter',
    title: 'Ölfilter passend finden',
    functionText: 'Der Ölfilter reinigt das Motoröl und schützt Motorbauteile vor Schmutzpartikeln.',
    differences: 'Es gibt Unterschiede bei Filtereinsatz, Gehäuse, Dichtungssatz, Motorcode und Herstellervorgabe.',
    mistake: 'Ein häufiger Fehler ist die Wahl nach Hubraum, obwohl Motorcode und Baujahr eine andere Filterausführung verlangen.',
    dataHint: 'Motorcode, Fahrzeugschein, VIN oder eine vorhandene Filterreferenz helfen bei der Auswahl.',
  },
  {
    name: 'Batterie',
    path: '/batterie',
    title: 'Batterie passend finden',
    functionText: 'Die Batterie versorgt Startvorgang, Bordnetz und je nach Fahrzeug auch Start-Stopp-Systeme.',
    differences: 'Kapazität, Bauform, Polanordnung, AGM, EFB, Kaltstartstrom und Batteriemanagement müssen passen.',
    mistake: 'Problematisch ist eine Batterie, die mechanisch passt, aber nicht zur Start-Stopp-Technik oder Codierung geeignet ist.',
    dataHint: 'Fahrzeugschein, Foto der alten Batterie und Angaben zu Start-Stopp helfen bei der Prüfung.',
  },
  {
    name: 'Luftfilter',
    path: '/luftfilter',
    title: 'Luftfilter passend zum Fahrzeug finden',
    functionText: 'Der Luftfilter reinigt die Ansaugluft des Motors und beeinflusst Verbrennung, Schutz und Laufverhalten.',
    differences: 'Unterschiede entstehen durch Motorcode, Gehäuseform, Filtergröße, Dichtung und Bauzeitraum.',
    mistake: 'Oft wird nur nach Modell gesucht, obwohl mehrere Filterkästen oder Motorvarianten möglich sind.',
    dataHint: 'VIN, Fahrzeugschein und ein Foto vom alten Filter oder Filterkasten helfen bei der Auswahl.',
  },
  {
    name: 'Innenraumfilter',
    path: '/innenraumfilter',
    title: 'Innenraumfilter und Pollenfilter richtig auswählen',
    functionText: 'Der Innenraumfilter filtert Pollen, Staub und je nach Ausführung auch Gerüche oder Feinstaub aus der Luft im Fahrzeug.',
    differences: 'Es gibt Standardfilter, Aktivkohlefilter, Feinstaubfilter sowie Unterschiede bei Größe, Rahmen und Einbaulage.',
    mistake: 'Ein häufiger Fehler ist die Bestellung eines Filters, der zwar ähnlich aussieht, aber nicht in den Filterkasten passt.',
    dataHint: 'Fahrzeugschein, VIN oder Maße und Fotos des alten Filters beschleunigen die Prüfung.',
  },
  {
    name: 'Stoßdämpfer',
    path: '/stossdaempfer',
    title: 'Stoßdämpfer passend über Fahrzeugdaten prüfen',
    functionText: 'Stoßdämpfer stabilisieren das Fahrzeug, halten die Räder auf der Straße und beeinflussen Bremsweg sowie Fahrkomfort.',
    differences: 'Sie unterscheiden sich nach Achse, Fahrwerk, Sport- oder Standardausführung, elektronischer Dämpfung und Karosserieform.',
    mistake: 'Viele Fehlkäufe entstehen, wenn links, rechts, Vorderachse oder Hinterachse nicht sauber unterschieden werden.',
    dataHint: 'Fahrzeugschein, VIN, PR-Code oder Fotos vom alten Dämpfer helfen bei der Zuordnung.',
  },
  {
    name: 'Querlenker',
    path: '/querlenker',
    title: 'Querlenker mit VIN und Fahrzeugschein prüfen',
    functionText: 'Querlenker führen das Rad und verbinden Radaufhängung, Achse und Karosserie.',
    differences: 'Wichtig sind Einbauseite, Achse, Lagerausführung, Kugelgelenk, Material und Fahrwerksvariante.',
    mistake: 'Ein typischer Fehler ist die Bestellung für die falsche Seite oder eine abweichende Achskonstruktion.',
    dataHint: 'VIN, Fahrzeugschein und ein Foto des alten Querlenkers helfen, links, rechts und Ausführung zu prüfen.',
  },
  {
    name: 'Radlager',
    path: '/radlager',
    title: 'Radlager passend zum Fahrzeug finden',
    functionText: 'Radlager ermöglichen die Drehbewegung des Rads und sind für Laufruhe, Sicherheit und ABS-Signal relevant.',
    differences: 'Varianten unterscheiden sich nach Achse, ABS-Ring, Sensorintegration, Nabenmaß und Antrieb.',
    mistake: 'Häufig wird ein Lager ohne passenden ABS-Ring oder für die falsche Achse ausgewählt.',
    dataHint: 'Fahrzeugdaten, VIN und Angaben zur Achse helfen, die passende Radlagerausführung zu finden.',
  },
  {
    name: 'Kupplungssatz',
    path: '/kupplung',
    title: 'Kupplungssatz richtig auswählen lassen',
    functionText: 'Der Kupplungssatz überträgt die Motorkraft auf das Getriebe und umfasst je nach Fahrzeug Kupplungsscheibe, Druckplatte und Ausrücklager.',
    differences: 'Unterschiede ergeben sich durch Motor, Getriebe, Schwungrad, Durchmesser und hydraulische oder mechanische Betätigung.',
    mistake: 'Ein häufiger Fehler ist die Wahl eines Satzes ohne Prüfung von Getriebevariante und Zweimassenschwungrad.',
    dataHint: 'VIN, Fahrzeugschein, Motorcode und Hinweise der Werkstatt sind bei Kupplungen besonders hilfreich.',
  },
  {
    name: 'Lichtmaschine',
    path: '/lichtmaschine',
    title: 'Lichtmaschine passend nach Fahrzeugdaten finden',
    functionText: 'Die Lichtmaschine lädt die Batterie und versorgt das elektrische Bordnetz während der Fahrt.',
    differences: 'Leistung, Riemenscheibe, Befestigung, Stecker, Freilauf und Start-Stopp-Technik können abweichen.',
    mistake: 'Oft wird nur die Amperezahl verglichen, obwohl Anschluss und Befestigung nicht übereinstimmen.',
    dataHint: 'OEM-Nummer, VIN und Fotos der alten Lichtmaschine beschleunigen die Prüfung.',
  },
  {
    name: 'Anlasser',
    path: '/anlasser',
    title: 'Anlasser passend zum Fahrzeug prüfen',
    functionText: 'Der Anlasser bringt den Motor beim Startvorgang auf Drehzahl.',
    differences: 'Varianten unterscheiden sich nach Leistung, Zähnezahl, Befestigung, Drehrichtung, Getriebe und Start-Stopp-System.',
    mistake: 'Ein häufiger Fehler ist die Auswahl eines Anlassers mit ähnlicher Form, aber falscher Verzahnung oder Befestigung.',
    dataHint: 'Fahrzeugschein, VIN und die Nummer auf dem alten Anlasser helfen bei der Zuordnung.',
  },
  {
    name: 'Wasserpumpe',
    path: '/wasserpumpe',
    title: 'Wasserpumpe und Kühlung richtig auswählen',
    functionText: 'Die Wasserpumpe bewegt das Kühlmittel durch Motor und Kühlsystem und schützt vor Überhitzung.',
    differences: 'Es gibt mechanische und elektrische Pumpen, unterschiedliche Gehäuse, Dichtungen und Ausführungen mit Zahnriemen- oder Keilrippenriemenantrieb.',
    mistake: 'Problematisch ist die Bestellung einer Pumpe ohne passende Dichtung, Gehäuseform oder Antriebsart.',
    dataHint: 'Motorcode, VIN, Fahrzeugschein und vorhandene Teilenummern helfen bei der Prüfung.',
  },
  {
    name: 'Zahnriemensatz',
    path: '/zahnriemensatz',
    title: 'Zahnriemensatz passend mit VIN prüfen',
    functionText: 'Der Zahnriemensatz synchronisiert Motorsteuerung und Ventiltrieb und wird oft zusammen mit Rollen und Wasserpumpe gewechselt.',
    differences: 'Unterschiede bestehen bei Riemenlänge, Rollen, Spannsystem, Wasserpumpe, Motorcode und Bauzeitraum.',
    mistake: 'Ein häufiger Fehler ist ein Satz ohne passende Wasserpumpe oder Spannrolle für den konkreten Motor.',
    dataHint: 'VIN, Motorcode und Fahrzeugschein sind hier besonders wichtig, weil Motorvarianten ähnlich benannt sein können.',
  },
  {
    name: 'Turbolader',
    path: '/turbolader',
    title: 'Turbolader passend über OEM-Nummer finden',
    functionText: 'Der Turbolader nutzt Abgasenergie, um mehr Luft in den Motor zu fördern und die Leistung zu unterstützen.',
    differences: 'Varianten unterscheiden sich nach Motorcode, Ladedruckregelung, Krümmer, Sensorik, Anschluss und Abgasnorm.',
    mistake: 'Sehr riskant ist die Auswahl nur nach Fahrzeugmodell, weil ähnliche Turbolader technisch abweichen können.',
    dataHint: 'OEM-Nummer, Motordaten, VIN und Fotos vom alten Turbolader sind für eine saubere Prüfung wichtig.',
  },
  {
    name: 'AGR-Ventil',
    path: '/agr-ventil',
    title: 'AGR-Ventil passend zum Fahrzeug prüfen',
    functionText: 'Das AGR-Ventil führt einen Teil der Abgase zurück in den Ansaugtrakt und beeinflusst Emissionen sowie Motorlauf.',
    differences: 'Unterschiede gibt es bei elektrischer oder pneumatischer Steuerung, Kühler, Flansch, Stecker und Abgasnorm.',
    mistake: 'Häufig wird ein Ventil mit ähnlicher Form gewählt, obwohl Stecker oder Kühleranschluss nicht passen.',
    dataHint: 'VIN, OEM-Nummer, Fehlercode und Fotos vom alten AGR-Ventil helfen bei der Auswahl.',
  },
  {
    name: 'DPF / Dieselpartikelfilter',
    path: '/dpf',
    title: 'DPF / Dieselpartikelfilter passend finden',
    functionText: 'Der Dieselpartikelfilter filtert Rußpartikel aus dem Abgas und ist Teil des Abgasreinigungssystems.',
    differences: 'Entscheidend sind Motorcode, Abgasnorm, Sensoranschlüsse, Länge, Flansch und Ausstattung mit Katalysator.',
    mistake: 'Ein falscher DPF kann mechanisch ähnlich wirken, aber bei Sensoren oder Abgasnorm nicht passen.',
    dataHint: 'Fahrzeugschein, VIN, OEM-Nummer und vorhandene Fehlercodes helfen bei der Prüfung.',
  },
  {
    name: 'Lambdasonde',
    path: '/lambdasonde',
    title: 'Lambdasonde passend mit Fahrzeugdaten prüfen',
    functionText: 'Die Lambdasonde misst den Sauerstoffgehalt im Abgas und unterstützt Motorsteuerung sowie Abgasreinigung.',
    differences: 'Wichtig sind Position vor oder nach Kat, Kabellänge, Stecker, Sondentyp, Motorcode und Abgasnorm.',
    mistake: 'Oft wird eine Sonde mit falschem Stecker oder falscher Einbauposition bestellt.',
    dataHint: 'VIN, OEM-Nummer, Fehlercode und Fotos vom alten Stecker helfen bei der Zuordnung.',
  },
  {
    name: 'ABS-Sensor',
    path: '/abs-sensor',
    title: 'ABS-Sensor passend zum Fahrzeug finden',
    functionText: 'Der ABS-Sensor erfasst die Raddrehzahl und liefert Daten für ABS, ESP und weitere Assistenzsysteme.',
    differences: 'Varianten unterscheiden sich nach Achse, Einbauseite, Kabellänge, Stecker, Befestigung und Sensortyp.',
    mistake: 'Ein häufiger Fehler ist die Bestellung für die falsche Seite oder mit abweichendem Stecker.',
    dataHint: 'Fahrzeugschein, VIN und ein Foto des alten Sensors mit Stecker helfen bei der Prüfung.',
  },
]

const guideTopics = [
  {
    title: 'OEM-Nummer einfach erklärt',
    path: '/oem-nummer',
    topic: 'Die OEM-Nummer',
    angle: 'Sie ist eine wichtige Referenz, wenn ein Ersatzteil eindeutig einem Herstellerteil zugeordnet werden soll.',
  },
  {
    title: 'VIN-Nummer einfach erklärt',
    path: '/vin-nummer',
    topic: 'Die VIN-Nummer oder Fahrgestellnummer',
    angle: 'Sie hilft, Modell, Motorisierung, Ausstattung und Produktionsdetails genauer einzugrenzen.',
  },
  {
    title: 'Fahrzeugschein erklärt',
    path: '/fahrzeugschein-erklaert',
    topic: 'Der Fahrzeugschein',
    angle: 'Er enthält wichtige Grunddaten wie HSN/TSN, Erstzulassung und technische Angaben zum Fahrzeug.',
  },
  {
    title: 'Welches Ersatzteil passt?',
    path: '/welches-ersatzteil-passt',
    topic: 'Die Frage nach dem passenden Ersatzteil',
    angle: 'Sie lässt sich zuverlässig nur beantworten, wenn Fahrzeugdaten und Teilemerkmale zusammen betrachtet werden.',
  },
  {
    title: 'Original oder OEM?',
    path: '/original-oder-oem',
    topic: 'Der Unterschied zwischen Originalteil, OEM-Teil und passenden Alternativen',
    angle: 'Die Begriffe helfen, Angebote besser einzuordnen, ersetzen aber nicht die Prüfung der Passgenauigkeit.',
  },
  {
    title: 'Warum werden so oft falsche Ersatzteile bestellt?',
    path: '/warum-falsche-ersatzteile-bestellt-werden',
    topic: 'Falsche Ersatzteile entstehen selten durch Zufall',
    angle: 'Meist fehlen kleine, aber entscheidende Angaben zu Motor, Ausstattung, Bauzeitraum oder Teilenummer.',
  },
  {
    title: 'Ersatzteile per WhatsApp anfragen',
    path: '/ersatzteile-per-whatsapp',
    topic: 'Die Ersatzteilanfrage per WhatsApp',
    angle: 'Sie ist praktisch, weil Fotos, Fahrzeugschein, VIN und Rückfragen in einem Gespräch zusammenbleiben.',
  },
  {
    title: 'Fahrzeugschein oder VIN - was wird benötigt?',
    path: '/fahrzeugschein-oder-vin',
    topic: 'Fahrzeugschein und VIN',
    angle: 'Beide Angaben ergänzen sich: Der Fahrzeugschein liefert Grunddaten, die VIN kann Details zur Fahrzeugausstattung liefern.',
  },
  {
    title: 'OEM-Nummer finden und richtig nutzen',
    path: '/oem-nummer-finden',
    topic: 'Das Finden und Nutzen der OEM-Nummer',
    angle: 'Nummern auf alten Teilen, Rechnungen oder Werkstattunterlagen können die Suche stark vereinfachen.',
  },
  {
    title: 'PR-Code bei VW, Audi, Seat und Skoda verstehen',
    path: '/pr-code-vag',
    topic: 'Der PR-Code bei VAG-Fahrzeugen',
    angle: 'Er beschreibt Ausstattungs- und Technikmerkmale, die besonders bei Bremsen, Fahrwerk und Ausstattungsteilen wichtig sein können.',
  },
  {
    title: 'Ersatzteile mit VIN prüfen lassen',
    path: '/ersatzteile-mit-vin-pruefen',
    topic: 'Die Ersatzteilprüfung mit VIN',
    angle: 'Die VIN ist keine Garantie für jedes Detail, aber sie ist ein sehr guter Startpunkt für eine sichere Anfrage.',
  },
]

const brandLinks: SeoLink[] = brandProfiles.map((brand) => ({ label: `${brand.name} Ersatzteile`, path: brand.path }))
const partLinks: SeoLink[] = partProfiles.map((part) => ({ label: part.name, path: part.path }))
const guideLinks: SeoLink[] = guideTopics.map((guide) => ({ label: guide.title, path: guide.path }))

const advancedGuideTopics = [
  ['/ratgeber/richtiges-ersatzteil-finden', 'Das richtige Ersatzteil finden: Warum Fahrzeugdaten so wichtig sind', 'Grundlagen'],
  ['/ratgeber/vin-pruefung-ersatzteile', 'VIN-Prüfung für Ersatzteile: Was wird wirklich geprüft?', 'VIN, OEM und Fahrzeugschein'],
  ['/ratgeber/oem-nummer-richtig-nutzen', 'OEM-Nummer richtig nutzen: So vermeidest du falsche Ersatzteile', 'VIN, OEM und Fahrzeugschein'],
  ['/ratgeber/fahrzeugschein-richtig-lesen', 'Fahrzeugschein richtig lesen: Welche Daten für Ersatzteile wichtig sind', 'VIN, OEM und Fahrzeugschein'],
  ['/ratgeber/hsn-tsn-reicht-nicht', 'Warum HSN/TSN allein für Ersatzteile oft nicht reicht', 'VIN, OEM und Fahrzeugschein'],
  ['/ratgeber/fahrgestellnummer-finden', 'Fahrgestellnummer finden: Wo steht die VIN am Fahrzeug?', 'VIN, OEM und Fahrzeugschein'],
  ['/ratgeber/pr-code-vw-audi-seat-skoda', 'PR-Code bei VW, Audi, Seat und Skoda: Warum er für Ersatzteile wichtig ist', 'VIN, OEM und Fahrzeugschein'],
  ['/ratgeber/original-oem-zubehoer-ersatzteile', 'Original, OEM oder Zubehör: Was ist der Unterschied?', 'Grundlagen'],
  ['/ratgeber/falsche-ersatzteile-vermeiden', 'Falsche Ersatzteile vermeiden: Die häufigsten Fehler bei der Bestellung', 'Grundlagen'],
  ['/ratgeber/ersatzteile-per-whatsapp-anfragen', 'Ersatzteile per WhatsApp anfragen: So funktioniert es bei TeilePilot24', 'Anfrage per WhatsApp'],
  ['/ratgeber/bremsbelaege-richtig-finden', 'Bremsbeläge richtig finden: Warum Bremssystem und Fahrzeugdaten entscheidend sind', 'Bremsen'],
  ['/ratgeber/bremsscheiben-richtig-finden', 'Bremsscheiben richtig finden: Durchmesser, Achse und Ausstattung prüfen', 'Bremsen'],
  ['/ratgeber/bremsen-vorderachse-hinterachse', 'Bremsen für Vorderachse oder Hinterachse: Was muss geprüft werden?', 'Bremsen'],
  ['/ratgeber/warnkontakt-bremsen', 'Warnkontakt bei Bremsen: Wann wird er benötigt?', 'Bremsen'],
  ['/ratgeber/elektrische-parkbremse-ersatzteile', 'Elektrische Parkbremse: Warum passende Bremsenteile wichtig sind', 'Bremsen'],
  ['/ratgeber/oelfilter-richtig-finden', 'Ölfilter richtig finden: Warum Motorcode und Fahrzeugdaten wichtig sind', 'Filter'],
  ['/ratgeber/luftfilter-richtig-finden', 'Luftfilter richtig finden: Unterschiede je nach Motor und Baujahr', 'Filter'],
  ['/ratgeber/innenraumfilter-pollenfilter-unterschied', 'Innenraumfilter oder Pollenfilter: Was ist der Unterschied?', 'Filter'],
  ['/ratgeber/filterwechsel-auto', 'Filterwechsel beim Auto: Ölfilter, Luftfilter und Innenraumfilter verstehen', 'Filter'],
  ['/ratgeber/abs-sensor-richtig-finden', 'ABS-Sensor richtig finden: Warum Achse, Seite und Stecker wichtig sind', 'Sensoren und Elektrik'],
  ['/ratgeber/lambdasonde-richtig-finden', 'Lambdasonde richtig finden: Vor Kat, nach Kat und Stecker prüfen', 'Sensoren und Elektrik'],
  ['/ratgeber/lichtmaschine-richtig-finden', 'Lichtmaschine richtig finden: Leistung, Anschluss und Fahrzeugdaten prüfen', 'Sensoren und Elektrik'],
  ['/ratgeber/anlasser-richtig-finden', 'Anlasser richtig finden: Warum Motorisierung und Getriebe wichtig sind', 'Sensoren und Elektrik'],
  ['/ratgeber/scheinwerfer-richtig-finden', 'Scheinwerfer richtig finden: Halogen, Xenon, LED und Ausstattung prüfen', 'Sensoren und Elektrik'],
  ['/ratgeber/zahnriemensatz-richtig-finden', 'Zahnriemensatz richtig finden: Warum Motorcode und Baujahr entscheidend sind', 'Motor, Kühlung und Abgas'],
  ['/ratgeber/wasserpumpe-richtig-finden', 'Wasserpumpe richtig finden: Kühlung und Motorvariante prüfen', 'Motor, Kühlung und Abgas'],
  ['/ratgeber/turbolader-oem-pruefen', 'Turbolader über OEM prüfen: Warum die genaue Teilenummer wichtig ist', 'Motor, Kühlung und Abgas'],
  ['/ratgeber/agr-ventil-richtig-finden', 'AGR-Ventil richtig finden: Unterschiede je nach Motor und Abgasnorm', 'Motor, Kühlung und Abgas'],
  ['/ratgeber/dpf-richtig-finden', 'DPF richtig finden: Dieselpartikelfilter über Fahrzeugdaten prüfen', 'Motor, Kühlung und Abgas'],
  ['/ratgeber/motorkennung-ersatzteile', 'Motorkennung und Ersatzteile: Warum der Motorcode so wichtig ist', 'Motor, Kühlung und Abgas'],
  ['/ratgeber/stossdaempfer-richtig-finden', 'Stoßdämpfer richtig finden: Achse, Fahrwerk und Ausstattung prüfen', 'Fahrwerk und Antrieb'],
  ['/ratgeber/querlenker-richtig-finden', 'Querlenker richtig finden: Seite, Achse und Bauform beachten', 'Fahrwerk und Antrieb'],
  ['/ratgeber/radlager-richtig-finden', 'Radlager richtig finden: Warum Abmessungen und ABS-Ring wichtig sind', 'Fahrwerk und Antrieb'],
  ['/ratgeber/kupplungssatz-richtig-finden', 'Kupplungssatz richtig finden: Motor, Getriebe und Schwungrad prüfen', 'Fahrwerk und Antrieb'],
  ['/ratgeber/bmw-ersatzteile-vin', 'BMW Ersatzteile mit VIN prüfen: Warum Ausstattung und Baujahr wichtig sind', 'Marken-Ratgeber'],
  ['/ratgeber/vw-ersatzteile-pr-code', 'VW Ersatzteile mit PR-Code prüfen: So vermeidest du Fehlkäufe', 'Marken-Ratgeber'],
  ['/ratgeber/mercedes-ersatzteile-fahrgestellnummer', 'Mercedes Ersatzteile mit Fahrgestellnummer prüfen lassen', 'Marken-Ratgeber'],
  ['/ratgeber/audi-ersatzteile-pr-code', 'Audi Ersatzteile mit PR-Code, VIN und OEM richtig finden', 'Marken-Ratgeber'],
  ['/ratgeber/opel-ersatzteile-fahrzeugschein', 'Opel Ersatzteile mit Fahrzeugschein richtig anfragen', 'Marken-Ratgeber'],
  ['/ratgeber/ford-ersatzteile-vin', 'Ford Ersatzteile mit VIN und OEM-Nummer prüfen', 'Marken-Ratgeber'],
  ['/ratgeber/skoda-seat-ersatzteile-pr-code', 'Skoda und Seat Ersatzteile: Warum PR-Codes wichtig sind', 'Marken-Ratgeber'],
  ['/ratgeber/toyota-hyundai-kia-ersatzteile', 'Toyota, Hyundai und Kia Ersatzteile richtig über Fahrzeugdaten finden', 'Marken-Ratgeber'],
  ['/ratgeber/ersatzteile-online-kaufen-fehler', 'Ersatzteile online kaufen: Die häufigsten Fehler und wie du sie vermeidest', 'Grundlagen'],
  ['/ratgeber/autoteile-nach-teilenummer', 'Autoteile nach Teilenummer suchen: Chancen und Risiken', 'Grundlagen'],
  ['/ratgeber/ersatzteile-nach-foto', 'Ersatzteile nach Foto bestimmen: Warum das oft nicht reicht', 'Grundlagen'],
  ['/ratgeber/ersatzteile-fuer-aeltere-fahrzeuge', 'Ersatzteile für ältere Fahrzeuge finden: Was bei der Suche hilft', 'Anfrage per WhatsApp'],
  ['/ratgeber/werkstatt-ersatzteile-anfragen', 'Ersatzteile für die Werkstatt anfragen: Welche Daten helfen?', 'Anfrage per WhatsApp'],
  ['/ratgeber/transporter-ersatzteile-finden', 'Transporter Ersatzteile finden: Warum genaue Fahrzeugdaten wichtig sind', 'Anfrage per WhatsApp'],
  ['/ratgeber/mehrere-ersatzteile-anfragen', 'Mehrere Ersatzteile gleichzeitig anfragen: So wird die Prüfung einfacher', 'Anfrage per WhatsApp'],
  ['/ratgeber/teilepilot24-ablauf', 'So funktioniert TeilePilot24: Von der Anfrage bis zum passenden Ersatzteil', 'Anfrage per WhatsApp'],
] as const

const noindexBaseGuidePaths = [
  '/warum-falsche-ersatzteile-bestellt-werden',
  '/fahrzeugschein-oder-vin',
  '/oem-nummer-finden',
] as const

export const noindexSeoPagePaths = new Set<string>([
  ...advancedGuideTopics.map(([path]) => path),
  ...noindexBaseGuidePaths,
])

export function isSeoPageIndexable(pathname: string) {
  return !noindexSeoPagePaths.has(pathname)
}

const advancedGuideLinks: SeoLink[] = advancedGuideTopics.map(([path, title]) => ({ label: title, path }))

const commonLinks: SeoLink[] = [
  { label: 'Markenübersicht', path: '/marken' },
  { label: 'Teileübersicht', path: '/teile' },
  { label: 'Ratgeber', path: '/ratgeber' },
  { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
  { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
]

const baseBrandRelated: SeoLink[] = [
  { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
  { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
  { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
  { label: 'Welches Ersatzteil passt?', path: '/welches-ersatzteil-passt' },
  { label: 'Bremsbeläge', path: '/bremsbelaege' },
  { label: 'Bremsscheiben', path: '/bremsscheiben' },
  { label: 'Ölfilter', path: '/oelfilter' },
  { label: 'Batterie', path: '/batterie' },
]

const basePartRelated: SeoLink[] = [
  { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
  { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
  { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
  { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
  { label: 'Markenübersicht', path: '/marken' },
]

function uniqueLinks(links: SeoLink[], currentPath?: string, limit = 8) {
  return links
    .filter((link) => link.path !== currentPath)
    .filter((link, index, list) => list.findIndex((item) => item.path === link.path) === index)
    .slice(0, limit)
}

function qa(question: string, answer: string): SeoFaq {
  return { question, answer }
}

const faqCategories = [
  {
    title: 'Allgemeine Fragen',
    items: [
      qa('Wie finde ich das richtige Ersatzteil?', 'Am sichersten ist eine Prüfung mit Fahrzeugschein, VIN oder OEM-Nummer. Fotos vom alten Teil und Hinweise der Werkstatt helfen zusätzlich.'),
      qa('Warum ist die genaue Fahrzeugprüfung wichtig?', 'Viele Fahrzeuge haben je nach Motor, Baujahr und Ausstattung mehrere Teilevarianten. Eine Prüfung reduziert das Risiko von Fehlkäufen.'),
      qa('Warum reicht das Automodell allein oft nicht aus?', 'Ein Modellname sagt wenig über Motorisierung, Achse, Ausstattung oder Produktionszeitraum aus. Diese Details können das passende Teil verändern.'),
      qa('Welche Daten braucht TeilePilot24 für eine Anfrage?', 'Hilfreich sind Fahrzeugschein, VIN, OEM-Nummer, Fotos vom alten Teil und eine kurze Beschreibung des gesuchten Ersatzteils.'),
      qa('Kann ich mehrere Teile gleichzeitig anfragen?', 'Ja. Eine Liste der gesuchten Teile zusammen mit Fahrzeugdaten macht die Prüfung übersichtlicher.'),
      qa('Kann ich ein Foto vom Fahrzeugschein senden?', 'Ja. Ein gut lesbares Foto vom Fahrzeugschein ist ein sehr guter Start für die Anfrage.'),
      qa('Kann ich nur die OEM-Nummer senden?', 'Das ist möglich, besser ist aber der zusätzliche Abgleich mit Fahrzeugschein oder VIN.'),
      qa('Was passiert, wenn mehrere Varianten möglich sind?', 'Dann fragt TeilePilot24 nach den entscheidenden Details, zum Beispiel Achse, Stecker, Motorcode oder Foto vom alten Teil.'),
      qa('Warum sollte man Ersatzteile nicht nur nach Optik kaufen?', 'Viele Teile sehen ähnlich aus, unterscheiden sich aber bei Maßen, Steckern, Freigaben oder Sensoren.'),
      qa('Was bedeutet passend zum Fahrzeug?', 'Das Teil muss zur konkreten Fahrzeugausführung, Einbauposition und technischen Ausstattung passen.'),
    ],
  },
  {
    title: 'Fahrzeugschein, VIN und OEM',
    items: [
      qa('Was ist eine VIN?', 'Die VIN ist die Fahrzeug-Identifikationsnummer. Sie wird auch Fahrgestellnummer genannt.'),
      qa('Ist VIN und Fahrgestellnummer dasselbe?', 'Ja. VIN ist die internationale Bezeichnung, Fahrgestellnummer ist der geläufige deutsche Begriff.'),
      qa('Wo finde ich die VIN?', 'Sie steht im Fahrzeugschein und oft am Fahrzeug, zum Beispiel im Bereich der Frontscheibe oder an der Karosserie.'),
      qa('Was ist eine OEM-Nummer?', 'Eine OEM-Nummer ist eine Herstellerreferenz für ein Ersatzteil. Sie hilft beim Abgleich passender Varianten.'),
      qa('Wo finde ich die OEM-Nummer?', 'Häufig steht sie auf dem alten Teil, auf Etiketten, Rechnungen oder Werkstattunterlagen.'),
      qa('Was ist der Unterschied zwischen OEM und Original?', 'Original bezieht sich meist auf Markenvertrieb, OEM auf Herstellerreferenzen. Entscheidend bleibt die Passgenauigkeit.'),
      qa('Was steht im Fahrzeugschein?', 'Dort stehen unter anderem HSN/TSN, Erstzulassung, Fahrzeugdaten und die VIN.'),
      qa('Welche Felder im Fahrzeugschein sind wichtig?', 'HSN/TSN, VIN, Erstzulassung und technische Angaben sind besonders hilfreich.'),
      qa('Warum hilft der Fahrzeugschein bei der Teilesuche?', 'Er liefert geprüfte Grunddaten zum Fahrzeug und verhindert viele Missverständnisse.'),
      qa('Warum kann die HSN/TSN allein ungenau sein?', 'Unter einer HSN/TSN können mehrere Motoren, Ausstattungen oder Bauzeiträume fallen.'),
      qa('Wann braucht man zusätzlich die OEM-Nummer?', 'Besonders bei Elektrik, Sensoren, Motor- und Abgasteilen ist sie oft sehr hilfreich.'),
      qa('Was ist ein PR-Code?', 'Ein PR-Code beschreibt technische Ausstattung bei VW, Audi, Seat und Skoda.'),
      qa('Warum sind PR-Codes bei VW, Audi, Seat und Skoda wichtig?', 'Sie können Bremsen, Fahrwerk, Ausstattung und andere Varianten genauer unterscheiden.'),
      qa('Was ist eine Motorisierung?', 'Damit sind Motorvariante, Leistung, Kraftstoffart und oft auch der Motorcode gemeint.'),
      qa('Warum ist das Baujahr wichtig?', 'Teile können sich während einer Modelllaufzeit ändern, besonders bei Facelift oder Produktionsumstellung.'),
      qa('Warum ist der Produktionszeitraum wichtig?', 'Manche Teile wechseln innerhalb eines Baujahres. Der Produktionszeitraum hilft, diese Grenze zu erkennen.'),
      qa('Warum ist die Ausstattung wichtig?', 'Ausstattung kann Lichttechnik, Bremsanlage, Sensoren, Fahrwerk oder Elektronik beeinflussen.'),
    ],
  },
  {
    title: 'Marken',
    items: [
      ...brandProfiles.map((brand) => qa(`Kann ich ${brand.name} Ersatzteile anfragen?`, `Ja. Für ${brand.name} Ersatzteile können Fahrzeugschein, VIN, OEM-Nummer und Fotos per WhatsApp gesendet werden.`)),
      qa('Können auch ältere Fahrzeuge geprüft werden?', 'Ja. Bei älteren Fahrzeugen helfen besonders Fotos, Teilenummern und Werkstattunterlagen.'),
      qa('Können auch Transporter-Teile angefragt werden?', 'Ja. Bei Transportern sind zusätzlich Aufbau, Radstand, Achslast und Motorisierung oft wichtig.'),
    ],
  },
  {
    title: 'Bremsen',
    items: [
      qa('Warum gibt es verschiedene Bremsbeläge?', 'Bremsbeläge unterscheiden sich nach Achse, Bremssystem, Belagform und Warnkontakt.'),
      qa('Warum gibt es verschiedene Bremsscheiben?', 'Durchmesser, Dicke, Lochzahl, Belüftung und Achse können je nach Fahrzeug abweichen.'),
      qa('Warum muss der Warnkontakt geprüft werden?', 'Nicht jedes Fahrzeug nutzt denselben Verschleißsensor. Der Anschluss muss passen.'),
      qa('Was ist bei elektrischer Parkbremse wichtig?', 'Die Bremsanlage kann anders ausgeführt sein. Ausstattung und Achse sollten geprüft werden.'),
      qa('Warum unterscheiden sich Bremssysteme je nach Fahrzeug?', 'Motorleistung, Gewicht, Ausstattung und Achse beeinflussen die Bremsanlage.'),
      qa('Kann ich Bremsen über VIN prüfen lassen?', 'Ja. VIN, Fahrzeugschein und bei VAG auch PR-Codes helfen bei der Bremsenprüfung.'),
      qa('Welche Angaben sind für Bremsen wichtig?', 'Achse, Fahrzeugschein, VIN, PR-Code, Bremssystem und Fotos der alten Teile.'),
      qa('Was passiert, wenn die falschen Bremsbeläge bestellt werden?', 'Sie können nicht montierbar sein oder nicht zum Bremssattel, Sensor oder zur Achse passen.'),
    ],
  },
  {
    title: 'Filter',
    items: [
      qa('Wie finde ich den passenden Ölfilter?', 'Motorcode, VIN, Fahrzeugschein oder die Nummer des alten Filters helfen bei der Auswahl.'),
      qa('Wie finde ich den passenden Luftfilter?', 'Fahrzeugdaten und ein Foto vom alten Filter oder Filterkasten sind hilfreich.'),
      qa('Wie finde ich den passenden Innenraumfilter?', 'VIN, Fahrzeugschein, Maße oder ein Foto des alten Filters helfen bei der Prüfung.'),
      qa('Was ist der Unterschied zwischen Innenraumfilter und Pollenfilter?', 'Pollenfilter ist eine häufige Bezeichnung. Innenraumfilter können je nach Ausführung auch Aktivkohle oder Feinstaubfilterung bieten.'),
      qa('Warum unterscheiden sich Ölfilter je nach Motor?', 'Motorcode, Gehäuse, Filtereinsatz und Dichtung können unterschiedlich sein.'),
      qa('Wann sollte ein Luftfilter gewechselt werden?', 'Das hängt vom Wartungsplan und Einsatzprofil ab. Für die Teileauswahl zählt die passende Ausführung.'),
      qa('Wann sollte ein Innenraumfilter gewechselt werden?', 'Meist im Rahmen der Wartung oder bei schlechter Luft im Innenraum. Entscheidend ist die passende Bauform.'),
    ],
  },
  {
    title: 'Elektrik und Sensoren',
    items: [
      qa('Warum muss ein ABS-Sensor genau passen?', 'Achse, Seite, Kabellänge, Stecker und Sensortyp müssen zur Einbauposition passen.'),
      qa('Was ist bei einer Lambdasonde wichtig?', 'Position, Stecker, Kabellänge, Sondentyp und Abgasnorm sind entscheidend.'),
      qa('Warum gibt es verschiedene Lichtmaschinen?', 'Leistung, Riemenscheibe, Befestigung, Stecker und Start-Stopp-System können abweichen.'),
      qa('Warum gibt es verschiedene Anlasser?', 'Leistung, Zähnezahl, Befestigung, Getriebe und Motorisierung unterscheiden sich.'),
      qa('Welche Daten helfen bei elektrischen Teilen?', 'OEM-Nummer, VIN, Fotos von Steckern und die genaue Einbauposition helfen besonders.'),
      qa('Kann eine falsche Lambdasonde Probleme verursachen?', 'Ja. Falsche Position oder Stecker können Fehlfunktionen oder Fehlermeldungen verursachen.'),
      qa('Warum ist die Steckerform wichtig?', 'Ein passendes Gehäuse reicht nicht, wenn der elektrische Anschluss nicht übereinstimmt.'),
      qa('Warum ist die Leistung bei Lichtmaschinen wichtig?', 'Die Lichtmaschine muss zum Bordnetz und zur Ausstattung des Fahrzeugs passen.'),
    ],
  },
  {
    title: 'Motor und Abgas',
    items: [
      qa('Was ist beim Zahnriemensatz wichtig?', 'Motorcode, Baujahr, Rollen, Spannsystem und Wasserpumpe müssen zusammenpassen.'),
      qa('Warum muss eine Wasserpumpe passend sein?', 'Gehäuse, Dichtung, Antriebsart und Motorvariante können abweichen.'),
      qa('Warum muss ein Turbolader über OEM geprüft werden?', 'Turbolader sehen ähnlich aus, unterscheiden sich aber technisch stark bei Anschlüssen und Regelung.'),
      qa('Was ist ein AGR-Ventil?', 'Es führt Abgase zurück in den Ansaugtrakt und ist Teil der Abgassteuerung.'),
      qa('Was ist ein DPF?', 'DPF steht für Dieselpartikelfilter. Er filtert Rußpartikel aus dem Abgas.'),
      qa('Warum muss ein Dieselpartikelfilter genau passen?', 'Abgasnorm, Sensoranschlüsse, Länge und Flansch müssen zur Fahrzeugausführung passen.'),
      qa('Warum ist die Motorkennung wichtig?', 'Sie trennt Motorvarianten, die im Alltag ähnlich bezeichnet werden können.'),
      qa('Welche Fehler entstehen durch falsche Motorteile?', 'Falsche Teile können nicht montierbar sein, Fehlermeldungen verursachen oder nicht zur Abgasnorm passen.'),
    ],
  },
  {
    title: 'Fahrwerk',
    items: [
      qa('Warum unterscheiden sich Stoßdämpfer?', 'Achse, Fahrwerk, Karosserieform und elektronische Dämpfung können unterschiedlich sein.'),
      qa('Was ist beim Querlenker wichtig?', 'Einbauseite, Achse, Lagerausführung und Bauform müssen passen.'),
      qa('Warum muss ein Radlager genau passen?', 'Abmessungen, ABS-Ring, Nabe und Achse müssen zur Fahrzeugausführung passen.'),
      qa('Welche Rolle spielt die Achse?', 'Viele Teile unterscheiden sich zwischen Vorderachse und Hinterachse.'),
      qa('Warum ist links/rechts wichtig?', 'Einige Fahrwerksteile und Sensoren sind seitengebunden und nicht austauschbar.'),
      qa('Warum ist Vorderachse/Hinterachse wichtig?', 'Bremsen, Stoßdämpfer und Radlager können je nach Achse völlig unterschiedlich sein.'),
    ],
  },
  {
    title: 'Bestellung und Anfrage',
    items: [
      qa('Kann ich per WhatsApp anfragen?', 'Ja. Senden Sie Fahrzeugschein, VIN, OEM-Nummer oder Fotos direkt per WhatsApp.'),
      qa('Ist die Anfrage kostenlos?', 'Sie können eine Anfrage stellen, ohne vorher ein Teil zu bestellen.'),
      qa('Wie funktioniert TeilePilot24?', 'Sie senden Daten, TeilePilot24 prüft die Angaben und meldet sich mit Rückfragen oder einer passenden Richtung.'),
      qa('Wie schnell bekomme ich eine Rückmeldung?', 'TeilePilot24 meldet sich nach der Prüfung. Bei fehlenden Angaben können zuerst Rückfragen kommen.'),
      qa('Welche Informationen beschleunigen die Anfrage?', 'Fahrzeugschein, VIN, OEM-Nummer, Fotos und eine klare Beschreibung des gesuchten Teils.'),
      qa('Muss ich mich registrieren?', 'Für die WhatsApp Anfrage ist keine separate Registrierung auf der Website nötig.'),
      qa('Kann ich Bilder senden?', 'Ja. Bilder vom Fahrzeugschein, alten Teil, Steckern oder Nummern sind sehr hilfreich.'),
      qa('Kann ich eine Teilenummer senden?', 'Ja. Eine Teilenummer oder OEM-Nummer ist oft ein sehr guter Hinweis.'),
      qa('Was macht TeilePilot24 nach meiner Anfrage?', 'Die Angaben werden geprüft, Varianten werden abgeglichen und offene Punkte werden nachgefragt.'),
      qa('Wird die Anfrage manuell geprüft?', 'Die Anfrage wird anhand der gesendeten Daten geprüft. Bei Unklarheiten fragt TeilePilot24 gezielt nach.'),
    ],
  },
  {
    title: 'TeilePilot24 Ablauf',
    items: [
      qa('Warum ist Prüfung besser als Raten?', 'Eine Prüfung berücksichtigt Fahrzeugdaten und Teilemerkmale, statt nur nach Optik oder Modellname zu entscheiden.'),
      qa('Kann ich Originalteile anfragen?', 'Ja. Wichtig ist, die gewünschte Richtung und vorhandene Nummern klar anzugeben.'),
      qa('Kann ich OEM-Qualität anfragen?', 'Ja. OEM-Referenzen können in die Prüfung einbezogen werden.'),
      qa('Kann ich Zubehörteile anfragen?', 'Ja. Auch bei Zubehörteilen sollte die Passgenauigkeit geprüft werden.'),
      qa('Was mache ich, wenn ich unsicher bin?', 'Senden Sie Fahrzeugschein und eine kurze Beschreibung. TeilePilot24 fragt nach, wenn etwas fehlt.'),
      qa('Kann ich eine Werkstatt fragen lassen?', 'Ja. Werkstatthinweise, Fehlercodes oder Teilenummern können direkt mitgesendet werden.'),
      qa('Kann ich Teile für mehrere Fahrzeuge anfragen?', 'Ja, wenn die Daten je Fahrzeug klar getrennt sind.'),
      qa('Kann ich auch seltene Teile anfragen?', 'Ja. Bei seltenen Teilen helfen Fotos, OEM-Nummern und genaue Fahrzeugdaten besonders.'),
      qa('Was passiert, wenn ein Teil nicht eindeutig bestimmbar ist?', 'Dann werden weitere Informationen angefragt, statt eine unsichere Empfehlung abzugeben.'),
      qa('Wie vermeide ich Fehlkäufe?', 'Nutzen Sie Fahrzeugschein, VIN, OEM-Nummer und Fotos, bevor Sie ein Teil auswählen.'),
      qa('Warum ist TeilePilot24 hilfreich?', 'TeilePilot24 verbindet Fahrzeugdaten, Teilehinweise und Rückfragen in einem einfachen WhatsApp Ablauf.'),
      qa('Kann ich auch ohne technische Kenntnisse anfragen?', 'Ja. Eine kurze Beschreibung und ein Foto vom Fahrzeugschein reichen oft für den Start.'),
      qa('Kann ich eine Werkstattnotiz mitsenden?', 'Ja. Werkstattnotizen, Diagnosehinweise und Fehlercodes können die Prüfung deutlich erleichtern.'),
      qa('Kann ich auch mehrere Fotos senden?', 'Ja. Fotos von Fahrzeugschein, altem Teil, Stecker, Nummern und Einbauposition sind hilfreich.'),
      qa('Was ist, wenn die Teilenummer schlecht lesbar ist?', 'Senden Sie trotzdem ein Foto. TeilePilot24 fragt nach, wenn die Nummer nicht eindeutig lesbar ist.'),
      qa('Hilft ein Fehlercode bei der Teileauswahl?', 'Ja, besonders bei Sensoren, Elektrik, Motor- und Abgasteilen kann ein Fehlercode nützlich sein.'),
      qa('Kann ich auch nach Fahrwerksteilen fragen?', 'Ja. Bei Fahrwerksteilen sind Achse, Seite, Fahrwerkstyp und Fahrzeugdaten besonders wichtig.'),
      qa('Kann ich auch Filter zusammen anfragen?', 'Ja. Ölfilter, Luftfilter und Innenraumfilter können zusammen geprüft werden.'),
      qa('Kann ich Bremsen für vorne und hinten gleichzeitig anfragen?', 'Ja. Wichtig ist, klar anzugeben, ob Vorderachse, Hinterachse oder beide Achsen gemeint sind.'),
      qa('Warum fragt TeilePilot24 manchmal nach weiteren Bildern?', 'Zusätzliche Bilder helfen, Stecker, Nummern, Haltepunkte oder Bauform besser zu erkennen.'),
      qa('Kann ein Teil trotz gleicher Optik falsch sein?', 'Ja. Gleiche Optik bedeutet nicht automatisch gleiche Maße, Anschlüsse oder technische Freigabe.'),
      qa('Warum sind Angaben zur Ausstattung wichtig?', 'Ausstattung kann Lichttechnik, Sensoren, Bremsanlage, Batterie oder Fahrwerk beeinflussen.'),
      qa('Kann ich Teile für ein Importfahrzeug anfragen?', 'Ja. Bei Importfahrzeugen sind VIN, Fahrzeugschein, Fotos und vorhandene Teilenummern besonders wichtig.'),
      qa('Was sollte ich in die erste WhatsApp Nachricht schreiben?', 'Nennen Sie das gesuchte Teil und senden Sie Fahrzeugschein, VIN oder OEM-Nummer, wenn vorhanden.'),
    ],
  },
]

const faqItems = faqCategories.flatMap((category) => category.items)

const detailedBrandPages: Record<string, SeoPageData> = {
  '/vw-ersatzteile': {
    path: '/vw-ersatzteile',
    group: 'marken',
    eyebrow: 'VW Fahrzeugdaten prüfen',
    title: 'VW Ersatzteile mit VIN, PR-Code und OEM-Daten prüfen',
    metaTitle: 'VW Ersatzteile mit VIN & PR-Code prüfen | TeilePilot24',
    metaDescription: 'VW Ersatzteile über VIN, Fahrzeugschein, PR-Code und OEM-Referenz eingrenzen. Persönliche Prüfung für Bremsen, Fahrwerk und weitere Teile am Fahrzeug.',
    intro: 'Ein VW Modellname grenzt die Suche ein, bildet aber Motorisierung, Produktionszeitraum und technische Ausstattung nicht vollständig ab. Für die passende Teilevariante werden Fahrzeug- und Bauteildaten gemeinsam betrachtet.',
    sections: [
      {
        heading: 'Warum Golf, Polo oder Passat allein nicht immer genügen',
        body: 'Bekannte Modellnamen umfassen mehrere Generationen, Motorisierungen und Ausstattungsstände. Selbst innerhalb einer Generation können technische Änderungen während der Bauzeit oder unterschiedliche Brems- und Fahrwerksausführungen vorkommen. Deshalb ist eine Suche nur nach Modell und Erstzulassung häufig zu breit.',
        paragraphs: [
          'Die Erstzulassung ist außerdem nicht automatisch das Produktionsdatum. Wenn ein Teilekatalog eine Änderung innerhalb eines Zeitraums ausweist, helfen VIN, Fahrzeugdaten und eine Referenz vom vorhandenen Teil bei der Abgrenzung.',
        ],
      },
      {
        heading: 'VIN und Fahrzeugschein als Ausgangspunkt',
        body: 'Die VIN identifiziert das konkrete Fahrzeug und kann Baureihe sowie Produktionskontext genauer eingrenzen. Der Fahrzeugschein ergänzt HSN/TSN, Erstzulassung, Leistung, Hubraum und Kraftstoffart. Diese Angaben schaffen eine bessere Grundlage als eine frei erinnerte Modellbezeichnung.',
        paragraphs: [
          'Je nach Ersatzteil bleiben weitere Fragen offen. Bei Bremsen zählt die Achse und gegebenenfalls die Bremsausführung, bei Fahrwerksteilen können Einbauposition und Ausstattung wichtig werden. Es werden nur die Angaben ergänzt, die für die angefragte Teilegruppe benötigt werden.',
        ],
        links: [
          { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
          { label: 'Fahrzeugschein-Felder verstehen', path: '/fahrzeugschein-erklaert' },
        ],
      },
      {
        heading: 'PR-Codes bei ausgewählten VW Varianten',
        body: 'PR-Codes beschreiben bei VAG-Fahrzeugen bestimmte werkseitige Ausstattungs- und Technikmerkmale. Sie können besonders dann helfen, wenn ein Teilekatalog bei Bremsen oder Fahrwerk mehrere Ausführungen für denselben Fahrzeugdatensatz zeigt.',
        paragraphs: [
          'Ein PR-Code ist keine universelle Teilenummer und wird nicht ohne Teilekontext interpretiert. TeilePilot24 setzt ihn zusammen mit VIN, Achse und gesuchter Komponente ein. Wenn kein PR-Code vorliegt, kann die Prüfung mit Fahrzeugdaten, OEM-Referenz, Fotos oder Werkstattangaben fortgesetzt werden.',
          'Bei Filtern, Motorteilen oder vielen elektrischen Komponenten kann ein anderer Hinweis wichtiger sein als der PR-Code, etwa Motorisierung, Stecker oder Herstellerreferenz. Die Information wird daher nicht aus Gewohnheit, sondern nur bei einer entsprechenden Katalogunterscheidung verwendet.',
        ],
        links: [{ label: 'PR-Code bei VAG verstehen', path: '/pr-code-vag' }],
      },
      {
        heading: 'Welche Informationen helfen bei VW Ersatzteilen?',
        body: 'Nicht jede Anfrage benötigt alle Angaben. Die Tabelle zeigt, wann einzelne Informationen besonders nützlich werden, ohne eine modellbezogene Kompatibilitätsliste vorzutäuschen.',
        table: {
          headers: ['Information', 'Warum hilfreich?', 'Wann besonders wichtig?'],
          rows: [
            ['VIN', 'Ordnet das konkrete Fahrzeug und den Produktionskontext zu.', 'Als Grundlage für nahezu jede Variantenprüfung.'],
            ['PR-Code', 'Kann dokumentierte Technik- oder Ausstattungsvarianten unterscheiden.', 'Vor allem bei bestimmten Bremsen- und Fahrwerksvarianten.'],
            ['OEM-/OE-Referenz', 'Stellt einen Bezug zum vorhandenen Bauteil her.', 'Wenn mehrere Katalogtreffer technisch ähnlich sind.'],
            ['Achse/Einbauseite', 'Trennt positionsabhängige Komponenten.', 'Bei Bremsen, Fahrwerk, Sensoren und Beleuchtung.'],
            ['Altteilfoto/Etikett', 'Zeigt Referenz, Stecker oder Bauform.', 'Wenn Ausstattung oder Lieferumfang nicht eindeutig ist.'],
          ],
        },
      },
      {
        heading: 'OEM-Nummer und Kennzeichnung des Altteils',
        body: 'Eine lesbare OE- oder Herstellerreferenz vom ausgebauten Teil, einer Verpackung oder Werkstattrechnung ist ein konkreter Vergleichspunkt. Auf einem Bauteil können jedoch zusätzlich Produktions- oder Materialnummern stehen. Ein Gesamtfoto hilft, die relevante Kennzeichnung einzuordnen.',
        paragraphs: [
          'Wurde ein Teil früher ersetzt, zeigt die Altteilnummer den aktuellen Einbauzustand, nicht zwingend die ursprüngliche Werksausführung. Darum wird die Referenz mit VIN und Einbauposition abgeglichen, statt sie isoliert als Passzusage zu behandeln.',
          'Bei Sensoren und Elektrik ist neben der Nummer häufig auch der Anschluss relevant. Bei Fahrwerksteilen helfen Achse, Seite und sichtbare Bauform. Diese bauteilspezifischen Merkmale verhindern, dass jede VW Anfrage auf dieselbe PR-Code-Logik reduziert wird.',
        ],
        links: [{ label: 'OEM-Nummer richtig nutzen', path: '/oem-nummer' }],
      },
      {
        heading: 'VW Teileanfrage bei TeilePilot24',
        body: 'Nennen Sie das gesuchte Teil und senden Sie VIN oder relevante Fahrzeugschein-Daten. Bei Bremsen oder Fahrwerk können Achse und PR-Code hinzukommen; bei einem ausgebauten Teil helfen Foto und Referenz. TeilePilot24 prüft die Angaben persönlich und fragt bei mehreren Varianten gezielt nach.',
        paragraphs: [
          'Nach der Eingrenzung erhalten Sie ein unverbindliches Angebot. Die Prüfung soll Fehlbestellungen reduzieren, ohne eine hundertprozentige Bestimmung allein durch VIN oder Modellname zu versprechen.',
        ],
        links: [
          { label: 'Bremsbeläge passend finden', path: '/bremsbelaege' },
          { label: 'Bremsscheiben passend finden', path: '/bremsscheiben' },
          { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
        ],
      },
    ],
    faq: [
      { question: 'Warum zeigt die VW Teilesuche mehrere Varianten für dasselbe Modell?', answer: 'Motorisierung, Produktionszeitraum, Ausstattung und verbaute Systeme können innerhalb einer Modellreihe unterschiedlich sein.' },
      { question: 'Wann hilft ein PR-Code bei VW Ersatzteilen?', answer: 'Er kann bestimmte werkseitige Technikvarianten unterscheiden, insbesondere wenn der Teilekatalog Bremsen oder Fahrwerk darüber trennt.' },
      { question: 'Kann ich VW Ersatzteile nur mit dem Fahrzeugschein anfragen?', answer: 'Ja, er ist ein guter Start. Je nach Teil können VIN, PR-Code, Achse, OEM-Referenz oder ein Foto zusätzlich nötig sein.' },
      { question: 'Wie verwende ich die Nummer auf einem alten VW Teil?', answer: 'Senden Sie ein scharfes Foto der vollständigen Kennzeichnung. Die relevante Referenz wird mit Fahrzeug und Einbauposition abgeglichen.' },
      { question: 'Welche Angaben braucht eine VW Bremsen-Anfrage?', answer: 'Hilfreich sind VIN, benötigte Achse und – sofern vorhanden und relevant – PR-Code oder Referenz des alten Bremsteils.' },
    ],
    related: [
      { label: 'PR-Code bei VAG', path: '/pr-code-vag' },
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
      { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
      { label: 'Bremsbeläge', path: '/bremsbelaege' },
      { label: 'Bremsscheiben', path: '/bremsscheiben' },
      { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
    ],
    ctaText: 'VW Ersatzteil persönlich prüfen lassen',
    secondaryCta: { label: 'PR-Code verstehen', path: '/pr-code-vag' },
  },
  '/bmw-ersatzteile': {
    path: '/bmw-ersatzteile',
    group: 'marken',
    eyebrow: 'BMW Baureihe und Ausstattung',
    title: 'BMW Ersatzteile nach Baureihe und Fahrzeugdaten finden',
    metaTitle: 'BMW Ersatzteile mit VIN prüfen lassen | TeilePilot24',
    metaDescription: 'BMW Ersatzteile anhand von Baureihe, Produktionszeitraum, Motorisierung, Ausstattung, VIN und OEM-Referenz persönlich fürs Fahrzeug eingrenzen lassen.',
    intro: 'Bei BMW beschreibt der Modellname nicht immer eindeutig Baureihe, Generation, Motorisierung oder Ausstattung. Für die Teileauswahl werden deshalb Fahrzeugidentität, Einbauposition und Hinweise vom vorhandenen Bauteil zusammengeführt.',
    sections: [
      {
        heading: 'Modellname, Baureihe und Generation auseinanderhalten',
        body: 'Eine Modellbezeichnung kann über mehrere Generationen weiterverwendet werden. Karosserie, Fahrwerk, Elektrik und Antrieb können sich dabei grundlegend verändern. Für Ersatzteile ist deshalb wichtig, welche konkrete Baureihe und welcher Produktionsstand vorliegt, nicht nur welche Bezeichnung am Fahrzeug steht.',
        paragraphs: [
          'Auch innerhalb einer Baureihe können Modellpflege und laufende technische Änderungen zu neuen Varianten führen. Die Erstzulassung liefert einen Hinweis, bildet den Produktionszeitpunkt aber nicht immer exakt ab.',
          'Bei Karosserie- oder Beleuchtungsteilen muss außerdem die konkrete Fahrzeugform berücksichtigt werden. Eine ähnlich klingende Verkaufsbezeichnung sagt nicht automatisch, dass Halter, Gehäuse oder elektrische Ausstattung übereinstimmen.',
        ],
      },
      {
        heading: 'Motorisierung und Ausstattung gezielt ergänzen',
        body: 'Motorisierung und Antrieb beeinflussen beispielsweise Filter, Kühlung, Abgas- und Antriebsteile. Ausstattung kann bei Lichttechnik, Bremsanlage, Fahrwerk, Sensorik oder Batterieausführung relevant sein. Welche Zusatzinformation benötigt wird, hängt immer vom gesuchten Teil ab.',
        paragraphs: [
          'Eine lange Ausstattungsliste ist nicht für jede Anfrage nötig. Bei einem Scheinwerfer zählen Lichtsystem und Funktionen; bei Bremsen eher Achse und Bremssystem. TeilePilot24 fragt deshalb nach dem konkreten Merkmal statt allgemein alle Fahrzeugdaten anzufordern.',
          'Bei Motor- und Antriebsteilen kann die genaue Motorisierung oder Getriebeausführung wichtiger sein. Für Fahrwerk und Sensorik stehen dagegen Einbauachse, Seite und Anschluss im Mittelpunkt. Die Datenanforderung folgt somit der Teilefunktion.',
        ],
      },
      {
        heading: 'VIN als Schlüssel zur genauen Fahrzeugidentität',
        body: 'Die VIN hilft, Baureihe, Produktion und verfügbare Fahrzeugmerkmale präziser einzugrenzen als Modellname und Baujahr allein. Sie ist eine wichtige Ausgangsinformation, aber keine automatische Teilegarantie. Bei mehreren technischen Möglichkeiten werden zusätzliche Merkmale herangezogen.',
        paragraphs: [
          'Eine verkürzt übermittelte Fahrgestellnummer oder ein Tippfehler kann die Zuordnung verhindern. Darum wird die VIN sorgfältig aus Feld E des Fahrzeugscheins übernommen und zusammen mit der konkreten Teilebeschreibung verwendet.',
        ],
        links: [
          { label: 'VIN und Fahrgestellnummer erklärt', path: '/vin-nummer' },
          { label: 'Fahrzeugschein-Felder verstehen', path: '/fahrzeugschein-erklaert' },
        ],
      },
      {
        heading: 'Achse und Einbauseite gehören zur Teilebeschreibung',
        body: 'Viele BMW Fahrwerk-, Brems-, Sensor- und Karosserieteile sind positionsabhängig. Vorder- oder Hinterachse sowie rechte oder linke Fahrzeugseite müssen daher klar benannt werden. Eine VIN kann die Fahrzeugvariante bestimmen, ersetzt aber nicht die Information, an welcher Position das Teil benötigt wird.',
        subsections: [
          { heading: 'Scheinwerfer und Lichtausstattung', body: 'Rechts/links, Lichttechnik, adaptive Funktionen, Stecker und Lieferumfang können unterschiedliche Scheinwerfervarianten ergeben.' },
          { heading: 'Bremsen und Fahrwerk', body: 'Achse, Bremssystem, Fahrwerksausführung und sichtbare Referenzen helfen, ähnliche Komponenten voneinander zu trennen.' },
          { heading: 'Sensoren und elektrische Anschlüsse', body: 'Kabellänge, Steckverbindung, Einbauort und vorhandene Herstellerkennzeichnung können bei elektrischen BMW Komponenten den entscheidenden Unterschied bilden.' },
        ],
        links: [
          { label: 'Scheinwerfer passend finden', path: '/scheinwerfer' },
          { label: 'Bremsbeläge passend finden', path: '/bremsbelaege' },
        ],
      },
      {
        heading: 'OEM-/OE-Referenz und Herstelleretikett nutzen',
        body: 'Eine Nummer auf dem alten Teil oder dessen Etikett kann eine konkrete BMW Referenz oder die Artikelnummer des Teileherstellers enthalten. Daneben stehen häufig weitere Kennzeichnungen. Ein scharfes Gesamtfoto und die Angabe des Einbauorts erleichtern die Einordnung.',
        paragraphs: [
          'Die Referenz wird mit VIN, Baureihe und Ausstattung abgeglichen. Das ist besonders hilfreich, wenn ein Teil äußerlich ähnlich aussieht, aber Anschluss, Halter oder technische Funktion abweichen.',
          'Bei einer ersetzten Referenz kann ein Teileanbieter eine Nachfolgenummer führen. Ob diese Nummer für die konkrete BMW Baureihe und den Produktionsstand gilt, muss aus dem belegbaren Referenzzusammenhang hervorgehen und wird nicht aus einer ähnlichen Schreibweise abgeleitet.',
        ],
        links: [{ label: 'OEM-Nummer richtig einordnen', path: '/oem-nummer' }],
      },
      {
        heading: 'So wird eine BMW Anfrage vorbereitet',
        body: 'Senden Sie VIN oder relevante Fahrzeugschein-Daten, nennen Sie das benötigte Teil und die Einbauposition. Bei ausstattungsabhängigen Komponenten ergänzen Sie Lichtsystem, Achse, Foto oder vorhandene Referenz. TeilePilot24 vergleicht die Angaben persönlich und fragt nur nach den noch entscheidenden Details.',
        paragraphs: [
          'Nach der Prüfung erhalten Sie ein unverbindliches Angebot für die eingegrenzte Variante. Dabei wird nicht behauptet, dass jede BMW Teilefrage allein über die Fahrgestellnummer gelöst werden kann.',
          'Für eine Anfrage mit mehreren Teilen sollten die Positionen getrennt benannt werden. So bleiben beispielsweise ein rechter Scheinwerfer, Bremsbeläge der Vorderachse und ein Sensor jeweils mit ihren eigenen Auswahlmerkmalen nachvollziehbar.',
        ],
        links: [{ label: 'Ersatzteile mit VIN prüfen lassen', path: '/ersatzteile-mit-vin-pruefen' }],
      },
    ],
    faq: [
      { question: 'Warum reicht die BMW Modellbezeichnung für Ersatzteile oft nicht aus?', answer: 'Dieselbe Bezeichnung kann verschiedene Baureihen, Generationen, Motorisierungen und Ausstattungsstände umfassen.' },
      { question: 'Welche Rolle spielt der Produktionszeitraum bei BMW Teilen?', answer: 'Technische Änderungen können innerhalb einer Modellgeneration stattfinden. Der Produktionskontext hilft, ältere und neuere Varianten zu trennen.' },
      { question: 'Welche BMW Teile benötigen Angaben zu Achse oder Seite?', answer: 'Das ist häufig bei Brems-, Fahrwerk-, Sensor-, Licht- und Karosserieteilen relevant. Die genaue Teilegruppe entscheidet.' },
      { question: 'Hilft das Etikett auf einem BMW Scheinwerfer?', answer: 'Ja. Referenz und Herstellerangaben können zusammen mit VIN, Einbauseite und Lichtausstattung die Auswahl eingrenzen.' },
      { question: 'Was sollte ich für eine BMW Ersatzteilanfrage senden?', answer: 'VIN oder Fahrzeugschein-Daten, Teilebezeichnung, Einbauposition und – falls vorhanden – Foto sowie Referenz des alten Teils.' },
    ],
    related: [
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
      { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
      { label: 'Scheinwerfer', path: '/scheinwerfer' },
      { label: 'Bremsbeläge', path: '/bremsbelaege' },
      { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
    ],
    ctaText: 'BMW Ersatzteil persönlich prüfen lassen',
    secondaryCta: { label: 'VIN-Prüfung ansehen', path: '/ersatzteile-mit-vin-pruefen' },
  },
  '/mercedes-ersatzteile': {
    path: '/mercedes-ersatzteile',
    group: 'marken',
    eyebrow: 'Mercedes Fahrzeugvariante bestimmen',
    title: 'Mercedes Ersatzteile mit Fahrgestellnummer eingrenzen',
    metaTitle: 'Mercedes Ersatzteile per VIN prüfen | TeilePilot24',
    metaDescription: 'Mercedes Ersatzteile über Baureihe, Produktionszeitraum, Motorisierung, Ausstattung, VIN und OEM-Referenz persönlich fürs Fahrzeug prüfen lassen.',
    intro: 'Eine Mercedes Modellbezeichnung kann mehrere Baureihen, Karosserieformen, Motorisierungen und Ausstattungen umfassen. Für Ersatzteile zählt daher die konkrete Fahrzeugvariante und nicht allein der Name der Modellklasse.',
    sections: [
      {
        heading: 'Modellklasse und Baureihe sind nicht dasselbe',
        body: 'Eine Modellklasse kann über mehrere Generationen und technische Plattformen hinweg verwendet werden. Limousine, Kombi, Coupé, SUV oder Nutzfahrzeugvariante können unter verwandten Verkaufsnamen unterschiedliche Bauteile benötigen. Die genaue Baureihe und der Produktionszeitraum sind deshalb zentrale Orientierungspunkte.',
        paragraphs: [
          'Auch eine Modellpflege kann Lichttechnik, Karosseriedetails, Elektronik oder Fahrwerk verändern. Die Erstzulassung allein zeigt solche Produktionsgrenzen nicht immer zuverlässig.',
          'Bei einer verwandten Modellbezeichnung können Limousine und Kombi etwa bei Heckbeleuchtung, Fahrwerksabstimmung oder Karosserieteilen auseinanderliegen. Die Karosserieausführung wird deshalb nur dann ergänzt, wenn sie für das gesuchte Teil relevant ist.',
        ],
      },
      {
        heading: 'VIN/Fahrgestellnummer strukturiert die Anfrage',
        body: 'Die VIN identifiziert das konkrete Fahrzeug genauer als Modellklasse und Baujahr. Der Fahrzeugschein ergänzt Leistung, Hubraum, Kraftstoff und Zulassungsdaten. Diese Kombination bildet den Ausgangspunkt, ohne zu behaupten, dass jede Teilevariante allein über die VIN eindeutig wird.',
        paragraphs: [
          'Bei einigen Teilegruppen sind Motor, Getriebe, Achse oder Ausstattung als zusätzliche Kontrollpunkte relevant. Welche Angabe benötigt wird, richtet sich nach der konkreten Komponente und wird nicht pauschal für jedes Mercedes Fahrzeug vorausgesetzt.',
          'Gerade bei Antriebsteilen muss klar sein, ob eine Variante vom Motor oder Getriebe abhängt. Bei Radaufhängung und Bremsen stehen Achse und Einbauposition im Vordergrund; bei Komfort- und Elektrikteilen die vorhandene Ausstattung.',
        ],
        links: [
          { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
          { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
        ],
      },
      {
        heading: 'Teileart bestimmt die zusätzlichen Entscheidungspunkte',
        body: 'Ein Filter wird anders eingegrenzt als ein Scheinwerfer oder Fahrwerksteil. Darum beginnt die Anfrage immer mit der genauen Teilebezeichnung und Einbauposition.',
        paragraphs: [
          'Bei Mercedes Transporter- und Pkw-Ausführungen können ähnliche Namensbestandteile völlig unterschiedliche Fahrzeugkonzepte bezeichnen. Die Fahrzeugart wird deshalb vor technischen Detailfragen eindeutig festgestellt.',
        ],
        table: {
          headers: ['Information', 'Warum hilfreich?', 'Wann besonders wichtig?'],
          rows: [
            ['Motorisierung', 'Trennt motor- und abgasbezogene Varianten.', 'Bei Motor, Kühlung, Filtern und Antrieb.'],
            ['Getriebeinformation', 'Kann Befestigung oder Antriebskomponenten beeinflussen.', 'Wenn das gesuchte Teil vom Antriebsstrang abhängt.'],
            ['Ausstattung', 'Unterscheidet Licht-, Komfort- oder Elektrikvarianten.', 'Bei Scheinwerfern, Batterie und elektronischen Komponenten.'],
            ['Achse/Seite', 'Definiert den konkreten Einbauort.', 'Bei Bremsen, Fahrwerk, Sensoren und Karosserieteilen.'],
            ['OEM-/OE-Referenz', 'Verbindet Altteil und mögliche Katalogreferenz.', 'Wenn mehrere technische Varianten offenbleiben.'],
          ],
        },
      },
      {
        heading: 'Ausstattungsabhängige Teile nicht nach Optik wählen',
        body: 'Scheinwerfer können sich nach Einbauseite, Lichtsystem, adaptiven Funktionen, Steuerung und Lieferumfang unterscheiden. Batterien können abhängig von Bordnetz, Start-Stopp und Batteriemanagement andere Technik oder Kennwerte benötigen. Solche Merkmale sind auf einem Modellnamen nicht vollständig sichtbar.',
        paragraphs: [
          'Bei Batterien helfen Foto des Etiketts, Bauform und vorhandene Technologie. Beim Scheinwerfer sind dagegen Rückseite, Stecker und Typenschild entscheidend. Beide Beispiele zeigen, warum Ausstattung nicht als allgemeines Schlagwort, sondern bauteilbezogen geprüft wird.',
        ],
        links: [
          { label: 'Scheinwerfer passend finden', path: '/scheinwerfer' },
          { label: 'Autobatterie passend finden', path: '/batterie' },
        ],
      },
      {
        heading: 'OE-Referenz und Altteilkennzeichnung vergleichen',
        body: 'Eine Nummer auf dem alten Mercedes Teil, der Verpackung oder einer Werkstattrechnung kann die Suche konkretisieren. Sie wird vollständig fotografiert und zusammen mit Einbauposition und VIN bewertet. Bestimmte interne Ausstattungs- oder Fahrzeugcodes werden auf dieser Seite bewusst nicht erfunden.',
        paragraphs: [
          'Auf Bauteilen können mehrere Nummerntypen stehen. Eine Guss- oder Produktionskennzeichnung ist nicht automatisch die bestellbare OE-Referenz. Der Kontext des gesamten Etiketts hilft bei der Unterscheidung.',
          'Eine Werkstattnotiz kann zusätzlich die genaue Teilegruppe oder Einbauposition bestätigen. Sie ist besonders nützlich, wenn die sichtbare Kennzeichnung beschädigt oder nach einem früheren Austausch nicht mehr eindeutig ist.',
        ],
        links: [{ label: 'OEM-Nummer richtig nutzen', path: '/oem-nummer' }],
      },
      {
        heading: 'Mercedes Teile persönlich prüfen lassen',
        body: 'Senden Sie VIN oder relevante Fahrzeugschein-Daten und beschreiben Sie Teil sowie Einbauort. Bei Motor- oder Getriebeteilen können zusätzliche technische Angaben, bei Licht und Elektrik Ausstattung und Etikett notwendig werden. TeilePilot24 bündelt die vorhandenen Informationen und fragt bei offenen Varianten gezielt nach.',
        paragraphs: [
          'Nach der Eingrenzung erhalten Sie ein unverbindliches Angebot. Der Ablauf setzt keine angebliche direkte Verbindung zu einem Mercedes Markenkatalog voraus.',
          'Ist ein Bauteil bereits ausgebaut, können Fotos von Haltern, Anschluss und vollständiger Kennzeichnung die Anfrage ergänzen. Eine bloße Ähnlichkeit zu einem Onlinebild wird dagegen nicht als technische Zuordnung verwendet.',
        ],
        links: [{ label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' }],
      },
    ],
    faq: [
      { question: 'Warum ist die Mercedes Modellklasse keine eindeutige Teileangabe?', answer: 'Sie kann verschiedene Baureihen, Generationen, Karosserieformen und technische Ausführungen umfassen.' },
      { question: 'Wann werden bei Mercedes Teilen Motor- oder Getriebedaten benötigt?', answer: 'Wenn das gesuchte Bauteil von Motorisierung oder Antriebsstrang abhängt. Für andere Teile können stattdessen Ausstattung, Achse oder Seite relevant sein.' },
      { question: 'Welche Daten helfen bei einem Mercedes Scheinwerfer?', answer: 'VIN, Einbauseite, Lichtsystem, vorhandene Funktionen sowie Fotos von Etikett, Rückseite und Stecker.' },
      { question: 'Ist eine Mercedes OE-Nummer allein ausreichend?', answer: 'Sie ist ein wichtiger Hinweis, wird aber mit VIN, Teileart und Einbauposition abgeglichen.' },
      { question: 'Kann ich ein Mercedes Ersatzteil ohne technische Codes anfragen?', answer: 'Ja. Beginnen Sie mit VIN oder Fahrzeugschein und der Teilebeschreibung. Benötigte Zusatzinformationen werden gezielt erfragt.' },
    ],
    related: [
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
      { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
      { label: 'Autobatterie', path: '/batterie' },
      { label: 'Scheinwerfer', path: '/scheinwerfer' },
      { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
    ],
    ctaText: 'Mercedes Ersatzteil prüfen lassen',
    secondaryCta: { label: 'Fahrzeugdaten verstehen', path: '/fahrzeugschein-erklaert' },
  },
  '/audi-ersatzteile': {
    path: '/audi-ersatzteile',
    group: 'marken',
    eyebrow: 'Audi Ausstattung und Technik',
    title: 'Audi Ersatzteile nach Ausstattung und VIN auswählen',
    metaTitle: 'Audi Ersatzteile mit VIN & PR-Code prüfen | TeilePilot24',
    metaDescription: 'Audi Ersatzteile über Modellgeneration, Bauzeitraum, Lichtausstattung, PR-Code, VIN und OEM-Referenz persönlich für das Fahrzeug eingrenzen lassen.',
    intro: 'Bei Audi können Modellgeneration, Produktionszeitraum und Ausstattung gerade bei Licht, Elektrik, Bremsen und Fahrwerk zu mehreren Teilevarianten führen. Die Auswahl beginnt deshalb mit dem konkreten Fahrzeug und dem betroffenen System.',
    sections: [
      {
        heading: 'Modellgeneration und Bauzeitraum zuerst abgrenzen',
        body: 'Ähnliche Modellbezeichnungen können verschiedene Generationen oder technische Überarbeitungen umfassen. Eine Modellpflege kann Scheinwerfer, Karosserieanschlüsse, Elektronik und andere Komponenten verändern. Für die Teileanfrage ist daher entscheidend, welche konkrete Fahrzeugausführung vorliegt.',
        paragraphs: [
          'Die VIN hilft, den Produktionskontext genauer zu bestimmen. Erstzulassung und Leistung ergänzen die Einordnung, ersetzen aber nicht automatisch Ausstattung oder Einbauposition.',
          'Bei Karosserie- und Elektrikteilen kann eine technische Überarbeitung sichtbar oder unsichtbar ausfallen. Ein optisch kaum verändertes Fahrzeug kann deshalb andere Stecker, Steuergeräte oder Haltepunkte besitzen.',
        ],
      },
      {
        heading: 'Lichtsysteme zeigen, warum Ausstattung wichtig ist',
        body: 'Scheinwerfer sind ein gutes Beispiel für ausstattungsabhängige Audi Teile. Einbauseite, Halogen-, Xenon- oder LED-Technik, adaptive Funktionen, Stecker, Steuergeräte und Lieferumfang können unterschiedliche Artikel bedeuten. Eine Auswahl nur nach Frontansicht oder Modellname bleibt daher riskant.',
        paragraphs: [
          'Ein Foto von Front, Rückseite, Anschluss und Typenschild ergänzt die VIN. Es ersetzt die technische Prüfung nicht, weil nicht alle Funktionen von außen sichtbar sind.',
          'Vor einem Angebot wird außerdem geklärt, ob Steuergerät, Leuchtmittel oder Module Teil des gesuchten Lieferumfangs sein sollen. Diese Komponenten sind nicht automatisch in jedem Scheinwerferangebot enthalten.',
        ],
        links: [{ label: 'Scheinwerfer passend finden', path: '/scheinwerfer' }],
      },
      {
        heading: 'PR-Codes bei Audi im Teilekontext nutzen',
        body: 'Als VAG-Marke verwendet Audi PR-Codes zur Beschreibung bestimmter Ausstattungs- und Technikmerkmale. Sie können bei Teilen helfen, die der Katalog nach Bremssystem, Fahrwerk oder anderer Ausstattung unterscheidet. Ein Code wird dabei nie ohne Fahrzeug und konkrete Teilegruppe bewertet.',
        paragraphs: [
          'Audi und VW teilen diese Systematik, doch daraus folgt keine identische Teilelogik. Die jeweilige Modellgeneration, Plattform, Ausstattung und Einbauposition bleiben ausschlaggebend.',
          'Bei einer elektrischen Komponente, einem Filter oder einem Motorbauteil kann der PR-Code für die Anfrage ohne Bedeutung sein. Dann liefern Motorisierung, Anschluss oder OEM-Referenz die besseren Entscheidungspunkte.',
        ],
        links: [{ label: 'PR-Code bei VAG verstehen', path: '/pr-code-vag' }],
      },
      {
        heading: 'Bremsen und Fahrwerk können mehrere Varianten haben',
        body: 'Bei Bremsen gehören Achse, Bremssystem, Scheiben- oder Belagausführung zur Anfrage. Bei Fahrwerksteilen können Achse, Seite, Standard- oder abweichende Fahrwerksausstattung relevant sein. VIN und PR-Code liefern Hinweise; Altteilreferenz und Werkstattangaben können die letzte Abgrenzung ermöglichen.',
        paragraphs: [
          'Antriebs- oder leistungsabhängige Ausführungen sollten ebenfalls nicht allein vom Verkaufsnamen abgeleitet werden. Die konkrete technische Kombination wird nur berücksichtigt, wenn sie für das angefragte Bauteil eine nachweisbare Variantenentscheidung darstellt.',
        ],
        bullets: [
          'Benötigte Achse und Einbauseite eindeutig nennen.',
          'PR-Code nur verwenden, wenn er für die Teilegruppe relevant ist.',
          'OEM-/Herstellerreferenz vollständig fotografieren.',
          'Stecker, Halter oder Bauform bei Elektrik und Sensorik dokumentieren.',
        ],
      },
      {
        heading: 'OEM-Nummer und Bauteiletikett richtig lesen',
        body: 'Die Kennzeichnung des vorhandenen Audi Teils kann einen direkten Referenzpunkt liefern. Da auf dem Etikett mehrere Nummern stehen können, sind Gesamtfoto, Teilebezeichnung und Einbauort wichtig. Eine Referenz wird mit VIN und Ausstattung abgeglichen, nicht als isolierte Garantie behandelt.',
        paragraphs: [
          'Bei einem bereits ersetzten Bauteil dokumentiert das Etikett den aktuellen Zustand. Ob diese Referenz der ursprünglichen Auslieferung entspricht oder durch eine Nachfolgenummer ersetzt wurde, muss im Fahrzeugkontext geprüft werden.',
        ],
        links: [
          { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
          { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
        ],
      },
      {
        heading: 'Welche Daten vergleicht TeilePilot24?',
        body: 'Für die Audi Anfrage werden VIN oder Fahrzeugschein, konkrete Teileart, Einbauposition und vorhandene Referenzen zusammengeführt. Bei Ausstattungsteilen kommen Lichtsystem, Funktion oder PR-Code hinzu. TeilePilot24 prüft die Angaben persönlich, ohne einen direkten Zugriff auf einen Audi Markenkatalog zu behaupten.',
        paragraphs: [
          'Sind mehrere Varianten plausibel, folgt eine gezielte Rückfrage. Danach kann ein unverbindliches Angebot für die eingegrenzte Ausführung erstellt werden.',
          'Bei mehreren angefragten Audi Teilen werden die Merkmale getrennt behandelt: Ein PR-Code kann für die Bremsanlage relevant sein, während beim Scheinwerfer Etikett und Lichtfunktion und bei einem Sensor Stecker sowie Einbauposition entscheidend sind.',
          'Diese Trennung verhindert, dass eine einzelne Ausstattungsangabe ungeprüft auf sämtliche Teilegruppen übertragen wird.',
        ],
        links: [{ label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' }],
      },
    ],
    faq: [
      { question: 'Warum kann ein Audi Scheinwerfer trotz gleicher Form technisch anders sein?', answer: 'Lichttechnik, adaptive Funktionen, Steuergeräte, Stecker und Lieferumfang können sich unterscheiden.' },
      { question: 'Welche Audi Teile können durch PR-Codes unterschieden werden?', answer: 'PR-Codes können bei bestimmten Brems-, Fahrwerks- oder Ausstattungsvarianten helfen, sofern der Teilekatalog sie dafür verwendet.' },
      { question: 'Was ist bei einer Audi Bremsen-Anfrage wichtig?', answer: 'VIN, Achse, Bremssystem und gegebenenfalls PR-Code, OEM-Referenz oder Werkstattangaben.' },
      { question: 'Warum sollte ich das Audi Teileetikett vollständig fotografieren?', answer: 'Neben der relevanten Referenz können Produktions- oder Herstellerkennzeichnungen stehen. Der vollständige Kontext erleichtert die Einordnung.' },
      { question: 'Kann TeilePilot24 Audi Teile nur anhand eines Fotos bestimmen?', answer: 'Ein Foto hilft, sollte aber mit VIN, Einbauposition, Ausstattung und vorhandener Referenz kombiniert werden.' },
    ],
    related: [
      { label: 'PR-Code bei VAG', path: '/pr-code-vag' },
      { label: 'Scheinwerfer', path: '/scheinwerfer' },
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
      { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
    ],
    ctaText: 'Audi Ersatzteil persönlich prüfen lassen',
    secondaryCta: { label: 'PR-Code verstehen', path: '/pr-code-vag' },
  },
  '/opel-ersatzteile': {
    path: '/opel-ersatzteile',
    group: 'marken',
    eyebrow: 'Opel Modellgeneration bestimmen',
    title: 'Opel Ersatzteile mit Fahrzeugschein und VIN eingrenzen',
    metaTitle: 'Opel Ersatzteile mit Fahrzeugschein | TeilePilot24',
    metaDescription: 'Opel Ersatzteile über Modellgeneration, Bauzeitraum, Motorisierung, Karosserie, VIN, Fahrzeugschein und OEM-Referenz persönlich prüfen lassen.',
    intro: 'Bei Opel kann derselbe Modellname verschiedene Generationen, Motoren und Karosserievarianten umfassen. Bremsen, Sensoren, Fahrwerk und Elektrik werden deshalb anhand der konkreten Fahrzeug- und Teiledaten eingegrenzt.',
    sections: [
      {
        heading: 'Modellgeneration und Bauzeitraum klar bestimmen',
        body: 'Ein Modellname bleibt häufig über mehrere technische Generationen bestehen. Innerhalb einer Generation können Produktionsänderungen oder unterschiedliche Karosserieformen weitere Varianten erzeugen. Für Ersatzteile sind deshalb VIN, Fahrzeugschein und Teileart aussagekräftiger als die Modellbezeichnung allein.',
        paragraphs: [
          'Die Erstzulassung hilft zeitlich, ist aber nicht immer mit dem Produktionsdatum identisch. Wenn ein Katalog eine Bauzeitgrenze nennt, wird der Fahrzeugkontext genauer geprüft.',
          'Eine Karosserievariante kann bei Heckleuchten, Fahrwerk, Abgasanlage oder Karosserieteilen einen Unterschied machen. Für einen Motorfilter kann dieselbe Information dagegen nebensächlich sein.',
        ],
      },
      {
        heading: 'Motorisierung, Karosserie und Ausstattung nur bei Bedarf ergänzen',
        body: 'Motorisierung beeinflusst vor allem motor-, kühlungs-, abgas- und antriebsbezogene Teile. Karosserieform kann bei Fahrwerk, Abgasanlage, Beleuchtung oder Karosserieteilen relevant werden. Elektrische Ausstattung spielt bei Sensoren, Batterie und Lichttechnik eine Rolle.',
        paragraphs: [
          'Nicht jede Opel Anfrage benötigt all diese Daten. Bei einem ABS-Sensor sind Achse, Seite, Stecker und Sensorausführung wichtiger als eine vollständige Ausstattungsliste. Bei Bremsbelägen stehen Achse und Bremssystem im Vordergrund.',
          'Bei Motorteilen können Leistung, Kraftstoffart und genaue Motorisierung den Ausschlag geben. Elektrische Komponenten benötigen eher Anschluss-, Leistungs- oder Ausstattungsinformationen. Dadurch bleibt die Anfrage auf das tatsächliche Problem begrenzt.',
        ],
      },
      {
        heading: 'Fahrzeugschein und VIN sinnvoll kombinieren',
        body: 'Der Fahrzeugschein liefert HSN/TSN, Leistung, Hubraum, Kraftstoff und Erstzulassung. Die VIN identifiziert die konkrete Fahrzeugausführung genauer. Gemeinsam reduzieren sie Verwechslungen zwischen ähnlich benannten Modell- und Motorvarianten.',
        paragraphs: [
          'HSN/TSN können einen Opel Typ für die erste Suche eingrenzen, fassen aber gegebenenfalls mehrere technische Varianten zusammen. Wenn die Trefferliste offenbleibt, werden nur die für das Teil relevanten Zusatzmerkmale ergänzt.',
        ],
        links: [
          { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
          { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
        ],
      },
      {
        heading: 'Bremsen, Sensoren und Elektrik brauchen eigene Merkmale',
        body: 'Bei Bremsen können Vorder-/Hinterachse und Bremssystem die Variante bestimmen. ABS-Sensoren unterscheiden sich unter anderem nach Achse, Seite, Kabellänge, Stecker und Befestigung. Elektrische Bauteile können trotz ähnlicher Form andere Anschlüsse oder Leistungsdaten besitzen.',
        subsections: [
          { heading: 'Achse und Einbauseite', body: 'Links, rechts, Vorder- oder Hinterachse gehören bei positionsabhängigen Opel Teilen ausdrücklich in die Anfrage.' },
          { heading: 'Etikett und Steckerfoto', body: 'Eine Herstellerreferenz und ein scharfes Foto des Anschlusses können Varianten trennen, die über Fahrzeugdaten allein offenbleiben.' },
          { heading: 'Sensorposition und Kabelführung', body: 'Bei Sensoren kann die genaue Position gemeinsam mit Kabellänge, Befestigung und Steckerform wichtiger sein als die allgemeine Modellbezeichnung.' },
        ],
        links: [
          { label: 'Bremsbeläge passend finden', path: '/bremsbelaege' },
          { label: 'ABS-Sensor passend finden', path: '/abs-sensor' },
        ],
      },
      {
        heading: 'OEM-Referenz des vorhandenen Opel Teils',
        body: 'Eine Nummer auf dem Altteil, dessen Etikett, Verpackung oder einer Werkstattrechnung bietet einen konkreten Anhaltspunkt. Sie wird vollständig erfasst und mit VIN, Motorisierung und Einbauposition verglichen. Es werden keine Opel Motorcodes oder OE-Nummern als Beispiele erfunden.',
        paragraphs: [
          'Wenn das Teil bereits früher ersetzt wurde, kann die vorhandene Referenz vom ursprünglichen Auslieferungsstand abweichen. Der Fahrzeugabgleich bleibt daher wichtig.',
          'Ist die Nummer schlecht lesbar, helfen mehrere Fotos aus unterschiedlicher Entfernung. Eine geraten ergänzte Ziffer wird nicht als Grundlage für das Angebot verwendet.',
        ],
        links: [{ label: 'OEM-Nummer richtig nutzen', path: '/oem-nummer' }],
      },
      {
        heading: 'Opel Ersatzteil-Anfrage in wenigen Angaben',
        body: 'Nennen Sie das gesuchte Teil, Achse oder Seite und senden Sie VIN beziehungsweise relevante Fahrzeugschein-Daten. Fotos von Etikett, Stecker oder Bauform ergänzen die Anfrage. TeilePilot24 ordnet die Informationen persönlich ein und fragt nach, wenn eine technische Variante nicht ausreichend bestimmt ist.',
        paragraphs: [
          'Nach dem Abgleich erhalten Sie ein unverbindliches Angebot. Die kurze Dienstleistungserklärung ersetzt bewusst keine markenübergreifende Standardpassage und keine technische Diagnose.',
          'Bei älteren oder bereits reparierten Opel Fahrzeugen kann der aktuelle Einbauzustand von der ursprünglichen Ausstattung abweichen. Altteilfoto und Werkstattunterlagen werden dann als zusätzliche Hinweise behandelt, ohne daraus automatisch eine Werksausführung abzuleiten.',
          'Für mehrere Teile werden Bremsen, Sensorik, Elektrik und Motorpositionen getrennt beschrieben. Dadurch bleiben die jeweiligen Achs-, Stecker- oder Motorisierungsangaben dem richtigen Bauteil zugeordnet.',
        ],
        links: [{ label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' }],
      },
    ],
    faq: [
      { question: 'Warum kann derselbe Opel Modellname verschiedene Ersatzteile benötigen?', answer: 'Modellgeneration, Bauzeitraum, Motorisierung, Karosserie und Ausstattung können unterschiedliche technische Varianten ergeben.' },
      { question: 'Welche Daten helfen bei einem Opel ABS-Sensor?', answer: 'VIN, Achse, Einbauseite sowie Fotos von Stecker, Kabel und vorhandener Referenz.' },
      { question: 'Was sollte bei Opel Bremsbelägen angegeben werden?', answer: 'Benötigte Achse, VIN oder Fahrzeugschein und – wenn vorhanden – Angaben zum Bremssystem oder alten Belag.' },
      { question: 'Kann eine Nummer auf dem alten Opel Teil die Suche beschleunigen?', answer: 'Ja. Die vollständige Hersteller- oder OE-Referenz wird mit Fahrzeugdaten und Einbauort abgeglichen.' },
      { question: 'Muss ich für jede Opel Anfrage die gesamte Ausstattung kennen?', answer: 'Nein. TeilePilot24 fragt nur nach den Merkmalen, die für das konkrete Bauteil relevant sind.' },
    ],
    related: [
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
      { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
      { label: 'Bremsbeläge', path: '/bremsbelaege' },
      { label: 'ABS-Sensor', path: '/abs-sensor' },
      { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
    ],
    ctaText: 'Opel Ersatzteil persönlich prüfen lassen',
    secondaryCta: { label: 'Fahrzeugschein verstehen', path: '/fahrzeugschein-erklaert' },
  },
}

function brandPage(profile: BrandProfile): SeoPageData {
  const detailedPage = detailedBrandPages[profile.path]
  if (detailedPage) return detailedPage

  const related = uniqueLinks([...(profile.extraRelated ?? []), ...baseBrandRelated], profile.path, 8)

  return {
    path: profile.path,
    group: 'marken',
    eyebrow: 'Marken Ersatzteile',
    title: profile.title,
    metaTitle: `${profile.title} | TeilePilot24`,
    metaDescription: `${profile.name} Ersatzteile per WhatsApp anfragen. TeilePilot24 prüft Fahrzeugschein, VIN und OEM-Nummern für eine sichere Ersatzteil-Auswahl.`,
    intro: `Wer ${profile.name} Ersatzteile sucht, braucht mehr als eine grobe Modellsuche. TeilePilot24 hilft, Fahrzeugdaten, VIN, Fahrzeugschein und vorhandene OEM-Nummern sinnvoll abzugleichen.`,
    sections: [
      {
        heading: `Warum ${profile.name} Ersatzteile genau geprüft werden sollten`,
        body: profile.focus,
      },
      {
        heading: 'Welche Daten die Auswahl sicherer machen',
        body: `${profile.dataHint} Für eine sichere Anfrage benötigen wir je nach Teil Fahrzeugschein, VIN oder OEM-Nummer. Wenn ein altes Teil ausgebaut ist, sind Fotos von Nummern, Steckern, Haltern oder Bauform zusätzlich hilfreich.`,
      },
      {
        heading: `Typische ${profile.name} Ersatzteile`,
        body: `${profile.typicalParts} Je nach Fahrzeug können auch Karosserieteile, Sensoren, Fahrwerksteile oder Serviceteile relevant sein. TeilePilot24 ordnet die Anfrage nicht nur nach Kategorie, sondern abhängig von Fahrzeugdaten, Motorisierung und Ausstattung ein.`,
      },
      {
        heading: 'Häufige Fehler bei der Bestellung',
        body: `${profile.mistake} Auch ähnliche Teilenummern, unvollständige Fahrzeugangaben oder unscharfe Fotos können zu falschen Treffern führen. Deshalb ist eine kurze Prüfung besser als eine Bestellung nach Vermutung.`,
      },
      {
        heading: 'So läuft die Anfrage per WhatsApp',
        body: `Sie senden Fahrzeugschein, VIN oder OEM-Nummer über WhatsApp und beschreiben kurz, welches Teil benötigt wird. TeilePilot24 prüft die Angaben, gleicht mögliche Varianten ab und fragt nach, wenn ein Detail fehlt. Ziel ist eine nachvollziehbare Auswahl, keine ungeprüfte Empfehlung.`,
      },
    ],
    faq: [
      { question: `Kann ich ${profile.name} Ersatzteile per WhatsApp anfragen?`, answer: `Ja. Senden Sie Fahrzeugschein, VIN oder eine OEM-Nummer und beschreiben Sie kurz, welches ${profile.name} Teil gesucht wird.` },
      { question: `Warum reicht das ${profile.name} Modell allein nicht immer?`, answer: 'Modellname und Baujahr sind oft zu grob. Motorisierung, Ausstattung und Produktionszeitraum können andere Teilevarianten bedeuten.' },
      { question: 'Hilft eine OEM-Nummer bei der Suche?', answer: 'Ja. Eine OEM-Nummer ist sehr hilfreich, wird aber am besten zusammen mit den Fahrzeugdaten geprüft.' },
      { question: 'Kann ich mehrere Teile gleichzeitig anfragen?', answer: 'Ja. Mehrere Teile können in einer WhatsApp Nachricht genannt werden, besonders wenn Fahrzeugschein oder VIN mitgesendet werden.' },
      { question: 'Wie schnell bekomme ich eine Rückmeldung?', answer: 'TeilePilot24 meldet sich nach der Prüfung. Wenn Daten fehlen, kommen zuerst gezielte Rückfragen, damit kein falsches Teil empfohlen wird.' },
    ],
    related,
    ctaText: `${profile.name} Ersatzteil per WhatsApp prüfen lassen`,
  }
}

const detailedPartPages: Record<string, SeoPageData> = {
  '/bremsbelaege': {
    path: '/bremsbelaege',
    group: 'teile',
    eyebrow: 'Bremsanlage richtig zuordnen',
    title: 'Bremsbeläge passend zu Bremssystem und Achse finden',
    metaTitle: 'Bremsbeläge mit VIN passend prüfen lassen | TeilePilot24',
    metaDescription: 'Passende Bremsbeläge über Achse, Bremssystem, PR-Code, VIN und OEM-Nummer eingrenzen. Persönliche Prüfung statt reiner Modellsuche fürs Fahrzeug.',
    intro: 'Bremsbeläge müssen nicht nur zum Fahrzeugmodell, sondern zur tatsächlich verbauten Bremsanlage und zur richtigen Achse passen. VIN, PR-Code und Hinweise vom vorhandenen Teil helfen, ähnliche Varianten sauber zu trennen.',
    sections: [
      {
        heading: 'Warum Marke, Modell und Baujahr nicht immer genügen',
        body: 'Innerhalb einer Modellreihe können abhängig von Motorisierung, Leistung, Ausstattung und Produktionszeitraum verschiedene Bremsanlagen verbaut sein. Ein Katalog zeigt dann für dasselbe Fahrzeug mehrere Belagformen. Die Bezeichnung des Autos grenzt die Suche ein, entscheidet aber nicht automatisch, welcher Satz am konkreten Bremssattel verwendet wird.',
        paragraphs: [
          'Auch die Erstzulassung ist nur ein zeitlicher Hinweis. Technische Umstellungen können während eines Modelljahres erfolgt sein, und ein Fahrzeug kann vor der ersten Zulassung produziert worden sein. Deshalb werden Fahrzeugdaten und bremsenspezifische Merkmale gemeinsam betrachtet.',
        ],
      },
      {
        heading: 'Vorderachse, Hinterachse und Bremssystem unterscheiden',
        body: 'Bremsbeläge für Vorder- und Hinterachse besitzen meist unterschiedliche Form, Abmessungen und Aufgaben. Die benötigte Achse gehört daher in jede Anfrage. Darüber hinaus können an derselben Achse verschiedene Bremssättel oder Bremssysteme eingesetzt worden sein.',
        subsections: [
          {
            heading: 'Warum der Bremssattel relevant ist',
            body: 'Die Kontur des Belags, Haltepunkte und gegebenenfalls Zubehör richten sich nach der verwendeten Sattelausführung. Ein optisch ähnlicher Belag kann deshalb trotzdem nicht in den vorhandenen Bremssattel gehören. Herstellerkennzeichnungen oder Fotos vom Altteil können die Katalogauswahl unterstützen.',
          },
          {
            heading: 'Warnkontakt mit oder ohne Anschluss',
            body: 'Je nach Fahrzeug und Achse können Beläge mit vorbereitetem Verschleißwarnkontakt, separatem Sensor oder ohne elektrischen Anschluss angeboten werden. Ob und welcher Warnkontakt benötigt wird, muss zur vorhandenen Bremsanlage und Verkabelung passen.',
          },
        ],
      },
      {
        heading: 'Welche Informationen bei Bremsbelägen helfen?',
        body: 'Die beste Kombination hängt vom Fahrzeug ab. TeilePilot24 beginnt mit VIN oder relevanten Fahrzeugschein-Daten und ergänzt nur die Angaben, die für die Bremsvariante tatsächlich nötig sind.',
        table: {
          headers: ['Information', 'Warum wichtig?', 'Woher erhältlich?'],
          rows: [
            ['Achse', 'Trennt Vorder- und Hinterachsbeläge.', 'Aus Reparaturauftrag oder Angabe der benötigten Einbauposition.'],
            ['VIN', 'Ordnet das konkrete Fahrzeug und den Produktionskontext zu.', 'Fahrzeugschein Feld E oder Fahrzeugkennzeichnung.'],
            ['PR-Code', 'Kann bei VAG-Fahrzeugen die dokumentierte Bremsausführung eingrenzen.', 'Fahrzeugdatenträger, Serviceunterlagen oder verfügbare Fahrzeugdaten.'],
            ['OEM-/Herstellerreferenz', 'Bietet einen konkreten Bezug zum vorhandenen Belag oder Bremssystem.', 'Altes Teil, Verpackung, Rechnung oder Werkstattunterlagen.'],
            ['Foto und Maße', 'Zeigen Form, Warnkontakt und sichtbare Unterschiede.', 'Ausgebautes Altteil oder Werkstattangaben.'],
          ],
        },
        links: [
          { label: 'PR-Code bei VAG verstehen', path: '/pr-code-vag' },
          { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
        ],
      },
      {
        heading: 'Bremsbeläge und Bremsscheiben zusammen betrachten',
        body: 'Beläge und Scheiben arbeiten als Reibpaar, werden im Teilekatalog aber über eigene technische Merkmale bestimmt. Aus einem passenden Belagsatz folgt nicht automatisch jede angebotene Bremsscheibe. Achse, Bremssystem und Scheibenabmessungen müssen jeweils zur Fahrzeugausführung passen.',
        paragraphs: [
          'Wer beide Teilegruppen anfragt, sollte klar angeben, ob Vorderachse, Hinterachse oder beide Achsen gemeint sind. So kann geprüft werden, welche Belag- und Scheibenvarianten im selben Bremssystem zusammengehören, ohne aus einer einzelnen Referenz eine pauschale Kompatibilität abzuleiten.',
        ],
        links: [{ label: 'Passende Bremsscheiben finden', path: '/bremsscheiben' }],
      },
      {
        heading: 'Was lässt sich am alten Bremsbelag ablesen?',
        body: 'Eine lesbare Hersteller- oder OE-Referenz ist ein wichtiger Vergleichspunkt. Zusätzlich können die äußere Form, Haltefedern, Aussparungen, Position des Warnkontakts und von der Werkstatt aufgenommene Maße helfen. Die Angaben sollten dennoch mit dem Fahrzeug abgeglichen werden, weil ein früher eingebautes Teil nicht automatisch die ursprüngliche Ausführung belegt.',
        paragraphs: [
          'Maßangaben sind nur sinnvoll, wenn eindeutig ist, welche Kante und welcher Belag gemessen wurden. Verschleiß kann einzelne Werte verändern; deshalb dienen Maße als Ergänzung zu Referenz, Bremssystem und Fahrzeugdaten.',
        ],
      },
      {
        heading: 'So prüft TeilePilot24 die Bremsbelag-Anfrage',
        body: 'Sie nennen Achse und gesuchtes Teil und senden VIN oder die relevanten Fahrzeugdaten. Falls der Katalog mehrere Bremsanlagen ausweist, werden PR-Code, Bremssystem, Referenz, Foto oder Werkstattangaben ergänzt. Nach dem persönlichen Abgleich erhalten Sie ein unverbindliches Angebot für die ermittelte Variante.',
        paragraphs: [
          'Die Prüfung soll das Risiko einer Fehlbestellung reduzieren. Sie ist keine Montageanleitung und ersetzt bei sicherheitsrelevanten Bremsarbeiten nicht die fachliche Kontrolle am Fahrzeug.',
        ],
        links: [
          { label: 'OEM-Nummer richtig nutzen', path: '/oem-nummer' },
          { label: 'Ersatzteile mit VIN prüfen lassen', path: '/ersatzteile-mit-vin-pruefen' },
        ],
      },
    ],
    faq: [
      { question: 'Brauche ich Bremsbeläge für die Vorder- oder Hinterachse?', answer: 'Die Achse muss eindeutig angegeben werden, weil Form, Größe und Bremssystem vorne und hinten meist unterschiedlich sind.' },
      { question: 'Warum zeigt der Teilekatalog mehrere Bremsbeläge für mein Auto?', answer: 'Innerhalb derselben Modellreihe können verschiedene Bremssättel, Bremsanlagen oder Produktionsstände verwendet worden sein.' },
      { question: 'Hilft der PR-Code bei Bremsbelägen?', answer: 'Bei VW, Audi, Seat und Skoda kann der passende PR-Code die dokumentierte Bremsausführung eingrenzen. Er wird zusammen mit VIN und Teilegruppe bewertet.' },
      { question: 'Müssen neue Bremsbeläge einen Warnkontakt haben?', answer: 'Das hängt von Fahrzeug, Achse und vorhandener Bremsanlage ab. Es gibt Ausführungen mit vorbereitetem, separatem oder ohne elektrischen Warnkontakt.' },
      { question: 'Reicht die Nummer auf dem alten Bremsbelag?', answer: 'Sie ist sehr hilfreich, sollte aber mit VIN, Achse und Bremssystem abgeglichen werden, besonders wenn das Teil früher bereits ersetzt wurde.' },
    ],
    related: [
      { label: 'Bremsscheiben', path: '/bremsscheiben' },
      { label: 'PR-Code bei VAG', path: '/pr-code-vag' },
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
      { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
    ],
    ctaText: 'Bremsbeläge persönlich prüfen lassen',
    secondaryCta: { label: 'Bremsscheiben ansehen', path: '/bremsscheiben' },
  },
  '/bremsscheiben': {
    path: '/bremsscheiben',
    group: 'teile',
    eyebrow: 'Bremsscheiben-Varianten prüfen',
    title: 'Bremsscheiben nach Achse und Bremsanlage auswählen',
    metaTitle: 'Bremsscheiben passend mit VIN finden | TeilePilot24',
    metaDescription: 'Bremsscheiben passend über Achse, Durchmesser, Dicke, Bauart, PR-Code, VIN und OEM-Referenz prüfen lassen – ohne Modellwerte fürs Fahrzeug zu raten.',
    intro: 'Bei Bremsscheiben entscheiden Achse, Bremsanlage, Abmessungen und Bauart über die richtige Variante. Selbst innerhalb eines Modells können unterschiedliche Scheiben verwendet werden, die sich äußerlich nur in Details unterscheiden.',
    sections: [
      {
        heading: 'Zuerst klären: Vorderachse oder Hinterachse?',
        body: 'Bremsscheiben sind achsbezogen. Vorder- und Hinterachse unterscheiden sich regelmäßig bei Belastung, Abmessungen und konstruktiver Ausführung. Die Angabe der Achse ist deshalb der erste Entscheidungspunkt und verhindert, dass technisch nicht vergleichbare Scheiben in derselben Suche vermischt werden.',
        paragraphs: [
          'Bei einer Anfrage für beide Achsen werden die Varianten getrennt geprüft. Auch innerhalb einer Achse kann der Teilekatalog mehrere Möglichkeiten zeigen, wenn das Fahrzeug mit unterschiedlichen Bremssystemen angeboten wurde.',
          'An der Hinterachse kann außerdem die konstruktive Einbindung der Feststellbremse eine Rolle spielen. Welche Scheibenausführung vorgesehen ist, wird aus Fahrzeug- und Bremsanlagendaten übernommen; aus der Bezeichnung „hinten“ allein folgt noch keine eindeutige Variante.',
        ],
      },
      {
        heading: 'Durchmesser, Dicke und Bauart sind keine Nebendetails',
        body: 'Scheibendurchmesser und -dicke müssen zur vorhandenen Bremsanlage passen. Hinzu kommen konstruktive Merkmale wie Höhe, Zentrierung, Lochbild und gegebenenfalls die Ausführung der Hinterachsscheibe. Ohne fahrzeugbezogene Katalogdaten werden deshalb keine pauschalen Maße empfohlen.',
        subsections: [
          {
            heading: 'Belüftet oder massiv',
            body: 'Je nach Fahrzeug und Achse können innenbelüftete oder massive Bremsscheiben vorgesehen sein. Die Bauarten sind nicht allein anhand des Modellnamens austauschbar. Entscheidend ist, welche Ausführung für die konkrete Bremsanlage dokumentiert und am Fahrzeug vorhanden ist.',
          },
          {
            heading: 'Topfhöhe, Zentrierung und Lochbild',
            body: 'Neben Durchmesser und Dicke beeinflussen weitere Konstruktionsmaße die Lage der Scheibe zur Radnabe und zum Bremssattel. Lochbild, Zentrierung und Scheibenhöhe werden deshalb aus Katalog- oder Werkstattdaten übernommen und nicht anhand eines Fotos geschätzt.',
          },
        ],
      },
      {
        heading: 'Warum ein Modell mehrere Bremsscheiben haben kann',
        body: 'Motorleistung, Fahrzeuggewicht, Ausstattung, Produktionszeitraum oder ein anderes Bremssystem können zu abweichenden Scheiben führen. Bei VAG-Fahrzeugen kann ein PR-Code helfen, die werkseitig dokumentierte Bremsvariante einzugrenzen. Bei anderen Fahrzeugen übernehmen VIN, Katalogmerkmale und Referenzen diese Aufgabe.',
        bullets: [
          'VIN zur Zuordnung des konkreten Fahrzeugs und Produktionskontexts.',
          'PR-Code, wenn die VAG-Bremsanlage im Katalog darüber unterschieden wird.',
          'OEM- oder Herstellerreferenz vom vorhandenen Teil als direkter Vergleichspunkt.',
          'Werkstattangaben zu Achse, Bremssystem und aufgenommenen Abmessungen.',
        ],
        links: [
          { label: 'PR-Code bei VW, Audi, Seat und Skoda', path: '/pr-code-vag' },
          { label: 'OEM-Nummer richtig nutzen', path: '/oem-nummer' },
        ],
      },
      {
        heading: 'Bremsbelag und Bremsscheibe nicht getrennt vermuten',
        body: 'Bremsscheibe und Bremsbelag gehören zum selben Bremssystem, werden aber nicht über identische Merkmale ausgewählt. Ein vorhandener Belag liefert Hinweise auf den Bremssattel; die Scheibe benötigt zusätzlich ihre eigenen Abmessungs- und Bauartdaten. Deshalb sollte die eine Teilegruppe nicht ungeprüft aus der anderen abgeleitet werden.',
        paragraphs: [
          'Bei einer gemeinsamen Anfrage kann TeilePilot24 prüfen, welche Belag- und Scheibenreferenzen für dieselbe Achse und Bremsanlage vorgesehen sind. Dabei bleibt jede Position als eigener Artikel nachvollziehbar.',
        ],
        links: [{ label: 'Bremsbeläge passend finden', path: '/bremsbelaege' }],
      },
      {
        heading: 'Welche Angaben vom alten Teil helfen?',
        body: 'Eine lesbare Referenz auf der Scheibe, Verpackung oder Werkstattrechnung kann die Suche beschleunigen. Von der Werkstatt ermittelte Abmessungen sind ebenfalls hilfreich, sofern klar ist, an welcher Achse und Position gemessen wurde. Ein Foto allein zeigt dagegen nicht zuverlässig alle entscheidenden Maße oder die innere Bauart.',
        paragraphs: [
          'Bei einer bereits benutzten Scheibe ist außerdem zwischen ursprünglichem Nennmaß und aktuellem Zustand zu unterscheiden. Für die Ersatzteilsuche zählen die vorgesehene Katalogausführung und belastbare Werkstattangaben, nicht eine ungeprüft übernommene Einzelmessung.',
        ],
      },
      {
        heading: 'Ablauf der Bremsscheiben-Prüfung',
        body: 'Sie senden VIN oder relevante Fahrzeugschein-Daten und nennen die benötigte Achse. TeilePilot24 prüft mögliche Bremssysteme und gleicht vorhandene PR-Codes, OEM-Referenzen, Fotos oder Werkstattangaben ab. Bleiben Varianten offen, werden gezielt die fehlenden technischen Merkmale erfragt.',
        paragraphs: [
          'Anschließend erhalten Sie ein unverbindliches Angebot für die eingegrenzte Scheibenvariante. Die Seite beschreibt die Teileidentifikation und enthält bewusst keine Anleitung zum Wechsel oder zur Beurteilung der Bremsanlage.',
        ],
        links: [{ label: 'VIN-Prüfung für Ersatzteile', path: '/ersatzteile-mit-vin-pruefen' }],
      },
    ],
    faq: [
      { question: 'Sind Bremsscheiben vorne und hinten gleich?', answer: 'In der Regel nicht. Abmessungen, Belastung und Konstruktion unterscheiden sich, deshalb muss die benötigte Achse angegeben werden.' },
      { question: 'Warum sind Durchmesser und Dicke bei Bremsscheiben wichtig?', answer: 'Beide Werte gehören zur konstruktiven Ausführung der Bremsanlage. Abweichende Maße können bedeuten, dass die Scheibe nicht zum Bremssattel und Fahrzeug passt.' },
      { question: 'Was ist der Unterschied zwischen belüfteten und massiven Scheiben?', answer: 'Es handelt sich um unterschiedliche Bauarten. Welche vorgesehen ist, hängt von Fahrzeug, Achse und Bremsanlage ab.' },
      { question: 'Kann ich Bremsscheiben anhand der Bremsbeläge auswählen?', answer: 'Nicht allein. Beide gehören zum selben Bremssystem, aber die Scheibe muss zusätzlich über eigene Maße, Bauart und Referenzen bestimmt werden.' },
      { question: 'Welche Daten sollte ich für eine Bremsscheiben-Anfrage senden?', answer: 'Hilfreich sind VIN, Achse, gegebenenfalls PR-Code, OEM-Referenz und von der Werkstatt aufgenommene Angaben zum vorhandenen Teil.' },
    ],
    related: [
      { label: 'Bremsbeläge', path: '/bremsbelaege' },
      { label: 'PR-Code bei VAG', path: '/pr-code-vag' },
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
      { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
    ],
    ctaText: 'Bremsscheiben persönlich prüfen lassen',
    secondaryCta: { label: 'Bremsbeläge ansehen', path: '/bremsbelaege' },
  },
  '/scheinwerfer': {
    path: '/scheinwerfer',
    group: 'teile',
    eyebrow: 'Lichtsystem und Ausstattung prüfen',
    title: 'Scheinwerfer passend zu Lichtsystem und Fahrzeug finden',
    metaTitle: 'Scheinwerfer passend mit VIN finden | TeilePilot24',
    metaDescription: 'Scheinwerfer über Einbauseite, Halogen, Xenon oder LED, Ausstattung, Stecker, VIN und OEM-Nummer persönlich prüfen und fürs Fahrzeug anbieten lassen.',
    intro: 'Ein Scheinwerfer muss zur Einbauseite, Lichttechnik, elektrischen Ausstattung und zum Bauzeitraum des Fahrzeugs passen. Die äußere Form allein verrät nicht, welche Technik und welche Komponenten im Gehäuse vorgesehen sind.',
    sections: [
      {
        heading: 'Rechts oder links ist der erste Entscheidungspunkt',
        body: 'Scheinwerfer sind seitengebunden. Für die Anfrage muss deshalb klar sein, ob die Fahrzeugseite rechts oder links gemeint ist. Die Bezeichnung bezieht sich auf die Fahrtrichtung, nicht auf die Blickrichtung vor dem Fahrzeug. Auch bei optisch symmetrischen Leuchten unterscheiden sich Gehäuse, Halter und Lichtverteilung.',
        paragraphs: [
          'Ein Foto der Fahrzeugfront kann die Seite bestätigen, ersetzt aber nicht die technische Identifikation. Entscheidend bleibt die Kombination aus Einbauposition, Fahrzeugdaten und Kennzeichnung des vorhandenen Scheinwerfers.',
        ],
      },
      {
        heading: 'Halogen, Xenon und LED sind verschiedene Systeme',
        body: 'Die Lichttechnik beeinflusst Aufbau, elektrische Anschlüsse und die benötigten Zusatzkomponenten. Ein Scheinwerfer für Halogenbetrieb ist nicht allein wegen einer ähnlichen Karosserieform mit einer Xenon- oder LED-Ausführung gleichzusetzen. Auch innerhalb einer Technik können mehrere Varianten existieren.',
        table: {
          headers: ['Merkmal', 'Einfluss auf die Auswahl', 'Hilfreiche Angabe'],
          rows: [
            ['Einbauseite', 'Bestimmt Gehäuse, Halter und Lichtverteilung.', 'Rechts oder links in Fahrtrichtung.'],
            ['Lichttechnik', 'Trennt Halogen-, Xenon- und LED-Ausführungen.', 'Fahrzeugausstattung, Typenschild oder Werkstattangabe.'],
            ['Zusatzfunktionen', 'Kurvenlicht, adaptive Funktionen oder Tagfahrlicht können andere Varianten erfordern.', 'Ausstattung, VIN und Beschriftung des Altteils.'],
            ['Anschluss', 'Steckerbelegung und elektrische Integration können abweichen.', 'Gut lesbares Foto von Stecker und Rückseite.'],
            ['Bauzeitraum', 'Modellpflege kann Optik und Technik verändern.', 'VIN und verfügbare Produktionsdaten.'],
          ],
        },
      },
      {
        heading: 'Ausstattung und adaptive Funktionen berücksichtigen',
        body: 'Kurvenlicht, automatische Leuchtweitenregelung, adaptive Lichtfunktionen oder integriertes Tagfahrlicht können die passende Ausführung beeinflussen. Nicht jede Funktion ist von außen eindeutig zu erkennen. Deshalb werden Ausstattungshinweise zusammen mit VIN und Teilekatalog geprüft.',
        paragraphs: [
          'Auch ein Facelift oder eine technische Änderung innerhalb der Modelllaufzeit kann zu einem anderen Gehäuse, Anschluss oder Steuerungskonzept führen. Erstzulassung und Modellname allein bilden solche Grenzen nicht immer exakt ab.',
          'Ausstattungscodes oder Herstellerdaten können deshalb Informationen liefern, die auf einem gewöhnlichen Frontfoto nicht sichtbar sind.',
        ],
      },
      {
        heading: 'Lieferumfang von Steuergerät und Leuchtmittel prüfen',
        body: 'Bei Angeboten kann der Lieferumfang unterschiedlich sein. Steuergeräte, Vorschaltgeräte, LED-Module, Stellmotoren oder Leuchtmittel müssen nicht automatisch im Scheinwerfer enthalten sein. Welche Komponenten benötigt werden und was tatsächlich angeboten wird, sollte deshalb vor der Bestellung eindeutig beschrieben sein.',
        subsections: [
          {
            heading: 'Stecker und Rückseite liefern wichtige Hinweise',
            body: 'Fotos von Anschluss, Gehäuserückseite und Etikett helfen, Varianten zu vergleichen. Sie sollten scharf und vollständig sein. Ein Frontfoto allein zeigt weder die Steckerbelegung noch sicher den vorhandenen Lieferumfang.',
          },
        ],
      },
      {
        heading: 'VIN, OEM-Nummer und Etikett gemeinsam nutzen',
        body: 'Die VIN ordnet das Fahrzeug und seinen Produktionskontext zu. Eine OEM- oder Herstellerreferenz auf dem Scheinwerfer bietet einen direkten Bezug zum eingebauten Bauteil. Das Etikett kann außerdem Hinweise auf Hersteller und Ausführung enthalten. Stimmen diese Quellen zusammen, lässt sich die Auswahl deutlich besser eingrenzen.',
        paragraphs: [
          'Eine Nummer sollte immer vollständig und im Zusammenhang fotografiert werden, da auf dem Gehäuse auch Produktions- und Materialkennzeichnungen stehen können. Wurde der Scheinwerfer früher ersetzt, wird die Altteilreferenz zusätzlich mit dem Fahrzeugdatensatz abgeglichen.',
          'Prüfzeichen oder Beschriftungen auf der Streuscheibe können technische Hinweise liefern, sind aber nicht automatisch eine vollständige Bestellreferenz. Für die Auswahl werden sie nur zusammen mit Etikett, Lichtsystem und Fahrzeugdaten verwendet.',
        ],
        links: [
          { label: 'OEM-Nummer richtig nutzen', path: '/oem-nummer' },
          { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
        ],
      },
      {
        heading: 'Diese Angaben helfen TeilePilot24',
        body: 'Nennen Sie Einbauseite und Lichttechnik und senden Sie VIN oder relevante Fahrzeugschein-Daten. Ergänzen Sie möglichst Fotos von Front, Rückseite, Stecker und Typenschild sowie bekannte Ausstattungsfunktionen. TeilePilot24 gleicht die Informationen persönlich ab und fragt bei offenem Lieferumfang oder mehreren Varianten gezielt nach.',
        paragraphs: [
          'Nach der Prüfung erhalten Sie ein unverbindliches Angebot für die eingegrenzte Scheinwerfervariante. Ein Foto dient dabei als Ergänzung, nicht als alleinige technische Freigabe.',
        ],
        links: [
          { label: 'Fahrzeugschein-Felder verstehen', path: '/fahrzeugschein-erklaert' },
          { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
        ],
      },
    ],
    faq: [
      { question: 'Wie erkenne ich, ob ich den rechten oder linken Scheinwerfer brauche?', answer: 'Die Seite wird in Fahrtrichtung angegeben. Für die Anfrage sollte ausdrücklich rechts oder links genannt werden.' },
      { question: 'Kann ein Halogen-Scheinwerfer durch eine LED-Ausführung ersetzt werden?', answer: 'Die Systeme unterscheiden sich technisch und elektrisch. Für die Teileauswahl wird die ab Werk beziehungsweise aktuell vorhandene Lichtausstattung geprüft; die Seite gibt keine Umrüstanleitung.' },
      { question: 'Ist das Steuergerät beim Scheinwerfer immer enthalten?', answer: 'Nein. Lieferumfänge können Steuergeräte, Module, Stellmotoren oder Leuchtmittel einschließen oder ausschließen. Das konkrete Angebot muss dazu geprüft werden.' },
      { question: 'Reicht ein Foto des Scheinwerfers zur Bestimmung?', answer: 'Ein Foto ist hilfreich, zeigt aber nicht immer Lichttechnik, Stecker und Ausstattung vollständig. VIN und Etikett beziehungsweise OEM-Referenz sollten ergänzt werden.' },
      { question: 'Welche Bilder sollte ich für eine Scheinwerfer-Anfrage senden?', answer: 'Hilfreich sind Frontansicht, Rückseite, elektrischer Anschluss und ein scharfes Foto des Typenschilds oder der Teilenummer.' },
    ],
    related: [
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
      { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
      { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
      { label: 'FAQ', path: '/faq' },
    ],
    ctaText: 'Scheinwerfer persönlich prüfen lassen',
    secondaryCta: { label: 'VIN-Prüfung ansehen', path: '/ersatzteile-mit-vin-pruefen' },
  },
  '/batterie': {
    path: '/batterie',
    group: 'teile',
    eyebrow: 'Batteriedaten und Bordnetz prüfen',
    title: 'Autobatterie passend zu Fahrzeug und Ausstattung finden',
    metaTitle: 'Passende Autobatterie fürs Fahrzeug | TeilePilot24',
    metaDescription: 'Autobatterie über Ah, Startstrom, Bauform, Polanordnung, AGM/EFB, Start-Stopp und Fahrzeugausstattung persönlich prüfen und anbieten lassen.',
    intro: 'Eine Autobatterie muss elektrisch, mechanisch und zur Bordnetzstrategie des Fahrzeugs passen. Kapazität und Startstrom sind wichtig, aber auch Gehäuse, Polanordnung, Batterietechnik und Start-Stopp-Ausstattung entscheiden mit.',
    sections: [
      {
        heading: 'Kapazität und Startstrom richtig einordnen',
        body: 'Die Kapazität in Amperestunden beschreibt, wie viel elektrische Ladung eine Batterie speichern kann. Der angegebene Startstrom beschreibt ihre Fähigkeit, für den Motorstart kurzfristig hohe Leistung bereitzustellen. Beide Werte müssen im vorgesehenen Bereich der Fahrzeugausführung liegen und werden nicht isoliert nach dem Motto „mehr ist immer besser“ gewählt.',
        paragraphs: [
          'Motorisierung, Klima, elektrische Verbraucher und das Batteriemanagement beeinflussen die vorgesehene Ausführung. Die Werte der vorhandenen Batterie sind deshalb ein wichtiger Ausgangspunkt, sollten aber bei einem früheren Austausch mit den Fahrzeugdaten verglichen werden.',
        ],
      },
      {
        heading: 'Bauform, Abmessungen und Polanordnung müssen passen',
        body: 'Die Batterie muss in den vorgesehenen Halter passen und sicher befestigt werden können. Länge, Breite, Höhe, Bodenleiste und Position der Pole können zwischen Varianten abweichen. Auch die Lage von Plus- und Minuspol sowie die erreichbare Kabelführung sind für die Teileidentifikation relevant.',
        paragraphs: [
          'Je nach Einbauort können außerdem Anschlussform, Abdeckung oder eine vorgesehene Entgasungsleitung berücksichtigt werden. Ein Gesamtfoto der eingebauten Batterie zeigt solche Details besser als ein Ausschnitt des Typenschilds.',
        ],
        table: {
          headers: ['Information', 'Warum wichtig?', 'Wo zu finden?'],
          rows: [
            ['Kapazität (Ah)', 'Muss zum vorgesehenen Energiebedarf und Batteriemanagement passen.', 'Etikett der Altbatterie und Fahrzeugdaten.'],
            ['Startstrom', 'Beschreibt die kurzfristige Startleistung.', 'Batterieetikett oder technische Produktangabe.'],
            ['Bauform/Maße', 'Entscheidet über Einbauplatz und Befestigung.', 'Altbatterie, Halter oder Werkstattangabe.'],
            ['Polanordnung', 'Anschlüsse und Kabel müssen die Pole korrekt erreichen.', 'Ansicht der eingebauten Batterie beziehungsweise Etikett.'],
            ['Batterietechnik', 'AGM, EFB oder klassische Starterbatterie müssen zur Fahrzeugstrategie passen.', 'Kennzeichnung der Altbatterie und Ausstattungsdaten.'],
          ],
        },
      },
      {
        heading: 'AGM, EFB und klassische Starterbatterien unterscheiden',
        body: 'AGM- und EFB-Batterien sind für unterschiedliche Belastungsprofile und Fahrzeugkonzepte ausgelegt. Start-Stopp-Systeme, Rekuperationsfunktionen und ein intelligentes Batteriemanagement können eine bestimmte Technologie voraussetzen. Eine Batterie wird deshalb nicht nur nach identischen Außenmaßen ersetzt.',
        paragraphs: [
          'Welche Technologie vorgesehen ist, ergibt sich aus Fahrzeugausstattung, Herstellerdaten und vorhandener Batterie. Ein Wechsel zwischen Batterietypen sollte nicht ohne fahrzeugbezogene Prüfung angenommen werden.',
        ],
      },
      {
        heading: 'Warum VIN allein nicht jede Batteriefrage löst',
        body: 'Die VIN ist ein guter Einstieg in den Fahrzeugdatensatz. Je nach Ausstattung können jedoch innerhalb einer Baureihe verschiedene Batteriekapazitäten oder Technologien vorgesehen sein. Zudem kann das Fahrzeug nachträglich zusätzliche Verbraucher erhalten haben oder die aktuell eingebaute Batterie wurde bereits verändert.',
        paragraphs: [
          'Auch die Zahl und Position weiterer Batterien kann bei bestimmten Fahrzeugkonzepten eine Rolle spielen. Die Anfrage sollte deshalb klar benennen, welche Batterie beziehungsweise welcher Einbauplatz gemeint ist, wenn das Fahrzeug mehr als einen Energiespeicher besitzt.',
        ],
        bullets: [
          'Foto des vollständigen Altbatterie-Etiketts mit Ah-, Startstrom- und Technologieangabe.',
          'Gesamtfoto zur Erkennung von Gehäuse, Polposition und Befestigung.',
          'Hinweis, ob das Fahrzeug ein Start-Stopp-System besitzt.',
          'VIN oder relevante Fahrzeugschein-Daten für den Katalogabgleich.',
          'Werkstattangaben, falls eine bestimmte Batterietechnik empfohlen wurde.',
        ],
        links: [
          { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
          { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
        ],
      },
      {
        heading: 'Batterieregistrierung oder Anpassung kann erforderlich sein',
        body: 'Bei manchen Fahrzeugen muss eine neue Batterie im Batteriemanagement registriert oder über ein geeignetes Diagnosesystem angepasst werden. Ob das erforderlich ist, hängt vom konkreten Fahrzeug und der eingebauten Technik ab. TeilePilot24 gibt dazu keine Codier- oder Diagnoseanleitung; die Prüfung und Durchführung gehört gegebenenfalls in fachkundige Hände.',
      },
      {
        heading: 'So wird die Batterie-Anfrage geprüft',
        body: 'Senden Sie VIN oder Fahrzeugschein-Daten, ein lesbares Foto der vorhandenen Batterie und den Hinweis auf Start-Stopp. TeilePilot24 vergleicht Kapazität, Startstrom, Technik, Bauform und Polanordnung mit den verfügbaren Fahrzeugangaben. Bei abweichender Ausstattung werden die offenen Punkte vor dem Angebot geklärt.',
        paragraphs: [
          'Das Ergebnis ist ein unverbindliches Angebot für eine eingegrenzte Batterieausführung. Die Prüfung beschreibt die Teileauswahl, nicht Arbeiten am elektrischen Bordnetz.',
        ],
        links: [{ label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' }],
      },
    ],
    faq: [
      { question: 'Was bedeutet Ah bei einer Autobatterie?', answer: 'Ah steht für Amperestunden und beschreibt die elektrische Kapazität. Der Wert wird zusammen mit Startstrom, Batterietechnik und Fahrzeugvorgaben betrachtet.' },
      { question: 'Kann ich eine AGM-Batterie durch eine normale Batterie ersetzen?', answer: 'Das sollte nicht pauschal angenommen werden. Start-Stopp, Batteriemanagement und Herstelleranforderungen können eine bestimmte Technologie voraussetzen.' },
      { question: 'Warum ist die Polanordnung bei der Batterie wichtig?', answer: 'Plus- und Minusanschluss sowie Kabelführung müssen zur Einbaulage passen. Eine abweichende Anordnung kann den vorgesehenen Anschluss verhindern.' },
      { question: 'Reicht die VIN für die Auswahl einer Autobatterie?', answer: 'Sie ist ein guter Start. Ein Foto der Altbatterie, Start-Stopp-Ausstattung, Maße und Kennwerte können zusätzlich erforderlich sein.' },
      { question: 'Muss eine neue Batterie am Fahrzeug angelernt werden?', answer: 'Bei manchen Fahrzeugen ist eine Registrierung oder Anpassung vorgesehen. Ob das zutrifft, sollte fahrzeugbezogen und gegebenenfalls durch eine Fachwerkstatt geprüft werden.' },
    ],
    related: [
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
      { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
      { label: 'FAQ', path: '/faq' },
    ],
    ctaText: 'Autobatterie persönlich prüfen lassen',
    secondaryCta: { label: 'Fahrzeugdaten verstehen', path: '/fahrzeugschein-erklaert' },
  },
  '/turbolader': {
    path: '/turbolader',
    group: 'teile',
    eyebrow: 'Motor- und Turbovariante abgleichen',
    title: 'Turbolader über Motorcode, VIN und OEM-Nummer finden',
    metaTitle: 'Turbolader mit OEM-Nummer und VIN prüfen | TeilePilot24',
    metaDescription: 'Turbolader über Motorcode, VIN, Bauzeitraum, Leistung, Typenschild und OEM-Referenz persönlich prüfen lassen – ohne technische Variante zu raten.',
    intro: 'Bei Turboladern ist die genaue Teileidentifikation besonders wichtig. Motorcode, Bauzeitraum, Leistung, Regelung und Herstellerreferenz können Varianten trennen, die äußerlich ähnlich wirken.',
    sections: [
      {
        heading: 'Warum dasselbe Modell verschiedene Turbolader haben kann',
        body: 'Ein Fahrzeugmodell kann mit mehreren Motorisierungen, Leistungsstufen und Abgasvarianten angeboten worden sein. Selbst innerhalb derselben Motorfamilie können sich Turbolader durch Produktionsänderungen, Regelung oder Anschlüsse unterscheiden. Modellname und Hubraum bilden diese Unterschiede nicht vollständig ab.',
        paragraphs: [
          'Auch eine identische Leistungsangabe allein ist kein sicherer Schlüssel. Für die Katalogzuordnung werden Motor, Produktionskontext und die konkrete Turboladerreferenz gemeinsam geprüft.',
        ],
      },
      {
        heading: 'Motorkennung, Bauzeitraum und Leistung einordnen',
        body: 'Die Motorkennung beziehungsweise der Motorcode trennt technische Motorvarianten, die im Alltag ähnlich bezeichnet werden können. VIN und Fahrzeugschein liefern dazu Fahrzeug- und Leistungsdaten; der Teilekatalog kann zusätzlich Produktionsgrenzen ausweisen. Erst diese Kombination schafft eine belastbare Suchbasis.',
        paragraphs: [
          'Der Motorcode steht nicht bei jedem Fahrzeug direkt im Fahrzeugschein. Werkstattunterlagen, Fahrzeugdatenträger oder verfügbare Herstellerdaten können ihn liefern; eine nur vermutete Motorkennung sollte nicht als Bestellgrundlage dienen.',
        ],
        table: {
          headers: ['Information', 'Bedeutung für die Auswahl', 'Mögliche Quelle'],
          rows: [
            ['Motorcode', 'Ordnet den Turbolader einer konkreteren Motorvariante zu.', 'Fahrzeug-/Werkstattunterlagen oder verfügbare Herstellerdaten.'],
            ['VIN', 'Identifiziert Fahrzeug und Produktionskontext.', 'Fahrzeugschein Feld E.'],
            ['Leistung/Bauzeitraum', 'Hilft, technische Entwicklungsstände zu trennen.', 'Fahrzeugschein und Katalogdaten.'],
            ['OEM-/Herstellerreferenz', 'Verweist direkt auf das vorhandene Turboladermodell oder eine Referenzkette.', 'Typenschild, Altteil, Rechnung oder Verpackung.'],
            ['Regelung/Aktuator', 'Kann eine andere technische Ausführung und Elektronik bedeuten.', 'Typenschild, Steckerfoto und Werkstattangaben.'],
          ],
        },
      },
      {
        heading: 'Warum Typenschild und OEM-Referenz so wertvoll sind',
        body: 'Auf dem alten Turbolader kann ein Typenschild oder eine Kennzeichnung mit Hersteller- und Teileinformationen angebracht sein. Ein scharfes Foto der gesamten Kennzeichnung ist oft hilfreicher als eine unvollständig abgeschriebene Nummer. Auch eine frühere Rechnung oder Originalverpackung kann einen Referenzhinweis enthalten.',
        paragraphs: [
          'Nicht jede Nummer am Gehäuse ist automatisch die gesuchte OEM-Referenz. Produktions- und Gusskennzeichnungen müssen von der eigentlichen Teileidentifikation unterschieden werden. Die Nummer wird deshalb mit Motorcode und VIN abgeglichen.',
          'Referenzen können im Laufe der Produktion ersetzt oder in Nachfolgeketten geführt werden. Eine neuere Nummer ist nur dann relevant, wenn der Teilekatalog sie für den konkreten Motor- und Fahrzeugdatensatz als gültigen Ersatz ausweist.',
        ],
        links: [{ label: 'OEM-Nummer richtig einordnen', path: '/oem-nummer' }],
      },
      {
        heading: 'Regelung und Aktuator können Varianten bilden',
        body: 'Turbolader können sich bei der Ladedruckregelung und beim verwendeten Aktuator unterscheiden. Je nach Ausführung kommen mechanische, pneumatische oder elektronisch angesteuerte Komponenten vor. Stecker, Aktuator und Kalibrierungsbezug sind deshalb Teil der technischen Identifikation, ohne dass diese Seite Diagnose- oder Einstellanweisungen gibt.',
        paragraphs: [
          'Ein äußerlich ähnlicher Lader mit abweichender Regelung ist nicht automatisch austauschbar. Fotos der Anschlüsse und des Aktuators ergänzen die Nummernprüfung, ersetzen sie aber nicht.',
          'Auch der Lieferumfang kann unterschiedlich sein: Aktuator, Anbauteile, Dichtungen oder Leitungen sind nicht aus der Produktbezeichnung allein abzuleiten. Maßgeblich ist die Beschreibung des konkret angebotenen Artikels.',
        ],
      },
      {
        heading: 'Austausch- und Pfandbedingungen vorab klären',
        body: 'Bei manchen Turbolader-Angeboten können Austausch-, Altteilrückgabe- oder Pfandbedingungen gelten. Ob solche Bedingungen bestehen, hängt vom konkreten Lieferanten und Angebot ab. TeilePilot24 sollte diese Punkte deshalb nur dann nennen, wenn sie beim tatsächlich angebotenen Artikel bestätigt sind.',
        paragraphs: [
          'Vor einer Entscheidung sind Lieferumfang, Hersteller, Referenz, mögliche Rückgabebedingungen und die erwartete Altteilabwicklung im jeweiligen Angebot zu prüfen. Hier werden keine pauschalen Handelsbedingungen zugesagt.',
          'Die Begriffe Neuteil, Austauschteil oder instandgesetzte Einheit dürfen ebenfalls nicht vermischt werden. Welche Produktart angeboten wird, muss im individuellen Angebot eindeutig benannt sein.',
        ],
      },
      {
        heading: 'VIN-/OEM-Abgleich bei TeilePilot24',
        body: 'Senden Sie VIN oder Fahrzeugschein-Daten, Motorcode und möglichst ein Foto des Turbolader-Typenschilds. Ergänzend helfen Leistungsangabe, Stecker- und Aktuatorfotos sowie eine Werkstattnotiz zur gesuchten Teileausführung. TeilePilot24 gleicht die Referenzen persönlich ab und fragt nach, wenn mehrere Varianten bestehen.',
        paragraphs: [
          'Nach der Identifikation erhalten Sie ein unverbindliches Angebot. Der Ablauf dient ausschließlich der Auswahl des richtigen Ersatzteils; eine Diagnose der Ausfallursache oder eine Montageanleitung ist nicht Bestandteil dieser Seite.',
        ],
        links: [
          { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
          { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
          { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
        ],
      },
    ],
    faq: [
      { question: 'Warum reicht das Fahrzeugmodell für einen Turbolader nicht aus?', answer: 'Ein Modell kann mehrere Motorcodes, Leistungsstufen, Produktionsstände und Regelungsvarianten besitzen.' },
      { question: 'Wo finde ich die Turbolader-Teilenummer?', answer: 'Häufig befindet sich eine Herstellerkennzeichnung oder ein Typenschild am alten Turbolader. Auch Rechnung, Verpackung oder Werkstattunterlagen können helfen.' },
      { question: 'Kann ein elektronischer Aktuator die Auswahl verändern?', answer: 'Ja. Regelung, Aktuator, Stecker und technische Ausführung müssen zur Motor- und Turboladervariante passen.' },
      { question: 'Ist die VIN allein für einen Turbolader ausreichend?', answer: 'Nicht immer. Motorcode, OEM-/Herstellerreferenz, Typenschild und Angaben zur Regelung können zusätzlich nötig sein.' },
      { question: 'Gibt es bei Turboladern immer Altteilpfand?', answer: 'Nein, das ist keine allgemeine Regel. Austausch- oder Pfandbedingungen hängen vom konkreten Angebot ab und müssen dort ausdrücklich bestätigt werden.' },
    ],
    related: [
      { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
      { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
      { label: 'FAQ', path: '/faq' },
    ],
    ctaText: 'Turbolader persönlich prüfen lassen',
    secondaryCta: { label: 'OEM-Nummer verstehen', path: '/oem-nummer' },
  },
}

function partPage(profile: PartProfile): SeoPageData {
  const detailedPage = detailedPartPages[profile.path]
  if (detailedPage) return detailedPage

  return {
    path: profile.path,
    group: 'teile',
    eyebrow: 'Ersatzteil Kategorie',
    title: profile.title,
    metaTitle: `${profile.title} | TeilePilot24`,
    metaDescription: `${profile.name} per WhatsApp anfragen. TeilePilot24 prüft Fahrzeugschein, VIN und OEM-Daten für eine sichere Ersatzteil-Auswahl.`,
    intro: `${profile.name} müssen technisch zum Fahrzeug passen. TeilePilot24 hilft, die richtige Ausführung anhand von Fahrzeugschein, VIN, OEM-Nummer und vorhandenen Fotos einzugrenzen.`,
    sections: [
      {
        heading: `Was ${profile.name} im Fahrzeug macht`,
        body: profile.functionText,
      },
      {
        heading: 'Warum die richtige Version wichtig ist',
        body: `${profile.differences} Eine ungenaue Auswahl kann Montagezeit kosten, Rücksendungen auslösen oder dazu führen, dass ein Fahrzeug länger steht als nötig.`,
      },
      {
        heading: 'Welche Daten für die Prüfung helfen',
        body: `${profile.dataHint} Zusätzlich sind Fotos vom alten Teil, sichtbare Teilenummern, Stecker, Haltepunkte oder Hinweise aus der Werkstatt nützlich. TeilePilot24 gleicht diese Informationen mit den Fahrzeugdaten ab.`,
      },
      {
        heading: 'Typische Fehler bei der Bestellung',
        body: `${profile.mistake} Auch Trefferlisten in Shops sind nicht immer eindeutig, weil mehrere Varianten für ein Modell angezeigt werden können. Deshalb ist eine Prüfung über VIN oder OEM-Nummer oft der bessere Weg.`,
      },
      {
        heading: 'So funktioniert die WhatsApp Anfrage',
        body: `Senden Sie Fahrzeugschein, VIN oder OEM-Nummer und schreiben Sie kurz, welches Teil gesucht wird. Wenn mehrere Varianten möglich sind, fragt TeilePilot24 nach den entscheidenden Details und hilft bei der Auswahl einer passenden Richtung.`,
      },
    ],
    faq: [
      { question: `Wie finde ich passende ${profile.name}?`, answer: 'Am besten mit Fahrzeugschein, VIN oder OEM-Nummer. Fotos vom alten Teil können die Prüfung zusätzlich beschleunigen.' },
      { question: `Warum gibt es verschiedene ${profile.name}?`, answer: 'Viele Teile unterscheiden sich nach Motor, Achse, Ausstattung, Baujahr oder technischer Ausführung.' },
      { question: 'Kann ich das Teil nur mit Fahrzeugschein anfragen?', answer: 'Ja. Der Fahrzeugschein reicht oft für den Start. Wenn weitere Angaben nötig sind, fragt TeilePilot24 gezielt nach.' },
      { question: 'Ist eine OEM-Nummer besser als eine reine Modellsuche?', answer: 'Meist ja. Die OEM-Nummer liefert eine konkrete Referenz, sollte aber trotzdem mit den Fahrzeugdaten abgeglichen werden.' },
      { question: 'Was passiert, wenn mehrere Varianten möglich sind?', answer: 'Dann werden die Unterschiede geklärt, zum Beispiel Einbauseite, Stecker, Maße, Motorcode oder Ausstattung.' },
    ],
    related: uniqueLinks([...basePartRelated, ...partLinks], profile.path, 8),
    ctaText: `${profile.name} per WhatsApp anfragen`,
  }
}

const detailedGuidePages: Record<string, SeoPageData> = {
  '/oem-nummer': {
    path: '/oem-nummer',
    group: 'ratgeber',
    eyebrow: 'OEM-Nummer verstehen',
    title: 'OEM-Nummer finden und für Ersatzteile richtig nutzen',
    metaTitle: 'OEM-Nummer finden & Ersatzteile prüfen | TeilePilot24',
    metaDescription: 'Was ist eine OEM-Nummer, wo findet man sie und warum sollte sie mit VIN und Fahrzeugdaten abgeglichen werden? Für passende Autoteile erklärt.',
    intro: 'Eine OEM- oder OE-Nummer kann die Ersatzteilsuche deutlich präziser machen. Entscheidend ist, die Herstellerreferenz richtig zu lesen und nicht mit einer beliebigen Händler- oder Produktnummer zu verwechseln.',
    sections: [
      {
        heading: 'Was bedeutet OEM- oder OE-Nummer?',
        body: 'Im Ersatzteilhandel werden die Begriffe OE-Nummer und OEM-Nummer häufig ähnlich verwendet. Gemeint ist meist eine Referenz, unter der ein Fahrzeughersteller ein bestimmtes Bauteil oder eine Teilefamilie in seinem System führt. Sie beschreibt damit nicht bloß die sichtbare Form eines Teils, sondern stellt einen Bezug zum ursprünglichen Fahrzeugteil her.',
        paragraphs: [
          'Die Schreibweise kann je nach Hersteller, Teilekatalog und Datenquelle variieren. Außerdem können ältere Nummern durch neue Referenzen ersetzt worden sein. Deshalb ist eine gefundene Nummer ein sehr wertvoller Suchhinweis, aber noch keine isolierte Einbauzusage.',
          'Bei gebrauchten Fahrzeugen sollte außerdem berücksichtigt werden, dass ein Bauteil schon einmal ersetzt worden sein kann. Die Nummer am Altteil zeigt dann den aktuellen Einbauzustand, der weiterhin mit dem Fahrzeug abgeglichen werden sollte.',
        ],
      },
      {
        heading: 'Herstellerreferenz, Händlernummer und Produktnummer unterscheiden',
        body: 'Auf einem Ersatzteil, einer Verpackung oder einer Rechnung können mehrere Nummern stehen. Nicht jede davon ist die OE-Referenz des Fahrzeugherstellers. Teilehersteller vergeben eigene Artikelnummern, Händler führen interne Produktnummern und auf dem Bauteil können zusätzlich Produktions-, Serien- oder Materialkennzeichnungen erscheinen.',
        subsections: [
          {
            heading: 'Warum die Unterscheidung praktisch wichtig ist',
            body: 'Wird eine interne Händlernummer wie eine Herstellerreferenz behandelt, kann die Suche in eine falsche Teilefamilie führen. Hilfreich sind deshalb ein lesbares Foto der gesamten Kennzeichnung, die Information, von welchem Bauteil die Nummer stammt, und die Fahrzeugdaten zum Abgleich.',
          },
        ],
      },
      {
        heading: 'Warum eine OEM-Nummer die Ersatzteilsuche verbessert',
        body: 'Marke, Modell und Erstzulassung grenzen ein Fahrzeug nur grob ein. Innerhalb derselben Modellreihe können Motor, Getriebe, Achse, Bremssystem, Lichttechnik oder Ausstattung abweichen. Eine Herstellerreferenz führt näher an das tatsächlich verbaute Bauteil heran und kann ähnliche Varianten voneinander trennen.',
        paragraphs: [
          'Auch alternative Teilehersteller können Produkte anbieten, die auf dieselbe OE-Referenz verweisen. Dabei besitzt jeder Anbieter zusätzlich seine eigene Artikelnummer. Der Abgleich über Referenzen hilft, solche Angebote sachlich zu vergleichen, ohne automatisch anzunehmen, dass jede Querverweisung für jede Fahrzeugausführung passt.',
        ],
      },
      {
        heading: 'Warum die Nummer allein nicht immer genügt',
        body: 'Eine OE-Referenz kann ersetzt, erweitert oder für mehrere technische Ausführungen verwendet worden sein. Ebenso kann eine Nummer unvollständig abgelesen, von einem bereits falsch montierten Altteil übernommen oder mit einer Produktionskennzeichnung verwechselt werden. Bei seiten-, achs- oder ausstattungsabhängigen Teilen bleiben zusätzliche Merkmale wichtig.',
        bullets: [
          'VIN und Fahrzeugdaten prüfen, damit die Referenz zur konkreten Fahrzeugausführung passt.',
          'Einbauposition, Achse, Seite, Stecker oder Abmessungen ergänzen, wenn das Bauteil Varianten besitzt.',
          'Bei einer ersetzten Teilenummer die aktuelle Referenzkette im Teilekatalog berücksichtigen.',
          'Fotos und Werkstatthinweise nutzen, wenn die Prägung unvollständig oder schwer lesbar ist.',
        ],
        links: [
          { label: 'VIN-Nummer richtig einordnen', path: '/vin-nummer' },
          { label: 'Originalteil und OEM unterscheiden', path: '/original-oder-oem' },
        ],
      },
      {
        heading: 'Wo kann die OEM-Nummer stehen?',
        body: 'Ein guter Ausgangspunkt ist das ausgebaute alte Teil. Je nach Bauteil kann die Kennzeichnung eingeprägt, eingegossen, gelasert oder auf einem Etikett angebracht sein. Auch eine Originalverpackung, eine frühere Rechnung, ein Kostenvoranschlag oder Unterlagen der Werkstatt können eine passende Referenz enthalten.',
        paragraphs: [
          'Vor dem Fotografieren sollte die Beschriftung gut lesbar sein; mehrere Aufnahmen aus unterschiedlicher Entfernung helfen bei der Einordnung. Eine Nummer aus einer allgemeinen Internetanzeige ist dagegen kein Beleg dafür, dass dieses Teil am eigenen Fahrzeug verbaut ist.',
        ],
      },
      {
        heading: 'So nutzt TeilePilot24 die vorhandene Nummer',
        body: 'TeilePilot24 nimmt die OEM- oder Artikelnummer als konkrete Spur auf und gleicht sie mit VIN, relevanten Fahrzeugdaten und dem gesuchten Einbauort ab. Wenn mehrere Varianten möglich bleiben, werden gezielt weitere Angaben oder Fotos angefragt. Ziel ist, das Risiko einer Fehlbestellung durch persönliche Prüfung zu reduzieren, nicht eine pauschale Garantie allein aus einer Nummer abzuleiten.',
        links: [
          { label: 'Ersatzteile mit VIN prüfen lassen', path: '/ersatzteile-mit-vin-pruefen' },
          { label: 'Fahrzeugschein-Felder verstehen', path: '/fahrzeugschein-erklaert' },
        ],
      },
    ],
    faq: [
      { question: 'Ist OE-Nummer dasselbe wie OEM-Nummer?', answer: 'Im Ersatzteilhandel werden beide Begriffe oft für eine Herstellerreferenz verwendet. Die genaue Benennung kann je nach Katalog variieren; wichtig ist, welche Referenz tatsächlich zum Fahrzeugteil gehört.' },
      { question: 'Kann ich ein Ersatzteil nur über die OEM-Nummer bestellen?', answer: 'Die Nummer ist ein starker Hinweis, sollte aber mit VIN, Fahrzeugdaten und gegebenenfalls Einbauposition oder technischen Merkmalen abgeglichen werden.' },
      { question: 'Warum stehen mehrere Nummern auf meinem alten Teil?', answer: 'Neben einer möglichen OE-Referenz können Herstellerartikelnummern, Produktionscodes, Seriennummern oder Materialkennzeichnungen vorhanden sein. Ein Gesamtfoto erleichtert die Unterscheidung.' },
      { question: 'Was bedeutet es, wenn eine OEM-Nummer ersetzt wurde?', answer: 'Fahrzeughersteller können Referenzen im Laufe der Zeit durch Nachfolgenummern ersetzen. Ob die neue Referenz für das konkrete Fahrzeug gilt, muss im passenden Teilezusammenhang geprüft werden.' },
      { question: 'Hilft ein Foto der Nummer bei der Anfrage?', answer: 'Ja. Ein scharfes Foto der Kennzeichnung und des gesamten Bauteils kann zusammen mit VIN oder Fahrzeugschein wichtige Hinweise für die persönliche Prüfung liefern.' },
    ],
    related: [
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
      { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
      { label: 'Original oder OEM?', path: '/original-oder-oem' },
      { label: 'FAQ', path: '/faq' },
    ],
    ctaText: 'OEM-Nummer per WhatsApp prüfen lassen',
    secondaryCta: { label: 'VIN-Prüfung ansehen', path: '/ersatzteile-mit-vin-pruefen' },
  },
  '/vin-nummer': {
    path: '/vin-nummer',
    group: 'ratgeber',
    eyebrow: 'Fahrzeugidentifikation',
    title: 'VIN und Fahrgestellnummer bei Ersatzteilen richtig nutzen',
    metaTitle: 'VIN & Fahrgestellnummer für Ersatzteile | TeilePilot24',
    metaDescription: 'Die 17-stellige VIN erklärt: Fundstellen, Feld E im Fahrzeugschein und warum Fahrzeugdaten oder OEM-Nummern bei der Teilesuche nötig sein können.',
    intro: 'Die VIN, auf Deutsch meist Fahrgestellnummer genannt, identifiziert ein Fahrzeug wesentlich genauer als Marke und Modellname. Für Ersatzteile ist sie ein wichtiger Ausgangspunkt – aber nicht in jeder Situation die einzige benötigte Angabe.',
    sections: [
      {
        heading: 'Was ist die VIN oder Fahrgestellnummer?',
        body: 'VIN steht für Vehicle Identification Number. Die 17 Zeichen bilden eine eindeutige Fahrzeug-Identifizierungsnummer, über die sich das Fahrzeug einer Baureihe und einer konkreten Produktion zuordnen lässt. Im deutschen Alltag sind VIN, Fahrzeug-Identifizierungsnummer und Fahrgestellnummer gebräuchliche Bezeichnungen für dieselbe Angabe.',
        paragraphs: [
          'Die Zeichenfolge ist keine Ersatzteilnummer. Sie beschreibt also nicht unmittelbar einen Filter, Sensor oder Bremssattel. Ihr Wert liegt darin, den richtigen Fahrzeugdatensatz für die weitere Teileprüfung zu öffnen und grobe Verwechslungen zwischen ähnlich bezeichneten Modellen zu vermeiden.',
        ],
      },
      {
        heading: 'Wo findet man die VIN?',
        body: 'In der Zulassungsbescheinigung Teil I steht die Fahrzeug-Identifizierungsnummer im Feld E. Am Fahrzeug selbst kann sie je nach Hersteller und Modell an unterschiedlichen Stellen angebracht sein, zum Beispiel sichtbar im unteren Bereich der Frontscheibe, an der Karosserie oder auf einem Typenschild.',
        paragraphs: [
          'Für eine Anfrage sollte die Nummer sorgfältig abgelesen werden, weil einzelne Zeichen leicht verwechselt werden können. Die VIN muss nicht auf einer frei zugänglichen Webseite veröffentlicht werden. Bei TeilePilot24 kann sie im direkten WhatsApp-Gespräch als Teil der Fahrzeuganfrage übermittelt werden.',
          'Am besten wird die Nummer direkt aus dem Dokument übernommen oder gut lesbar fotografiert. Eine verkürzte Fahrgestellnummer kann für eine genaue Katalogabfrage unzureichend sein, während ein Tippfehler zum Datensatz eines anderen Fahrzeugs führen kann.',
        ],
        links: [{ label: 'Fahrzeugschein-Felder im Überblick', path: '/fahrzeugschein-erklaert' }],
      },
      {
        heading: 'Warum ist die VIN genauer als Marke und Modell?',
        body: 'Bezeichnungen wie Golf, 3er oder C-Klasse umfassen viele Baujahre, Motoren und Ausstattungen. Selbst Leistung und Erstzulassung reichen nicht immer aus, weil technische Änderungen während eines Modellzeitraums auftreten können. Die VIN führt näher an Produktionszeitraum, Baureihe und fahrzeugspezifische Merkmale heran.',
        subsections: [
          {
            heading: 'Welche Unterschiede dadurch sichtbar werden können',
            body: 'Abhängig von den verfügbaren Hersteller- und Katalogdaten lassen sich Varianten bei Motorisierung, Getriebe, Karosserie oder Ausstattung besser eingrenzen. Welche Details tatsächlich abrufbar sind, hängt vom Fahrzeug und vom verwendeten Teilekatalog ab.',
          },
        ],
      },
      {
        heading: 'Bestimmt die VIN jedes Ersatzteil eindeutig?',
        body: 'Nein. Eine VIN ist eine sehr gute Grundlage, aber keine pauschale Garantie für jedes einzelne Bauteil. Fahrzeuge können innerhalb eines Datensatzes unterschiedliche Bremsanlagen, Achsausführungen, Lichtsysteme oder nachträglich veränderte Komponenten besitzen. Außerdem kann der Teilekatalog mehrere zulässige Varianten anzeigen.',
        bullets: [
          'Bei Bremsen können Achse, Bremssystem oder bei VAG-Fahrzeugen PR-Codes zusätzlich relevant sein.',
          'Bei Motor- und Antriebsteilen können Motorcode, Getriebeausführung oder Produktionsgrenzen benötigt werden.',
          'Bei Elektrik und Beleuchtung helfen Stecker, Ausstattung und Fotos des vorhandenen Teils.',
          'Bei einem bereits ausgebauten Teil kann eine lesbare OEM- oder Herstellerreferenz die Auswahl weiter eingrenzen.',
        ],
      },
      {
        heading: 'Welche Angaben können zusätzlich helfen?',
        body: 'Welche Ergänzung sinnvoll ist, hängt vom gesuchten Ersatzteil ab. Eine Werkstattnotiz kann die genaue Bezeichnung liefern, ein Foto zeigt Anschluss oder Bauform und die Nummer auf dem alten Teil gibt eine konkrete Referenz. Bei VW, Audi, Seat und Skoda können PR-Codes technische Ausstattungsvarianten unterscheiden.',
        paragraphs: [
          'Auch die genaue Einbauposition gehört zur Anfrage: Vorder- oder Hinterachse, links oder rechts sowie vor oder nach einem bestimmten Bauteil können verschiedene Artikel bedeuten. Solche Angaben stammen nicht aus der VIN selbst, sondern aus der konkreten Reparatursituation.',
        ],
        links: [
          { label: 'OEM-Nummer finden und nutzen', path: '/oem-nummer' },
          { label: 'PR-Code bei VAG verstehen', path: '/pr-code-vag' },
        ],
      },
      {
        heading: 'Wie TeilePilot24 mit der VIN arbeitet',
        body: 'Die VIN dient als Startpunkt für die persönliche Fahrzeugzuordnung. Dazu nennt der Kunde das benötigte Ersatzteil und ergänzt, soweit vorhanden, Fahrzeugschein-Daten, OEM-Nummer, Fotos oder Werkstatthinweise. TeilePilot24 gleicht die Informationen ab und fragt nach, wenn der Katalog mehr als eine plausible Variante ausweist.',
        paragraphs: [
          'Dieser Ablauf soll Fehlbestellungen reduzieren. Er ersetzt nicht die Prüfung von Einbauposition und Zustand durch eine Werkstatt und verspricht keine hundertprozentige Bestimmung allein über die Fahrgestellnummer.',
        ],
      },
    ],
    faq: [
      { question: 'Sind VIN und Fahrgestellnummer dasselbe?', answer: 'Ja. VIN ist die internationale Abkürzung; Fahrgestellnummer ist die geläufige deutsche Bezeichnung für die Fahrzeug-Identifizierungsnummer.' },
      { question: 'Wie viele Zeichen hat eine VIN?', answer: 'Die heute gebräuchliche VIN besteht aus 17 Zeichen. Für die Anfrage sollte die vollständige Zeichenfolge sorgfältig aus Feld E übernommen werden.' },
      { question: 'Wo steht die VIN im Fahrzeugschein?', answer: 'In der Zulassungsbescheinigung Teil I befindet sich die Fahrzeug-Identifizierungsnummer im Feld E.' },
      { question: 'Reicht die VIN für Bremsenteile immer aus?', answer: 'Nicht immer. Je nach Fahrzeug können Bremssystem, Achse, Abmessungen oder PR-Codes zusätzlich benötigt werden.' },
      { question: 'Muss ich meine VIN öffentlich eingeben?', answer: 'Nein. Für TeilePilot24 wird die VIN im direkten Anfrageprozess per WhatsApp übermittelt und nicht in ein öffentlich sichtbares Seitenformular geschrieben.' },
    ],
    related: [
      { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
      { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
      { label: 'PR-Code bei VAG', path: '/pr-code-vag' },
      { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
      { label: 'FAQ', path: '/faq' },
    ],
    ctaText: 'Ersatzteil mit VIN anfragen',
    secondaryCta: { label: 'Fahrzeugschein verstehen', path: '/fahrzeugschein-erklaert' },
  },
  '/fahrzeugschein-erklaert': {
    path: '/fahrzeugschein-erklaert',
    group: 'ratgeber',
    eyebrow: 'Zulassungsbescheinigung Teil I',
    title: 'Fahrzeugschein-Daten für die Ersatzteilsuche verstehen',
    metaTitle: 'Fahrzeugschein für Ersatzteile erklärt | TeilePilot24',
    metaDescription: 'Welche Fahrzeugschein-Daten helfen bei Ersatzteilen? VIN, HSN/TSN, Erstzulassung, Leistung, Hubraum und Kraftstoff für die Teilesuche erklärt.',
    intro: 'Die Zulassungsbescheinigung Teil I liefert wichtige Grunddaten für eine Ersatzteilanfrage. Welche Felder wirklich helfen, hängt jedoch vom gesuchten Bauteil ab – und HSN/TSN allein lösen nicht jede Variantenfrage.',
    sections: [
      {
        heading: 'Was ist die Zulassungsbescheinigung Teil I?',
        body: 'Die Zulassungsbescheinigung Teil I ist das Dokument, das im Alltag meist Fahrzeugschein genannt wird. Es enthält amtlich erfasste Angaben zur Fahrzeugidentität und zu technischen Merkmalen. Für die Ersatzteilsuche ist es deshalb eine verlässlichere Grundlage als eine frei erinnerte Modellbezeichnung.',
        paragraphs: [
          'Der Fahrzeugschein ist trotzdem kein Teilekatalog. Er nennt beispielsweise nicht automatisch die konkrete Bremsanlage, den verbauten Stecker oder die OE-Nummer eines Sensors. Seine Felder helfen zuerst dabei, das Fahrzeug einzugrenzen; anschließend entscheidet die Teileart, welche Zusatzinformation noch benötigt wird.',
        ],
      },
      {
        heading: 'Wichtige Felder für eine Ersatzteilanfrage',
        body: 'Die folgende Übersicht zeigt typische Angaben, die bei der Zuordnung helfen können. Nicht jede Anfrage benötigt jedes Feld. TeilePilot24 fragt gezielt nach den Informationen, die für das konkrete Bauteil relevant sind.',
        table: {
          headers: ['Feld', 'Was bedeutet es?', 'Wann ist es hilfreich?'],
          rows: [
            ['E', 'Fahrzeug-Identifizierungsnummer (VIN/Fahrgestellnummer)', 'Als Ausgangspunkt für die genaue Fahrzeug- und Variantenprüfung.'],
            ['2.1 / 2.2', 'Hersteller- und Typschlüsselnummer (HSN/TSN)', 'Für die erste Katalogsuche und grobe Zuordnung von Hersteller und Fahrzeugtyp.'],
            ['B', 'Datum der Erstzulassung', 'Als zeitlicher Hinweis; es ist nicht automatisch das Produktionsdatum.'],
            ['D.1–D.3', 'Marke, Typ, Variante und Handelsbezeichnung', 'Zum Abgleich der Fahrzeugbezeichnung und Karosserie- beziehungsweise Modellvariante.'],
            ['P.1', 'Hubraum', 'Zur Abgrenzung von Motorisierungen, wenn mehrere Aggregate angeboten wurden.'],
            ['P.2', 'Nennleistung in kW', 'Als ergänzender Hinweis auf die Motorvariante.'],
            ['P.3', 'Kraftstoffart oder Energiequelle', 'Zur Trennung etwa von Benzin-, Diesel-, Hybrid- oder Elektroausführungen.'],
          ],
        },
      },
      {
        heading: 'Warum HSN und TSN nicht immer ausreichen',
        body: 'HSN und TSN sind für viele Kataloge ein schneller Einstieg. Unter derselben Schlüsselung können jedoch mehrere Produktionszeiträume, Motor- oder Ausstattungsvarianten zusammengefasst sein. Bei Teilen, die von Achse, Bremssystem, Getriebe, Lichttechnik oder Abgasnorm abhängen, kann die Auswahl deshalb weiterhin mehrere Treffer enthalten.',
        paragraphs: [
          'Auch die Erstzulassung darf nicht mit dem genauen Baudatum gleichgesetzt werden. Ein Fahrzeug kann vor seiner ersten Zulassung produziert worden sein, und technische Umstellungen können innerhalb eines Kalenderjahres stattfinden. In solchen Fällen liefern VIN, Produktionsgrenzen oder eine Nummer auf dem Altteil die bessere Abgrenzung.',
        ],
        links: [{ label: 'Warum die VIN genauer eingrenzt', path: '/vin-nummer' }],
      },
      {
        heading: 'Welche Zusatzangaben hängen vom Ersatzteil ab?',
        body: 'Bei einem Filter kann die Motorvariante im Vordergrund stehen, bei einem Fahrwerksteil die Achse und Einbauseite. Elektrische Komponenten unterscheiden sich häufig über Anschluss, Leistung oder Ausstattung. Für Bremsenteile können Bremssystem, Scheibengröße oder bei VAG-Fahrzeugen PR-Codes relevant sein.',
        bullets: [
          'Fotos des alten Teils zeigen Bauform, Anschluss und sichtbare Kennzeichnungen.',
          'Eine OEM- oder Herstellerreferenz bietet einen konkreten Abgleichspunkt.',
          'Werkstattnotizen können Einbauort, Fehlercode oder benötigte Teilegruppe präzisieren.',
          'PR-Codes helfen bei VW, Audi, Seat und Skoda, bestimmte Ausstattungsvarianten zu unterscheiden.',
        ],
        links: [
          { label: 'OEM-Nummer richtig nutzen', path: '/oem-nummer' },
          { label: 'PR-Code bei VAG', path: '/pr-code-vag' },
        ],
      },
      {
        heading: 'Welche Angaben sollten geteilt werden?',
        body: 'Für die Ersatzteilprüfung werden die relevanten Fahrzeugfelder benötigt, nicht automatisch jedes persönliche Detail des Dokuments. Wichtig sind eine lesbare VIN und die technischen Angaben, die zur Anfrage passen. Nicht benötigte persönliche Angaben können vor dem Versand abgedeckt werden, solange die erforderlichen Fahrzeugdaten erkennbar bleiben.',
        paragraphs: [
          'Wer kein Dokumentfoto senden möchte, kann die relevanten Felder auch sorgfältig übertragen. Bei langen Nummern sollte besonders auf mögliche Zeichenverwechslungen geachtet werden. TeilePilot24 meldet sich, wenn eine Angabe fehlt oder nicht eindeutig lesbar ist.',
        ],
      },
      {
        heading: 'So läuft die Anfrage per WhatsApp ab',
        body: 'Nennen Sie zuerst das gesuchte Ersatzteil und senden Sie die verfügbaren Fahrzeugdaten. TeilePilot24 ordnet VIN, HSN/TSN, Motor- und Zulassungsangaben ein. Falls der Katalog mehrere Varianten zeigt, werden gezielt OEM-Nummer, Foto, Einbauposition oder ein weiterer technischer Hinweis angefragt.',
        subsections: [
          {
            heading: 'Von den Fahrzeugdaten zum Angebot',
            body: 'Nach dem persönlichen Abgleich erhalten Sie ein passendes, unverbindliches Ersatzteil-Angebot. Die Prüfung soll Fehlbestellungen reduzieren; bei offenen technischen Varianten wird nicht allein anhand des Fahrzeugscheins geraten.',
          },
        ],
      },
    ],
    faq: [
      { question: 'Welches Fahrzeugschein-Feld enthält die Fahrgestellnummer?', answer: 'Die Fahrzeug-Identifizierungsnummer steht in der Zulassungsbescheinigung Teil I im Feld E.' },
      { question: 'Welche Felder sind HSN und TSN?', answer: 'Die HSN steht im Feld 2.1, die TSN im Feld 2.2. Beide dienen als Schlüssel für die erste Fahrzeugzuordnung.' },
      { question: 'Ist die Erstzulassung dasselbe wie das Baujahr?', answer: 'Nein. Das Datum in Feld B zeigt die erste Zulassung. Das Fahrzeug kann früher produziert worden sein, weshalb bei Teilegrenzen zusätzliche Angaben nötig sein können.' },
      { question: 'Muss ich den kompletten Fahrzeugschein senden?', answer: 'Für die Teileprüfung zählen die relevanten Fahrzeug- und Technikfelder. Nicht benötigte persönliche Angaben können abgedeckt werden, sofern die notwendigen Daten lesbar bleiben.' },
      { question: 'Warum fragt TeilePilot24 trotz Fahrzeugschein nach einem Foto des Teils?', answer: 'Der Fahrzeugschein enthält keine vollständige Bauteilliste. Ein Foto kann Anschluss, Bauform, Einbauposition oder eine vorhandene Teilenummer zeigen.' },
    ],
    related: [
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
      { label: 'PR-Code bei VAG', path: '/pr-code-vag' },
      { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
      { label: 'FAQ', path: '/faq' },
    ],
    ctaText: 'Fahrzeugdaten per WhatsApp senden',
    secondaryCta: { label: 'Häufige Fragen ansehen', path: '/faq' },
  },
  '/pr-code-vag': {
    path: '/pr-code-vag',
    group: 'ratgeber',
    eyebrow: 'VW · Audi · Seat · Skoda',
    title: 'PR-Codes bei VAG-Ersatzteilen richtig einordnen',
    metaTitle: 'PR-Code bei VW, Audi, Seat & Skoda erklärt | TeilePilot24',
    metaDescription: 'PR-Codes bei VW, Audi, Seat und Skoda erklärt: Fundstellen, Unterschied zur VIN und Bedeutung für Bremsen, Fahrwerk und Ausstattung bei Ersatzteilen.',
    intro: 'PR-Codes beschreiben bei Fahrzeugen des Volkswagen-Konzerns bestimmte Ausstattungs- und Technikmerkmale. Bei Ersatzteilen können sie Varianten sichtbar machen, die über Modell, Baujahr oder Motor allein nicht eindeutig werden.',
    sections: [
      {
        heading: 'Was ist ein PR-Code?',
        body: 'PR-Codes sind kurze alphanumerische Ausstattungscodes, die bei VW, Audi, Seat und Skoda zur Beschreibung der ab Werk dokumentierten Fahrzeugkonfiguration verwendet werden. Jeder Code steht innerhalb der Herstellerdaten für ein bestimmtes Merkmal oder eine technische Ausführung.',
        paragraphs: [
          'Eine PR-Code-Liste ist keine universelle Ersatzteilliste. Erst im Zusammenhang mit Fahrzeug, Teilegruppe und Kataloginformation wird er für die Suche nutzbar. Deshalb werden hier bewusst keine erfundenen Beispielcodes oder pauschalen Code-zu-Teil-Zuordnungen angegeben.',
          'Auch die Konzernzugehörigkeit allein reicht nicht: Ein technisch verwandtes Modell kann eine andere Kombination aus Achslast, Bremse, Fahrwerk oder Ausstattung besitzen. Der Code wird deshalb immer im Datensatz des konkret angefragten Fahrzeugs gelesen.',
        ],
      },
      {
        heading: 'Warum können PR-Codes bei Ersatzteilen wichtig sein?',
        body: 'Zwei Fahrzeuge derselben Modellreihe und desselben Baujahrs können ab Werk unterschiedliche technische Pakete besitzen. Ein Katalog kann deshalb mehrere Bremsscheiben, Belagformen, Stoßdämpfer oder Fahrwerksausführungen ausweisen. Der passende PR-Code hilft, die dokumentierte Ausstattung gegen diese Varianten zu prüfen.',
        subsections: [
          {
            heading: 'Bremsen und Fahrwerk als typische Variantenbereiche',
            body: 'Besonders bei Bremsen und Fahrwerk spielen Achse, Leistungsstufe, Ausstattungspaket oder technische Ausführung zusammen. Der PR-Code ersetzt dabei weder Abmessungen noch Einbauposition, kann aber den entscheidenden Hinweis liefern, welche Katalogvariante zum Fahrzeug gehört.',
          },
        ],
      },
      {
        heading: 'Wo findet man PR-Codes?',
        body: 'Je nach Modell und Baujahr können PR-Codes auf einem Fahrzeugdatenträger, in Service- oder Wartungsunterlagen oder in fahrzeugbezogenen Hersteller- und Werkstattdaten stehen. Der Aufkleber kann mehrere Codes enthalten; die genaue Fundstelle ist nicht bei jedem Fahrzeug identisch.',
        paragraphs: [
          'Ein gut lesbares Foto des gesamten Datenträgers ist hilfreicher als ein einzeln abgeschriebener Code ohne Zusammenhang. Wenn kein Aufkleber auffindbar ist, kann die VIN als Ausgangspunkt dienen, um die verfügbare Fahrzeugkonfiguration in passenden Katalogdaten zu prüfen.',
          'Für die Anfrage ist außerdem wichtig, welche Teilegruppe geprüft werden soll. Derselbe Fahrzeugdatenträger enthält viele Ausstattungsmerkmale; relevant sind nur die Codes, die der Teilekatalog für das gesuchte Bauteil als Unterscheidung verwendet.',
        ],
      },
      {
        heading: 'PR-Code und VIN erfüllen unterschiedliche Aufgaben',
        body: 'Die VIN identifiziert das konkrete Fahrzeug und führt zu den verfügbaren Fahrzeugstammdaten. Ein PR-Code beschreibt dagegen ein einzelnes Ausstattungs- oder Technikmerkmal innerhalb der dokumentierten Konfiguration. Beide Informationen ergänzen sich, sind aber nicht austauschbar.',
        bullets: [
          'VIN: Ausgangspunkt für Fahrzeug, Baureihe und Produktionszuordnung.',
          'PR-Code: Hinweis auf eine bestimmte werkseitige Ausstattungs- oder Technikvariante.',
          'OEM-Nummer: Referenz zu einem konkreten Bauteil oder einer Teilefamilie.',
          'Foto oder Maß: praktische Kontrolle bei sichtbaren oder ausgebauten Komponenten.',
        ],
        links: [
          { label: 'VIN und Fahrgestellnummer erklärt', path: '/vin-nummer' },
          { label: 'OEM-Nummer richtig nutzen', path: '/oem-nummer' },
        ],
      },
      {
        heading: 'Wie geht es ohne bekannten PR-Code weiter?',
        body: 'Eine Anfrage ist auch ohne PR-Code möglich. Senden Sie VIN oder die relevanten Fahrzeugschein-Daten, nennen Sie die gesuchte Teilegruppe und ergänzen Sie vorhandene Fotos oder Nummern. TeilePilot24 prüft zunächst die erreichbaren Fahrzeug- und Katalogdaten und fragt nur dann nach weiteren Merkmalen, wenn Varianten offenbleiben.',
        paragraphs: [
          'Bei bereits ausgebauten Brems- oder Fahrwerksteilen können außerdem Abmessungen, Einbauachse und eine lesbare Herstellerreferenz helfen. Es wird nicht aus einem vermuteten Code auf ein Bauteil geschlossen.',
          'Falls Unterlagen und Aufkleber fehlen, kann auch eine Werkstatt die relevanten Merkmale am Fahrzeug aufnehmen. Das ist besonders sinnvoll, wenn Komponenten nachgerüstet oder im Laufe des Fahrzeuglebens bereits ersetzt wurden.',
        ],
      },
      {
        heading: 'PR-Code-Prüfung bei TeilePilot24',
        body: 'TeilePilot24 verbindet den PR-Code mit VIN, Fahrzeugdaten und der konkreten Ersatzteilanfrage. Die persönliche Prüfung soll ähnliche VAG-Varianten besser trennen und das Risiko einer Fehlbestellung reduzieren. Wenn die vorhandenen Angaben keine eindeutige Auswahl erlauben, folgt eine gezielte Rückfrage statt einer pauschalen Zusage.',
        links: [
          { label: 'VW Ersatzteile', path: '/vw-ersatzteile' },
          { label: 'Audi Ersatzteile', path: '/audi-ersatzteile' },
          { label: 'Seat Ersatzteile', path: '/seat-ersatzteile' },
          { label: 'Skoda Ersatzteile', path: '/skoda-ersatzteile' },
        ],
      },
    ],
    faq: [
      { question: 'Ist ein PR-Code dasselbe wie die VIN?', answer: 'Nein. Die VIN identifiziert das Fahrzeug. PR-Codes beschreiben einzelne Ausstattungs- oder Technikmerkmale der dokumentierten Fahrzeugkonfiguration.' },
      { question: 'Braucht man den PR-Code für jedes VAG-Ersatzteil?', answer: 'Nein. Er ist besonders dann hilfreich, wenn der Teilekatalog Varianten nach Ausstattung oder technischer Ausführung unterscheidet.' },
      { question: 'Wo finde ich den PR-Code bei VW oder Audi?', answer: 'Je nach Fahrzeug kann er auf einem Fahrzeugdatenträger, in Serviceunterlagen oder in Hersteller- beziehungsweise Werkstattdaten stehen.' },
      { question: 'Kann ich ohne PR-Code Ersatzteile anfragen?', answer: 'Ja. VIN, Fahrzeugschein, Teilebeschreibung, Fotos und vorhandene Nummern bilden einen guten Start. Falls nötig, fragt TeilePilot24 weitere Merkmale ab.' },
      { question: 'Reicht ein einzelner PR-Code für die Bremsenbestellung?', answer: 'Nicht automatisch. Achse, konkrete Teileart, Fahrzeugdaten und gegebenenfalls Abmessungen oder weitere Ausstattungsinformationen müssen zusammenpassen.' },
    ],
    related: [
      { label: 'VW Ersatzteile', path: '/vw-ersatzteile' },
      { label: 'Audi Ersatzteile', path: '/audi-ersatzteile' },
      { label: 'Seat Ersatzteile', path: '/seat-ersatzteile' },
      { label: 'Skoda Ersatzteile', path: '/skoda-ersatzteile' },
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'FAQ', path: '/faq' },
    ],
    ctaText: 'VAG-Ersatzteil prüfen lassen',
    secondaryCta: { label: 'VIN-Prüfung ansehen', path: '/ersatzteile-mit-vin-pruefen' },
  },
  '/ersatzteile-mit-vin-pruefen': {
    path: '/ersatzteile-mit-vin-pruefen',
    group: 'ratgeber',
    eyebrow: 'Persönliche VIN-Prüfung',
    title: 'Ersatzteile mit VIN und Fahrzeugdaten prüfen lassen',
    metaTitle: 'Ersatzteile mit VIN persönlich prüfen | TeilePilot24',
    metaDescription: 'Fahrzeugschein oder VIN senden, Ersatzteil nennen und persönlich prüfen lassen. Mit OEM-/PR-Code-Abgleich zum unverbindlichen Angebot per WhatsApp.',
    intro: 'Marke, Modell und Baujahr führen bei Autoteilen oft zu mehreren Varianten. TeilePilot24 verbindet VIN oder Fahrzeugschein mit vorhandenen OEM- und Ausstattungsangaben und erstellt nach persönlicher Prüfung ein passendes Angebot.',
    sections: [
      {
        heading: 'Das Problem: Ein Modell kann mehrere Teilevarianten haben',
        body: 'Ein Modellname fasst unterschiedliche Motoren, Getriebe, Achsen, Produktionszeiträume und Ausstattungspakete zusammen. Selbst Fahrzeuge mit gleicher Leistung und Erstzulassung können bei Bremsen, Sensoren, Beleuchtung oder Fahrwerk andere Komponenten benötigen. Eine reine Trefferliste nach Marke und Modell bleibt deshalb häufig zu breit.',
        paragraphs: [
          'Optisch ähnliche Teile sind ebenfalls kein sicherer Maßstab. Stecker, Abmessungen, Einbauposition oder technische Freigaben können abweichen. Genau an diesem Punkt setzt die persönliche Prüfung an: vorhandene Hinweise werden zusammengeführt, bevor ein Angebot erstellt wird.',
        ],
      },
      {
        heading: 'Die Lösung: Fahrzeug- und Teiledaten gemeinsam abgleichen',
        body: 'Die VIN oder die relevanten Angaben aus dem Fahrzeugschein bilden den Start. Je nach Teileart kommen eine OEM-Nummer, PR-Codes, Fotos, Einbauachse, Seite oder Werkstattinformationen hinzu. Keine dieser Angaben wird pauschal als alleinige Garantie behandelt; ihr Zusammenspiel macht die Auswahl belastbarer.',
        paragraphs: [
          'So bleibt die Anfrage auch für Nutzer ohne technisches Vorwissen übersichtlich: Vorhandene Daten werden zuerst eingeordnet, fehlende Details anschließend gezielt erfragt. Es ist nicht nötig, vorab selbst alle Varianten eines Teilekatalogs zu verstehen.',
        ],
        links: [
          { label: 'VIN richtig einordnen', path: '/vin-nummer' },
          { label: 'OEM-Nummer finden', path: '/oem-nummer' },
          { label: 'Fahrzeugschein verstehen', path: '/fahrzeugschein-erklaert' },
        ],
      },
      {
        heading: 'So läuft die Ersatzteilanfrage ab',
        body: 'Für den Start sind keine Teilekatalog-Kenntnisse erforderlich. Entscheidend ist, das benötigte Bauteil möglichst klar zu benennen und die vorhandenen Informationen lesbar zu senden.',
        subsections: [
          { heading: '1. Fahrzeugdaten senden', body: 'Senden Sie die VIN oder relevante Fahrzeugschein-Felder per WhatsApp. Nicht benötigte persönliche Angaben müssen für die technische Prüfung nicht sichtbar sein.' },
          { heading: '2. Benötigtes Ersatzteil nennen', body: 'Beschreiben Sie, welches Teil gesucht wird und für welche Position es benötigt wird. Fotos oder eine Werkstattnotiz können die Bezeichnung präzisieren.' },
          { heading: '3. Persönliche Prüfung', body: 'TeilePilot24 gleicht Fahrzeugdatensatz, mögliche Varianten und vorhandene OEM-, PR-Code- oder Bauteilhinweise ab. Offene Punkte werden gezielt nachgefragt.' },
          { heading: '4. Passendes Angebot erhalten', body: 'Nach der Prüfung erhalten Sie ein unverbindliches Ersatzteil-Angebot für die ermittelte Variante. Eine Bestellung entsteht nicht allein durch die Anfrage.' },
        ],
      },
      {
        heading: 'Welche Zusatzinformation ist wann sinnvoll?',
        body: 'Der nötige Detailgrad hängt vom Bauteil ab. Bei einem Ölfilter steht meist die genaue Motorvariante im Mittelpunkt. Bei Bremsen können Achse, Bremssystem und PR-Code hinzukommen. Elektrische Teile benötigen häufig Angaben zu Stecker, Leistung oder Ausstattung.',
        bullets: [
          'OEM- oder Herstellerreferenz vom alten Teil, von der Verpackung oder aus Werkstattunterlagen.',
          'Gut lesbare Fotos von Kennzeichnung, Anschluss und gesamter Bauform.',
          'Einbauort wie Vorderachse, Hinterachse, links oder rechts, sofern relevant.',
          'PR-Codes bei VW, Audi, Seat und Skoda, wenn der Katalog danach unterscheidet.',
          'Werkstatthinweis oder Diagnoseangabe zur eindeutigen Benennung der benötigten Teilegruppe.',
        ],
      },
      {
        heading: 'Manuelle Kontrolle reduziert Risiken – ohne absolute Garantie',
        body: 'Ziel des Abgleichs ist, typische Fehlbestellungen durch zu grobe Fahrzeugangaben oder verwechselte Teilenummern zu vermeiden. Eine persönliche Kontrolle kann Varianten erkennen und fehlende Angaben sichtbar machen. Sie kann jedoch keine hundertprozentige Fehlerfreiheit versprechen, insbesondere wenn Fahrzeugteile nachträglich verändert wurden oder Herstellerdaten mehrere Möglichkeiten offenlassen.',
        paragraphs: [
          'Vor dem Einbau sollten Lieferung, Teilenummer, Ausführung und Einbauposition nochmals mit dem ausgebauten Teil beziehungsweise den Werkstattangaben verglichen werden. Bei sicherheitsrelevanten oder technisch komplexen Arbeiten ist die fachgerechte Prüfung und Montage entscheidend.',
        ],
      },
      {
        heading: 'Warum TeilePilot24?',
        body: 'Die Anfrage verbindet einen einfachen WhatsApp-Kanal mit persönlicher Teileprüfung. Statt nur eine allgemeine Modellliste zu zeigen, werden VIN, Fahrzeugdaten und vorhandene OEM- oder PR-Code-Hinweise auf die konkrete Anfrage bezogen.',
        bullets: [
          'Persönliche Prüfung der übermittelten Fahrzeug- und Teileangaben.',
          'Direkte Rückfragen und Fotoaustausch über WhatsApp.',
          'VIN- und OEM-Abgleich sowie PR-Code-Berücksichtigung, wenn sie für die Variante relevant sind.',
          'Unverbindliches Angebot nach der Prüfung.',
        ],
        links: [{ label: 'Antworten zum Ablauf im FAQ', path: '/faq' }],
      },
    ],
    faq: [
      { question: 'Kann TeilePilot24 jedes Ersatzteil allein über die VIN finden?', answer: 'Nicht immer. Je nach Teilegruppe können OEM-Nummer, PR-Code, Einbauposition, Foto, Abmessung oder Werkstattangaben zusätzlich nötig sein.' },
      { question: 'Welche Daten sollte ich in der ersten Nachricht senden?', answer: 'Nennen Sie das gesuchte Teil und senden Sie VIN oder relevante Fahrzeugschein-Daten. Vorhandene Teilenummern und Fotos können direkt ergänzt werden.' },
      { question: 'Ist die VIN-Prüfung eine Passgarantie?', answer: 'Nein. Die persönliche Prüfung soll das Risiko einer Fehlbestellung reduzieren, kann aber keine absolute Garantie für jede technische oder nachträglich veränderte Fahrzeugausführung geben.' },
      { question: 'Was passiert, wenn mehrere Ersatzteile infrage kommen?', answer: 'TeilePilot24 fragt nach den Merkmalen, die die Varianten unterscheiden, beispielsweise Achse, Stecker, PR-Code, OEM-Nummer oder Foto des alten Teils.' },
      { question: 'Ist das Angebot verbindlich?', answer: 'Die Ersatzteilanfrage führt zu einem unverbindlichen Angebot. Details zu Teil, Ausführung und Lieferung können vor einer Bestellung geprüft werden.' },
    ],
    related: [
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
      { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
      { label: 'PR-Code bei VAG', path: '/pr-code-vag' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Teileübersicht', path: '/teile' },
    ],
    ctaText: 'Ersatzteil persönlich prüfen lassen',
    secondaryCta: { label: 'Häufige Fragen ansehen', path: '/faq' },
  },
}

function guidePage(guide: (typeof guideTopics)[number]): SeoPageData {
  const detailedPage = detailedGuidePages[guide.path]
  if (detailedPage) return detailedPage

  return {
    path: guide.path,
    group: 'ratgeber',
    eyebrow: 'Ratgeber',
    title: guide.title,
    metaTitle: `${guide.title} | TeilePilot24 Ratgeber`,
    metaDescription: `${guide.topic} verständlich erklärt. TeilePilot24 zeigt, welche Fahrzeugdaten bei der Ersatzteil-Suche wichtig sind und wie die WhatsApp Anfrage funktioniert.`,
    intro: `${guide.topic} ist für die Suche nach passenden Autoersatzteilen oft entscheidend. ${guide.angle}`,
    sections: [
      {
        heading: 'Warum dieses Thema wichtig ist',
        body: `Bei Ersatzteilen zählt nicht nur der Fahrzeugname. Modelljahr, Motorisierung, Ausstattung, Produktionszeitraum und verbaute Systeme können die Auswahl verändern. ${guide.angle} Wer diese Angaben sauber nutzt, reduziert Fehlbestellungen und bekommt eine bessere Grundlage für die Anfrage.`,
      },
      {
        heading: 'Welche Daten in der Praxis helfen',
        body: 'Besonders hilfreich sind Fahrzeugschein, VIN, HSN/TSN, vorhandene OEM-Nummern und Fotos vom alten Teil. Bei bestimmten Komponenten kommen PR-Codes, Achslasten, Steckerform, Lichttechnik, Abgasnorm oder Batterieparameter hinzu.',
      },
      {
        heading: 'Wie TeilePilot24 die Angaben einordnet',
        body: 'TeilePilot24 betrachtet die Daten nicht isoliert. Eine Nummer kann zu mehreren Varianten führen, wenn Baujahr oder Ausstattung nicht passen. Umgekehrt kann ein Fahrzeugschein zu breit sein, wenn ein Fahrzeug während einer Modellpflege geändert wurde.',
      },
      {
        heading: 'Typische Fehler bei der Ersatzteil-Suche',
        body: 'Viele Fehlkäufe entstehen, weil ein Ergebnis optisch richtig wirkt oder ein Shop mehrere Varianten als passend markiert. Auch kopierte Teilenummern, unvollständige Modellangaben oder unscharfe Fotos können Probleme verursachen.',
      },
      {
        heading: 'So starten Sie ohne Vorwissen',
        body: 'Senden Sie den Fahrzeugschein per WhatsApp und schreiben Sie dazu, welches Teil benötigt wird. Wenn vorhanden, ergänzen Sie VIN, OEM-Nummer, Fotos vom alten Teil oder eine Werkstattnotiz. TeilePilot24 sortiert die Informationen und meldet sich mit Rückfragen oder einer passenden Richtung.',
      },
    ],
    faq: [
      { question: 'Wie finde ich das richtige Ersatzteil?', answer: 'Starten Sie mit Fahrzeugschein, VIN oder OEM-Nummer. Je nach Teil helfen zusätzlich Fotos, Fehlercodes oder Hinweise der Werkstatt.' },
      { question: 'Was ist eine VIN?', answer: 'Die VIN ist die Fahrzeug-Identifikationsnummer. Sie wird auch Fahrgestellnummer genannt und hilft, ein Fahrzeug genauer zuzuordnen.' },
      { question: 'Wo finde ich die VIN?', answer: 'Die VIN steht im Fahrzeugschein und häufig auch am Fahrzeug, zum Beispiel im Bereich der Frontscheibe oder an der Karosserie.' },
      { question: 'Was ist eine OEM-Nummer?', answer: 'Eine OEM-Nummer ist eine Herstellerreferenz für ein Teil. Sie kann die Suche erleichtern, ersetzt aber nicht immer die Prüfung der Fahrzeugdaten.' },
      { question: 'Kann ich Teile per WhatsApp anfragen?', answer: 'Ja. Fahrzeugschein, VIN, OEM-Nummer und Fotos können direkt per WhatsApp gesendet werden.' },
    ],
    related: uniqueLinks([
      { label: 'Ersatzteile per WhatsApp', path: '/ersatzteile-per-whatsapp' },
      { label: 'Fahrzeugschein oder VIN', path: '/fahrzeugschein-oder-vin' },
      { label: 'OEM-Nummer finden', path: '/oem-nummer-finden' },
      { label: 'Ersatzteile mit VIN prüfen', path: '/ersatzteile-mit-vin-pruefen' },
      ...brandLinks.slice(0, 4),
      ...partLinks.slice(0, 4),
      ...commonLinks,
    ], guide.path, 8),
    ctaText: 'Ersatzteil per WhatsApp prüfen lassen',
  }
}

function faqPage(): SeoPageData {
  return {
    path: '/faq',
    group: 'ratgeber',
    eyebrow: 'FAQ Center',
    title: 'Häufige Fragen zu Ersatzteilen, VIN, OEM und TeilePilot24',
    metaTitle: 'FAQ zu Ersatzteilen, VIN, OEM & WhatsApp-Anfrage | TeilePilot24',
    metaDescription: 'Antworten auf häufige Fragen zu Ersatzteilen, VIN, OEM-Nummern, Fahrzeugschein, WhatsApp-Anfragen und der Prüfung passender Autoteile bei TeilePilot24.',
    intro: 'Hier finden Sie praktische Antworten rund um Ersatzteil-Auswahl, Fahrzeugschein, VIN, OEM-Nummern, WhatsApp Anfrage und den Ablauf bei TeilePilot24.',
    sections: [
      {
        heading: 'FAQ als schneller Einstieg',
        body: 'Die Fragen sind nach Themen sortiert, damit Sie schnell verstehen, welche Daten für eine sichere Ersatzteil-Anfrage wichtig sind.',
      },
      {
        heading: 'Warum diese Fragen wichtig sind',
        body: 'Viele Fehlkäufe entstehen durch kleine Unterschiede bei Motor, Ausstattung, Achse, Stecker oder Produktionszeitraum. Gute Daten machen die Prüfung deutlich genauer.',
      },
    ],
    faq: faqItems,
    faqCategories,
    related: uniqueLinks([
      { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
      { label: 'Ersatzteile per WhatsApp', path: '/ersatzteile-per-whatsapp' },
      { label: 'Markenübersicht', path: '/marken' },
      { label: 'Teileübersicht', path: '/teile' },
      { label: 'Ratgeber', path: '/ratgeber' },
    ], '/faq', 12),
    ctaText: 'Frage per WhatsApp stellen',
  }
}

function advancedGuidePage([path, title, category]: (typeof advancedGuideTopics)[number]): SeoPageData {
  const categoryRelated =
    category === 'Bremsen'
      ? partLinks.filter((link) => ['Bremsbeläge', 'Bremsscheiben', 'ABS-Sensor'].includes(link.label))
      : category === 'Filter'
        ? partLinks.filter((link) => ['Ölfilter', 'Luftfilter', 'Innenraumfilter'].includes(link.label))
        : category === 'Sensoren und Elektrik'
          ? partLinks.filter((link) => ['Scheinwerfer', 'Batterie', 'Lichtmaschine', 'Anlasser', 'Lambdasonde', 'ABS-Sensor'].includes(link.label))
          : category === 'Motor, Kühlung und Abgas'
            ? partLinks.filter((link) => ['Wasserpumpe', 'Zahnriemensatz', 'Turbolader', 'AGR-Ventil', 'DPF / Dieselpartikelfilter'].includes(link.label))
            : category === 'Fahrwerk und Antrieb'
              ? partLinks.filter((link) => ['Stoßdämpfer', 'Querlenker', 'Radlager', 'Kupplungssatz'].includes(link.label))
              : category === 'Marken-Ratgeber'
                ? brandLinks
                : []

  return {
    path,
    group: 'ratgeber',
    eyebrow: category,
    title,
    metaTitle: `${title} | TeilePilot24 Ratgeber`,
    metaDescription: `${title}. Verständlich erklärt: benötigte Fahrzeugdaten, typische Fehler und wie TeilePilot24 bei der Ersatzteil-Anfrage hilft.`,
    intro: `${title} ist ein praktischer Ratgeber für Autofahrer in Deutschland, die ein Ersatzteil nicht nach Vermutung auswählen möchten.`,
    sections: [
      {
        heading: 'Warum die genaue Prüfung wichtig ist',
        body: 'Bei Autoteilen entscheidet oft ein kleines Detail über die passende Variante. Motorisierung, Ausstattung, Bauzeitraum, Achse, Steckerform oder Abgasnorm können dazu führen, dass zwei optisch ähnliche Teile technisch nicht austauschbar sind.',
      },
      {
        heading: 'Welche Daten benötigt werden',
        body: 'Für eine sichere Anfrage helfen Fahrzeugschein, VIN oder Fahrgestellnummer, vorhandene OEM-Nummern und Fotos vom alten Teil. Je nach Thema sind zusätzlich PR-Code, Motorcode, Einbauseite, Fehlercode oder Werkstatthinweise sinnvoll.',
      },
      {
        heading: 'Typische Fehler',
        body: 'Häufige Fehler entstehen durch reine Modellsuche, unvollständige Teilenummern, schlecht lesbare Fotos oder die Annahme, dass Baujahr und Modellname allein ausreichen. Besonders bei Bremsen, Sensoren, Elektrik, Motor- und Fahrwerksteilen können mehrere Varianten möglich sein.',
      },
      {
        heading: 'Wie VIN, OEM und Fahrzeugschein helfen',
        body: 'Der Fahrzeugschein liefert geprüfte Grunddaten. Die VIN hilft, Modell- und Ausstattungsdetails besser einzugrenzen. Eine OEM-Nummer kann eine konkrete Referenz geben, sollte aber immer mit dem Fahrzeug abgeglichen werden.',
      },
      {
        heading: 'Wie TeilePilot24 unterstützt',
        body: 'TeilePilot24 prüft die gesendeten Angaben, gleicht mögliche Varianten ab und fragt nach, wenn ein entscheidendes Detail fehlt. Ziel ist eine nachvollziehbare Auswahl, keine ungeprüfte Empfehlung nach Bauchgefühl.',
      },
    ],
    faq: [
      { question: 'Welche Daten sollte ich für dieses Thema senden?', answer: 'Fahrzeugschein oder VIN sind ein guter Start. OEM-Nummer, Fotos und Werkstatthinweise helfen zusätzlich.' },
      { question: 'Warum reicht eine reine Modellsuche nicht immer?', answer: 'Ein Modell kann je nach Motor, Ausstattung, Achse oder Bauzeitraum mehrere Teilevarianten haben.' },
      { question: 'Kann ich dazu per WhatsApp anfragen?', answer: 'Ja. Senden Sie die vorhandenen Daten und beschreiben Sie kurz, welches Ersatzteil gesucht wird.' },
      { question: 'Was passiert bei unklaren Angaben?', answer: 'Dann fragt TeilePilot24 nach den fehlenden Details, statt eine unsichere Auswahl zu treffen.' },
    ],
    related: uniqueLinks([
      ...categoryRelated,
      { label: 'FAQ', path: '/faq' },
      { label: 'VIN-Nummer erklärt', path: '/vin-nummer' },
      { label: 'OEM-Nummer erklärt', path: '/oem-nummer' },
      { label: 'Fahrzeugschein erklärt', path: '/fahrzeugschein-erklaert' },
      { label: 'Ersatzteile per WhatsApp', path: '/ersatzteile-per-whatsapp' },
      { label: 'Teileübersicht', path: '/teile' },
      { label: 'Markenübersicht', path: '/marken' },
    ], path, 12),
    ctaText: 'Ersatzteil per WhatsApp prüfen lassen',
  }
}

function overviewPage(group: SeoPageGroup, title: string, intro: string): SeoPageData {
  const label = group === 'marken' ? 'Markenübersicht' : group === 'teile' ? 'Teileübersicht' : 'Ratgeberübersicht'
  const links = group === 'marken' ? brandLinks : group === 'teile' ? partLinks : [...guideLinks, ...advancedGuideLinks]
  const linkGroups =
    group === 'marken'
      ? [{ title: 'Automarken', links: brandLinks }]
      : group === 'teile'
        ? [
            { title: 'Bremsen', links: partLinks.filter((link) => ['Bremsbeläge', 'Bremsscheiben'].includes(link.label)) },
            { title: 'Filter', links: partLinks.filter((link) => ['Ölfilter', 'Luftfilter', 'Innenraumfilter'].includes(link.label)) },
            { title: 'Elektrik und Sensoren', links: partLinks.filter((link) => ['Scheinwerfer', 'Batterie', 'Lichtmaschine', 'Anlasser', 'Lambdasonde', 'ABS-Sensor'].includes(link.label)) },
            { title: 'Motor, Kühlung und Abgas', links: partLinks.filter((link) => ['Wasserpumpe', 'Zahnriemensatz', 'Turbolader', 'AGR-Ventil', 'DPF / Dieselpartikelfilter'].includes(link.label)) },
            { title: 'Fahrwerk und Antrieb', links: partLinks.filter((link) => ['Stoßdämpfer', 'Querlenker', 'Radlager', 'Kupplungssatz'].includes(link.label)) },
          ]
        : [
            ...['Grundlagen', 'VIN, OEM und Fahrzeugschein', 'Bremsen', 'Filter', 'Sensoren und Elektrik', 'Motor, Kühlung und Abgas', 'Fahrwerk und Antrieb', 'Marken-Ratgeber', 'Anfrage per WhatsApp'].map((category) => ({
              title: category,
              links: advancedGuideTopics.filter((topic) => topic[2] === category).map(([path, guideTitle]) => ({ label: guideTitle, path })),
            })),
            { title: 'Basis-Ratgeber', links: guideLinks },
          ]

  return {
    path: `/${group}`,
    group,
    eyebrow: label,
    title,
    metaTitle: `${title} | TeilePilot24`,
    metaDescription: `${intro} Finden Sie passende Einstiegsseiten, Ratgeber und WhatsApp Hilfe für Autoersatzteile.`,
    intro,
    sections: [
      {
        heading: 'Struktur für bessere Orientierung',
        body: 'Diese Übersicht bündelt wichtige Inhalte von TeilePilot24 in einer klaren Struktur. Eigene Seiten zu Marken, Teilekategorien und Ratgeberthemen helfen Besuchern, schneller den richtigen Einstieg zu finden.',
      },
      {
        heading: 'Vom Thema zur konkreten Anfrage',
        body: 'Jede Unterseite erklärt, welche Daten für die jeweilige Suche wichtig sind. Bei Marken geht es um Modellvarianten, Motorisierung und Ausstattung. Bei Teilekategorien stehen technische Unterschiede wie Bauform, Anschlüsse oder Freigaben im Vordergrund.',
      },
      {
        heading: 'Warum interne Links wichtig sind',
        body: 'Autoersatzteile hängen thematisch eng zusammen. Wer nach Bremsbelägen sucht, braucht vielleicht auch Informationen zur Fahrzeugschein-Prüfung. Wer eine OEM-Nummer hat, sollte verstehen, warum die VIN trotzdem relevant sein kann.',
      },
      {
        heading: 'Persönlich, praktisch und passgenau',
        body: 'TeilePilot24 ersetzt keine sorgfältige technische Prüfung durch reine Schlagwörter. Die Inhalte erklären, welche Informationen wirklich helfen und wie eine Anfrage vorbereitet werden kann.',
      },
      {
        heading: 'Weitere Themen im System',
        body: 'Die Struktur ist für zusätzliche Marken, Teilegruppen und Ratgeber vorbereitet. Inhalte werden über eine zentrale Datenquelle gepflegt, Routen automatisch erzeugt und Seiten einheitlich dargestellt.',
      },
    ],
    faq: [
      { question: 'Warum gibt es eigene SEO-Seiten?', answer: 'Sie ordnen wichtige Suchthemen klar und machen sichtbar, welche Fahrzeugdaten für passende Ersatzteile relevant sind.' },
      { question: 'Sind die Seiten für echte Besucher geschrieben?', answer: 'Ja. Die Inhalte sind sichtbar, verständlich und führen zu praktischen nächsten Schritten.' },
      { question: 'Kann ich direkt von hier eine Anfrage stellen?', answer: 'Ja. Jede Seite enthält eine WhatsApp CTA, über die eine Ersatzteilanfrage gestartet werden kann.' },
      { question: 'Welche Daten soll ich senden?', answer: 'Fahrzeugschein, VIN, OEM-Nummer und Fotos vom alten Teil sind besonders hilfreich.' },
      { question: 'Ist die Anfrage kostenlos?', answer: 'Die Anfrage per WhatsApp kann gestellt werden, ohne dass Sie vorher ein Teil bestellen müssen.' },
    ],
    related: uniqueLinks([...links, ...commonLinks], `/${group}`, 12),
    linkGroups,
    ctaText: 'Ersatzteil per WhatsApp anfragen',
  }
}

export const seoPages: SeoPageData[] = [
  overviewPage('marken', 'Ersatzteile nach Automarke', 'Finden Sie passende Einstiege für häufig gesuchte Automarken und erfahren Sie, welche Daten bei der Ersatzteil-Suche wichtig sind.'),
  overviewPage('teile', 'Ersatzteile nach Kategorie', 'Diese Übersicht sammelt wichtige Teilekategorien und zeigt, warum Passgenauigkeit, VIN und OEM-Nummern bei der Auswahl zählen.'),
  overviewPage('ratgeber', 'Ratgeber zur Ersatzteil-Suche', 'Verstehen Sie die wichtigsten Begriffe rund um Fahrzeugschein, VIN, OEM-Nummer und sichere Ersatzteil-Auswahl.'),
  faqPage(),
  ...brandProfiles.map(brandPage),
  ...partProfiles.map(partPage),
  ...guideTopics.map(guidePage),
  ...advancedGuideTopics.map(advancedGuidePage),
]

export const seoPagePaths = seoPages.map((page) => page.path)

export function getSeoPageByPath(pathname: string) {
  return seoPages.find((page) => page.path === pathname)
}
