const facts = [
    "Ein Oktopus hat drei Herzen.",
    "Bananen sind Beeren.",
    "Haie existieren länger als Bäume.",
    "Honig wird nie schlecht.",
    "Ein Tag auf Venus ist länger als ein Jahr.",
    "Katzen schlafen bis zu 16 Stunden am Tag.",
    "Blitz ist heißer als die Sonne.",
    "Wasser kann gleichzeitig fest und flüssig sein.",
    "Erdbeeren sind botanisch keine Beeren.",
    "Schnecken können mehrere Jahre schlafen.",
    "Der Eiffelturm wird bei Hitze ein kleines Stück höher.",
    "Im Weltall kann man nicht pfeifen.",
    "Koalas haben Fingerabdrücke, die menschlichen ähneln.",
    "Eine Wolke kann mehrere hundert Tonnen wiegen.",
    "Der kürzeste Krieg der Geschichte dauerte weniger als eine Stunde.",
    "Menschen teilen etwa die Hälfte ihrer DNA mit Bananen.",
    "Auf dem Mond gibt es Fußspuren, die sehr lange erhalten bleiben.",
    "Ein Blauwal-Herz ist ungefähr so groß wie ein kleines Auto.",
    "Glas ist kein wirklich flüssiger Stoff.",
    "Manche Metalle können bei Raumtemperatur schmelzen.",
    "Der Geruch von Regen hat einen eigenen Namen: Petrichor.",
    "Eine Minute auf einer heißen Herdplatte fühlt sich länger an als eine Minute auf dem Sofa.",
    "Es gibt mehr mögliche Schachpartien als Atome im beobachtbaren Universum."
];

function buildQuestionItemsFromPairs(pairs) {
    const answerPool = [...new Set(pairs.map((pair) => pair[1]))];

    return pairs.map(([question, answer]) => [
        question,
        answer,
        createWrongAnswers(question, answer, answerPool)
    ]);
}

function createWrongAnswers(question, answer, fallbackAnswers) {
    const wrongAnswers = [];
    const pools = [
        getDistractorPool(question, answer),
        fallbackAnswers,
        distractorPools.general
    ];

    pools.flat().forEach((candidate) => {
        if (
            wrongAnswers.length < 3
            && candidate !== answer
            && !wrongAnswers.includes(candidate)
        ) {
            wrongAnswers.push(candidate);
        }
    });

    return wrongAnswers;
}

function getDistractorPool(question, answer) {
    const lowerQuestion = question.toLowerCase();
    const lowerAnswer = answer.toLowerCase();

    if (/^\d/.test(answer)) {
        return distractorPools.numbers;
    }

    if (lowerQuestion.includes("hauptstadt") || lowerQuestion.includes("stadt ist")) {
        return distractorPools.capitals;
    }

    if (lowerQuestion.includes("chemische formel")) {
        return distractorPools.formulas;
    }

    if (
        lowerQuestion.includes("element")
        || lowerQuestion.includes("ordnungszahl")
        || lowerQuestion.includes("metall")
        || lowerQuestion.includes("flammenfärbung")
    ) {
        return distractorPools.chemistry;
    }

    if (lowerQuestion.includes("einheit") || lowerQuestion.includes("misst")) {
        return distractorPools.units;
    }

    if (lowerQuestion.includes("währung")) {
        return distractorPools.currencies;
    }

    if (lowerQuestion.includes("planet") || lowerQuestion.includes("sonnensystem")) {
        return distractorPools.planets;
    }

    if (lowerQuestion.includes("sprache")) {
        return distractorPools.languages;
    }

    if (lowerQuestion.includes("farbe") || lowerQuestion.includes("smaragd") || lowerQuestion.includes("saphir")) {
        return distractorPools.colors;
    }

    if (
        lowerQuestion.includes("tier")
        || lowerQuestion.includes("vogel")
        || lowerQuestion.includes("säugetier")
        || lowerQuestion.includes("reptil")
        || lowerQuestion.includes("fisch")
    ) {
        return distractorPools.animals;
    }

    if (lowerQuestion.includes("organ") || lowerQuestion.includes("knochen") || lowerQuestion.includes("blut")) {
        return distractorPools.body;
    }

    if (lowerQuestion.includes("halbinsel")) {
        return distractorPools.peninsulas;
    }

    if (
        lowerQuestion.includes("kontinent")
        || lowerQuestion.includes("ozean")
        || lowerQuestion.includes("meer")
        || lowerQuestion.includes("fluss")
        || lowerQuestion.includes("wüste")
        || lowerQuestion.includes("insel")
        || lowerQuestion.includes("halbinsel")
        || lowerQuestion.includes("gebirge")
        || lowerQuestion.includes("berg")
        || lowerQuestion.includes("wasserfall")
        || lowerQuestion.includes("regenwald")
    ) {
        return distractorPools.geography;
    }

    if (lowerQuestion.includes("angst")) {
        return distractorPools.phobias;
    }

    if (lowerQuestion.includes("wissenschaft") || lowerQuestion.includes("lehre")) {
        return distractorPools.sciences;
    }

    if (
        lowerQuestion.includes("wer ")
        || lowerQuestion.includes("schrieb")
        || lowerQuestion.includes("malte")
        || lowerQuestion.includes("komponierte")
        || lowerQuestion.includes("entwickelte")
        || lowerQuestion.includes("erfand")
        || lowerQuestion.includes("entdeckte")
        || lowerAnswer.includes("nietzsche")
    ) {
        return distractorPools.people;
    }

    return distractorPools.general;
}

const distractorPools = {
    capitals: [
        "Paris", "Rom", "Madrid", "Wien", "Bern", "London", "Prag", "Oslo",
        "Helsinki", "Dublin", "Lissabon", "Athen", "Kairo", "Bangkok", "Hanoi",
        "Lima", "Quito", "Nairobi", "Riga", "Tallinn", "Vilnius", "Baku"
    ],
    geography: [
        "Sahara", "Gobi", "Mojave-Wüste", "Nil", "Amazonas", "Wolga", "Atlantik",
        "Pazifik", "Arktischer Ozean", "Mittelmeer", "Kaspisches Meer", "Alpen",
        "Anden", "Kilimandscharo", "Great Barrier Reef", "Grönland", "Sizilien"
    ],
    peninsulas: [
        "Iberische Halbinsel", "Skandinavische Halbinsel", "Balkanhalbinsel",
        "Arabische Halbinsel", "Apenninhalbinsel", "Koreanische Halbinsel"
    ],
    chemistry: [
        "Eisen", "Gold", "Silber", "Uran", "Wasserstoff", "Quecksilber", "Kupfer",
        "Schwefel", "Sauerstoff", "Kobalt", "Natrium", "Kalium", "Calcium"
    ],
    formulas: [
        "H₂O", "CO₂", "NaCl", "O₃", "NH₃", "CH₄", "H₂SO₄", "H₂O₂",
        "C₂H₅OH", "NaOH", "CaCO₃", "SO₂", "N₂O"
    ],
    units: [
        "Volt", "Watt", "Ampere", "Ohm", "Hertz", "Joule", "Pascal", "Tesla",
        "Becquerel", "Sievert", "Kelvin", "Farad", "Coulomb", "Dezibel"
    ],
    currencies: [
        "Euro", "Yen", "Schweizer Franken", "Peseta", "Dollar", "Pfund",
        "Krone", "Real"
    ],
    planets: [
        "Merkur", "Venus", "Erde", "Mars", "Jupiter", "Saturn", "Uranus", "Neptun"
    ],
    languages: [
        "Deutsch", "Spanisch", "Französisch", "Arabisch", "Portugiesisch",
        "Finnisch", "Ungarisch", "Persisch/Farsi", "Türkisch", "Thai",
        "Vietnamesisch", "Hebräisch", "Bengalisch", "Indonesisch", "Malaiisch"
    ],
    colors: [
        "Rot", "Blau", "Grün", "Gelb", "Orange", "Violett", "Braun", "Schwarz",
        "Weiß", "Rosa", "Rotbraun", "Karminrot", "Rot-Violett"
    ],
    animals: [
        "Löwe", "Elefant", "Giraffe", "Känguru", "Eisbär", "Blauwal", "Orca",
        "Salzwasserkrokodil", "Kolibri", "Eule", "Pinguin", "Regenwurm",
        "Oktopus", "Schnecke", "Gepard"
    ],
    body: [
        "Gehirn", "Herz", "Leber", "Niere", "Bauchspeicheldrüse", "Haut",
        "Knochenmark", "Oberschenkelknochen", "Steigbügel", "Lunge", "Magen"
    ],
    phobias: [
        "Klaustrophobie", "Akrophobie", "Agoraphobie", "Nyktophobie",
        "Arachnophobie", "Aquaphobie"
    ],
    sciences: [
        "Astronomie", "Geologie", "Paläontologie", "Kartografie", "Zoologie",
        "Botanik", "Mykologie", "Seismologie", "Meteorologie", "Toxikologie",
        "Genetik", "Anatomie", "Ozeanografie", "Klimatologie", "Mineralogie",
        "Mikrobiologie", "Neurologie", "Philosophie"
    ],
    people: [
        "Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci",
        "Vincent van Gogh", "Pablo Picasso", "William Shakespeare",
        "Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Charles Darwin",
        "Albert Einstein", "Isaac Newton", "Nikolaus Kopernikus",
        "Alexander Fleming", "Franz Kafka", "George Orwell", "Homer"
    ],
    numbers: [
        "1", "2", "3", "4", "5", "6", "7", "8", "10", "11", "12", "16", "24",
        "32", "46", "50", "60", "206", "300", "1000", "3600", "86.400",
        "100.000"
    ],
    general: [
        "Berlin", "Paris", "Wasser", "Sauerstoff", "Sonne", "Erde", "Europa",
        "Asien", "Afrika", "Australien", "Grün", "Blau", "Jupiter", "Saturn"
    ]
};
}

const generalEasyQuestionPairs = [
    ["Was ist die Hauptstadt von Deutschland?", "Berlin"],
    ["Wie viele Kontinente gibt es?", "7"],
    ["Welcher Planet ist der Sonne am nächsten?", "Merkur"],
    ["Wie heißt das größte Meer der Erde?", "Pazifik"],
    ["Welche Farbe hat ein Smaragd?", "Grün"],
    ["Wie viele Tage hat ein Schaltjahr?", "366"],
    ["Wer malte die Mona Lisa?", "Leonardo da Vinci"],
    ["Wie heißt die Hauptstadt von Frankreich?", "Paris"],
    ["Welches Tier wird „König der Tiere“ genannt?", "Löwe"],
    ["Wie viele Minuten hat eine Stunde?", "60"],
    ["Was ist die größte Wüste der Welt?", "Sahara"],
    ["Wie heißt der höchste Berg der Erde?", "Mount Everest"],
    ["Welches Gas brauchen Menschen zum Atmen?", "Sauerstoff"],
    ["Wie viele Bundesländer hat Deutschland?", "16"],
    ["Welche Sprache spricht man in Spanien?", "Spanisch"],
    ["Wie heißt der größte Ozean?", "Pazifischer Ozean"],
    ["Welches Tier legt Eier?", "Huhn"],
    ["Wie viele Sekunden hat eine Minute?", "60"],
    ["Welche Farbe entsteht aus Blau und Gelb?", "Grün"],
    ["Wie heißt der Erfinder der Glühbirne?", "Thomas Edison"],
    ["In welchem Land stehen die Pyramiden?", "Ägypten"],
    ["Wie viele Beine hat eine Spinne?", "8"],
    ["Wie heißt die Hauptstadt von Italien?", "Rom"],
    ["Was ist H2O?", "Wasser"],
    ["Welches Organ pumpt Blut durch den Körper?", "Das Herz"],
    ["Wie viele Stunden hat ein Tag?", "24"],
    ["Wie heißt der längste Fluss der Welt?", "Nil"],
    ["Welches Tier gibt Milch?", "Kuh"],
    ["Welche Farbe hat die Sonne auf Zeichnungen meistens?", "Gelb"],
    ["Wie nennt man gefrorenes Wasser?", "Eis"],
    ["Welcher Kontinent ist Deutschland?", "Europa"],
    ["Wie heißt die Hauptstadt von England?", "London"],
    ["Welche Jahreszeit kommt nach dem Sommer?", "Herbst"],
    ["Wie viele Monate hat ein Jahr?", "12"],
    ["Welche Frucht ist gelb und krumm?", "Banane"],
    ["Wie heißt der rote Planet?", "Mars"],
    ["Welches Tier bellt?", "Hund"],
    ["Wie viele Spieler hat eine Fußballmannschaft auf dem Feld?", "11"],
    ["Was braucht Feuer zum Brennen?", "Sauerstoff"],
    ["Welche Farbe hat Kohle meistens?", "Schwarz"],
    ["Wer schrieb „Harry Potter“?", "J.K. Rowling"],
    ["Wie heißt die Hauptstadt von Österreich?", "Wien"],
    ["Welche Tiere leben im Wasser?", "Fische"],
    ["Wie viele Zentimeter hat ein Meter?", "100"],
    ["Welche Farbe hat Schnee?", "Weiß"],
    ["Wie heißt unser Stern?", "Sonne"],
    ["Welches Tier miaut?", "Katze"],
    ["Wie viele Tage hat die Woche?", "7"],
    ["Welche Form hat ein Fußball?", "Rund"],
    ["Wie heißt das größte Land der Welt?", "Russland"],
    ["Welche Farbe haben Smaragde?", "Grün"],
    ["Welcher Vogel kann nicht fliegen?", "Pinguin"],
    ["Wie heißt die Hauptstadt der USA?", "Washington D.C."],
    ["Welche Jahreszeit kommt nach dem Winter?", "Frühling"],
    ["Wie viele Finger hat ein Mensch normalerweise?", "10"],
    ["Was misst man mit einem Thermometer?", "Temperatur"],
    ["Welche Farbe hat Gras?", "Grün"],
    ["Wie heißt das schnellste Landtier?", "Gepard"],
    ["Welche Sprache spricht man in Deutschland?", "Deutsch"],
    ["Wie nennt man ein Baby-Schaf?", "Lamm"],
    ["Wie viele Seiten hat ein Würfel?", "6"],
    ["Was trinken Pflanzen hauptsächlich?", "Wasser"],
    ["Welche Farbe hat der Himmel bei gutem Wetter?", "Blau"],
    ["Wie heißt die Hauptstadt von Japan?", "Tokio"],
    ["Welches Tier ist für seinen langen Hals bekannt?", "Giraffe"],
    ["Wie viele Augen hat ein Mensch normalerweise?", "2"],
    ["Welche Frucht ist rot und hat kleine Kerne außen?", "Erdbeere"],
    ["Wie heißt der größte Kontinent?", "Asien"],
    ["Welches Tier lebt in Australien und hüpft?", "Känguru"],
    ["Welche Farbe hat eine Zitrone?", "Gelb"],
    ["Wie heißt die Hauptstadt von Kanada?", "Ottawa"],
    ["Wie nennt man einen Wissenschaftler, der Sterne erforscht?", "Astronom"],
    ["Welche Farbe entsteht aus Rot und Weiß?", "Rosa"],
    ["Welches Tier trägt sein Haus auf dem Rücken?", "Schnecke"],
    ["Wie viele Stunden hat eine halbe Stunde?", "0,5 Stunden"],
    ["Welches Instrument hat schwarze und weiße Tasten?", "Klavier"],
    ["Wie heißt die Hauptstadt von China?", "Peking"],
    ["Welche Frucht wird zu Wein verarbeitet?", "Traube"],
    ["Welcher Planet ist für seine Ringe bekannt?", "Saturn"],
    ["Wie viele Räder hat ein Fahrrad?", "2"],
    ["Welches Tier ist das größte Säugetier der Welt?", "Blauwal"],
    ["Welche Farbe hat eine Orange?", "Orange"],
    ["Wie heißt die Hauptstadt von Australien?", "Canberra"],
    ["Welche Tiere geben Wolle?", "Schafe"],
    ["Wie viele Monate haben 31 Tage?", "7"],
    ["Wie heißt die Währung in Deutschland?", "Euro"],
    ["Welches Tier kann besonders gut klettern?", "Affe"],
    ["Wie heißt das Gegenteil von heiß?", "Kalt"],
    ["Welche Farbe haben Flamingos meistens?", "Rosa"],
    ["Wie nennt man einen Arzt für Tiere?", "Tierarzt"],
    ["Wie viele Kontinente gibt es auf der Erde?", "7"],
    ["Welche Farbe hat ein Stoppschild?", "Rot"],
    ["Wie heißt die Hauptstadt von Griechenland?", "Athen"],
    ["Welches Tier lebt am Nordpol?", "Eisbär"],
    ["Wie viele Monate hat der Februar normalerweise?", "28 Tage"],
    ["Welches Obst ist innen grün und außen braun?", "Kiwi"],
    ["Welche Farbe hat Schokolade meistens?", "Braun"],
    ["Wie nennt man einen Menschen, der Bücher schreibt?", "Autor"],
    ["Welches Tier ist bekannt für seinen Rüssel?", "Elefant"],
    ["Wie heißt unser Planet?", "Erde"]
];

const generalMediumQuestionPairs = [
    ["Welches Element hat das chemische Symbol „Fe“?", "Eisen"],
    ["Wer schrieb das Drama „Faust“?", "Johann Wolfgang von Goethe"],
    ["Wie heißt die Hauptstadt von Kanada?", "Ottawa"],
    ["Welcher Planet ist für seine großen Ringe bekannt?", "Saturn"],
    ["Wie viele Knochen hat ein erwachsener Mensch ungefähr?", "206"],
    ["Welcher Ozean liegt zwischen Amerika und Europa?", "Atlantik"],
    ["In welchem Jahr fiel die Berliner Mauer?", "1989"],
    ["Wie nennt man die größte Wüste Asiens?", "Gobi"],
    ["Wer malte „Die Sternennacht“?", "Vincent van Gogh"],
    ["Welches Land hat die meisten Einwohner?", "Indien"],
    ["Was ist die Hauptstadt von Australien?", "Canberra"],
    ["Wie nennt man Tiere, die nur Pflanzen essen?", "Pflanzenfresser"],
    ["Welches Gas entsteht hauptsächlich bei der Fotosynthese?", "Sauerstoff"],
    ["Wie viele Herzen hat ein Oktopus?", "3"],
    ["Wie heißt der längste Fluss Europas?", "Wolga"],
    ["Welche Sprache wird in Brasilien gesprochen?", "Portugiesisch"],
    ["Wie nennt man den kleinsten Knochen im Körper?", "Steigbügel"],
    ["Welcher Kontinent hat die meisten Länder?", "Afrika"],
    ["Wie heißt der höchste Berg Deutschlands?", "Zugspitze"],
    ["Wer erfand den Buchdruck?", "Johannes Gutenberg"],
    ["Welche Einheit misst elektrische Spannung?", "Volt"],
    ["Wie viele Spieler stehen bei einem Basketballteam gleichzeitig auf dem Feld?", "5"],
    ["Welche Farbe entsteht aus Blau und Rot?", "Lila/Violett"],
    ["Wie nennt man die Angst vor engen Räumen?", "Klaustrophobie"],
    ["In welchem Land steht das Kolosseum?", "Italien"],
    ["Welcher Planet ist der Erde am ähnlichsten in Größe?", "Venus"],
    ["Wie heißt die Hauptstadt von Neuseeland?", "Wellington"],
    ["Welches Organ produziert Insulin?", "Bauchspeicheldrüse"],
    ["Wie viele Seiten hat ein Hexagon?", "6"],
    ["Wer war der erste Mensch auf dem Mond?", "Neil Armstrong"],
    ["Welche Währung gibt es in Japan?", "Yen"],
    ["Wie nennt man die Wissenschaft vom Weltall?", "Astronomie"],
    ["Welches Land grenzt an Deutschland und Spanien?", "Frankreich"],
    ["Wie heißt die größte Insel im Mittelmeer?", "Sizilien"],
    ["Wie viele Liter sind ein Kubikmeter?", "1000"],
    ["Welche Blutgruppe gilt als Universalspender?", "0 negativ"],
    ["Welcher Vogel ist das Symbol der USA?", "Weißkopfseeadler"],
    ["Wie heißt das größte Organ des Menschen?", "Haut"],
    ["Welche Stadt wird „Big Apple“ genannt?", "New York"],
    ["Wie viele Farben hat ein Regenbogen normalerweise?", "7"],
    ["Wie nennt man den Vorgang, bei dem Wasser verdampft?", "Verdunstung"],
    ["Welcher Kontinent liegt komplett auf der Südhalbkugel?", "Antarktika"],
    ["Wie heißt die Hauptstadt von Argentinien?", "Buenos Aires"],
    ["Wer komponierte die „Mondscheinsonate“?", "Ludwig van Beethoven"],
    ["Welches Metall ist flüssig bei Raumtemperatur?", "Quecksilber"],
    ["Wie viele Planeten gehören zum Sonnensystem?", "8"],
    ["Welche Sprache spricht man hauptsächlich in Mexiko?", "Spanisch"],
    ["Wie nennt man die äußere Schicht der Erde?", "Erdkruste"],
    ["Welches Tier gilt als schnellstes Landtier?", "Gepard"],
    ["Welche Stadt war früher in Ost- und Westteil getrennt?", "Berlin"],
    ["Was ist die Hauptstadt von Südafrika?", "Pretoria"],
    ["Wie heißt der größte Knochen des Menschen?", "Oberschenkelknochen"],
    ["Welche Einheit misst Stromstärke?", "Ampere"],
    ["Wie nennt man die Lehre von Karten?", "Kartografie"],
    ["Welches Meer liegt zwischen Europa und Afrika?", "Mittelmeer"],
    ["Welche Farbe absorbiert am meisten Sonnenlicht?", "Schwarz"],
    ["Wie heißt das größte Säugetier der Welt?", "Blauwal"],
    ["Wer entwickelte die Relativitätstheorie?", "Albert Einstein"],
    ["Wie viele Zähne hat ein Erwachsener normalerweise?", "32"],
    ["Wie nennt man den Mittelpunkt eines Hurrikans?", "Auge"],
    ["Welche Stadt ist die Hauptstadt der Türkei?", "Ankara"],
    ["Wie nennt man Tiere, die nachts aktiv sind?", "Nachtaktiv/Nachttiere"],
    ["Wie viele Kontinente gibt es?", "7"],
    ["Welcher Planet ist der größte im Sonnensystem?", "Jupiter"],
    ["Wie heißt die Hauptstadt von Thailand?", "Bangkok"],
    ["Welches Instrument misst Erdbeben?", "Seismograf"],
    ["Welche chemische Formel hat Kochsalz?", "NaCl"],
    ["Wie nennt man den höchsten Punkt einer Welle?", "Wellenberg"],
    ["Welche Sprache hat die meisten Muttersprachler weltweit?", "Chinesisch/Mandarin"],
    ["Wie heißt die Hauptstadt von Ägypten?", "Kairo"],
    ["Welches Tier kann seinen Kopf fast komplett drehen?", "Eule"],
    ["Wie nennt man den Übergang von fest zu flüssig?", "Schmelzen"],
    ["Welche Stadt ist für den Eiffelturm bekannt?", "Paris"],
    ["Wie viele Millimeter sind ein Zentimeter?", "10"],
    ["Welche Kraft zieht Dinge zur Erde?", "Gravitation"],
    ["Wie heißt das größte Korallenriff der Welt?", "Great Barrier Reef"],
    ["Wer schrieb „Romeo und Julia“?", "William Shakespeare"],
    ["Wie nennt man die Wissenschaft von den Tieren?", "Zoologie"],
    ["Welche Wüste liegt in Afrika?", "Sahara"],
    ["Wie heißt die Hauptstadt von Südkorea?", "Seoul"],
    ["Welches Organ reinigt das Blut?", "Niere"],
    ["Wie nennt man die kleinste Einheit eines Computers?", "Bit"],
    ["Welche Farbe hat Kupfersulfat oft?", "Blau"],
    ["Wie viele Sekunden hat eine Stunde?", "3600"],
    ["Welcher Planet ist am weitesten von der Sonne entfernt?", "Neptun"],
    ["Wie heißt der größte Regenwald der Erde?", "Amazonas-Regenwald"],
    ["Welche Sportart betreibt man in Wimbledon?", "Tennis"],
    ["Wie nennt man Tiere ohne Wirbelsäule?", "Wirbellose"],
    ["Welche Stadt liegt auf zwei Kontinenten?", "Istanbul"],
    ["Wie heißt die Hauptstadt von Norwegen?", "Oslo"],
    ["Welche Einheit misst Frequenz?", "Hertz"],
    ["Wer entdeckte Amerika 1492?", "Christoph Kolumbus"],
    ["Wie nennt man die Wissenschaft vom Wetter?", "Meteorologie"],
    ["Welches Tier ist das größte Raubtier an Land?", "Eisbär"],
    ["Wie heißt der längste Fluss Südamerikas?", "Amazonas"],
    ["Welche Farbe hat Chlorophyll?", "Grün"],
    ["Wie viele Herzen hat eine Qualle?", "Keins"],
    ["Welche Stadt ist die Hauptstadt von China?", "Peking"],
    ["Wie nennt man die Umwandlung von Wasser zu Eis?", "Gefrieren"],
    ["Welche Sprache spricht man in Österreich hauptsächlich?", "Deutsch"]
];
const generalHardQuestionPairs = [
    ["Wie heißt der physikalische Effekt, bei dem Zeit bei hoher Geschwindigkeit langsamer vergeht?", "Zeitdilatation"],
    ["Wer schrieb „Also sprach Zarathustra“?", "Friedrich Nietzsche"],
    ["Welches Element hat die Ordnungszahl 92?", "Uran"],
    ["Wie heißt die Hauptstadt von Kasachstan?", "Astana"],
    ["Welche Einheit misst radioaktive Strahlung?", "Becquerel"],
    ["Wie nennt man die Verschmelzung von Atomkernen?", "Kernfusion"],
    ["Welcher Planet besitzt den größten Vulkan im Sonnensystem?", "Mars"],
    ["Wie heißt die tiefste bekannte Meeresstelle der Erde?", "Challengertief"],
    ["Wer entwickelte die heliozentrische Weltanschauung?", "Nikolaus Kopernikus"],
    ["Welche Sprache gehört nicht zur indogermanischen Sprachfamilie?", "Finnisch"],
    ["Wie viele Chromosomen hat ein Mensch normalerweise?", "46"],
    ["Welche Stadt war Hauptstadt des Byzantinischen Reiches?", "Konstantinopel"],
    ["Wie nennt man die Angst vor offenen Plätzen?", "Agoraphobie"],
    ["Welches chemische Element ist das leichteste?", "Wasserstoff"],
    ["Wer komponierte die Oper „Carmen“?", "Georges Bizet"],
    ["Welcher Fluss fließt durch Bagdad?", "Tigris"],
    ["Wie nennt man die Wissenschaft von Fossilien?", "Paläontologie"],
    ["Welche Farbe absorbiert die meiste Wärme?", "Schwarz"],
    ["Wie heißt das größte bekannte Sternbild?", "Wasserschlange"],
    ["Welche Währung hatte Spanien vor dem Euro?", "Peseta"],
    ["Wie nennt man den Zerfall eines Atomkerns?", "Radioaktiver Zerfall"],
    ["Welche Stadt liegt auf zwei Kontinenten?", "Istanbul"],
    ["Wer malte „Die Geburt der Venus“?", "Sandro Botticelli"],
    ["Wie viele Herzen hat ein Tintenfisch?", "3"],
    ["Welche Säure befindet sich hauptsächlich im Magensaft?", "Salzsäure"],
    ["Wie nennt man den größten Mond des Saturns?", "Titan"],
    ["Welche Nation gewann die Fußball-WM 2014?", "Deutschland"],
    ["Wie heißt die Hauptstadt von Neuseeland?", "Wellington"],
    ["Welche Einheit misst elektrische Widerstände?", "Ohm"],
    ["Welcher Kontinent hat die meisten Sprachen?", "Afrika"],
    ["Wer schrieb „Krieg und Frieden“?", "Leo Tolstoi"],
    ["Wie heißt die größte Wüste der Erde?", "Antarktische Eiswüste"],
    ["Welche chemische Formel hat Ozon?", "O₃"],
    ["Wie nennt man die Wissenschaft der Sterne?", "Astronomie"],
    ["Welche Stadt ist die Hauptstadt von Mongolei?", "Ulaanbaatar"],
    ["Welches Organ produziert Galle?", "Leber"],
    ["Wie viele Knochen hat ein Neugeborenes ungefähr?", "300"],
    ["Welche Sprache wird in Iran hauptsächlich gesprochen?", "Persisch/Farsi"],
    ["Wie nennt man den Übergang von fest direkt zu gasförmig?", "Sublimation"],
    ["Wer entwickelte die Gravitationstheorie?", "Isaac Newton"],
    ["Welches Metall hat das chemische Symbol „Hg“?", "Quecksilber"],
    ["Wie heißt die Hauptstadt von Bolivien?", "Sucre"],
    ["Welche Einheit misst die Frequenz?", "Hertz"],
    ["Wie nennt man Tiere ohne Wirbelsäule?", "Wirbellose"],
    ["Welche Stadt wurde früher „Leningrad“ genannt?", "Sankt Petersburg"],
    ["Wie viele Planeten sind Gasriesen?", "4"],
    ["Wer schrieb „Der Prozess“?", "Franz Kafka"],
    ["Wie nennt man den Fachbegriff für Erdbebenkunde?", "Seismologie"],
    ["Welches Land besitzt die meisten Inseln weltweit?", "Schweden"],
    ["Wie heißt die größte Drüse des Menschen?", "Leber"],
    ["Welche chemische Formel hat Schwefelsäure?", "H₂SO₄"],
    ["Welche Stadt ist die Hauptstadt von Äthiopien?", "Addis Abeba"],
    ["Wie nennt man die Lehre vom Verhalten von Tieren?", "Ethologie"],
    ["Welche Farbe hat oxidiertes Kupfer meistens?", "Grün"],
    ["Wer komponierte die „9. Sinfonie“?", "Ludwig van Beethoven"],
    ["Wie heißt das größte Korallenriff der Welt?", "Great Barrier Reef"],
    ["Welche Einheit misst Luftdruck?", "Pascal"],
    ["Welcher Planet hat die kürzeste Umlaufzeit um die Sonne?", "Merkur"],
    ["Wie nennt man die Wissenschaft von Pilzen?", "Mykologie"],
    ["Welche Stadt ist Hauptstadt von Sri Lanka?", "Sri Jayawardenepura Kotte"],
    ["Welches Tier besitzt den stärksten Biss der Welt?", "Salzwasserkrokodil"],
    ["Welche Sprache wird in Brasilien gesprochen?", "Portugiesisch"],
    ["Wie nennt man den tiefsten Punkt der Erdoberfläche an Land?", "Totes Meer"],
    ["Welche chemische Formel hat Ammoniak?", "NH₃"],
    ["Wer malte „Guernica“?", "Pablo Picasso"],
    ["Welche Einheit misst elektrische Leistung?", "Watt"],
    ["Wie heißt die Hauptstadt von Laos?", "Vientiane"],
    ["Wie viele Zeitzonen hat Russland?", "11"],
    ["Welche Wüste liegt in der Mongolei?", "Gobi"],
    ["Wie nennt man die Wissenschaft von Insekten?", "Entomologie"],
    ["Welcher Ozean ist der kleinste?", "Arktischer Ozean"],
    ["Welche Farbe hat Kobalt meistens?", "Blau"],
    ["Wie heißt die Hauptstadt von Madagaskar?", "Antananarivo"],
    ["Wer entwickelte die Relativitätstheorie?", "Albert Einstein"],
    ["Welche chemische Formel hat Methan?", "CH₄"],
    ["Wie nennt man Pflanzenfresser wissenschaftlich?", "Herbivoren"],
    ["Welche Stadt ist für Machu Picchu bekannt?", "Cusco"],
    ["Wie viele Rippen besitzt ein Mensch normalerweise?", "24"],
    ["Welche Einheit misst radioaktive Strahlendosis?", "Sievert"],
    ["Welcher Planet ist der heißeste im Sonnensystem?", "Venus"],
    ["Welche Sprache wird in Afghanistan hauptsächlich gesprochen?", "Dari/Paschtu"],
    ["Wie nennt man die Wissenschaft der Gifte?", "Toxikologie"],
    ["Wer schrieb „Der alte Mann und das Meer“?", "Ernest Hemingway"],
    ["Welche chemische Formel hat Kochsalz?", "NaCl"],
    ["Wie heißt der längste Fluss Asiens?", "Jangtsekiang"],
    ["Welche Stadt ist Hauptstadt von Ecuador?", "Quito"],
    ["Wie nennt man die Angst vor Spinnen?", "Arachnophobie"],
    ["Welches Organ produziert Insulin?", "Bauchspeicheldrüse"],
    ["Welche Einheit misst magnetische Feldstärke?", "Tesla"],
    ["Wer komponierte „Die vier Jahreszeiten“?", "Antonio Vivaldi"],
    ["Wie heißt die Hauptstadt von Georgien?", "Tiflis"],
    ["Welche chemische Formel hat Wasserstoffperoxid?", "H₂O₂"],
    ["Wie nennt man den Prozess der Zellteilung?", "Mitose"],
    ["Welcher Planet besitzt den größten bekannten Sturm?", "Jupiter"],
    ["Welche Sprache wird in Ägypten gesprochen?", "Arabisch"],
    ["Wie heißt der höchste Wasserfall Europas?", "Vinnufossen"],
    ["Wer schrieb „Ulysses“?", "James Joyce"],
    ["Welche Einheit misst Schallstärke?", "Dezibel"],
    ["Wie nennt man die Wissenschaft von Karten?", "Kartografie"],
    ["Welche Stadt war Hauptstadt des Osmanischen Reiches?", "Konstantinopel"],
    ["Welche chemische Formel hat Ethanol?", "C₂H₅OH"],
    ["Wie viele Herzen besitzt ein Regenwurm?", "5"],
    ["Welche Stadt ist Hauptstadt von Myanmar?", "Naypyidaw"],
    ["Welche Farbe hat Schwefel?", "Gelb"],
    ["Wer entdeckte Penicillin?", "Alexander Fleming"],
    ["Wie nennt man die Angst vor Wasser?", "Aquaphobie"],
    ["Welcher Kontinent hat die größte Bevölkerung?", "Asien"],
    ["Welche Einheit misst Energie?", "Joule"],
    ["Wie heißt die Hauptstadt von Nepal?", "Kathmandu"],
    ["Welche Sprache wird in Österreich gesprochen?", "Deutsch"],
    ["Wie nennt man die Wissenschaft von Vögeln?", "Ornithologie"],
    ["Welche chemische Formel hat Kohlensäure?", "H₂CO₃"],
    ["Wer malte die Decke der Sixtinischen Kapelle?", "Michelangelo"],
    ["Welcher Planet besitzt die meisten bekannten Monde?", "Saturn"],
    ["Wie heißt die Hauptstadt von Albanien?", "Tirana"],
    ["Welche Einheit misst Geschwindigkeit?", "Meter pro Sekunde"],
    ["Wie nennt man den Zerfall organischer Stoffe durch Mikroorganismen?", "Verwesung"],
    ["Welche Sprache wird in Ungarn gesprochen?", "Ungarisch"],
    ["Wie heißt das größte Binnenland der Welt?", "Kasachstan"],
    ["Welche Farbe entsteht aus Blau und Gelb?", "Grün"],
    ["Welche chemische Formel hat Schwefeldioxid?", "SO₂"],
    ["Wer schrieb „Faust“?", "Johann Wolfgang von Goethe"],
    ["Welche Stadt ist Hauptstadt von Finnland?", "Helsinki"],
    ["Wie nennt man Tiere, die nachts aktiv sind?", "Nachtaktiv/Nokturn"],
    ["Welche Einheit misst Stromstärke?", "Ampere"],
    ["Wie heißt die größte Insel der Welt?", "Grönland"],
    ["Welche Sprache wird in Thailand gesprochen?", "Thai"],
    ["Wie nennt man die Wissenschaft von Erbgut?", "Genetik"],
    ["Welcher Planet hat den größten Mond?", "Jupiter"],
    ["Welche Farbe haben Smaragde?", "Grün"],
    ["Welche chemische Formel hat Lachgas?", "N₂O"],
    ["Wer entwickelte die Evolutionstheorie?", "Charles Darwin"],
    ["Wie heißt die Hauptstadt von Armenien?", "Jerewan"],
    ["Welche Einheit misst Temperatur?", "Kelvin"],
    ["Wie nennt man den Fachbegriff für Sternschnuppen?", "Meteore"],
    ["Welche Sprache wird in Israel hauptsächlich gesprochen?", "Hebräisch"],
    ["Wie heißt das größte Säugetier der Welt?", "Blauwal"],
    ["Welche Farbe hat Chlorophyll?", "Grün"],
    ["Welche Stadt ist Hauptstadt von Kroatien?", "Zagreb"],
    ["Wie nennt man die Wissenschaft von dem menschlichen Körper?", "Anatomie"],
    ["Welche chemische Formel hat Natronlauge?", "NaOH"],
    ["Wer schrieb „Die Verwandlung“?", "Franz Kafka"],
    ["Wie heißt die Hauptstadt von Litauen?", "Vilnius"],
    ["Welche Einheit misst Druck?", "Pascal"],
    ["Wie nennt man den Prozess der Wasserverdunstung über Pflanzen?", "Transpiration"],
    ["Welche Sprache wird in Pakistan gesprochen?", "Urdu"],
    ["Wie heißt das größte aktive Vulkangebiet Europas?", "Ätna"],
    ["Welche Farbe hat Rubidium bei Flammenfärbung?", "Rot-Violett"],
    ["Welche Stadt ist Hauptstadt von Slowenien?", "Ljubljana"],
    ["Wie nennt man die Wissenschaft von den Meeren?", "Ozeanografie"],
    ["Welche chemische Formel hat Salpetersäure?", "HNO₃"],
    ["Wer komponierte „Eine kleine Nachtmusik“?", "Wolfgang Amadeus Mozart"],
    ["Wie heißt die Hauptstadt von Estland?", "Tallinn"],
    ["Welche Einheit misst elektrische Spannung?", "Volt"],
    ["Wie nennt man Tiere mit gleichbleibender Körpertemperatur?", "Warmblüter"],
    ["Welche Sprache wird in Bangladesch gesprochen?", "Bengalisch"],
    ["Wie heißt der größte Planet im Sonnensystem?", "Jupiter"],
    ["Welche Farbe hat Kupferoxid?", "Schwarz"],
    ["Welche Stadt ist Hauptstadt von Belarus?", "Minsk"],
    ["Wie nennt man die Wissenschaft der Krankheiten?", "Pathologie"],
    ["Welche chemische Formel hat Calciumcarbonat?", "CaCO₃"],
    ["Wer schrieb „Der Name der Rose“?", "Umberto Eco"],
    ["Wie heißt die Hauptstadt von Usbekistan?", "Taschkent"],
    ["Welche Einheit misst Frequenz?", "Hertz"],
    ["Wie nennt man die Wissenschaft von Zellen?", "Zytologie"],
    ["Welche Sprache wird in Indonesien gesprochen?", "Indonesisch"],
    ["Wie heißt der größte Ozean der Erde?", "Pazifik"],
    ["Welche Farbe hat Brom?", "Rotbraun"],
    ["Welche Stadt ist Hauptstadt von Lettland?", "Riga"],
    ["Wie nennt man die Wissenschaft vom Klima?", "Klimatologie"],
    ["Welche chemische Formel hat Kalkwasser?", "Ca(OH)₂"],
    ["Wer schrieb „Moby Dick“?", "Herman Melville"],
    ["Wie heißt die Hauptstadt von Aserbaidschan?", "Baku"],
    ["Welche Einheit misst Arbeit/Energie?", "Joule"],
    ["Wie nennt man die Wissenschaft von Mineralien?", "Mineralogie"],
    ["Welche Sprache wird in Malaysia gesprochen?", "Malaiisch"],
    ["Wie heißt der höchste Berg Afrikas?", "Kilimandscharo"],
    ["Welche Farbe hat Kalium bei Flammenfärbung?", "Violett"],
    ["Welche Stadt ist Hauptstadt von Moldawien?", "Chișinău"],
    ["Wie nennt man die Wissenschaft der Bewegungen?", "Kinematik"],
    ["Welche chemische Formel hat Calciumoxid?", "CaO"],
    ["Wer entdeckte die Radioaktivität?", "Henri Becquerel"],
    ["Wie heißt die Hauptstadt von Nordkorea?", "Pjöngjang"],
    ["Welche Einheit misst elektrische Ladung?", "Coulomb"],
    ["Wie nennt man die Wissenschaft von Mikroorganismen?", "Mikrobiologie"],
    ["Welche Sprache wird in der Mongolei gesprochen?", "Mongolisch"],
    ["Wie heißt die größte Halbinsel der Welt?", "Arabische Halbinsel"],
    ["Welche Farbe hat Natrium bei Flammenfärbung?", "Gelb"],
    ["Welche Stadt ist Hauptstadt von Luxemburg?", "Luxemburg"],
    ["Wie nennt man die Wissenschaft der Bewegungsabläufe im Körper?", "Biomechanik"],
    ["Welche chemische Formel hat Magnesiumoxid?", "MgO"],
    ["Wer schrieb „Don Quijote“?", "Miguel de Cervantes"],
    ["Wie heißt die Hauptstadt von Island?", "Reykjavík"],
    ["Welche Einheit misst Kapazität?", "Farad"],
    ["Wie nennt man die Wissenschaft vom Nervensystem?", "Neurologie"],
    ["Welche Sprache wird in Vietnam gesprochen?", "Vietnamesisch"],
    ["Wie heißt die längste Gebirgskette der Welt?", "Anden"],
    ["Welche Farbe hat Lithium bei Flammenfärbung?", "Karminrot"],
    ["Welche Stadt ist Hauptstadt von Montenegro?", "Podgorica"],
    ["Wie nennt man die Wissenschaft vom Denken?", "Philosophie"]
];
const questionData = {
    "Allgemeinwissen": {
        easy: buildQuestionItemsFromPairs(generalEasyQuestionPairs),
        medium: buildQuestionItemsFromPairs(generalMediumQuestionPairs),
        hard: buildQuestionItemsFromPairs(generalHardQuestionPairs),
        genius: buildQuestionItemsFromPairs(generalHardQuestionPairs)
    },
    "Sport": {
        easy: [
            ["Wie lange dauert ein normales Fußballspiel?", "90 Minuten", ["60 Minuten", "80 Minuten", "120 Minuten"]],
            ["In welcher Sportart wirft man den Ball in einen Korb?", "Basketball", ["Tennis", "Golf", "Rugby"]],
            ["Welche Sportart spielt man mit Schläger und gelbem Ball?", "Tennis", ["Boxen", "Schwimmen", "Skispringen"]],
            ["Wie viele Spieler hat ein Fußballteam auf dem Feld?", "11", ["7", "9", "12"]],
            ["In welcher Sportart schwimmt man Bahnen?", "Schwimmen", ["Handball", "Fechten", "Radsport"]],
            ["In welcher Sportart fährt man oft mit einem Fahrrad?", "Radsport", ["Boxen", "Tischtennis", "Volleyball"]],
            ["Welche Sportart spielt man auf Eis mit einem Puck?", "Eishockey", ["Fußball", "Baseball", "Rugby"]],
            ["Wie nennt man den Torwart im Fußball auch?", "Keeper", ["Stürmer", "Trainer", "Schiedsrichter"]],
            ["In welcher Sportart gibt es einen Ring als Kampffläche?", "Boxen", ["Golf", "Segeln", "Skifahren"]],
            ["Welche Sportart spielt man mit einem kleinen weißen Ball und Schlägern auf Rasen?", "Golf", ["Judo", "Handball", "Rudern"]]
        ],
        medium: [
            ["In welcher Sportart gibt es einen Touchdown?", "American Football", ["Basketball", "Tennis", "Handball"]],
            ["Wie viele Punkte gibt ein normaler Basketballwurf aus dem Feld?", "2", ["1", "3", "4"]],
            ["Wie lang ist ein Marathon?", "42,195 km", ["21,1 km", "50 km", "35 km"]],
            ["Bei welchem Rennen gibt es das gelbe Trikot?", "Tour de France", ["Wimbledon", "Super Bowl", "Davis Cup"]],
            ["In welcher Sportart gibt es die Wertung Ippon?", "Judo", ["Golf", "Baseball", "Eishockey"]],
            ["Wie viele Sätze braucht man im Herrentennis bei Grand Slams meistens zum Sieg?", "3", ["1", "2", "4"]],
            ["Wie heißt der höchste Verband im Weltfußball?", "FIFA", ["UEFA", "IOC", "NBA"]],
            ["Welche Sportart nutzt den Begriff Birdie?", "Golf", ["Boxen", "Judo", "Skispringen"]],
            ["Wie viele Spieler stehen beim Volleyball pro Team auf dem Feld?", "6", ["5", "7", "8"]],
            ["Welche Disziplin gehört zur Leichtathletik?", "Weitsprung", ["Slalom", "Dressur", "Degenfechten"]]
        ],
        hard: [
            ["Wie viele Spieler stehen pro Team beim Basketball auf dem Feld?", "5", ["4", "6", "7"]],
            ["Was ist die maximale Punktzahl mit einem Dartwurf?", "60", ["50", "80", "100"]],
            ["Wie lang ist eine olympische Schwimmbahn?", "50 Meter", ["25 Meter", "75 Meter", "100 Meter"]],
            ["Wie viele Ringe hat das olympische Symbol?", "5", ["4", "6", "7"]],
            ["Wie heißt der Tennisstand 40:40?", "Einstand", ["Break", "Tie-Break", "Volley"]],
            ["Wie heißt der Fechtkampf mit dem Degen auf Französisch?", "Assaut", ["Ippon", "Scrum", "Chukker"]],
            ["Welche Nation gewann die Fußball-WM 1954?", "Deutschland", ["Ungarn", "Brasilien", "Uruguay"]],
            ["In welcher Sportart gibt es die Position Libero?", "Volleyball", ["Rugby", "Cricket", "Baseball"]],
            ["Wie viele Kugeln liegen beim Snooker zu Beginn auf dem Tisch?", "22", ["15", "16", "21"]],
            ["Welche Stadt war Gastgeber der Olympischen Sommerspiele 2000?", "Sydney", ["Atlanta", "Athen", "Peking"]]
        ],
        genius: [
            ["Wo fanden 1896 die ersten Olympischen Spiele der Neuzeit statt?", "Athen", ["Paris", "London", "Rom"]],
            ["Welche Farbe hat der mittlere Ring im olympischen Symbol?", "Schwarz", ["Grün", "Rot", "Gelb"]],
            ["Zu welcher Sportart gehört der Begriff Keirin?", "Bahnradfahren", ["Rudern", "Fechten", "Curling"]],
            ["Wie heißt im Baseball ein Schlag über alle vier Bases?", "Home Run", ["Touchdown", "Birdie", "Ippon"]],
            ["Welcher Schachweltmeister besiegte 1972 Boris Spasski?", "Bobby Fischer", ["Garry Kasparov", "Magnus Carlsen", "Anatoli Karpow"]],
            ["Welche Schachfigur kann beim Rochieren bewegt werden?", "Turm", ["Dame", "Läufer", "Springer"]],
            ["Wie heißt die Bootsklasse im Rudern mit acht Ruderern und Steuermann?", "Achter", ["Vierer", "Skiff", "Doppelzweier"]],
            ["Welche Stadt war 1924 Gastgeber der ersten Olympischen Winterspiele?", "Chamonix", ["St. Moritz", "Oslo", "Innsbruck"]],
            ["Welcher Begriff bezeichnet im Cricket drei Wickets mit drei aufeinanderfolgenden Würfen?", "Hattrick", ["Century", "Maiden", "Boundary"]],
            ["In welcher Kampfsportart gibt es die Graduierung Dan?", "Judo", ["Polo", "Curling", "Radsport"]]
        ]
    },
    "Musik": {
        easy: [
            ["Welches Instrument hat schwarze und weiße Tasten?", "Klavier", ["Gitarre", "Trompete", "Schlagzeug"]],
            ["Wie nennt man eine Person, die singt?", "Sänger", ["Maler", "Torwart", "Autor"]],
            ["Welches Instrument hat meistens sechs Saiten?", "Gitarre", ["Flöte", "Pauke", "Saxofon"]],
            ["Welches laute Taktinstrument hat oft Becken?", "Schlagzeug", ["Harfe", "Geige", "Cello"]],
            ["Welche Musik hört man oft in Clubs zum Tanzen?", "Dance", ["Oper", "Hörbuch", "Nachrichten"]],
            ["Welches Instrument spielt man mit einem Bogen?", "Geige", ["Trompete", "Schlagzeug", "Akkordeon"]],
            ["Wie nennt man ein Lied ohne Gesang?", "Instrumental", ["Duett", "Refrain", "Chor"]],
            ["Wie heißt der wiederkehrende Hauptteil vieler Lieder?", "Refrain", ["Intro", "Solo", "Pause"]],
            ["Welches Instrument gehört zu den Blechblasinstrumenten?", "Trompete", ["Violine", "Klavier", "Harfe"]],
            ["Wie nennt man eine Gruppe von Sängerinnen und Sängern?", "Chor", ["Orchester", "Bandoneon", "Quartier"]]
        ],
        medium: [
            ["Wie nennt man die Person, die ein Orchester leitet?", "Dirigent", ["Produzent", "DJ", "Solist"]],
            ["Wie viele Linien hat ein normales Notensystem?", "5", ["4", "6", "7"]],
            ["Wie heißt eine hohe Frauenstimme?", "Sopran", ["Bass", "Tenor", "Bariton"]],
            ["Welches Zeichen steht in der Musik für eine Pause?", "Pausenzeichen", ["Kompass", "Apostroph", "Doppelpunkt"]],
            ["Zu welcher Instrumentenfamilie gehört die Trompete?", "Blechblasinstrument", ["Streichinstrument", "Tasteninstrument", "Schlaginstrument"]],
            ["Wie heißt eine tiefe Männerstimme?", "Bass", ["Sopran", "Alt", "Mezzosopran"]],
            ["Welche Note liegt zwischen C und E?", "D", ["F", "A", "H"]],
            ["Wie nennt man das gleichzeitige Erklingen mehrerer Töne?", "Akkord", ["Takt", "Solo", "Pause"]],
            ["Was bedeutet forte in der Musik?", "laut", ["leise", "langsam", "schnell"]],
            ["Wie nennt man die Geschwindigkeit eines Musikstücks?", "Tempo", ["Tonart", "Refrain", "Timbre"]]
        ],
        hard: [
            ["Wie heißt der Abstand von acht Tonstufen?", "Oktave", ["Terz", "Quarte", "Sekunde"]],
            ["Welcher italienische Begriff bedeutet in der Musik leise?", "piano", ["forte", "allegro", "presto"]],
            ["Welcher italienische Begriff bedeutet in der Musik schnell?", "presto", ["largo", "piano", "adagio"]],
            ["Welche Dur-Tonart hat keine Vorzeichen?", "C-Dur", ["D-Dur", "F-Dur", "G-Dur"]],
            ["Wer komponierte die 9. Sinfonie mit der 'Ode an die Freude'?", "Beethoven", ["Mozart", "Bach", "Haydn"]],
            ["Wie viele Kreuze hat E-Dur als Vorzeichen?", "4", ["2", "3", "5"]],
            ["Welche Tonart ist die parallele Molltonart zu C-Dur?", "a-Moll", ["c-Moll", "e-Moll", "g-Moll"]],
            ["Welches Intervall umfasst sieben Halbtonschritte?", "Quinte", ["Quarte", "Sexte", "Oktave"]],
            ["Welcher Komponist schrieb 'Die vier Jahreszeiten'?", "Antonio Vivaldi", ["Johann Sebastian Bach", "Joseph Haydn", "Franz Schubert"]],
            ["Wie nennt man eine Folge von mindestens drei Tönen eines Akkords nacheinander?", "Arpeggio", ["Glissando", "Vibrato", "Tremolo"]]
        ],
        genius: [
            ["Wie heißt die tiefste normale Singstimme?", "Bass", ["Tenor", "Alt", "Sopran"]],
            ["Welches Intervall umfasst drei Halbtöne?", "kleine Terz", ["Quinte", "Oktave", "Prime"]],
            ["Wie heißt Bachs Sammlung 'Das Wohltemperierte ...' vollständig?", "Klavier", ["Cello", "Horn", "Orchester"]],
            ["Wer komponierte die Oper 'Wozzeck'?", "Alban Berg", ["Richard Wagner", "Gustav Mahler", "Arnold Schönberg"]],
            ["Welche Tempoangabe ist langsamer als Andante?", "Adagio", ["Allegro", "Vivace", "Presto"]],
            ["Welche Kirchentonart beginnt auf der weißen Klaviertaste D?", "Dorisch", ["Lydisch", "Mixolydisch", "Phrygisch"]],
            ["Wer schrieb die Oper 'Pelléas et Mélisande'?", "Claude Debussy", ["Maurice Ravel", "Gabriel Fauré", "Erik Satie"]],
            ["Wie heißt eine Reihe aus allen zwölf Halbtönen ohne Wiederholung?", "Zwölftonreihe", ["Pentatonik", "Kadenz", "Ostinato"]],
            ["Welcher Akkord besteht aus Grundton, großer Terz und übermäßiger Quinte?", "übermäßiger Dreiklang", ["verminderter Dreiklang", "Dur-Dreiklang", "Moll-Dreiklang"]],
            ["Welche Taktart hat eine punktierte Viertel als Hauptzählzeit?", "6/8", ["4/4", "3/4", "2/2"]]
        ]
    },
    "Film & Serien": {
        easy: [
            ["Wie heißt die Textgrundlage vor einem Filmdreh?", "Drehbuch", ["Pokal", "Landkarte", "Zeugnis"]],
            ["Wie nennt man die Fortsetzung eines Films?", "Sequel", ["Trailer", "Remake", "Poster"]],
            ["Wie nennt man einen kurzen Werbefilm für einen Film?", "Trailer", ["Abspann", "Maske", "Kulisse"]],
            ["Wie nennt man eine Person, die eine Rolle spielt?", "Schauspieler", ["Schiedsrichter", "Pilot", "Koch"]],
            ["Wie nennt man das Ende eines Films mit den Namen der Beteiligten?", "Abspann", ["Vorspann", "Werbung", "Kamera"]],
            ["Wie nennt man die Person, die einen Film dreht und leitet?", "Regisseur", ["Kameramann", "Komparse", "Kritiker"]],
            ["Wie heißt der Ort, an dem Filme gezeigt werden?", "Kino", ["Theaterprobe", "Stadion", "Museum"]],
            ["Wie nennt man eine gezeichnete Filmfigur?", "Animationsfigur", ["Statist", "Moderator", "Drehort"]],
            ["Was ist ein Filmplakat?", "Poster", ["Mikrofon", "Drehbuchseite", "Kameraobjektiv"]],
            ["Wie nennt man eine Rolle ohne gesprochenen Text im Hintergrund?", "Komparse", ["Hauptrolle", "Regie", "Schnitt"]]
        ],
        medium: [
            ["Wofür steht die Abkürzung CGI?", "Computer Generated Imagery", ["Cinema Graphic Input", "Color Grade Image", "Creative Game Illusion"]],
            ["Wie nennt man die neue Version eines alten Films?", "Remake", ["Sequel", "Pilot", "Spin-off"]],
            ["Wie nennt man die erste Folge einer Serie?", "Pilotfolge", ["Finale", "Trailer", "Abspann"]],
            ["Welches Filmgenre arbeitet oft mit vielen Liedern?", "Musical", ["Thriller", "Western", "Dokumentation"]],
            ["Wie nennt man die Person, die beim Dreh Anweisungen gibt?", "Regisseur", ["Komponist", "Cutter", "Kritiker"]],
            ["Wie nennt man eine Serie aus zusammenhängenden Folgen?", "Staffel", ["Trailer", "Abspann", "Remix"]],
            ["Welche Arbeit übernimmt ein Cutter?", "Schnitt", ["Kostüme", "Musikaufnahme", "Casting"]],
            ["Wie nennt man den Drehort einer Szene?", "Set", ["Suite", "Score", "Sketch"]],
            ["Was ist ein Cameo-Auftritt?", "kurzer Gastauftritt", ["Hauptrolle", "Filmfehler", "Vorspann"]],
            ["Wie nennt man die Musik eines Films?", "Soundtrack", ["Storyboard", "Untertitel", "Schnittliste"]]
        ],
        hard: [
            ["Wie heißt der Preis der Academy Awards?", "Oscar", ["Emmy", "Grammy", "Tony"]],
            ["Welcher Preis wird oft für Fernsehproduktionen vergeben?", "Emmy", ["Oscar", "Goldene Palme", "Bambi"]],
            ["Wie nennt man den Filmschnitt auch?", "Montage", ["Maske", "Kulisse", "Requisite"]],
            ["Wie nennt man die Vorgeschichte zu einem bekannten Film?", "Prequel", ["Sequel", "Remake", "Crossover"]],
            ["Wie nennt man eine Seitengeschichte aus einer Serie?", "Spin-off", ["Pilot", "Trailer", "Abspann"]],
            ["Welcher Film gewann 1994 die Goldene Palme in Cannes?", "Pulp Fiction", ["Forrest Gump", "Schindlers Liste", "Braveheart"]],
            ["Wer führte bei 'Der Pate' Regie?", "Francis Ford Coppola", ["Martin Scorsese", "Steven Spielberg", "Brian De Palma"]],
            ["Wie heißt die künstliche Welt in 'Matrix'?", "Matrix", ["Zion", "Nexus", "Oasis"]],
            ["Welcher Regisseur ist für lange symmetrische Bildkompositionen bekannt?", "Wes Anderson", ["Michael Bay", "James Cameron", "Ridley Scott"]],
            ["Wie nennt man eine ungeschnitten wirkende lange Aufnahme?", "Plansequenz", ["Jump Cut", "Insert", "Reißschwenk"]]
        ],
        genius: [
            ["Welcher Film gewann 1929 den ersten Oscar als bester Film?", "Wings", ["Metropolis", "Sunrise", "The Jazz Singer"]],
            ["Bei welchem Festival wird die Goldene Palme vergeben?", "Cannes", ["Berlin", "Venedig", "Toronto"]],
            ["Wer führte bei 'Rashomon' Regie?", "Akira Kurosawa", ["Hayao Miyazaki", "Yasujiro Ozu", "Kenji Mizoguchi"]],
            ["Wie heißt ein Filmformat mit besonders breitem Bild?", "Cinemascope", ["Mono", "Dolby", "VHS"]],
            ["Wie heißt die Filmbewegung von Godard und Truffaut?", "Nouvelle Vague", ["Dogma 95", "Neorealismus", "Expressionismus"]],
            ["Wer führte bei 'Tokyo Story' Regie?", "Yasujirō Ozu", ["Akira Kurosawa", "Kenji Mizoguchi", "Nagisa Ōshima"]],
            ["Welcher Film von F. W. Murnau gewann 1929 mehrere Oscars, aber nicht den Hauptpreis 'Outstanding Picture'?", "Sunrise", ["Nosferatu", "Faust", "Tabu"]],
            ["Welche Bewegung prägte Filme wie 'Fahrraddiebe'?", "Italienischer Neorealismus", ["Nouvelle Vague", "Dogma 95", "Film noir"]],
            ["Welcher Kameramann drehte viele Filme von Ingmar Bergman?", "Sven Nykvist", ["Vittorio Storaro", "Roger Deakins", "Gordon Willis"]],
            ["Wie heißt der Filmschnitt, bei dem zwei Handlungen parallel montiert werden?", "Parallelmontage", ["Match Cut", "Jump Cut", "Freeze Frame"]]
        ]
    }
};

const QUESTIONS_PER_DIFFICULTY = 200;
const RECENT_ROUND_MEMORY = 15;

function addGeneratedQuestions() {
    addSportQuestions();
    addMusicQuestions();
    addFilmQuestions();
    addMedicineQuestions();
    addHistoryQuestions();
    addTechQuestions();
    hardenGeniusQuestions();
    ensureMinimumQuestionsPerCategory();
}

function hardenGeniusQuestions() {
    const harderGeniusQuestions = {
        "Allgemeinwissen": [
            ["Welche Zahl ist die kleinste Carmichael-Zahl?", "561", ["341", "1105", "1729"]],
            ["Welches chemische Element hat das Symbol Ir?", "Iridium", ["Indium", "Iod", "Eisen"]],
            ["Wie heißt die Diskontinuität zwischen Erdkruste und Erdmantel?", "Mohorovičić-Diskontinuität", ["Gutenberg-Diskontinuität", "Lehmann-Diskontinuität", "Conrad-Diskontinuität"]],
            ["Welche Hauptstadt liegt am Fluss Daugava?", "Riga", ["Vilnius", "Tallinn", "Minsk"]],
            ["Wer bewies Fermats letzten Satz?", "Andrew Wiles", ["Terence Tao", "Grigori Perelman", "Kurt Gödel"]],
            ["Welcher Mond des Neptun bewegt sich retrograd um den Planeten?", "Triton", ["Nereid", "Proteus", "Larissa"]],
            ["Welcher Philosoph prägte den Begriff 'Ding an sich'?", "Immanuel Kant", ["David Hume", "Georg Wilhelm Friedrich Hegel", "Baruch de Spinoza"]],
            ["Welche Sprache ist Amtssprache in Suriname?", "Niederländisch", ["Portugiesisch", "Französisch", "Englisch"]],
            ["Welche mathematische Konstante beschreibt das Verhältnis eines Kreises zu seinem Umfang?", "Pi", ["Phi", "e", "Gamma"]],
            ["Welches Mineral hat auf der Mohs-Skala die Härte 10?", "Diamant", ["Korund", "Topas", "Quarz"]],
            ["Welche Stadt war Hauptstadt des Byzantinischen Reiches?", "Konstantinopel", ["Antiochia", "Alexandria", "Nikaia"]],
            ["Wie heißt die kleinste Primzahl, die größer als 100 ist?", "101", ["103", "97", "107"]],
            ["Welcher Ozean enthält den Kermadecgraben?", "Pazifischer Ozean", ["Atlantischer Ozean", "Indischer Ozean", "Arktischer Ozean"]],
            ["Welcher Nobelpreis wird nicht in Stockholm verliehen?", "Friedensnobelpreis", ["Physik", "Chemie", "Medizin"]],
            ["Welche Einheit misst die katalytische Aktivität im SI-System?", "Katal", ["Sievert", "Becquerel", "Weber"]]
        ],
        "Sport": [
            ["Welche Schacheröffnung beginnt mit 1. e4 c5?", "Sizilianische Verteidigung", ["Französische Verteidigung", "Damengambit", "Spanische Partie"]],
            ["Welcher Radklassiker endet traditionell im Velodrom von Roubaix?", "Paris-Roubaix", ["Mailand-Sanremo", "Lüttich-Bastogne-Lüttich", "Flandern-Rundfahrt"]],
            ["Welche Nation gewann die Rugby-WM 1995?", "Südafrika", ["Neuseeland", "Australien", "England"]],
            ["Welche olympische Bootsklasse bezeichnet ein Ruderboot mit einer Person und zwei Rudern?", "Einer", ["Zweier", "Vierer", "Achter"]],
            ["Wer gewann 1972 das Schach-WM-Duell gegen Boris Spasski?", "Bobby Fischer", ["Anatoli Karpow", "Garry Kasparov", "Magnus Carlsen"]],
            ["Welcher Begriff bezeichnet im Cricket drei Wickets mit drei aufeinanderfolgenden Würfen?", "Hattrick", ["Century", "Maiden", "Boundary"]],
            ["Welche Stadt war 1924 Gastgeber der ersten Olympischen Winterspiele?", "Chamonix", ["St. Moritz", "Oslo", "Innsbruck"]],
            ["Welcher Formel-1-Kurs trägt den Beinamen 'Grüne Hölle'?", "Nürburgring Nordschleife", ["Monza", "Silverstone", "Spa-Francorchamps"]],
            ["Welche Tennis-Spielerin gewann 1988 alle vier Grand Slams und Olympia-Gold?", "Steffi Graf", ["Martina Navratilova", "Serena Williams", "Chris Evert"]],
            ["Welche Disziplin im Bahnradsport stammt aus Japan und nutzt Schrittmacher-Runden?", "Keirin", ["Madison", "Omnium", "Scratch"]],
            ["Welche Trophäe wird dem Sieger der British Open im Golf überreicht?", "Claret Jug", ["Ryder Cup", "Green Jacket", "Stanley Cup"]],
            ["In welcher Sportart gibt es die Begriffe Oche und Checkout?", "Darts", ["Snooker", "Curling", "Bowling"]],
            ["Welches Land gewann die erste Fußball-WM 1930?", "Uruguay", ["Argentinien", "Brasilien", "Italien"]],
            ["Welche Schachfigur steht zu Beginn auf b1 und g1?", "Springer", ["Läufer", "Turm", "Dame"]],
            ["Welche NBA-Franchise draftete Dirk Nowitzki ursprünglich 1998?", "Milwaukee Bucks", ["Dallas Mavericks", "Phoenix Suns", "Boston Celtics"]]
        ],
        "Musik": [
            ["Wer komponierte die Oper 'Wozzeck'?", "Alban Berg", ["Richard Wagner", "Gustav Mahler", "Arnold Schönberg"]],
            ["Welche Reihe aus allen zwölf Halbtönen ohne Wiederholung ist Grundlage der Zwölftontechnik?", "Zwölftonreihe", ["Pentatonik", "Kadenz", "Ostinato"]],
            ["Welcher Komponist schrieb 'Le Sacre du printemps'?", "Igor Strawinsky", ["Sergei Prokofjew", "Claude Debussy", "Béla Bartók"]],
            ["Welche Kirchentonart beginnt auf der weißen Klaviertaste F?", "Lydisch", ["Dorisch", "Phrygisch", "Äolisch"]],
            ["Welcher Akkord besteht aus Grundton, großer Terz und übermäßiger Quinte?", "übermäßiger Dreiklang", ["verminderter Dreiklang", "Dur-Dreiklang", "Moll-Dreiklang"]],
            ["Welche Taktart hat eine punktierte Viertel als Hauptzählzeit?", "6/8", ["4/4", "3/4", "2/2"]],
            ["Wer komponierte 'Pierrot lunaire'?", "Arnold Schönberg", ["Anton Webern", "Alban Berg", "Paul Hindemith"]],
            ["Welche Tonart hat sechs Kreuze?", "Fis-Dur", ["H-Dur", "E-Dur", "Cis-Dur"]],
            ["Wie heißt die Umkehrung eines Quintintervalls?", "Quarte", ["Terz", "Sexte", "Septime"]],
            ["Welcher Komponist schrieb die 'Missa solemnis' op. 123?", "Ludwig van Beethoven", ["Joseph Haydn", "Wolfgang Amadeus Mozart", "Franz Schubert"]],
            ["Welche Form bezeichnet eine strenge Imitationsform mit Thema und Einsätzen?", "Fuge", ["Rondo", "Menuett", "Nocturne"]],
            ["Welche Epoche verbindet man besonders mit Generalbass?", "Barock", ["Romantik", "Impressionismus", "Klassik"]],
            ["Wer komponierte 'Ionisation' für Schlagzeugensemble?", "Edgard Varèse", ["John Cage", "Steve Reich", "Iannis Xenakis"]],
            ["Welche Skala besteht nur aus Halbtonschritten?", "chromatische Skala", ["pentatonische Skala", "Ganztonleiter", "dorische Skala"]],
            ["Welche Oper beginnt mit dem Akkord, der oft als 'Tristan-Akkord' bezeichnet wird?", "Tristan und Isolde", ["Parsifal", "Lohengrin", "Tannhäuser"]]
        ],
        "Film & Serien": [
            ["Wer führte bei 'Jeanne Dielman' Regie?", "Chantal Akerman", ["Agnès Varda", "Claire Denis", "Jane Campion"]],
            ["Welcher sowjetische Regisseur prägte die Montageteorie?", "Sergei Eisenstein", ["Andrei Tarkowski", "Dziga Vertov", "Vsevolod Pudovkin"]],
            ["Wer führte bei 'Tokyo Story' Regie?", "Yasujirō Ozu", ["Akira Kurosawa", "Kenji Mizoguchi", "Nagisa Ōshima"]],
            ["Welcher Film von F. W. Murnau gewann 1929 mehrere Oscars, aber nicht den Hauptpreis 'Outstanding Picture'?", "Sunrise", ["Nosferatu", "Faust", "Tabu"]],
            ["Welche Bewegung prägte Filme wie 'Fahrraddiebe'?", "Italienischer Neorealismus", ["Nouvelle Vague", "Dogma 95", "Film noir"]],
            ["Welcher Kameramann drehte viele Filme von Ingmar Bergman?", "Sven Nykvist", ["Vittorio Storaro", "Roger Deakins", "Gordon Willis"]],
            ["Wie heißt der Filmschnitt, bei dem zwei Handlungen parallel montiert werden?", "Parallelmontage", ["Match Cut", "Jump Cut", "Freeze Frame"]],
            ["Welcher Film gewann 1929 den ersten Oscar als bester Film?", "Wings", ["Metropolis", "Sunrise", "The Jazz Singer"]],
            ["Welche Bewegung verband Lars von Trier mit Thomas Vinterberg?", "Dogma 95", ["Nouvelle Vague", "Neorealismus", "Cinéma vérité"]],
            ["Wer führte bei 'Rashomon' Regie?", "Akira Kurosawa", ["Hayao Miyazaki", "Yasujiro Ozu", "Kenji Mizoguchi"]],
            ["Welcher Kameramann ist eng mit 'Der Pate' verbunden?", "Gordon Willis", ["Sven Nykvist", "Vittorio Storaro", "Conrad Hall"]],
            ["Welcher Film gewann 1951 in Venedig den Goldenen Löwen und stammt von Akira Kurosawa?", "Rashomon", ["Ikiru", "Die sieben Samurai", "Yojimbo"]],
            ["Wie heißt die britische Dokumentarfilmbewegung um John Grierson?", "Documentary Movement", ["Free Cinema", "Kitchen Sink", "Cinema Novo"]],
            ["Welcher Begriff beschreibt im Film noir eine desillusionierte männliche Hauptfigur?", "Antiheld", ["MacGuffin", "Auteur", "Foley Artist"]],
            ["Wer komponierte häufig die Musik für Sergio Leones Western?", "Ennio Morricone", ["Nino Rota", "Bernard Herrmann", "John Williams"]]
        ],
        "Medizin": [
            ["Welcher Rezeptortyp wird durch Adrenalin am Herzen stark aktiviert?", "Beta-1-Rezeptor", ["H1-Rezeptor", "NMDA-Rezeptor", "D2-Rezeptor"]],
            ["Welcher Laborwert steigt typischerweise bei Myokardschaden?", "Troponin", ["Bilirubin", "Kreatinin", "Albumin"]],
            ["Welches Enzym wandelt Angiotensin I in Angiotensin II um?", "ACE", ["Amylase", "Lipase", "Laktase"]],
            ["Welcher Gerinnungsfaktor heißt Fibrinogen?", "Faktor I", ["Faktor II", "Faktor VIII", "Faktor X"]],
            ["Welche Erkrankung wird durch Prionen verursacht?", "Creutzfeldt-Jakob-Krankheit", ["Masern", "Malaria", "Cholera"]],
            ["Welche Struktur verbindet die beiden Großhirnhemisphären?", "Corpus callosum", ["Pons", "Thalamus", "Hypothalamus"]],
            ["Welche Hirnhaut liegt direkt dem Gehirn an?", "Pia mater", ["Dura mater", "Arachnoidea", "Endoneurium"]],
            ["Welcher Teil des Nephrons konzentriert den Urin stark mit?", "Henle-Schleife", ["Bowman-Kapsel", "Glomerulus", "Sammelrohr"]],
            ["Welches Ion ist zentral für die Kopplung von Erregung und Kontraktion im Muskel?", "Calcium", ["Natrium", "Chlorid", "Lithium"]],
            ["Welche Zellen produzieren Immunglobuline?", "Plasmazellen", ["Osteoklasten", "Eosinophile", "Fibroblasten"]],
            ["Welcher Hirnnerv ist der Nervus trigeminus?", "V. Hirnnerv", ["III. Hirnnerv", "VII. Hirnnerv", "X. Hirnnerv"]],
            ["Welche Struktur enthält die Schrittmacherzellen des Herzens?", "Sinusknoten", ["AV-Klappe", "Papillarmuskel", "Chordae tendineae"]],
            ["Welcher Stoff ist das Endprodukt des Purinabbaus beim Menschen?", "Harnsäure", ["Harnstoff", "Kreatinin", "Bilirubin"]],
            ["Welche Zellen bilden Myelin im zentralen Nervensystem?", "Oligodendrozyten", ["Schwann-Zellen", "Astrozyten", "Mikroglia"]],
            ["Welche Blutgruppe gilt im AB0-System als Universalspender für Erythrozyten?", "0 negativ", ["AB positiv", "A negativ", "B positiv"]]
        ],
        "Geschichte": [
            ["Welcher Historiker schrieb über den Peloponnesischen Krieg?", "Thukydides", ["Herodot", "Tacitus", "Polybius"]],
            ["Welcher Vertrag teilte 843 das Frankenreich?", "Vertrag von Verdun", ["Vertrag von Tordesillas", "Frieden von Basel", "Prager Frieden"]],
            ["Wer war der erste Kalif nach Mohammed?", "Abu Bakr", ["Ali", "Umar", "Uthman"]],
            ["Welches Konzil begann 1545?", "Konzil von Trient", ["Konzil von Nicäa", "Konzil von Konstanz", "Laterankonzil"]],
            ["Welche Schlacht stoppte 732 die Expansion der Umayyaden in Franken?", "Tours und Poitiers", ["Hastings", "Bouvines", "Crécy"]],
            ["Welcher Orden wurde 1312 offiziell aufgehoben?", "Templerorden", ["Deutscher Orden", "Jesuitenorden", "Franziskanerorden"]],
            ["Welche Reformen sind mit Preußen nach 1806 verbunden?", "Stein-Hardenberg-Reformen", ["Agrarreformen Solons", "Märzreformen", "Meiji-Restauration"]],
            ["Welche Quelle berichtet vom Vesuvausbruch 79 n. Chr. in Briefen?", "Plinius der Jüngere", ["Cicero", "Seneca", "Livius"]],
            ["Welche Epoche folgte in Europa auf die Karolingerzeit?", "Ottonenzeit", ["Renaissance", "Hellenismus", "Biedermeier"]],
            ["Welcher Vertrag regelte 1494 die Einflusszonen Spaniens und Portugals?", "Vertrag von Tordesillas", ["Vertrag von Verdun", "Frieden von Utrecht", "Westfälischer Friede"]],
            ["Welche Dynastie regierte China während Zheng Hes Expeditionen?", "Ming", ["Qing", "Song", "Yuan"]],
            ["Welcher römische Kaiser erließ 212 die Constitutio Antoniniana?", "Caracalla", ["Diokletian", "Hadrian", "Trajan"]],
            ["Welche Schlacht beendete 1071 die byzantinische Dominanz in Anatolien?", "Manzikert", ["Hattin", "Tours", "Nikopolis"]],
            ["Wer war der letzte Kaiser des Weströmischen Reiches?", "Romulus Augustulus", ["Julius Nepos", "Honorius", "Majorian"]],
            ["Welche Stadt war Zentrum der Abbasiden-Herrschaft nach 762?", "Bagdad", ["Damaskus", "Kairo", "Cordoba"]]
        ],
        "Technik": [
            ["Was beschreibt CAP-Theorem?", "Abwägung in verteilten Systemen", ["Farbkalibrierung", "CPU-Kühlung", "HTML-Syntax"]],
            ["Welche Struktur nutzt Dijkstra häufig zur effizienten Knotenauswahl?", "Prioritätswarteschlange", ["Ringpuffer", "Bitmap", "Stacktrace"]],
            ["Was bedeutet Idempotenz bei einer Operation?", "mehrfaches Ausführen ändert das Ergebnis nicht weiter", ["Operation ist immer schnell", "Operation braucht Internet", "Operation löscht Speicher"]],
            ["Was ist ein Deadlock?", "gegenseitiges Warten von Prozessen", ["kaputter Bildschirm", "defektes Kabel", "falscher DNS-Name"]],
            ["Welche Schicht des OSI-Modells beschreibt TCP?", "Transportschicht", ["Bitübertragungsschicht", "Sitzungsschicht", "Darstellungsschicht"]],
            ["Welche Eigenschaft soll ein kryptografischer Hash besonders haben?", "Kollisionsresistenz", ["hohe Lautstärke", "niedrige Auflösung", "sichtbare Kabelung"]],
            ["Was ist eine ACID-Eigenschaft?", "Transaktionssicherheit", ["Bildkompression", "Akkuchemie", "Funkreichweite"]],
            ["Welcher Konsensalgorithmus wird klassisch mit Lamport verbunden?", "Paxos", ["Dijkstra", "A*", "Huffman"]],
            ["Welche Speicherverwaltungsstrategie sammelt nicht mehr erreichbare Objekte ein?", "Garbage Collection", ["Polling", "Sharding", "Throttling"]],
            ["Welche Datenstruktur erlaubt Union-Find besonders effizient?", "Disjoint Set", ["Bloom Filter", "Trie", "Deque"]],
            ["Was beschreibt ein Bloom Filter?", "probabilistische Mengenprüfung", ["verlustfreie Kompression", "Grafikkartenbus", "Netzwerktopologie"]],
            ["Welche Normalform eliminiert transitive Abhängigkeiten?", "3. Normalform", ["1. Normalform", "Boyce-Codd ohne Schlüssel", "0. Normalform"]],
            ["Welches Protokoll nutzt TLS typischerweise zur Zertifikatsprüfung im Web?", "HTTPS", ["SMTP ohne TLS", "FTP", "ARP"]],
            ["Welches Problem löst ein Mutex?", "gegenseitigen Ausschluss", ["Bildskalierung", "DNS-Auflösung", "Datenkompression"]],
            ["Welche Technik verteilt Daten horizontal auf mehrere Datenbankknoten?", "Sharding", ["Hashing", "Inlining", "Polling"]]
        ]
    };

    Object.entries(harderGeniusQuestions).forEach(([category, questions]) => {
        if (category !== "Allgemeinwissen" && questionData[category]) {
            questionData[category].genius = questions;
        }
    });
}

function addSportQuestions() {
    const groups = questionData["Sport"];

    const easyFacts = [
        ["Welche Sportart spielte Michael Jordan berühmt?", "Basketball", ["Tennis", "Handball", "Golf"]],
        ["In welcher Sportart ist Lionel Messi bekannt?", "Fußball", ["Baseball", "Rugby", "Eishockey"]],
        ["Welche Sportart wird bei Wimbledon gespielt?", "Tennis", ["Golf", "Cricket", "Badminton"]],
        ["Wie heißt der Torwart im Fußball auch?", "Keeper", ["Center", "Pitcher", "Sprinter"]],
        ["Welche Sportart nutzt einen Puck?", "Eishockey", ["Basketball", "Volleyball", "Handball"]],
        ["Welcher Sport wird oft im Schwimmbecken ausgeübt?", "Schwimmen", ["Radsport", "Boxen", "Skispringen"]],
        ["Welche Sportart nutzt ein Netz in der Mitte des Feldes?", "Volleyball", ["Boxen", "Golf", "Rudern"]],
        ["Bei welcher Sportart fährt man die Tour de France?", "Radsport", ["Ski Alpin", "Fechten", "Judo"]],
        ["Welche Sportart machte Dirk Nowitzki weltberühmt?", "Basketball", ["Fußball", "Tennis", "Handball"]],
        ["Welche Farbe hat der Ball im klassischen Tennis oft?", "Gelb", ["Schwarz", "Braun", "Lila"]],
        ["Welche Sportart hat einen Elfmeter?", "Fußball", ["Golf", "Boxen", "Curling"]],
        ["Welche Sportart findet in einem Ring statt?", "Boxen", ["Tennis", "Segeln", "Radsport"]]
    ];
    addUniqueQuestions(groups.easy, easyFacts);

    const mediumFacts = [
        ["Wer gewann mit Argentinien die Fußball-WM 2022 als Kapitän?", "Lionel Messi", ["Cristiano Ronaldo", "Neymar", "Kylian Mbappé"]],
        ["Welche Stadt ist traditionell mit dem Tennisturnier auf Rasen verbunden?", "Wimbledon", ["Monaco", "Boston", "Dortmund"]],
        ["Wie nennt man im Fußball einen Treffer aus der eigenen Hälfte selten?", "Traumtor", ["Ippon", "Birdie", "Ace"]],
        ["Welche Nation gewann die Fußball-WM 2014?", "Deutschland", ["Brasilien", "Spanien", "Frankreich"]],
        ["Welcher Schwimmer gewann viele olympische Goldmedaillen für die USA?", "Michael Phelps", ["Usain Bolt", "Roger Federer", "Tom Brady"]],
        ["Welche Sportart nutzt den Begriff Birdie?", "Golf", ["Judo", "Boxen", "Volleyball"]],
        ["In welcher Sportart gibt es die Position Quarterback?", "American Football", ["Basketball", "Eishockey", "Handball"]],
        ["Wie heißt ein direkter Aufschlagpunkt im Tennis?", "Ass", ["Scrum", "Touchdown", "Dunk"]],
        ["Welche deutsche Tennisspielerin gewann 1988 den Golden Slam?", "Steffi Graf", ["Angelique Kerber", "Sabine Lisicki", "Andrea Petkovic"]],
        ["Welche Sportart nutzt den Begriff Ippon?", "Judo", ["Cricket", "Golf", "Baseball"]],
        ["Bei welchem Wettbewerb trägt der Führende oft das Gelbe Trikot?", "Tour de France", ["Wimbledon", "Super Bowl", "Davis Cup"]],
        ["Welche Sportart ist mit dem Super Bowl verbunden?", "American Football", ["Eishockey", "Baseball", "Rugby"]]
    ];
    addUniqueQuestions(groups.medium, mediumFacts);

    const hardFacts = [
        ["Welche Tennisoberfläche wird bei Wimbledon gespielt?", "Rasen", ["Sand", "Hartplatz", "Teppich"]],
        ["Wie viele Spieler stehen beim Handball pro Team auf dem Feld?", "7", ["5", "6", "8"]],
        ["Welche Sportart nutzt den Begriff Scrum?", "Rugby", ["Cricket", "Hockey", "Lacrosse"]],
        ["Wie heißt der Weltverband der Leichtathletik?", "World Athletics", ["FIFA", "UCI", "FINA"]],
        ["Welche Stadt war Gastgeber der Olympischen Sommerspiele 1992?", "Barcelona", ["Seoul", "Atlanta", "Los Angeles"]],
        ["Wer stellte 2009 den 100-Meter-Weltrekord der Männer auf?", "Usain Bolt", ["Carl Lewis", "Asafa Powell", "Yohan Blake"]],
        ["Welche Nation gewann die Rugby-WM 2019?", "Südafrika", ["England", "Neuseeland", "Frankreich"]],
        ["Welche Schachfigur bewegt sich diagonal?", "Läufer", ["Turm", "Springer", "Bauer"]],
        ["Welcher Verein gewann 2013 das Champions-League-Finale gegen Dortmund?", "FC Bayern München", ["Real Madrid", "FC Barcelona", "Chelsea"]],
        ["Was bedeutet VAR im Fußball?", "Video Assistant Referee", ["Very Active Runner", "Virtual Attack Rule", "Verified Arena Result"]],
        ["Wie heißt der Pokal für den NHL-Meister?", "Stanley Cup", ["Vince Lombardi Trophy", "Davis Cup", "Ryder Cup"]],
        ["Welche Disziplin kombiniert Skispringen und Langlauf?", "Nordische Kombination", ["Biathlon", "Ski Alpin", "Skeleton"]]
    ];
    addUniqueQuestions(groups.hard, hardFacts);

    const geniusFacts = [
        ["Welche Schacheröffnung beginnt mit 1. e4 c5?", "Sizilianische Verteidigung", ["Französische Verteidigung", "Damengambit", "Spanische Partie"]],
        ["Wie heißt ein perfektes Spiel im Bowling?", "300", ["180", "240", "360"]],
        ["Welcher Radklassiker endet traditionell im Velodrom von Roubaix?", "Paris-Roubaix", ["Mailand-Sanremo", "Lüttich-Bastogne-Lüttich", "Flandern-Rundfahrt"]],
        ["Welche Nation gewann die Rugby-WM 1995?", "Südafrika", ["Neuseeland", "Australien", "England"]],
        ["Wie heißt die olympische Bootsklasse mit einer Person und zwei Rudern?", "Einer", ["Zweier", "Vierer", "Achter"]],
        ["Welcher Boxer wurde als 'The Greatest' bekannt?", "Muhammad Ali", ["Mike Tyson", "Joe Frazier", "George Foreman"]],
        ["Welche Schacheröffnung beginnt typischerweise mit 1. d4 d5 2. c4?", "Damengambit", ["Königsgambit", "Caro-Kann", "Skandinavische Verteidigung"]],
        ["Welcher Fahrer gewann sieben Formel-1-WM-Titel gemeinsam mit Hamilton als Rekordmarke?", "Michael Schumacher", ["Sebastian Vettel", "Ayrton Senna", "Niki Lauda"]],
        ["Welche Stadt richtete 1964 und 2021 Olympische Sommerspiele aus?", "Tokio", ["Seoul", "Peking", "Sydney"]],
        ["Welcher Begriff bezeichnet im Cricket drei Wickets mit drei aufeinanderfolgenden Würfen?", "Hattrick", ["Century", "Maiden", "Boundary"]],
        ["Wer gewann 1972 das Schach-WM-Duell gegen Boris Spasski?", "Bobby Fischer", ["Anatoli Karpow", "Garry Kasparov", "Magnus Carlsen"]],
        ["Welche Trophäe bekommt der Sieger des Ryder Cups?", "Ryder Cup", ["Claret Jug", "Stanley Cup", "Davis Cup"]]
    ];
    addUniqueQuestions(groups.genius, geniusFacts);
}

function addMusicQuestions() {
    const groups = questionData["Musik"];

    const easyFacts = [
        ["Welches Instrument hat Tasten und Pedale?", "Klavier", ["Trompete", "Geige", "Triangel"]],
        ["Wie nennt man mehrere Musiker zusammen?", "Band", ["Karte", "Pinsel", "Teller"]],
        ["Welches Instrument wird oft gezupft?", "Gitarre", ["Trommel", "Flöte", "Pauke"]],
        ["Welche Person schreibt Musikstücke?", "Komponist", ["Schiedsrichter", "Pilot", "Bäcker"]],
        ["Wie nennt man eine gesungene Melodie mit Text?", "Lied", ["Gemälde", "Rezept", "Karte"]],
        ["Welches Instrument gehört zu einem klassischen Orchester?", "Violine", ["Bohrmaschine", "Lenkrad", "Tastatur"]],
        ["Wie nennt man lautes Singen mehrerer Personen?", "Chor", ["Solo", "Flüstern", "Pause"]],
        ["Welches Gerät nutzt ein DJ häufig?", "Mischpult", ["Mikroskop", "Kompass", "Toaster"]],
        ["Welche Musikrichtung ist eng mit Improvisation verbunden?", "Jazz", ["Nachrichten", "Hörspiel", "Wetterbericht"]],
        ["Wie nennt man den Anfang eines Musikstücks oft?", "Intro", ["Abspann", "Elfmeter", "Kapitel"]]
    ];
    addUniqueQuestions(groups.easy, easyFacts);

    const mediumFacts = [
        ["Welche Epoche verbindet man stark mit Bach und Händel?", "Barock", ["Romantik", "Hip-Hop", "Impressionismus"]],
        ["Wie nennt man eine Tonfolge, die man gut wiedererkennt?", "Melodie", ["Kabel", "Kulisse", "Index"]],
        ["Welches Instrument spielt man mit Sticks?", "Schlagzeug", ["Harfe", "Oboe", "Cello"]],
        ["Wie nennt man den wiederholten Grundschlag eines Songs?", "Beat", ["Poster", "Dialog", "Filter"]],
        ["Was bedeutet piano als Lautstärkeangabe?", "leise", ["laut", "schneller", "höher"]],
        ["Welche Stimmlage ist höher als Alt?", "Sopran", ["Bass", "Bariton", "Tenor"]],
        ["Wie nennt man das Zusammenspiel verschiedener Töne?", "Harmonie", ["Kulisse", "Linse", "Szene"]],
        ["Welcher Begriff beschreibt die Geschwindigkeit eines Stücks?", "Tempo", ["Farbe", "Material", "Licht"]],
        ["Welche Instrumentenfamilie umfasst Klarinette und Oboe?", "Holzblasinstrumente", ["Blechbläser", "Schlagwerk", "Tasteninstrumente"]],
        ["Wie nennt man einen kurzen, einprägsamen Musikabschnitt?", "Motiv", ["Abspann", "Torwart", "Kamera"]]
    ];
    addUniqueQuestions(groups.medium, mediumFacts);

    const hardFacts = [
        ["Welche Molltonart hat drei b als Vorzeichen?", "c-Moll", ["a-Moll", "d-Moll", "g-Moll"]],
        ["Welcher Komponist schrieb 'Eine kleine Nachtmusik'?", "Mozart", ["Haydn", "Beethoven", "Schubert"]],
        ["Wie nennt man eine wiederholte Bassfigur?", "Ostinato", ["Kadenz", "Fuge", "Arie"]],
        ["Welche Tonart hat ein Kreuz als Vorzeichen?", "G-Dur", ["F-Dur", "C-Dur", "Es-Dur"]],
        ["Wie nennt man das allmähliche Lauterwerden?", "Crescendo", ["Diminuendo", "Legato", "Staccato"]]
    ];
    addUniqueQuestions(groups.hard, hardFacts);

    const geniusFacts = [
        ["Welche Kirchentonart beginnt auf F?", "Lydisch", ["Dorisch", "Phrygisch", "Äolisch"]],
        ["Wer komponierte 'Le Sacre du printemps'?", "Igor Strawinsky", ["Sergei Prokofjew", "Claude Debussy", "Béla Bartók"]],
        ["Wie nennt man eine Komposition mit Thema und imitierenden Stimmen?", "Fuge", ["Sonate", "Rondo", "Etüde"]],
        ["Welche Skala besteht aus fünf Tönen?", "Pentatonik", ["Chromatik", "Ganztonleiter", "Molltonleiter"]],
        ["Welches Intervall umfasst sechs Halbtonschritte?", "Tritonus", ["Quarte", "Quinte", "kleine Sexte"]]
    ];
    addUniqueQuestions(groups.genius, geniusFacts);
}

function addFilmQuestions() {
    const groups = questionData["Film & Serien"];

    const easyFacts = [
        ["Wie nennt man eine Folge einer Serie?", "Episode", ["Kapiteldeckel", "Torlinie", "Notenblatt"]],
        ["Wer steht bei Dreharbeiten vor der Kamera?", "Schauspieler", ["Schiedsrichter", "Mechaniker", "Zahnarzt"]],
        ["Wie nennt man den Ort, an dem eine Szene gedreht wird?", "Set", ["Ring", "Becken", "Bahnsteig"]],
        ["Was sieht man sich vor einem Filmstart oft als Werbung an?", "Trailer", ["Quittung", "Spielstand", "Fahrplan"]],
        ["Wie nennt man eine gezeichnete Filmart?", "Animation", ["Operation", "Navigation", "Reformation"]],
        ["Welcher Raum zeigt Filme auf großer Leinwand?", "Kino", ["Labor", "Werkstatt", "Bibliothek"]],
        ["Wie nennt man die Kleidung der Figuren im Film?", "Kostüm", ["Kompass", "Werkzeug", "Rezept"]],
        ["Wer leitet typischerweise einen Filmdreh?", "Regisseur", ["Torwart", "Dirigent im Stadion", "Kapitän zur See"]],
        ["Wie nennt man gesprochene Texte unter dem Bild?", "Untertitel", ["Abzeichen", "Spielfeld", "Notensystem"]],
        ["Was ist ein Filmplakat?", "Poster", ["Objektiv", "Mikrofon", "Schnittprogramm"]]
    ];
    addUniqueQuestions(groups.easy, easyFacts);

    const mediumFacts = [
        ["Wie nennt man eine neue Version eines bekannten Films?", "Remake", ["Abspann", "Soundcheck", "Foul"]],
        ["Was bezeichnet ein Spin-off?", "Ableger einer Serie oder eines Films", ["Tonfehler", "Kamerastativ", "Kinoticket"]],
        ["Welche Aufgabe hat die Kamera beim Film?", "Bilder aufnehmen", ["Kostüme nähen", "Musik komponieren", "Tickets verkaufen"]],
        ["Wie nennt man die Nachbearbeitung eines Filmschnitts?", "Montage", ["Aufschlag", "Diagnose", "Akkord"]],
        ["Welche Person schreibt das Drehbuch?", "Drehbuchautor", ["Cutter", "Maskenbildner", "Kinobetreiber"]],
        ["Was ist ein Cameo?", "kurzer Gastauftritt", ["Hauptpreis", "Kameraobjektiv", "Werbepause"]],
        ["Wie nennt man die Musik zu einem Film?", "Soundtrack", ["Storyboard", "Untertitel", "Schnittliste"]],
        ["Was bedeutet Genre bei Filmen?", "Gattung oder Art", ["Kameramarke", "Ticketpreis", "Drehort"]],
        ["Wie nennt man eine Serie mit zusammengehörigen Folgenblöcken?", "Staffel", ["Szene", "Premiere", "Plakat"]],
        ["Welche Arbeit übernimmt die Maske?", "Aussehen der Darsteller gestalten", ["Dialoge schreiben", "Kameras tragen", "Kinosaal reinigen"]]
    ];
    addUniqueQuestions(groups.medium, mediumFacts);

    const hardFacts = [
        ["Wer führte bei 'Taxi Driver' Regie?", "Martin Scorsese", ["Francis Ford Coppola", "Brian De Palma", "Sidney Lumet"]],
        ["Welche Serie spielt hauptsächlich in Hawkins?", "Stranger Things", ["Dark", "Lost", "The X-Files"]],
        ["Welcher Film gewann 2004 den Oscar als bester Film?", "Der Herr der Ringe: Die Rückkehr des Königs", ["Lost in Translation", "Mystic River", "Seabiscuit"]],
        ["Wie nennt man den bewussten Bruch der vierten Wand?", "Meta-Kommentar", ["Jump Cut", "Storyboard", "Foley"]],
        ["Welche Filmtechnik erzeugt Bewegungen Bild für Bild?", "Stop-Motion", ["Motion Blur", "Rotoskopie", "Split Screen"]]
    ];
    addUniqueQuestions(groups.hard, hardFacts);

    const geniusFacts = [
        ["Wer drehte den Stummfilm 'Der letzte Mann'?", "F. W. Murnau", ["Fritz Lang", "G. W. Pabst", "Ernst Lubitsch"]],
        ["Welcher Kameramann ist eng mit 'Der Pate' verbunden?", "Gordon Willis", ["Sven Nykvist", "Vittorio Storaro", "Conrad Hall"]],
        ["Welche Bewegung verband Lars von Trier mit Thomas Vinterberg?", "Dogma 95", ["Nouvelle Vague", "Neorealismus", "Cinéma vérité"]],
        ["Wer führte bei 'Jeanne Dielman' Regie?", "Chantal Akerman", ["Agnès Varda", "Claire Denis", "Jane Campion"]],
        ["Welcher sowjetische Regisseur prägte die Montageteorie?", "Sergei Eisenstein", ["Andrei Tarkowski", "Dziga Vertov", "Vsevolod Pudovkin"]]
    ];
    addUniqueQuestions(groups.genius, geniusFacts);
}

function addMedicineQuestions() {
    questionData["Medizin"] = {
        easy: [
            ["Welches Organ pumpt Blut durch den Körper?", "Herz", ["Magen", "Lunge", "Niere"]],
            ["Welches Organ ist hauptsächlich für das Atmen zuständig?", "Lunge", ["Leber", "Milz", "Blase"]],
            ["Wie nennt man die Knochen im Kopf?", "Schädel", ["Becken", "Rippe", "Wirbel"]],
            ["Was misst ein Thermometer beim Menschen?", "Körpertemperatur", ["Blutgruppe", "Pulsfarbe", "Körpergröße"]],
            ["Welche Flüssigkeit transportiert Sauerstoff im Körper?", "Blut", ["Speichel", "Galle", "Tränen"]],
            ["Welcher Sinn nutzt die Augen?", "Sehen", ["Riechen", "Schmecken", "Hören"]],
            ["Wie nennt man den Herzschlag, den man fühlen kann?", "Puls", ["Reflex", "Atmung", "Durst"]],
            ["Was schützt viele Knochen an Gelenkflächen?", "Knorpel", ["Zahnschmelz", "Hornhaut", "Haarwurzel"]],
            ["Welches Organ filtert Blut und bildet Urin?", "Niere", ["Magen", "Kehlkopf", "Bauchspeicheldrüse"]],
            ["Welche Blutkörperchen transportieren Sauerstoff?", "rote Blutkörperchen", ["Blutplättchen", "Nervenzellen", "Hautzellen"]]
        ],
        medium: [
            ["Wie heißt der medizinische Fachbegriff für Bluthochdruck?", "Hypertonie", ["Hypoglykämie", "Anämie", "Arthrose"]],
            ["Welches Hormon senkt den Blutzucker?", "Insulin", ["Adrenalin", "Melatonin", "Thyroxin"]],
            ["Welches Organ produziert Gallenflüssigkeit?", "Leber", ["Magen", "Niere", "Milz"]],
            ["Wie heißt der größte Knochen des Menschen?", "Oberschenkelknochen", ["Oberarmknochen", "Schlüsselbein", "Schienbein"]],
            ["Welche Zellen sind wichtig für die Blutgerinnung?", "Thrombozyten", ["Erythrozyten", "Neuronen", "Melanozyten"]],
            ["Wie nennt man eine Entzündung der Bronchien?", "Bronchitis", ["Gastritis", "Dermatitis", "Nephritis"]],
            ["Welches Vitamin bildet der Körper mit Sonnenlicht?", "Vitamin D", ["Vitamin C", "Vitamin K", "Vitamin B12"]],
            ["Was ist die Hauptaufgabe der Alveolen?", "Gasaustausch", ["Blutgerinnung", "Verdauung", "Hormonbildung"]],
            ["Wie heißt ein zu niedriger Blutzucker?", "Hypoglykämie", ["Hypertonie", "Tachykardie", "Skoliose"]],
            ["Welches Organ enthält die Langerhans-Inseln?", "Bauchspeicheldrüse", ["Leber", "Schilddrüse", "Milz"]]
        ],
        hard: [
            ["Welcher Nerv steuert große Teile des Parasympathikus?", "Nervus vagus", ["Nervus opticus", "Nervus facialis", "Nervus radialis"]],
            ["Wie heißt die kleinste funktionelle Einheit der Niere?", "Nephron", ["Neuron", "Alveole", "Osteon"]],
            ["Welches Antibiotikum gehört zu den Betalaktamen?", "Penicillin", ["Ibuprofen", "Metformin", "Heparin"]],
            ["Welche Herzklappe liegt zwischen linkem Vorhof und linker Kammer?", "Mitralklappe", ["Pulmonalklappe", "Trikuspidalklappe", "Aortenklappe"]],
            ["Wie heißt der erste Halswirbel?", "Atlas", ["Axis", "Sacrum", "Sternum"]],
            ["Welcher Blutwert zeigt häufig eine Entzündung an?", "CRP", ["HbA1c", "TSH", "LDL"]],
            ["Welcher Erreger verursacht Tuberkulose?", "Mycobacterium tuberculosis", ["Streptococcus pyogenes", "Candida albicans", "Norovirus"]],
            ["Wie nennt man eine Minderdurchblutung von Gewebe?", "Ischämie", ["Ödem", "Embolie", "Fibrose"]],
            ["Welches Medikament hemmt die Blutgerinnung?", "Heparin", ["Paracetamol", "Loratadin", "Omeprazol"]],
            ["Welcher Teil des Gehirns koordiniert Bewegungen?", "Kleinhirn", ["Hypophyse", "Balken", "Hippocampus"]]
        ],
        genius: [
            ["Welcher Rezeptortyp wird durch Adrenalin am Herzen stark aktiviert?", "Beta-1-Rezeptor", ["H1-Rezeptor", "NMDA-Rezeptor", "D2-Rezeptor"]],
            ["Welche Struktur verbindet die beiden Großhirnhemisphären?", "Corpus callosum", ["Pons", "Thalamus", "Hypothalamus"]],
            ["Welcher Laborwert steigt typischerweise bei Myokardschaden?", "Troponin", ["Bilirubin", "Kreatinin", "Albumin"]],
            ["Welches Enzym wandelt Angiotensin I in Angiotensin II um?", "ACE", ["Amylase", "Lipase", "Laktase"]],
            ["Welche Zellen produzieren Antikörper?", "Plasmazellen", ["Osteoklasten", "Eosinophile", "Fibroblasten"]],
            ["Welche Hirnhaut liegt direkt dem Gehirn an?", "Pia mater", ["Dura mater", "Arachnoidea", "Endoneurium"]],
            ["Welcher Gerinnungsfaktor heißt Fibrinogen?", "Faktor I", ["Faktor II", "Faktor VIII", "Faktor X"]],
            ["Welches Ion ist zentral für die Muskelkontraktion?", "Calcium", ["Chlorid", "Fluorid", "Lithium"]],
            ["Welche Erkrankung wird durch Prionen verursacht?", "Creutzfeldt-Jakob-Krankheit", ["Masern", "Malaria", "Cholera"]],
            ["Welcher Teil des Nephrons konzentriert den Urin stark mit?", "Henle-Schleife", ["Bowman-Kapsel", "Glomerulus", "Sammelrohr"]]
        ]
    };
}

function addHistoryQuestions() {
    questionData["Geschichte"] = {
        easy: [
            ["Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?", "Konrad Adenauer", ["Willy Brandt", "Helmut Kohl", "Gerhard Schröder"]],
            ["In welchem Jahr fiel die Berliner Mauer?", "1989", ["1975", "1999", "2001"]],
            ["Welche Stadt war im antiken Rom das Zentrum des Reiches?", "Rom", ["Athen", "Sparta", "Karthago"]],
            ["Wer entdeckte 1492 für Europa Amerika?", "Christoph Kolumbus", ["Marco Polo", "James Cook", "Vasco da Gama"]],
            ["Wie hieß das alte Ägypten bekannte Herrscheramt?", "Pharao", ["Kaiser", "Konsul", "Zar"]],
            ["Welcher Krieg endete 1945 in Europa?", "Zweiter Weltkrieg", ["Erster Weltkrieg", "Dreißigjähriger Krieg", "Kalter Krieg"]],
            ["Welche Epoche kam nach dem Mittelalter?", "Neuzeit", ["Steinzeit", "Bronzezeit", "Antike"]],
            ["Welche Stadt wurde durch Pompeji bekannt?", "Pompeji", ["Florenz", "Mailand", "Turin"]],
            ["Wer war Napoleon Bonaparte?", "französischer Kaiser", ["spanischer Maler", "römischer Senator", "deutscher Kanzler"]],
            ["Welche Mauer teilte Berlin?", "Berliner Mauer", ["Chinesische Mauer", "Hadrianswall", "Stadtmauer Köln"]]
        ],
        medium: [
            ["Wann begann der Erste Weltkrieg?", "1914", ["1905", "1929", "1939"]],
            ["Welcher Vertrag beendete 1919 formal den Ersten Weltkrieg mit Deutschland?", "Versailler Vertrag", ["Westfälischer Friede", "Maastrichter Vertrag", "Wiener Kongress"]],
            ["Welche Revolution fand 1789 statt?", "Französische Revolution", ["Russische Revolution", "Industrielle Revolution", "Novemberrevolution"]],
            ["Wer war der erste römische Kaiser?", "Augustus", ["Caesar", "Nero", "Trajan"]],
            ["Welche Hanse-Stadt liegt an der Trave?", "Lübeck", ["Augsburg", "Trier", "Ulm"]],
            ["Welches Reich wurde von Osman I. begründet?", "Osmanisches Reich", ["Byzantinisches Reich", "Frankenreich", "Mongolenreich"]],
            ["Wer leitete die Reformation in Wittenberg ein?", "Martin Luther", ["Johannes Gutenberg", "Jan Hus", "Thomas Müntzer"]],
            ["Welches Ereignis markiert 1517 symbolisch den Beginn der Reformation?", "Thesenanschlag", ["Investiturstreit", "Kreuzzug", "Augsburger Reichstag"]],
            ["Welche Dynastie herrschte lange in Österreich?", "Habsburger", ["Bourbonen", "Tudors", "Romanows"]],
            ["Was war die Weimarer Republik?", "erste deutsche Demokratie", ["römische Provinz", "französische Kolonie", "mittelalterlicher Orden"]]
        ],
        hard: [
            ["Welche Schlacht fand 1815 statt?", "Waterloo", ["Austerlitz", "Trafalgar", "Sedan"]],
            ["Wer war Reichskanzler bei der Reichsgründung 1871?", "Otto von Bismarck", ["Friedrich Ebert", "Theobald von Bethmann Hollweg", "Paul von Hindenburg"]],
            ["Welcher Friede beendete 1648 den Dreißigjährigen Krieg?", "Westfälischer Friede", ["Prager Frieden", "Hubertusburger Frieden", "Frieden von Tilsit"]],
            ["Welche Kultur baute Machu Picchu?", "Inka", ["Maya", "Azteken", "Olmeken"]],
            ["Welcher byzantinische Kaiser ließ die Hagia Sophia bauen?", "Justinian I.", ["Konstantin XI.", "Herakleios", "Leo III."]],
            ["Welche Konferenz regelte 1884/85 Kolonialfragen in Afrika?", "Berliner Kongokonferenz", ["Potsdamer Konferenz", "Konferenz von Jalta", "Wiener Kongress"]],
            ["Wer war der letzte deutsche Kaiser?", "Wilhelm II.", ["Wilhelm I.", "Friedrich III.", "Karl V."]],
            ["Welche Seeschlacht fand 1805 statt?", "Trafalgar", ["Lepanto", "Skagerrak", "Salamis"]],
            ["Welcher Codex ist mit Babylon verbunden?", "Codex Hammurapi", ["Code civil", "Zwölftafelgesetz", "Sachsenspiegel"]],
            ["Welche Bewegung entstand im 18. Jahrhundert mit Vernunft und Kritik?", "Aufklärung", ["Romantik", "Expressionismus", "Barock"]]
        ],
        genius: [
            ["Welcher Historiker schrieb über den Peloponnesischen Krieg?", "Thukydides", ["Herodot", "Tacitus", "Polybius"]],
            ["Welcher Vertrag teilte 843 das Frankenreich?", "Vertrag von Verdun", ["Vertrag von Tordesillas", "Frieden von Basel", "Prager Frieden"]],
            ["Welche Dynastie regierte China beim Bau vieler Ming-Vasen?", "Ming", ["Qing", "Han", "Tang"]],
            ["Wer war der erste Kalif nach Mohammed?", "Abu Bakr", ["Ali", "Umar", "Uthman"]],
            ["Welches Konzil begann 1545?", "Konzil von Trient", ["Konzil von Nicäa", "Konzil von Konstanz", "Laterankonzil"]],
            ["Welche Schlacht stoppte 732 die Expansion der Umayyaden in Franken?", "Tours und Poitiers", ["Hastings", "Bouvines", "Crécy"]],
            ["Welcher Orden wurde 1312 offiziell aufgehoben?", "Templerorden", ["Deutscher Orden", "Jesuitenorden", "Franziskanerorden"]],
            ["Welche Reformen sind mit Preußen nach 1806 verbunden?", "Stein-Hardenberg-Reformen", ["Agrarreformen Solons", "Märzreformen", "Meiji-Restauration"]],
            ["Welche Quelle berichtet vom Ausbruch des Vesuv 79 n. Chr. in Briefen?", "Plinius der Jüngere", ["Cicero", "Seneca", "Livius"]],
            ["Welche Epoche folgte in Europa auf die Karolingerzeit?", "Ottonenzeit", ["Renaissance", "Hellenismus", "Biedermeier"]]
        ]
    };
}

function addTechQuestions() {
    questionData["Technik"] = {
        easy: [
            ["Wofür steht WLAN?", "drahtloses Netzwerk", ["Druckertinte", "Festplatte", "Stromkabel"]],
            ["Welches Gerät zeigt Bilder am Computer an?", "Monitor", ["Router", "Mauspad", "Akku"]],
            ["Was macht ein Passwort?", "Zugang schützen", ["Bild heller machen", "Ton verstärken", "Papier scannen"]],
            ["Welche Taste löscht oft Zeichen links vom Cursor?", "Backspace", ["Shift", "Alt", "Tab"]],
            ["Welches Gerät verbindet ein Heimnetz oft mit dem Internet?", "Router", ["Beamer", "Scanner", "Lautsprecher"]],
            ["Was ist ein Akku?", "wiederaufladbarer Energiespeicher", ["Bildschirm", "Kabelnorm", "Programmiersprache"]],
            ["Welche Datei-Endung steht oft für Bilder?", "jpg", ["mp3", "exe", "zip"]],
            ["Was ist ein Touchscreen?", "berührungsempfindlicher Bildschirm", ["Netzwerkkabel", "Lüfter", "Mikrofonständer"]],
            ["Was macht ein Drucker?", "Dokumente ausgeben", ["Daten verschlüsseln", "Luft kühlen", "Fotos löschen"]],
            ["Welche Einheit misst elektrische Spannung?", "Volt", ["Liter", "Meter", "Gramm"]]
        ],
        medium: [
            ["Wofür steht CPU?", "Central Processing Unit", ["Computer Power USB", "Central Pixel Unit", "Control Print Utility"]],
            ["Welche Einheit misst Datenmenge?", "Byte", ["Watt", "Volt", "Newton"]],
            ["Was ist RAM?", "Arbeitsspeicher", ["Grafikkarte", "Netzteil", "Gehäuse"]],
            ["Welches Protokoll lädt Webseiten verschlüsselt?", "HTTPS", ["FTP", "SMTP", "POP3"]],
            ["Was macht eine SSD?", "Daten speichern", ["Strom messen", "Bilder projizieren", "Ton filtern"]],
            ["Welche Sprache läuft direkt im Browser?", "JavaScript", ["SQL", "Bash", "Markdown"]],
            ["Was ist ein QR-Code?", "zweidimensionaler Code", ["Tonformat", "Akkuart", "Bildschirmtyp"]],
            ["Was bedeutet Open Source?", "Quellcode ist öffentlich einsehbar", ["Programm ist immer kostenlos", "Datei ist verschlüsselt", "Hardware ist kabellos"]],
            ["Welche Technik nutzt Bluetooth?", "Funkverbindung über kurze Distanz", ["Glasfaserkabel", "Satellitenorbit", "Wasserkühlung"]],
            ["Was ist ein Backup?", "Sicherheitskopie", ["Passwortmanager", "Ladegerät", "Grafikfilter"]]
        ],
        hard: [
            ["Welche Datenstruktur arbeitet nach LIFO?", "Stack", ["Queue", "Heap", "Graph"]],
            ["Welcher Port wird häufig für HTTPS genutzt?", "443", ["21", "25", "110"]],
            ["Was beschreibt Big-O-Notation?", "Algorithmus-Komplexität", ["Bildauflösung", "Akkulaufzeit", "Farbtemperatur"]],
            ["Welches Bauteil wandelt Wechselstrom im PC in passende Gleichspannungen?", "Netzteil", ["RAM", "Mainboard-Batterie", "Kühlkörper"]],
            ["Was ist eine IP-Adresse?", "Adresse eines Netzwerkgeräts", ["Dateiendung", "Prozessor-Takt", "Bildformat"]],
            ["Welcher Speicher ist meist flüchtig?", "RAM", ["SSD", "Blu-ray", "USB-Stick"]],
            ["Was macht DNS?", "Namen in IP-Adressen auflösen", ["Bilder komprimieren", "Strom speichern", "Dateien löschen"]],
            ["Welche Datenbank-Sprache nutzt SELECT?", "SQL", ["HTML", "CSS", "JSON"]],
            ["Was ist ein Hash?", "Prüfwert aus Daten", ["Bildschirmkabel", "Roboterarm", "Netzteil"]],
            ["Welche Verschlüsselung nutzt ein öffentliches und privates Schlüsselpaar?", "asymmetrische Verschlüsselung", ["Rotationsdruck", "Farbmanagement", "Analogfunk"]]
        ],
        genius: [
            ["Welches Problem beschreibt ein Race Condition?", "zeitabhängiger Zugriffskonflikt", ["zu wenig Speicherplatz", "falsche Farbtiefe", "langsamer Lüfter"]],
            ["Was ist eine Normalform in Datenbanken?", "Regel zur Tabellenstruktur", ["Bildschirmmodus", "Akkustandard", "Netzwerkstecker"]],
            ["Welche Struktur nutzt Dijkstra häufig zur effizienten Knotenauswahl?", "Prioritätswarteschlange", ["Ringpuffer", "Bitmap", "Stacktrace"]],
            ["Was bedeutet Idempotenz bei einer Operation?", "mehrfaches Ausführen ändert das Ergebnis nicht weiter", ["Operation ist immer schnell", "Operation braucht Internet", "Operation löscht Speicher"]],
            ["Was ist ein Deadlock?", "gegenseitiges Warten von Prozessen", ["kaputter Bildschirm", "defektes Kabel", "falscher DNS-Name"]],
            ["Welche Schicht des OSI-Modells beschreibt TCP?", "Transportschicht", ["Bitübertragungsschicht", "Sitzungsschicht", "Darstellungsschicht"]],
            ["Was ist ein Heap in der Speicherverwaltung?", "dynamischer Speicherbereich", ["Tastenkürzel", "Displaytyp", "Netzwerkdose"]],
            ["Welche Eigenschaft soll ein kryptografischer Hash besonders haben?", "Kollisionsresistenz", ["hohe Lautstärke", "niedrige Auflösung", "sichtbare Kabelung"]],
            ["Was ist eine ACID-Eigenschaft?", "Transaktionssicherheit", ["Bildkompression", "Akkuchemie", "Funkreichweite"]],
            ["Was beschreibt CAP-Theorem?", "Abwägung in verteilten Systemen", ["Farbkalibrierung", "CPU-Kühlung", "HTML-Syntax"]]
        ]
    };
}

function ensureMinimumQuestionsPerCategory() {
    Object.entries(questionData).forEach(([categoryName, groups]) => {
        if (categoryName === "Allgemeinwissen") {
            return;
        }

        Object.entries(groups).forEach(([difficulty, group]) => {
            fillToTarget(group, createQuestionExpansionFactory(categoryName, difficulty, group));
        });
    });
}

function addUniqueQuestions(group, questions) {
    const usedQuestionTexts = new Set(group.map((question) => cleanQuestionText(question[0])));

    questions.forEach((question) => {
        const cleanText = cleanQuestionText(question[0]);

        if (!usedQuestionTexts.has(cleanText)) {
            usedQuestionTexts.add(cleanText);
            group.push(question);
        }
    });
}

function fillToTarget(group, questionFactory) {
    let index = 0;
    let attempts = 0;
    const maximumAttempts = QUESTIONS_PER_DIFFICULTY * 60;
    const usedQuestionTexts = new Set(group.map((question) => cleanQuestionText(question[0])));

    while (group.length < QUESTIONS_PER_DIFFICULTY && attempts < maximumAttempts) {
        const question = [...questionFactory(index)];
        const cleanText = cleanQuestionText(question[0]);

        if (!usedQuestionTexts.has(cleanText)) {
            usedQuestionTexts.add(cleanText);
            group.push(question);
        }

        index += 1;
        attempts += 1;
    }
}

function createQuestionExpansionFactory(categoryName, difficulty, group) {
    const baseQuestions = group.map((question) => [...question]);
    const contexts = questionExpansionContexts[categoryName] || questionExpansionContexts.default;
    const difficultyContext = {
        easy: "Einfach",
        medium: "Mittel",
        hard: "Schwer",
        genius: "Genie"
    }[difficulty] || difficulty;

    return (index) => {
        const baseQuestion = baseQuestions[index % baseQuestions.length];
        const cycle = Math.floor(index / baseQuestions.length);
        const context = contexts[(index + cycle) % contexts.length];
        const questionText = baseQuestion[0];
        const expandedQuestion = cycle === 0
            ? `${questionText} Schwerpunkt: ${context}.`
            : `${questionText} Kontext ${difficultyContext} ${cycle + 1}: ${context}.`;

        return [expandedQuestion, baseQuestion[1], [...baseQuestion[2]]];
    };
}

const questionExpansionContexts = {
    Allgemeinwissen: [
        "Geografie", "Naturwissenschaft", "Weltgeschichte", "Sprache", "Kultur",
        "Mathematik", "Astronomie", "Europa", "Technik", "Gesellschaft",
        "Philosophie", "Rekorde", "Hauptstaedte", "Biologie", "Physik"
    ],
    Sport: [
        "Regelkunde", "Olympia", "Sportgeschichte", "Weltmeisterschaften", "bekannte Sportler",
        "Taktik", "Turniere", "Vereine", "Rekorde", "Sportbegriffe",
        "Radsport", "Wintersport", "Tennis", "Motorsport", "Mannschaftssport"
    ],
    Musik: [
        "Musiktheorie", "Komponisten", "Instrumente", "Oper", "Harmonielehre",
        "Rhythmus", "Musikgeschichte", "Jazz", "Klassik", "Popkultur",
        "Tonarten", "Formenlehre", "Stimmen", "Notation", "Moderne Musik"
    ],
    "Film & Serien": [
        "Regie", "Filmpreise", "Filmgeschichte", "Serienwissen", "Schnitt",
        "Kameratechnik", "Genres", "Drehbuch", "Schauspiel", "Filmbewegungen",
        "Klassiker", "Animation", "Soundtrack", "Produktion", "Kultfilme"
    ],
    Medizin: [
        "Anatomie", "Physiologie", "Pharmakologie", "Diagnostik", "Neurologie",
        "Kardiologie", "Immunologie", "Laborwerte", "Mikrobiologie", "Notfallmedizin",
        "Endokrinologie", "Niere", "Atmung", "Blut", "Zellbiologie"
    ],
    Geschichte: [
        "Antike", "Mittelalter", "Neuzeit", "Reformation", "Kolonialgeschichte",
        "Revolutionen", "Vertraege", "Dynastien", "Kriege", "Quellenkunde",
        "Imperien", "Europa", "Asien", "Herrscher", "Ideengeschichte"
    ],
    Technik: [
        "Netzwerke", "Algorithmen", "Datenbanken", "Kryptografie", "Betriebssysteme",
        "Webtechnik", "Hardware", "Softwarearchitektur", "Speicher", "Verteilte Systeme",
        "Sicherheit", "Programmierkonzepte", "Protokolle", "Datenstrukturen", "Cloud"
    ],
    default: [
        "Grundwissen", "Expertenwissen", "Regeln", "Geschichte", "Begriffe",
        "Praxis", "Theorie", "Rekorde", "Technik", "Personen"
    ]
};

addGeneratedQuestions();

function shuffleArray(items) {
    return [...items].sort(() => Math.random() - 0.5);
}

function createQuestion(question, answer, wrongAnswers) {
    const answers = shuffleArray([answer, ...wrongAnswers]);
    const cleanQuestion = cleanQuestionText(question);

    return {
        question: cleanQuestion,
        key: normalizeQuestionKey(cleanQuestion),
        baseKey: normalizeBaseQuestionKey(cleanQuestion),
        answers,
        correct: answers.indexOf(answer)
    };
}

function isArithmeticQuestion(question) {
    const cleanQuestion = cleanQuestionText(question);

    return /^Was ist\s+\d+\s*(?:x|×|\*|mal|\+|-|:)\s*\d+\??$/i.test(cleanQuestion)
        || /\bWie viele\s+(?:Schläge|Folgen|Minuten)\b/i.test(cleanQuestion)
        || /\b\d+\s*(?:x|×|\*|mal|\+)\s*\d+\b/i.test(cleanQuestion);
}

function buildQuestions(items) {
    return items
        .filter(([question]) => !isArithmeticQuestion(question))
        .map(([question, answer, wrongAnswers]) => createQuestion(question, answer, wrongAnswers));
}

function getCleanQuestionItemsForDifficulty(difficulty) {
    const questionsByDifficulty = {
        easy: generalEasyQuestionPairs,
        medium: generalMediumQuestionPairs,
        hard: generalHardQuestionPairs,
        genius: generalHardQuestionPairs
    };

    return buildQuestionItemsFromPairs(questionsByDifficulty[difficulty] || generalEasyQuestionPairs);
}

function createRoundQuestions(questions, memoryKey) {
    const uniqueQuestions = [];
    const usedQuestionKeys = new Set();
    const usedBaseQuestionKeys = new Set();
    const recentQuestions = recentQuestionHistory[memoryKey] || [];

    shuffleArray(questions).forEach((question) => {
        const recentKey = recentQuestions.includes(question.key);
        const recentBaseKey = recentQuestions.includes(`base:${question.baseKey}`);

        if (!usedQuestionKeys.has(question.key) && !usedBaseQuestionKeys.has(question.baseKey) && !recentKey && !recentBaseKey) {
            usedQuestionKeys.add(question.key);
            usedBaseQuestionKeys.add(question.baseKey);
            uniqueQuestions.push(question);
        }
    });

    if (uniqueQuestions.length >= 10) {
        return uniqueQuestions.slice(0, 10);
    }

    shuffleArray(questions).forEach((question) => {
        if (!usedQuestionKeys.has(question.key) && !usedBaseQuestionKeys.has(question.baseKey)) {
            usedQuestionKeys.add(question.key);
            usedBaseQuestionKeys.add(question.baseKey);
            uniqueQuestions.push(question);
        }
    });

    return uniqueQuestions.slice(0, 10);
}

function rememberRoundQuestions(memoryKey, questions) {
    const oldQuestions = recentQuestionHistory[memoryKey] || [];
    const newQuestions = questions.flatMap((question) => [question.key, `base:${question.baseKey}`]);
    const memoryLimit = RECENT_ROUND_MEMORY * 20;

    recentQuestionHistory[memoryKey] = [...oldQuestions, ...newQuestions].slice(-memoryLimit);
}

function cleanQuestionText(question) {
    return question
        .replace(/\s+Zusatzrunde\s+\d+$/i, "")
        .replace(/\s+\(\d+\)$/, "");
}

function normalizeQuestionText(question) {
    return cleanQuestionText(question)
        .replace(/\d+/g, "#")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
}

function normalizeQuestionKey(question) {
    return cleanQuestionText(question)
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
}

function normalizeBaseQuestionKey(question) {
    return normalizeQuestionKey(question)
        .replace(/\s+schwerpunkt:\s+.*$/, "")
        .replace(/\s+kontext\s+\S+\s+\d+:\s+.*$/, "");
}

const categories = Object.entries(questionData).map(([name, difficultyGroups]) => ({
    name,
    questions: Object.fromEntries(
        Object.entries(difficultyGroups).map(([difficulty, items]) => [
            difficulty,
            buildQuestions(items)
        ])
    )
}));

let quizStarted = false;
let selectedCategory = null;
let categoryChoices = [];
let selectedDifficulty = "easy";
let currentQuestionIndex = 0;
let roundQuestions = [];
let score = 0;
let opponentScore = 0;
let playerMoney = 0;
let opponentMoney = 0;
let playerResults = [];
let opponentResults = [];
let questionAnswered = false;
let factIntervalId = null;
let currentFactIndex = 0;
let timerIntervalId = null;
let timeLeft = 15;
const recentQuestionHistory = {};
let playerName = "Du";
let playerId = null;
let playerBalance = 0;
let roundStartedAt = null;
let lastRoundFeedbackContext = null;
const leaderboardStorageKey = "schlag-den-nico-leaderboard";
const playerAccountStorageKey = "schlag-den-nico-player-account";
const supabaseUrl = "https://enomiaewxwqvzuhqfhff.supabase.co";
const supabaseKey = "sb_publishable_Ehg3yiC5TuFe_BrClkC-Vw_O0FDEEUy";
const onlineLeaderboardTable = "leaderboard";
const onlinePlayersTable = "players";
const onlineFeedbackTable = "feedback";
let selectedOnlineLeaderboard = "Einfach";

const opponentChances = {
    easy: 0.55,
    medium: 0.7,
    hard: 0.88,
    genius: 0.95
};

const perfectPointWindows = {
    easy: 2,
    medium: 2,
    hard: 3,
    genius: 5
};

const difficultyLabels = {
    easy: "Einfach",
    medium: "Mittel",
    hard: "Schwer",
    genius: "Genie"
};

function getNextFact() {
    const factText = facts[currentFactIndex];

    currentFactIndex = (currentFactIndex + 1) % facts.length;
    return factText;
}

function loadFacts() {
    const buttons = document.querySelectorAll(".answer-btn");

    stopConfetti();
    document.body.classList.remove("result-screen", "winner-screen", "loser-screen");
    document.body.classList.remove("quiz-active", "category-select");
    document.getElementById("next-btn").style.display = "inline-block";
    document.getElementById("next-btn").innerText = "Weiter";
    document.getElementById("home-btn").style.display = "none";
    document.getElementById("difficulty-box").style.display = "none";
    document.getElementById("game-info").style.display = "none";
    document.getElementById("scoreboard").style.display = "none";
    document.getElementById("name-box").style.display = "block";
    document.getElementById("leaderboard").style.display = "block";
    hideFeedbackForm();
    updatePlayerAccountUI();
    updateLeaderboard();
    updateOnlineLeaderboard();

    buttons.forEach((button, index) => {
        button.style.display = index === 0 ? "block" : "none";
        button.innerText = index === 0 ? getNextFact() : "";
    });
}

function showNextFact() {
    if (!quizStarted) {
        loadFacts();
    }
}

function resetScoreDots() {
    playerResults = [];
    opponentResults = [];
    updateScoreDots();
}

function updateScoreDots() {
    const scoreTrack = document.getElementById("score-track");

    scoreTrack.innerHTML = "";

    for (let index = 0; index < 10; index += 1) {
        const scoreCard = document.createElement("div");
        scoreCard.className = "score-card";

        const number = document.createElement("span");
        number.className = "score-number";
        number.innerText = index + 1;

        const label = document.createElement("span");
        label.className = "score-question";
        label.innerText = `Frage ${index + 1}`;

        const results = document.createElement("div");
        results.className = "score-results";

        const playerDot = createScoreDot(playerResults[index], playerName);
        const opponentDot = createScoreDot(opponentResults[index], "Nico");

        results.appendChild(playerDot);
        results.appendChild(opponentDot);
        scoreCard.appendChild(number);
        scoreCard.appendChild(label);
        scoreCard.appendChild(results);
        scoreTrack.appendChild(scoreCard);
    }
}

function createScoreDot(result, label) {
    const dot = document.createElement("span");
    dot.className = "score-dot";
    dot.title = label;

    if (result === true) {
        dot.classList.add("right");
    } else if (result === false) {
        dot.classList.add("wrong-dot");
    }

    return dot;
}

function selectDifficulty(difficulty) {
    selectedDifficulty = difficulty;

    document.querySelectorAll(".difficulty-btn").forEach((button) => {
        button.classList.toggle("active", button.dataset.difficulty === difficulty);
    });
}

function showCategories() {
    const buttons = document.querySelectorAll(".answer-btn");
    categoryChoices = shuffleArray(categories).slice(0, 4);

    document.body.classList.add("quiz-active", "category-select");
    document.getElementById("question").innerText = "Wähle eine Kategorie";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("home-btn").style.display = "none";
    document.getElementById("difficulty-box").style.display = "flex";
    document.getElementById("game-info").style.display = "none";
    document.getElementById("scoreboard").style.display = "none";
    document.getElementById("name-box").style.display = "none";
    document.getElementById("leaderboard").style.display = "none";
    hideFeedbackForm();
    document.getElementById("score").innerText = "";

    buttons.forEach((button, index) => {
        button.style.display = "block";
        button.innerText = categoryChoices[index].name;
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });
}

function stopTimer() {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
}

function updateTimer() {
    document.getElementById("timer").innerText = timeLeft;
}

function startTimer() {
    stopTimer();
    timeLeft = 15;
    updateTimer();

    timerIntervalId = setInterval(() => {
        timeLeft -= 1;
        updateTimer();

        if (timeLeft === 0) {
            handleTimeout();
        }
    }, 1000);
}

function calculateSpeedMoney(answerTime) {
    const perfectWindow = perfectPointWindows[selectedDifficulty];

    if (answerTime <= perfectWindow) {
        return 500;
    }

    if (answerTime >= 15) {
        return 0;
    }

    const slowestUsefulTime = 14;
    const progress = (answerTime - perfectWindow) / (slowestUsefulTime - perfectWindow);
    return Math.max(25, Math.round(500 - progress * 475));
}

function calculateWrongAnswerPenaltyMoney(answerTime) {
    const safeTime = Math.min(Math.max(answerTime, 1), 15);
    const progress = (safeTime - 1) / 14;

    return Math.round(250 - progress * 225);
}

function getOpponentAnswerTime() {
    const timeRanges = {
        easy: [4, 14],
        medium: [3, 12],
        hard: [2, 9],
        genius: [1, 7]
    };
    const [minimum, maximum] = timeRanges[selectedDifficulty];

    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function formatScoreLine() {
    return `${playerName}: ${formatMoney(playerMoney)} (${score} richtig) | Nico: ${formatMoney(opponentMoney)} (${opponentScore} richtig) | Konto: ${formatMoney(playerBalance)}`;
}

function makeOpponentGuess(currentQuestion) {
    const isCorrect = Math.random() < opponentChances[selectedDifficulty];
    const answerTime = getOpponentAnswerTime();

    if (isCorrect) {
        opponentScore += 1;
        opponentMoney += calculateSpeedMoney(answerTime);
        return {
            guess: currentQuestion.correct,
            isCorrect: true,
            answerTime
        };
    }

    const wrongAnswers = currentQuestion.answers
        .map((_, index) => index)
        .filter((index) => index !== currentQuestion.correct);

    return {
        guess: shuffleArray(wrongAnswers)[0],
        isCorrect: false,
        answerTime
    };
}

function finishQuestion(answerIndex) {
    if (questionAnswered) {
        return;
    }

    stopTimer();
    questionAnswered = true;

    const currentQuestion = roundQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".answer-btn");
    const opponentTurn = makeOpponentGuess(currentQuestion);
    const playerWasCorrect = answerIndex === currentQuestion.correct;
    const playerAnswerTime = answerIndex === null ? 15 : 15 - timeLeft;
    const earnedMoney = playerWasCorrect ? calculateSpeedMoney(playerAnswerTime) : 0;
    const lostMoney = !playerWasCorrect && answerIndex !== null ? calculateWrongAnswerPenaltyMoney(playerAnswerTime) : 0;

    buttons.forEach((button) => {
        button.disabled = true;
    });

    if (playerWasCorrect) {
        buttons[answerIndex].classList.add("correct");
        score += 1;
        playerMoney += earnedMoney;
    } else if (answerIndex !== null) {
        buttons[answerIndex].classList.add("wrong");
        playerMoney -= lostMoney;
    }

    buttons[currentQuestion.correct].classList.add("correct");
    playerResults[currentQuestionIndex] = playerWasCorrect;
    opponentResults[currentQuestionIndex] = opponentTurn.isCorrect;
    updateScoreDots();

    const playerPointText = playerWasCorrect
        ? ` | +${formatMoney(earnedMoney)}`
        : ` | -${formatMoney(lostMoney)}`;
    document.getElementById("opponent").innerText =
        `Nico tippt nach ${opponentTurn.answerTime}s: ${currentQuestion.answers[opponentTurn.guess]}${playerPointText}`;
    document.getElementById("score").innerText = formatScoreLine();
}

function handleTimeout() {
    finishQuestion(null);
    document.getElementById("opponent").innerText += " | Zeit abgelaufen!";
}

function showQuestion() {
    const currentQuestion = roundQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".answer-btn");

    document.body.classList.remove("category-select");

    if (currentQuestionIndex === 0 && !roundStartedAt) {
        roundStartedAt = Date.now();
    }

    document.getElementById("question").innerText = `Frage ${currentQuestionIndex + 1}/10: ${currentQuestion.question}`;
    hideFeedbackForm();
    document.getElementById("next-btn").style.display = "inline-block";
    document.getElementById("next-btn").innerText = currentQuestionIndex === 9 ? "Ergebnis" : "Nächste Frage";
    document.getElementById("difficulty-box").style.display = "none";
    document.getElementById("game-info").style.display = "flex";
    document.getElementById("scoreboard").style.display = "block";
    document.getElementById("opponent").innerText = "Nico überlegt...";
    document.getElementById("score").innerText = formatScoreLine();
    questionAnswered = false;

    buttons.forEach((button, index) => {
        button.style.display = "block";
        button.innerText = currentQuestion.answers[index];
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });

    startTimer();
}

function showPointRules() {
    const buttons = document.querySelectorAll(".answer-btn");

    document.getElementById("question").innerText =
        "Geld-Regel: Pro richtige Antwort sind bis zu 500 € möglich. Bei einer falschen Antwort verlierst du bis zu 250 €. Dein Gewinn wird auf dein Online-Konto gebucht.";
    document.getElementById("next-btn").innerText = "Quiz starten";
    document.getElementById("next-btn").style.display = "inline-block";
    document.getElementById("home-btn").style.display = "none";
    document.getElementById("difficulty-box").style.display = "none";
    document.getElementById("game-info").style.display = "none";
    document.getElementById("scoreboard").style.display = "none";
    document.getElementById("score").innerText = "";
    hideFeedbackForm();
    roundStartedAt = null;
    questionAnswered = true;
    currentQuestionIndex = -1;

    buttons.forEach((button) => {
        button.style.display = "none";
        button.disabled = true;
    });
}

async function startQuizShow() {
    const accountReady = await ensurePlayerAccount();

    if (!accountReady) {
        return;
    }

    quizStarted = true;
    clearInterval(factIntervalId);
    document.getElementById("next-btn").innerText = "Nächste Frage";
    showCategories();
}

async function finishRound() {
    const buttons = document.querySelectorAll(".answer-btn");
    const resultMessage = getResultMessage();
    stopTimer();
    const oldBalance = playerBalance;
    await saveLeaderboardEntry();
    lastRoundFeedbackContext = {
        player_id: playerId,
        gamertag: playerName,
        category: selectedCategory ? selectedCategory.name : "-",
        difficulty: difficultyLabels[selectedDifficulty],
        score,
        round_money: playerMoney,
        opponent_money: opponentMoney,
        balance_after_round: playerBalance
    };

    document.getElementById("question").innerText =
        `${resultMessage} Rundengewinn: ${formatMoney(playerMoney)} (${score}/10) | Konto: ${formatMoney(oldBalance)} -> ${formatMoney(playerBalance)} | Nico: ${formatMoney(opponentMoney)} (${opponentScore}/10)`;
    document.body.classList.add("result-screen");
    document.body.classList.toggle("winner-screen", playerMoney > opponentMoney);
    document.body.classList.toggle("loser-screen", playerMoney < opponentMoney);
    if (playerMoney > opponentMoney) {
        startConfetti();
    }
    document.getElementById("next-btn").innerText = "Neue Runde";
    document.getElementById("next-btn").style.display = "inline-block";
    document.getElementById("home-btn").style.display = "inline-block";
    document.getElementById("difficulty-box").style.display = "none";
    document.getElementById("game-info").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    document.getElementById("score").innerText = "";
    showFeedbackForm();
    selectedCategory = null;
    roundQuestions = [];
    currentQuestionIndex = 0;
    questionAnswered = false;

    buttons.forEach((button) => {
        button.style.display = "none";
        button.innerText = "";
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });
}

function showFeedbackForm() {
    const feedbackBox = document.getElementById("feedback-box");
    const feedbackMessage = document.getElementById("feedback-message");
    const feedbackStatus = document.getElementById("feedback-status");
    const feedbackSubmit = document.getElementById("feedback-submit");

    feedbackBox.style.display = "block";
    feedbackMessage.value = "";
    feedbackStatus.innerText = "";
    feedbackSubmit.disabled = false;
    feedbackSubmit.innerText = "Absenden";
}

function hideFeedbackForm() {
    const feedbackBox = document.getElementById("feedback-box");

    if (feedbackBox) {
        feedbackBox.style.display = "none";
    }
}

async function submitFeedback() {
    const feedbackType = document.getElementById("feedback-type").value;
    const feedbackMessage = document.getElementById("feedback-message");
    const feedbackStatus = document.getElementById("feedback-status");
    const feedbackSubmit = document.getElementById("feedback-submit");
    const message = feedbackMessage.value.trim();

    if (message.length < 4) {
        feedbackStatus.innerText = "Bitte kurz beschreiben, was los ist.";
        return;
    }

    feedbackSubmit.disabled = true;
    feedbackSubmit.innerText = "Sende...";
    feedbackStatus.innerText = "";

    try {
        const context = lastRoundFeedbackContext || {};
        const response = await fetch(`${supabaseUrl}/rest/v1/${onlineFeedbackTable}`, {
            method: "POST",
            headers: getSupabaseHeaders({
                "Content-Type": "application/json",
                Prefer: "return=minimal"
            }),
            body: JSON.stringify({
                ...context,
                type: feedbackType,
                message,
                page_url: window.location.href,
                user_agent: navigator.userAgent
            })
        });

        if (!response.ok) {
            throw new Error("Feedback konnte nicht gespeichert werden.");
        }

        feedbackMessage.value = "";
        feedbackStatus.innerText = "Danke, ist angekommen!";
        feedbackSubmit.innerText = "Gesendet";
    } catch {
        feedbackSubmit.disabled = false;
        feedbackSubmit.innerText = "Absenden";
        feedbackStatus.innerText = "Feedback-Tabelle noch nicht eingerichtet.";
    }
}

function startConfetti() {
    const confettiLayer = document.getElementById("confetti-layer");

    confettiLayer.innerHTML = "";

    for (let index = 0; index < 90; index += 1) {
        const piece = document.createElement("span");
        piece.className = "confetti-piece";
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.animationDelay = `${Math.random() * 1.5}s`;
        piece.style.animationDuration = `${2.2 + Math.random() * 1.8}s`;
        piece.style.background = getConfettiColor(index);
        confettiLayer.appendChild(piece);
    }

    window.setTimeout(stopConfetti, 5200);
}

function stopConfetti() {
    const confettiLayer = document.getElementById("confetti-layer");

    if (confettiLayer) {
        confettiLayer.innerHTML = "";
    }
}

function getConfettiColor(index) {
    const colors = ["#facc15", "#22c55e", "#38bdf8", "#f97316", "#e879f9", "#ffffff"];
    return colors[index % colors.length];
}

function getResultMessage() {
    if (playerMoney > opponentMoney) {
        return "Du hast gegen Nico gewonnen!";
    }

    if (playerMoney < opponentMoney) {
        return "Du hast gegen Nico verloren!";
    }

    return "Unentschieden gegen Nico!";
}

function updatePlayerName() {
    const nameInput = document.getElementById("player-name");
    const cleanedName = nameInput.value.trim();
    playerName = cleanedName || "Du";
}

function loadStoredPlayerAccount() {
    const savedAccount = localStorage.getItem(playerAccountStorageKey);

    if (!savedAccount) {
        updatePlayerAccountUI();
        return;
    }

    try {
        const account = JSON.parse(savedAccount);
        playerId = account.id || null;
        playerName = account.gamertag || "Du";
        playerBalance = Number(account.balance) || 0;
        updatePlayerAccountUI();
        refreshPlayerAccount();
    } catch {
        localStorage.removeItem(playerAccountStorageKey);
        updatePlayerAccountUI();
    }
}

function savePlayerAccount(account) {
    playerId = account.id;
    playerName = account.gamertag;
    playerBalance = Number(account.balance) || 0;
    localStorage.setItem(playerAccountStorageKey, JSON.stringify({
        id: playerId,
        gamertag: playerName,
        balance: playerBalance
    }));
    updatePlayerAccountUI();
}

function updatePlayerAccountUI(message = "") {
    const nameInput = document.getElementById("player-name");
    const nameMessage = document.getElementById("name-message");
    const accountBalance = document.getElementById("account-balance");

    if (nameInput) {
        nameInput.value = playerId ? playerName : nameInput.value;
        nameInput.readOnly = Boolean(playerId);
        nameInput.classList.toggle("locked", Boolean(playerId));
    }

    if (nameMessage) {
        nameMessage.innerText = message || (playerId ? `Eingeloggt als ${playerName}` : "");
        nameMessage.style.color = playerId && !message ? "#bbf7d0" : "#fca5a5";
    }

    if (accountBalance) {
        accountBalance.innerText = `Konto: ${formatMoney(playerBalance)}`;
    }
}

function normalizeGamertag(gamertag) {
    return gamertag.trim().replace(/\s+/g, " ");
}

function getGamertagKey(gamertag) {
    return normalizeGamertag(gamertag).toLowerCase();
}

const blockedGamertagParts = [
    "hurensohn",
    "huso",
    "ficker",
    "fick",
    "nutte",
    "nuttensohn",
    "wichser",
    "wixxer",
    "schlampe",
    "fotze",
    "arschloch",
    "bastard",
    "spast",
    "mongo",
    "neger",
    "nazi",
    "hitler"
];

function normalizeGamertagForFilter(gamertag) {
    return gamertag
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/0/g, "o")
        .replace(/1/g, "i")
        .replace(/3/g, "e")
        .replace(/4/g, "a")
        .replace(/5/g, "s")
        .replace(/7/g, "t")
        .replace(/[^a-z]/g, "");
}

function isGamertagBlocked(gamertag) {
    const normalizedName = normalizeGamertagForFilter(gamertag);
    return blockedGamertagParts.some((blockedPart) => normalizedName.includes(blockedPart));
}

async function ensurePlayerAccount() {
    if (playerId) {
        return true;
    }

    const nameInput = document.getElementById("player-name");
    const gamertag = normalizeGamertag(nameInput.value);

    if (gamertag.length < 2) {
        updatePlayerAccountUI("Bitte gib zuerst einen Gamertag ein.");
        return false;
    }

    if (isGamertagBlocked(gamertag)) {
        updatePlayerAccountUI("Dieser Gamertag ist nicht erlaubt.");
        return false;
    }

    try {
        const gamertagKey = getGamertagKey(gamertag);
        const existingPlayer = await fetchPlayerByGamertagKey(gamertagKey);

        if (existingPlayer) {
            updatePlayerAccountUI("Dieser Gamertag ist bereits vergeben.");
            return false;
        }

        const createdPlayer = await createOnlinePlayer(gamertag, gamertagKey);
        savePlayerAccount(createdPlayer);
        return true;
    } catch (error) {
        updatePlayerAccountUI(error.message === "Gamertag vergeben."
            ? "Dieser Gamertag ist bereits vergeben."
            : "Online-Spieler-Tabelle ist noch nicht eingerichtet.");
        return false;
    }
}

async function fetchPlayerByGamertagKey(gamertagKey) {
    const response = await fetch(`${supabaseUrl}/rest/v1/${onlinePlayersTable}?select=id,gamertag,balance&gamertag_key=eq.${encodeURIComponent(gamertagKey)}&limit=1`, {
        headers: getSupabaseHeaders()
    });

    if (!response.ok) {
        throw new Error("Spieler konnten nicht geladen werden.");
    }

    const players = await response.json();
    return players[0] || null;
}

async function createOnlinePlayer(gamertag, gamertagKey) {
    const response = await fetch(`${supabaseUrl}/rest/v1/${onlinePlayersTable}`, {
        method: "POST",
        headers: getSupabaseHeaders({
            "Content-Type": "application/json",
            Prefer: "return=representation"
        }),
        body: JSON.stringify({
            gamertag,
            gamertag_key: gamertagKey,
            balance: 0
        })
    });

    if (response.status === 409) {
        throw new Error("Gamertag vergeben.");
    }

    if (!response.ok) {
        throw new Error("Spieler konnte nicht erstellt werden.");
    }

    const players = await response.json();
    return players[0];
}

async function refreshPlayerAccount() {
    if (!playerId) {
        return;
    }

    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/${onlinePlayersTable}?select=id,gamertag,balance&id=eq.${encodeURIComponent(playerId)}&limit=1`, {
            headers: getSupabaseHeaders()
        });

        if (!response.ok) {
            return;
        }

        const players = await response.json();

        if (players[0]) {
            savePlayerAccount(players[0]);
        }
    } catch {
        updatePlayerAccountUI();
    }
}

function goHome() {
    stopTimer();
    quizStarted = false;
    selectedCategory = null;
    categoryChoices = [];
    roundQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    opponentScore = 0;
    playerMoney = 0;
    opponentMoney = 0;
    questionAnswered = false;

    clearInterval(factIntervalId);
    loadFacts();
    factIntervalId = setInterval(loadFacts, 8000);
}

function getLeaderboard() {
    const savedLeaderboard = localStorage.getItem(leaderboardStorageKey);

    if (!savedLeaderboard) {
        return [];
    }

    try {
        return JSON.parse(savedLeaderboard);
    } catch {
        return [];
    }
}

async function saveLeaderboardEntry() {
    const now = new Date();
    const usedSeconds = roundStartedAt ? Math.max(1, Math.round((Date.now() - roundStartedAt) / 1000)) : 0;
    const newBalance = playerBalance + playerMoney;
    const entry = {
        name: playerName,
        category: selectedCategory ? selectedCategory.name : "-",
        date: now.toLocaleDateString("de-DE"),
        usedTime: formatUsedTime(usedSeconds),
        difficulty: difficultyLabels[selectedDifficulty],
        points: newBalance,
        money: newBalance,
        roundMoney: playerMoney
    };
    playerBalance = newBalance;
    await updateOnlinePlayerBalance();

    const leaderboard = [...getLeaderboard(), entry]
        .sort((first, second) => getEntryMoney(second) - getEntryMoney(first))
        .slice(0, 10);

    savePlayerAccount({
        id: playerId,
        gamertag: playerName,
        balance: playerBalance
    });
    localStorage.setItem(leaderboardStorageKey, JSON.stringify(leaderboard));
    updateLeaderboard();
    updateOnlineLeaderboard();
}

async function updateOnlinePlayerBalance() {
    if (!playerId) {
        return;
    }

    await fetch(`${supabaseUrl}/rest/v1/${onlinePlayersTable}?id=eq.${encodeURIComponent(playerId)}`, {
        method: "PATCH",
        headers: getSupabaseHeaders({
            "Content-Type": "application/json",
            Prefer: "return=minimal"
        }),
        body: JSON.stringify({ balance: playerBalance })
    });
}

function updateLeaderboard() {
    const leaderboardBody = document.getElementById("leaderboard-body");
    const leaderboard = getLeaderboard();

    leaderboardBody.innerHTML = "";

    if (!leaderboard.length) {
        const emptyRow = createLeaderboardMessageRow("Noch keine Spiele", 7);
        leaderboardBody.appendChild(emptyRow);
        return;
    }

    leaderboard.forEach((entry, index) => {
        leaderboardBody.appendChild(createLeaderboardRow(entry, index, true));
    });
}

async function saveOnlineLeaderboardEntry(entry) {
    try {
        let response = await postOnlineLeaderboardEntry(entry);

        if (!response.ok && entry.category) {
            const { category, ...entryWithoutCategory } = entry;
            response = await postOnlineLeaderboardEntry(entryWithoutCategory);
        }

        if (!response.ok) {
            throw new Error("Online-Bestenliste konnte nicht gespeichert werden.");
        }

        updateOnlineLeaderboard();
    } catch {
        showOnlineLeaderboardMessage("Online speichern fehlgeschlagen");
    }
}

async function postOnlineLeaderboardEntry(entry) {
    return fetch(`${supabaseUrl}/rest/v1/${onlineLeaderboardTable}`, {
            method: "POST",
            headers: getSupabaseHeaders({
                "Content-Type": "application/json",
                Prefer: "return=minimal"
            }),
            body: JSON.stringify(entry)
    });
}

async function updateOnlineLeaderboard() {
    const onlineLeaderboardBody = document.getElementById("online-leaderboard-body");

    if (!onlineLeaderboardBody) {
        return;
    }

    onlineLeaderboardBody.innerHTML = "";
    onlineLeaderboardBody.appendChild(createLeaderboardMessageRow("Lade online...", 3));

    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/${onlinePlayersTable}?select=gamertag,balance&order=balance.desc&limit=10`, {
            headers: getSupabaseHeaders()
        });

        if (!response.ok) {
            throw new Error("Online-Bestenliste nicht erreichbar.");
        }

        const leaderboard = (await response.json()).map((player) => ({
            name: player.gamertag,
            money: Number(player.balance) || 0
        }));
        onlineLeaderboardBody.innerHTML = "";

        if (!leaderboard.length) {
            onlineLeaderboardBody.appendChild(createLeaderboardMessageRow("Noch keine Online-Spieler", 3));
            return;
        }

        leaderboard.forEach((entry, index) => {
            onlineLeaderboardBody.appendChild(createLeaderboardRow(entry, index, false));
        });
    } catch {
        showOnlineLeaderboardMessage("Online-Tabelle noch nicht eingerichtet");
    }
}

function selectOnlineLeaderboard(filter) {
    selectedOnlineLeaderboard = filter;

    document.querySelectorAll("#online-filter .leaderboard-filter-btn").forEach((button) => {
        button.classList.toggle("active", button.dataset.filter === filter);
    });

    updateOnlineLeaderboard();
}

function getSupabaseHeaders(extraHeaders = {}) {
    return {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        ...extraHeaders
    };
}

function showOnlineLeaderboardMessage(message) {
    const onlineLeaderboardBody = document.getElementById("online-leaderboard-body");

    onlineLeaderboardBody.innerHTML = "";
    onlineLeaderboardBody.appendChild(createLeaderboardMessageRow(message, 3));
}

function createLeaderboardRow(entry, index, showDifficulty) {
    const row = document.createElement("tr");
    const rankCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const categoryCell = document.createElement("td");
    const dateCell = document.createElement("td");
    const usedTimeCell = document.createElement("td");
    const pointsCell = document.createElement("td");
    const difficultyCell = document.createElement("td");

    rankCell.innerText = index + 1;
    nameCell.innerText = entry.name;
    categoryCell.innerText = entry.category || "-";
    dateCell.innerText = entry.date || "-";
    usedTimeCell.innerText = entry.usedTime || entry.time || "-";
    pointsCell.innerText = formatMoney(getEntryMoney(entry));
    difficultyCell.innerText = entry.difficulty || "-";

    row.appendChild(rankCell);
    row.appendChild(nameCell);

    if (!showDifficulty) {
        row.appendChild(pointsCell);
        return row;
    }

    row.appendChild(categoryCell);
    row.appendChild(dateCell);
    row.appendChild(usedTimeCell);
    row.appendChild(pointsCell);
    if (showDifficulty) {
        row.appendChild(difficultyCell);
    }

    return row;
}

function getEntryMoney(entry) {
    return Number(entry.money ?? entry.points ?? entry.balance) || 0;
}

function formatMoney(amount) {
    return `${Math.round(amount).toLocaleString("de-DE")} €`;
}

function formatUsedTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function createLeaderboardMessageRow(message, columns = 6) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");

    cell.colSpan = columns;
    cell.innerText = message;
    row.appendChild(cell);

    return row;
}

function nextQuestion() {
    if (!quizStarted) {
        startQuizShow();
        return;
    }

    if (!selectedCategory) {
        showCategories();
        return;
    }

    if (!questionAnswered) {
        return;
    }

    if (currentQuestionIndex === 9) {
        finishRound();
        return;
    }

    currentQuestionIndex += 1;
    showQuestion();
}

function selectAnswer(answerIndex) {
    if (!quizStarted) {
        return;
    }

    if (!selectedCategory) {
        selectedCategory = categoryChoices[answerIndex];
        const memoryKey = `${selectedCategory.name}-${selectedDifficulty}`;
        roundQuestions = createRoundQuestions(buildQuestions(getCleanQuestionItemsForDifficulty(selectedDifficulty)), memoryKey);
        rememberRoundQuestions(memoryKey, roundQuestions);
        currentQuestionIndex = 0;
        score = 0;
        opponentScore = 0;
        playerMoney = 0;
        opponentMoney = 0;
        resetScoreDots();
        showPointRules();
        return;
    }

    if (!roundQuestions.length) {
        selectedCategory = null;
        showCategories();
        return;
    }

    finishQuestion(answerIndex);
}

loadFacts();
loadStoredPlayerAccount();
document.querySelector(".answer-btn").addEventListener("click", showNextFact);
factIntervalId = setInterval(loadFacts, 8000);








