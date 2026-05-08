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

const sportEasyQuestionPairs = [
    ["Wie viele Spieler stehen bei einer Fußballmannschaft auf dem Feld?", "11", ["9", "10", "12"]],
    ["Welche Sportart spielt man mit einem Basketball?", "Basketball", ["Fußball", "Tennis", "Eishockey"]],
    ["Wie heißt das größte Fußballturnier der Welt?", "FIFA-Weltmeisterschaft", ["Europa Meisterschaft", "DFB Pokal", "Champions League"]],
    ["Welche Farbe hat die Karte bei einem Platzverweis im Fußball?", "Rot", ["Blau", "Grün", "Gelb"]],
    ["Wie nennt man ein Unentschieden im Fußball?", "Remis", ["Sieg", "Niederlage", "2 Gewinner"]],
    ["Welche Sportart betreibt man in Wimbledon?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wie viele Ringe hat das olympische Symbol?", "5", ["3", "4", "6"]],
    ["Mit welchem Körperteil darf ein Feldspieler im Fußball den Ball normalerweise nicht berühren?", "Mit der Hand", ["Mit dem Fuß", "Mit dem Kopf", "Mit dem Bauch"]],
    ["Wie nennt man den Punktgewinn im Tennis?", "Punkt", ["Satz", "Matchpoint", "Aufschlag"]],
    ["Welche Sportart nutzt einen Puck?", "Eishockey", ["Fußball", "Basketball", "Tennis"]],
    ["Wie lange dauert ein Fußballspiel regulär?", "90 Minuten", ["75 Minuten", "80 Minuten", "100 Minuten"]],
    ["Wie nennt man den Bereich vor dem Tor im Fußball?", "Strafraum", ["Halbkreis", "Mittelliniel", "Seitenaus"]],
    ["Welche Sportart ist Michael Jordan berühmt gemacht hat?", "Basketball", ["Fußball", "Tennis", "Eishockey"]],
    ["Wie viele Spieler hat ein Volleyballteam auf dem Feld?", "6", ["4", "5", "7"]],
    ["Welche Farbe hat meistens ein Tennisball?", "Gelb", ["Rot", "Blau", "Grün"]],
    ["Welche Sportart fährt man auf Schnee mit zwei Brettern?", "Skifahren", ["Fußball", "Eishockey", "Basketball"]],
    ["Wie nennt man einen Treffer im Fußball?", "Tor", ["Foul", "Abseits", "Abpfiff"]],
    ["Wie viele Halbzeiten hat ein Handballspiel?", "2", ["1", "3", "4"]],
    ["Welche Sportart wird auf Eis mit Besen gespielt?", "Curling", ["Fußball", "Basketball", "Tennis"]],
    ["Wie heißt die höchste deutsche Fußballliga?", "Bundesliga", ["Regionalliga", "Kreisliga", "Verbandsliga"]],
    ["Welche Sportart verbindet Schwimmen, Radfahren und Laufen?", "Triathlon", ["Biatholn", "Quadthlon", "Maratohn"]],
    ["Wie nennt man einen Spieler, der Tore verhindert?", "Torwart", ["Stürmer", "Trainer", "Schiedsriechter"]],
    ["Welche Sportart spielt man mit Schläger und Federball?", "Badminton", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Punkte zählt ein Touchdown im American Football?", "6", ["4", "5", "7"]],
    ["Welche Sportart ist Usain Bolt berühmt gemacht hat?", "Sprint", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man die Spielzeit im Fußball nach 90 min?", "Verlängerung", ["Halbzeit", "Overtime", "Spieldauer"]],
    ["Welche Sportart nutzt man beim „Hole in One“?", "Golf", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler hat eine Basketballmannschaft auf dem Feld?", "5", ["3", "4", "6"]],
    ["Welche Farbe hat die Ziellinie im Motorsport meistens?", "Schwarz-Weiß ", ["Rot-braun", "Blau-gelb", "Grün-lila"]],
    ["Wie nennt man einen Treffer mit dem Kopf im Fußball?", "Kopfballtor", ["Volley", "Fallrückzieher", "Rabona"]],
    ["Welche Sportart wird bei der Tour de France ausgeübt?", "Radsport", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Sätze muss man im Herrentennis bei Grand Slams meist gewinnen?", "3", ["1", "2", "4"]],
    ["Welche Sportart nutzt man mit einem Surfbrett?", "Surfen", ["Fußball", "Eiskunstlauf", "Tennis"]],
    ["Wie nennt man die olympischen Spiele im Winter?", "Winterspiele", ["Sommerspiele", "Eisspiele", "Herbstspiele"]],
    ["Welche Sportart spielt Cristiano Ronaldo?", "Fußball", ["Basketball", "Tennis", "Eishockey"]],
    ["Wie viele Löcher hat eine normale Golfrunde?", "18", ["8", "13", "23"]],
    ["Welche Sportart nutzt einen Ring und Boxhandschuhe?", "Boxen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man den besten Torschützen eines Turniers?", "Torschützenkönig", ["Man of the Match", "Man of the Tournement", "Sieger der Herzen"]],
    ["Welche Sportart wird auf einem Tatami ausgeübt?", "Judo", ["Turnen", "Basketball", "Tennis"]],
    ["Wie viele Minuten dauert ein Basketballspiel in der NBA regulär?", "48", ["38", "43", "53"]],
    ["Welche Sportart spielt man auf Sand oft im Sommer?", "Volleyball", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man ein Rennen mit Hindernissen in der Leichtathletik?", "Hürdenlauf", ["Langlauf", "Marathon", "Sprint"]],
    ["Welche Sportart nutzt ein Netz über der Spielfeldmitte?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wie viele Spieler stehen bei einem Handballteam auf dem Feld?", "7", ["5", "6", "8"]],
    ["Welche Sportart machte Michael Schumacher berühmt?", "Formel 1", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man den Start beim Schwimmen?", "Sprungstart", ["Lauf", "Jump", "Flucht"]],
    ["Welche Sportart nutzt Kufen an den Schuhen?", "Eislaufen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Punkte gibt ein Freiwurf im Basketball?", "1", ["2", "3", "4"]],
    ["Welche Sportart wird beim Super Bowl gespielt?", "American Football", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man den Schiedsrichter im Fußball oft umgangssprachlich?", "Referee/Schiri", ["Blinder", "Sympatischer", "Absturz"]],
    ["Welche Sportart spielt man mit einem Rugbyball?", "Rugby", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler hat ein Eishockeyteam gleichzeitig auf dem Eis?", "6", ["4", "5", "7"]],
    ["Welche Sportart nutzt ein Trampolin?", "Trampolinspringen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man einen perfekten Wurf im Bowling?", "Strike", ["Paare", "Split", "Touchdown"]],
    ["Welche Sportart machte Roger Federer berühmt?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wie viele Minuten dauert ein Handballspiel regulär?", "60", ["50", "55", "65"]],
    ["Welche Sportart nutzt einen Helm und ein Pferd?", "Polo", ["Cricket", "Basketball", "Tennis"]],
    ["Wie nennt man den Bereich hinter der Dreierlinie im Basketball?", "Dreipunktbereich", ["Starfraum", "Sprungzone", "Freiraum"]],
    ["Welche Sportart wird bei Olympia mit Fechtwaffen ausgeübt?", "Fechten", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler hat ein Baseballteam auf dem Feld?", "9", ["7", "8", "10"]],
    ["Welche Sportart nutzt einen Billardtisch?", "Billard", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man einen Sieg ohne Gegentor im Fußball?", "Zu-Null-Sieg", ["Remi", "Niederlage", "Unentschieden"]],
    ["Welche Sportart machte Tiger Woods berühmt?", "Golf", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler hat ein Wasserballteam im Wasser?", "7", ["5", "6", "8"]],
    ["Welche Sportart nutzt einen Speer?", "Speerwurf", ["Kugelstoß", "Basketball", "Biathlon"]],
    ["Wie nennt man den Bereich zum Wechseln im Motorsport?", "Boxengasse", ["Wechselraum", "Umkleide", "Garage"]],
    ["Welche Sportart nutzt einen Sattel und Hindernisse?", "Springreiten", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Punkte zählt ein Elfmeter-Tor im Fußball?", "1", ["2", "3", "4"]],
    ["Welche Sportart nutzt ein Kajak?", "Kanusport", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt ein Snowboard?", "Snowboarden", ["Ski", "Skateboard", "Tennis"]],
    ["Wie viele Spieler hat ein Volleyballteam insgesamt meist im Kader?", "12", ["10", "11", "13"]],
    ["Welche Sportart machte Lewis Hamilton berühmt?", "Formel 1", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man einen Wurf aus dem Stand im Basketball?", "Standwurf", ["Aufschlag", "Laufwurf", "Liegewurf"]],
    ["Welche Sportart nutzt einen Ring aus Metall am Korb?", "Basketball", ["Fußball", "Volleyball", "Tennis"]],
    ["Wie viele Viertel hat ein American-Football-Spiel?", "4", ["2", "3", "5"]],
    ["Welche Sportart nutzt einen Tisch und kleine Schläger?", "Tischtennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Welche Sportart nutzt einen Fallschirm?", "Fallschirmspringen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler stehen bei einem Rugbyteam auf dem Feld?", "15", ["13", "14", "16"]],
    ["Welche Sportart wird in der NBA gespielt?", "Basketball", ["Fußball", "Tennis", "Eishockey"]],
    ["Wie nennt man das Ziel beim Darts?", "Bullseye", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart machte Serena Williams berühmt?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wie viele Minuten dauert ein Eishockeydrittel?", "20", ["10", "15", "25"]],
    ["Welche Sportart nutzt einen Barren?", "Turnen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man das Endspiel eines Turniers?", "Finale", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt Hanteln?", "Gewichtheben", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler hat ein Fußballteam insgesamt auf dem Platz inklusive Torwart?", "11", ["9", "10", "12"]],
    ["Welche Sportart nutzt ein Segelboot?", "Segeln", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man einen Treffer im Hockey?", "Goal/Tor", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt ein Rennrad?", "Radsport", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Bahnen hat eine Standard-Laufbahn?", "8", ["6", "7", "9"]],
    ["Welche Sportart machte Kylian Mbappé berühmt?", "Fußball", ["Basketball", "Tennis", "Eishockey"]],
    ["Wie nennt man die Pause zwischen zwei Halbzeiten?", "Halbzeitpause", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt eine Matte und Würfe?", "Ringen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Punkte gibt ein normaler Korb im Basketball?", "2", ["1", "3", "4"]],
    ["Welche Sportart nutzt einen Helm und Schläger auf Eis?", "Eishockey", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man den Bereich außerhalb des Spielfelds?", "Aus", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt ein Rennpferd?", "Pferderennen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler stehen bei einem Fußballspiel insgesamt auf dem Feld?", "22", ["12", "17", "27"]],
    ["Welche Sportart nutzt einen Tennisschläger?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wie nennt man einen Fehlwurf beim Bowling ohne Pins?", "Gutterball", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart machte Dirk Nowitzki berühmt?", "Basketball", ["Fußball", "Tennis", "Eishockey"]],
    ["Wie viele Sekunden hat ein Angriff im Basketball (NBA)?", "24", ["14", "19", "29"]],
    ["Welche Sportart nutzt ein Netz und einen Volleyball?", "Volleyball", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man einen besonders schnellen Gegenangriff?", "Konter", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt Rollschuhe oft im Derby?", "Roller Derby", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler hat ein Cricketteam?", "11", ["9", "10", "12"]],
    ["Welche Sportart nutzt eine Zielscheibe?", "Bogenschießen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man einen Strafstoß im Handball?", "Siebenmeter", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt ein Kanu?", "Kanurennsport", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Minuten dauert ein Rugbyspiel regulär?", "80", ["65", "70", "90"]],
    ["Welche Sportart machte Neymar berühmt?", "Fußball", ["Basketball", "Tennis", "Eishockey"]],
    ["Wie nennt man einen perfekten Sprung ins Wasser ohne Spritzer?", "Sauberer Sprung", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt eine Startbox?", "Pferderennen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler hat ein Lacrosse-Team auf dem Feld?", "10", ["8", "9", "11"]],
    ["Welche Sportart nutzt einen Fechtdegen?", "Fechten", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man die höchste Spielklasse oft allgemein?", "Erste Liga", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt Kreide am Queue?", "Billard", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Punkte zählt ein Safety im American Football?", "2", ["1", "3", "4"]],
    ["Welche Sportart nutzt ein Springseil im Training oft?", "Boxen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man die Linie vor dem Tor im Hockey?", "Torlinie", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart machte Max Verstappen berühmt?", "Formel 1", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Schläger darf ein Golfer maximal im Bag haben?", "14", ["12", "13", "15"]],
    ["Welche Sportart nutzt ein Einrad?", "Einradfahren", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man einen direkten Freistoßtreffer?", "Freistoßtor", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt eine Eisbahn und Tanz?", "Eiskunstlauf", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Basen gibt es im Baseball?", "4", ["2", "3", "5"]],
    ["Welche Sportart nutzt ein Ruderboot?", "Rudern", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man einen Lauf über 42,195 km?", "Marathon", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt eine Zielscheibe mit 20 Feldern?", "Darts", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler hat ein Futsalteam auf dem Feld?", "5", ["3", "4", "6"]],
    ["Welche Sportart machte Tom Brady berühmt?", "American Football", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man den Bereich zwischen Torpfosten und Latte?", "Tor", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt einen Diskus?", "Diskuswurf", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Runden dauert ein Formel-1-Rennen ungefähr?", "Unterschiedlich je nach Strecke", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt ein Springpferd?", "Vielseitigkeitsreiten", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man ein Rennen gegen die Uhr im Radsport?", "Zeitfahren", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt einen Pistolenschuss zum Start?", "Leichtathletik", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Punkte gibt ein Touchdown mit Extrapunkt?", "7", ["5", "6", "8"]],
    ["Welche Sportart nutzt eine Bobbahn?", "Bobsport", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man den letzten Abschnitt eines Rennens?", "Schlussphase", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart machte Novak Djokovic berühmt?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wie viele Drittel hat ein Eishockeyspiel?", "3", ["1", "2", "4"]],
    ["Welche Sportart nutzt einen Sandsack im Training?", "Boxen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man den Gewinner einer Goldmedaille?", "Olympiasieger", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt ein Trikot mit Rückennummern?", "Fußball", ["Basketball", "Tennis", "Eishockey"]],
    ["Wie viele Spieler stehen bei einem Baseballteam gleichzeitig im Feld?", "9", ["7", "8", "10"]],
    ["Welche Sportart nutzt ein Balancebrett auf Wellen?", "Surfen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man das Ende eines Rennens?", "Zieleinlauf", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt ein Schwert als Sportgerät?", "Fechten", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler hat ein Dodgeball-Team oft?", "6", ["4", "5", "7"]],
    ["Welche Sportart machte Mikaela Shiffrin berühmt?", "Ski Alpin", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man den Bereich für Ersatzspieler?", "Bank", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt einen Hammer als Wurfgerät?", "Hammerwurf", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Minuten dauert ein Futsalspiel regulär?", "40", ["30", "35", "45"]],
    ["Welche Sportart nutzt Klettergriffe?", "Sportklettern", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man eine Niederlage ohne eigenen Punkt?", "Shutout/Zu-Null-Niederlage", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt einen Windschirm?", "Windsurfen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Schiedsrichter gibt es oft im Basketball?", "3", ["1", "2", "4"]],
    ["Welche Sportart nutzt eine Halfpipe?", "Snowboard/Freestyle-Ski", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man einen Spielerwechsel?", "Auswechslung", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart machte Zlatan Ibrahimović berühmt?", "Fußball", ["Basketball", "Tennis", "Eishockey"]],
    ["Wie viele Spieler hat ein Team beim Curling?", "4", ["2", "3", "5"]],
    ["Welche Sportart nutzt eine Startklappe?", "Schwimmen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man die Zeitmessung im Motorsport?", "Timing", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt einen Gymnastikball?", "Gymnastik", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Löcher hat ein Mini-Golf-Standardkurs oft?", "18", ["8", "13", "23"]],
    ["Welche Sportart nutzt ein Netz mit niedriger Höhe?", "Badminton", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man einen sehr hohen Sieg?", "Kantersieg", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt eine Luftpistole?", "Sportschießen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler hat ein Team beim Beachvolleyball?", "2", ["1", "3", "4"]],
    ["Welche Sportart machte Lamine Yamal berühmt?", "Fußball", ["Basketball", "Tennis", "Eishockey"]],
    ["Wie nennt man die Fläche um den Basketballkorb?", "Zone", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt einen Schwebebalken?", "Turnen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Minuten dauert ein Volleyballsatz mindestens?", "Keine feste Zeit", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt eine Finne am Brett?", "Surfen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man das Startsignal im Rennen?", "Startschuss", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt einen Helm mit Visier oft?", "American Football", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler hat ein Team im Polo auf dem Feld?", "4", ["2", "3", "5"]],
    ["Welche Sportart nutzt einen Schlitten auf Eis?", "Rennrodeln", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man den Bereich für Trainer und Betreuer?", "Coaching Zone", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart machte Erling Haaland berühmt?", "Fußball", ["Basketball", "Tennis", "Eishockey"]],
    ["Wie viele Punkte braucht man meist zum Satzgewinn im Tischtennis?", "11", ["9", "10", "12"]],
    ["Welche Sportart nutzt einen Judogi?", "Judo", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man den ersten Platz eines Rennens?", "Sieg", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt einen Speer als Wurfgerät?", "Speerwurf", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler hat ein Team im Ultimate Frisbee oft?", "7", ["5", "6", "8"]],
    ["Welche Sportart nutzt einen Mountainbike-Parcours?", "Mountainbiking", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man die zusätzliche Zeit nach regulärer Spielzeit?", "Nachspielzeit", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt einen Schachtimer?", "Schach", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Sekunden darf ein Torwart im Fußball den Ball halten?", "6", ["4", "5", "7"]],
    ["Welche Sportart machte Simone Biles berühmt?", "Turnen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man den Start eines Rennens im Motorsport?", "Gridstart", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt eine Hantelstange?", "Gewichtheben", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler stehen bei einem Wasserballspiel insgesamt im Wasser?", "14", ["12", "13", "15"]],
    ["Welche Sportart nutzt einen Bogen?", "Bogenschießen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man den letzten Versuch im Sport oft?", "Entscheidungsversuch", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt einen Squashschläger?", "Squash", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Minuten dauert ein Fußballspiel inklusive Halbzeitpause ungefähr?", "105 Minuten", ["90 Minuten", "95 Minuten", "115 Minuten"]]
];

const sportMediumQuestionPairs = sportEasyQuestionPairs;

const sportHardQuestionPairs = [
    ["Wer hält den Rekord für die meisten Tore bei einer FIFA Fußball-Weltmeisterschaft?", "Miroslav Klose", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Nation gewann die erste UEFA Champions League unter diesem Namen 1993?", "Frankreich gewann nicht; der Sieger war Olympique Marseille", ["Berlin", "Paris", "Wasser"]],
    ["Wie viele Runden umfasst das Rennen in Monaco Grand Prix normalerweise?", "78", ["63", "68", "88"]],
    ["Welcher Tennisspieler gewann als erster 20 Grand-Slam-Titel?", "Roger Federer", ["Rafael Nadal", "Novak Djokovic", "Steffi Graf"]],
    ["Welche Nation gewann die erste Rugby-Weltmeisterschaft 1987?", "Neuseeland", ["Berlin", "Paris", "Wasser"]],
    ["Wie nennt man im Baseball drei Strikeouts in einem Spielzug?", "Triple Play Strikeout/Immaculate Inning-Kontext", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart machte Ole Einar Bjørndalen berühmt?", "Biathlon", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den NBA-Rekord für die meisten Punkte in einem Spiel?", "Wilt Chamberlain", ["Michael Jordan", "LeBron James", "Kobe Bryant"]],
    ["Wie viele Goldmedaillen gewann Michael Phelps bei Olympischen Spielen?", "23", ["13", "18", "28"]],
    ["Welche Nation gewann die meisten Titel bei der Copa Libertadores?", "Argentinien", ["Berlin", "Paris", "Wasser"]],
    ["Wie heißt die Trophäe der NHL?", "Stanley Cup", ["Berlin", "Paris", "Wasser"]],
    ["Welche Nation gewann die erste Fußball-Europameisterschaft 1960?", "Sowjetunion", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart betreibt Magnus Carlsen professionell?", "Schach", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler dürfen bei einem Fußballspiel maximal auf der Bank sitzen (UEFA-Wettbewerbe meist modern)?", "Unterschiedlich, oft 12–15", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Nation gewann die meisten olympischen Goldmedaillen im Eiskunstlauf?", "Russland/Sowjetunion", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die meisten Tour-de-France-Titel offiziell anerkannt?", "5 Fahrer mit je 5 Siegen", ["3 Fahrer mit je 5 Siegen", "4 Fahrer mit je 5 Siegen", "6 Fahrer mit je 5 Siegen"]],
    ["Welche Sportart nutzt den Begriff „Perfect Game“?", "Baseball", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Punkte erzielte Kobe Bryant in seinem berühmten 81-Punkte-Spiel?", "81", ["66", "71", "91"]],
    ["Welche Nation gewann die erste Frauenfußball-Weltmeisterschaft?", "USA", ["Fußball", "Basketball", "Tennis"]],
    ["Wie heißt die höchste Spielklasse im japanischen Fußball?", "J1 League", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Grand-Slam-Titel im Herrentennis?", "Novak Djokovic", ["Roger Federer", "Rafael Nadal", "Steffi Graf"]],
    ["Welche Nation gewann die meisten Titel bei der Cricket World Cup?", "Australien", ["Berlin", "Paris", "Wasser"]],
    ["Wie lang ist eine olympische Schwimmbahn?", "50 Meter", ["40 Meter", "45 Meter", "55 Meter"]],
    ["Welche Sportart machte Eddy Merckx berühmt?", "Radsport", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann den ersten Super Bowl?", "Green Bay Packers", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Nation gewann die erste Basketball-WM der Männer?", "Argentinien", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man im Darts einen Wurf von 180 Punkten?", "Maximum", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Maillot Jaune“?", "Radsport", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Formel-1-Weltmeistertitel?", "Lewis Hamilton und Michael Schumacher", ["Ayrton Senna", "Max Verstappen", "Sebastian Vettel"]],
    ["Welche Nation gewann die erste Handball-Weltmeisterschaft der Männer?", "Deutschland", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart machte Wayne Gretzky berühmt?", "Eishockey", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Löcher hat ein offizieller Golfplatz standardmäßig?", "18", ["8", "13", "23"]],
    ["Welche Nation gewann die meisten Titel in der UEFA Champions League?", "Spanien", ["Berlin", "Paris", "Wasser"]],
    ["Wer erzielte das „Hand Gottes“-Tor?", "Diego Maradona", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Sportart nutzt den Begriff „Scrum“?", "Rugby", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler stehen bei einem American-Football-Team gleichzeitig auf dem Feld?", "11", ["9", "10", "12"]],
    ["Welche Nation gewann die meisten Davis-Cup-Titel?", "USA", ["Berlin", "Paris", "Wasser"]],
    ["Wer gewann die erste Formel-1-Weltmeisterschaft?", "Giuseppe Farina", ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton"]],
    ["Welche Sportart machte Phil Taylor berühmt?", "Darts", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man im Bowling zwölf Strikes in Folge?", "Perfect Game", ["Berlin", "Paris", "Wasser"]],
    ["Welche Nation gewann die erste Rugby-World-Cup-Ausgabe der Frauen?", "USA", ["Berlin", "Paris", "Wasser"]],
    ["Wie viele Minuten dauert ein Wasserballspiel regulär?", "32", ["22", "27", "37"]],
    ["Welche Sportart nutzt den Begriff „Albatross“?", "Golf", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Tore in der Bundesliga?", "Gerd Müller", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Nation gewann die meisten olympischen Goldmedaillen im Basketball?", "USA", ["Fußball", "Basketball", "Tennis"]],
    ["Wie heißt die berühmte Tennisarena in London?", "Centre Court Wimbledon", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart machte Mika Häkkinen berühmt?", "Formel 1", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler stehen bei einem Curling-Team auf dem Eis?", "4", ["2", "3", "5"]],
    ["Welche Nation gewann die erste Copa América?", "Uruguay", ["Berlin", "Paris", "Wasser"]],
    ["Wie nennt man einen perfekten Satz im Darts?", "Nine-Darter", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Puck Line“?", "Eishockey", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die meisten olympischen Goldmedaillen im Turnen?", "Larisa Latynina", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Nation gewann die meisten Stanley Cups?", "Kanada (Montreal Canadiens)", ["Berlin", "Paris", "Wasser"]],
    ["Wie viele Punkte erzielt ein Touchdown mit Two-Point-Conversion?", "8", ["6", "7", "9"]],
    ["Welche Sportart machte Niki Lauda berühmt?", "Formel 1", ["Fußball", "Basketball", "Tennis"]],
    ["Wie heißt die höchste Basketballliga Europas?", "EuroLeague", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Nation gewann die erste Fußball-WM der Frauen?", "USA", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Tore in einer Kalenderjahresaison im Fußball?", "Lionel Messi", ["Cristiano Ronaldo", "Pelé", "Diego Maradona"]],
    ["Welche Sportart nutzt den Begriff „Checkmate“?", "Schach", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Basen gibt es im Baseball?", "4", ["2", "3", "5"]],
    ["Welche Nation gewann die meisten olympischen Goldmedaillen im Hockey?", "Indien", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart machte Kelly Slater berühmt?", "Surfen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie lang ist ein olympisches Schwimmbecken?", "50 Meter", ["40 Meter", "45 Meter", "55 Meter"]],
    ["Wer gewann die meisten Titel bei den Australian Open der Herren?", "Novak Djokovic", ["Roger Federer", "Rafael Nadal", "Steffi Graf"]],
    ["Welche Nation gewann die erste Champions-League-Saison?", "Real Madrid aus Spanien", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Fastbreak“?", "Basketball", ["Fußball", "Tennis", "Eishockey"]],
    ["Wie viele Schläger darf ein Golfer maximal mitführen?", "14", ["12", "13", "15"]],
    ["Welche Sportart machte Valentino Rossi berühmt?", "MotoGP", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Assists in der NBA?", "John Stockton", ["Michael Jordan", "LeBron James", "Kobe Bryant"]],
    ["Welche Nation gewann die erste Volleyball-WM der Männer?", "Sowjetunion", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Century Break“?", "Snooker", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die meisten Goldmedaillen bei einer einzelnen Olympiade?", "Michael Phelps", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Nation gewann die erste UEFA Nations League?", "Portugal", ["Berlin", "Paris", "Wasser"]],
    ["Wie viele Spieler stehen bei einem Lacrosse-Team auf dem Feld?", "10", ["8", "9", "11"]],
    ["Welche Sportart machte Babe Ruth berühmt?", "Baseball", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Pole Positions in der Formel 1?", "Lewis Hamilton", ["Michael Schumacher", "Ayrton Senna", "Max Verstappen"]],
    ["Welche Nation gewann die meisten Titel bei der Handball-EM der Männer?", "Schweden", ["Berlin", "Paris", "Wasser"]],
    ["Wie nennt man im Tennis einen Satzgewinn ohne Punktverlust des Gegners?", "Golden Set", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Faceoff“?", "Eishockey", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Minuten dauert ein Rugbyspiel regulär?", "80", ["65", "70", "90"]],
    ["Welche Nation gewann die erste Eishockey-WM?", "Kanada", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart machte Ayrton Senna berühmt?", "Formel 1", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Homeruns in der MLB?", "Barry Bonds", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Nation gewann die meisten olympischen Medaillen insgesamt?", "USA", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Green Jacket“?", "Golf", ["Fußball", "Basketball", "Tennis"]],
    ["Wie heißt das wichtigste Tennisturnier auf Rasen?", "Wimbledon", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart machte Haile Gebrselassie berühmt?", "Langstreckenlauf", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Drittel hat ein Eishockeyspiel?", "3", ["1", "2", "4"]],
    ["Welche Nation gewann die erste Basketball-Olympiagoldmedaille?", "USA", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man einen direkten Freistoßtreffer im Fußball?", "Freistoßtor", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Safety Car“?", "Formel 1", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die meisten Ballon-d’Or-Auszeichnungen?", "Lionel Messi", ["Cristiano Ronaldo", "Pelé", "Diego Maradona"]],
    ["Welche Nation gewann die erste Frauen-Handball-WM?", "Südkorea", ["Berlin", "Paris", "Wasser"]],
    ["Wie viele Spieler hat ein Cricket-Team?", "11", ["9", "10", "12"]],
    ["Welche Sportart machte Shaun White berühmt?", "Snowboarden", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Siege in der Tour de France offiziell?", "Vier Fahrer mit je 5 Siegen offiziell anerkannt", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Nation gewann die meisten Titel in der Copa América?", "Argentinien und Uruguay", ["Berlin", "Paris", "Wasser"]],
    ["Wie nennt man im Baseball einen Schlag aus dem Stadion?", "Homerun", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Butterfly“?", "Schwimmen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Minuten dauert ein Basketballspiel nach NBA-Regeln?", "48", ["38", "43", "53"]],
    ["Welche Nation gewann die erste Frauen-Basketball-WM?", "USA", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart machte Steffi Graf berühmt?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wer hält den Rekord für die meisten Tore in der Champions League?", "Cristiano Ronaldo", ["Lionel Messi", "Pelé", "Diego Maradona"]],
    ["Welche Nation gewann die meisten Titel im Davis Cup?", "USA", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Knockout Stage“?", "Fußball", ["Basketball", "Tennis", "Eishockey"]],
    ["Wie viele Punkte bringt ein Try im Rugby heute?", "5", ["3", "4", "6"]],
    ["Welche Sportart machte Conor McGregor berühmt?", "MMA", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die meisten Weltmeistertitel im Schach offiziell?", "Garry Kasparov / Magnus Carlsen je nach Definition", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Nation gewann die erste Formel-1-Konstrukteurswertung?", "Vanwall", ["Berlin", "Paris", "Wasser"]],
    ["Wie nennt man im Golf ein Ergebnis von zwei unter Par?", "Eagle", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Powerplay“?", "Eishockey und Cricket", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Nation gewann die meisten olympischen Goldmedaillen im Rudern?", "Großbritannien", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Tore in einer WM-Endrunde?", "Just Fontaine", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Sportart machte Serena Williams berühmt?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wie viele Spieler stehen bei einem Polo-Team auf dem Feld?", "4", ["2", "3", "5"]],
    ["Welche Nation gewann die erste Volleyball-WM der Frauen?", "Sowjetunion", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Red Zone“?", "American Football", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die meisten Titel bei den French Open?", "Rafael Nadal", ["Roger Federer", "Novak Djokovic", "Steffi Graf"]],
    ["Welche Nation gewann die meisten olympischen Goldmedaillen im Biathlon?", "Norwegen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man einen perfekten Durchgang im Turnen?", "Perfect Score 10", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Breakaway“?", "Eishockey", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Nation gewann die erste Champions-League-Ausgabe der Frauen?", "Frankfurt", ["Berlin", "Paris", "Wasser"]],
    ["Wer hält den Rekord für die meisten Triple-Doubles in der NBA?", "Russell Westbrook", ["Michael Jordan", "LeBron James", "Kobe Bryant"]],
    ["Welche Sportart machte Carl Lewis berühmt?", "Leichtathletik", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Minuten dauert ein Handballspiel regulär?", "60", ["50", "55", "65"]],
    ["Welche Nation gewann die meisten Weltmeistertitel im Volleyball der Männer?", "Sowjetunion", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Bullseye“?", "Darts", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die meisten Grand-Slam-Titel im Damentennis?", "Margaret Court", ["Roger Federer", "Rafael Nadal", "Novak Djokovic"]],
    ["Welche Nation gewann die erste UEFA Europa League?", "Atlético Madrid gewann die erste unter diesem Namen", ["Berlin", "Paris", "Wasser"]],
    ["Wie nennt man einen perfekten Sprung ins Wasser ohne Spritzer?", "Rip Entry/Clean Entry", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Hat Trick“?", "Mehrere, besonders Fußball und Eishockey", ["Basketball", "Tennis", "Handball"]],
    ["Welche Nation gewann die meisten olympischen Goldmedaillen im Fechten?", "Italien", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Punkte in der NBA-Karriere?", "LeBron James", ["Michael Jordan", "Kobe Bryant", "Shaquille O'Neal"]],
    ["Welche Sportart machte Manny Pacquiao berühmt?", "Boxen", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Punkte bringt ein Strike im Bowling ohne Bonus?", "10", ["8", "9", "11"]],
    ["Welche Nation gewann die erste Rugby-Sevens-Olympiagoldmedaille?", "Fidschi", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Dead Ball“?", "Fußball/Baseball", ["Basketball", "Tennis", "Eishockey"]],
    ["Wer gewann die meisten Formel-1-Rennen?", "Lewis Hamilton", ["Michael Schumacher", "Ayrton Senna", "Max Verstappen"]],
    ["Welche Nation gewann die meisten Titel im Männerhockey olympisch?", "Indien", ["Fußball", "Basketball", "Tennis"]],
    ["Wie nennt man im Tennis einen Rückhandball ohne Spin?", "Slice", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Overtime“?", "Basketball, Football, Hockey", ["Fußball", "Tennis", "Eishockey"]],
    ["Welche Nation gewann die erste Copa-Libertadores-Ausgabe?", "Uruguay (Peñarol)", ["Berlin", "Paris", "Wasser"]],
    ["Wer hält den Rekord für die meisten Tore in einer Bundesliga-Saison?", "Gerd Müller", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Sportart machte Jon Jones berühmt?", "MMA", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Sekunden hat die Shot Clock im FIBA-Basketball?", "24", ["14", "19", "29"]],
    ["Welche Nation gewann die meisten olympischen Goldmedaillen im Turnen?", "Sowjetunion", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Pinfall“?", "Wrestling", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die meisten Wimbledon-Titel im Herreneinzel?", "Roger Federer", ["Rafael Nadal", "Novak Djokovic", "Steffi Graf"]],
    ["Welche Nation gewann die erste Nations-League-Ausgabe im Volleyball?", "Russland", ["Berlin", "Paris", "Wasser"]],
    ["Wie nennt man im Golf einen Schlag ins Wasserhindernis?", "Water Hazard Ball", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Blue Line“?", "Eishockey", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Nation gewann die meisten Weltmeistertitel im Frauenfußball?", "USA", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Assists im Fußball international?", "Lionel Messi", ["Cristiano Ronaldo", "Pelé", "Diego Maradona"]],
    ["Welche Sportart machte Sebastian Loeb berühmt?", "Rallye", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Spieler stehen bei einem Baseballspiel insgesamt auf dem Feld?", "18", ["8", "13", "23"]],
    ["Welche Nation gewann die erste olympische Goldmedaille im Basketball der Frauen?", "Sowjetunion", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Tiebreak“?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wer gewann die meisten Titel bei der Snooker-WM?", "Ronnie O'Sullivan und Stephen Hendry", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Nation gewann die meisten Titel in der AFC Asian Cup?", "Japan", ["Berlin", "Paris", "Wasser"]],
    ["Wie nennt man im Fußball einen Treffer direkt nach Eckball?", "Olimpico", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Match Point“?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Welche Nation gewann die meisten olympischen Goldmedaillen im Schwimmen?", "USA", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Tore in der Premier League?", "Alan Shearer", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Sportart machte Ronda Rousey berühmt?", "MMA/Judo", ["Fußball", "Basketball", "Tennis"]],
    ["Wie viele Minuten dauert ein Rugby-League-Spiel?", "80", ["65", "70", "90"]],
    ["Welche Nation gewann die erste FIFA Klub-Weltmeisterschaft?", "Corinthians", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Double Fault“?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wer gewann die meisten olympischen Goldmedaillen im Sprint?", "Usain Bolt", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Nation gewann die meisten Titel in der CAF Champions League?", "Ägypten (Al Ahly)", ["Berlin", "Paris", "Wasser"]],
    ["Wie nennt man im Basketball einen Dunk mit einer Hand?", "One-Handed Dunk", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Yellow Jersey“?", "Radsport", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Nation gewann die erste Formel-E-Meisterschaft?", "Brasilien (Nelsinho Piquet als Fahrer)", ["Berlin", "Paris", "Wasser"]],
    ["Wer hält den Rekord für die meisten Shutouts in der NHL?", "Martin Brodeur", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Sportart machte Björn Borg berühmt?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wie viele Minuten dauert ein Wasserballviertel?", "8", ["6", "7", "9"]],
    ["Welche Nation gewann die meisten Titel im CONCACAF Gold Cup?", "Mexiko", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „False Start“?", "Leichtathletik", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die meisten MotoGP-Weltmeistertitel in der Königsklasse?", "Giacomo Agostini", ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton"]],
    ["Welche Nation gewann die erste Frauen-Champions-League-Ausgabe?", "Deutschland (Frankfurt)", ["Berlin", "Paris", "Wasser"]],
    ["Wie nennt man im Baseball einen Wurf ohne Hit und Run?", "No-Hitter", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Advantage“?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Welche Nation gewann die meisten olympischen Goldmedaillen im Ringen?", "Russland/Sowjetunion", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Punkte in einem NHL-Spiel?", "Darryl Sittler", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Sportart machte Toni Kroos berühmt?", "Fußball", ["Basketball", "Tennis", "Eishockey"]],
    ["Wie viele Minuten dauert ein Futsalspiel regulär?", "40", ["30", "35", "45"]],
    ["Welche Nation gewann die erste Basketball-EuroLeague?", "ASK Riga", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Technical Knockout“?", "Boxen", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die meisten olympischen Goldmedaillen im Skilanglauf?", "Marit Bjørgen", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Nation gewann die meisten Titel in der OFC Champions League?", "Neuseeland (Auckland City)", ["Berlin", "Paris", "Wasser"]],
    ["Wie nennt man im Fußball einen Treffer mit der Hacke?", "Hackentor", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Draft“?", "American Football/Basketball/Baseball", ["Fußball", "Tennis", "Eishockey"]],
    ["Welche Nation gewann die erste Frauen-Volleyball-WM?", "Sowjetunion", ["Berlin", "Paris", "Wasser"]],
    ["Wer hält den Rekord für die meisten Siege bei den Olympischen Spielen insgesamt?", "Michael Phelps", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Sportart machte Didier Drogba berühmt?", "Fußball", ["Basketball", "Tennis", "Eishockey"]],
    ["Wie viele Punkte erzielt ein Three-Point-Play im Basketball maximal in einem Angriff klassisch?", "3", ["1", "2", "4"]],
    ["Welche Nation gewann die erste moderne Olympiade 1896 im Medaillenspiegel?", "USA", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Power Forward“?", "Basketball", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wer gewann die meisten Weltmeistertitel im Formel-1-Teamranking?", "Ferrari", ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton"]],
    ["Welche Nation gewann die meisten Titel in der UEFA Europa League?", "Spanien", ["Berlin", "Paris", "Wasser"]],
    ["Wie nennt man im Tennis einen unerreichbaren Stoppball?", "Winner Drop Shot", ["Fußball", "Basketball", "Tennis"]]
];

const sportGeniusExtraQuestionPairs = [
    ["Wer war der einzige Torwart, der den Ballon d’Or gewann?", "Lew Jaschin", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["In welchem Jahr fand die erste moderne Olympiade statt?", "1896", ["1796", "1886", "1906"]],
    ["Welcher Formel-1-Fahrer gewann 2009 überraschend den WM-Titel mit Brawn GP?", "Jenson Button", ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton"]],
    ["Welche Nation gewann die erste Fußball-WM 1930?", "Uruguay", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten NBA-Meisterschaften als Spieler?", "Bill Russell", ["Michael Jordan", "LeBron James", "Kobe Bryant"]],
    ["Welche Sportart nutzt den Begriff „Ippon“?", "Judo", ["Fußball", "Basketball", "Tennis"]],
    ["Welcher Tennisspieler gewann 1988 den Golden Slam?", "Steffi Graf", ["Roger Federer", "Rafael Nadal", "Novak Djokovic"]],
    ["Wie heißt das älteste noch ausgetragene Tennisturnier der Welt?", "Wimbledon", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Nation gewann die Rugby-WM 1995 im eigenen Land?", "Südafrika", ["Berlin", "Paris", "Wasser"]],
    ["Wer erzielte das Wembley-Tor 1966?", "Geoff Hurst", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Stadt war Gastgeber der Olympischen Sommerspiele 1964?", "Tokio", ["Fußball", "Basketball", "Tennis"]],
    ["Welcher Boxer wurde „The Greatest“ genannt?", "Muhammad Ali", ["Mike Tyson", "Manny Pacquiao", "Conor McGregor"]],
    ["In welcher Sportart gibt es den Begriff „En passant“?", "Schach", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die Formel-1-WM 1998 und 1999?", "Mika Häkkinen", ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton"]],
    ["Welche Nation gewann die meisten Fußball-WM-Titel?", "Brasilien", ["Fußball", "Basketball", "Tennis"]],
    ["Wer ist Rekordtorschütze der deutschen Nationalmannschaft?", "Miroslav Klose", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Sportart nutzt den Begriff „Bogey“?", "Golf", ["Fußball", "Basketball", "Tennis"]],
    ["Welcher Verein gewann die erste Champions League 1992/93?", "Olympique Marseille", ["Berlin", "Paris", "Wasser"]],
    ["Wie heißt der Rekordmeister der NBA?", "Boston Celtics und Los Angeles Lakers", ["Berlin", "Paris", "Wasser"]],
    ["Welche Nation gewann die Handball-WM 2019?", "Dänemark", ["Berlin", "Paris", "Wasser"]],
    ["Wer hält den Rekord für die meisten Tore in einer Bundesliga-Saison?", "Robert Lewandowski", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Sportart nutzt den Begriff „Slam Dunk“?", "Basketball", ["Fußball", "Tennis", "Eishockey"]],
    ["Welche Nation gewann die erste Rugby-WM 1987?", "Neuseeland", ["Berlin", "Paris", "Wasser"]],
    ["Wer gewann die Tour de France siebenmal, wurde aber später disqualifiziert?", "Lance Armstrong", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Sportart nutzt den Begriff „Hat Trick“ besonders häufig?", "Fußball/Eishockey", ["Basketball", "Tennis", "Handball"]],
    ["Wer gewann die meisten French-Open-Titel im Herreneinzel?", "Rafael Nadal", ["Roger Federer", "Novak Djokovic", "Steffi Graf"]],
    ["Welche Nation gewann die Fußball-WM 1998?", "Frankreich", ["Fußball", "Basketball", "Tennis"]],
    ["Wie heißt die höchste Spielklasse im deutschen Eishockey?", "DEL", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart machte Jan-Ove Waldner berühmt?", "Tischtennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wer gewann die Formel-1-WM 2016?", "Nico Rosberg", ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton"]],
    ["Welche Nation gewann die erste Basketball-WM der Männer?", "Argentinien", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Kata“?", "Karate/Judo", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Weltrekord über 100 Meter der Männer?", "Usain Bolt", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie viele Grand-Slam-Turniere gibt es im Tennis pro Jahr?", "4", ["2", "3", "5"]],
    ["Welche Nation gewann die Fußball-EM 1992 überraschend?", "Dänemark", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann 2004 die Fußball-EM sensationell?", "Griechenland", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Sportart nutzt den Begriff „Triple Axel“?", "Eiskunstlauf", ["Fußball", "Basketball", "Tennis"]],
    ["Welcher Fußballverein gewann 1999 das Champions-League-Finale durch zwei späte Tore?", "Manchester United", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Formel-1-Siege?", "Lewis Hamilton", ["Michael Schumacher", "Ayrton Senna", "Max Verstappen"]],
    ["Welche Nation gewann die meisten Copa-América-Titel?", "Argentinien und Uruguay", ["Berlin", "Paris", "Wasser"]],
    ["In welcher Sportart gibt es den Begriff „No-Hitter“?", "Baseball", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die meisten olympischen Goldmedaillen insgesamt?", "Michael Phelps", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Nation gewann die Fußball-WM 2006?", "Italien", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Scrum“?", "Rugby", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann Wimbledon 2001 als Wildcard-Spieler?", "Goran Ivanišević", ["Roger Federer", "Rafael Nadal", "Novak Djokovic"]],
    ["Welche Nation gewann Olympia-Gold im Fußball 2016 der Männer?", "Brasilien", ["Fußball", "Basketball", "Tennis"]],
    ["Wer ist Rekordspieler der deutschen Fußballnationalmannschaft?", "Lothar Matthäus", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Sportart nutzt den Begriff „Strikeout“?", "Baseball", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die erste Formel-1-Weltmeisterschaft 1950?", "Giuseppe Farina", ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton"]],
    ["Welche Nation gewann die meisten olympischen Goldmedaillen im Basketball?", "USA", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Tiebreak“?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wer gewann die Champions League 2012 mit Chelsea als Trainer?", "Roberto Di Matteo", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Nation gewann die Rugby-WM 2023?", "Südafrika", ["Berlin", "Paris", "Wasser"]],
    ["Wer hält den NBA-Rekord für die meisten Punkte in einem Spiel?", "Wilt Chamberlain", ["Michael Jordan", "LeBron James", "Kobe Bryant"]],
    ["Welche Sportart nutzt den Begriff „Powerplay“?", "Eishockey", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die Fußball-WM 2010?", "Spanien", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Nation gewann die erste Frauenfußball-WM 1991?", "USA", ["Fußball", "Basketball", "Tennis"]],
    ["Wie heißt der berühmte Cricket-Wettbewerb zwischen England und Australien?", "The Ashes", ["Berlin", "Paris", "Wasser"]],
    ["Wer gewann die meisten Ballon-d’Or-Auszeichnungen?", "Lionel Messi", ["Cristiano Ronaldo", "Pelé", "Diego Maradona"]],
    ["Welche Sportart nutzt den Begriff „Century Break“?", "Snooker", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die Formel-1-WM 2007?", "Kimi Räikkönen", ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton"]],
    ["Welche Nation gewann die Fußball-WM 1978?", "Argentinien", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Green Jacket“?", "Golf", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die meisten MotoGP-WM-Titel in der Königsklasse?", "Giacomo Agostini", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Nation gewann die erste Copa América?", "Uruguay", ["Berlin", "Paris", "Wasser"]],
    ["Wer erzielte das „Tor des Jahrhunderts“ 1986?", "Diego Maradona", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Sportart nutzt den Begriff „Checkmate“?", "Schach", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten NHL-Punkte?", "Wayne Gretzky", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Nation gewann die Fußball-WM 1966?", "England", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Spare“?", "Bowling", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die Champions League 2005 nach 0:3-Rückstand zur Halbzeit?", "FC Liverpool", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Nation gewann die Volleyball-WM der Männer 2022?", "Italien", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Fosbury-Flop“?", "Hochsprung", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die meisten Wimbledon-Titel im Herreneinzel?", "Roger Federer", ["Rafael Nadal", "Novak Djokovic", "Steffi Graf"]],
    ["Welche Nation gewann die Fußball-WM 1954?", "Deutschland", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Assists in der NBA?", "John Stockton", ["Michael Jordan", "LeBron James", "Kobe Bryant"]],
    ["Welche Sportart nutzt den Begriff „Bullseye“?", "Darts", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die Formel-1-WM 1994?", "Michael Schumacher", ["Ayrton Senna", "Lewis Hamilton", "Max Verstappen"]],
    ["Welche Nation gewann die Fußball-WM 2002?", "Brasilien", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Break Point“?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wer ist Rekordtorschütze der Champions League?", "Cristiano Ronaldo", ["Lionel Messi", "Pelé", "Diego Maradona"]],
    ["Welche Nation gewann die erste Handball-WM der Männer?", "Deutschland", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Duck“?", "Cricket", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann Olympia-Gold im 100-m-Finale 2008?", "Usain Bolt", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Nation gewann die Fußball-WM 1982?", "Italien", ["Fußball", "Basketball", "Tennis"]],
    ["Welcher Verein gewann die meisten Champions-League-Titel?", "Real Madrid", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sportart nutzt den Begriff „Offside“?", "Fußball/Rugby", ["Basketball", "Tennis", "Eishockey"]],
    ["Wer gewann die Tour de France 1997 als erster Deutscher?", "Jan Ullrich", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Nation gewann die Basketball-WM 2023?", "Deutschland", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Ruck“?", "Rugby", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die Formel-1-WM 2021?", "Max Verstappen", ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton"]],
    ["Welche Nation gewann die Fußball-WM 2022?", "Argentinien", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Sportart nutzt den Begriff „Vault“?", "Turnen", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann den Super Bowl LVII?", "Kansas City Chiefs", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Nation gewann die Fußball-EM 2016?", "Portugal", ["Fußball", "Basketball", "Tennis"]],
    ["Wer hält den Rekord für die meisten Tore in einer WM-Endrunde?", "Just Fontaine", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Sportart nutzt den Begriff „Albatross“?", "Golf", ["Fußball", "Basketball", "Tennis"]],
    ["Wer gewann die meisten Snooker-WM-Titel in der modernen Ära?", "Stephen Hendry und Ronnie O’Sullivan", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Nation gewann die erste Eishockey-WM?", "Kanada", ["Berlin", "Paris", "Wasser"]],
    ["Wer gewann die Formel-1-WM 2005 und 2006?", "Fernando Alonso", ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton"]]
];

const sportGeniusQuestionPairs = [
    ...sportHardQuestionPairs,
    ...sportGeniusExtraQuestionPairs
];

const generalEasyQuestionPairs = [
    ["Was ist die Hauptstadt von Deutschland?", "Berlin", ["Paris", "Rom", "Madrid"]],
    ["Wie viele Kontinente gibt es?", "7", ["5", "6", "8"]],
    ["Welcher Planet ist der Sonne am nächsten?", "Merkur", ["Venus", "Erde", "Mars"]],
    ["Wie heißt das größte Meer der Erde?", "Pazifik", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche Farbe hat ein Smaragd?", "Grün", ["Rot", "Blau", "Gelb"]],
    ["Wie viele Tage hat ein Schaltjahr?", "366", ["266", "356", "376"]],
    ["Wer malte die Mona Lisa?", "Leonardo da Vinci", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Vincent van Gogh"]],
    ["Wie heißt die Hauptstadt von Frankreich?", "Paris", ["Rom", "Madrid", "Wien"]],
    ["Welches Tier wird „König der Tiere“ genannt?", "Löwe", ["Elefant", "Giraffe", "Känguru"]],
    ["Wie viele Minuten hat eine Stunde?", "60", ["50", "55", "65"]],
    ["Was ist die größte Wüste der Welt?", "Sahara", ["Gobi", "Mojave-Wüste", "Nil"]],
    ["Wie heißt der höchste Berg der Erde?", "Mount Everest", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welches Gas brauchen Menschen zum Atmen?", "Sauerstoff", ["Berlin", "Paris", "Wasser"]],
    ["Wie viele Bundesländer hat Deutschland?", "16", ["6", "11", "21"]],
    ["Welche Sprache spricht man in Spanien?", "Spanisch", ["Deutsch", "Französisch", "Arabisch"]],
    ["Wie heißt der größte Ozean?", "Pazifischer Ozean", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welches Tier legt Eier?", "Huhn", ["Löwe", "Elefant", "Giraffe"]],
    ["Wie viele Sekunden hat eine Minute?", "60", ["50", "55", "65"]],
    ["Welche Farbe entsteht aus Blau und Gelb?", "Grün", ["Rot", "Blau", "Gelb"]],
    ["Wie heißt der Erfinder der Glühbirne?", "Thomas Edison", ["Berlin", "Paris", "Wasser"]],
    ["In welchem Land stehen die Pyramiden?", "Ägypten", ["Berlin", "Paris", "Wasser"]],
    ["Wie viele Beine hat eine Spinne?", "8", ["6", "7", "9"]],
    ["Wie heißt die Hauptstadt von Italien?", "Rom", ["Paris", "Madrid", "Wien"]],
    ["Was ist H2O?", "Wasser", ["Berlin", "Paris", "Sauerstoff"]],
    ["Welches Organ pumpt Blut durch den Körper?", "Das Herz", ["Gehirn", "Leber", "Niere"]],
    ["Wie viele Stunden hat ein Tag?", "24", ["14", "19", "29"]],
    ["Wie heißt der längste Fluss der Welt?", "Nil", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welches Tier gibt Milch?", "Kuh", ["Löwe", "Elefant", "Giraffe"]],
    ["Welche Farbe hat die Sonne auf Zeichnungen meistens?", "Gelb", ["Rot", "Blau", "Grün"]],
    ["Wie nennt man gefrorenes Wasser?", "Eis", ["Berlin", "Paris", "Wasser"]],
    ["Welcher Kontinent ist Deutschland?", "Europa", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Wie heißt die Hauptstadt von England?", "London", ["Paris", "Rom", "Madrid"]],
    ["Welche Jahreszeit kommt nach dem Sommer?", "Herbst", ["Berlin", "Paris", "Wasser"]],
    ["Wie viele Monate hat ein Jahr?", "12", ["10", "11", "13"]],
    ["Welche Frucht ist gelb und krumm?", "Banane", ["Berlin", "Paris", "Wasser"]],
    ["Wie heißt der rote Planet?", "Mars", ["Merkur", "Venus", "Erde"]],
    ["Welches Tier bellt?", "Hund", ["Löwe", "Elefant", "Giraffe"]],
    ["Wie viele Spieler hat eine Fußballmannschaft auf dem Feld?", "11", ["9", "10", "12"]],
    ["Was braucht Feuer zum Brennen?", "Sauerstoff", ["Fußball", "Basketball", "Tennis"]],
    ["Welche Farbe hat Kohle meistens?", "Schwarz", ["Rot", "Blau", "Grün"]],
    ["Wer schrieb „Harry Potter“?", "J.K. Rowling", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie heißt die Hauptstadt von Österreich?", "Wien", ["Paris", "Rom", "Madrid"]],
    ["Welche Tiere leben im Wasser?", "Fische", ["Löwe", "Elefant", "Giraffe"]],
    ["Wie viele Zentimeter hat ein Meter?", "100", ["85", "90", "110"]],
    ["Welche Farbe hat Schnee?", "Weiß", ["Rot", "Blau", "Grün"]],
    ["Wie heißt unser Stern?", "Sonne", ["Berlin", "Paris", "Wasser"]],
    ["Welches Tier miaut?", "Katze", ["Löwe", "Elefant", "Giraffe"]],
    ["Wie viele Tage hat die Woche?", "7", ["5", "6", "8"]],
    ["Welche Form hat ein Fußball?", "Rund", ["Fußball", "Basketball", "Tennis"]],
    ["Wie heißt das größte Land der Welt?", "Russland", ["Berlin", "Paris", "Wasser"]],
    ["Welche Farbe haben Smaragde?", "Grün", ["Rot", "Blau", "Gelb"]],
    ["Welcher Vogel kann nicht fliegen?", "Pinguin", ["Löwe", "Elefant", "Giraffe"]],
    ["Wie heißt die Hauptstadt der USA?", "Washington D.C.", ["Paris", "Rom", "Madrid"]],
    ["Welche Jahreszeit kommt nach dem Winter?", "Frühling", ["Berlin", "Paris", "Wasser"]],
    ["Wie viele Finger hat ein Mensch normalerweise?", "10", ["8", "9", "11"]],
    ["Was misst man mit einem Thermometer?", "Temperatur", ["Volt", "Watt", "Ampere"]],
    ["Welche Farbe hat Gras?", "Grün", ["Rot", "Blau", "Gelb"]],
    ["Wie heißt das schnellste Landtier?", "Gepard", ["Löwe", "Elefant", "Giraffe"]],
    ["Welche Sprache spricht man in Deutschland?", "Deutsch", ["Spanisch", "Französisch", "Arabisch"]],
    ["Wie nennt man ein Baby-Schaf?", "Lamm", ["Berlin", "Paris", "Wasser"]],
    ["Wie viele Seiten hat ein Würfel?", "6", ["4", "5", "7"]],
    ["Was trinken Pflanzen hauptsächlich?", "Wasser", ["Berlin", "Paris", "Sauerstoff"]],
    ["Welche Farbe hat der Himmel bei gutem Wetter?", "Blau", ["Rot", "Grün", "Gelb"]],
    ["Wie heißt die Hauptstadt von Japan?", "Tokio", ["Paris", "Rom", "Madrid"]],
    ["Welches Tier ist für seinen langen Hals bekannt?", "Giraffe", ["Löwe", "Elefant", "Känguru"]],
    ["Wie viele Augen hat ein Mensch normalerweise?", "2", ["1", "3", "4"]],
    ["Welche Frucht ist rot und hat kleine Kerne außen?", "Erdbeere", ["Berlin", "Paris", "Wasser"]],
    ["Wie heißt der größte Kontinent?", "Asien", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welches Tier lebt in Australien und hüpft?", "Känguru", ["Löwe", "Elefant", "Giraffe"]],
    ["Welche Farbe hat eine Zitrone?", "Gelb", ["Rot", "Blau", "Grün"]],
    ["Wie heißt die Hauptstadt von Kanada?", "Ottawa", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man einen Wissenschaftler, der Sterne erforscht?", "Astronom", ["Geologie", "Paläontologie", "Kartografie"]],
    ["Welche Farbe entsteht aus Rot und Weiß?", "Rosa", ["Rot", "Blau", "Grün"]],
    ["Welches Tier trägt sein Haus auf dem Rücken?", "Schnecke", ["Löwe", "Elefant", "Giraffe"]],
    ["Wie viele Stunden hat eine halbe Stunde?", "0,5 Stunden", ["1,5 Stunden", "2,5 Stunden", "1"]],
    ["Welches Instrument hat schwarze und weiße Tasten?", "Klavier", ["Berlin", "Paris", "Wasser"]],
    ["Wie heißt die Hauptstadt von China?", "Peking", ["Paris", "Rom", "Madrid"]],
    ["Welche Frucht wird zu Wein verarbeitet?", "Traube", ["Berlin", "Paris", "Wasser"]],
    ["Welcher Planet ist für seine Ringe bekannt?", "Saturn", ["Merkur", "Venus", "Erde"]],
    ["Wie viele Räder hat ein Fahrrad?", "2", ["1", "3", "4"]],
    ["Welches Tier ist das größte Säugetier der Welt?", "Blauwal", ["Löwe", "Elefant", "Giraffe"]],
    ["Welche Farbe hat eine Orange?", "Orange", ["Rot", "Blau", "Grün"]],
    ["Wie heißt die Hauptstadt von Australien?", "Canberra", ["Paris", "Rom", "Madrid"]],
    ["Welche Tiere geben Wolle?", "Schafe", ["Löwe", "Elefant", "Giraffe"]],
    ["Wie viele Monate haben 31 Tage?", "7", ["5", "6", "8"]],
    ["Wie heißt die Währung in Deutschland?", "Euro", ["Yen", "Schweizer Franken", "Peseta"]],
    ["Welches Tier kann besonders gut klettern?", "Affe", ["Löwe", "Elefant", "Känguru"]],
    ["Wie heißt das Gegenteil von heiß?", "Kalt", ["Berlin", "Paris", "Wasser"]],
    ["Welche Farbe haben Flamingos meistens?", "Rosa", ["Rot", "Blau", "Grün"]],
    ["Wie nennt man einen Arzt für Tiere?", "Tierarzt", ["Löwe", "Elefant", "Giraffe"]],
    ["Wie viele Kontinente gibt es auf der Erde?", "7", ["5", "6", "8"]],
    ["Welche Farbe hat ein Stoppschild?", "Rot", ["Blau", "Grün", "Gelb"]],
    ["Wie heißt die Hauptstadt von Griechenland?", "Athen", ["Paris", "Rom", "Madrid"]],
    ["Welches Tier lebt am Nordpol?", "Eisbär", ["Löwe", "Elefant", "Giraffe"]],
    ["Wie viele Monate hat der Februar normalerweise?", "28 Tage", ["18 Tage", "23 Tage", "33 Tage"]],
    ["Welches Obst ist innen grün und außen braun?", "Kiwi", ["Berlin", "Paris", "Wasser"]],
    ["Welche Farbe hat Schokolade meistens?", "Braun", ["Rot", "Blau", "Grün"]],
    ["Wie nennt man einen Menschen, der Bücher schreibt?", "Autor", ["Berlin", "Paris", "Wasser"]],
    ["Welches Tier ist bekannt für seinen Rüssel?", "Elefant", ["Löwe", "Giraffe", "Känguru"]],
    ["Wie heißt unser Planet?", "Erde", ["Merkur", "Venus", "Mars"]]
];

const generalMediumQuestionPairs = [
    ["Welches Element hat das chemische Symbol „Fe“?", "Eisen", ["Gold", "Silber", "Uran"]],
    ["Wer schrieb das Drama „Faust“?", "Johann Wolfgang von Goethe", ["Friedrich Nietzsche", "Leonardo da Vinci", "Vincent van Gogh"]],
    ["Wie heißt die Hauptstadt von Kanada?", "Ottawa", ["Paris", "Rom", "Madrid"]],
    ["Welcher Planet ist für seine großen Ringe bekannt?", "Saturn", ["Merkur", "Venus", "Erde"]],
    ["Wie viele Knochen hat ein erwachsener Mensch ungefähr?", "206", ["106", "196", "216"]],
    ["Welcher Ozean liegt zwischen Amerika und Europa?", "Atlantik", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["In welchem Jahr fiel die Berliner Mauer?", "1989", ["1889", "1979", "1999"]],
    ["Wie nennt man die größte Wüste Asiens?", "Gobi", ["Sahara", "Mojave-Wüste", "Nil"]],
    ["Wer malte „Die Sternennacht“?", "Vincent van Gogh", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welches Land hat die meisten Einwohner?", "Indien", ["Berlin", "Paris", "Wasser"]],
    ["Was ist die Hauptstadt von Australien?", "Canberra", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man Tiere, die nur Pflanzen essen?", "Pflanzenfresser", ["Löwe", "Elefant", "Giraffe"]],
    ["Welches Gas entsteht hauptsächlich bei der Fotosynthese?", "Sauerstoff", ["Berlin", "Paris", "Wasser"]],
    ["Wie viele Herzen hat ein Oktopus?", "3", ["1", "2", "4"]],
    ["Wie heißt der längste Fluss Europas?", "Wolga", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche Sprache wird in Brasilien gesprochen?", "Portugiesisch", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie nennt man den kleinsten Knochen im Körper?", "Steigbügel", ["Gehirn", "Herz", "Leber"]],
    ["Welcher Kontinent hat die meisten Länder?", "Afrika", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Wie heißt der höchste Berg Deutschlands?", "Zugspitze", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Wer erfand den Buchdruck?", "Johannes Gutenberg", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Einheit misst elektrische Spannung?", "Volt", ["Watt", "Ampere", "Ohm"]],
    ["Wie viele Spieler stehen bei einem Basketballteam gleichzeitig auf dem Feld?", "5", ["3", "4", "6"]],
    ["Welche Farbe entsteht aus Blau und Rot?", "Lila/Violett", ["Rot", "Blau", "Grün"]],
    ["Wie nennt man die Angst vor engen Räumen?", "Klaustrophobie", ["Akrophobie", "Agoraphobie", "Nyktophobie"]],
    ["In welchem Land steht das Kolosseum?", "Italien", ["Berlin", "Paris", "Wasser"]],
    ["Welcher Planet ist der Erde am ähnlichsten in Größe?", "Venus", ["Merkur", "Erde", "Mars"]],
    ["Wie heißt die Hauptstadt von Neuseeland?", "Wellington", ["Paris", "Rom", "Madrid"]],
    ["Welches Organ produziert Insulin?", "Bauchspeicheldrüse", ["Gehirn", "Herz", "Leber"]],
    ["Wie viele Seiten hat ein Hexagon?", "6", ["4", "5", "7"]],
    ["Wer war der erste Mensch auf dem Mond?", "Neil Armstrong", ["Lionel Messi", "Cristiano Ronaldo", "Pelé"]],
    ["Welche Währung gibt es in Japan?", "Yen", ["Euro", "Schweizer Franken", "Peseta"]],
    ["Wie nennt man die Wissenschaft vom Weltall?", "Astronomie", ["Geologie", "Paläontologie", "Kartografie"]],
    ["Welches Land grenzt an Deutschland und Spanien?", "Frankreich", ["Berlin", "Paris", "Wasser"]],
    ["Wie heißt die größte Insel im Mittelmeer?", "Sizilien", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Wie viele Liter sind ein Kubikmeter?", "1000", ["900", "990", "1010"]],
    ["Welche Blutgruppe gilt als Universalspender?", "0 negativ", ["1 negativ", "2 negativ", "1"]],
    ["Welcher Vogel ist das Symbol der USA?", "Weißkopfseeadler", ["Löwe", "Elefant", "Giraffe"]],
    ["Wie heißt das größte Organ des Menschen?", "Haut", ["Gehirn", "Herz", "Leber"]],
    ["Welche Stadt wird „Big Apple“ genannt?", "New York", ["Berlin", "Paris", "Wasser"]],
    ["Wie viele Farben hat ein Regenbogen normalerweise?", "7", ["5", "6", "8"]],
    ["Wie nennt man den Vorgang, bei dem Wasser verdampft?", "Verdunstung", ["Gehirn", "Herz", "Leber"]],
    ["Welcher Kontinent liegt komplett auf der Südhalbkugel?", "Antarktika", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Wie heißt die Hauptstadt von Argentinien?", "Buenos Aires", ["Paris", "Rom", "Madrid"]],
    ["Wer komponierte die „Mondscheinsonate“?", "Ludwig van Beethoven", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welches Metall ist flüssig bei Raumtemperatur?", "Quecksilber", ["Eisen", "Gold", "Uran"]],
    ["Wie viele Planeten gehören zum Sonnensystem?", "8", ["6", "7", "9"]],
    ["Welche Sprache spricht man hauptsächlich in Mexiko?", "Spanisch", ["Deutsch", "Französisch", "Arabisch"]],
    ["Wie nennt man die äußere Schicht der Erde?", "Erdkruste", ["Berlin", "Paris", "Wasser"]],
    ["Welches Tier gilt als schnellstes Landtier?", "Gepard", ["Löwe", "Elefant", "Giraffe"]],
    ["Welche Stadt war früher in Ost- und Westteil getrennt?", "Berlin", ["Paris", "Wasser", "Sauerstoff"]],
    ["Was ist die Hauptstadt von Südafrika?", "Pretoria", ["Paris", "Rom", "Madrid"]],
    ["Wie heißt der größte Knochen des Menschen?", "Oberschenkelknochen", ["Gehirn", "Herz", "Leber"]],
    ["Welche Einheit misst Stromstärke?", "Ampere", ["Volt", "Watt", "Ohm"]],
    ["Wie nennt man die Lehre von Karten?", "Kartografie", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welches Meer liegt zwischen Europa und Afrika?", "Mittelmeer", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche Farbe absorbiert am meisten Sonnenlicht?", "Schwarz", ["Rot", "Blau", "Grün"]],
    ["Wie heißt das größte Säugetier der Welt?", "Blauwal", ["Löwe", "Elefant", "Giraffe"]],
    ["Wer entwickelte die Relativitätstheorie?", "Albert Einstein", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie viele Zähne hat ein Erwachsener normalerweise?", "32", ["22", "27", "37"]],
    ["Wie nennt man den Mittelpunkt eines Hurrikans?", "Auge", ["Berlin", "Paris", "Wasser"]],
    ["Welche Stadt ist die Hauptstadt der Türkei?", "Ankara", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man Tiere, die nachts aktiv sind?", "Nachtaktiv/Nachttiere", ["Löwe", "Elefant", "Giraffe"]],
    ["Wie viele Kontinente gibt es?", "7", ["5", "6", "8"]],
    ["Welcher Planet ist der größte im Sonnensystem?", "Jupiter", ["Merkur", "Venus", "Erde"]],
    ["Wie heißt die Hauptstadt von Thailand?", "Bangkok", ["Paris", "Rom", "Madrid"]],
    ["Welches Instrument misst Erdbeben?", "Seismograf", ["Volt", "Watt", "Ampere"]],
    ["Welche chemische Formel hat Kochsalz?", "NaCl", ["H₂O", "CO₂", "O₃"]],
    ["Wie nennt man den höchsten Punkt einer Welle?", "Wellenberg", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sprache hat die meisten Muttersprachler weltweit?", "Chinesisch/Mandarin", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie heißt die Hauptstadt von Ägypten?", "Kairo", ["Paris", "Rom", "Madrid"]],
    ["Welches Tier kann seinen Kopf fast komplett drehen?", "Eule", ["Löwe", "Elefant", "Giraffe"]],
    ["Wie nennt man den Übergang von fest zu flüssig?", "Schmelzen", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche Stadt ist für den Eiffelturm bekannt?", "Paris", ["Rom", "Madrid", "Wien"]],
    ["Wie viele Millimeter sind ein Zentimeter?", "10", ["8", "9", "11"]],
    ["Welche Kraft zieht Dinge zur Erde?", "Gravitation", ["Berlin", "Paris", "Wasser"]],
    ["Wie heißt das größte Korallenriff der Welt?", "Great Barrier Reef", ["Berlin", "Paris", "Wasser"]],
    ["Wer schrieb „Romeo und Julia“?", "William Shakespeare", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie nennt man die Wissenschaft von den Tieren?", "Zoologie", ["Löwe", "Elefant", "Giraffe"]],
    ["Welche Wüste liegt in Afrika?", "Sahara", ["Gobi", "Mojave-Wüste", "Nil"]],
    ["Wie heißt die Hauptstadt von Südkorea?", "Seoul", ["Paris", "Rom", "Madrid"]],
    ["Welches Organ reinigt das Blut?", "Niere", ["Gehirn", "Herz", "Leber"]],
    ["Wie nennt man die kleinste Einheit eines Computers?", "Bit", ["Volt", "Watt", "Ampere"]],
    ["Welche Farbe hat Kupfersulfat oft?", "Blau", ["Rot", "Grün", "Gelb"]],
    ["Wie viele Sekunden hat eine Stunde?", "3600", ["3500", "3590", "3610"]],
    ["Welcher Planet ist am weitesten von der Sonne entfernt?", "Neptun", ["Merkur", "Venus", "Erde"]],
    ["Wie heißt der größte Regenwald der Erde?", "Amazonas-Regenwald", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche Sportart betreibt man in Wimbledon?", "Tennis", ["Fußball", "Basketball", "Eishockey"]],
    ["Wie nennt man Tiere ohne Wirbelsäule?", "Wirbellose", ["Löwe", "Elefant", "Giraffe"]],
    ["Welche Stadt liegt auf zwei Kontinenten?", "Istanbul", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Wie heißt die Hauptstadt von Norwegen?", "Oslo", ["Paris", "Rom", "Madrid"]],
    ["Welche Einheit misst Frequenz?", "Hertz", ["Volt", "Watt", "Ampere"]],
    ["Wer entdeckte Amerika 1492?", "Christoph Kolumbus", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie nennt man die Wissenschaft vom Wetter?", "Meteorologie", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welches Tier ist das größte Raubtier an Land?", "Eisbär", ["Löwe", "Elefant", "Giraffe"]],
    ["Wie heißt der längste Fluss Südamerikas?", "Amazonas", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche Farbe hat Chlorophyll?", "Grün", ["Rot", "Blau", "Gelb"]],
    ["Wie viele Herzen hat eine Qualle?", "Keins", ["Berlin", "Paris", "Wasser"]],
    ["Welche Stadt ist die Hauptstadt von China?", "Peking", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man die Umwandlung von Wasser zu Eis?", "Gefrieren", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sprache spricht man in Österreich hauptsächlich?", "Deutsch", ["Spanisch", "Französisch", "Arabisch"]]
];
const generalHardQuestionPairs = [
    ["Wie heißt der physikalische Effekt, bei dem Zeit bei hoher Geschwindigkeit langsamer vergeht?", "Zeitdilatation", ["Berlin", "Paris", "Wasser"]],
    ["Wer schrieb „Also sprach Zarathustra“?", "Friedrich Nietzsche", ["Johann Wolfgang von Goethe", "Leonardo da Vinci", "Vincent van Gogh"]],
    ["Welches Element hat die Ordnungszahl 92?", "Uran", ["Eisen", "Gold", "Silber"]],
    ["Wie heißt die Hauptstadt von Kasachstan?", "Astana", ["Paris", "Rom", "Madrid"]],
    ["Welche Einheit misst radioaktive Strahlung?", "Becquerel", ["Volt", "Watt", "Ampere"]],
    ["Wie nennt man die Verschmelzung von Atomkernen?", "Kernfusion", ["Berlin", "Paris", "Wasser"]],
    ["Welcher Planet besitzt den größten Vulkan im Sonnensystem?", "Mars", ["Merkur", "Venus", "Erde"]],
    ["Wie heißt die tiefste bekannte Meeresstelle der Erde?", "Challengertief", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Wer entwickelte die heliozentrische Weltanschauung?", "Nikolaus Kopernikus", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Sprache gehört nicht zur indogermanischen Sprachfamilie?", "Finnisch", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie viele Chromosomen hat ein Mensch normalerweise?", "46", ["36", "41", "51"]],
    ["Welche Stadt war Hauptstadt des Byzantinischen Reiches?", "Konstantinopel", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man die Angst vor offenen Plätzen?", "Agoraphobie", ["Klaustrophobie", "Akrophobie", "Nyktophobie"]],
    ["Welches chemische Element ist das leichteste?", "Wasserstoff", ["Eisen", "Gold", "Silber"]],
    ["Wer komponierte die Oper „Carmen“?", "Georges Bizet", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welcher Fluss fließt durch Bagdad?", "Tigris", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Wie nennt man die Wissenschaft von Fossilien?", "Paläontologie", ["Astronomie", "Geologie", "Kartografie"]],
    ["Welche Farbe absorbiert die meiste Wärme?", "Schwarz", ["Rot", "Blau", "Grün"]],
    ["Wie heißt das größte bekannte Sternbild?", "Wasserschlange", ["Berlin", "Paris", "Sauerstoff"]],
    ["Welche Währung hatte Spanien vor dem Euro?", "Peseta", ["Euro", "Yen", "Schweizer Franken"]],
    ["Wie nennt man den Zerfall eines Atomkerns?", "Radioaktiver Zerfall", ["Berlin", "Paris", "Wasser"]],
    ["Welche Stadt liegt auf zwei Kontinenten?", "Istanbul", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Wer malte „Die Geburt der Venus“?", "Sandro Botticelli", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie viele Herzen hat ein Tintenfisch?", "3", ["1", "2", "4"]],
    ["Welche Säure befindet sich hauptsächlich im Magensaft?", "Salzsäure", ["Berlin", "Paris", "Wasser"]],
    ["Wie nennt man den größten Mond des Saturns?", "Titan", ["Berlin", "Paris", "Wasser"]],
    ["Welche Nation gewann die Fußball-WM 2014?", "Deutschland", ["Fußball", "Basketball", "Tennis"]],
    ["Wie heißt die Hauptstadt von Neuseeland?", "Wellington", ["Paris", "Rom", "Madrid"]],
    ["Welche Einheit misst elektrische Widerstände?", "Ohm", ["Volt", "Watt", "Ampere"]],
    ["Welcher Kontinent hat die meisten Sprachen?", "Afrika", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wer schrieb „Krieg und Frieden“?", "Leo Tolstoi", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie heißt die größte Wüste der Erde?", "Antarktische Eiswüste", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche chemische Formel hat Ozon?", "O₃", ["NaCl", "NH₃", "CH₄"]],
    ["Wie nennt man die Wissenschaft der Sterne?", "Astronomie", ["Geologie", "Paläontologie", "Kartografie"]],
    ["Welche Stadt ist die Hauptstadt von Mongolei?", "Ulaanbaatar", ["Paris", "Rom", "Madrid"]],
    ["Welches Organ produziert Galle?", "Leber", ["Gehirn", "Herz", "Niere"]],
    ["Wie viele Knochen hat ein Neugeborenes ungefähr?", "300", ["200", "290", "310"]],
    ["Welche Sprache wird in Iran hauptsächlich gesprochen?", "Persisch/Farsi", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie nennt man den Übergang von fest direkt zu gasförmig?", "Sublimation", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Wer entwickelte die Gravitationstheorie?", "Isaac Newton", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welches Metall hat das chemische Symbol „Hg“?", "Quecksilber", ["Eisen", "Gold", "Uran"]],
    ["Wie heißt die Hauptstadt von Bolivien?", "Sucre", ["Paris", "Rom", "Madrid"]],
    ["Welche Einheit misst die Frequenz?", "Hertz", ["Volt", "Watt", "Ampere"]],
    ["Wie nennt man Tiere ohne Wirbelsäule?", "Wirbellose", ["Löwe", "Elefant", "Giraffe"]],
    ["Welche Stadt wurde früher „Leningrad“ genannt?", "Sankt Petersburg", ["Berlin", "Paris", "Wasser"]],
    ["Wie viele Planeten sind Gasriesen?", "4", ["2", "3", "5"]],
    ["Wer schrieb „Der Prozess“?", "Franz Kafka", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie nennt man den Fachbegriff für Erdbebenkunde?", "Seismologie", ["Berlin", "Paris", "Wasser"]],
    ["Welches Land besitzt die meisten Inseln weltweit?", "Schweden", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Wie heißt die größte Drüse des Menschen?", "Leber", ["Berlin", "Paris", "Wasser"]],
    ["Welche chemische Formel hat Schwefelsäure?", "H₂SO₄", ["H₂O", "CO₂", "NaCl"]],
    ["Welche Stadt ist die Hauptstadt von Äthiopien?", "Addis Abeba", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man die Lehre vom Verhalten von Tieren?", "Ethologie", ["Löwe", "Elefant", "Giraffe"]],
    ["Welche Farbe hat oxidiertes Kupfer meistens?", "Grün", ["Rot", "Blau", "Gelb"]],
    ["Wer komponierte die „9. Sinfonie“?", "Ludwig van Beethoven", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie heißt das größte Korallenriff der Welt?", "Great Barrier Reef", ["Berlin", "Paris", "Wasser"]],
    ["Welche Einheit misst Luftdruck?", "Pascal", ["Volt", "Watt", "Ampere"]],
    ["Welcher Planet hat die kürzeste Umlaufzeit um die Sonne?", "Merkur", ["Venus", "Erde", "Mars"]],
    ["Wie nennt man die Wissenschaft von Pilzen?", "Mykologie", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welche Stadt ist Hauptstadt von Sri Lanka?", "Sri Jayawardenepura Kotte", ["Paris", "Rom", "Madrid"]],
    ["Welches Tier besitzt den stärksten Biss der Welt?", "Salzwasserkrokodil", ["Löwe", "Elefant", "Giraffe"]],
    ["Welche Sprache wird in Brasilien gesprochen?", "Portugiesisch", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie nennt man den tiefsten Punkt der Erdoberfläche an Land?", "Totes Meer", ["Berlin", "Paris", "Wasser"]],
    ["Welche chemische Formel hat Ammoniak?", "NH₃", ["H₂O", "CO₂", "NaCl"]],
    ["Wer malte „Guernica“?", "Pablo Picasso", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Einheit misst elektrische Leistung?", "Watt", ["Volt", "Ampere", "Ohm"]],
    ["Wie heißt die Hauptstadt von Laos?", "Vientiane", ["Paris", "Rom", "Madrid"]],
    ["Wie viele Zeitzonen hat Russland?", "11", ["9", "10", "12"]],
    ["Welche Wüste liegt in der Mongolei?", "Gobi", ["Sahara", "Mojave-Wüste", "Nil"]],
    ["Wie nennt man die Wissenschaft von Insekten?", "Entomologie", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welcher Ozean ist der kleinste?", "Arktischer Ozean", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche Farbe hat Kobalt meistens?", "Blau", ["Rot", "Grün", "Gelb"]],
    ["Wie heißt die Hauptstadt von Madagaskar?", "Antananarivo", ["Paris", "Rom", "Madrid"]],
    ["Wer entwickelte die Relativitätstheorie?", "Albert Einstein", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche chemische Formel hat Methan?", "CH₄", ["H₂O", "CO₂", "NaCl"]],
    ["Wie nennt man Pflanzenfresser wissenschaftlich?", "Herbivoren", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welche Stadt ist für Machu Picchu bekannt?", "Cusco", ["Paris", "Rom", "Madrid"]],
    ["Wie viele Rippen besitzt ein Mensch normalerweise?", "24", ["14", "19", "29"]],
    ["Welche Einheit misst radioaktive Strahlendosis?", "Sievert", ["Volt", "Watt", "Ampere"]],
    ["Welcher Planet ist der heißeste im Sonnensystem?", "Venus", ["Merkur", "Erde", "Mars"]],
    ["Welche Sprache wird in Afghanistan hauptsächlich gesprochen?", "Dari/Paschtu", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie nennt man die Wissenschaft der Gifte?", "Toxikologie", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Wer schrieb „Der alte Mann und das Meer“?", "Ernest Hemingway", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche chemische Formel hat Kochsalz?", "NaCl", ["H₂O", "CO₂", "O₃"]],
    ["Wie heißt der längste Fluss Asiens?", "Jangtsekiang", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche Stadt ist Hauptstadt von Ecuador?", "Quito", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man die Angst vor Spinnen?", "Arachnophobie", ["Klaustrophobie", "Akrophobie", "Agoraphobie"]],
    ["Welches Organ produziert Insulin?", "Bauchspeicheldrüse", ["Gehirn", "Herz", "Leber"]],
    ["Welche Einheit misst magnetische Feldstärke?", "Tesla", ["Volt", "Watt", "Ampere"]],
    ["Wer komponierte „Die vier Jahreszeiten“?", "Antonio Vivaldi", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie heißt die Hauptstadt von Georgien?", "Tiflis", ["Paris", "Rom", "Madrid"]],
    ["Welche chemische Formel hat Wasserstoffperoxid?", "H₂O₂", ["CO₂", "NaCl", "NH₃"]],
    ["Wie nennt man den Prozess der Zellteilung?", "Mitose", ["Berlin", "Paris", "Wasser"]],
    ["Welcher Planet besitzt den größten bekannten Sturm?", "Jupiter", ["Merkur", "Venus", "Erde"]],
    ["Welche Sprache wird in Ägypten gesprochen?", "Arabisch", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie heißt der höchste Wasserfall Europas?", "Vinnufossen", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Wer schrieb „Ulysses“?", "James Joyce", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welche Einheit misst Schallstärke?", "Dezibel", ["Volt", "Watt", "Ampere"]],
    ["Wie nennt man die Wissenschaft von Karten?", "Kartografie", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welche Stadt war Hauptstadt des Osmanischen Reiches?", "Konstantinopel", ["Paris", "Rom", "Madrid"]],
    ["Welche chemische Formel hat Ethanol?", "C₂H₅OH", ["CO₂", "NaCl", "NH₃"]],
    ["Wie viele Herzen besitzt ein Regenwurm?", "5", ["3", "4", "6"]],
    ["Welche Stadt ist Hauptstadt von Myanmar?", "Naypyidaw", ["Paris", "Rom", "Madrid"]],
    ["Welche Farbe hat Schwefel?", "Gelb", ["Rot", "Blau", "Grün"]],
    ["Wer entdeckte Penicillin?", "Alexander Fleming", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie nennt man die Angst vor Wasser?", "Aquaphobie", ["Klaustrophobie", "Akrophobie", "Agoraphobie"]],
    ["Welcher Kontinent hat die größte Bevölkerung?", "Asien", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche Einheit misst Energie?", "Joule", ["Volt", "Watt", "Ampere"]],
    ["Wie heißt die Hauptstadt von Nepal?", "Kathmandu", ["Paris", "Rom", "Madrid"]],
    ["Welche Sprache wird in Österreich gesprochen?", "Deutsch", ["Spanisch", "Französisch", "Arabisch"]],
    ["Wie nennt man die Wissenschaft von Vögeln?", "Ornithologie", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welche chemische Formel hat Kohlensäure?", "H₂CO₃", ["H₂O", "NaCl", "NH₃"]],
    ["Wer malte die Decke der Sixtinischen Kapelle?", "Michelangelo", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Welcher Planet besitzt die meisten bekannten Monde?", "Saturn", ["Merkur", "Venus", "Erde"]],
    ["Wie heißt die Hauptstadt von Albanien?", "Tirana", ["Paris", "Rom", "Madrid"]],
    ["Welche Einheit misst Geschwindigkeit?", "Meter pro Sekunde", ["Volt", "Watt", "Ampere"]],
    ["Wie nennt man den Zerfall organischer Stoffe durch Mikroorganismen?", "Verwesung", ["Gehirn", "Herz", "Leber"]],
    ["Welche Sprache wird in Ungarn gesprochen?", "Ungarisch", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie heißt das größte Binnenland der Welt?", "Kasachstan", ["Berlin", "Paris", "Wasser"]],
    ["Welche Farbe entsteht aus Blau und Gelb?", "Grün", ["Rot", "Blau", "Gelb"]],
    ["Welche chemische Formel hat Schwefeldioxid?", "SO₂", ["H₂O", "CO₂", "NaCl"]],
    ["Wer schrieb „Faust“?", "Johann Wolfgang von Goethe", ["Friedrich Nietzsche", "Leonardo da Vinci", "Vincent van Gogh"]],
    ["Welche Stadt ist Hauptstadt von Finnland?", "Helsinki", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man Tiere, die nachts aktiv sind?", "Nachtaktiv/Nokturn", ["Löwe", "Elefant", "Giraffe"]],
    ["Welche Einheit misst Stromstärke?", "Ampere", ["Volt", "Watt", "Ohm"]],
    ["Wie heißt die größte Insel der Welt?", "Grönland", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche Sprache wird in Thailand gesprochen?", "Thai", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie nennt man die Wissenschaft von Erbgut?", "Genetik", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welcher Planet hat den größten Mond?", "Jupiter", ["Merkur", "Venus", "Erde"]],
    ["Welche Farbe haben Smaragde?", "Grün", ["Rot", "Blau", "Gelb"]],
    ["Welche chemische Formel hat Lachgas?", "N₂O", ["H₂O", "CO₂", "NaCl"]],
    ["Wer entwickelte die Evolutionstheorie?", "Charles Darwin", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie heißt die Hauptstadt von Armenien?", "Jerewan", ["Paris", "Rom", "Madrid"]],
    ["Welche Einheit misst Temperatur?", "Kelvin", ["Volt", "Watt", "Ampere"]],
    ["Wie nennt man den Fachbegriff für Sternschnuppen?", "Meteore", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sprache wird in Israel hauptsächlich gesprochen?", "Hebräisch", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie heißt das größte Säugetier der Welt?", "Blauwal", ["Löwe", "Elefant", "Giraffe"]],
    ["Welche Farbe hat Chlorophyll?", "Grün", ["Rot", "Blau", "Gelb"]],
    ["Welche Stadt ist Hauptstadt von Kroatien?", "Zagreb", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man die Wissenschaft von dem menschlichen Körper?", "Anatomie", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welche chemische Formel hat Natronlauge?", "NaOH", ["H₂O", "CO₂", "NaCl"]],
    ["Wer schrieb „Die Verwandlung“?", "Franz Kafka", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie heißt die Hauptstadt von Litauen?", "Vilnius", ["Paris", "Rom", "Madrid"]],
    ["Welche Einheit misst Druck?", "Pascal", ["Volt", "Watt", "Ampere"]],
    ["Wie nennt man den Prozess der Wasserverdunstung über Pflanzen?", "Transpiration", ["Berlin", "Paris", "Wasser"]],
    ["Welche Sprache wird in Pakistan gesprochen?", "Urdu", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie heißt das größte aktive Vulkangebiet Europas?", "Ätna", ["Berlin", "Paris", "Wasser"]],
    ["Welche Farbe hat Rubidium bei Flammenfärbung?", "Rot-Violett", ["Eisen", "Gold", "Silber"]],
    ["Welche Stadt ist Hauptstadt von Slowenien?", "Ljubljana", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man die Wissenschaft von den Meeren?", "Ozeanografie", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche chemische Formel hat Salpetersäure?", "HNO₃", ["H₂O", "CO₂", "NaCl"]],
    ["Wer komponierte „Eine kleine Nachtmusik“?", "Wolfgang Amadeus Mozart", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie heißt die Hauptstadt von Estland?", "Tallinn", ["Paris", "Rom", "Madrid"]],
    ["Welche Einheit misst elektrische Spannung?", "Volt", ["Watt", "Ampere", "Ohm"]],
    ["Wie nennt man Tiere mit gleichbleibender Körpertemperatur?", "Warmblüter", ["Löwe", "Elefant", "Giraffe"]],
    ["Welche Sprache wird in Bangladesch gesprochen?", "Bengalisch", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie heißt der größte Planet im Sonnensystem?", "Jupiter", ["Merkur", "Venus", "Erde"]],
    ["Welche Farbe hat Kupferoxid?", "Schwarz", ["Rot", "Blau", "Grün"]],
    ["Welche Stadt ist Hauptstadt von Belarus?", "Minsk", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man die Wissenschaft der Krankheiten?", "Pathologie", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welche chemische Formel hat Calciumcarbonat?", "CaCO₃", ["H₂O", "NaCl", "NH₃"]],
    ["Wer schrieb „Der Name der Rose“?", "Umberto Eco", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie heißt die Hauptstadt von Usbekistan?", "Taschkent", ["Paris", "Rom", "Madrid"]],
    ["Welche Einheit misst Frequenz?", "Hertz", ["Volt", "Watt", "Ampere"]],
    ["Wie nennt man die Wissenschaft von Zellen?", "Zytologie", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welche Sprache wird in Indonesien gesprochen?", "Indonesisch", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie heißt der größte Ozean der Erde?", "Pazifik", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche Farbe hat Brom?", "Rotbraun", ["Blau", "Grün", "Gelb"]],
    ["Welche Stadt ist Hauptstadt von Lettland?", "Riga", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man die Wissenschaft vom Klima?", "Klimatologie", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welche chemische Formel hat Kalkwasser?", "Ca(OH)₂", ["H₂O", "CO₂", "NaCl"]],
    ["Wer schrieb „Moby Dick“?", "Herman Melville", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie heißt die Hauptstadt von Aserbaidschan?", "Baku", ["Paris", "Rom", "Madrid"]],
    ["Welche Einheit misst Arbeit/Energie?", "Joule", ["Volt", "Watt", "Ampere"]],
    ["Wie nennt man die Wissenschaft von Mineralien?", "Mineralogie", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welche Sprache wird in Malaysia gesprochen?", "Malaiisch", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie heißt der höchste Berg Afrikas?", "Kilimandscharo", ["Sahara", "Gobi", "Mojave-Wüste"]],
    ["Welche Farbe hat Kalium bei Flammenfärbung?", "Violett", ["Eisen", "Gold", "Silber"]],
    ["Welche Stadt ist Hauptstadt von Moldawien?", "Chișinău", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man die Wissenschaft der Bewegungen?", "Kinematik", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welche chemische Formel hat Calciumoxid?", "CaO", ["H₂O", "CO₂", "NaCl"]],
    ["Wer entdeckte die Radioaktivität?", "Henri Becquerel", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie heißt die Hauptstadt von Nordkorea?", "Pjöngjang", ["Paris", "Rom", "Madrid"]],
    ["Welche Einheit misst elektrische Ladung?", "Coulomb", ["Volt", "Watt", "Ampere"]],
    ["Wie nennt man die Wissenschaft von Mikroorganismen?", "Mikrobiologie", ["Gehirn", "Herz", "Leber"]],
    ["Welche Sprache wird in der Mongolei gesprochen?", "Mongolisch", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie heißt die größte Halbinsel der Welt?", "Arabische Halbinsel", ["Iberische Halbinsel", "Skandinavische Halbinsel", "Balkanhalbinsel"]],
    ["Welche Farbe hat Natrium bei Flammenfärbung?", "Gelb", ["Eisen", "Gold", "Silber"]],
    ["Welche Stadt ist Hauptstadt von Luxemburg?", "Luxemburg", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man die Wissenschaft der Bewegungsabläufe im Körper?", "Biomechanik", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welche chemische Formel hat Magnesiumoxid?", "MgO", ["H₂O", "CO₂", "NaCl"]],
    ["Wer schrieb „Don Quijote“?", "Miguel de Cervantes", ["Johann Wolfgang von Goethe", "Friedrich Nietzsche", "Leonardo da Vinci"]],
    ["Wie heißt die Hauptstadt von Island?", "Reykjavík", ["Paris", "Rom", "Madrid"]],
    ["Welche Einheit misst Kapazität?", "Farad", ["Volt", "Watt", "Ampere"]],
    ["Wie nennt man die Wissenschaft vom Nervensystem?", "Neurologie", ["Astronomie", "Geologie", "Paläontologie"]],
    ["Welche Sprache wird in Vietnam gesprochen?", "Vietnamesisch", ["Deutsch", "Spanisch", "Französisch"]],
    ["Wie heißt die längste Gebirgskette der Welt?", "Anden", ["Berlin", "Paris", "Wasser"]],
    ["Welche Farbe hat Lithium bei Flammenfärbung?", "Karminrot", ["Eisen", "Gold", "Silber"]],
    ["Welche Stadt ist Hauptstadt von Montenegro?", "Podgorica", ["Paris", "Rom", "Madrid"]],
    ["Wie nennt man die Wissenschaft vom Denken?", "Philosophie", ["Astronomie", "Geologie", "Paläontologie"]]
];
const questionData = {
    "Allgemeinwissen": {
        easy: generalEasyQuestionPairs,
        medium: generalMediumQuestionPairs,
        hard: generalHardQuestionPairs,
        genius: generalHardQuestionPairs
    },
    "Sport": {
        easy: sportEasyQuestionPairs,
        medium: sportMediumQuestionPairs,
        hard: sportHardQuestionPairs,
        genius: sportGeniusQuestionPairs
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

function getCleanQuestionItemsForDifficulty(difficulty, categoryName) {
    if (categoryName === "Sport" && difficulty === "easy") {
        return sportEasyQuestionPairs;
    }

    if (categoryName === "Sport" && difficulty === "medium") {
        return sportMediumQuestionPairs;
    }

    if (categoryName === "Sport" && difficulty === "hard") {
        return sportHardQuestionPairs;
    }

    if (categoryName === "Sport" && difficulty === "genius") {
        return sportGeniusQuestionPairs;
    }

    const questionsByDifficulty = {
        easy: generalEasyQuestionPairs,
        medium: generalMediumQuestionPairs,
        hard: generalHardQuestionPairs,
        genius: generalHardQuestionPairs
    };

    return questionsByDifficulty[difficulty] || generalEasyQuestionPairs;
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
        roundQuestions = createRoundQuestions(buildQuestions(getCleanQuestionItemsForDifficulty(selectedDifficulty, selectedCategory.name)), memoryKey);
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













