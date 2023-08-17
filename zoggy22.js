
class Searchg {
  constructor(iconz, namez, genrez, ratingz, os, paidz, h, colorz) {
    this.iconz = iconz;
    this.namez = namez;
    this.genrez = genrez;
    this.ratingz = ratingz;
    this.os = os;
    this.paidz = paidz;
    this.h = h;
    this.colorz = colorz;
  }
}
fullpath = 'https://www.androidshark.com/review/'
redzy = "red"
greenzy = "#00fe00"
purpzy = "#7716ff"
genre_clicked = "false"

//Mousemove / touchmove
genre_array = ["arcade-blocky", "casual-blocky", "fighting-blocky", "platform-blocky", "td-blocky", "puzzle-blocky", "racing-blocky", "rpg-blocky", "sports-blocky", "strategy-blocky",
"fps-blocky", "tactics-blocky", "card-blocky", "sim-blocky", "pvp-blocky", "roguelike-blocky", "runner-blocky", "match-3-blocky"]

clicked_genre_array = ""

amongus = new Searchg (
"https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626939821f1563684650e992_among-us-icon.jpg",
"Among Us",
"Casual",
"64",
"ai",
"Free",
fullpath + 'among-us',
redzy
)

archero = new Searchg (
"https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/628270e6b18b7d83064dfbf0_archero-icon.jpg",
"Archero",
"Arcade",
"91",
"ai",
"Free",
fullpath + 'archero',
purpzy
)

badland = new Searchg (
"https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ab1522943e65287a6a459_badland-icon.jpg",
"Badland",
"Arcade",
"86",
"ai",
"Free",
fullpath + 'badland',
greenzy
)

bowmasters = new Searchg (
  "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62693c36094ede4c0be24107_bowmasters-icon.jpg",
  "Bowmasters",
  "Arcade",
  "73",
  "ai",
  "Free",
  fullpath + 'bowmasters',
  greenzy
)

flamingcore = new Searchg (
  "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62729dcf42d020662c945411_iconz.jpg",
  "Flaming Core",
  "Arcade",
  "88",
  "ai",
  "Free",
  fullpath + 'flaming-core',
  greenzy
)

grimvalor = new Searchg (
  "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62694f4ff39264ca24af06f5_grim-valor-icon.jpg",
  "Grimvalor",
  "Arcade",
  "96",
  "ai",
  "Free",
  fullpath + 'grimvalor',
  purpzy
)

johnnytrigger = new Searchg (
  "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626950a3df1432543b19338a_johnny-trigger-icon.jpg",
  "Johnny Trigger",
  "Arcade",
  "80",
  "ai",
  "Free",
  fullpath + 'johnny-trigger',
  greenzy
)

magicsurvival = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a33fce0ea62c40f3d3998_magic-survival-icon.jpg",
    "Magic Survival",
    "Arcade",
    "80",
    "a",
    "Free",
    fullpath + 'magic-survival',
    greenzy
  )

  seainvaders = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a61b0bd698fba272f7c29_sea-invaders-icon.jpg",
    "Sea Invaders",
    "Arcade",
    "86",
    "ai",
    "Free",
    fullpath + 'sea-invaders',
    greenzy
  )

  shadowhunterlostworld = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a65bb2a41790b6d644325_shadow-hunter-icon.jpg",
    "Shadow Hunter Lost World",
    "Arcade",
    "83",
    "ai",
    "Free",
    fullpath + 'shadow-hunter-lost-world',
    greenzy
  )

  skyfighters3d = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a68e2e0ea6258f93f0d61_sky-fighters-icon.jpg",
    "Sky Fighters 3D",
    "Arcade",
    "63",
    "ai",
    "Free",
    fullpath + 'sky-fighters-3d',
    redzy
  )

  skyforcereloaded = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a6ad38830124e86a880c1_sky-force-reloaded-icon.jpg",
    "Sky Force Reloaded",
    "Arcade",
    "80",
    "ai",
    "Free",
    fullpath + 'sky-force-reloaded',
    greenzy
  )

  smashhit = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/635127d7b53d570d7903bd58_smash-hit-logo.png",
    "Smash Hit",
    "Arcade",
    "79",
    "ai",
    "Free",
    fullpath + 'smash-hit',
    greenzy
  )


  tankbattleheroes = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a739c370e6dc3b107775f_tank-battle-heroes-icon.jpg",
    "Tank Battle Heroes",
    "Arcade",
    "77",
    "ai",
    "Free",
    fullpath + 'tank-battle-heroes',
    greenzy
  )

  xenowerk = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a7db633b1b9a81be409de_xenowerk-icon.jpg",
    "Xenowerk",
    "Arcade",
    "79",
    "ai",
    "Free",
    fullpath + 'xenowerk',
    greenzy
  )


  a1945airforce = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6269248bc142a9663e77ab91_1945-icon.jpg",
    "1945 Air Force",
    "Arcade",
    "57",
    "ai",
    "Free",
    fullpath + '1945-air-force',
    redzy
  )

  airattack = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626929410934c38365f2671e_air-attack-icon.jpg",
    "Air Attack",
    "Arcade",
    "40",
    "a",
    "Free",
    fullpath + 'air-attack',
    redzy
  )

  airattack2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62692c802bc5ed735e6ec7e1_air-attack-2-icon.jpg",
    "Air Attack 2",
    "Arcade",
    "58",
    "ai",
    "Free",
    fullpath + 'air-attack-2',
    redzy
  )

  lightningduru = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62696ff636f5af8564f9d166_duru-icon.jpg",
    "Lightning Duru",
    "Arcade",
    "41",
    "a",
    "Free",
    fullpath + 'lightning-duru',
    redzy
  )

  madbullets = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62ac4a6d40f8eb9775c4494e_mad-bullets-icon.jpg",
    "Mad Bullets",
    "Arcade",
    "60",
    "ai",
    "Free",
    fullpath + 'mad-bullets',
    redzy
  )

  metalsoldiers2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a36b07a20240a32fb9952_metal-icon.jpg",
    "Metal Soldiers 2",
    "Arcade",
    "38",
    "a",
    "Free",
    fullpath + 'metal-soldiers-2',
    redzy
  )

  
    overdrive2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/63513937da5bce09c31673c0_overdrive-2-icon.png",
    "Overdrive 2",
    "Arcade",
    "51",
    "ai",
    "Free",
    fullpath + 'overdrive-2',
    redzy
  )

  thefishercat = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6422b4ec821fcc053b9bb0ec_fishercat-icon.png",
    "The Fishercat",
    "Arcade",
    "68",
    "ai",
    "Free",
    fullpath + 'the-fishercat',
    redzy
  )

  transmutegalaxybattle = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a778d33b1b93acde3ea7d_transmute-galaxy-battle-icon.jpg",
    "Transmute Galaxy Battle",
    "Arcade",
    "63",
    "ai",
    "Free",
    fullpath + 'transmute-galaxy-battle',
    redzy
  )

  vector = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/642190800fbef0f56ac05c51_vector-icon.png",
    "Vector",
    "Arcade",
    "68",
    "ai",
    "Free",
    fullpath + 'vector',
    redzy
  )

  marsmars = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62d18f8da6d788299a2e3548_mars_icon.png",
    "Mars Mars",
    "Casual",
    "80",
    "ai",
    "Free",
    fullpath + 'vector',
    greenzy
  )

  orbia = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6268ee1ade6aebeeb9e834ee_orbia-icon.jpg",
    "Orbia",
    "Casual",
    "90",
    "ai",
    "Free",
    fullpath + 'orbia',
    purpzy
  )

  plank = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6268f325286a13250655cab0_plank-icon.jpg",
    "Plank",
    "Casual",
    "76",
    "ai",
    "Free",
    fullpath + 'plank',
    greenzy
  )

  snakearena = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6268f4d09fa0577ef027e95f_snake-arena-icon.jpg",
    "Snake Arena",
    "Casual",
    "77",
    "ai",
    "Free",
    fullpath + 'snake-arena',
    greenzy
  )

  walkmaster = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62691e90d736c62268387268_walk-master-icon.jpg",
    "Walk Master",
    "Casual",
    "83",
    "ai",
    "Free",
    fullpath + 'walk-master',
    greenzy
  )

  angrybirds2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62669aebf5b0e1026b0bb8be_angry-birds-2-icon.jpg",
    "Angry Birds 2",
    "Casual",
    "63",
    "ai",
    "Free",
    fullpath + 'angry-birds-2',
    redzy
  )

  
  snowmanstory = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6268f7d591826a20ba9a897c_snowman-story-icon.jpg",
    "Snowman Story",
    "Casual",
    "53",
    "ai",
    "Free",
    fullpath + 'snowman-story',
    redzy
  )

  powerrangerslegacywars = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a9b8fab24200a4a6dd5f4_power-rangers-icon.jpg",
    "Power Rangers Legacy Wars",
    "Fighting",
    "75",
    "ai",
    "Free",
    fullpath + 'power-rangers-legacy-wars',
    greenzy
  )

  bloodybastards = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a8c037623676e5fd2c26e_bloody-bastards-icon.jpg",
    "Bloody Bastards",
    "Fighting",
    "84",
    "ai",
    "Free",
    fullpath + 'bloody-bastards',
    greenzy
  )

  brawlhalla = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/628516b7e8db0f7ccb2385a1_brawlhalla-icon.jpg",
    "Brawlhalla",
    "Fighting",
    "97",
    "ai",
    "Free",
    fullpath + 'brawlhalla',
    purpzy
  )

  thekingoffightersallstar = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a0cde8bfa79c8b18fbb25a_fight-icon.jpg",
    "The King of Fighters ALLSTAR",
    "Fighting",
    "78",
    "ai",
    "Free",
    fullpath + 'the-king-of-fighters-allstar',
    greenzy
  )


  shadowfightarena = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a9fbbc3207a5e5bafaa39_shadow-fight-arena-icon.jpg",
    "Shadow Fight Arena",
    "Fighting",
    "88",
    "ai",
    "Free",
    fullpath + 'shadow-fight-arena',
    greenzy
  )

  skullgirls = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626aa87c1e88d4435fc0be82_skullgirls-icon.jpg",
    "Skullgirls",
    "Fighting",
    "86",
    "ai",
    "Free",
    fullpath + 'skullgirls',
    greenzy
  )

  kungfufightarena = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a916d845350ba093895da_kung-fu-fight-arena-icon.jpg",
    "Kung Fu Fight Arena",
    "Fighting",
    "13",
    "a",
    "Free",
    fullpath + 'kung-fu-fight-arena',
    redzy
  )

  megabotsbattlearena = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a980fc7321a19f5257556_megabots-battle-arena-icon.jpg",
    "Megabots Battle Arena",
    "Fighting",
    "52",
    "ai",
    "Free",
    fullpath + 'megabots-battle-arena',
    redzy
  )

  streetfighterivchampionedition = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a0d22c57ac64f4f1c2dedf_street-fighter-icon.jpg",
    "Street Fighter IV",
    "Fighting",
    "40",
    "ai",
    "Free",
    fullpath + 'street-fighter-iv-champion-edition',
    redzy
  )

  bananakong2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/643ec6c1ced389644ecfbcf0_banana-kong-2-icon.webp",
    "Banana Kong 2",
    "Platform",
    "93",
    "ai",
    "Free",
    fullpath + 'banana-kong-2',
    purpzy
  )

  catsareliquid = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62700d44dfae463b103033f2_a1.jpg",
    "Cats are Liquid",
    "Platform",
    "79",
    "ai",
    "Free",
    fullpath + 'cats-are-liquid',
    greenzy
  )

  dadish3 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6351306656c8223d0bd9ce96_dadish-3-logo.png",
    "Dadish 3",
    "Platform",
    "87",
    "ai",
    "Free",
    fullpath + 'dadish-3',
    greenzy
  )

  fancypantsadventures = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62700eb4d7e73b47d0317885_a1.jpg",
    "Fancy Pants Adventure",
    "Platform",
    "88",
    "ai",
    "Free",
    fullpath + 'fancy-pants-adventures',
    greenzy
  )

  forgottonanne = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626b78c563b9883115cdb8b4_forgotten-anne-icon.jpg",
    "Forgotton Anne",
    "Platform",
    "90",
    "ai",
    "Free",
    fullpath + 'forgotton-anne',
    purpzy
  )

  gswitch3 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6270da68f578fd7d41ca1cae_g-switch-icon.jpg",
    "G Switch 3",
    "Platform",
    "77",
    "ai",
    "Free",
    fullpath + 'g-switch-3',
    greenzy
  )

  helloyogurt = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6270dd462b05ab16fcd20ca9_hello-yogurt-icon.jpg",
    "Hello Yogurt",
    "Platform",
    "81",
    "ai",
    "Free",
    fullpath + 'hello-yogurt',
    greenzy
  )

  huntdown = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/63513434d248bd1ba3817fe2_huntdown-icon.png",
    "Huntdown",
    "Platform",
    "97",
    "ai",
    "Free",
    fullpath + 'huntdown',
    purpzy
  )

  
  magicrampage = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/637ba862e1c0f4d63b410076_magic-rampage-icon.png",
    "Magic Rampage",
    "Platform",
    "93",
    "ai",
    "Free",
    fullpath + 'magic-rampage',
    purpzy
  )

  nihilumbra = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62726c86874590fd12923ec8_iconz.jpg",
    "Nihilumbra",
    "Platform",
    "90",
    "ai",
    "Free",
    fullpath + 'nihilumbra',
    purpzy
  )

  oddmar = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62851565b2f45841d10a0893_oddmar-icon.jpg",
    "Oddmar",
    "Platform",
    "98",
    "ai",
    "Free",
    fullpath + 'oddmar',
    purpzy
  )

  snailbob3 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62726eeea3fa2111fd21f3ac_iconz.jpg",
    "Snail Bob 3",
    "Platform",
    "89",
    "ai",
    "Free",
    fullpath + 'snail-bob-3',
    greenzy
  )

  sonicthehedgehog2classic = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/63514270ee86384c3b62a4c3_sonic-icon.png",
    "Sonic The Hedgehog 2 Classic",
    "Platform",
    "94",
    "ai",
    "Free",
    fullpath + 'sonic-the-hedgehog-2-classic',
    purpzy
  )

  spaceexpedition = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626bb04d033956575ab32260_space-expedition-icon.jpg",
    "Space Expedition",
    "Platform",
    "76",
    "ai",
    "Free",
    fullpath + 'space-expedition',
    greenzy
  )

  supercattales2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e31e3795d940f2eb9c273_super-cat-tales-2.jpg",
    "Super Cat Tales 2",
    "Platform",
    "89",
    "ai",
    "Free",
    fullpath + 'super-cat-tales-2',
    greenzy
  )

  swordofxolan = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e3038e402f527530c286e_sword-of-xolan.jpg",
    "Sword Of Xolan",
    "Platform",
    "90",
    "ai",
    "Free",
    fullpath + 'sword-of-xolan',
    purpzy
  )

  adventurebeaks = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/627009511a16bb54442ea79d_a1.jpg",
    "Adventure Beaks",
    "Platform",
    "65",
    "ai",
    "Free",
    fullpath + 'adventure-beaks',
    redzy
  )

  appleknight = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62700be01da70b8ca3199b24_a1.jpg",
    "Apple Knight",
    "Platform",
    "65",
    "ai",
    "Free",
    fullpath + 'apple-knight',
    redzy
  )

  financientmystery = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6270124edc51261e3cf71014_a1.jpg",
    "Fin Ancient Mystery",
    "Platform",
    "64",
    "ai",
    "Free",
    fullpath + 'fin-ancient-mystery',
    redzy
  )

  grumpydwarf = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6270166679a4f67c60a156bd_a1.jpg",
    "Grumpy Dwarf",
    "Platform",
    "34",
    "ai",
    "Free",
    fullpath + 'grumpy-dwarf',
    redzy
  )

  lepsworld3 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6270e00099180d0e23edbf66_leps-icon.jpg",
    "Lep's World 3",
    "Platform",
    "57",
    "ai",
    "Free",
    fullpath + 'leps-world-3',
    redzy
  )

  mortalcrusade = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62726b43a38f7f9b6471ef4a_iconz.jpg",
    "Mortal Crusade",
    "Platform",
    "60",
    "a",
    "Paid",
    fullpath + 'mortal-crusade',
    redzy
  )

  snowbrosclassic = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/627270e0dccf883fa972083a_iconz.jpg",
    "Snow Bros Classic",
    "Platform",
    "60",
    "ai",
    "Free",
    fullpath + 'snow-bros-classic',
    redzy
  )

  cubeescapeparadox = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e2e8c0f1d0f7ccc13ab6a_cube-escape-paradox-icon.jpg",
    "Cube Escape Paradox",
    "Puzzle",
    "89",
    "ai",
    "Free",
    fullpath + 'cube-escape-paradox',
    greenzy
  )

  doorsparadox = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6422b0948328ee5da58f5c71_Doors-Paradox-icon.png",
    "Doors Paradox",
    "Puzzle",
    "76",
    "ai",
    "Free",
    fullpath + 'doors-paradox',
    greenzy
  )

  thegirlinthewindow = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/637b4c258c7bd8da7ff76b9f_the-girl-in-the-window-icon.jpg",
    "The Girl in the Window",
    "Puzzle",
    "74",
    "a",
    "Free",
    fullpath + 'the-girl-in-the-window',
    greenzy
  )

  hexio = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/637baed29093ce8312b39eba_hexio-icon.png",
    "Doors Paradox",
    "Puzzle",
    "75",
    "ai",
    "Free",
    fullpath + 'hexio',
    greenzy
  )

  hocus = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6272c8da84abb7681a8d5002_iconz.jpg",
    "Hocus",
    "Puzzle",
    "88",
    "ai",
    "Free",
    fullpath + 'hocus',
    greenzy
  )

  mekorama = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/637b65218c7bd87702f92dff_mekorama.png",
    "Mekorama",
    "Puzzle",
    "98",
    "ai",
    "Free",
    fullpath + 'mekorama',
    purpzy
  )


  notnot = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6272e4e6b83949451ab014f0_iconz.jpg",
    "Not Not",
    "Puzzle",
    "85",
    "ai",
    "Free",
    fullpath + 'not-not',
    greenzy
  )

  pipelineshexa = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/633c089f5b4b6d73dc61384b_pipe-lines-icon.png",
    "Pipe Lines Hexa",
    "Puzzle",
    "77",
    "ai",
    "Free",
    fullpath + 'pipe-lines-hexa',
    greenzy
  )

  shadowmatic = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/64217d08e50209397e25982d_Shadowmatic-icon.png",
    "Shadowmatic",
    "Puzzle",
    "90",
    "ai",
    "Free",
    fullpath + 'shadowmatic',
    purpzy
  )


  sugargame = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62ac35000fc655a9dc612412_sugar-icon.jpg",
    "Sugar Game",
    "Puzzle",
    "76",
    "ai",
    "Free",
    fullpath + 'sugar-game',
    greenzy
  )

  thatlevelagain = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62ac39f8dbf90f326c51958b_that-level-again-icon.jpg",
    "That Level Again",
    "Puzzle",
    "78",
    "ai",
    "Free",
    fullpath + 'that-level-again',
    greenzy
  )

  
  tinybubbles = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/642180edbf8c41087fa1697e_Tiny-Bubbles-icon.png",
    "Tiny Bubbles",
    "Puzzle",
    "91",
    "ai",
    "Free",
    fullpath + 'tiny-bubbles',
    purpzy
  )

  tinyrobotsrecharged = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/64218de2a217c2f084ec0f51_tiny-robots-icon.png",
    "Tiny Robots Recharged",
    "Puzzle",
    "74",
    "ai",
    "Free",
    fullpath + 'tiny-robots-recharged',
    greenzy
  )

  adventureescapemysteries = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/632daf93536350795aae8b5c_Adventure-Escape-Mysteries-icon.jpg",
    "Adventure Escape Mysteries",
    "Puzzle",
    "71",
    "ai",
    "Free",
    fullpath + 'adventure-escape-mysteries',
    greenzy
  )


  hangman = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/637bb2458f7eeeed7fdb1b98_hangman-icon.png",
    "Hangman",
    "Puzzle",
    "57",
    "ai",
    "Free",
    fullpath + 'hangman',
    redzy
  )

  hiddenjourney = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/637bb2458f7eeeed7fdb1b98_hangman-icon.png",
    "Hidden Journey",
    "Puzzle",
    "40",
    "ai",
    "Free",
    fullpath + 'hidden-journey',
    redzy
  )

  mergefables = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/637b7bf7c65fb80126f05d51_merge-fables-icon.png",
    "Merge Fables",
    "Puzzle",
    "65",
    "ai",
    "Free",
    fullpath + 'merge-fables',
    redzy
  )

  mysterymanor = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6422b84a5bc159370d4808e9_mystery-manor-icon.jpg",
    "Mystery Manor",
    "Puzzle",
    "52",
    "ai",
    "Free",
    fullpath + 'mystery-manor',
    redzy
  )

  scaryhorror2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626b8f36605bc844d722af7b_scary-horror-2-icon.jpg",
    "Scary Horror 2",
    "Puzzle",
    "43",
    "ai",
    "Free",
    fullpath + 'scary-horror-2',
    redzy
  )

  zhed = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/637ba5ff1052e22326186da6_zhed-icon.png",
    "Zhed",
    "Puzzle",
    "59",
    "ai",
    "Free",
    fullpath + 'zhed',
    redzy
  )


  asphalt9legends = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e285d2390aafa4efe1abf_asphalt-9-legends.jpg",
    "Asphalt 9 Legends",
    "Racing",
    "86",
    "ai",
    "Free",
    fullpath + 'asphalt-9-legends',
    greenzy
  )

  cosmicchallengeracing = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626fb068e9c9052e506e3ced_cosmic-icon.jpg",
    "Cosmic Challenge Racing",
    "Racing",
    "85",
    "ai",
    "Free",
    fullpath + 'cosmic-challenge-racing',
    greenzy
  )

  earn2die = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626fb60611d821444678b718_earn2.jpg",
    "Cosmic Challenge Racing",
    "Racing",
    "79",
    "ai",
    "Free",
    fullpath + 'earn-2-die',
    greenzy
  )

  hellrider3 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626fba3c495a6f28a5aa475c_hellrider3.jpg",
    "Hellrider 3",
    "Racing",
    "88",
    "ai",
    "Free",
    fullpath + 'hellrider-3',
    greenzy
  )

  hillclimbracing2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626fbf99c091318405267a1f_hill-climb-racing-2.jpg",
    "Hill Climb Racing 2",
    "Racing",
    "79",
    "ai",
    "Free",
    fullpath + 'hill-climb-racing-2',
    greenzy
  )


  motox3mbikeracegame = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ff385aa688e5cff694f0f_moto.jpg",
    "Moto X3M Bike Race Game",
    "Racing",
    "88",
    "ai",
    "Free",
    fullpath + 'moto-x3m-bike-race-game',
    greenzy
  )

  realracing3 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ff6b80d414a278bc14c4c_realracing3.jpg",
    "Real Racing 3",
    "Racing",
    "95",
    "ai",
    "Free",
    fullpath + 'real-racing-3',
    purpzy
  )

  mrbeanspecialdelivery = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ff4d89c60106b88e6e8e8_mrbeanicon.jpg",
    "Mr Bean Special Delivery",
    "Racing",
    "79",
    "ai",
    "Free",
    fullpath + 'mrbean-special-delivery',
    greenzy
  )

  carxhighwayracing = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626f8feae27fa3a9c6f8b78a_carx.jpg",
    "Carx Highway Racing",
    "Racing",
    "64",
    "ai",
    "Free",
    fullpath + 'carx-highway-racing',
    redzy
  )

  csrracing2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6422a96cbd3d1d7c2c814144_csr-2-icon.png",
    "CSR 2 Realistic Drag Racing",
    "Racing",
    "29",
    "ai",
    "Free",
    fullpath + 'csr-racing-2',
    redzy
  )

  csrracing2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6422a96cbd3d1d7c2c814144_csr-2-icon.png",
    "CSR 2 Realistic Drag Racing",
    "Racing",
    "29",
    "ai",
    "Free",
    fullpath + 'csr-racing-2',
    redzy
  )

  demolitionderby3 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626fb2bf70876185ec353593_demo-icon.jpg",
    "Demolition Derby 3",
    "Racing",
    "66",
    "ai",
    "Free",
    fullpath + 'demolition-derby-3',
    redzy
  )

  needforspeednolimits = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/637b7f8b26e11c0ca52a6a95_need-for-speed-no-limit-icon.png",
    "Need for Speed: No Limits",
    "Racing",
    "69",
    "ai",
    "Free",
    fullpath + 'need-for-speed-no-limits',
    redzy
  )

  trafficracer = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/627000debd3609319118d049_trafficRacer.jpg",
    "Traffic Racer",
    "Racing",
    "65",
    "ai",
    "Free",
    fullpath + 'traffic-racer',
    redzy
  )

  almoradarkosen = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6422a6b00e587b03ad506313_Almora-Darkosen-icon.png",
    "Almora Darkosen",
    "Rpg",
    "78",
    "ai",
    "Free",
    fullpath + 'almora-darkosen',
    greenzy
  )


  anothereden = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a36cb3d3325ea11565f335_another-eden-icon.jpg",
    "Another Eden",
    "Rpg",
    "94",
    "ai",
    "Free",
    fullpath + 'another-eden',
    purpzy
  )

  botworldadventure = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e21d589d0437565b1a9fc_botworld-icon.jpg",
    "Botworld Adventure",
    "Rpg",
    "89",
    "ai",
    "Free",
    fullpath + 'botworld-adventure',
    greenzy
  )

  constellationeleven = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626f6ea6708761ec0d335222_constellation-eleven-icon.jpg",
    "Constellation Eleven",
    "Rpg",
    "79",
    "a",
    "Free",
    fullpath + 'constellation-eleven',
    greenzy
  )

  eternium = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626f7664ccede53b8bab1b87_eternium-icon.jpg",
    "Eternium",
    "Rpg",
    "94",
    "ai",
    "Free",
    fullpath + 'eternium',
    purpzy
  )

  genshinimpact = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626b7fee096598d9a14163dd_genshin-impact-icon.jpg",
    "Genshin Impact",
    "Rpg",
    "88",
    "ai",
    "Free",
    fullpath + 'genshin-impact',
    greenzy
  )

  guardiantales = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626f792f70876142243391d5_guardian-tales-icon.jpg",
    "Guardian Tales",
    "Rpg",
    "95",
    "ai",
    "Free",
    fullpath + 'guardian-tales',
    purpzy
  )

  moonshades = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626f7f09a621222b0a7cd2e6_moonshades-icon.jpg",
    "Moonshades",
    "Rpg",
    "88",
    "ai",
    "Free",
    fullpath + 'moonshades',
    greenzy
  )

  skychildrenofthelight = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626f849e70876193b233d6f8_sky-icon.jpg",
    "Sky Children of the Light",
    "Rpg",
    "98",
    "ai",
    "Free",
    fullpath + 'sky-children-of-the-light',
    purpzy
  )

  vampiresfallorigins = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626f8a916404de2faf528896_vampire-fall-icon.jpg",
    "Vampires Fall Origins",
    "Rpg",
    "88",
    "ai",
    "Free",
    fullpath + 'vampires-fall-origins',
    greenzy
  )

  diabloimmortal = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62b01a70e7e7cfdda45e6ba5_diablo-immortal-icon.jpg",
    "Diablo Immortal",
    "Rpg",
    "69",
    "ai",
    "Free",
    fullpath + 'diablo-immortal',
    redzy
  )

  lostinblue = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a72abad4ecbde6041cde3d_lost-in-blue-icon.jpg",
    "Lost in Blue",
    "Rpg",
    "46",
    "ai",
    "Free",
    fullpath + 'lost-in-blue',
    redzy
  )

  baseball9 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e1656e6b01c81597010f0_baseball-9.jpg",
    "Baseball 9",
    "Sports",
    "88",
    "ai",
    "Free",
    fullpath + 'baseball-9',
    greenzy
  )

  basketballbattle = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e1963d198e95fd60b6994_basketball-battle.jpg",
    "Basketball Battle",
    "Sports",
    "77",
    "ai",
    "Free",
    fullpath + 'basketball-battle',
    greenzy
  )

  electionyearknockout = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e8790fbae091be36682d2_election-year-knockout-icon.jpg",
    "Election Year Knockout",
    "Sports",
    "86",
    "ai",
    "Free",
    fullpath + 'election-year-knockout',
    greenzy
  )

  grandmountainadventure = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/632debf5527b9c35eccbc92a_grand-icon.png",
    "Grand Mountain Adventure",
    "Sports",
    "84",
    "ai",
    "Free",
    fullpath + 'grand-mountain-adventure',
    greenzy
  )

  pbabowlingchallenge = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626eb72d2390aa2300013400_pba-icon.jpg",
    "PBA Bowling Challenge",
    "Sports",
    "74",
    "ai",
    "Free",
    fullpath + 'pba-bowling-challenge',
    greenzy
  )

  rocketleaguesideswipe = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a776517b5a8106439e889d_rocket-league-sideswipe-icon.jpg",
    "Rocket League Sideswipe",
    "Sports",
    "85",
    "ai",
    "Free",
    fullpath + 'rocket-league-sideswipe',
    greenzy
  )

  squarefistsboxing = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ebdd6a62122b585780484_square-fists-boxing-icon.jpg",
    "Square Fists Boxing",
    "Sports",
    "79",
    "ai",
    "Free",
    fullpath + 'square-fists-boxing',
    greenzy
  )

  touchgrindbmx2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6332a74d063f09a31324615d_touchgrind-icon.jpg",
    "Touchgrind BMX 2",
    "Sports",
    "80",
    "ai",
    "Free",
    fullpath + 'touchgrind-bmx-2',
    greenzy
  )

  worldoftennisroaring20s = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ec13326f5880d7abd9cfe_world-of-tennis-roaring-20s-icon.jpg",
    "World of Tennis Roaring 20s",
    "Sports",
    "86",
    "ai",
    "Free",
    fullpath + 'world-of-tennis-roaring-20s',
    greenzy
  )

  golfkingworldtour = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ea0a5795d94464fbc1ca8_golf-king-world-tour-icon.jpg",
    "Golf King World Tour",
    "Sports",
    "47",
    "ai",
    "Free",
    fullpath + 'golf-king-world-tour',
    redzy
  )

  hockeyallstars = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ea3fd0d4999376dcb4444_hockey-all-stars-icon.jpg",
    "Hockey All Stars",
    "Sports",
    "69",
    "ai",
    "Free",
    fullpath + 'hockey-all-stars',
    redzy
  )

  nba2k = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626eaca4bbe6b828390e430f_nba2k-icon.jpg",
    "Nba 2K",
    "Sports",
    "68",
    "ai",
    "Free",
    fullpath + 'nba-2k',
    redzy
  )

  realboxing2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ebbbea885cb2a8af2bfc5_real-boxing-2.jpg",
    "Real Boxing 2",
    "Sports",
    "37",
    "ai",
    "Free",
    fullpath + 'real-boxing-2',
    redzy
  )

  ultimatetennis3d = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/632d8b5f40fcf7be51387958_ultimate-tennis-icon.jpg",
    "Ultimate Tennis 3D",
    "Sports",
    "30",
    "ai",
    "Free",
    fullpath + 'ultimate-tennis-3d',
    redzy
  )

  artofwar3globalconflict = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626bef8b4d9ca5ae5717aa8c_art-of-war-3-icon.jpg",
    "Art of War 3 Global Conflict",
    "Strategy",
    "89",
    "ai",
    "Free",
    fullpath + 'art-of-war-3-global-conflict',
    greenzy
  )

  clashroyale = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62b1effc40ca2d3cf15e9596_cIcon.jpg",
    "Clash Royale",
    "Strategy",
    "80",
    "ai",
    "Free",
    fullpath + 'clash-royale',
    greenzy
  )

  ironmarines = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/637bab81d7d7f677afaec613_iron-marines-icon.png",
    "Iron Marines",
    "Strategy",
    "89",
    "ai",
    "Free",
    fullpath + 'iron-marines',
    greenzy
  )

  islandempire = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/642174fb30d27c0085263f55_island-empire-icon.png",
    "Island Empire",
    "Strategy",
    "73",
    "ai",
    "Free",
    fullpath + 'island-empire',
    greenzy
  )

  mushroomwars2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a1c5b45ad0e2da24a812e5_mushroom2-icon.jpg",
    "Mushroom Wars 2",
    "Strategy",
    "79",
    "ai",
    "Free",
    fullpath + 'mushroom-wars-2',
    greenzy
  )

  battleofpolytopia = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62838a8d536a00be771042a7_battle-of-polytopia-icon.jpg",
    "Battle of Polytopia",
    "Strategy",
    "97",
    "ai",
    "Free",
    fullpath + 'battle-of-polytopia',
    purpzy
  )

  stickwarlegacy = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e7e9ea621220f1e76466e_stick-war-legacy-icon.jpg",
    "Stick War Legacy",
    "Strategy",
    "80",
    "ai",
    "Free",
    fullpath + 'stick-war-legacy',
    greenzy
  )

  clashofclans = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62b1f6d7089bd825e477a99e_clansIcon.jpg",
    "Clash of Clans",
    "Strategy",
    "69",
    "ai",
    "Free",
    fullpath + 'clash-of-clans',
    redzy
  )

  dinobash = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62ac3ff6dbf90f4cac51c984_dino-bash-icon.jpg",
    "Dino Bash",
    "Strategy",
    "69",
    "ai",
    "Free",
    fullpath + 'dino-bash',
    redzy
  )

  forgeofempires = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626c0330d40a1c2cf4e05441_forge-of-empires-icon.jpg",
    "Forge of Empires",
    "Strategy",
    "67",
    "ai",
    "Free",
    fullpath + 'forge-of-empires',
    redzy
  )

  galaxyreavers = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a398b12f981e212755eea9_galaxy-reavers-icon.jpg",
    "Galaxy Reavers",
    "Strategy",
    "59",
    "ai",
    "Free",
    fullpath + 'galaxy-reavers',
    redzy
  )

  greatconquerorrome = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626c0a5969ca70d9f204968f_great-conqueror-icon.jpg",
    "Great Conqueror Rome",
    "Strategy",
    "57",
    "ai",
    "Free",
    fullpath + 'great-conqueror-rome',
    redzy
  )

  stateofsurvival = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/63514ccd485d395b99fb6a20_state-of-survival-icon.png",
    "State of Survival",
    "Strategy",
    "60",
    "ai",
    "Free",
    fullpath + 'state-of-survival',
    redzy
  )

  uniwar = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a392bfea91a72c88405eb3_uniwar-icon.jpg",
    "Uniwar",
    "Strategy",
    "67",
    "ai",
    "Free",
    fullpath + 'uniwar',
    redzy
  )

  ancientplanettowerdefense = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626bb8dbe0794d6d1363fd63_ancient-planet-tower-defense-icon.jpg",
    "Ancient Planet Tower Defense",
    "Tower Defense",
    "94",
    "ai",
    "Free",
    fullpath + 'ancient-planet-tower-defense',
    redzy
  )

  bloonstd6 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626bbc2ad40a1ccd25de2cc2_bloons-td6-icon.jpg",
    "Bloons TD 6",
    "Tower Defense",
    "95",
    "ai",
    "Free",
    fullpath + 'bloons-td-6',
    purpzy
  )

  defensezone3 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6352c9e6c122e4335abd6e9a_defense-zone-3-icon.png",
    "Defense Zone 3",
    "Tower Defense",
    "94",
    "ai",
    "Free",
    fullpath + 'defense-zone-3',
    purpzy
  )

  infinitode2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626bbe5b18b57a4b93fa283e_infinitode-2-icon.jpg",
    "Infinitode 2",
    "Tower Defense",
    "83",
    "ai",
    "Free",
    fullpath + 'infinitode-2',
    greenzy
  )

  kingdomrush = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62d188c29b5aeb73f928cba4_kingdom_rush_icon.jpg",
    "Kingdom Rush",
    "Tower Defense",
    "88",
    "ai",
    "Free",
    fullpath + 'kingdom-rush',
    greenzy
  )

  megatower = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626bc3509a74b1c0717a5913_mega-tower-icon.jpg",
    "Mega Tower",
    "Tower Defense",
    "7",
    "ai",
    "Free",
    fullpath + 'mega-tower',
    greenzy
  )

  minitd2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a1e9570fcd5b064f2adf2b_mini-td-2-icon.jpg",
    "Mini TD 2",
    "Tower Defense",
    "83",
    "ai",
    "Free",
    fullpath + 'mini-td-2',
    greenzy
  )

  defenselegend4 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a1f05983240b430d312586_defense-legend-4-icon.jpg",
    "Defense Legend 4",
    "Tower Defense",
    "59",
    "ai",
    "Free",
    fullpath + 'defense-legend-4',
    redzy
  )

  lasthopetd = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/632da45b808a90933558a65d_last-hope-icon.jpg",
    "Last Hope TD",
    "Tower Defense",
    "68",
    "ai",
    "Free",
    fullpath + 'last-hope-td',
    redzy
  )

  moduletd = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626bc6710c53dab0d4b79d54_module-td-icon.jpg",
    "Module TD",
    "Tower Defense",
    "4",
    "ai",
    "Free",
    fullpath + 'module-td',
    redzy
  )

  
  navalstorm = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a37fc4b8538f69b02dd592_naval-storm-icon.jpg",
    "Naval Storm",
    "Tower Defense",
    "63",
    "ai",
    "Free",
    fullpath + 'naval-storm',
    redzy
  )

  plantsvszombies2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/632dabeb96f7fc783dc80a15_plantvszombie2-icon.png",
    "Plants vs Zombies 2",
    "Tower Defense",
    "6",
    "ai",
    "Free",
    fullpath + 'plants-vs-zombies-2',
    redzy
  )

  roosterdefense = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626bc8d8d40a1c1871de86f5_rooster-icon.jpg",
    "Rooster Defense",
    "Tower Defense",
    "6",
    "ai",
    "Free",
    fullpath + 'rooster-defense',
    redzy
  )

  lifeinadventure = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a733ae0643c41464e7b2b8_life-in-adventure-icon.jpg",
    "Life in Adventure",
    "Story",
    "81",
    "ai",
    "Free",
    fullpath + 'life-in-adventure',
    greenzy
  )

  lifeisstrange = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626b8344b52c7903d064a848_life-is-strange-icon.jpg",
    "Life is Strange",
    "Story",
    "84",
    "ai",
    "Free",
    fullpath + 'life-is-strange',
    greenzy
  )

  thefrostrune = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626bb2d909659827bd42daa7_the-frostrune-icon.jpg",
    "The Frostrune",
    "Story",
    "85",
    "ai",
    "Free",
    fullpath + 'the-frostrune',
    greenzy
  )

  thewitchsisle = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626f87f5a885cbb3daf73f1c_the-witch-icon.jpg",
    "The Witch's Isle",
    "Story",
    "79",
    "ai",
    "Free",
    fullpath + 'the-witchs-isle',
    greenzy
  )

  alienisolation = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626aad0343bee248e3c3b147_alien-isolation-icon.jpg",
    "Alien Isolation",
    "Story",
    "90",
    "ai",
    "Paid",
    fullpath + 'alien-isolation',
    purpzy
  )

  callofdutymobile = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6269420527625081d4550daf_call-of-duty-mobile-icon.jpg",
    "Call Of Duty Mobile",
    "Shooter",
    "86",
    "ai",
    "Free",
    fullpath + 'call-of-duty-mobile',
    greenzy
  )

  payback2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a406f3107cb07f103825f_payback-2-icon.jpg",
    "Payback 2",
    "Shooter",
    "76",
    "ai",
    "Free",
    fullpath + 'payback-2',
    greenzy
  )

  pubgmobile = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a595935f0520d4ba3cf43_pubg-icon.jpg",
    "Pubg Mobile",
    "Shooter",
    "84",
    "ai",
    "Free",
    fullpath + 'pubg-mobile',
    greenzy
  )

  shadowgunlegends = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/642179c064e7f4bc470f5332_shadowgun-legends-icon.png",
    "Shadowgun Legends",
    "Shooter",
    "88",
    "ai",
    "Free",
    fullpath + 'shadowgun-legends',
    greenzy
  )

  thewalkingzombie2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a74e6d675defd20c9f598_the-walking-zombie-2-icon.jpg",
    "The Walking Zombie 2",
    "Shooter",
    "85",
    "ai",
    "Free",
    fullpath + 'the-walking-zombie-2',
    greenzy
  )

  apexlegendsmobile = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/632d9241b3a6f22e2f964bdb_apex-icon.png",
    "Apex Legends Mobile",
    "Shooter",
    "68",
    "ai",
    "Free",
    fullpath + 'apex-legends-mobile',
    redzy
  )

  coverfire = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/628b8c3727a4a095f7ea02ee_cover-fire-icon.jpg",
    "Cover Fire",
    "Shooter",
    "39",
    "ai",
    "Free",
    fullpath + 'cover-fire',
    redzy
  )

  deathpark2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ab6eca292491c0cd3584f_death-park-2-icon.jpg",
    "Death Park 2",
    "Shooter",
    "55",
    "ai",
    "Free",
    fullpath + 'death-park-2',
    redzy
  )

  jurassicmonsterworld = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626954ec2759ca1bf659e3e9_jurassic-monster-world-icon.jpg",
    "Jurassic Monster World",
    "Shooter",
    "72",
    "ai",
    "Free",
    fullpath + 'jurassic-monster-world',
    greenzy
  )

  mecharenarobotshowdown = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a71d3233563d113aeac3c1_mech-arena-icon.jpg",
    "Mech Arena Robot Showdown",
    "Shooter",
    "65",
    "ai",
    "Free",
    fullpath + 'mech-arena-robot-showdown',
    redzy
  )

 

  dislyte = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6332b2233f06294bb507c6c7_dislyte-icon.jpg",
    "Dislyte",
    "Tactics",
    "81",
    "ai",
    "Free",
    fullpath + 'dislyte',
    greenzy
  )

  enyo = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6332bc13ca98462438e73af7_enyo-icon.jpg",
    "Enyo",
    "Tactics",
    "89",
    "ai",
    "Free",
    fullpath + 'enyo',
    greenzy
  )

  spacemarshals2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a6e96710fd2c90b8af784_space-marshals-2-icon.jpg",
    "Space Marshals 2",
    "Tactics",
    "81",
    "ai",
    "Free",
    fullpath + 'space-marshals-2',
    greenzy
  )

  teamfighttactics = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62b1f432e82ac618104b27ad_tft-icon.jpg",
    "Teamfight Tactics",
    "Tactics",
    "88",
    "ai",
    "Free",
    fullpath + 'teamfight-tactics',
    greenzy
  )

  
  ageofmagic = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e1f3dfbea866ea13b93dd_age-of-magic-icon.jpg",
    "Age Of Magic",
    "Tactics",
    "66",
    "ai",
    "Free",
    fullpath + 'age-of-magic',
    redzy
  )

  raidshadowlegends = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62b19356a17ffc036caeb824_raid-icon.jpg",
    "Raid Shadow Legends",
    "Tactics",
    "66",
    "ai",
    "Free",
    fullpath + 'raid-shadow-legends',
    redzy
  )

  explodingkittens = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62853e1f41d37e7a823cf158_exploding-kittens-icon.jpg",
    "Exploding Kittens",
    "Card",
    "79",
    "ai",
    "Free",
    fullpath + 'exploding-kittens',
    greenzy
  )

  legendsofruneterra = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62b1f213fd1176ca97c492ff_runeIcon.jpg",
    "Legends of Runeterra",
    "Card",
    "94",
    "ai",
    "Free",
    fullpath + 'legends-of-runeterra',
    greenzy
  )


  dayrsurvival = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626f71acd373172bbe85caaa_day-r-survival-icon.jpg",
    "Day R Survival",
    "Simulation",
    "88",
    "ai",
    "Free",
    fullpath + 'day-r-survival',
    greenzy
  )

  goodpizzagreatpizza = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ecccaf1df6514c4c5eb89_good-pizza-great-pizza-icon.jpg",
    "Good Pizza Great Pizza",
    "Simulation",
    "92",
    "ai",
    "Free",
    fullpath + 'good-pizza-great-pizza',
    purpzy
  )

  plagueinc = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a1d6f3f15aee23e03f5e67_plague-inc-icon.jpg",
    "Plague Inc",
    "Simulation",
    "89",
    "ai",
    "Free",
    fullpath + 'plague-inc',
    greenzy
  )


  roblox = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626b8b9f98a545255c86d5df_roblox-icon.jpg",
    "Roblox",
    "Simulation",
    "80",
    "ai",
    "Free",
    fullpath + 'roblox',
    greenzy
  )
  

  simcitybuildit = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ed939e8a3b159fa0bd6f9_simcity-buildit-icon.jpg",
    "Simcity Buildit",
    "Simulation",
    "79",
    "ai",
    "Free",
    fullpath + 'simcity-buildit',
    greenzy
  )


  stardewvalley = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626edc5a89d0436c69b66911_stardew-valley.jpg",
    "Stardew Valley",
    "Simulation",
    "97",
    "ai",
    "Paid",
    fullpath + 'stardew-valley',
    purpzy
  )

  cityisland5 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e1b58e9c9053c2a6333e5_city-island-5.jpg",
    "City Island 5",
    "Simulation",
    "60",
    "ai",
    "Free",
    fullpath + 'city-island-5',
    redzy
  )

  
  dragonmanialegends = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ec4aafbea865fd53f826e_dragon-mania-legends-icon.jpg",
    "Dragon Mania Legends",
    "Simulation",
    "64",
    "ai",
    "Free",
    fullpath + 'dragon-mania-legends',
    redzy
  )

  farmville3 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6332b7f1ca54345205946e4d_farmville3-icon.jpg",
    "FarmVille 3",
    "Simulation",
    "59",
    "ai",
    "Free",
    fullpath + 'farmville-3',
    redzy
  )

  mobilelegendsbangbang = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62a1ce7ebc0ae225eeb27061_bang-bang-icon.jpg",
    "Mobile Legends Bang Bang",
    "Moba",
    "96",
    "ai",
    "Free",
    fullpath + 'mobile-legends-bang-bang',
    purpzy
  )

  smashlegends = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/637b609ce3a0dff587ff69eb_smash-legends-icon.png",
    "Smash Legends",
    "Moba",
    "69",
    "ai",
    "Free",
    fullpath + 'smash-legends',
    redzy
  )

  cardinalquest2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ee49ef31a95673dc58525_cardinal-icon.jpg",
    "Cardinal Quest 2",
    "Roguelike",
    "81",
    "ai",
    "Free",
    fullpath + 'cardinal-quest-2',
    greenzy
  )

  onebitadventure = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626f822ef31a95cf9cc93243_onebit-adventure-icon.jpg",
    "Onebit Adventure",
    "Roguelike",
    "83",
    "ai",
    "Free",
    fullpath + 'onebit-adventure',
    greenzy
  )

  meisking = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626ecf496ae060994a70cc8a_me-is-king-icon.jpg",
    "Me is King",
    "Idle",
    "77",
    "ai",
    "Free",
    fullpath + 'me-is-king',
    greenzy
  )

  forestisland = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62ac4478deacb466e40b5197_forest-island-icon.jpg",
    "Forest Island",
    "Idle",
    "64",
    "ai",
    "Free",
    fullpath + 'forest-island',
    redzy
  )

  tsukiadventure = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62691d38bb72a7cb52fa1b56_tsuki-adventure-icon.jpg",
    "Tsuki Adventure",
    "Idle",
    "70",
    "ai",
    "Free",
    fullpath + 'tsuki-adventure',
    greenzy
  )

  altosadventure = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6269305406b4c6296289f5e7_altos-icon.jpg",
    "Alto's Adventure",
    "Runner",
    "88",
    "ai",
    "Free",
    fullpath + 'altos-adventure',
    greenzy
  )

  skisafari2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a6747b11ca84cf6da61a4_ski-safari2-icon.jpg",
    "Ski Safari 2",
    "Runner",
    "90",
    "ai",
    "Free",
    fullpath + 'ski-safari-2',
    purpzy
  )

  subwaysurfers = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62691bfab5cb4e5bfcfcbaa6_subway-surfers-icon.jpg",
    "Subway Surfers",
    "Runner",
    "81",
    "ai",
    "Free",
    fullpath + 'subway-surfers',
    greenzy
  )

  a32secs = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626e2617c8c6542d70573b81_32-secs-icon.jpg",
    "32 Secs",
    "Runner",
    "62",
    "ai",
    "Free",
    fullpath + '32-secs',
    redzy
  )

  racethesunchallengeedition = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/637b558120daa9eb301bc02b_race-the-sun-icon.png",
    "Race the Sun Challenge Edition",
    "Runner",
    "30",
    "ai",
    "Free",
    fullpath + 'race-the-sun-challenge-edition',
    redzy
  )


  railrush = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626a5b3d24d30377c88f1c38_rail-rush-icon.jpg",
    "Rail Rush",
    "Runner",
    "47",
    "ai",
    "Free",
    fullpath + 'rail-rush',
    redzy
  )

  laracroftrelicrun = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62695a6ce08e86aac248968b_lara-icon.jpg",
    "Lara Croft Relic Run",
    "Runner",
    "58",
    "ai",
    "Free",
    fullpath + 'lara-croft-relic-run',
    redzy
  )

  beebrilliant = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6268e183c1a363181b963f5a_bee-brilliant-icon.jpg",
    "Bee Brilliant",
    "Match 3",
    "80",
    "ai",
    "Free",
    fullpath + 'bee-brilliant',
    greenzy
  )
 
  fishdom = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/62729b9ab772e90d5e19ca0c_iconz.jpg",
    "Fishdom",
    "Match 3",
    "84",
    "ai",
    "Free",
    fullpath + 'fishdom',
    greenzy
  )

  legendofsolgard = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/626f7b9c2bdea157955daf8f_legend-of-solgard-icon.jpg",
    "Legend of Solgard",
    "Match 3",
    "76",
    "ai",
    "Free",
    fullpath + 'legend-of-solgard',
    greenzy
  )

  candycrushsodasaga = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6268ea7f68b3d78cb70b8024_candy-crush-soda-saga-icon.jpg",
    "Candy Crush Soda",
    "Match 3",
    "75",
    "ai",
    "Free",
    fullpath + 'candy-crush-soda-saga',
    greenzy
  )

  gordonramsaychefblast = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/632d9af3808a90f642583db9_gordon-icon.jpg",
    "Gordon Ramsay Chef Blast",
    "Match 3",
    "55",
    "ai",
    "Free",
    fullpath + 'gordon-ramsay-chef-blast',
    redzy
  )

  gunspell2 = new Searchg (
    "https://uploads-ssl.webflow.com/626305d92309c16f65ff1358/6272a2112742a66ccd4c47c8_iconz.jpg",
    "Gunspell 2",
    "Match 3",
    "59",
    "ai",
    "Free",
    fullpath + 'gunspell-2',
    redzy
  )

  mortalkombat = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/646348d3becdbd5e3e22e1d0_mk-icon.jpg",
    "Mortal Kombat",
    "Fighting",
    "38",
    "ai",
    "Free",
    fullpath + 'mortal-kombat',
    redzy
  )

  mariokarttour = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64634e6c7d8df50216412c1a_mario-kart-icon.jpg",
    "Mario Kart Tour",
    "Racing",
    "86",
    "ai",
    "Free",
    fullpath + 'mario-kart-tour',
    greenzy
  )

  sonicdash = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64635b1b56798eaf94eb6082_sonic-dash-icon.png",
    "Sonic Dash",
    "Runner",
    "89",
    "ai",
    "Free",
    fullpath + 'sonic-dash',
    greenzy
  )

  bladesofbrim = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64635f4950e265ae23a8c317_blades-of-brim-icon.png",
    "Blades of Brim",
    "Runner",
    "88",
    "ai",
    "Free",
    fullpath + 'blades-of-brim',
    greenzy
  )

  leagueoflegendswildrift = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64184bab4f31d775368afcb8_wildrift.png",
    "League of Legends Wild Rift",
    "Moba",
    "92",
    "ai",
    "Free",
    fullpath + 'league-of-legends-wild-rift',
    purpzy
  )

  slidingseas = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/63db7797c8f82499b6a982e7_sliding-seas.png",
    "Sliding Seas",
    "Puzzle",
    "79",
    "ai",
    "Free",
    fullpath + 'sliding-seas',
    greenzy
  )

  phobies = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64637db8f2357df0bc4f9f33_phobies-icon.png",
    "Phobies",
    "Tactics",
    "91",
    "ai",
    "Free",
    fullpath + 'phobies',
    purpzy
  )

  flashparty = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6464b6d635100da043f01268_flash-party-icon.jpg",
    "Flash Party",
    "Fighting",
    "71",
    "ai",
    "Free",
    fullpath + 'flash-party',
    greenzy
  )

  marvelsnap = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6464bab071a962ca847b3d62_marvel-snap-icon.png",
    "Marvel Snap",
    "Card",
    "87",
    "ai",
    "Free",
    fullpath + 'marvel-snap',
    greenzy
  )

  thewayhome = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6464be125ae7c51a43cd46dc_the-way-home-icon.png",
    "The Way Home",
    "RogueLike",
    "83",
    "ai",
    "Free",
    fullpath + 'the-way-home',
    greenzy
  )
 
  brawlstars = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/638337ce9f78edebd4db3d9b_BrawlStars-icon.png",
    "Brawl Stars",
    "PvP",
    "84",
    "ai",
    "Free",
    fullpath + 'brawl-stars',
    greenzy
  )
 
  catalystblack = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6464d343efa29f9453f06bb0_catalyst-black-icon.png",
    "Catalyst Black",
    "PvP",
    "58",
    "ai",
    "Free",
    fullpath + 'catalyst-black',
    redzy
  )

  roninthelastsamurai = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6464d7932380b10932886d0e_ronin-icon.png",
    "Ronin: The Last Samurai",
    "RogueLike",
    "86",
    "ai",
    "Free",
    fullpath + 'ronin-the-last-samurai',
    greenzy
  )

  t3arena = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6464dbac77879b3458af3737_t3arena-icon.png",
    "T3 Arena",
    "PvP",
    "73",
    "ai",
    "Free",
    fullpath + 't3-arena',
    greenzy
  )

  egginc = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/646f477443cb308828d65246_egg-inc-icon.png",
    "Egg, Inc",
    "Idle",
    "75",
    "ai",
    "Free",
    fullpath + 'egg-inc',
    greenzy
  )

  robberybob = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64db5369c9987712d25b7dc4_robbery-bob-icon.png",
    "Robbery Bob",
    "Puzzle",
    "80",
    "ai",
    "Free",
    fullpath + 'robbery-bob',
    greenzy
  )

   theroomtwo = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64db579304ce1045dd0c7e5a_the-room-two-icon.png",
    "The Room Two",
    "Puzzle",
    "80",
    "ai",
    "Paid",
    fullpath + 'the-room-two',
    greenzy
  )

  torchlightinfinite  = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64db5ec502df2fcd9abe2d35_Torchlight-Infinite-icon.png",
    "Torchlight Infinite",
    "Rpg",
    "60",
    "ai",
    "Free",
    fullpath + 'torchlight-infinite',
    redzy
  )

  undecember  = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64db6423e6d895f56e4fa8ee_undecember-icon.png",
    "Undecember",
    "Rpg",
    "40",
    "ai",
    "Free",
    fullpath + 'undecember',
    redzy
  )

  wwemayhem  = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64db6dc42cbb43c39ca3c7b5_mayhem-icon.png",
    "WWE Mayhem",
    "Sports",
    "40",
    "ai",
    "Free",
    fullpath + 'wwemayhem',
    redzy
  )

  eightballpool   = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64db72de24c25637f527006b_8-ball-pool-icon.jpg",
    "8 Ball Pool",
    "Sports",
    "60",
    "ai",
    "Free",
    fullpath + '8-ball-pool',
    redzy
  )

  efootball2023   = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64dc89606eeab31cf430afff_eFootball-2023-icon.png",
    "eFootball 2023",
    "Sports",
    "60",
    "ai",
    "Free",
    fullpath + 'efootball-2023',
    redzy
  )

  f1mobileracing   = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64dc8c9c1bb0399ff84a208f_F1-Mobile-Racing-icon.png",
    "F1 Mobile Racing",
    "Racing",
    "40",
    "ai",
    "Free",
    fullpath + 'f1-mobile-racing',
    redzy
  )

  hungrysharkworld   = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64dc92340cad0f78bc19c486_hungry-shark-world-icon.png",
    "Hungry Shark World",
    "Casual",
    "70",
    "ai",
    "Free",
    fullpath + 'hungry-shark-world',
    greenzy
  )

  zombiecatchers   = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64dc95890cad0f78bc1d92c6_Zombie-Catchers-icon.png",
    "Zombie Catchers",
    "Platform",
    "80",
    "ai",
    "Free",
    fullpath + 'zombie-catchers',
    greenzy
  )

   limbo = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64dca04010991839fa0efdbb_limbo-icon.png",
    "Limbo",
    "Platform",
    "90",
    "ai",
    "Free",
    fullpath + 'limbo',
    purpzy
  )

  sierra7 = new Searchg (
    "https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/64dca4f0ddd3737042a8f194_sierra-7-icon.png",
    "Sierra 7",
    "Fps",
    "50",
    "ai",
    "Free",
    fullpath + 'sierra-7',
    redzy
  )
 

games = ["sierra 7", "limbo", "zombie catchers", "hungry shark world", "f1 mobile racing", "efootball 2023", "eight ball pool", "wwemayhem", "undecember", "torchlight infinite", "the room two", "robbery bob", "egg inc", "t3 arena", "ronin the last samurai", "catalyst black", "brawl stars", "the way home", "marvel snap", "flash party", "phobies", "sliding seas", "league of legends wild rift", "blades of brim", "sonic dash", "mario kart tour", "mortal kombat", "among us", "archero", "magic survival", "banana kong 2", "ancient planet tower defense", "art of war 3 global conflict", "cardinal quest 2", "baseball 9", "altos adventure", "forge of empires", "mobile legends bang bang", "mushroom wars 2", "zhed", "skullgirls", "alien isolation", "infinitode2", "nba 2k", "scary horror 2", "bloons td 6", "moonshades", "prison empire tycoon", "bloody bastards", "plague inc", "mini td 2", "defense legend 4", 'grand mountain adventure', "sonic the hedgehog 2 classic", "state of survival", "the girl in the window", "smash legends", "race the sun challenge edition", "mekorama", "badland", "battle of polytopia", "bee brilliant", "castle crush",  "exploding kittens", "raid shadow legends", "another eden", "naval storm", "rts siege up", "uniwar", "galaxy reavers", "dadish 3", "huntdown", "overdrive 2", "merge fables", "the walking zombie 2", "lara croft relic run", "asphalt 9 legends", "genuardian tales", "plant the world", "square fists boxing", "brawlhalla", "mech arena robot showdown", "lost in blue", "life in adventure", "iron marines", "eternium", "fishdom", "gardenscapes", "good pizza great pizza", "grimvalor", "hellrider 3", "the king of fighters allstar", "plants vs zombies 2", "need for speed no limits ", "hexio", "hangman", "hocus",  "moto x3m bike race game", "rooster defense", "botworld adventure", "street fighter iv champion edition", "mindustry", "adventure escape mysteries", "nihilumbra",  "pirates showdown", "power rangers legacy wars", "great conqueror rome", 'cosmic challenge racing', "apex legends mobile", "pipe lines hexa", "legend of solgard", "metal soldiers 2", "sky children of the light",  "genshin impact", "cover fire", "gordon ramsay chef blast", "dislyte", "farmville 3", "enyo", "roblox", "shadow fight arena", "snowman story", "life is strange", "death park 2", "forgotton anne", "ultimate tennis 3d", "last hope td",
"stardew valley",  "tank battle heroes", "vampires fall origins", "oddmar", "pubg mobile",  "mars mars", "kingdom rush", 'cube escape paradox', "call of duty mobile", "ea sports ufc", "day r survival", "snail bob 3", "shadow hunter lost world", "mega tower", "me is king", "defense zone 3", "candy crush soda saga", "space marshals 2", "snow bros classic", "golf king world tour", "hockey all stars","rival gears racing",  "grumpy dwarf", "hello yogurt", "air attack", "air attack 2","age of magic", "basketball battle",  "g switch 3", "johnny trigger", "touchgrind bmx 2", "ski safari 2", "mrbean special delivery", "guardian tales",
"transmute galaxy battle", "demolition derby 3", "sword of xolan", "horizon chase world tour", "smash hit", "fin ancient mystery", "sea invaders", "apple knight", "real racing 3", "constellation eleven", "xenowerk", "super cat tales 2", "lightning duru", "subway surfers", "orbia", "carx highway racing",  "dragon mania legends", "snake arena", "hill climb racing 2", "jurassic monster world", "tsuki adventure", "walk master", "flaming-core", "simcity buildit",  "leps world 3",  "megabots battle arena", "sky force reloaded", "earn 2 die", "not not", "rail rush", "fancy pants adventures", "kung fu fight arena", "payback 2", "plank", "sky fighters 3d", "stick war legacy", "the frostrune", "real boxing 2", "world of tennis roaring 20s", "bowmasters",  "module td", "32 secs", "traffic racer", "pba bowling challenge", "gunspell 2", "mortal crusade", "angry birds 2", "election year knockout", "rocket league sideswipe", "sugar game", "that level again", "adventure beaks", "dino bash", "forest island", "hidden journey", "mad bullets", "diablo immortal", "clash royale", "legends of runeterra", "teamfight tactics", "clash of clans", "city island 5", "the witchs isle", "1945 air force", "cats are liquid", "space expedition", "sugar game", "onebit adventure", "island empire", "shadowgun legends", "shadowmatic", "tiny bubbles", "tiny robots recharged", "vector", "almora darkosen", "csr racing 2", "doors paradox", "the fishercat", "mystery manor"
]





var mark_read_active = false
var current_genre = "nix"
var screen_width = $(".contain-all-update1").width()
var screen_size = parseInt(screen_width)
currenty_click = ""
multiclick = false
a1 = 0
//#####################################################
// wipe clean
//#####################################################
click_news = false 
function wipe_clean(){
    $(".content-drop-down").children().css("display", "none")
    $(".searchpart1").css("display", "none")
    $('.drop-down-update111').scrollTop(0);
  	$(".nav-linky").css("border-bottom", "none")
    $("#search-resultz").css("display", "none")
    $("html").css("overflow-y", "auto")
    $( ".vehicle1" ).prop( "checked", false );
    $(".nav-linky").removeClass("underlinezzz")
    $(".nav-linky").removeClass("underlinezzz-mobile")  
    $(".nav-linkz").removeClass("underlinezzz")  
    a1 = 0
    if(click_news == true){
      $(".nav-linkz").removeClass("underlinezzz")
      click_news = false
    }

    $(".nav-linky").removeClass("justbold")  
    mark_read_active = false
    current_genre = "nix" 

    // Pc vs Mobile
    // if(screen_size >= 751) {
    //     $(".nav-linky").css("font-family", "Speedee")
    // } 
}
function decorate_for_bigs(thisy) {
    gg = $(thisy).text()
    
    tt = gg.includes('Latest Reviews')// shows false

    if(tt == false){
      $(thisy).find(".nav-linky").addClass("underlinezzz")
    }
}
function justbold(thisy) {
    $(thisy).find(".nav-linky").addClass("justbold")
}
function when_text_clicked(thisy){
    genre_clicked = "true"
    namez = $(thisy).text()
    namez = namez.toLowerCase();
    arrz = namez.split("(");
    namez = arrz[0]
    console.log(namez)
    $( ".checkmp1" ).prop( "checked", false );
    multiclick = false
    $('.genre-linky1').find("img").removeClass("filter")    
    $(".checkmp1input").css("background", "lightgrey")
    $('.drop-down-update111').css("display", "block")
    $('.showtagz').css("display", "none")
    $(".genre-linky1").css("display", "block") 

    isitpre = namez.includes('pre-registration')

    whatsnext = namez.includes("what's next") 

    if(isitpre == true) {
        namez = "pre-reg"
    }

    if(namez == "pre-reg ") {
        namez = "pre-reg"
    }

    if(namez == "battle royale") {
      namez = "battle-royale"
  }

  if(whatsnext == true){
    namez = "whatsnext"
  }

  if(namez == "match 3") {
    namez = "match-3"
}
    rrr = namez.includes("what's new?")
    if(rrr == true) {
        namez = "latest" 
        $(".searchpart1").css("display", "block")
    }
    ttt = namez.includes("what's new?")
    fff1 = namez.includes("battle report")
    eee3 = namez.includes("news & updates")
    eee55 = namez.includes("news")
    if(ttt == true || fff1 == true || eee3 == true || eee55 == true) {
        console.log("NEWs", screen_size)
        if(screen_size >= 751) {
            zzaaa = $(".newz-111").hasClass("fade-in-left2")
            if(zzaaa == true){
              console.log("1")
              $(".newz-111").removeClass("fade-in-left2")
             
              $('.newz-111').css("display", "none")
            
              setTimeout(function(){
                $('.newz-111').css("display", "block")
                $(".newz-111").addClass("fade-in-left2")
     
              }, 10);
        
            } else {
              console.log("2")
              $('.newz-111').css("display", "block")
              $(".newz-111").addClass("fade-in-left2")
            }
            
        } else {
            console.log("YO2")
            $(".newz-mobile-11").css("display", "block")
        }
        return
    }
    if(namez == "tower defense") {
   	namez = "td" 
    }
    if(namez == "latest"){
      zzaaa = $(".latest-games").hasClass("fade-in-left2")
      if(zzaaa == true){
        console.log("1")
        $(".latest-games").removeClass("fade-in-left2")
        $('.latest-games').css("display", "none")
        setTimeout(function(){
          $('.latest-games').css("display", "block")
          $(".latest-games").addClass("fade-in-left2")
        }, 10);
  
      } else {
        console.log("2")
        $('.latest-games').css("display", "block")
        $(".latest-games").addClass("fade-in-left2")
      }
      return
    }
    if(namez != "shooter") {
        zzaaa = $("."+namez+"-blocky").hasClass("fade-in-left2")
        if(zzaaa == true){
          console.log("1")
          $("."+namez+"-blocky").removeClass("fade-in-left2")
          $("."+namez+"-blocky").css("display", "none")
          setTimeout(function(){
            $("."+namez+"-blocky").css("display", "block")
            $("."+namez+"-blocky").addClass("fade-in-left2")
          }, 10);
    
        } else {
          console.log("2")
          $("."+namez+"-blocky").css("display", "block")
          $("."+namez+"-blocky").addClass("fade-in-left2")
        }
    } else {
        zzaaa = $(".dd-blocky").hasClass("fade-in-left2")
        if(zzaaa == true){
          console.log("1")
          $(".dd-blocky").removeClass("fade-in-left2")
          $(".dd-blocky").css("display", "none")
          setTimeout(function(){
            $(".dd-blocky").css("display", "block")
            $(".dd-blocky").addClass("fade-in-left2")
          }, 10);
    
        } else {
          console.log("2")
          $(".dd-blocky").css("display", "block")
          $(".dd-blocky").addClass("fade-in-left2")
        }
    } 
}
$(document).on('click', '.genre-tab-update1', function(){
    the_this = $(this)  
    genr_name = $(this).text()
 
    if(genr_name == currenty_click){
      $(this).find(".nav-linky").addClass("hvr-underline-from-left")
      currenty_click = ""
    } else {
      $(".nav-linky").addClass("hvr-underline-from-left")
      $(this).find(".nav-linky").removeClass("hvr-underline-from-left")
     
      currenty_click = genr_name

      clicked_genre_array = currenty_click + "-" +"blocky"
      console.log(">>>>CLICKED", clicked_genre_array)
    }
    if(current_genre == $(this).text()) {
        wipe_clean()
        $('.drop-down-update111').css("display", "none")
        return
    } else {
        wipe_clean()
    }
    if(current_genre == "nix") {
        current_genre = $(this).text()
    } 
    if(screen_size >= 751 ) {
        decorate_for_bigs(the_this)
        when_text_clicked(the_this)
        return
    }
    justbold(the_this)
    decorate_for_bigs(the_this)
    when_text_clicked(the_this)
})
$(".genre-linky1").hover(function(){
screen_width = $(".contain-all-update1").width()
screen_size = parseInt(screen_width)
if(screen_size <= 750){
 	return
} 
 $(this).append(`
 <div class="genre-square" style="position: absolute; top: -5px; left: -4px; display:none !important;">
 <img src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/6364cb7eeb8de5ec45c8b7c2_invis-block.png" style="width: 98px; height: 101px;">
   </div>
 `)
$(this).find("img").css("transform", "scale(1.05)")
  }, function(){
  $(".genre-square").remove();
  $('.genre-linky1').find("img").css("transform", "scale(1.0)")
});
$(".sale-block-111").hover(function(){
  	$(this).find("img").css("transform", "scale(1.05)")
  }, function(){
  	$('.sale-block-111').find("img").css("transform", "scale(1.0)")
});
function capitalize(str) {
  strVal = '';
  str = str.split(' ');
  for (var chr = 0; chr < str.length; chr++) {
    strVal += str[chr].substring(0, 1).toUpperCase() + str[chr].substring(1, str[chr].length) + ' '
  }
  return strVal
}
$(".sss3").on("change keyup paste", function(){
		whole_char = $(this).val()
    whole_char = whole_char.toLowerCase()
		character_len = $(this).val().length
		$(".search-resultz").html("")
    $(".searchplaceholder").css("display", "none")
    if(character_len >= 1) {
    	$(".search-resultz").css("display", "block")
      indexy = character_len 
     $.each( games, function( key, value ) {
     	if(whole_char.substring(0, indexy) == value.substring(0, indexy)) {
       
      	cappy = capitalize(value)
        hrefz = value.replace(/[ ,]+/g, "-");

        getobj = hrefz.replace(/-/g, '');
        if(getobj == "1945airforce"){
            getobj = "a1945airforce"
        }

        if(getobj == "32secs"){
          getobj = "a32secs"
      }
        zz = eval(getobj)

        t_icon = zz['iconz']
        t_namez = zz['namez']
        t_genrez = zz['genrez']
        t_ratingz = zz['ratingz']
        t_os = zz['os']
        t_paidz = zz['paidz']
        t_h = zz['h']
        t_color = zz['colorz']
        
        //console.log(eval(t_icon), t_namez, t_ratingz, t_os, t_h)
        // redzy = "red"
        // greenzy = "#00fe00"
        // purpzy = "#7716ff"
        console.log('>>>', t_namez, t_os)
        rating_int = parseInt(t_ratingz)
        if(rating_int <= 69 ) {
          t_color = redzy
        } else if (rating_int >= 70 && rating_int <= 89) {
          t_color = greenzy
        } else if (rating_int >= 90 && rating_int <= 100) {
          t_color = purpzy
        }

        if(t_namez.length >= 21) {
          t_namez = t_namez.substring(0, 20)
          t_namez = t_namez + "..."
        }

       gg = ""
        if( t_os == "ai") {
          gg = `<div class="changecolor" style=" align-items: flex-start;
          display: flex;
          height: 80px;
          border-bottom: 1px solid whitesmoke;
          /* background: whitesmoke; */
          padding-bottom: 75px;
          padding-top: 10px;">
          <div style="float:left; "><img class="mobilepic" src=${t_icon} style="margin-right:15px; border-radius: 12px; max-width:none;"></img></div>
          

    
          <div style="float:left; width: 500px;">
            
          
            <span class="tNamez" style="color: black; font-size: 14px; font-family: roboto;">${t_namez}</span> <BR>    
            <span class="tGenrez" style="color: grey; font-size: 12px; font-family: roboto;">${t_genrez}</span> </div>
          

            <div class="tPaidz" style="float: left; font-size: 13px; color: grey; font-family: roboto; margin-top: 10px; position: relative;
          left: -70px;">${t_paidz}</div>

        
          <div class="whatput" style="float:left; width:175px; padding-top:9px;">
          <img style="width:15px; filter: grayscale(1);" src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62c6cc523a8eba60ef8d27f6_androidz.png"> 
            <img style="width:15px; filter: grayscale(1);" src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/645b64a3577bd33f43df560a_greeyaple.png">

          </div>

          <div class="ratz" style="  
          background: ${t_color};
          float: left;
          padding: 5px 7px 5px 7px;
          color: white;
          margin-right: 45px;
          font-size: 16px;
          font-family: roboto;
          margin-top: 6px;">${t_ratingz}</div>
        
          </div>`  
        }
        else if(t_os == "a") {
 gg = `<div class="changecolor" style=" align-items: flex-start;
 display: flex;
 height: 80px;
 border-bottom: 1px solid whitesmoke;
 /* background: whitesmoke; */
 padding-bottom: 75px;
 padding-top: 10px;">
 <div style="float:left; "><img class="mobilepic" src=${t_icon} style="margin-right:15px; border-radius: 12px; max-width:none;"></img></div>
 


 <div style="float:left; width: 500px;">
   
 
   <span class="tNamez">${t_namez}</span> <BR>    
   <span class="tGenrez">${t_genrez}</span> </div>
 

   <div class="tPaidz">${t_paidz}</div>


 <div class="whatput" style="float:left; width:175px; padding-top:9px;">
 <img style="width:15px; filter: grayscale(1);" src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/62c6cc523a8eba60ef8d27f6_androidz.png"> 


 </div>

 <div class="ratz" style="  
 background: ${t_color};
 float: left;
 padding: 5px 7px 5px 7px;
 color: white;
 margin-right: 45px;
 font-size: 16px;
 font-weight: bold;
 font-family: roboto;
 margin-top: 6px;">${t_ratingz}</div>

 </div>`  


        }

      else if(t_os == "i") {
 gg = `<div class="changecolor" style=" align-items: flex-start;
 display: flex;
 height: 80px;
 border-bottom: 1px solid whitesmoke;
 /* background: whitesmoke; */
 padding-bottom: 75px;
 padding-top: 10px;">
 <div style="float:left; "><img class="mobilepic" src=${t_icon} style="margin-right:15px; border-radius: 12px; max-width:none;"></img></div>
 


 <div style="float:left; width: 500px;">
   
 
 <span class="tNamez">${t_namez}</span> <BR>    
 <span class="tGenrez">${t_genrez}</span> </div>


 <div class="tPaidz">${t_paidz}</div>


 <div class="whatput" style="float:left; width:175px; padding-top:9px;">

   <img style="width:15px; filter: grayscale(1);" src="https://uploads-ssl.webflow.com/6262a56df551ed5332d9048e/645b64a3577bd33f43df560a_greeyaple.png">

 </div>

 <div class="ratz" style="  
 background: ${t_color};
 float: left;
 padding: 5px 7px 5px 7px;
 color: white;
 margin-right: 45px;
 font-size: 16px;
 font-weight: bold;
 font-family: roboto;
 margin-top: 6px;">${t_ratingz}</div>

 </div>`  

      }

      

    



        // google and ios
        $(".search-resultz").append(`<a class="linky=s" style="text-decoration: none; color:blue;" href="${t_h}">${gg}</a>` )
       

     
     	}
   	 })
    } else {
    	$(".search-resultz").css("display", "none")
      $(".searchplaceholder").css("display", "block")
    } 
})
$("#search-resultz").hover(function(){
	document.getElementById("sss3").blur();
  }, function(){
	document.getElementById("sss3").blur();
});

$(document).on("click", ".search-btn-mobile", function(){
	$(".dropdownz-mobile-search").css("display", "block")
})
$(document).on("click", ".close-mobile-search-block", function(){
	$(".dropdownz-mobile-search").css("display", "none")
  $(".search-resultz").css("display", "none")
 
})


$(document).on('click', '.remover-all', function(){
  console.log("YO")
  nav_clicked = false
  current_genre = ""
  screen_width = $(".contain-all-update1").width()
  screen_size = parseInt(screen_width)
  if(screen_size <= 750){
    $(".drop-down-update111").css("display", "none")
    $(".newz-h4").removeClass("underlinezzz")
    $(".nav-linky").removeClass("hvr-underline-from-left")
    return
  } 
  $(".nav-linky").removeClass("hvr-underline-from-left")
  $(".drop-down-update111").css("display", "none")
  //$(".nav-linky").css("font-family", "Speedee")
  $(".nav-linky").removeClass("underlinezzz")
  $(".nav-linky").css("text-decoration-line", "none")
  $(".newz-h4").css("font-family", "Speedee")
  $(".newz-h4").removeClass("underlinezzz")
  $(".newz-h4").css("font-weight", "400")
  $(".newz-h4").css("font-size", "12.5px")
  $(".nav-linky").addClass("hvr-underline-from-left")
  currenty_click = ""
})
screen_width = $(".contain-all-update1").width()
screen_size = parseInt(screen_width)
if(screen_size <= 750){
  $(".nav-linky").removeClass("hvr-underline-from-left")
} 
  $(".green-des1").find("h5").text("Top-rated games. Stars are exceptionally polished.")
  $(".green-des2").find("h5").text("Currently awaiting review.")
  $(".green-des3").find("h5").text("Playable but flawed and/or frustrating.")
  $(document).on('click', '.pvp', function(){
  	$('.showtagz').css('display', 'block')
    $('.drop-down-update111').css('display', 'none')
    $('.dastagz').css('display', 'flex')
  })
get_all_marked_gaimz = localStorage.getItem("markedGaimz")
if(get_all_marked_gaimz) {
  obj = JSON.parse(get_all_marked_gaimz)
  $(".heading-1609226677").each(function(){
      game_name = $(this).text()
      game_name = game_name.replace(/-/g, ""); 
      game_name = game_name.toLowerCase();
      game_name = game_name.replace(/\s/g, "");
      le_this = this
      if($.isNumeric(game_name)) {
        lastChar = game_name.charAt(game_name.length - 1);
        game_name = game_name.substring(0, 12);
        game_name = game_name + lastChar
      } else {
        game_name = game_name.substring(0, 12);
      }
      $.each(obj, function(index, value) {
        if(game_name == value) {
          console.log("FOUND MATCH", game_name, value)
          return; 
        }
       
      });

  
  });
}
  var isMp = false
  $(document).on("click", ".checkmp1", function(){
    if(isMp == false){
      isMp = true 
    } else {
      isMp =false
    }
    if(multiclick == false) {
      	multiclick = true
        $(".checkmp1input").css("background", "black")
      	$(".genre-linky1").each(function(){
      		ee = $(this).hasClass("multiplayer")
            if(ee == false) {         
                $(this).find("img").addClass("filter")    
            } 
    	});   
    } else {
      multiclick = false
      $(".genre-linky1").css("display", "block") 
      $(".checkmp1input").css("background", "lightgrey")
      $('.genre-linky1').find("img").removeClass("filter")    
    }
  })
$('.genre-linky1').sort(function(a, b) {
  var aVal = $(a).find('.gaimname').text();
  var bVal = $(b).find('.gaimname').text();
  return aVal.localeCompare(bVal);
}).each(function() {
  $(this).appendTo($(this).parent());
});
  $(".ismulti").html(`<input type="checkbox" id="checkmp1" class="checkmp1" name="checkmp1" value="Bike" style="    position: absolute;
width: 72px;
    float: left;
    opacity: 0;
    cursor: pointer;
    z-index: 5;">
<label class="checkmp1input" style="float: left; font-size: 12px; color: grey; font-weight: normal; position: relative; top: -3px; left: 6px;">Multiplayer</label>`)
first_block_genre = true
$(document).on('click', '.goright12', function(){
if(first_block_genre == true){
  first_block_genre = false
  $(".move123").css("visibility", "visible")
 //</input> $(".genre-tab-update1").slice(0, 11).hide()

 // move margin right for 2nd phase
 $(".genre-tab-update1").css("margin-right", "29px")
 $(".strat123").css("visibility", "hidden")


 $(".scrolly12345").animate({scrollLeft: "+=810"}, 200);
  $(".spec-hide").css("visibility", "hidden")
  $(".topz1").html(`
    <div class="material-symbols-outlined" style="color: rgb(95,99,104);">
    arrow_back
    </div>  
  `)
} else {
  first_block_genre = true
  $(".move123").css("visibility", "hidden")

   // move margin right for 1nd phase
   $(".genre-tab-update1").css("margin-right", "33px")
   $(".strat123").css("visibility", "visible")
   $(".special111").css("margin-right", "60px")

 //</BR> $(".genre-tab-update1").slice(0, 11).show()
 $(".scrolly12345").animate({scrollLeft: "-=1110"}, 200);
  $(".spec-hide").css("visibility", "visible")
    $(".topz1").html(`
    <div class="material-symbols-outlined" style="color: rgb(95,99,104);">
    arrow_forward
    </div>  
  `)
}
})
$(document).on("click", ".mag-glass", function(){
  $(".part01").css("display", "none")
  $(".part02").css("display", "block")
  $(".searchpart1").css("display", "block")
})
$(document).on("click", ".mag-close", function(){
  $(".searchpart1").css("display", "none")
  //  $(".mag-close").css("display", "none")
  //  $(".search-resultz").css("diplay", "none")
   $(".part01").css("display", "block")
   $(".part02").css("display", "none")
})


var burger1on = "off"

$(document).on("click", ".burger1", function(){
    if(burger1on == "off"){
      burger1on = "on"
      wipe_clean()
      $( ".checkmp1" ).prop( "checked", false );
      multiclick = false
      $('.genre-linky1').find("img").removeClass("filter")    
      $(".checkmp1input").css("background", "lightgrey")
      $('.drop-down-update111').css("display", "block")
      $('.showtagz').css("display", "none")
      $(".genre-linky1").css("display", "block") 
  
        zzaaa = $(".latest-games").hasClass("fade-in-left2")
        if(zzaaa == true){
          console.log("1")
          $(".latest-games").removeClass("fade-in-left2")
          $('.latest-games').css("display", "none")
          setTimeout(function(){
            $('.latest-games').css("display", "block")
            $(".latest-games").addClass("fade-in-left2")
          }, 10);
    
        } else {
          console.log("2")
          $('.latest-games').css("display", "block")
          $(".latest-games").addClass("fade-in-left2")
        }
        return

    } else {
      burger1on = "off"
      wipe_clean()
      $( ".checkmp1" ).prop( "checked", true );
      multiclick = true
      $('.genre-linky1').find("img").removeClass("filter")    
      $(".checkmp1input").css("background", "lightgrey")
      $('.drop-down-update111').css("display", "none")
      $('.showtagz').css("display", "none")
      $(".genre-linky1").css("display", "none") 
      
    }
  })


$(document).on('click', '.moveupy123', function(){
  if(a1 == 0){
    $(".nav-linkz").addClass("underlinezzz")  
    a1 = 1
  } else {
    $(".nav-linkz").removeClass("underlinezzz")  
    a1 = 0
  }


 

})


// Click genre new bar drop down
isdropdown = false

$(".section-dropdown").hover(function(){
    console.log("in")
    if(isdropdown == false) {
      isdropdown = true
    }  
  }, function(){
    console.log("out")
    if(isdropdown == true) {
      isdropdown = false
      //$(".section-dropdown").css("display", "none")
      $('.bbb').trigger('click');
    }  
 
});


// Hover over ahref of section dropdown

$(document).on("click", ".whatg", function(){
  $(".drop-down-update111").css("display", "block")
  $( ".content-drop-down" ).children().css( "display", "none" );
  get_texty = $(this).text()
  get_texty_small = get_texty.toLowerCase();
  $(".closelisty45").css("display","block")
  $("."+get_texty_small+"-blocky").css("display","block")
})
// $(".whatg").hover(function(){
//   $(".drop-down-update111").css("display", "block")
//   $( ".content-drop-down" ).children().css( "display", "none" );
//   get_texty = $(this).text()
//   get_texty_small = get_texty.toLowerCase();
//   $(".closelisty45").css("display","block")
//   $("."+get_texty_small+"-blocky").css("display","block")
// }, function(){
//   console.log("out1")
// });


$(document).on("click", ".closelisty45", function(){
  $(".drop-down-update111").css("display", "none")
  $( ".content-drop-down" ).children().css( "display", "none" );
})


// Mobile menu
current_genre_opened = ""
function removeallelse() {
  $(".drop-down-update111").css("display", "none")
  $(".content-drop-down").children().css( "display", "none" );
  current_genre_opened = ""
}
$(document).on("click", ".mobile-box-bar", function(){
  get_namez = $(this).find("a").text()
  get_namez = get_namez.toLowerCase();
  get_namez = get_namez + "-" + "blocky"

  if(get_namez == current_genre_opened) {
    removeallelse()
    return
  }

  // Remove anything else open
  removeallelse()
  current_genre_opened = get_namez  
  // Show the genre clicked
  $(".drop-down-update111").css("display", "block")
  $("."+get_namez).css("display", "block")


})


// Swipte genre left and right
//let touchArea =  document.getElementsByClassName("content-drop-down");
let touchArea =  document.getElementById("zog");
let output = document.getElementById("output");

//Initial mouse X and Y positions are 0
let mouseX,
  initialX = 0;
let mouseY,
  initialY = 0;
let isSwiped;

//Events for touch and mouse
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";

//Detect touch device

const isTouchDevice = () => {
  try {
    //We try to create TouchEvent (it would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

//Get left and top of touchArea
let rectLeft = touchArea.getBoundingClientRect().left;
let rectTop = touchArea.getBoundingClientRect().top;

//Get Exact X and Y position of mouse/touch
const getXY = (e) => {
  mouseX = (!isTouchDevice() ? e.pageX : e.touches[0].pageX) - rectLeft;
  mouseY = (!isTouchDevice() ? e.pageY : e.touches[0].pageY) - rectTop;
};

isTouchDevice();

//Start Swipe
touchArea.addEventListener(events[deviceType].down, (event) => {
  isSwiped = true;
  //Get X and Y Position
  getXY(event);
  initialX = mouseX;
  initialY = mouseY;
});





touchArea.addEventListener(events[deviceType].move, (event) => {
  if (!isTouchDevice()) {
    event.preventDefault();
  }
  if (isSwiped) {
    getXY(event);
    let diffX = mouseX - initialX;
    let diffY = mouseY - initialY;
    if (Math.abs(diffY) > Math.abs(diffX)) {
      output.innerText = diffY > 0 ? "Down" : "Up";
    } else {      
      clicked_genre_array = clicked_genre_array.toLowerCase();

   

      // Create elastic feel
      if(diffX < -1) {
        //$("."+clicked_genre_array).animate( { scrollLeft: '+=5' }, 5);
        $("."+clicked_genre_array).animate({marginLeft: '-=5px'}, 0);
      }

      if(diffX > 1) {
       // $("."+clicked_genre_array).animate( { scrollLeft: '-=5' }, 5);
        $("."+clicked_genre_array).animate({marginLeft: '+=5px'}, 0);
      }


      // Main transition
      // Swap towards the left which goes right
      if(diffX < -25) {
        index = genre_array.indexOf(clicked_genre_array);
        if(index >= genre_array.length) {
          console.log(clicked_genre_array)
          return
        }
        index = index + 1
        clicked_genre_array = genre_array[index]
        console.log(clicked_genre_array)
        isSwiped = false       
        // Remove everything
        $(".content-drop-down").children().css("display", "none")

        // Add proper genre to show
        $("."+clicked_genre_array).css("display", "block")

        // Add underline for genre
        $(".nav-linky").removeClass("justbold")
        $(".nav-linky").removeClass("underlinezzz")
        $("#"+clicked_genre_array).addClass("justbold")
        $("#"+clicked_genre_array).addClass("underlinezzz")

        // Scroll to nav link
       // $('.dastagz').animate( { scrollLeft: '+=50' }, 50);
      }

      // Swap towards the right which goes left
      if (diffX > 25) {
        index = genre_array.indexOf(clicked_genre_array);
        if(index <= 0) {
          console.log(clicked_genre_array)
          return
        }
        index = index - 1
        clicked_genre_array = genre_array[index]
        console.log(clicked_genre_array)
        isSwiped = false
        // Remove everything
        $(".content-drop-down").children().css("display", "none")

        // Add proper genre to show
        $("."+clicked_genre_array).css("display", "block")

        // Add underline for genre
        $(".nav-linky").removeClass("justbold")
        $(".nav-linky").removeClass("underlinezzz")
        $("#"+clicked_genre_array).addClass("justbold")
        $("#"+clicked_genre_array).addClass("underlinezzz")

        // Scroll to nav link
        //$('.dastagz').animate( { scrollLeft: '-=50' }, 50);



      }

   

      console.log("1")
    }
  } else {
    $(".content-drop-down").children().css("margin-left", "0px")

  }
});

//Stop Drawing
touchArea.addEventListener(events[deviceType].up, () => {
  isSwiped = false;
  console.log("reset1")
  $(".content-drop-down").children().css("margin-left", "0px")
});

touchArea.addEventListener("mouseleave", () => {
  isSwiped = false;
  console.log("reset2")
  $(".content-drop-down").children().css("margin-left", "0px")
});

window.onload = () => {
  isSwiped = false;
};


// Let go of drag to remove elastic feel
// setInterval(function () {
//     $(document).mousedown(function() {
//       console.log("TRUE")
//     }).mouseup(function() {
//       console.log("FALSE")
//     });

//     $(".content-drop-down").children().css("margin-left", "0px")
// }, 500);
