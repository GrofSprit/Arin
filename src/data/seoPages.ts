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
  }[]
  faq: SeoFaq[]
  related: SeoLink[]
  ctaText: string
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

function brandPage(profile: BrandProfile): SeoPageData {
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

function partPage(profile: PartProfile): SeoPageData {
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

function guidePage(guide: (typeof guideTopics)[number]): SeoPageData {
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
