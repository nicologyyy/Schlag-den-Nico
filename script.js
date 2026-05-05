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

const questionData = {
    "Allgemeinwissen": {
        easy: [
            ["Was ist die Hauptstadt von Frankreich?", "Paris", ["Madrid", "Rom", "Berlin"]],
            ["Was ist die Hauptstadt von Deutschland?", "Berlin", ["Wien", "Bern", "Hamburg"]],
            ["Welcher ist der größte Planet im Sonnensystem?", "Jupiter", ["Mars", "Venus", "Merkur"]],
            ["Welche Farbe hat eine reife Banane meistens?", "Gelb", ["Blau", "Rot", "Lila"]],
            ["Wie viele Tage hat eine normale Woche?", "7", ["5", "8", "10"]],
            ["Welches Tier bellt?", "Hund", ["Katze", "Kuh", "Pferd"]],
            ["Wie viele Monate hat ein Jahr?", "12", ["10", "11", "13"]],
            ["Welche Farbe hat der Himmel oft bei gutem Wetter?", "Blau", ["Grün", "Schwarz", "Rot"]],
            ["Was braucht eine Pflanze zum Wachsen?", "Wasser", ["Sandwiches", "Benzin", "Plastik"]],
            ["Welcher Kontinent liegt südlich von Europa?", "Afrika", ["Asien", "Australien", "Antarktis"]]
        ],
        medium: [
            ["Wie viele Kontinente gibt es auf der Erde?", "7", ["5", "6", "8"]],
            ["Wie lautet die chemische Formel für Wasser?", "H2O", ["CO2", "O2", "NaCl"]],
            ["In welchem Land liegt Tokio?", "Japan", ["China", "Thailand", "Korea"]],
            ["Welche Sprache spricht man in Brasilien?", "Portugiesisch", ["Spanisch", "Französisch", "Italienisch"]],
            ["Was ist die kleinste Primzahl?", "2", ["1", "3", "4"]],
            ["Wie heißt der größte Ozean der Erde?", "Pazifik", ["Atlantik", "Indischer Ozean", "Arktischer Ozean"]],
            ["Welches Organ pumpt Blut durch den Körper?", "Herz", ["Leber", "Lunge", "Magen"]],
            ["Wie heißt die Währung in Japan?", "Yen", ["Won", "Dollar", "Baht"]],
            ["In welcher Stadt steht der Eiffelturm?", "Paris", ["London", "Rom", "Prag"]],
            ["Wie viele Minuten hat eine Stunde?", "60", ["50", "70", "100"]]
        ],
        hard: [
            ["Welches Land hat durch Überseegebiete die meisten Zeitzonen?", "Frankreich", ["Russland", "USA", "China"]],
            ["Welches Element hat das chemische Symbol W?", "Wolfram", ["Wasserstoff", "Wismut", "Wolkenium"]],
            ["Welcher Fluss wird oft als längster Fluss Afrikas genannt?", "Nil", ["Kongo", "Sambesi", "Niger"]],
            ["Wer schrieb 'Der Prozess'?", "Franz Kafka", ["Thomas Mann", "Goethe", "Schiller"]],
            ["Was ist die Hauptstadt von Kasachstan?", "Astana", ["Almaty", "Bischkek", "Taschkent"]],
            ["Welches Land hieß früher Ceylon?", "Sri Lanka", ["Myanmar", "Kambodscha", "Nepal"]],
            ["Welche Einheit misst elektrischen Widerstand?", "Ohm", ["Farad", "Tesla", "Pascal"]],
            ["Wer entwickelte die Relativitätstheorie?", "Albert Einstein", ["Isaac Newton", "Niels Bohr", "Max Planck"]],
            ["Welcher Planet hat die höchste Durchschnittstemperatur?", "Venus", ["Merkur", "Mars", "Jupiter"]],
            ["Wie heißt die Hauptstadt der Mongolei?", "Ulaanbaatar", ["Astana", "Hanoi", "Vientiane"]]
        ],
        genius: [
            ["Wie heißt die tiefste bekannte Stelle im Marianengraben?", "Challengertief", ["Horizon Deep", "Milwaukeetief", "Javatief"]],
            ["Welchen ungefähren Wert hat die Euler-Mascheroni-Konstante?", "0,577", ["1,618", "2,718", "3,141"]],
            ["Wer isolierte erstmals das Element Radium gemeinsam mit Marie Curie?", "Pierre Curie", ["Henri Becquerel", "Ernest Rutherford", "Niels Bohr"]],
            ["Was ist die Hauptstadt von Bhutan?", "Thimphu", ["Dhaka", "Kathmandu", "Vientiane"]],
            ["Was ist die SI-Einheit der magnetischen Flussdichte?", "Tesla", ["Weber", "Farad", "Siemens"]],
            ["Wie heißt die Grenze zwischen Erdmantel und Erdkern?", "Gutenberg-Diskontinuität", ["Mohorovičić-Diskontinuität", "Lehmann-Diskontinuität", "Conrad-Diskontinuität"]],
            ["Welche Zahl ist die kleinste perfekte Zahl?", "6", ["8", "12", "28"]],
            ["Welche Sprache gehört zu den finno-ugrischen Sprachen?", "Ungarisch", ["Rumänisch", "Bulgarisch", "Griechisch"]],
            ["Welcher Mond ist der größte Mond des Saturn?", "Titan", ["Europa", "Ganymed", "Io"]],
            ["Wer formulierte das Unvollständigkeitstheorem?", "Kurt Gödel", ["Alan Turing", "Bertrand Russell", "David Hilbert"]]
        ]
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

const QUESTIONS_PER_DIFFICULTY = 50;
const RECENT_ROUND_MEMORY = 5;

function addGeneratedQuestions() {
    addGeneralQuestions();
    addSportQuestions();
    addMusicQuestions();
    addFilmQuestions();
    addMedicineQuestions();
    addHistoryQuestions();
    addTechQuestions();
    ensureMinimumQuestionsPerCategory();
}

function addGeneralQuestions() {
    const groups = questionData["Allgemeinwissen"];

    fillToTarget(groups.easy, (index) => {
        const a = 3 + index;
        const b = 2 + (index % 9);
        return [`Was ist ${a} + ${b}?`, String(a + b), [String(a + b + 1), String(a + b - 1), String(a + b + 2)]];
    });

    fillToTarget(groups.medium, (index) => {
        const number = 6 + index;
        return [`Was ist ${number} mal ${2 + (index % 8)}?`, String(number * (2 + (index % 8))), [String(number + 10), String(number * 2), String(number * 3 + 1)]];
    });

    const hardFacts = [
        ["Welche Hauptstadt gehört zu Australien?", "Canberra", ["Sydney", "Melbourne", "Perth"]],
        ["Welches Element hat die Ordnungszahl 6?", "Kohlenstoff", ["Sauerstoff", "Stickstoff", "Helium"]],
        ["Welche Wüste ist die größte heiße Wüste der Erde?", "Sahara", ["Gobi", "Kalahari", "Atacama"]],
        ["Welche Stadt liegt am Bosporus?", "Istanbul", ["Athen", "Sofia", "Bukarest"]],
        ["Welcher Philosoph schrieb 'Der Staat'?", "Platon", ["Aristoteles", "Sokrates", "Epikur"]]
    ];
    fillToTarget(groups.hard, (index) => hardFacts[index % hardFacts.length]);

    const geniusFacts = [
        ["Welche Zahl ist die kleinste Carmichael-Zahl?", "561", ["341", "1105", "1729"]],
        ["Welches Element hat das Symbol Ir?", "Iridium", ["Indium", "Iod", "Eisen"]],
        ["Wie heißt die Diskontinuität zwischen Erdkruste und Erdmantel?", "Mohorovičić-Diskontinuität", ["Gutenberg-Diskontinuität", "Lehmann-Diskontinuität", "Conrad-Diskontinuität"]],
        ["Welche Hauptstadt liegt am Fluss Daugava?", "Riga", ["Vilnius", "Tallinn", "Minsk"]],
        ["Wer bewies Fermats letzten Satz?", "Andrew Wiles", ["Terence Tao", "Grigori Perelman", "Kurt Gödel"]]
    ];
    fillToTarget(groups.genius, (index) => geniusFacts[index % geniusFacts.length]);
}

function addSportQuestions() {
    const groups = questionData["Sport"];

    fillToTarget(groups.easy, (index) => {
        const goalsA = 1 + (index % 5);
        const goalsB = 1 + ((index + 2) % 5);
        return [`Ein Team schießt ${goalsA} Tore und danach noch ${goalsB}. Wie viele Tore sind das?`, String(goalsA + goalsB), [String(goalsA + goalsB + 1), String(goalsA), String(goalsB)]];
    });

    fillToTarget(groups.medium, (index) => {
        const wins = 2 + (index % 6);
        return [`Ein Team bekommt pro Sieg 3 Punkte. Wie viele Punkte sind ${wins} Siege?`, String(wins * 3), [String(wins * 2), String(wins * 3 + 1), String(wins + 3)]];
    });

    const hardFacts = [
        ["Welche Tennisoberfläche wird bei Wimbledon gespielt?", "Rasen", ["Sand", "Hartplatz", "Teppich"]],
        ["Wie viele Spieler stehen beim Handball pro Team auf dem Feld?", "7", ["5", "6", "8"]],
        ["Welche Sportart nutzt den Begriff Scrum?", "Rugby", ["Cricket", "Hockey", "Lacrosse"]],
        ["Wie heißt der Weltverband der Leichtathletik?", "World Athletics", ["FIFA", "UCI", "FINA"]],
        ["Welche Stadt war Gastgeber der Olympischen Sommerspiele 1992?", "Barcelona", ["Seoul", "Atlanta", "Los Angeles"]]
    ];
    fillToTarget(groups.hard, (index) => hardFacts[index % hardFacts.length]);

    const geniusFacts = [
        ["Welche Schacheröffnung beginnt mit 1. e4 c5?", "Sizilianische Verteidigung", ["Französische Verteidigung", "Damengambit", "Spanische Partie"]],
        ["Wie heißt ein perfektes Spiel im Bowling?", "300", ["180", "240", "360"]],
        ["Welcher Radklassiker endet traditionell im Velodrom von Roubaix?", "Paris-Roubaix", ["Mailand-Sanremo", "Lüttich-Bastogne-Lüttich", "Flandern-Rundfahrt"]],
        ["Welche Nation gewann die Rugby-WM 1995?", "Südafrika", ["Neuseeland", "Australien", "England"]],
        ["Wie heißt die olympische Bootsklasse mit einer Person und zwei Rudern?", "Einer", ["Zweier", "Vierer", "Achter"]]
    ];
    fillToTarget(groups.genius, (index) => geniusFacts[index % geniusFacts.length]);
}

function addMusicQuestions() {
    const groups = questionData["Musik"];

    fillToTarget(groups.easy, (index) => {
        const notes = ["C", "D", "E", "F", "G", "A", "H"];
        const note = notes[index % notes.length];
        return [`Welche Antwort ist ein Notenname?`, note, ["Tiger", "Lampe", "Wolke"]];
    });

    fillToTarget(groups.medium, (index) => {
        const beats = 2 + (index % 5);
        return [`Ein Takt hat ${beats} Schläge und es gibt 4 Takte. Wie viele Schläge sind das?`, String(beats * 4), [String(beats + 4), String(beats * 3), String(beats * 5)]];
    });

    const hardFacts = [
        ["Welche Molltonart hat drei b als Vorzeichen?", "c-Moll", ["a-Moll", "d-Moll", "g-Moll"]],
        ["Welcher Komponist schrieb 'Eine kleine Nachtmusik'?", "Mozart", ["Haydn", "Beethoven", "Schubert"]],
        ["Wie nennt man eine wiederholte Bassfigur?", "Ostinato", ["Kadenz", "Fuge", "Arie"]],
        ["Welche Tonart hat ein Kreuz als Vorzeichen?", "G-Dur", ["F-Dur", "C-Dur", "Es-Dur"]],
        ["Wie nennt man das allmähliche Lauterwerden?", "Crescendo", ["Diminuendo", "Legato", "Staccato"]]
    ];
    fillToTarget(groups.hard, (index) => hardFacts[index % hardFacts.length]);

    const geniusFacts = [
        ["Welche Kirchentonart beginnt auf F?", "Lydisch", ["Dorisch", "Phrygisch", "Äolisch"]],
        ["Wer komponierte 'Le Sacre du printemps'?", "Igor Strawinsky", ["Sergei Prokofjew", "Claude Debussy", "Béla Bartók"]],
        ["Wie nennt man eine Komposition mit Thema und imitierenden Stimmen?", "Fuge", ["Sonate", "Rondo", "Etüde"]],
        ["Welche Skala besteht aus fünf Tönen?", "Pentatonik", ["Chromatik", "Ganztonleiter", "Molltonleiter"]],
        ["Welches Intervall umfasst sechs Halbtonschritte?", "Tritonus", ["Quarte", "Quinte", "kleine Sexte"]]
    ];
    fillToTarget(groups.genius, (index) => geniusFacts[index % geniusFacts.length]);
}

function addFilmQuestions() {
    const groups = questionData["Film & Serien"];

    fillToTarget(groups.easy, (index) => {
        const episodes = 3 + (index % 8);
        return [`Eine Serie hat ${episodes} Folgen und bekommt eine weitere Folge. Wie viele Folgen sind es?`, String(episodes + 1), [String(episodes), String(episodes + 2), String(episodes + 3)]];
    });

    fillToTarget(groups.medium, (index) => {
        const minutes = 80 + index;
        return [`Ein Film dauert ${minutes} Minuten. Wie viele Minuten fehlen bis ${minutes + 20}?`, "20", ["10", "15", "30"]];
    });

    const hardFacts = [
        ["Wer führte bei 'Taxi Driver' Regie?", "Martin Scorsese", ["Francis Ford Coppola", "Brian De Palma", "Sidney Lumet"]],
        ["Welche Serie spielt hauptsächlich in Hawkins?", "Stranger Things", ["Dark", "Lost", "The X-Files"]],
        ["Welcher Film gewann 2004 den Oscar als bester Film?", "Der Herr der Ringe: Die Rückkehr des Königs", ["Lost in Translation", "Mystic River", "Seabiscuit"]],
        ["Wie nennt man den bewussten Bruch der vierten Wand?", "Meta-Kommentar", ["Jump Cut", "Storyboard", "Foley"]],
        ["Welche Filmtechnik erzeugt Bewegungen Bild für Bild?", "Stop-Motion", ["Motion Blur", "Rotoskopie", "Split Screen"]]
    ];
    fillToTarget(groups.hard, (index) => hardFacts[index % hardFacts.length]);

    const geniusFacts = [
        ["Wer drehte den Stummfilm 'Der letzte Mann'?", "F. W. Murnau", ["Fritz Lang", "G. W. Pabst", "Ernst Lubitsch"]],
        ["Welcher Kameramann ist eng mit 'Der Pate' verbunden?", "Gordon Willis", ["Sven Nykvist", "Vittorio Storaro", "Conrad Hall"]],
        ["Welche Bewegung verband Lars von Trier mit Thomas Vinterberg?", "Dogma 95", ["Nouvelle Vague", "Neorealismus", "Cinéma vérité"]],
        ["Wer führte bei 'Jeanne Dielman' Regie?", "Chantal Akerman", ["Agnès Varda", "Claire Denis", "Jane Campion"]],
        ["Welcher sowjetische Regisseur prägte die Montageteorie?", "Sergei Eisenstein", ["Andrei Tarkowski", "Dziga Vertov", "Vsevolod Pudovkin"]]
    ];
    fillToTarget(groups.genius, (index) => geniusFacts[index % geniusFacts.length]);
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
    Object.values(questionData).forEach((groups) => {
        Object.values(groups).forEach((group) => {
            fillToTarget(group, (index) => group[index % group.length]);
        });
    });
}

function fillToTarget(group, questionFactory) {
    let index = 0;

    while (group.length < QUESTIONS_PER_DIFFICULTY) {
        const question = [...questionFactory(index)];
        group.push(question);
        index += 1;
    }
}

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
        answers,
        correct: answers.indexOf(answer)
    };
}

function buildQuestions(items) {
    return items.map(([question, answer, wrongAnswers]) => createQuestion(question, answer, wrongAnswers));
}

function createRoundQuestions(questions, memoryKey) {
    const uniqueQuestions = [];
    const usedQuestionKeys = new Set();
    const recentQuestions = recentQuestionHistory[memoryKey] || [];

    shuffleArray(questions).forEach((question) => {
        if (!usedQuestionKeys.has(question.key) && !recentQuestions.includes(question.key)) {
            usedQuestionKeys.add(question.key);
            uniqueQuestions.push(question);
        }
    });

    if (uniqueQuestions.length >= 10) {
        return uniqueQuestions.slice(0, 10);
    }

    shuffleArray(questions).forEach((question) => {
        if (!usedQuestionKeys.has(question.key)) {
            usedQuestionKeys.add(question.key);
            uniqueQuestions.push(question);
        }
    });

    return uniqueQuestions.slice(0, 10);
}

function rememberRoundQuestions(memoryKey, questions) {
    const oldQuestions = recentQuestionHistory[memoryKey] || [];
    const newQuestions = questions.map((question) => question.key);
    const memoryLimit = RECENT_ROUND_MEMORY * 10;

    recentQuestionHistory[memoryKey] = [...oldQuestions, ...newQuestions].slice(-memoryLimit);
}

function cleanQuestionText(question) {
    return question.replace(/\s+\(\d+\)$/, "");
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
let playerPoints = 0;
let opponentPoints = 0;
let playerResults = [];
let opponentResults = [];
let questionAnswered = false;
let factIntervalId = null;
let currentFactIndex = 0;
let timerIntervalId = null;
let timeLeft = 15;
const recentQuestionHistory = {};
let playerName = "Du";
let roundStartedAt = null;
const leaderboardStorageKey = "schlag-den-nico-leaderboard";
const supabaseUrl = "https://enomiaewxwqvzuhqfhff.supabase.co";
const supabaseKey = "sb_publishable_Ehg3yiC5TuFe_BrClkC-Vw_O0FDEEUy";
const onlineLeaderboardTable = "leaderboard";
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
    document.body.classList.remove("quiz-active");
    document.getElementById("next-btn").style.display = "inline-block";
    document.getElementById("next-btn").innerText = "Weiter";
    document.getElementById("home-btn").style.display = "none";
    document.getElementById("difficulty-box").style.display = "none";
    document.getElementById("game-info").style.display = "none";
    document.getElementById("scoreboard").style.display = "none";
    document.getElementById("name-box").style.display = "block";
    document.getElementById("leaderboard").style.display = "block";
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

    document.body.classList.add("quiz-active");
    document.getElementById("question").innerText = "Wähle eine Kategorie";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("home-btn").style.display = "none";
    document.getElementById("difficulty-box").style.display = "flex";
    document.getElementById("game-info").style.display = "none";
    document.getElementById("scoreboard").style.display = "none";
    document.getElementById("name-box").style.display = "none";
    document.getElementById("leaderboard").style.display = "none";
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

function calculateSpeedPoints(answerTime) {
    const perfectWindow = perfectPointWindows[selectedDifficulty];

    if (answerTime <= perfectWindow) {
        return 100;
    }

    if (answerTime >= 15) {
        return 0;
    }

    const slowestUsefulTime = 14;
    const progress = (answerTime - perfectWindow) / (slowestUsefulTime - perfectWindow);
    return Math.max(5, Math.round(100 - progress * 95));
}

function calculateWrongAnswerPenalty(answerTime) {
    if (selectedDifficulty !== "genius") {
        return 0;
    }

    const safeTime = Math.min(Math.max(answerTime, 1), 15);
    const progress = (safeTime - 1) / 14;

    return Math.round(70 - progress * 65);
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
    return `${playerName}: ${playerPoints} Punkte (${score} richtig) | Nico: ${opponentPoints} Punkte (${opponentScore} richtig)`;
}

function makeOpponentGuess(currentQuestion) {
    const isCorrect = Math.random() < opponentChances[selectedDifficulty];
    const answerTime = getOpponentAnswerTime();

    if (isCorrect) {
        opponentScore += 1;
        opponentPoints += calculateSpeedPoints(answerTime);
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
    const earnedPoints = playerWasCorrect ? calculateSpeedPoints(playerAnswerTime) : 0;
    const lostPoints = !playerWasCorrect && answerIndex !== null ? calculateWrongAnswerPenalty(playerAnswerTime) : 0;

    buttons.forEach((button) => {
        button.disabled = true;
    });

    if (playerWasCorrect) {
        buttons[answerIndex].classList.add("correct");
        score += 1;
        playerPoints += earnedPoints;
    } else if (answerIndex !== null) {
        buttons[answerIndex].classList.add("wrong");
        playerPoints = Math.max(0, playerPoints - lostPoints);
    }

    buttons[currentQuestion.correct].classList.add("correct");
    playerResults[currentQuestionIndex] = playerWasCorrect;
    opponentResults[currentQuestionIndex] = opponentTurn.isCorrect;
    updateScoreDots();

    const playerPointText = playerWasCorrect
        ? ` | +${earnedPoints} Punkte`
        : ` | -${lostPoints} Punkte`;
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

    if (currentQuestionIndex === 0 && !roundStartedAt) {
        roundStartedAt = Date.now();
    }

    document.getElementById("question").innerText = `Frage ${currentQuestionIndex + 1}/10: ${currentQuestion.question}`;
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
        "Punkte-Regel: Pro Frage sind maximal 100 Punkte möglich. Je schneller du richtig antwortest, desto mehr Punkte bekommst du.";
    document.getElementById("next-btn").innerText = "Quiz starten";
    document.getElementById("next-btn").style.display = "inline-block";
    document.getElementById("home-btn").style.display = "none";
    document.getElementById("difficulty-box").style.display = "none";
    document.getElementById("game-info").style.display = "none";
    document.getElementById("scoreboard").style.display = "none";
    document.getElementById("score").innerText = "";
    roundStartedAt = null;
    questionAnswered = true;
    currentQuestionIndex = -1;

    buttons.forEach((button) => {
        button.style.display = "none";
        button.disabled = true;
    });
}

function startQuizShow() {
    quizStarted = true;
    clearInterval(factIntervalId);
    updatePlayerName();
    document.getElementById("next-btn").innerText = "Nächste Frage";
    showCategories();
}

function finishRound() {
    const buttons = document.querySelectorAll(".answer-btn");
    const resultMessage = getResultMessage();
    stopTimer();
    saveLeaderboardEntry();

    document.getElementById("question").innerText =
        `${resultMessage} ${playerName}: ${playerPoints} Punkte (${score}/10) | Nico: ${opponentPoints} Punkte (${opponentScore}/10)`;
    document.body.classList.add("result-screen");
    document.body.classList.toggle("winner-screen", playerPoints > opponentPoints);
    document.body.classList.toggle("loser-screen", playerPoints < opponentPoints);
    if (playerPoints > opponentPoints) {
        startConfetti();
    }
    document.getElementById("next-btn").innerText = "Neue Runde";
    document.getElementById("next-btn").style.display = "inline-block";
    document.getElementById("home-btn").style.display = "inline-block";
    document.getElementById("difficulty-box").style.display = "none";
    document.getElementById("game-info").style.display = "none";
    document.getElementById("scoreboard").style.display = "block";
    document.getElementById("score").innerText = "";
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
    if (playerPoints > opponentPoints) {
        return "Du hast gegen Nico gewonnen!";
    }

    if (playerPoints < opponentPoints) {
        return "Du hast gegen Nico verloren!";
    }

    return "Unentschieden gegen Nico!";
}

function updatePlayerName() {
    const nameInput = document.getElementById("player-name");
    const cleanedName = nameInput.value.trim();
    playerName = cleanedName || "Du";
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
    playerPoints = 0;
    opponentPoints = 0;
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

function saveLeaderboardEntry() {
    const now = new Date();
    const usedSeconds = roundStartedAt ? Math.max(1, Math.round((Date.now() - roundStartedAt) / 1000)) : 0;
    const entry = {
        name: playerName,
        category: selectedCategory ? selectedCategory.name : "-",
        date: now.toLocaleDateString("de-DE"),
        usedTime: formatUsedTime(usedSeconds),
        difficulty: difficultyLabels[selectedDifficulty],
        points: playerPoints
    };
    const leaderboard = [...getLeaderboard(), entry]
        .sort((first, second) => second.points - first.points)
        .slice(0, 10);

    localStorage.setItem(leaderboardStorageKey, JSON.stringify(leaderboard));
    updateLeaderboard();
    saveOnlineLeaderboardEntry(entry);
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
    onlineLeaderboardBody.appendChild(createLeaderboardMessageRow("Lade online...", 6));

    try {
        const difficultyFilter = `&difficulty=eq.${encodeURIComponent(selectedOnlineLeaderboard)}`;
        let response = await fetchOnlineLeaderboard("name,category,date,usedTime,difficulty,points", difficultyFilter);

        if (!response.ok) {
            response = await fetchOnlineLeaderboard("name,date,usedTime,difficulty,points", difficultyFilter);
        }

        if (!response.ok) {
            throw new Error("Online-Bestenliste nicht erreichbar.");
        }

        const leaderboard = await response.json();
        onlineLeaderboardBody.innerHTML = "";

        if (!leaderboard.length) {
            onlineLeaderboardBody.appendChild(createLeaderboardMessageRow("Noch keine Online-Spiele", 6));
            return;
        }

        leaderboard.forEach((entry, index) => {
            onlineLeaderboardBody.appendChild(createLeaderboardRow(entry, index, false));
        });
    } catch {
        showOnlineLeaderboardMessage("Online-Tabelle noch nicht eingerichtet");
    }
}

function fetchOnlineLeaderboard(selectFields, difficultyFilter) {
    return fetch(`${supabaseUrl}/rest/v1/${onlineLeaderboardTable}?select=${selectFields}${difficultyFilter}&order=points.desc&limit=10`, {
        headers: getSupabaseHeaders()
    });
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
    onlineLeaderboardBody.appendChild(createLeaderboardMessageRow(message, 6));
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
    dateCell.innerText = entry.date;
    usedTimeCell.innerText = entry.usedTime || entry.time || "-";
    pointsCell.innerText = entry.points;
    difficultyCell.innerText = entry.difficulty || "-";

    row.appendChild(rankCell);
    row.appendChild(nameCell);
    row.appendChild(categoryCell);
    row.appendChild(dateCell);
    row.appendChild(usedTimeCell);
    row.appendChild(pointsCell);
    if (showDifficulty) {
        row.appendChild(difficultyCell);
    }

    return row;
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
        roundQuestions = createRoundQuestions(selectedCategory.questions[selectedDifficulty], memoryKey);
        rememberRoundQuestions(memoryKey, roundQuestions);
        currentQuestionIndex = 0;
        score = 0;
        opponentScore = 0;
        playerPoints = 0;
        opponentPoints = 0;
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
document.querySelector(".answer-btn").addEventListener("click", showNextFact);
factIntervalId = setInterval(loadFacts, 8000);
