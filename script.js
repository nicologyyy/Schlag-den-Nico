const facts = [
    "Ein Oktopus hat drei Herzen.",
    "Bananen sind Beeren.",
    "Haie existieren länger als Bäume.",
    "Honig wird nie schlecht.",
    "Ein Tag auf Venus ist länger als ein Jahr.",
    "Katzen schlafen bis zu 16 Stunden am Tag.",
    "Blitz ist heißer als die Sonne.",
    "Wasser kann gleichzeitig fest und flüssig sein."
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

function fillToTarget(group, questionFactory) {
    let index = 0;

    while (group.length < QUESTIONS_PER_DIFFICULTY) {
        const question = questionFactory(index);
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
        key: normalizeQuestionText(cleanQuestion),
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
let timerIntervalId = null;
let timeLeft = 15;
const recentQuestionHistory = {};
let playerName = "Du";
const leaderboardStorageKey = "schlag-den-nico-leaderboard";
const supabaseUrl = "https://enomiaewxwqvzuhqfhff.supabase.co";
const supabaseKey = "sb_publishable_Ehg3yiC5TuFe_BrClkC-Vw_O0FDEEUy";
const onlineLeaderboardTable = "leaderboard";

const opponentChances = {
    easy: 0.55,
    medium: 0.7,
    hard: 0.88,
    genius: 0.95
};

const perfectPointWindows = {
    easy: 1,
    medium: 2,
    hard: 3,
    genius: 5
};

function shuffleFacts() {
    return [...facts].sort(() => Math.random() - 0.5);
}

function loadFacts() {
    const buttons = document.querySelectorAll(".answer-btn");
    const shuffledFacts = shuffleFacts();

    document.getElementById("difficulty-box").style.display = "none";
    document.getElementById("game-info").style.display = "none";
    document.getElementById("scoreboard").style.display = "none";
    document.getElementById("name-box").style.display = "block";
    document.getElementById("leaderboard").style.display = "block";
    updateLeaderboard();
    updateOnlineLeaderboard();

    buttons.forEach((button, index) => {
        button.style.display = index === 0 ? "block" : "none";
        button.innerText = index === 0 ? shuffledFacts[0] : "";
    });
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

    document.getElementById("question").innerText = "Wähle eine Kategorie";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("difficulty-box").style.display = "flex";
    document.getElementById("game-info").style.display = "none";
    document.getElementById("scoreboard").style.display = "none";
    document.getElementById("name-box").style.display = "none";
    document.getElementById("leaderboard").style.display = "none";
    document.getElementById("score").innerText = "";

    buttons.forEach((button, index) => {
        button.style.display = "block";
        button.innerText = categories[index].name;
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

function startQuizShow() {
    quizStarted = true;
    clearInterval(factIntervalId);
    updatePlayerName();
    document.getElementById("next-btn").innerText = "Nächste Frage";
    showCategories();
}

function finishRound() {
    const buttons = document.querySelectorAll(".answer-btn");
    stopTimer();
    saveLeaderboardEntry();

    document.getElementById("question").innerText = `Runde fertig! ${playerName}: ${playerPoints} Punkte (${score}/10) | Nico: ${opponentPoints} Punkte (${opponentScore}/10)`;
    document.getElementById("next-btn").innerText = "Neue Runde";
    document.getElementById("next-btn").style.display = "inline-block";
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

function updatePlayerName() {
    const nameInput = document.getElementById("player-name");
    const cleanedName = nameInput.value.trim();
    playerName = cleanedName || "Du";
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
    const entry = {
        name: playerName,
        date: now.toLocaleDateString("de-DE"),
        time: now.toLocaleTimeString("de-DE", {
            hour: "2-digit",
            minute: "2-digit"
        }),
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
        const emptyRow = createLeaderboardMessageRow("Noch keine Spiele");
        leaderboardBody.appendChild(emptyRow);
        return;
    }

    leaderboard.forEach((entry, index) => {
        leaderboardBody.appendChild(createLeaderboardRow(entry, index));
    });
}

async function saveOnlineLeaderboardEntry(entry) {
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/${onlineLeaderboardTable}`, {
            method: "POST",
            headers: getSupabaseHeaders({
                "Content-Type": "application/json",
                Prefer: "return=minimal"
            }),
            body: JSON.stringify(entry)
        });

        if (!response.ok) {
            throw new Error("Online-Bestenliste konnte nicht gespeichert werden.");
        }

        updateOnlineLeaderboard();
    } catch {
        showOnlineLeaderboardMessage("Online speichern fehlgeschlagen");
    }
}

async function updateOnlineLeaderboard() {
    const onlineLeaderboardBody = document.getElementById("online-leaderboard-body");

    if (!onlineLeaderboardBody) {
        return;
    }

    onlineLeaderboardBody.innerHTML = "";
    onlineLeaderboardBody.appendChild(createLeaderboardMessageRow("Lade online..."));

    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/${onlineLeaderboardTable}?select=name,date,time,points&order=points.desc&limit=10`, {
            headers: getSupabaseHeaders()
        });

        if (!response.ok) {
            throw new Error("Online-Bestenliste nicht erreichbar.");
        }

        const leaderboard = await response.json();
        onlineLeaderboardBody.innerHTML = "";

        if (!leaderboard.length) {
            onlineLeaderboardBody.appendChild(createLeaderboardMessageRow("Noch keine Online-Spiele"));
            return;
        }

        leaderboard.forEach((entry, index) => {
            onlineLeaderboardBody.appendChild(createLeaderboardRow(entry, index));
        });
    } catch {
        showOnlineLeaderboardMessage("Online-Tabelle noch nicht eingerichtet");
    }
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
    onlineLeaderboardBody.appendChild(createLeaderboardMessageRow(message));
}

function createLeaderboardRow(entry, index) {
    const row = document.createElement("tr");
    const rankCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const dateCell = document.createElement("td");
    const timeCell = document.createElement("td");
    const pointsCell = document.createElement("td");

    rankCell.innerText = index + 1;
    nameCell.innerText = entry.name;
    dateCell.innerText = entry.date;
    timeCell.innerText = entry.time;
    pointsCell.innerText = entry.points;

    row.appendChild(rankCell);
    row.appendChild(nameCell);
    row.appendChild(dateCell);
    row.appendChild(timeCell);
    row.appendChild(pointsCell);

    return row;
}

function createLeaderboardMessageRow(message) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");

    cell.colSpan = 5;
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
        selectedCategory = categories[answerIndex];
        const memoryKey = `${selectedCategory.name}-${selectedDifficulty}`;
        roundQuestions = createRoundQuestions(selectedCategory.questions[selectedDifficulty], memoryKey);
        rememberRoundQuestions(memoryKey, roundQuestions);
        currentQuestionIndex = 0;
        score = 0;
        opponentScore = 0;
        playerPoints = 0;
        opponentPoints = 0;
        resetScoreDots();
        showQuestion();
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
factIntervalId = setInterval(loadFacts, 10000);
