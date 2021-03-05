// Products' initialization
let allProducts = {
    fruitsVegetablesObj: {},
    bakeryObj: {},
    beveragesObj: {},
    beautyHygieneObj: {},
    babyCareObj: {}
};

allProducts.fruitsVegetablesObj.kiwi =
{
    title: 'Fresho Kiwi - Green, 3 pcs',
    imgSrc: 'fruit-n-veg/kiwi-green.jpg',
    imgAlt: 'Fresho Kiwi - Green, 3 pcs logo',
    imgLabel: 'kiwiGreen',
    pDesc: `Kiwis are oval shaped with a brownish outer skin. The flesh is
    bright green and juicy with tiny, edible black seeds.`,
    priceText: 'MRP Rs.87'
}

allProducts.fruitsVegetablesObj.apple = {
    title: 'Apple - Washington, Regular, 4 pcs',
    imgSrc: 'fruit-n-veg/apple.jpg',
    imgAlt: 'Apple - Washington, Regular, 4 pcs logo',
    imgLabel: 'apple',
    pDesc: `The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a
    natural source of fibre and are fat free.`,
    priceText: 'MRP Rs.187'
}

allProducts.fruitsVegetablesObj.pomegranate = {
    title: 'Fresho Pomegrante Peeled, 500 gm',
    imgSrc: 'fruit-n-veg/pomegrante.jpg',
    imgAlt: 'Apple - Washington, Regular, 4 pcs logo',
    imgLabel: 'pomegrante',
    pDesc: `Pomegranate variety has a glossy, vibrant and soft ruby-red
    skin. The inside of the fruit is divided into compartments by
    thin white membranes.`,
    priceText: 'MRP Rs.88'
}

allProducts.fruitsVegetablesObj.capsicum = {
    title: 'Capsicum - Green, 1 kg',
    imgSrc: 'fruit-n-veg/capsicum-green.jpg',
    imgAlt: 'Capsicum - Green, 1 kg logo',
    imgLabel: 'capsicum',
    pDesc: `Leaving a moderately pungent taste on the tongue, Green
    capsicums, also known as green peppers are bell shaped,
    medium-sized fruit pods.`,
    priceText: 'MRP Rs.137'
}

allProducts.fruitsVegetablesObj.tomato = {
    title: 'Tomato - Local, Organically Grown, 500 gm',
    imgSrc: 'fruit-n-veg/tomato.jpg',
    imgAlt: 'Tomato - Local, Organically Grown, 500 gm logo',
    imgLabel: 'tomato',
    pDesc: `Fresho brings to you an exquisite range of locally grown organic
    tomatoes, which are now available at bigbasket. These organic
    tomatoes are free from harmful pesticides and insecticides.`,
    priceText: 'MRP Rs.12'
}

allProducts.bakeryObj.bread = {
    title: 'Sandwich Bread - White, Chemical Free, 400 gm',
    imgSrc: 'bakery-cakes-dairy/bread.jpg',
    imgAlt: 'Sandwich Bread - White, Chemical Free, 400 gm logo',
    imgLabel: 'sandwich',
    pDesc: `Freshly Baked bread is one of lifes greatest simple pleasures
    and at Bigbasket we decided to give you just that. We start
    baking our breads once you order using the finest ingredients
    available.`,
    priceText: 'MRP Rs.32'
}
allProducts.bakeryObj.paneer = {
    title: 'Organic Fresh Paneer, 200 gm',
    imgSrc: 'bakery-cakes-dairy/paneer.jpg',
    imgAlt: 'Organic Fresh Paneer, 200 gm logo',
    imgLabel: 'paneer',
    pDesc: ` Freshly Baked bread is one of lifes greatest simple pleasures
    and at Bigbasket we deFresho Organic Milk is sourced from farms
    that have been certified organic for over 8 years. All feed is
    naturally grown with no pesticides or fertilizers.`,
    priceText: 'MRP Rs.98'
}
allProducts.bakeryObj.yogurtBlue = {
    title: ' Epigamia Greek Yogurt - Blueberry, 90 gm Cup',
    imgSrc: 'bakery-cakes-dairy/yogurt-blue.jpg',
    imgAlt: 'Epigamia Greek Yogurt - Blueberry, 90 gm Cup logo',
    imgLabel: 'blueberryYogurt',
    pDesc: ` Epigama means in Ancient Greek meant a way to Formalize the
    relationship between different nations. Epigamia greek yogurt is
    one of the most authentic yoghurts which advocates a healthy
    lifestyle with delicious taste. An excellent source of protein
    without the added fat.`,
    priceText: 'MRP Rs.40'
}
allProducts.bakeryObj.yogurtRed = {
    title: 'Epigamia Greek Yogurt - Strawberry, 90 gm',
    imgSrc: 'bakery-cakes-dairy/yogurt-red.jpg',
    imgAlt: 'Epigamia Greek Yogurt - Strawberry, 90 gm logo',
    imgLabel: 'strawberryYogurt',
    pDesc: `Low Fat and High protein delicious and thick Greek Yogurt.`,
    priceText: 'MRP Rs.40'
}

allProducts.beveragesObj.bournvita = {
    title: 'Bournvita Pro-Health Drink - Chocolate, 2x750 gm',
    imgSrc: 'beverages/bournvita.jpg',
    imgAlt: 'Bournvita Pro-Health Drink - Chocolate, 2x750 gm logo',
    imgLabel: 'bournitaChocolateDrink',
    pDesc: `Cadbury Bournvita is a delicious chocolate health drink which is
    enriched with Vitamin (D,B2,B9,B12). It combines the great taste
    of chocolate, and goodness of essential nutrients that aid
    growth and development.`,
    priceText: 'MRP Rs.572'
}
allProducts.beveragesObj.coke = {
    title: 'Coca Cola Soft Drink, 2x1.75 L',
    imgSrc: 'beverages/coke.jpg',
    imgAlt: 'Coca Cola Soft Drink, 2x1.75 L logo',
    imgLabel: 'cocaCola',
    pDesc: `Cadbury Bournvita is a delicious chocolate health drink which is
    enriched with Vitamin (D,B2,B9,B12). It combines the great taste
    of chocolate, and goodness of essential nutrients that aid
    growth and development.`,
    priceText: 'MRP Rs.150'
}
allProducts.beveragesObj.redLabel = {
    title: 'Red Label Tea, 500 gm Carton',
    imgSrc: 'beverages//red-label.jpg',
    imgAlt: 'Red Label Tea, 500 gm Carton logo',
    imgLabel: 'labelTea',
    pDesc: `Brooke Bond Red Label is one of Indias largest selling packaged
    tea brands. Brooke Bond Red Label Tea is a blend CTC tea with
    best quality leaves.`,
    priceText: 'MRP Rs.205'
}
allProducts.beveragesObj.tataTea = {
    title: 'Tata Tea Gold Leaf Tea, 500 gm',
    imgSrc: 'beverages/tata-tea.jpg',
    imgAlt: 'Tata Tea Gold Leaf Tea, 500 gm logo',
    imgLabel: 'goldLeafTea',
    pDesc: `Tata Tea Gold is a unique blend of fine Assam tea leaves with
    special 15% long leaf.`,
    priceText: 'MRP Rs.165'
}

allProducts.beautyHygieneObj.closeup = {
    title: 'Close Up Ever Fresh Red Hot Gel Toothpaste, 150 gm',
    imgSrc: 'beauty-hygiene/closeup.jpg',
    imgAlt: 'Close Up Ever Fresh Red Hot Gel Toothpaste, 150 gm logo',
    imgLabel: 'closeUpToothPaste',
    pDesc: `Closeup's unique Active Zinc Mouthwash not only cleans deep
    corners of your mouth of residual germs it also gives you upto
    12 Hours Fresh Breath.`,
    priceText: 'MRP Rs.82'
}
allProducts.beautyHygieneObj.tissues = {
    title: 'Premier Facial Tissue - Special, 400 pcs',
    imgSrc: 'beauty-hygiene/tissues.jpg',
    imgAlt: 'Premier Facial Tissue - Special, 400 pcs logo',
    imgLabel: 'facialTissue',
    pDesc: `Let your beautiful face stay clean Here Premier Special Face
    Tissues are available, mostly prepared targeting to care for
    your face which has spongy and delicate skin.`,
    priceText: 'MRP Rs.270'
}
allProducts.beautyHygieneObj.dove = {
    title: `Dove Intense Repair Shampoo 650ml + Bathing Bar Soap Cream Beauty
    100G Pack of 3`,
    imgSrc: 'beauty-hygiene/dove.jpg',
    imgAlt: 'Dove Intense Repair Shampoo 650ml + Bathing Bar Soap Cream Beauty 100G Pack of 3 logo',
    imgLabel: 'doveShampoo',
    pDesc: `Dove Cream Beauty Bar combines a gentle cleansing formula with Doves signature 1/4 moisturizing cream to give you softer,
    smoother and more glowing skin.`,
    priceText: 'MRP Rs.622'
}
allProducts.beautyHygieneObj.listerine = {
    title: 'Listerine Mouthwash - Cool Mint, 250 ml',
    imgSrc: 'beauty-hygiene/listerine.jpg',
    imgAlt: 'Listerine Mouthwash - Cool Mint, 250 ml logo',
    imgLabel: 'listerine',
    pDesc: `Listerine Cool mint Antibacterial Mouthwash is rapid &amp; easy
    to use, a 30 second "slosh" with Listerine after brushing and flossing reaches parts of the mouth that may be
    missed. Used two times daily, Listerine provides 24-hour defence
    against plaque and lasting bright breath assurance.`,
    priceText: 'MRP Rs.109'
}
allProducts.beautyHygieneObj.shampoo = {
    title: 'TRESemme Shampoo - Keratin Smooth With Argan Oil, 580 ml',
    imgSrc: 'beauty-hygiene/shampoo.jpg',
    imgAlt: 'TRESemme Shampoo - Keratin Smooth With Argan Oil, 580 ml logo',
    imgLabel: 'shampooKeratin',
    pDesc: `For the first time, at TRESemme , Our Professional combines
    luxurious ingredients to give you gorgeously smoother shiny hair
    every day , infused with keratin protein and lightweight argan
    oil , our advanced keratin smooth system gently nourishes hair
    and controls frizz for up to 3 days.`,
    priceText: 'MRP Rs.410'
}

allProducts.babyCareObj.babyDove = {
    title: 'Baby Dove Baby Bar - Rich Moisture, 50 gm',
    imgSrc: 'baby/baby-dove.jpg',
    imgAlt: 'Baby Dove Baby Bar - Rich Moisture, 50 gm logo',
    imgLabel: 'babyDove',
    pDesc: `Gentler and more nourishing than any other baby soap bar, Baby Dove Rich Moisture Baby Bar has a hypoallergenic and pH neutral
    formula thats ophthalmologist, dermatologist and pediatrician
    tested too.`,
    priceText: 'MRP Rs.30'
}
allProducts.babyCareObj.kidsShampoo = {
    title: `Johnson's Active Kids Shampoo - Shiny Drops With Argan Oil,100 ml`,
    imgSrc: 'baby/shampoo.jpg',
    imgAlt: `Johnson's Active Kids Shampoo - Shiny Drops With Argan Oil, 100 ml logo`,
    imgLabel: 'johnsonKidsShampoo',
    pDesc: `A hair care product range specifically for kids aged 2 years and above. This mild shiny drops shampoo formula has been developed
    to boost natural shine &amp; help reduce frizz, leaving hair
    silky smooth and healthy looking.`,
    priceText: 'MRP Rs.95'
}
allProducts.babyCareObj.babyWipes = {
    title: 'Baby Wipes - Cherry Blossom, 2x80 pcs',
    imgSrc: 'baby/red-wipes.jpg',
    imgAlt: 'Baby Wipes - Cherry Blossom, 2x80 pcs logo',
    imgLabel: 'babyWipesCherry',
    pDesc: ` These Wipes have aloe vera as key ingredient which makes it the best choice for baby hygiene, make-up remover, sanitizing your
    face and hand after a long drive, sports or any other situation
    where you need a quick hygiene solution.`,
    priceText: 'MRP Rs.300'
}

allProducts.babyCareObj.cerelac = {
    title: 'Nestle Cerelac Stage - 4 Multi Grain & Fruits, 2x300 gm',
    imgSrc: 'baby/cerelac.jpg',
    imgAlt: 'Nestle Cerelac Stage - 4 Multi Grain & Fruits, 2x300 gm logo',
    imgLabel: 'nestleCerelac',
    pDesc: `Nestle Multigrain Cerelac enriched with the goodness of five fruits is a complementary food which is given to babies above
    the age of six months.`,
    priceText: 'MRP Rs.478'
}

allProducts.babyCareObj.babySkinWipes = {
    title: 'Johnson & Johnson Baby skincare wipes, 20 pcs',
    imgSrc: 'baby/wipes.jpg',
    imgAlt: 'Johnson & Johnson Baby skincare wipes, 20 pcs logo',
    imgLabel: 'johnsonSkinWipes',
    pDesc: `Johnsons Baby wipes gently cleanse and care for babys delicate skin. As mild as pure water, they can be used safely all over
    the body, even around eyes.`,
    priceText: 'MRP Rs.70'
}
allProducts.babyCareObj.mamyPoko = {
    title: 'Mamypoko Pants Style Diapers - Large, 62 pcs',
    imgSrc: 'baby/mamy.jpg',
    imgAlt: 'Mamypoko Pants Style Diapers - Large, 62 pcs logo',
    imgLabel: 'mamypoko',
    pDesc: `MamyPoko Pants Extra Absorb is a Pant Style diaper that can be
    used most comfortably for the baby at night Because of Powerful
    slim core that can absorb up to 12 hours, it prevents leakage
    till morning.`,
    priceText: 'MRP Rs.930'
}
allProducts.babyCareObj.pampers = {
    title: `Pampers Diapers Pants - Large Size, Monthly Box Pack, New 128's pack`,
    imgSrc: 'baby/pampers.jpg',
    imgAlt: `"Pampers Diapers Pants - Large Size, Monthly Box Pack, New, 128's pack logo`,
    imgLabel: 'pampers',
    pDesc: `Pampers dry, pants style diapers are the only pants in India
    with new air channels that provides your baby with breathable
    dryness overnight.`,
    priceText: 'MRP Rs.1999'
}


allProducts.allObj = {
    ...allProducts.fruitsVegetablesObj, ...allProducts.bakeryObj, ...allProducts.beveragesObj, ...allProducts.beautyHygieneObj, ...allProducts.babyCareObj
}

