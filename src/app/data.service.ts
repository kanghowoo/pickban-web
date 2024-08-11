import { Injectable } from '@angular/core';
import { Champion } from './champion.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  champions: Champion[] = [ {
    "id" : "Aatrox",
    "key" : "266",
    "name" : "아트록스",
    "image" : "assets/img/champion/Aatrox.png"
  }, {
    "id" : "Ahri",
    "key" : "103",
    "name" : "아리",
    "image" : "assets/img/champion/Ahri.png"
  }, {
    "id" : "Akali",
    "key" : "84",
    "name" : "아칼리",
    "image" : "assets/img/champion/Akali.png"
  }, {
    "id" : "Akshan",
    "key" : "166",
    "name" : "아크샨",
    "image" : "assets/img/champion/Akshan.png"
  }, {
    "id" : "Alistar",
    "key" : "12",
    "name" : "알리스타",
    "image" : "assets/img/champion/Alistar.png"
  }, {
    "id" : "Amumu",
    "key" : "32",
    "name" : "아무무",
    "image" : "assets/img/champion/Amumu.png"
  }, {
    "id" : "Anivia",
    "key" : "34",
    "name" : "애니비아",
    "image" : "assets/img/champion/Anivia.png"
  }, {
    "id" : "Annie",
    "key" : "1",
    "name" : "애니",
    "image" : "assets/img/champion/Annie.png"
  }, {
    "id" : "Aphelios",
    "key" : "523",
    "name" : "아펠리오스",
    "image" : "assets/img/champion/Aphelios.png"
  }, {
    "id" : "Ashe",
    "key" : "22",
    "name" : "애쉬",
    "image" : "assets/img/champion/Ashe.png"
  }, {
    "id" : "AurelionSol",
    "key" : "136",
    "name" : "아우렐리온 솔",
    "image" : "assets/img/champion/AurelionSol.png"
  }, {
    "id" : "Aurora",
    "key" : "893",
    "name" : "오로라",
    "image" : "assets/img/champion/Aurora.png"
  }, {
    "id" : "Azir",
    "key" : "268",
    "name" : "아지르",
    "image" : "assets/img/champion/Azir.png"
  }, {
    "id" : "Bard",
    "key" : "432",
    "name" : "바드",
    "image" : "assets/img/champion/Bard.png"
  }, {
    "id" : "Belveth",
    "key" : "200",
    "name" : "벨베스",
    "image" : "assets/img/champion/Belveth.png"
  }, {
    "id" : "Blitzcrank",
    "key" : "53",
    "name" : "블리츠크랭크",
    "image" : "assets/img/champion/Blitzcrank.png"
  }, {
    "id" : "Brand",
    "key" : "63",
    "name" : "브랜드",
    "image" : "assets/img/champion/Brand.png"
  }, {
    "id" : "Braum",
    "key" : "201",
    "name" : "브라움",
    "image" : "assets/img/champion/Braum.png"
  }, {
    "id" : "Briar",
    "key" : "233",
    "name" : "브라이어",
    "image" : "assets/img/champion/Briar.png"
  }, {
    "id" : "Caitlyn",
    "key" : "51",
    "name" : "케이틀린",
    "image" : "assets/img/champion/Caitlyn.png"
  }, {
    "id" : "Camille",
    "key" : "164",
    "name" : "카밀",
    "image" : "assets/img/champion/Camille.png"
  }, {
    "id" : "Cassiopeia",
    "key" : "69",
    "name" : "카시오페아",
    "image" : "assets/img/champion/Cassiopeia.png"
  }, {
    "id" : "Chogath",
    "key" : "31",
    "name" : "초가스",
    "image" : "assets/img/champion/Chogath.png"
  }, {
    "id" : "Corki",
    "key" : "42",
    "name" : "코르키",
    "image" : "assets/img/champion/Corki.png"
  }, {
    "id" : "Darius",
    "key" : "122",
    "name" : "다리우스",
    "image" : "assets/img/champion/Darius.png"
  }, {
    "id" : "Diana",
    "key" : "131",
    "name" : "다이애나",
    "image" : "assets/img/champion/Diana.png"
  }, {
    "id" : "Draven",
    "key" : "119",
    "name" : "드레이븐",
    "image" : "assets/img/champion/Draven.png"
  }, {
    "id" : "DrMundo",
    "key" : "36",
    "name" : "문도 박사",
    "image" : "assets/img/champion/DrMundo.png"
  }, {
    "id" : "Ekko",
    "key" : "245",
    "name" : "에코",
    "image" : "assets/img/champion/Ekko.png"
  }, {
    "id" : "Elise",
    "key" : "60",
    "name" : "엘리스",
    "image" : "assets/img/champion/Elise.png"
  }, {
    "id" : "Evelynn",
    "key" : "28",
    "name" : "이블린",
    "image" : "assets/img/champion/Evelynn.png"
  }, {
    "id" : "Ezreal",
    "key" : "81",
    "name" : "이즈리얼",
    "image" : "assets/img/champion/Ezreal.png"
  }, {
    "id" : "Fiddlesticks",
    "key" : "9",
    "name" : "피들스틱",
    "image" : "assets/img/champion/Fiddlesticks.png"
  }, {
    "id" : "Fiora",
    "key" : "114",
    "name" : "피오라",
    "image" : "assets/img/champion/Fiora.png"
  }, {
    "id" : "Fizz",
    "key" : "105",
    "name" : "피즈",
    "image" : "assets/img/champion/Fizz.png"
  }, {
    "id" : "Galio",
    "key" : "3",
    "name" : "갈리오",
    "image" : "assets/img/champion/Galio.png"
  }, {
    "id" : "Gangplank",
    "key" : "41",
    "name" : "갱플랭크",
    "image" : "assets/img/champion/Gangplank.png"
  }, {
    "id" : "Garen",
    "key" : "86",
    "name" : "가렌",
    "image" : "assets/img/champion/Garen.png"
  }, {
    "id" : "Gnar",
    "key" : "150",
    "name" : "나르",
    "image" : "assets/img/champion/Gnar.png"
  }, {
    "id" : "Gragas",
    "key" : "79",
    "name" : "그라가스",
    "image" : "assets/img/champion/Gragas.png"
  }, {
    "id" : "Graves",
    "key" : "104",
    "name" : "그레이브즈",
    "image" : "assets/img/champion/Graves.png"
  }, {
    "id" : "Gwen",
    "key" : "887",
    "name" : "그웬",
    "image" : "assets/img/champion/Gwen.png"
  }, {
    "id" : "Hecarim",
    "key" : "120",
    "name" : "헤카림",
    "image" : "assets/img/champion/Hecarim.png"
  }, {
    "id" : "Heimerdinger",
    "key" : "74",
    "name" : "하이머딩거",
    "image" : "assets/img/champion/Heimerdinger.png"
  }, {
    "id" : "Hwei",
    "key" : "910",
    "name" : "흐웨이",
    "image" : "assets/img/champion/Hwei.png"
  }, {
    "id" : "Illaoi",
    "key" : "420",
    "name" : "일라오이",
    "image" : "assets/img/champion/Illaoi.png"
  }, {
    "id" : "Irelia",
    "key" : "39",
    "name" : "이렐리아",
    "image" : "assets/img/champion/Irelia.png"
  }, {
    "id" : "Ivern",
    "key" : "427",
    "name" : "아이번",
    "image" : "assets/img/champion/Ivern.png"
  }, {
    "id" : "Janna",
    "key" : "40",
    "name" : "잔나",
    "image" : "assets/img/champion/Janna.png"
  }, {
    "id" : "JarvanIV",
    "key" : "59",
    "name" : "자르반 4세",
    "image" : "assets/img/champion/JarvanIV.png"
  }, {
    "id" : "Jax",
    "key" : "24",
    "name" : "잭스",
    "image" : "assets/img/champion/Jax.png"
  }, {
    "id" : "Jayce",
    "key" : "126",
    "name" : "제이스",
    "image" : "assets/img/champion/Jayce.png"
  }, {
    "id" : "Jhin",
    "key" : "202",
    "name" : "진",
    "image" : "assets/img/champion/Jhin.png"
  }, {
    "id" : "Jinx",
    "key" : "222",
    "name" : "징크스",
    "image" : "assets/img/champion/Jinx.png"
  }, {
    "id" : "Kaisa",
    "key" : "145",
    "name" : "카이사",
    "image" : "assets/img/champion/Kaisa.png"
  }, {
    "id" : "Kalista",
    "key" : "429",
    "name" : "칼리스타",
    "image" : "assets/img/champion/Kalista.png"
  }, {
    "id" : "Karma",
    "key" : "43",
    "name" : "카르마",
    "image" : "assets/img/champion/Karma.png"
  }, {
    "id" : "Karthus",
    "key" : "30",
    "name" : "카서스",
    "image" : "assets/img/champion/Karthus.png"
  }, {
    "id" : "Kassadin",
    "key" : "38",
    "name" : "카사딘",
    "image" : "assets/img/champion/Kassadin.png"
  }, {
    "id" : "Katarina",
    "key" : "55",
    "name" : "카타리나",
    "image" : "assets/img/champion/Katarina.png"
  }, {
    "id" : "Kayle",
    "key" : "10",
    "name" : "케일",
    "image" : "assets/img/champion/Kayle.png"
  }, {
    "id" : "Kayn",
    "key" : "141",
    "name" : "케인",
    "image" : "assets/img/champion/Kayn.png"
  }, {
    "id" : "Kennen",
    "key" : "85",
    "name" : "케넨",
    "image" : "assets/img/champion/Kennen.png"
  }, {
    "id" : "Khazix",
    "key" : "121",
    "name" : "카직스",
    "image" : "assets/img/champion/Khazix.png"
  }, {
    "id" : "Kindred",
    "key" : "203",
    "name" : "킨드레드",
    "image" : "assets/img/champion/Kindred.png"
  }, {
    "id" : "Kled",
    "key" : "240",
    "name" : "클레드",
    "image" : "assets/img/champion/Kled.png"
  }, {
    "id" : "KogMaw",
    "key" : "96",
    "name" : "코그모",
    "image" : "assets/img/champion/KogMaw.png"
  }, {
    "id" : "KSante",
    "key" : "897",
    "name" : "크산테",
    "image" : "assets/img/champion/KSante.png"
  }, {
    "id" : "Leblanc",
    "key" : "7",
    "name" : "르블랑",
    "image" : "assets/img/champion/Leblanc.png"
  }, {
    "id" : "LeeSin",
    "key" : "64",
    "name" : "리 신",
    "image" : "assets/img/champion/LeeSin.png"
  }, {
    "id" : "Leona",
    "key" : "89",
    "name" : "레오나",
    "image" : "assets/img/champion/Leona.png"
  }, {
    "id" : "Lillia",
    "key" : "876",
    "name" : "릴리아",
    "image" : "assets/img/champion/Lillia.png"
  }, {
    "id" : "Lissandra",
    "key" : "127",
    "name" : "리산드라",
    "image" : "assets/img/champion/Lissandra.png"
  }, {
    "id" : "Lucian",
    "key" : "236",
    "name" : "루시안",
    "image" : "assets/img/champion/Lucian.png"
  }, {
    "id" : "Lulu",
    "key" : "117",
    "name" : "룰루",
    "image" : "assets/img/champion/Lulu.png"
  }, {
    "id" : "Lux",
    "key" : "99",
    "name" : "럭스",
    "image" : "assets/img/champion/Lux.png"
  }, {
    "id" : "Malphite",
    "key" : "54",
    "name" : "말파이트",
    "image" : "assets/img/champion/Malphite.png"
  }, {
    "id" : "Malzahar",
    "key" : "90",
    "name" : "말자하",
    "image" : "assets/img/champion/Malzahar.png"
  }, {
    "id" : "Maokai",
    "key" : "57",
    "name" : "마오카이",
    "image" : "assets/img/champion/Maokai.png"
  }, {
    "id" : "MasterYi",
    "key" : "11",
    "name" : "마스터 이",
    "image" : "assets/img/champion/MasterYi.png"
  }, {
    "id" : "Milio",
    "key" : "902",
    "name" : "밀리오",
    "image" : "assets/img/champion/Milio.png"
  }, {
    "id" : "MissFortune",
    "key" : "21",
    "name" : "미스 포츈",
    "image" : "assets/img/champion/MissFortune.png"
  }, {
    "id" : "MonkeyKing",
    "key" : "62",
    "name" : "오공",
    "image" : "assets/img/champion/MonkeyKing.png"
  }, {
    "id" : "Mordekaiser",
    "key" : "82",
    "name" : "모데카이저",
    "image" : "assets/img/champion/Mordekaiser.png"
  }, {
    "id" : "Morgana",
    "key" : "25",
    "name" : "모르가나",
    "image" : "assets/img/champion/Morgana.png"
  }, {
    "id" : "Naafiri",
    "key" : "950",
    "name" : "나피리",
    "image" : "assets/img/champion/Naafiri.png"
  }, {
    "id" : "Nami",
    "key" : "267",
    "name" : "나미",
    "image" : "assets/img/champion/Nami.png"
  }, {
    "id" : "Nasus",
    "key" : "75",
    "name" : "나서스",
    "image" : "assets/img/champion/Nasus.png"
  }, {
    "id" : "Nautilus",
    "key" : "111",
    "name" : "노틸러스",
    "image" : "assets/img/champion/Nautilus.png"
  }, {
    "id" : "Neeko",
    "key" : "518",
    "name" : "니코",
    "image" : "assets/img/champion/Neeko.png"
  }, {
    "id" : "Nidalee",
    "key" : "76",
    "name" : "니달리",
    "image" : "assets/img/champion/Nidalee.png"
  }, {
    "id" : "Nilah",
    "key" : "895",
    "name" : "닐라",
    "image" : "assets/img/champion/Nilah.png"
  }, {
    "id" : "Nocturne",
    "key" : "56",
    "name" : "녹턴",
    "image" : "assets/img/champion/Nocturne.png"
  }, {
    "id" : "Nunu",
    "key" : "20",
    "name" : "누누와 윌럼프",
    "image" : "assets/img/champion/Nunu.png"
  }, {
    "id" : "Olaf",
    "key" : "2",
    "name" : "올라프",
    "image" : "assets/img/champion/Olaf.png"
  }, {
    "id" : "Orianna",
    "key" : "61",
    "name" : "오리아나",
    "image" : "assets/img/champion/Orianna.png"
  }, {
    "id" : "Ornn",
    "key" : "516",
    "name" : "오른",
    "image" : "assets/img/champion/Ornn.png"
  }, {
    "id" : "Pantheon",
    "key" : "80",
    "name" : "판테온",
    "image" : "assets/img/champion/Pantheon.png"
  }, {
    "id" : "Poppy",
    "key" : "78",
    "name" : "뽀삐",
    "image" : "assets/img/champion/Poppy.png"
  }, {
    "id" : "Pyke",
    "key" : "555",
    "name" : "파이크",
    "image" : "assets/img/champion/Pyke.png"
  }, {
    "id" : "Qiyana",
    "key" : "246",
    "name" : "키아나",
    "image" : "assets/img/champion/Qiyana.png"
  }, {
    "id" : "Quinn",
    "key" : "133",
    "name" : "퀸",
    "image" : "assets/img/champion/Quinn.png"
  }, {
    "id" : "Rakan",
    "key" : "497",
    "name" : "라칸",
    "image" : "assets/img/champion/Rakan.png"
  }, {
    "id" : "Rammus",
    "key" : "33",
    "name" : "람머스",
    "image" : "assets/img/champion/Rammus.png"
  }, {
    "id" : "RekSai",
    "key" : "421",
    "name" : "렉사이",
    "image" : "assets/img/champion/RekSai.png"
  }, {
    "id" : "Rell",
    "key" : "526",
    "name" : "렐",
    "image" : "assets/img/champion/Rell.png"
  }, {
    "id" : "Renata",
    "key" : "888",
    "name" : "레나타 글라스크",
    "image" : "assets/img/champion/Renata.png"
  }, {
    "id" : "Renekton",
    "key" : "58",
    "name" : "레넥톤",
    "image" : "assets/img/champion/Renekton.png"
  }, {
    "id" : "Rengar",
    "key" : "107",
    "name" : "렝가",
    "image" : "assets/img/champion/Rengar.png"
  }, {
    "id" : "Riven",
    "key" : "92",
    "name" : "리븐",
    "image" : "assets/img/champion/Riven.png"
  }, {
    "id" : "Rumble",
    "key" : "68",
    "name" : "럼블",
    "image" : "assets/img/champion/Rumble.png"
  }, {
    "id" : "Ryze",
    "key" : "13",
    "name" : "라이즈",
    "image" : "assets/img/champion/Ryze.png"
  }, {
    "id" : "Samira",
    "key" : "360",
    "name" : "사미라",
    "image" : "assets/img/champion/Samira.png"
  }, {
    "id" : "Sejuani",
    "key" : "113",
    "name" : "세주아니",
    "image" : "assets/img/champion/Sejuani.png"
  }, {
    "id" : "Senna",
    "key" : "235",
    "name" : "세나",
    "image" : "assets/img/champion/Senna.png"
  }, {
    "id" : "Seraphine",
    "key" : "147",
    "name" : "세라핀",
    "image" : "assets/img/champion/Seraphine.png"
  }, {
    "id" : "Sett",
    "key" : "875",
    "name" : "세트",
    "image" : "assets/img/champion/Sett.png"
  }, {
    "id" : "Shaco",
    "key" : "35",
    "name" : "샤코",
    "image" : "assets/img/champion/Shaco.png"
  }, {
    "id" : "Shen",
    "key" : "98",
    "name" : "쉔",
    "image" : "assets/img/champion/Shen.png"
  }, {
    "id" : "Shyvana",
    "key" : "102",
    "name" : "쉬바나",
    "image" : "assets/img/champion/Shyvana.png"
  }, {
    "id" : "Singed",
    "key" : "27",
    "name" : "신지드",
    "image" : "assets/img/champion/Singed.png"
  }, {
    "id" : "Sion",
    "key" : "14",
    "name" : "사이온",
    "image" : "assets/img/champion/Sion.png"
  }, {
    "id" : "Sivir",
    "key" : "15",
    "name" : "시비르",
    "image" : "assets/img/champion/Sivir.png"
  }, {
    "id" : "Skarner",
    "key" : "72",
    "name" : "스카너",
    "image" : "assets/img/champion/Skarner.png"
  }, {
    "id" : "Smolder",
    "key" : "901",
    "name" : "스몰더",
    "image" : "assets/img/champion/Smolder.png"
  }, {
    "id" : "Sona",
    "key" : "37",
    "name" : "소나",
    "image" : "assets/img/champion/Sona.png"
  }, {
    "id" : "Soraka",
    "key" : "16",
    "name" : "소라카",
    "image" : "assets/img/champion/Soraka.png"
  }, {
    "id" : "Swain",
    "key" : "50",
    "name" : "스웨인",
    "image" : "assets/img/champion/Swain.png"
  }, {
    "id" : "Sylas",
    "key" : "517",
    "name" : "사일러스",
    "image" : "assets/img/champion/Sylas.png"
  }, {
    "id" : "Syndra",
    "key" : "134",
    "name" : "신드라",
    "image" : "assets/img/champion/Syndra.png"
  }, {
    "id" : "TahmKench",
    "key" : "223",
    "name" : "탐 켄치",
    "image" : "assets/img/champion/TahmKench.png"
  }, {
    "id" : "Taliyah",
    "key" : "163",
    "name" : "탈리야",
    "image" : "assets/img/champion/Taliyah.png"
  }, {
    "id" : "Talon",
    "key" : "91",
    "name" : "탈론",
    "image" : "assets/img/champion/Talon.png"
  }, {
    "id" : "Taric",
    "key" : "44",
    "name" : "타릭",
    "image" : "assets/img/champion/Taric.png"
  }, {
    "id" : "Teemo",
    "key" : "17",
    "name" : "티모",
    "image" : "assets/img/champion/Teemo.png"
  }, {
    "id" : "Thresh",
    "key" : "412",
    "name" : "쓰레쉬",
    "image" : "assets/img/champion/Thresh.png"
  }, {
    "id" : "Tristana",
    "key" : "18",
    "name" : "트리스타나",
    "image" : "assets/img/champion/Tristana.png"
  }, {
    "id" : "Trundle",
    "key" : "48",
    "name" : "트런들",
    "image" : "assets/img/champion/Trundle.png"
  }, {
    "id" : "Tryndamere",
    "key" : "23",
    "name" : "트린다미어",
    "image" : "assets/img/champion/Tryndamere.png"
  }, {
    "id" : "TwistedFate",
    "key" : "4",
    "name" : "트위스티드 페이트",
    "image" : "assets/img/champion/TwistedFate.png"
  }, {
    "id" : "Twitch",
    "key" : "29",
    "name" : "트위치",
    "image" : "assets/img/champion/Twitch.png"
  }, {
    "id" : "Udyr",
    "key" : "77",
    "name" : "우디르",
    "image" : "assets/img/champion/Udyr.png"
  }, {
    "id" : "Urgot",
    "key" : "6",
    "name" : "우르곳",
    "image" : "assets/img/champion/Urgot.png"
  }, {
    "id" : "Varus",
    "key" : "110",
    "name" : "바루스",
    "image" : "assets/img/champion/Varus.png"
  }, {
    "id" : "Vayne",
    "key" : "67",
    "name" : "베인",
    "image" : "assets/img/champion/Vayne.png"
  }, {
    "id" : "Veigar",
    "key" : "45",
    "name" : "베이가",
    "image" : "assets/img/champion/Veigar.png"
  }, {
    "id" : "Velkoz",
    "key" : "161",
    "name" : "벨코즈",
    "image" : "assets/img/champion/Velkoz.png"
  }, {
    "id" : "Vex",
    "key" : "711",
    "name" : "벡스",
    "image" : "assets/img/champion/Vex.png"
  }, {
    "id" : "Vi",
    "key" : "254",
    "name" : "바이",
    "image" : "assets/img/champion/Vi.png"
  }, {
    "id" : "Viego",
    "key" : "234",
    "name" : "비에고",
    "image" : "assets/img/champion/Viego.png"
  }, {
    "id" : "Viktor",
    "key" : "112",
    "name" : "빅토르",
    "image" : "assets/img/champion/Viktor.png"
  }, {
    "id" : "Vladimir",
    "key" : "8",
    "name" : "블라디미르",
    "image" : "assets/img/champion/Vladimir.png"
  }, {
    "id" : "Volibear",
    "key" : "106",
    "name" : "볼리베어",
    "image" : "assets/img/champion/Volibear.png"
  }, {
    "id" : "Warwick",
    "key" : "19",
    "name" : "워윅",
    "image" : "assets/img/champion/Warwick.png"
  }, {
    "id" : "Xayah",
    "key" : "498",
    "name" : "자야",
    "image" : "assets/img/champion/Xayah.png"
  }, {
    "id" : "Xerath",
    "key" : "101",
    "name" : "제라스",
    "image" : "assets/img/champion/Xerath.png"
  }, {
    "id" : "XinZhao",
    "key" : "5",
    "name" : "신 짜오",
    "image" : "assets/img/champion/XinZhao.png"
  }, {
    "id" : "Yasuo",
    "key" : "157",
    "name" : "야스오",
    "image" : "assets/img/champion/Yasuo.png"
  }, {
    "id" : "Yone",
    "key" : "777",
    "name" : "요네",
    "image" : "assets/img/champion/Yone.png"
  }, {
    "id" : "Yorick",
    "key" : "83",
    "name" : "요릭",
    "image" : "assets/img/champion/Yorick.png"
  }, {
    "id" : "Yuumi",
    "key" : "350",
    "name" : "유미",
    "image" : "assets/img/champion/Yuumi.png"
  }, {
    "id" : "Zac",
    "key" : "154",
    "name" : "자크",
    "image" : "assets/img/champion/Zac.png"
  }, {
    "id" : "Zed",
    "key" : "238",
    "name" : "제드",
    "image" : "assets/img/champion/Zed.png"
  }, {
    "id" : "Zeri",
    "key" : "221",
    "name" : "제리",
    "image" : "assets/img/champion/Zeri.png"
  }, {
    "id" : "Ziggs",
    "key" : "115",
    "name" : "직스",
    "image" : "assets/img/champion/Ziggs.png"
  }, {
    "id" : "Zilean",
    "key" : "26",
    "name" : "질리언",
    "image" : "assets/img/champion/Zilean.png"
  }, {
    "id" : "Zoe",
    "key" : "142",
    "name" : "조이",
    "image" : "assets/img/champion/Zoe.png"
  }, {
    "id" : "Zyra",
    "key" : "143",
    "name" : "자이라",
    "image" : "assets/img/champion/Zyra.png"
  } ];

  getChampions() {
    return this.champions;
  }
}
