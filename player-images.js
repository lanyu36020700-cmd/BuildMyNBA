// ============================================================
// player-images.js —— NBA 球员头像 ID 映射表（已优化）
// 1) 仅保留“有真实照片”的球员 ID（约 3550 条，双格式：First Last / Last, First）
// 2) 保留少量 :0 键用于“防模糊误配”（如 Glenn Robinson 不被匹配成 Glenn Robinson III）
// 3) 无照片球员不再占用条目：getPlayerHeadshotStyle 查询失败时统一回退 assets/headshots/0.png
// 重新生成：dev-tools/tmp/optimize_player_images.py（dev-tools 不入库）
// ============================================================
var NBA_PLAYER_IMAGES={

'Keshon Gilbert':1642933,
'Egor Demin':1642856,
'Chaney Johnson':1643052,
'Malachi Smith':1641869,
'Hugo Gonzalez':1642864,
'Tristan Enaruna':1642400,
'John Poulakidas':1642967,
'LJ Cryer':1643018,
'Yanic Konan Niederhauser':1642949,
'Norchad Omier':1641807,
'Sean Pedulla':1642951,
'Chris Manon':1643024,
'Jahmai Mashack':1642942,
'Kasparas Jakucionis':1642857,
'Cormac Ryan':1642504,
'Josh Oduro':1642490,
'Pacome Dadiet':1642359,
'Alex Morales':1631457,
'Vit Krejci':1630249,
'Blake Hinson':1642396,
'Bez Mbeng':1643016,
'Hayden Gray':1643060,
'Julian Reese':1642882,
'Darryn Peterson':1643408,
'Keaton Wagler':1643413,
'Mikel Brown Jr.':1643414,
'Morez Johnson':1643516,
'Jayden Quaintance':1643519,
'Cameron Carr':1643418,
'Sergio de Larrea':1643547,
'Tarris Reed Jr.':1643542,
'Joshua Jefferson':1643538,
'A.J. Lawson':1630639,
'AJ Green':1631260,
'AJ Griffin':1631100,
'AJ Hammons':1627773,
'AJ Johnson':1642358,
'Aaron Brooks':201166,
'Aaron Gordon':203932,
'Aaron Harrison':1626151,
'Aaron Henry':1630565,
'Aaron Holiday':1628988,
'Aaron Miles':101223,
'Aaron Nesmith':1630174,
'Aaron Wiggins':1630598,
'Abdel Nader':1627846,



'Ace Bailey':1642846,


'Adam Flagler':1641745,
'Adam Mokoka':1629690,
'Adama Sanogo':1641766,



'Ade Murkey':1630278,


'Adem Bona':1641737,
'Admiral Schofield':1629678,
'Adonal Foyle':1502,
'Adonis Thomas':203519,
'Adou Thiero':1642876,
'Adreian Payne':203940,
'Adrian Dantley':76504,



'Ajay Mitchell':1642349,


'Al Butler':0,
'Al Horford':201143,
'Al Jefferson':2744,
'Al-Farouq Aminu':202329,
'Alan Anderson':101187,
'Alan Williams':1626210,




'Alec Burks':202692,
'Alec Peters':1628409,
'Aleem Ford':1630758,
'Aleksej Pokusevski':1630197,
'Alen Smailagic':1629346,
'Alex Abrines':203518,
'Alex Antetokounmpo':1630828,
'Alex Caruso':1627936,
'Alex Ducas':1642505,
'Alex Fudge':1641788,
'Alex Len':203458,
'Alex Poythress':1627816,
'Alex Reese':1642024,
'Alex Sarr':1642259,
'Alex Toohey':1642893,





'Alexis Ajinca':201582,
'Alfonzo McKinnie':1628035,
'Alijah Martin':1642918,
'Alize Johnson':1628993,

'Allan Houston':275,
'Allen Crabbe':203459,
'Allen Iverson':947,






'Allonzo Trier':1629019,
'Alondes Williams':1631214,
'Alonzo Gee':202087,
'Alonzo Mourning':297,
'Alperen Sengun':1630578,


'Amar\'e Stoudemire':2405,
'Amari Bailey':1641735,
'Amari Williams':1642873,
'Amen Thompson':1641708,
'Amida Brimah':1628578,
'Amile Jefferson':1628518,

'Amir Coffey':1629599,
'Amir Johnson':101161,


'Anderson Varejao':2760,







'Andre Drummond':203083,
'Andre Iguodala':2738,
'Andre Ingram':201281,
'Andre Jackson Jr.':1641748,
'Andre Miller':1889,
'Andre Roberson':203460,
'Andrea Bargnani':200745,
'Andres Nocioni':2804,
'Andrew Bogut':101106,
'Andrew Funk':1641847,
'Andrew Goudelock':202726,
'Andrew Harrison':1626150,
'Andrew Nembhard':1629614,
'Andrew Nicholson':203094,
'Andrew White III':1628510,
'Andrew Wiggins':203952,
'Andy Rautins':202360,
'Anfernee Hardaway':358,
'Anfernee Simons':1629014,
'Angel Delgado':1629116,

'Ante Zizic':1627790,




'Anthony Bennett':203461,
'Anthony Black':1641710,
'Anthony Brown':1626148,
'Anthony Davis':203076,
'Anthony Edwards':1630162,
'Anthony Gill':1630264,
'Anthony Lamb':1630237,
'Anthony Mason':193,
'Anthony Morrow':201627,
'Anthony Parker':1515,
'Anthony Peeler':324,
'Anthony Tolliver':201229,



'Antoine Walker':952,
'Anton Watson':1641817,
'Antonio Blakeney':1628469,
'Antonio Daniels':1498,
'Antonio McDyess':686,
'Antonio Reeves':1641810,
'Antonius Cleveland':1628499,

'Anžejs Pasečņiks':1628394,


'Archie Goodwin':203462,


'Ariel Hukporti':1630574,
'Arinze Onuaku':202620,


'Armel Traore':1642422,
'Armoni Brooks':1629717,


'Arnoldas Kulboka':1629083,
'Aron Baynes':203382,
'Arron Afflalo':201167,

'Artis Gilmore':600014,

'Asa Newell':1642854,
'Ashton Hagans':1630204,


'Ausar Thompson':1641709,
'Austin Daye':201948,
'Austin Reaves':1630559,
'Austin Rivers':203085,

'Avery Bradley':202340,
'Avery Johnson':422,
'Axel Toupane':1626253,

'Ayo Dosunmu':1630245,




'BJ Johnson':1629168,










'Bam Adebayo':1628389,














'Baron Davis':1884,















'Baylor Scheierman':1631248,












'Ben Bentil':1627791,
'Ben Gordon':2732,
'Ben McLemore':203463,
'Ben Moore':1628500,
'Ben Saraf':1642879,
'Ben Sheppard':1641767,
'Ben Simmons':1627732,
'Ben Wallace':1112,

'Bennedict Mathurin':1631097,

'Beno Udrih':2757,



'Bernard King':77264,







'Bilal Coulibaly':1641731,
'Bill Russell':78049,
'Bill Sharman':78126,
'Bill Walton':78450,

'Billy Cunningham':76487,




'Bismack Biyombo':202687,
'Bison Dele':183,








'Blake Griffin':201933,
'Blake Wesley':1631104,









'Bo Outlaw':448,
'Bob Cousy':600003,
'Bob McAdoo':77498,
'Bob Pettit':77847,
'Bob Sura':682,
'Boban Marjanovic':1626246,
'Bobby Brown':201628,
'Bobby Portis':1626171,
'Bobby Simmons':2250,
'Bobi Klintman':1641752,

'Bogdan Bogdanović':203992,



'Bojan Bogdanovic':202711,
'Bol Bol':1629626,







'Bones Hyland':1630538,


'Bonzi Wells':1719,
'Bonzie Colson':1629045,


'Boris Diaw':2564,

'Bostjan Nachbar':2411,








'Brad Miller':1802,
'Brad Wanamaker':202954,
'Bradley Beal':203078,




'Brandan Wright':201148,
'Branden Carlson':1642382,
'Branden Dawson':1626183,
'Brandin Podziemski':1641764,
'Brandon Bass':101138,
'Brandon Boston':1630527,
'Brandon Clarke':1629634,
'Brandon Goodwin':1629164,
'Brandon Ingram':1627742,
'Brandon Jennings':201943,
'Brandon Knight':202688,
'Brandon Miller':1641706,
'Brandon Paul':203464,
'Brandon Rush':201575,
'Brandon Sampson':1629102,
'Brandon Williams':1630314,




'Braxton Key':1630296,


'Brent Barry':699,
'Brevin Knight':1510,

'Brian Bowen II':1628968,
'Brian Grant':258,
'Brian Roberts':203148,
'Briante Weber':1627362,
'Brice Johnson':1627744,
'Brice Sensabaugh':1641729,







'Brodric Thomas':1630271,


'Bronny James':1642355,
'Brook Lopez':201572,
'Brooks Barnhizer':1642964,



















'Bruce Bowen':1477,
'Bruce Brown':1628971,
'Bruno Caboclo':203998,
'Bruno Fernando':1628981,





'Bryce Dejean-Jones':1626214,
'Bryce McGowens':1631121,
'Bryn Forbes':1627854,
'Bub Carrington':1642267,

'Buddy Boeheim':1631205,
'Buddy Hield':1627741,












'C.J. Watson':201228,
'C.J. Wilcox':203912,
'C.J. Williams':203710,
'CJ Elleby':1629604,
'CJ Huntley':1643047,
'CJ McCollum':203468,
'CJ Miles':101139,


'Cade Cunningham':1630595,



'Caleb Homesley':1630258,
'Caleb Houstan':1631216,
'Caleb Love':1631126,
'Caleb Martin':1628997,
'Caleb Swanigan':1628403,
'Cam Christie':1642353,
'Cam Reddish':1629629,
'Cam Reynolds':1629244,
'Cam Spencer':1642285,
'Cam Thomas':1630560,
'Cam Whitmore':1641715,


'Cameron Bairstow':203946,
'Cameron Johnson':1629661,
'Cameron Oliver':1628419,
'Cameron Payne':1626166,






'Caris LeVert':1627747,
'Carl Landry':201171,
'Carlik Jones':1630637,

'Carmelo Anthony':2546,

'Caron Butler':2406,
'Carrick Felix':203467,


'Carsen Edwards':1629035,
'Carter Bryant':1642868,




'Cartier Martin':201858,


'Cason Wallace':1641717,
'Casper Ware':203810,

'Cassius Stanley':1630199,
'Cassius Winston':1630216,



'Cat Barber':1627760,




'Cedi Osman':1626224,
'Cedric Coward':1642907,





'Chandler Hutchison':1628990,
'Chandler Parsons':202718,




'Channing Frye':101112,
'Charles Barkley':787,
'Charles Bassey':1629646,
'Charles Cooke':1628429,
'Charles Oakley':891,
'Charlie Brown Jr.':1629718,
'Charlie Villanueva':101111,
'Chase Budinger':201978,
'Chasson Randle':1626184,
'Chauncey Billups':1497,
'Chaundee Brown Jr.':1630602,
'Chaz Lanier':1642404,


'Cheick Diallo':1627767,
'Chet Holmgren':1631096,


'Chima Moneke':1631320,
'Chimezie Metu':1629002,
'Chinanu Onuaku':1627778,


'Chris Andersen':2365,
'Chris Babb':203569,
'Chris Bosh':2547,
'Chris Boucher':1628449,
'Chris Childs':164,
'Chris Chiozza':1629185,
'Chris Clemons':1629598,
'Chris Copeland':203142,
'Chris Douglas-Roberts':201604,
'Chris Duarte':1630537,
'Chris Johnson':203187,
'Chris Kaman':2549,
'Chris Livingston':1641753,
'Chris Mañon':1643024,
'Chris McCullough':1626191,
'Chris Mullin':904,
'Chris Paul':101108,
'Chris Silva':1629735,
'Chris Webber':185,
'Chris Youngblood':1642959,

'Christian Braun':1631128,
'Christian Koloko':1631132,
'Christian Wood':1626174,






'Chuck Hayes':101236,
'Chucky Hepburn':1642935,
'Chuma Okeke':1629643,











'Cleanthony Early':203921,


'Cliff Alexander':1626146,


'Clint Capela':203991,

'Clyde Drexler':17,
'Coby White':1629632,
'Cody Martin':1628998,
'Cody Williams':1642262,
'Cody Zeller':203469,

'Colby Jones':1641732,
'Cole Aldrich':202332,
'Cole Anthony':1630175,
'Cole Swider':1631306,


'Colin Castleton':1630658,

'Collin Gillespie':1631221,
'Collin Murray-Boyles':1642867,
'Collin Sexton':1629012,









'Connie Hawkins':76972,






'Cooper Flagg':1642843,


'Corey Brewer':201147,
'Corey Kispert':1630557,
'Corliss Williamson':722,

'Cory Jefferson':203928,
'Cory Joseph':202709,

'Coty Clarke':1626262,

'Courtney Lee':201584,






'Craig Porter Jr.':1641854,




'Cristiano Felicio':1626245,


'Cui Cui':1642385,











'Curtis Jones':1642938,
'Cuttino Mobley':1749,
'D\'Angelo Russell':1626156,
'D\'Moi Hodge':1641793,
'D.J. Augustin':201571,
'D.J. Carton':1630618,
'D.J. Kennedy':202810,
'D.J. Wilson':1628391,
'DJ Stephens':203474,
'DJ Stewart':1630597,
'DaJuan Summers':201969,
'DaQuan Jeffries':1629610,
'DaRon Holmes II':1641747,

'Daeqwon Plowden':1631342,
'Dahntay Jones':2563,
'Daishen Nix':1630227,
'Dakari Johnson':1626177,
'Dakota Mathias':1629751,
'Dalano Banton':1630625,
'Dale Davis':905,
'Dale Ellis':107,

'Dalen Terry':1631207,
'Dalton Knecht':1642261,
'Damian Jones':1627745,
'Damian Lillard':203081,
'Damien Inglis':203996,
'Damien Wilkins':2863,
'Damion Baugh':1641878,
'Damion Lee':1627814,
'Damjan Rudez':204014,
'Damon Stoudamire':757,

'Damyean Dotson':1628422,
'Dan Majerle':105,
'Daniel Gafford':1629655,
'Daniel Hamilton':1627772,
'Daniel Ochefu':1627849,
'Daniel Oturu':1630187,
'Daniel Theis':1628464,




'Danilo Gallinari':201568,
'Daniss Jenkins':1642450,
'Danny Fortson':1504,
'Danny Granger':101122,
'Danny Green':201980,
'Danny Manning':330,
'Danny Wolf':1642874,
'Dante Cunningham':201967,


'Danté Exum':203957,
'Danuel House Jr.':1627863,
'Dario Šarić':203967,
'Dariq Whitehead':1641727,
'Darius Bazley':1629647,
'Darius Days':1630620,
'Darius Garland':1629636,
'Darius Johnson-Odom':203130,
'Darius Miles':2032,
'Darius Miller':203121,
'Darius Morris':202721,

'Darrell Armstrong':353,
'Darrell Arthur':201589,
'Darren Collison':201954,
'Darrun Hilliard':1626199,
'Daryl Macon':1629133,
'Dave Bing':76166,
'Dave Cowens':76462,
'Dave DeBusschere':76545,
'David Duke Jr.':1630561,
'David Johnson':1630525,
'David Jones Garcia':1642357,
'David Lee':101135,
'David Nwaba':1628021,
'David Robinson':764,
'David Roddy':1631223,
'David Wesley':133,
'David West':2561,
'Davion Mitchell':1630558,
'Davis Bertans':202722,











'Davon Reed':1628432,

'Day\'Ron Sharpe':1630549,


'De\'Aaron Fox':1628368,
'De\'Andre Hunter':1629631,
'De\'Anthony Melton':1629001,
'DeAndre Jordan':201599,
'DeAndre Liggins':202732,
'DeAndre\' Bembry':1627761,

'DeJon Jarreau':1630610,
'DeJuan Blair':201971,

'DeMar DeRozan':201942,
'DeMarcus Cousins':202326,
'DeMarre Carroll':201960,
'DeQuan Jones':203199,

'DeVaughn Akoon-Purcell':1629152,
'Dean Wade':1629731,
'Deandre Ayton':1629028,


'Dee Brown':200793,
'Deividas Sirvydis':1629686,

'Dejounte Murray':1627749,




'Dell Curry':209,

'Delon Wright':1626153,
'Demetrius Jackson':1627743,
'Deng Adel':1629061,

'Deni Avdija':1630166,
'Dennis Rodman':23,
'Dennis Schröder':203471,
'Dennis Smith Jr.':1628372,


'Denzel Valentine':1627756,
'Deonte Burton':1629126,
'Dereck Lively II':1641726,
'Derek Anderson':1507,
'Dereon Seabron':1631220,
'Derik Queen':1642852,
'Deron Williams':101114,
'Derrick Coleman':934,
'Derrick Favors':202324,
'Derrick Jones Jr.':1627884,
'Derrick Rose':201565,
'Derrick Walton Jr.':1628476,
'Derrick White':1628401,
'Derrick Williams':202682,

'Desmond Bane':1630217,
'Devin Booker':1626164,
'Devin Cannady':1629962,
'Devin Carter':1642269,
'Devin Harris':2734,
'Devin Robinson':1628421,
'Devin Vassell':1630170,
'Devon Dotson':1629653,
'Devon Hall':1628985,
'Devontae Cacok':1629719,
'Devonte\' Graham':1628984,
'Devyn Marble':203906,
'Dewan Hernandez':1629608,
'Dewayne Dedmon':203473,
'Dexter Dennis':1641926,
'Deyonta Davis':1627738,





'Diamond Stone':1627754,






'Didi Louzada':1629712,


'Dikembe Mutombo':87,

'Dillon Brooks':1628415,
'Dillon Jones':1641794,

'Dion Waiters':203079,
'Dirk Nowitzki':1717,

'Dmytro Skapintsev':1631376,
'Dolph Schayes':78076,
'Domantas Sabonis':1627734,
'Dominick Barlow':1631230,
'Dominique Wilkins':1122,
'Don Williams':0,
'Donald Sloan':202388,
'Donatas Motiejunas':202700,
'Donovan Clingan':1642270,
'Donovan Mitchell':1628378,
'Donovan Williams':1631495,
'Donta Hall':1629743,
'Donte DiVincenzo':1628978,
'Donte Grantham':1629055,

'Dorell Wright':2748,
'Dorian Finney-Smith':1627827,





'Doug Christie':57,
'Doug McDermott':203926,






'Dragan Bender':1627733,

'Drake Powell':1642962,
'Draymond Green':203110,

'Drew Eubanks':1629234,
'Drew Gooden':2400,
'Drew Peterson':1641809,
'Drew Timme':1631166,

'Dru Smith':1630696,

'Duane Washington':0,
'Duane Washington Jr.':1630613,



'Duje Dukan':1626251,


'Duncan Robinson':1629130,



'Duop Reath':1641871,



'Dwayne Bacon':1628407,
'Dwight Buycks':202779,
'Dwight Howard':2730,
'Dwight Powell':203939,
'Dwyane Wade':2548,
'Dylan Cardwell':1642928,
'Dylan Harper':1642844,
'Dylan Windler':1629685,
'Dyson Daniels':1630700,
'Dzanan Musa':1629058,

'E\'Twaun Moore':202734,
'E.J. Liddell':1630604,
'Earl Barron':2853,
'Earl Boykins':1863,
'Earl Monroe':600006,



'Ed Davis':202334,
'Ed Macauley':77429,
'Eddie Gill':0,
'Eddie Jones':224,

'Eddy Curry':2201,


'Edmond Sumner':1628410,







'Edy Tavares':204002,
'Egor Dëmin':1642856,
'Ekpe Udoh':202327,
'Elden Campbell':922,
'Eldridge Recasner':695,
'Elfrid Payton':203901,
'Elgin Baylor':76127,
'Eli John Ndiaye':1642947,
'Elie Okobo':1629059,

'Elijah Harkless':1641989,
'Elijah Hughes':1630190,
'Elijah Millsap':202407,



'Elliot Williams':202343,



'Elton Brand':1882,
'Elvin Hayes':76979,
'Emanuel Miller':1641801,
'Emanuel Terry':1629150,

'Emeka Okafor':2731,
'Emmanuel Mudiay':1626144,
'Emoni Bates':1641734,
'Enes Freedom':202683,

'Enrique Freeman':1642402,
'Eric Bledsoe':202339,
'Eric Gordon':201569,
'Eric Mika':1628450,
'Eric Moreland':203961,
'Eric Paschall':1629672,
'Eric Piatkowski':15,
'Erick Dampier':956,
'Erick Green':203475,
'Erik McCree':1628571,
'Ersan Ilyasova':101141,


'Ethan Thompson':1630679,


'Eugene Omoruyi':1630647,
'Evan Fournier':203095,
'Evan Mobley':1630596,
'Evan Turner':202323,








'Facundo Campazzo':1630267,












'Feron Hunt':1630624,

'Festus Ezeli':203105,
'Filip Petrusev':1630196,




















'Frank Jackson':1628402,
'Frank Kaminsky':1626163,
'Frank Mason III':1628412,
'Frank Ntilikina':1628373,

'Franz Wagner':1630532,


'Fred Hoiberg':697,
'Fred Jones':2410,
'Fred VanVleet':1627832,
'Freddie Gillespie':1630273,








'Furkan Aldemir':203128,
'Furkan Korkmaz':1627788,

'GG Jackson':1641713,
'Gabe Vincent':1629216,
'Gabriel Deck':1630466,









'Garrett Temple':202066,

'Garrison Mathews':1629726,


'Gary Clark':1629109,
'Gary Harris':203914,
'Gary Neal':202390,
'Gary Payton':56,
'Gary Payton II':1627780,
'Gary Trent':0,
'Gary Trent Jr.':1629018,







'George Gervin':76804,
'George Hill':201588,
'George King':1628994,
'George Lynch':248,
'George McCloud':45,
'George Mikan':600012,



'Georges Niang':1627777,

'Georgios Kalaitzakis':1630686,
'Georgios Papagiannis':1627834,
'Gerald Green':101123,
'Gerald Henderson':201945,

'Gian Clavell':1628492,
'Giannis Antetokounmpo':203507,



'Gilbert Arenas':2240,









'Glenn Robinson':0,
'Glenn Robinson III':203922,

'God Shammgod':1539,
'Goga Bitadze':1629048,






'Goran Dragic':201609,
'Gordan Giricek':1921,
'Gordon Hayward':202330,



'Gorgui Dieng':203476,



'Gradey Dick':1641711,



'Grant Hill':255,
'Grant Jerrett':203511,
'Grant Riller':1630203,
'Grant Williams':1629684,







'Grayson Allen':1628960,











'Greg Brown III':1630535,
'Greg Monroe':202328,
'Greg Ostertag':731,
'Greg Stiemsma':201880,
'Greg Whittington':204222,
'Greivis Vasquez':202349,




'Guerschon Yabusele':1627824,


'Gui Santos':1630611,





'Hakeem Olajuwon':165,
'Hal Greer':76882,







'Hamidou Diallo':1628977,






















'Harrison Barnes':203084,
'Harrison Ingram':1631127,



'Harry Giles III':1628385,



'Hassan Whiteside':202355,
'Hassani Gravett':1629755,












'Haywood Highsmith':1629312,


'Hedo Turkoglu':2045,



'Henri Drell':1630929,
'Henry Ellenson':1627740,
'Henry Sims':203156,




'Herbert Jones':1630529,




'Hersey Hawkins':765,













'Hilton Armstrong':200756,










'Hollis Thompson':203138,

















'Hubert Davis':93,







'Hugo González':1642864,




'Hunter Dickinson':1630621,
'Hunter Sallis':1642282,
'Hunter Tyson':1641816,



































'Ian Clark':203546,
'Ian Mahinmi':101133,

'Ibou Badji':1630641,

'Ignas Brazdeikis':1629649,

'Ike Anigbogu':1628387,


'Iman Shumpert':202697,
'Immanuel Quickley':1630193,






'Isaac Bonga':1629067,
'Isaac Jones':1642403,
'Isaac Okoro':1630171,

'Isaiah Briscoe':1628515,
'Isaiah Canaan':203477,
'Isaiah Collier':1642268,
'Isaiah Crawford':1642384,
'Isaiah Hartenstein':1628392,
'Isaiah Hicks':1628439,
'Isaiah Jackson':1630543,
'Isaiah Joe':1630198,
'Isaiah Livers':1630587,
'Isaiah Mobley':1630600,
'Isaiah Roby':1629676,
'Isaiah Stevens':1641815,
'Isaiah Stewart':1630191,
'Isaiah Taylor':1627819,
'Isaiah Thomas':202738,
'Isaiah Todd':1630225,
'Isaiah Whitehead':1627785,
'Isaiah Wong':1631209,
'Ish Smith':202397,
'Ish Wainright':1630688,
'Isiah Thomas':78318,
'Ivan Rabb':1628397,


'Ivica Zubac':1627826,

'Izaiah Brockington':1631167,
'J.J. Barea':200826,
'J.P. Macura':1629122,
'JD Davison':1631120,
'JJ Hickson':201581,
'JJ O\'Brien':1626266,
'JJ Redick':200755,
'JR Smith':2747,
'JT Thor':1630550,
'Ja Morant':1629630,
'Ja\'Kobe Walter':1642266,
'JaKarr Sampson':203960,
'JaMychal Green':203210,
'JaQuori McLaughlin':1630605,
'JaVale McGee':201580,
'Jabari Bird':1628444,
'Jabari Brown':203913,
'Jabari Parker':203953,
'Jabari Smith':0,
'Jabari Smith Jr.':1631095,
'Jabari Walker':1631133,
'Jack Cooley':204022,
'Jack McVeigh':1629098,
'Jack White':1631298,

'Jackson Rowe':1642050,












'Jacob Evans':1628980,
'Jacob Gilyard':1631367,
'Jacob Pullen':1626643,
'Jacob Toppin':1631210,
'Jacob Wiley':1628451,
'Jaden Hardy':1630702,
'Jaden Ivey':1631093,
'Jaden McDaniels':1630183,
'Jaden Springer':1630531,
'Jae Crowder':203109,
'Jae\'Sean Tate':1630256,
'Jahlil Okafor':1626143,
'Jahmi\'us Ramsey':1630186,
'Jahmir Young':1642443,
'Jahmyl Telfort':1643141,
'Jaime Echenique':1630693,
'Jaime Jaquez Jr.':1631170,
'Jake LaRavia':1631222,
'Jake Layman':1627774,
'Jakob Poeltl':1627751,

'Jalen Bridges':1641779,
'Jalen Brunson':1628973,
'Jalen Crutcher':1630622,
'Jalen Duren':1631105,
'Jalen Green':1630224,
'Jalen Harris':1630223,
'Jalen Hood-Schifino':1641720,
'Jalen Johnson':1630552,
'Jalen Jones':1627883,
'Jalen Lecque':1629665,
'Jalen McDaniels':1629667,
'Jalen Pickett':1629618,
'Jalen Rose':147,
'Jalen Slawson':1641771,
'Jalen Smith':1630188,
'Jalen Suggs':1630591,
'Jalen Williams':1631114,
'Jalen Wilson':1630592,
'Jamaal Tinsley':2224,
'Jamal Cain':1631288,
'Jamal Crawford':2037,
'Jamal Murray':1627750,
'Jamal Shead':1642347,
'Jamaree Bouyea':1631123,
'Jamario Moon':200081,
'Jameer Nelson':2749,
'Jamel Artis':1628503,
'James Anderson':202341,
'James Bouknight':1630547,
'James Ennis III':203516,
'James Harden':201935,
'James Johnson':201949,
'James Jones':2592,
'James Michael McAdoo':203949,
'James Nunnally':203263,
'James Posey':1899,
'James Webb III':1627821,
'James Wiseman':1630164,
'James Worthy':1460,
'James Young':203923,





'Jamil Wilson':203966,
'Jamir Watkins':1642364,
'Jamison Battle':1642419,
'Jamorko Pickett':1630691,
'Jarace Walker':1641716,
'Jared Butler':1630215,
'Jared Cunningham':203099,
'Jared Dudley':201162,
'Jared Harper':1629607,
'Jared McCain':1642272,
'Jared Rhoden':1631197,
'Jared Sullinger':203096,
'Jared Terrell':1629123,
'Jarell Eddie':204067,
'Jarell Martin':1626185,
'Jaren Jackson':0,
'Jaren Jackson Jr.':1628991,
'Jarnell Stokes':203950,
'Jaron Blossomgame':1628417,

'Jarred Vanderbilt':1629020,
'Jarrell Brantley':1629714,
'Jarrett Allen':1628386,
'Jarrett Culver':1629633,
'Jarrett Jack':101127,
'Jarrod Uthoff':1627784,
'Jase Richardson':1642859,
'Jason Kapono':2574,
'Jason Preston':1630554,
'Jason Smith':201160,
'Jason Terry':1891,
'Jason Thompson':201574,
'Jason Williams':1715,
'Javin DeLaurier':1629602,
'Javon Freeman-Liberty':1631241,
'Javon Small':1642914,
'Javonte Cooke':1631451,
'Javonte Green':1629750,
'Javonte Smart':1630606,
'Jawun Evans':1628393,
'Jaxson Hayes':1629637,
'Jay Huff':1630643,
'Jay Scrubb':1630206,
'Jaylen Adams':1629121,
'Jaylen Brown':1627759,
'Jaylen Clark':1641740,
'Jaylen Hoard':1629658,
'Jaylen Martin':1641798,
'Jaylen Morris':1628537,
'Jaylen Nowell':1629669,
'Jaylen Sims':1631301,
'Jaylen Wells':1642377,
'Jaylin Williams':1631119,
'Jaylon Tyson':1642281,
'Jayson Tatum':1628369,
'Jazian Gortman':1641789,
'Jeff Adrien':202399,
'Jeff Ayres':201965,
'Jeff Dowtin Jr.':1630288,
'Jeff Green':201145,
'Jeff Hornacek':204,
'Jeff Teague':201952,
'Jeff Withey':203481,





'Jemerrio Jones':1629203,



'Jerami Grant':203924,

'Jeremiah Fears':1642847,
'Jeremiah Martin':1629725,
'Jeremiah Robinson-Earl':1630526,
'Jeremy Evans':202379,
'Jeremy Lamb':203087,
'Jeremy Lin':202391,
'Jeremy Pargo':202951,
'Jeremy Sochan':1631110,
'Jeremy Tyler':202719,
'Jerian Grant':1626170,
'Jericho Sims':1630579,
'Jermaine Samuels Jr.':1631257,
'Jerome Robinson':1629010,


'Jerry Lucas':77418,
'Jerry West':78497,
'Jerryd Bayless':201573,
'Jesse Edwards':1642399,
'Jett Howard':1641724,
'Jevon Carter':1628975,

'Jim Jackson':754,
'Jimmer Fredette':202690,
'Jimmy Butler III':202710,
'Jiri Welsch':2412,
'Joakim Noah':201149,
'Joan Beringer':1642866,
'Jock Landale':1629111,
'Jodie Meeks':201975,
'Joe Chealey':1629147,
'Joe Dumars':247,
'Joe Harris':203925,
'Joe Ingles':204060,
'Joe Johnson':2207,
'Joe Smith':693,
'Joe Wieskamp':1630580,
'Joe Young':1626202,

'Joel Anthony':201202,
'Joel Ayayi':1630555,
'Joel Bolomboy':1627762,
'Joel Embiid':203954,
'Joffrey Lauvergne':203530,
'John Butler Jr.':1631219,
'John Collins':1628381,
'John Havlicek':76970,
'John Henson':203089,
'John Holland':204066,
'John Jenkins':203098,
'John Konchar':1629723,
'John Lucas':0,
'John Lucas III':101249,
'John Salmons':2422,
'John Stockton':304,
'John Tonje':1642910,
'John Wall':202322,
'John Wallace':0,
'Johnathan Motley':1628405,
'Johnathan Williams':1629140,
'Johni Broome':1641780,
'Johnny Davis':1631098,
'Johnny Furphy':1642277,
'Johnny Juzang':1630548,
'Johnny O\'Bryant III':203948,





























'Jon Barry':468,
'Jon Leuer':202720,
'Jon Teske':1630257,
'Jonah Bolden':1628413,
'Jonas Jerebko':201973,
'Jonas Valančiūnas':202685,
'Jonathan Gibson':1626780,
'Jonathan Isaac':1628371,
'Jonathan Kuminga':1630228,
'Jonathan Mogbo':1642367,
'Jonathon Simmons':203613,






















'Jontay Porter':1629007,
'Jordan Adams':203919,
'Jordan Bell':1628395,
'Jordan Bone':1629648,
'Jordan Clarkson':203903,
'Jordan Crawford':202348,
'Jordan Farmar':200770,
'Jordan Ford':1630259,
'Jordan Goodwin':1630692,
'Jordan Hall':1631160,
'Jordan Hawkins':1641722,
'Jordan Hill':201941,
'Jordan Loyd':1628070,
'Jordan McLaughlin':1629162,
'Jordan McRae':203895,
'Jordan Mickey':1626175,
'Jordan Miller':1641757,
'Jordan Nwora':1629670,
'Jordan Poole':1629673,
'Jordan Schakel':1630648,
'Jordan Sibert':1626296,
'Jordan Walsh':1641775,


'Jorge Gutierrez':203268,
'Jose Alvarado':1630631,
'Jose Calderon':101181,

'Josh Childress':2735,
'Josh Christopher':1630528,
'Josh Giddey':1630581,
'Josh Gray':1627982,
'Josh Green':1630182,
'Josh Hall':1630221,
'Josh Harrellson':202725,
'Josh Hart':1628404,
'Josh Howard':2572,
'Josh Huestis':203962,
'Josh Jackson':1628367,
'Josh Magette':203705,
'Josh McRoberts':201177,
'Josh Minott':1631169,
'Josh Okogie':1629006,
'Josh Powell':2694,
'Josh Reaves':1629729,
'Josh Richardson':1626196,
'Josh Smith':2746,
'Joshua Primo':1630563,
















































'Jrue Holiday':201950,
'Juan Toscano-Anderson':1629308,
'Juancho Hernangomez':1627823,
'Jules Bernard':1631262,
'Julian Champagnie':1630577,
'Julian Phillips':1641763,
'Julian Strawther':1631124,
'Julian Washburn':1627395,
'Julius Erving':76681,
'Julius Randle':203944,
'Julyan Stone':202933,
'Justin Anderson':1626147,
'Justin Champagnie':1630551,
'Justin Edwards':1642348,
'Justin Hamilton':203120,
'Justin Harper':202712,
'Justin Holiday':203200,
'Justin Jackson':1628382,
'Justin James':1629713,
'Justin Lewis':1631171,
'Justin Minaya':1631303,
'Justin Patton':1628383,
'Justin Robinson':1629620,
'Justin Wright-Foreman':1629625,
'Justise Winslow':1626159,
'Jusuf Nurkić':203994,
'Juwan Morgan':1629752,

'KJ Martin':1630231,
'KJ McDaniels':203909,
'KJ Simpson':1642354,
'KZ Okpala':1629644,

'Kadeem Allen':1628443,
'Kai Jones':1630539,
'Kaiser Gates':1629232,

'Kalin Lucas':203564,

'Kam Jones':1642880,




'Kareem Abdul-Jabbar':76003,
'Karim Mane':1630211,
'Karl Malone':252,
'Karl-Anthony Towns':1626157,
'Karlo Matković':1631255,
'Kasparas Jakučionis':1642857,


'Kawhi Leonard':202695,
'Kay Felder':1627770,
'Keaton Wallace':1630811,
'Keegan Murray':1631099,

'Keifer Sykes':1626208,
'Keion Brooks Jr.':1631232,
'Keita Bates-Diop':1628966,
'Keith Appling':203951,
'Keith Benson':202728,
'Keith Van Horn':1496,
'Kel\'el Ware':1642276,
'Kelan Martin':1629103,
'Keldon Johnson':1629640,
'Kelenna Azubuike':101235,
'Keljin Blevins':1629833,

'Kelly Olynyk':203482,
'Kelly Oubre Jr.':1626162,


'Kemba Walker':202689,

'Kendall Brown':1631112,
'Kendall Gill':383,
'Kendall Marshall':203088,
'Kendrick Nunn':1629134,
'Kendrick Perkins':2570,

'Kennedy Chandler':1631113,

'Kenneth Faried':202702,
'Kenneth Lofton Jr.':1631254,
'Kenny Thomas':1903,
'Kenny Wooten':1629624,
'Kenrich Williams':1629026,
'Kent Bazemore':203145,
'Kentavious Caldwell-Pope':203484,
'Kenyon Martin':2030,
'Keon Clark':1721,
'Keon Ellis':1631165,
'Keon Johnson':1630553,

'Kerry Kittles':954,
'Keshad Johnson':1642352,
'Kessler Edwards':1630556,

'Kevin Durant':201142,
'Kevin Garnett':708,
'Kevin Hervey':1628987,
'Kevin Huerter':1628989,
'Kevin Johnson':134,
'Kevin Knox II':1628995,
'Kevin Love':201567,
'Kevin Martin':2755,
'Kevin McCullar Jr.':1641755,
'Kevin McHale':1450,
'Kevin Murphy':203122,
'Kevin Ollie':1563,
'Kevin Pangos':1630698,
'Kevin Porter':0,
'Kevin Porter Jr.':1629645,
'Kevin Seraphin':202338,
'Kevon Harris':1630284,
'Kevon Looney':1626172,

'Keyontae Johnson':1641749,
'Keyonte George':1641718,
'Khaman Maluach':1642863,
'Khem Birch':203920,
'Khris Middleton':203114,
'Khyri Thomas':1629017,


'Killian Hayes':1630165,
'Killian Tillie':1629681,




'Kira Lewis Jr.':1630184,
'Kirk Hinrich':2550,


'Klay Thompson':202691,







'Kobe Brown':1641738,
'Kobe Bryant':977,
'Kobe Bufkin':1641723,
'Kobe Sanders':1642920,
'Kobi Simmons':1628424,
'Koby Brea':1642886,


'Kon Knueppel':1642851,




'Kosta Koufos':201585,
'Kostas Antetokounmpo':1628961,
'Kostas Papanikolaou':203123,


'Kris Dunn':1627739,
'Kris Humphries':2743,
'Kris Murray':1631200,
'Kristaps Porziņģis':204001,







'Ky Bowman':1629065,
'Kyle Alexander':1629734,
'Kyle Anderson':203937,
'Kyle Collinsworth':1627858,
'Kyle Filipowski':1642271,
'Kyle Guy':1629657,
'Kyle Korver':2594,
'Kyle Kuzma':1628398,
'Kyle Lowry':200768,
'Kyle O\'Quinn':203124,
'Kyle Singler':202713,
'Kyle Wiltjer':1627787,
'Kylor Kelley':1630283,
'Kyrie Irving':202681,
'Kyshawn George':1642273,

'LaMarcus Aldridge':200746,
'LaMelo Ball':1630163,



'Lachlan Olbrich':1642950,
'Lamar Patterson':203934,
'Lamar Stevens':1630205,


'Lance Stephenson':202362,
'Lance Thomas':202498,

'Landry Shamet':1629013,



'Langston Galloway':204038,



'Larry Bird':1449,
'Larry Drew':0,
'Larry Drew II':203580,
'Larry Nance':0,
'Larry Nance Jr.':1626204,
'Larry Sanders':202336,

'Lauri Markkanen':1628374,

'Lavoy Allen':202730,




'LeBron James':2544,


'Leaky Black':1641778,
'Leandro Barbosa':2571,
'Leandro Bolmaro':1630195,







'Leonard Miller':1631159,



'Lester Quinones':1631311,




'Liam McNeeley':1642862,
'Liam Robbins':1641857,




'Lindell Wigginton':1629623,
'Lindy Waters III':1630322,
'Lionel Chalmers':2763,




'London Perrantes':1628506,

'Lonnie Walker IV':1629022,
'Lonzo Ball':1628366,



'Lorenzen Wright':953,
'Lorenzo Brown':203485,
'Lou Amundson':200811,
'Lou Williams':101150,
'Louis King':1629663,





'Luc Mbah a Moute':201601,
'Luca Vildoza':1630492,
'Lucas Nogueira':203512,



'Luguentz Dort':1629652,
'Luis Montero':1626242,
'Luis Scola':2449,
'Luka Dončić':1629029,
'Luka Garza':1630568,
'Luka Samanic':1629677,
'Luke Babbitt':202337,
'Luke Kennard':1628379,
'Luke Kornet':1628436,
'Luke Travers':1631247,

'Luol Deng':2736,
'Luther Head':101129,




'MJ Walker':1630640,
'Maalik Wayns':203146,
'Mac McClung':1630644,






'Magic Johnson':77142,




'Malachi Flynn':1630201,
'Malachi Richardson':1627781,
'Malaki Branham':1631103,
'Malcolm Brogdon':1627763,
'Malcolm Cazalon':1630608,
'Malcolm Delaney':1627098,
'Malcolm Hill':1630792,
'Malcolm Miller':1626259,

'Malevy Leons':1642502,
'Malik Beasley':1627736,
'Malik Fitts':1630238,
'Malik Monk':1628370,
'Malik Newman':1629005,



'Mamadi Diakite':1629603,


'Mangok Mathiang':1628493,




'Manu Ginobili':1938,
'Maozinha Pereira':1641970,
'MarJon Beauchamp':1630699,
'MarShon Brooks':202705,




'Marc Gasol':201188,
'Marc Jackson':1531,
'Marcelo Huertas':1626273,
'Marcin Gortat':101162,
'Marco Belinelli':201158,
'Marcus Camby':948,
'Marcus Cousin':0,
'Marcus Derrickson':1629094,
'Marcus Garrett':1630585,
'Marcus Georges-Hunt':1627875,
'Marcus Landry':202068,
'Marcus Morris Sr.':202694,
'Marcus Paige':1627779,
'Marcus Sasser':1631204,
'Marcus Smart':203935,
'Marcus Thornton':201977,
'Marial Shayok':1629621,
'Mario Chalmers':201596,
'Mario Elie':53,
'Mario Hezonja':1626209,

'Mark Blount':1548,
'Mark Sears':1641813,
'Mark Williams':1631109,
'Markel Brown':203900,
'Markelle Fultz':1628365,
'Markieff Morris':202693,

'Marko Guduric':1629741,
'Marko Simonovic':1630250,
'Markquis Nowell':1641806,
'Markus Howard':1630210,
'Marques Bolden':1629716,
'Marquese Chriss':1627737,
'Marquis Daniels':2605,
'Marreese Speights':201578,
'Marshall Plumlee':1627850,


'Martell Webster':101110,












'Marvin Bagley III':1628963,
'Marvin Williams':101107,
'Mason Jones':1630222,
'Mason Plumlee':203486,

'Matas Buzelis':1641824,





'Matisse Thybulle':1629680,

'Matt Barnes':2440,
'Matt Bonner':2588,
'Matt Bullard':672,
'Matt Costello':1627856,
'Matt Mooney':1629760,
'Matt Ryan':1630346,
'Matt Thomas':1629744,
'Matt Williams Jr.':1628475,
'Matthew Dellavedova':203521,


'Maurice Harkless':203090,
'Maurice Ndour':1626254,
'Max Christie':1631108,
'Max Shulga':1642917,
'Max Strus':1629622,

'Maxi Kleber':1628467,
'Maxime Raynaud':1642875,
'Maxwell Lewis':1641721,




























'McKinley Wright IV':1630593,













'Melvin Frazier Jr.':1628982,


'Metta World Peace':1897,

'Meyers Leonard':203086,
'Mfiondu Kabengele':1629662,
'Micah Peavy':1642877,
'Micah Potter':1630695,
'Michael Beasley':201563,
'Michael Carter-Williams':203487,
'Michael Curry':688,
'Michael Dickerson':1722,
'Michael Foster Jr.':1630701,
'Michael Frazier II':1626187,
'Michael Gbinije':1627771,
'Michael Jordan':893,
'Michael Kidd-Gilchrist':203077,
'Michael Porter Jr.':1629008,




'Mikal Bridges':1628969,

'Mike Bibby':1710,
'Mike Conley':201144,
'Mike James':1628455,
'Mike Miller':2034,
'Mike Muscala':203488,
'Mike Scott':203118,
'Mike Tobey':1627861,
'Mikki Moore':1630,
'Miles Bridges':1628970,
'Miles Kelly':1642939,
'Miles McBride':1630540,
'Miles Norris':1641936,
'Miles Plumlee':203101,


















'Milos Teodosic':1628462,
'Milton Doyle':1628495,


'Mindaugas Kuzminskas':1627851,




'Mirza Teletovic':203141,

'Mitch McGary':203956,
'Mitch Richmond':782,
'Mitchell Robinson':1629011,





'Miye Oni':1629671,
'Mo Bamba':1628964,
'Mo Williams':2590,




'Mohamed Diawara':1642885,






'Monta Ellis':101145,

'Montrezl Harrell':1626149,
'Monté Morris':1628420,

'Mookie Blaylock':302,










'Moritz Wagner':1629021,





'Moses Brown':1629650,
'Moses Malone':77449,
'Moses Moody':1630541,
'Moses Wright':1630589,


'Mouhamadou Gueye':1631338,
'Mouhamed Gueye':1631243,

'Moussa Cisse':1630619,
'Moussa Diabaté':1631217,



















'Mychal Mulder':1628539,
'Myke Henry':1627988,

'Myles Powell':1629619,
'Myles Turner':1626167,
'Myron Gardner':1642066,
'N\'Faly Dante':1642368,


'Nae\'Qwan Tomlin':1641772,
'Naji Marshall':1630230,



'Nassir Little':1629642,
'Nate Archibald':76054,
'Nate Darling':1630268,
'Nate Hinton':1630207,
'Nate Thurmond':600001,
'Nate Williams':1631466,
'Nate Wolters':203489,
'Nathan Knight':1630233,
'Nathan Mensah':1641877,
'Naz Mitrou-Long':1628513,
'Naz Reid':1629675,
'Nazr Mohammed':1737,



'Neemias Queta':1629674,


'Nemanja Bjelica':202357,


'Nenad Krstic':2420,
'Nene':2403,
'Nerlens Noel':203457,







'Nic Claxton':1629651,

'Nick Anderson':98,
'Nick Collison':2555,
'Nick Johnson':203910,
'Nick Richards':1630208,
'Nick Smith Jr.':1641733,
'Nick Van Exel':89,
'Nick Young':201156,
'Nickeil Alexander-Walker':1629638,
'Nico Mannion':1630185,
'Nicolas Batum':201587,
'Nicolas Brussino':1627852,
'Nicolas Laprovittola':1627879,
'Nicolo Melli':1629740,

'Nigel Hayes-Davis':1628502,
'Nigel Williams-Goss':1628430,
'Nik Stauskas':203917,
'Nikola Jokić':203999,
'Nikola Jović':1631107,
'Nikola Mirotic':202703,
'Nikola Pekovic':201593,
'Nikola Topić':1642260,
'Nikola Vučević':202696,
'Nikola Đurišić':1642365,
'Nikoloz Tskitishvili':2401,
'Nique Clifford':1642363,


'Noa Essengue':1642855,
'Noah Clowney':1641730,
'Noah Penda':1642869,
'Noah Vonleh':203943,




'Nolan Traore':1642849,
'Norman Powell':1626181,
'Norris Cole':202708,
'Norris Coleman':0,

'Norvel Pelle':203658,














'O.J. Mayo':201564,
'OG Anunoby':1628384,

'Obi Toppin':1630167,
'Ochai Agbaji':1630534,




'Okaro White':1627855,









'Oleksiy Pecherov':200762,


'Olivier Sarr':1630846,
'Olivier-Maxence Prosper':1641765,


'Omari Johnson':204179,
'Omari Spellman':1629016,
'Omer Asik':201600,
'Omer Yurtseven':1630209,

'Omri Casspi':201956,



'Onuralp Bitim':1641931,
'Onyeka Okongwu':1630168,
'Orlando Johnson':203111,
'Orlando Robinson':1631115,
'Oscar Robertson':600015,
'Oscar Tshiebwe':1631131,
'Oshae Brissett':1629052,

'Oso Ighodaro':1642345,

'Otis Thorpe':901,
'Otto Porter Jr.':203490,

'Ousmane Dieng':1631172,


'P.J. Brown':136,
'P.J. Tucker':200782,
'P.J. Washington':1629023,
'PJ Dozier':1628408,
'PJ Hairston':203798,
'PJ Hall':1641790,
'Pablo Prigioni':203143,

'Pacôme Dadiet':1642359,


'Paolo Banchero':1631094,









'Pascal Siakam':1627783,


'Pat Connaughton':1626192,
'Pat Garrity':1727,
'Pat Spencer':1630311,
'Patricio Garino':1627868,
'Patrick Baldwin Jr.':1631116,
'Patrick Beverley':201976,
'Patrick McCaw':1627775,
'Patrick Patterson':202335,
'Patrick Williams':1630172,




'Patty Mills':201988,
'Pau Gasol':2200,
'Paul Arizin':76056,
'Paul George':202331,
'Paul Millsap':200794,
'Paul Pierce':1718,
'Paul Reed':1630194,
'Paul Watson':1628778,
'Paul Zipser':1627835,




'Payton Pritchard':1630202,






'Peja Stojakovic':978,

'Pelle Larsson':1641796,





'Perry Jones III':203103,


'Pete Maravich':77459,
'Pete Nance':1631250,



'Petr Cornelie':1627822,


'Peyton Watson':1631212,
'Phil Pressey':203515,





'Pierre Jackson':203510,



























'Precious Achiuwa':1630173,
















'Quentin Grimes':1629656,
'Quenton Jackson':1631245,


'Quincy Acy':203112,
'Quincy Miller':203113,
'Quincy Olivari':1642439,
'Quincy Pondexter':202347,
'Quinn Cook':1626188,
'Quinndary Weatherspoon':1629683,

'Quinten Post':1642366,
'R.J. Hampton':1630181,
'RJ Barrett':1629628,
'RJ Hunter':1626154,

'Raef LaFrentz':1711,
'Rafer Alston':1747,
'RaiQuan Gray':1630564,
'Rajon Rondo':200765,
'Rakeem Christmas':1626176,
'Ramon Sessions':201196,




'Randy Foye':200751,
'Rashad Vaughn':1626173,
'Rasheed Wallace':739,
'Rasheer Fleming':1642853,
'Rasho Nesterovic':1725,
'Rasual Butler':2446,


'Raul Neto':203526,

'Rawle Alkins':1628959,
'Ray Allen':951,
'Ray McCallum':203492,
'Ray Spalding':1629034,
'RayJ Dennis':1642484,
'Rayan Rupert':1641712,
'Rayjon Tucker':1629730,
'Raymond Felton':101109,







'Reece Beekman':1641736,
'Reed Sheppard':1642263,






'Reggie Bullock Jr.':203493,
'Reggie Hearn':203687,
'Reggie Jackson':202704,
'Reggie Miller':397,
'Reggie Perry':1629617,
'Reggie Williams':202130,



'Richard Jefferson':2210,





'Richaun Holmes':1626158,

'Rick Barry':600013,
'Ricky Council IV':1641741,
'Ricky Rubio':201937,
'Riley Minix':1642434,




'Rob Dillingham':1642265,
'Rob Edwards':1630306,
'Robbie Hummel':203133,


'Robert Covington':203496,
'Robert Franks':1629606,
'Robert Parish':305,
'Robert Sacre':203135,
'Robert Williams III':1629057,
'Robert Woodard II':1630218,


'Robin Lopez':201577,










'Rocco Zikarsky':1642911,
'Rod Strickland':393,

'Rodions Kurucs':1629066,

'Rodney Carney':200760,
'Rodney Hood':203918,
'Rodney McGruder':203585,
'Rodney Rogers':915,
'Rodney Stuckey':201155,

'Roger Mason Jr.':2427,


'Romeo Langford':1629641,
'Ron Baker':1627758,
'Ron Davis':0,
'Ron Harper':0,
'Ron Harper Jr.':1631199,
'Ron Johnson':0,
'Ron Williams':0,
'Ronald Holland II':1641842,
'Rondae Hollis-Jefferson':1626178,

'Ronnie Price':101179,




'Roy Hibbert':201579,
'Royce O\'Neale':1626220,

'Ruben Boumtje-Boumtje':2257,
'Ruben Nembhard':0,
'Ruben Nembhard Jr.':1630612,
'Ruben Patterson':1739,


'Rudy Fernandez':201164,
'Rudy Gay':200752,
'Rudy Gobert':203497,
'Rui Hachimura':1629060,


'Russ Smith':203893,
'Russell Westbrook':201566,


'Ryan Anderson':201583,
'Ryan Arcidiacono':1627853,
'Ryan Broekhoff':1629151,
'Ryan Dunn':1642346,
'Ryan Hollins':200797,
'Ryan Kalkbrenner':1641750,
'Ryan Kelly':203527,
'Ryan Nembhard':1642948,
'Ryan Rollins':1631157,

'Saben Lee':1630240,


'Saddiq Bey':1630180,
'Salah Mejri':1626257,



'Sam Cassell':208,
'Sam Dekker':1626155,
'Sam Hauser':1630573,
'Sam Jones':77196,
'Sam Merrill':1630241,
'Samaki Walker':955,



'Samuel Dalembert':2223,


'Sandro Mamukelashvili':1630572,

'Santi Aldama':1630583,




'Sasha Kaun':201619,
'Sasha Vezenkov':1628426,
'Sasha Vujacic':2756,








'Scoot Henderson':1630703,
'Scott Williams':281,

'Scottie Barnes':1630567,
'Scottie Lewis':1630575,
'Scottie Pippen':937,
'Scotty Pippen Jr.':1630590,


'Sean Kilpatrick':203930,
'Sean McDermott':1630253,


'Sekou Doumbouya':1629635,

'Semaj Christon':203902,
'Semi Ojeleye':1628400,



'Serge Ibaka':201586,
'Sergey Karasev':203508,
'Sergio Rodriguez':200771,

'Seth Curry':203552,
'Seth Lundy':1641754,

'Shabazz Muhammad':203498,
'Shabazz Napier':203894,
'Shaedon Sharpe':1631101,
'Shai Gilgeous-Alexander':1628983,
'Shake Milton':1629003,


'Shammond Williams':1742,
'Shamorie Ponds':1629044,
'Shane Larkin':203499,
'Shaq Buchanan':1629783,
'Shaquille Harrison':1627885,
'Shaquille O\'Neal':406,
'Shareef Abdur-Rahim':949,
'Sharife Cooper':1630536,



'Shaun Livingston':2733,
'Shawn Bradley':762,
'Shawn Kemp':431,
'Shawn Long':1627848,
'Shayne Whittington':203963,


'Sheldon Mac':1627815,
'Shelvin Mack':202714,


'Sherman Douglas':428,




'Sidy Cissoko':1631321,







'Simone Fontecchio':1631323,







'Sindarius Thornwell':1628414,

'Sion James':1642883,

'Skal Labissiere':1627746,

'Skylar Mays':1630219,


















'Smush Parker':2470,



'Solomon Hill':203524,
'Sonny Weems':201603,




'Spencer Dinwiddie':203915,
'Spencer Hawes':201150,
'Spencer Jones':1642461,





'Stanley Johnson':1626169,
'Stanley Umude':1630649,

'Stanton Kidd':1629742,

'Stephen Curry':201939,
'Stephen Zimmerman':1627757,


'Stephon Castle':1642264,
'Stephon Marbury':950,
'Sterling Brown':1628425,
'Steve Blake':2581,
'Steve Francis':1883,
'Steve Kerr':70,
'Steve Nash':959,
'Steve Novak':200779,
'Steven Adams':203500,





















'Svi Mykhailiuk':1629004,




'T.J. Ford':2551,
'T.J. Leaf':1628388,
'T.J. McConnell':204456,
'T.J. Warren':203933,
'Tacko Fall':1629605,
'Taelon Peter':1643007,
'Tahjere McCall':1628769,
'Taj Gibson':201959,
'Talen Horton-Tucker':1629659,
'Tamar Bates':1642926,
'Tari Eason':1631106,
'Tarik Black':204028,
'Tariq Owens':1629745,


'Taurean Prince':1627752,

'Taylor Hendricks':1641707,


'Tayshaun Prince':2419,
'Taze Moore':1631386,





'Terance Mann':1629611,
'Terence Davis':1629056,
'Terquavion Smith':1631173,
'Terrance Ferguson':1628390,
'Terrell Brandon':210,

'Terrence Jones':203093,
'Terrence Ross':203082,
'Terrence Shannon Jr.':1630545,
'Terry Mills':371,
'Terry Rozier':1626179,
'Terry Taylor':1630678,





'Thabo Sefolosha':200757,
'Thaddeus Young':201152,
'Thanasis Antetokounmpo':203648,

'Theo Maledon':1630177,
'Theo Pinson':1629033,
'Theo Ratliff':689,

'Thomas Bryant':1628418,
'Thomas Robinson':203080,
'Thomas Sorber':1642850,
'Thomas Welsh':1629118,

















'Thon Maker':1627748,






'Tiago Splitter':201168,
'Tibor Pleiss':202353,
'Tidjane Salaün':1642275,


'Tim Duncan':1495,
'Tim Frazier':204025,
'Tim Hardaway':0,
'Tim Hardaway Jr.':203501,
'Tim Quarterman':1627817,
'Tim Thomas':1501,

'Timofey Mozgov':202389,
'Timothe Luwawu-Cabarrot':1627789,


'Tobias Harris':202699,


'Tolu Smith':1642449,
'Tomas Satoransky':203107,

'Toney Douglas':201962,
'Toni Kukoc':389,

'Tony Allen':2754,
'Tony Bradley':1628396,
'Tony Mitchell':203502,
'Tony Parker':2225,
'Tony Snell':203503,
'Tony Wroten':203100,




'Torrey Craig':1628470,
'Tosan Evbuomwan':1641787,

'Toumani Camara':1641739,

'Toure\' Murry':203315,

'Tracy McGrady':1503,
'Trae Young':1629027,



'Travis Best':696,
'Travis Wear':204037,
'Trayce Jackson-Davis':1631218,
'Tre Johnson':1642848,
'Tre Jones':1630200,
'Tre Mann':1630544,
'Tremont Waters':1629682,
'Trendon Watford':1630570,
'Trent Forrest':1630235,
'Trentyn Flowers':1642280,
'Trevelin Queen':1630243,
'Treveon Graham':1626203,
'Trevon Bluiett':1629129,
'Trevon Duval':1628979,
'Trevor Ariza':2772,
'Trevor Booker':202344,
'Trevor Hudgins':1631309,
'Trevor Keels':1631211,
'Trey Alexander':1641725,
'Trey Burke':203504,
'Trey Jemison III':1641998,
'Trey Lyles':1626168,
'Trey McKinney-Jones':203590,
'Trey Murphy III':1630530,

'Tristan Thompson':202684,
'Tristan Vukcevic':1641774,
'Tristan da Silva':1641783,
'Tristen Newton':1641803,
'Troy Brown Jr.':1628972,
'Troy Caupain':1628505,
'Troy Daniels':203584,
'Troy Hudson':1607,
'Troy Murphy':2211,
'Troy Williams':1627786,







'Ty Jerome':1629660,
'Ty Lawson':201951,
'Ty-Shon Alexander':1630234,
'TyTy Washington Jr.':1631102,
'Tyler Bey':1630189,
'Tyler Cavanaugh':1628463,
'Tyler Cook':1629076,
'Tyler Davis':1629093,
'Tyler Dorsey':1628416,
'Tyler Ennis':203898,
'Tyler Hall':1629788,
'Tyler Hansbrough':201946,
'Tyler Herro':1629639,
'Tyler Johnson':204020,
'Tyler Kolek':1642278,
'Tyler Lydon':1628399,
'Tyler Smith':1641890,
'Tyler Ulis':1627755,
'Tyler Zeller':203092,

'Tyreke Evans':201936,
'Tyrell Terry':1630179,
'Tyrese Haliburton':1630169,
'Tyrese Martin':1631213,
'Tyrese Maxey':1630178,
'Tyrese Proctor':1642878,
'Tyrone Wallace':1627820,
'Tyronn Lue':1731,
'Tyson Chandler':2199,
'Tyson Etienne':1630623,


'Tyus Jones':1626145,

'Udoka Azubuike':1628962,
'Udonis Haslem':2617,


'Ulrich Chomche':1642279,


'Usman Garuba':1630586,

'VJ Edgecombe':1642845,



'Vander Blue':203505,


'Vasilije Micic':203995,



'Vernon Carey Jr.':1630176,

'Vic Law':1629724,
'Victor Oladipo':203506,
'Victor Wembanyama':1641705,


'Vince Carter':1713,
'Vince Williams Jr.':1631246,
'Vincent Edwards':1629053,
'Vincent Hunter':1626205,
'Vincent Poirier':1629738,

'Vinny Del Negro':219,
'Vlade Divac':124,
'Vladislav Goldin':1642884,
'Vlatko Čančar':1628427,

'Voshon Lenard':702,



'Vít Krejčí':1630249,
'Wade Baldwin IV':1627735,






'Walker Kessler':1631117,












'Wally Szczerbiak':1887,

'Walt Frazier':76750,
'Walt Lemon Jr.':1627215,
'Walt Williams':1005,
'Walter Clayton Jr.':1642383,
















'Wayne Ellington':201961,
'Wayne Selden':1627782,












'Wendell Carter Jr.':1628976,
'Wendell Moore Jr.':1631111,
'Wenyen Gabriel':1629117,
'Wes Iwundu':1628411,
'Wes Unseld':78392,
'Wesley Johnson':202325,
'Wesley Matthews':202083,
'Wesley Person':445,























'Will Barton':203115,
'Will Bynum':101198,
'Will Magnay':1630266,
'Will Richard':1642954,
'Will Riley':1642860,
'William Howard':1629739,



































'Willie Cauley-Stein':1626161,
'Willie Reed':203186,
'Willis Reed':77929,
'Willy Hernangomez':1626195,
'Wilson Chandler':201163,



'Wilt Chamberlain':76375,



















'Xavier Cooks':1641645,
'Xavier Moon':1629875,
'Xavier Munford':204098,
'Xavier Rathan-Mayes':1628504,
'Xavier Silas':202918,
'Xavier Sneed':1630270,
'Xavier Tillman':1630214,

'Yakhouba Diawara':200821,
'Yang Hansen':1642905,
'Yanic Konan Niederhäuser':1642949,
'Yante Maten':1628999,
'Yao Ming':2397,
'Yi Jianlian':201146,
'Yogi Ferrell':1627812,







'Yuki Kawamura':1642530,
'Yuri Collins':1641879,

'Yuta Watanabe':1629139,
'Yves Missi':1642274,
'Yves Pons':1630582,
'Zaccharie Risacher':1642258,
'Zach Collins':1628380,
'Zach Edey':1641744,
'Zach LaVine':203897,
'Zach Norvell Jr.':1629668,
'Zach Randolph':2216,
'Zavier Simpson':1630285,
'Zaza Pachulia':2585,
'Zeke Nnaji':1630192,


'Zhaire Smith':1629015,
'Zhou Qi':1627753,
'Ziaire Williams':1630533,


'Zion Williamson':1629627,



'Zydrunas Ilgauskas':980,
'Zylan Cheatham':1629597,
'Zyon Pullin':1642389,



};
