const menuList = {
    kitchen: {
        1: {
            name: "пряные оливки",
            price: 450,
        },
        2: {
            name: "французский козий сыр / грушевый соус",
            price: 500,
        },
        3: {
            name: "маринованные черри / крем Маракуйя",
            price: 500,
        },
        4: {
            name: "ростбиф из утки / соус Сливочный чили / соус Бри",
            price: 600,
        },
        5: {
            name: "севиче из тунца / азиатский дрессинг",
            price: 700,
        },
        6: {
            name: "жареные креветки / сливочно- кокосовый мусс / соус Курозу / чиабатта",
            price: 700,
        },
        7: {
            name: "утиный паштет / белый шоколад / варенье из красной смородины / чиабатта",
            price: 700,
        },
    },
    coctails: {
        1: {
            name: "Toffee",
            price: 600,
            description: "ром, эстрагон, фейхоа, слива, миндаль"
        },
        2: {
            name: "Sunset Punch",
            price: 600,
            description: "ром, миндаль, клубника, земляника"
        },
        3: {
            name: "Melon Fizz",
            price: 600,
            description: "джин, бузина, дыня, виноград"
        },
        4: {
            name: "Strawberry Americano",
            price: 600,
            description: "сладкий вермут, цитрусовый горький аперитив, земляничный аперитив, клубника, игристое"

        },
        5: {
            name: "Raspberry 75",
            price: 600,
            description: "водка, малина, йогурт, игристое"
        },
        6: {
            name: "Walnut Porto Ronco",
            price: 600,
            description: "ром, красное вино, орех, цветочный аперитив"
        },
        7: {
            name: "Adonis 2.0",
            price: 600,
            description: "сухой вермут, херес крим, херес ореанда, черная смородина, ферне"
        },
        8: {
            name: "pear Negroni",
            price: 600,
            description: "джин, сухой вермут, белая горечь, груша"
        },
    },
    wine: {
        white: {
            1: {
                name: "Currivu Bianco",
                price: 450,
                description: "Cantina Marilina / Sicilia, Italy"
            },
            2: {
                name: "Falcata",
                price: 550,
                description: "Pago Casa Gran / Valencia, Spain"
            },
            3: {
                name: "Riesling Venture",
                price: 600,
                description: "Georg Breuer / Rheingau, Germany"
            },
            4: {
                name: "Gruner Veltliner",
                price: 500,
                description: "Schneider / Thermenregion, Austria"
            },
            5: {
                name: "Melon Fizz",
                price: 600,
                description: "джин, бузина, дыня, виноград"
            },
        },
        red: {
            1: {
                name: "Piuma Primitivo",
                price: 500,
                description: "Vini manduria / Puglia, Italyь"
            },
            2: {
                name: "Raisin de Loup",
                price: 550,
                description: "Domaine de Marcoux / Rhone, France"
            },
            3: {
                name: "En La Parra",
                price: 450,
                description: "Bodega Nodus / Valencia, Spain"
            },
            4: {
                name: "Zweigelt",
                price: 500,
                description: "Schneider / Thermenregion, Austria"
            },
        }
    },
    bubles: {
        1: {
            name: "Bio Bio Bubbles",
            price: 400,
            description: "Cielo / Sicilia, Italy"
        },
        2: {
            name: "Cremant",
            price: 650,
            description: "Andre Delorme / Bourgogne, France"
        },
    },
    hard: {
        vodka: {
            1: {
                name: "Tselovalnikъ",
                price: 290,
            },
            2: {
                name: "J.J. Whitley rtisanal Vodka",
                price: 190,
            },
            3: {
                name: "Melon Fizz",
                price: 600,
                description: "джин, бузина, дыня, виноград"
            },
        },
            tequila: {
                1: {
                    name: "Dead Man's Fingers Reposado",
                    price: 330,
                },
                2: {
                    name: "Sauza Silver",
                    price: 390,
                },
            },
        gin: {
            1: {
                name: "J.J. Whitley Gin",
                price: 250,
            },
            2: {
                name: "Roku Japanese Craft Gin",
                price: 490,
            },
            3: {
                name: "Malfy Rosa",
                price: 490,
            },
            4: {
                name: "Malfy Con Arancia",
                price: 490,
            },
            5: {
                name: "Sipsmith London Dry Gin",
                price: 590,
            },
        },
        whisky: {
            1: {
                name: "Bakhall Sweet Mash Grain Whiskey",
                price: 390,
            },
            2: {
                name: "Makers Mark",
                price: 550,
            },
            3: {
                name: "Jim Beam Rye",
                price: 490,
            },
            4: {
                name: "Samuel Gelston’s Pot Still",
                price: 390,
            },
            5: {
                name: "The Famous Grouse",
                price: 330,
            },
            6: {
                name: "Naked Mal",
                price: 590,
            },
            7: {
                name: "The Macallan Triple Cask 12 YO",
                price: 990,
            },
            8: {
                name: "Auchentoshan American OAK",
                price: 550,
            },
        },
        rum: {
            1: {
                name: "Dead Man's Fingers White",
                price: 350,
            },
            2: {
                name: "Dead Man's Fingers Black",
                price: 350,
            },
            3: {
                name: "Brugal 1888",
                price: 650,
            },
            4: {
                name: "Arcane Extra Aroma 12 YO",
                price: 550,
            },
        },
        cognac: {
            1: {
                name: "Courvoisier VS",
                price: 690,
            },
        },
        bitters: {
            1: {
                name: "Fernet Branca",
                price: 550,
            },
            2: {
                name: "Amaro Lucano",
                price: 490,
            },
            3: {
                name: "Amaro Montenegro",
                price: 490,
            },
            4: {
                name: "Amaro Abano Dry",
                price: 350,
            },
        },
        vermut: {
            1: {
                name: "Candela Cream",
                price: 490,
            },
            2: {
                name: "Lustau Vina 25 Pedro Ximenez",
                price: 550,
            },
            3: {
                name: "Cinzano Extra Dry",
                price: 330,
            },
            4: {
                name: "Cinzano Rosso",
                price: 330,
            },
            5: {
                name: "Cinzano Bianco",
                price: 330,
            },
            6: {
                name: "Dolin Dry",
                price: 390,
            },
            7: {
                name: "Dolin Chamberyzette Fraise",
                price: 390,
            },
            8: {
                name: "Lustau La Ina Blanco",
                price: 490,
            },
        },
    },
    beer: {
        1: {
            name: "Konix Munich Helles (лагер)",
            price: 400,
        },
        2: {
            name: "Schneider Weisse Tap 7 (пшеничное",
            price: 400,
        },
        3: {
            name: "Konix Overfall (ипа)",
            price: 400,
        },
        4: {
            name: "Konix Crazy Moose (апа",
            price: 400,
        },
        5: {
            name: "Konix Ice cream plombeer (портер)",
            price: 400,
        },
        6: {
            name: "Konix Ma Chere Framboise (малиновое)",
            price: 400,
        },
        7: {
            name: "Konix Mary, go home (томатное)",
            price: 400,
        },
        8: {
            name: "Costa Verde Spanish dry cider (сидр)",
            price: 400,
        },
    },
    bottles: {
        1: {
            name: "Riesling Qvinterra (Riesling) Kuhling Gillot / Rheinhessen, Germany", //white
            price: 4900,
            description: "«Точно понравится! Тонкое, свежее, минеральное. Чуть солоноватое и по-женски мягкое»"
        },
        2: {
            name: "Chablis (Chardonnay) Domaine Oudin / Burgundy, France",
            price: 6800,
            description: "«Округлое, сливочное, травянистое, на желтых фруктах, слегка пряное. Белое среднетелое вино от двух сестер»"
        },
        3: {
            name: "Sancerre (Sauvignon Blanc) Claude Riffault Les Boucauds / Loire, France",
            price: 8500,
            description: "«Молодой винодел, ручной сбор урожая! С фруктово-цитрусовыми акцентами и пикантной кислинкой в сдержанном послевкусии»"
        },
        4: {
            name: "Les Argiles (Chenin Blanc) Francois Chidaine / Loire, France",
            price: 9000,
            description: "«Персики и ваниль! Слегка пороховой и аристократичный. Золото в бокале, не иначе!»"

        },
        5: {
            name: "Chardonnay (Chardonnay) Fanny Sabre / Burgundy, France",
            price: 10000,
            description: "«От женщины-винодела. Тонко, элегантно и изящно. Произведено традиционным методом бургундского виноделия»"
        },
        6: {
            name: "Clima (Local) Vale da Capucha / Lisboa, Portugal", // red
            price: 4500,
            description: "«Пряное и мягкое, с легким землистым мотивом. Специи, джем, клубника и полное наслаждение!»"
        },
        7: {
            name: "Ginestreto Rosso (Merlot, Sangiovese) Poggiosecco / Toscana, Italy",
            price: 4500,
            description: "«Чистое и ясное, с нотками чернослива и острой лакрицы. Мягкие танины, длинные на вкус, в конце сухие»"
        },
        8: {
            name: "TN Tinto Natural (Tempranillo, Sumoll, Bobal) Partida Creus / Penedes, Spain",
            price: 6000,
            description: "«Пара бывших архитекторов создает натуральное вино по принципу невмешательства. Чудное вино для любителей диких деревенских ноток»"
        },
        9: {
            name: "Le Fioraie (Sangiovese, Colorino, Canaiolo) Chianti Clasico / Toscana, Italy",
            price: 6000,
            description: "«Интересно! Ноты фиалки, спелой вишни, гвоздики и молотого кофе. Идеально в паре с нашим паштетом!»"
        },
        10: {
            name: "Le Marmot (Merlot, Cabernet Franc, Cabernet Sauvignon) Chateau La Brande / Bordeaux, France",
            price: 6900,
            description: "«Насыщенное, медитативное с округлым шелковистым вкусом. В аромате подлесок, ежевика и смородина»"
        },
        11: {
            name: "DD Arbois (Poulsard, Trousseau, Pinot Noir) Benedicte & Stephane Tissot / Jura, France",
            price: 9000,
            description: "«Живое и натуральное вино. Каждая бутылка — индивидуальна. Вино с любовью и страстью от мужа и жены Тиссо!»"
        },
        12: {
            name: "Pommard (Pinot Noir) Fanny Sabre / Burgundy, France",
            price: 14000,
            description: "«От женщины-винодела! Малина, вишня, черный перец. Традиция в одном бокале с современностью. You`d better try it!»"
        },
        13: {
            name: "PetNat Frizzy POP (Pinot Nero, Pinot bianco, Durellа) L`Armonia / Veneto, Italy", //pentats
            price: 5000,
            description: "«Диковато! Своеобразно! Дрожжевые нотки, грейпфрут с цитрусами, мармелад и сушеные ягоды. Блеск и веселое послевкусие!»"
        },
        14: {
            name: "Upupa Epops (Sangiovese, Colorino, Canaiolo) Clos Fremur / Loire, France",
            price: 5500,
            description: "«Очень вкусно, правда! Джем с клубникой и пончики! Антони Робэн не производит вино, а сопровождает виноград от лозы до ваших губ!»"
        },
        15: {
            name: "Rose Touraine (Grolleau, Pinot Noir, Gamay) Francois Chidaine / Loire, France", //pink
            price: 5000,
            description: "«Энергичное, но мягкое! Колоритное и сливочное. Ноты свежей груши, крыжовника и клубники. Тонкая минеральность и шелковистая текстура. (Гролло, Пино нуар, Гаме)»"
        },
        16: {
            name: "Cava L'Atzar (Macabeo, Xarel-lo, Pinot Noir) Moli Dels Capellans / Catalunya, Spain", //bubles
            price: 4000,
            description: "«Изящная биодинамика от двух друзей из Испании. Пьем и улыбаемся хорошей компании»"
        },
        17: {
            name: "Bubbly Rose Cremant (Merlot) Monicord / Bordeaux, France", 
            price: 5000,
            description: "«Легкий аромат дикой клубники и белого персика. Вся семья участвует в производстве. Родители — вино. Дочь — этикетки»"
        },
        18: {
            name: "Cremant de Bourgogne (Chardonnay, Pinot Noir) Rene Lamy / Bourgogne, France", 
            price: 5500,
            description: "«Нежность сливочного масла и стойкое послевкусие. Французский классический белый креман сухого сорта. Отлично в сочетании со страчателлой!»"
        },
        19: {
            name: "Cremant (Chardonnay, Pinot Noir) Benedicte et Stephane Tissot / Jura, France", 
            price: 7000,
            description: "«Крутая бутылка из региона Жюра. Тонкое, булочное с таинственной кислотностью. Даже напоминает шампанское»"
        },
        20: {
            name: "Cuvée Tradition (Chardonnay, Pinot Noir, Meunier) M. Hostomme / Champagne, France", //pentats
            price: 9000,
            description: "«Дорого, сложно, вкусно! Шампанское с кремовой текстурой и нотками персика, ореха и кондитерских изделий»"
        },
        21: {
            name: "Metisse Noirs & Blancs (Pinot Noir, Pinot Blanc) Olivier Horiot / Champagne, France",
            price: 14000,
            description: "«Легкий аромат дикой клубники и белого персика. Вся семья участвует в производстве. Родители — вино. Дочь — этикетки»"
        },
    }
}

export default menuList;