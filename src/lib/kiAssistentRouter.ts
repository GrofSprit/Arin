export type KiMessageCategory =
  | 'empty'
  | 'greeting'
  | 'thanks'
  | 'capability'
  | 'offTopic'
  | 'automotive'
  | 'tooShort'
  | 'unclear'

export const localReplies: Record<Exclude<KiMessageCategory, 'empty' | 'automotive'>, string> = {
  greeting: 'Hallo! 👋 Ich helfe dir bei Fragen zu Fahrzeugen, Ersatzteilen, Motoröl, OEM-Nummern und Teilezuordnung. Was möchtest du wissen?',
  thanks: 'Gerne! 😊 Wenn du ein passendes Ersatzteil konkret prüfen lassen möchtest, kannst du TeilePilot24 jederzeit über WhatsApp kontaktieren.',
  capability: 'Ich bin der digitale TeilePilot KI-Assistent. Ich helfe bei ersten Fragen zu Ersatzteilen, Fahrzeugen, Motoröl, Wartung, VIN- und OEM-Nummern. Eine verbindliche Teilezuordnung übernimmt anschließend unser Team persönlich.',
  offTopic: 'Ich bin speziell für Fahrzeuge und Ersatzteile gedacht. 🚗 Frag mich gerne etwas zu deinem Auto, einem Ersatzteil, Motoröl, Wartung, VIN oder einer OEM-Nummer.',
  tooShort: 'Bitte beschreibe kurz, wobei du Hilfe zu deinem Fahrzeug oder Ersatzteil brauchst.',
  unclear: 'Bitte beschreibe kurz, wobei du Hilfe zu deinem Fahrzeug oder Ersatzteil brauchst.',
}

const greetings = new Set(['hallo', 'hi', 'hey', 'guten morgen', 'guten tag', 'guten abend', 'servus', 'moin'])
const thanks = new Set(['danke', 'vielen dank', 'danke schön', 'dankeschön', 'super danke', 'perfekt', 'okay danke', 'ok danke', 'tschüss', 'bis später'])
const capabilityQuestions = new Set(['was kannst du', 'wer bist du', 'wie kannst du mir helfen', 'was macht dieser assistent'])

const offTopicPattern = /(?:^| )(?:bewerbung|witz\p{L}*|bundeskanzler|hauptstadt|übersetz\p{L}*|mathe\p{L}*|gedicht\p{L}*|rezept\p{L}*|fußball|fussball)(?= |$)|(?:^| )python code(?= |$)/u

const automotivePattern = /(?:^| )(?:bmw|mercedes|audi|volkswagen|vw|opel|ford|renault|peugeot|citroën|citroen|fiat|toyota|nissan|hyundai|kia|volvo|skoda|škoda|seat|mazda|porsche|honda|tesla|dacia|auto(?:s|teil\p{L}*|ersatzteil\p{L}*|reparatur\p{L}*|werkstatt\p{L}*)?|wagen\p{L}*|fahrzeug\p{L}*|kfz|pkw|ersatzteil\p{L}*|autoteil\p{L}*|brems\p{L}*|öl|motoröl|oel|motoroel|ölfilter\p{L}*|luftfilter\p{L}*|innenraumfilter\p{L}*|kraftstofffilter\p{L}*|filter\p{L}*|batterie\p{L}*|lichtmaschine\p{L}*|anlasser\p{L}*|kupplung\p{L}*|turbo\p{L}*|dpf|partikelfilter\p{L}*|lambdasonde\p{L}*|sensor\p{L}*|abs|stoßdämpfer\p{L}*|stossdämpfer\p{L}*|fahrwerk\p{L}*|querlenker\p{L}*|zahnriemen\p{L}*|steuerkette\p{L}*|wasserpumpe\p{L}*|zündkerze\p{L}*|glühkerze\p{L}*|getriebe\p{L}*|motor\p{L}*|scheinwerfer\p{L}*|vin|fin|fahrgestellnummer\p{L}*|fahrzeugschein\p{L}*|hsn|tsn|oem|teilenummer\p{L}*|pr code)(?= |$)/u

function normalizeMessage(message: string) {
  return message
    .trim()
    .toLocaleLowerCase('de-DE')
    .normalize('NFC')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
    .replace(/\s+/g, ' ')
}

export function classifyKiMessage(message: string): KiMessageCategory {
  const trimmed = message.trim()
  if (!trimmed) return 'empty'

  // A standalone VIN is a vehicle question; never log or persist its value.
  if (/^(?=[A-HJ-NPR-Z0-9]*[A-HJ-NPR-Z])[A-HJ-NPR-Z0-9]{17}$/i.test(trimmed)) return 'automotive'

  const normalized = normalizeMessage(trimmed)
  if (greetings.has(normalized)) return 'greeting'
  if (thanks.has(normalized)) return 'thanks'
  if (capabilityQuestions.has(normalized)) return 'capability'
  if (offTopicPattern.test(normalized)) return 'offTopic'
  if (automotivePattern.test(normalized)) return 'automotive'
  if (normalized.length < 5 || !/\p{L}/u.test(normalized) || /^(?:test|asdf|qwerty)$/.test(normalized)) return 'tooShort'

  // Unclear messages stay local until the user provides vehicle context.
  return 'unclear'
}
