const menuList = {
    kitchen: {
        1: {
            name: "Домашние оливки",
            price: 450,
        },
        2: {
            name: "Пряные томаты с горьким шоколадом и кинзой",
            price: 450,
        },
        3: {
            name: "Севиче из тунца с клубничным пюре",
            price: 650,
        },
        4: {
            name: "Ассорти из трёх сыров",
            price: 650,
        },
        5: {
            name: "Утиная грудка со сливочным чили",
            price: 550,
        },
        6: {
            name: "Креветки с битым ананасом на кокосовой подушке",
            price: 650,
        },
        7: {
            name: "Утиные бале с соленым арахисом",
            price: 450,
        },
    },
    cocktails: {
        1: {
            name: "Блэк Си",
            price: 600,
            description: "водка, груша, белое вино, фейхоа"
        },
        2: {
            name: "Озеро Цветов",
            price: 600,
            description: "джин, листья лайма, черемуха, белое вино, кокос"
        },
        3: {
            name: "Сицилийский Сауэр",
            price: 600,
            description: "джин, красный апельсин, абрикос"
        },
        4: {
            name: "Азиатский Бисквит",
            price: 600,
            description: "водка, пандан, фундук, маракуйя"

        },
        5: {
            name: "Травяной Тоффи",
            price: 600,
            description: "ром, эстрагон, фейхоа, слива, миндаль"
        },
        6: {
            name: "Сансет Панч",
            price: 600,
            description: "ром, миндаль, клубника"
        },
        7: {
            name: "Барбара Физз",
            price: 600,
            description: "джин, бузина, дыня, барбарис, кардамон"
        },
        8: {
            name: "Клубничный Американо",
            price: 600,
            description: "сладкий вермут, цитрусовый горький аперитив, земляничный аперитив, клубника"
        },
        9: {
            name: "Малиновый 75",
            price: 600,
            description: "водка, малина, черная смородина, йогурт, игристое"
        },
        10: {
            name: "Редондо Тини",
            price: 600,
            description: "белое вино, персик, грейпфрут, пер се, белая горечь"
        },
        11: {
            name: "Адонис 2.0",
            price: 600,
            description: "сухой вермут, херес крим, херес ореанда, черная смородина, ферне"
        },
        12: {
            name: "Грушевый Негрони",
            price: 600,
            description: "джин, сухой вермут, груша, горечь"
        },
    },
    wine: {
        white: {
            items: {
                1: {
                    name: "Pago Casa Gran",
                    price: 450,
                    description: "Falcata / Valencia, Spain"
                },
                2: {
                    name: "Cantina Marilina",
                    price: 550,
                    description: "Currivu Bianco / Sicilia, Italy"
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
            },
            name: "Белое",
        },
        red: {
            items: {
                1: {
                    name: "Primitivo Salento",
                    price: 500,
                    description: "Piuma / Puglia, Italy"
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
            },
            name: "Красное",
        },
        bubles: {
            items: {
                1: {
                    name: "Bio Bio Bubbles",
                    price: 400,
                    description: "Cielo / Sicilia, Italy"
                },
                2: {
                    name: "Cremant",
                    price: 500,
                    description: "Andre Delorme / Bourgogne, France"
                },
            },
            name: "Игристое",
        }
    },

    hard: {
        vodka: {
            items: {
                1: {
                    name: "TselovalnikЪ",
                    price: 350,
                },
                2: {
                    name: "J.J. Whitley rtisanal",
                    price: 200,
                },
                3: {
                    name: "Tsarskaja Flavors",
                    price: 200,
                },
            },
            name: "Водка 40 мл.",
        },
        tequila: {
            items: {
                1: {
                    name: "Dead Man's Fingers Reposado",
                    price: 330,
                },
                2: {
                    name: "Sauza Silver",
                    price: 390,
                },
            },
            name: "Текила 40 мл.",
        },
        mezcal: {
            items: {
                1: {
                    name: "Noble Coyote Espadin",
                    price: 600,
                },
            },
            name: "Мескаль 40 мл.",
        },
        gin: {
            items: {
                1: {
                    name: "J.J. Whitley Gin",
                    price: 250,
                },
                2: {
                    name: "Barrister B47 Bartender’s Edition",
                    price: 300,
                },
                3: {
                    name: "Malfy Rosa",
                    price: 500,
                },
                4: {
                    name: "Malfy Con Arancia",
                    price: 500,
                },
            },
            name: "Джин 40 мл.",
        },
        whisky: {
            items: {
                1: {
                    name: "Bakhall Sweet Mash Grain",
                    price: 400,
                },
                2: {
                    name: "Samuel Gelston’s Pot Still",
                    price: 400,
                },
            },
            name: "Виски 40 мл.",
        },
        rum: {
            items: {
                1: {
                    name: "Dead Man's Fingers White",
                    price: 350,
                },
                2: {
                    name: "Dead Man's Fingers Black",
                    price: 350,
                },
                3: {
                    name: "Arcane Extra Aroma 12YO",
                    price: 550,
                },
            },
            name: "Ром 40 мл.",
        },
        bitters: {
            items: {
                1: {
                    name: "Campari",
                    price: 500,
                },
                2: {
                    name: "Aperol",
                    price: 400,
                },
                3: {
                    name: "Fernet Branca",
                    price: 550,
                },
                4: {
                    name: "Ligare",
                    price: 300,
                },
                5: {
                    name: "Amaro Lucano",
                    price: 450,
                },
                6: {
                    name: "Amaro Ulrich",
                    price: 500,
                },
                7: {
                    name: "Amaro Montenegro",
                    price: 550,
                },
                8: {
                    name: "Amaro Abano Dry",
                    price: 350,
                },
                9: {
                    name: "Luxardo Bitter Bianco",
                    price: 350,
                },
                10: {
                    name: "Luxardo Fernet",
                    price: 350,
                },
               
            },
            name: "АМАРО | ГОРЕЧИ 40 мл.",
        },
        vermut: {
            items: {
                1: {
                    name: "Lustau Macarena Manzanilla DO",
                    price: 500,
                },
                2: {
                    name: "Candela Cream",
                    price: 500,
                },
                3: {
                    name: "Lustau Vina 25 Pedro Ximenez",
                    price: 550,
                },
                4: {
                    name: "Dolin Dry",
                    price: 500,
                },
                5: {
                    name: "Dolin Rouge",
                    price: 500,
                },
                6: {
                    name: "Dolin Chamberyzette Fraise",
                    price: 500,
                },
                7: {
                    name: "Lustau La Ina Blanco",
                    price: 500,
                },
                8: {
                    name: "Byrrh Grand Quinquina",
                    price: 600,
                },
            },
            name: "ВЕРМУТЫ | КРЕПЛЕНЫЕ ВИНА 60мл.",
        },
    },
    beer: {
        beer: {
            items: {
                1: {
                    name: "Пиво",
                    price: 400,
                },
                2: {
                    name: "Сидр",
                    price: 400,
                },
            },
            name: "",
        },
        withoutalcohol: {
            items: {
                1: {
                    name: "Лимонад",
                    price: 250,
                },
                2: {
                    name: "Кофе",
                    price: 250,
                },
                3: {
                    name: "тоник",
                    price: 300,
                },
            },
            name: "Безалкогольное"
        },
        withoutalcoholcocktails: {
            items: {
                1: {
                    name: "Сансет Панч Б/А",
                    price: 400,
                },
                2: {
                    name: "Майнау Б/А",
                    price: 400,
                },
            },
            name: "Безалкогольные коктейли"
        },
        withoutalcoholwine: {
            items: {
                1: {
                    name: "Hans Baer Riesling",
                    price: 400,
                },
            },
            name: "Безалкогольное вино"
        }
    },
}

export default menuList;