/** Cuisine/dish-aware food photos — keyword first, cuisine fallback. Verified Unsplash IDs only. */

const u = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=600&q=70`

const ID = {
  pizza: ['1565299624946-b28f40a0ae38', '1574071318508-1cdbab80d002', '1513104890138-7c749659a591'],
  pasta: ['1551183053-bf91a1d81141', '1621996346565-e3dbc646d9a9', '1495521821757-a1efb6729352'],
  indian: ['1585937421612-70a008356fbe', '1565557623262-b51c2513a641', '1631452180519-c014fe946bc7', '1601050690597-df0568f70950', '1546833999-b9f581a1996d', '1596797038530-2c107229654b'],
  rice: ['1536304993881-ff6e9eefa2a6', '1512058564366-18510be2db19', '1574482620811-1aa16ffe3c82'],
  mexican: ['1626700051175-6818013e1d4f', '1513456852971-30c0b8199d4d', '1555939594-58d7cb561ad1'],
  japanese: ['1579871494447-9811cf80d66c', '1617196034183-421b4917c92d', '1455619452474-d2be8b1e70cd'],
  thai: ['1559314809-0d155014e29e', '1455619452474-d2be8b1e70cd', '1626804475297-41608ea09aeb'],
  chinese: ['1563245372-f21724e3856d', '1496116218417-1a781b1c416c', '1585032226651-759b368d7246'],
  salad: ['1512621776951-a57141f2eefd', '1540420773420-3366772f4999', '1546069901-ba9599a7e63c'],
  soup: ['1547592166-23ac45744acd', '1547592180-85f173990554', '1604908176997-125f25cc6f3d'],
  steak: ['1558030006-450675393462', '1544025162-d76694265947', '1414235077428-338989a2e8c0'],
  burger: ['1550547660-d9450f859349', '1571091718767-18b5b1457add', '1555939594-58d7cb561ad1'],
  bread: ['1509440159596-0249088772ff', '1549931319-a545dcf3bc73'],
  dumpling: ['1567620905732-2d1ec7ab7445', '1496116218417-1a781b1c416c', '1563245372-f21724e3856d'],
  med: ['1512621776951-a57141f2eefd', '1546069901-ba9599a7e63c', '1473093295043-cdd812d0e601', '1482049016688-2d3e1b311543'],
  french: ['1414235077428-338989a2e8c0', '1559339352-11d035aa65de', '1476224203421-9ac39bcb3327'],
  dessert: ['1563805042-7684c019e1cb', '1551024506-0bccd828d307'],
  breakfast: ['1533089860892-a7c6f0a88666', '1525351484163-7529414344d8'],
  bowl: ['1546069901-ba9599a7e63c', '1512058564366-18510be2db19', '1473093295043-cdd812d0e601'],
}

const CUISINE_POOL = {
  italian: [...ID.pizza, ...ID.pasta, ...ID.french],
  indian: ID.indian,
  mexican: ID.mexican,
  japanese: ID.japanese,
  thai: ID.thai,
  chinese: ID.chinese,
  mediterranean: ID.med,
  french: ID.french,
  korean: [...ID.bowl, ...ID.rice, ...ID.dumpling],
  nepali: [...ID.indian, ...ID.rice, ...ID.dumpling],
  'middle-eastern': ID.med,
  american: [...ID.burger, ...ID.steak, ...ID.breakfast],
}

/** First matching rule wins — keeps dal away from steak photos. */
const KEYWORD_RULES = [
  { re: /\b(pizza|flatbread pizza)\b/i, pool: ID.pizza },
  { re: /\b(pasta|spaghetti|linguine|carbonara|aglio|pesto|lasagna|gnocchi|risotto|puttanesca|orzo)\b/i, pool: ID.pasta },
  { re: /\b(soup|stew|chowder|pozole|broth|avgolemono|miso soup)\b/i, pool: ID.soup },
  { re: /\b(taco|burrito|enchilada|quesadilla|nacho|guacamole|carnitas|elote|salsa verde|pozole|huevos)\b/i, pool: ID.mexican },
  { re: /\b(sushi|ramen|soba|udon|teriyaki|donburi|onigiri|tempura|miso|katsu|gyoza|chirashi|tamago|okonomiyaki|yakisoba)\b/i, pool: ID.japanese },
  { re: /\b(pad thai|pad see ew|tom yum|larb|massaman|lemongrass|papaya salad|thai)\b/i, pool: ID.thai },
  { re: /\b(dumpling|wonton|mapo|fried rice|kung pao|bok choy|congee|char siu|dan dan|scallion pancake|tea egg)\b/i, pool: ID.chinese },
  { re: /\b(momo|dumpling)\b/i, pool: ID.dumpling },
  { re: /\b(dal|tadka|biryani|paneer|masala|tikka|dosa|sambar|rajma|khichdi|korma|chana|palak|aloo gobi|jeera|upma|gundruk|kwati|saag|tama|chhoyela|thukpa|sekuwa|chatamari|chiura|yomari|sel roti|bhat)\b/i, pool: ID.indian },
  { re: /\b(steak|frites)\b/i, pool: ID.steak },
  { re: /\b(burger|mac and cheese|chili|meatloaf|cornbread|clam chowder|sheet-pan|nachos)\b/i, pool: ID.burger },
  { re: /\b(hummus|falafel|shawarma|shakshuka|tabbouleh|baba|fattoush|labneh|zaatar|harira|koshari|mansaf|kabsa|muhammara|freekeh|grape leaves)\b/i, pool: ID.med },
  { re: /\b(omelette|ratatouille|quiche|fricassee|fricassée|niçoise|nicoise|gratin|coq|crêpe|crepe|clafoutis|meunière|meuniere|lyonnaise)\b/i, pool: ID.french },
  { re: /\b(salad|tabbouleh|fattoush|caprese|caesar|niçoise|nicoise)\b/i, pool: ID.salad },
  { re: /\b(bread|toast|roti|pita|flatbread|crêpe|crepe|pancake)\b/i, pool: ID.bread },
  { re: /\b(dessert|cake|cookie|sticky rice|lassi|matcha|clafoutis|oat)\b/i, pool: ID.dessert },
  { re: /\b(breakfast|omelette|pancake|huevos|overnight oats)\b/i, pool: ID.breakfast },
  { re: /\b(rice|biryani|donburi|bhat|bibimbap|kimbap|fried rice)\b/i, pool: ID.rice },
  { re: /\b(bowl|bibimbap)\b/i, pool: ID.bowl },
  { re: /\b(curry)\b/i, pool: ID.indian },
]

function hash(s) {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}

function pick(pool, key) {
  return u(pool[hash(key) % pool.length])
}

/** Resolve a food photo that matches the dish, not a random plate. */
export function imageForRecipe(recipe) {
  const name = recipe?.name || ''
  const id = recipe?.id || name
  for (const rule of KEYWORD_RULES) {
    if (rule.re.test(name)) return pick(rule.pool, id)
  }
  const cuisinePool = CUISINE_POOL[recipe?.cuisine] || ID.bowl
  return pick(cuisinePool, id)
}

export const cookResources = [
  {
    title: 'Serious Eats',
    why: 'Technique-first recipes and “why it works” science.',
    url: 'https://www.seriouseats.com/',
    kind: 'Site',
  },
  {
    title: 'BBC Good Food',
    why: 'Reliable weeknight recipes across cuisines.',
    url: 'https://www.bbcgoodfood.com/',
    kind: 'Site',
  },
  {
    title: 'Budget Bytes',
    why: 'Cheap, filling plates with clear costs.',
    url: 'https://www.budgetbytes.com/',
    kind: 'Site',
  },
  {
    title: 'Made With Lau',
    why: 'Chinese home cooking — clear demos.',
    url: 'https://www.youtube.com/@madewithlau',
    kind: 'Video',
  },
  {
    title: 'Passport Kitchen / Nepali home cooking',
    why: 'Search dal bhat, momo, achar demos when you want local taste.',
    url: 'https://www.youtube.com/results?search_query=nepali+dal+bhat+recipe',
    kind: 'Video',
  },
  {
    title: 'Babish Culinary Universe',
    why: 'Fun techniques — watch one, cook one.',
    url: 'https://www.youtube.com/@babishculinaryuniverse',
    kind: 'Video',
  },
  {
    title: 'Indian Healthy Recipes',
    why: 'Dal, sabzi, rice — beginner-friendly Indian.',
    url: 'https://www.indianhealthyrecipes.com/',
    kind: 'Site',
  },
  {
    title: 'Just One Cookbook',
    why: 'Japanese home cooking done carefully.',
    url: 'https://www.justonecookbook.com/',
    kind: 'Site',
  },
  {
    title: 'Hot Thai Kitchen',
    why: 'Thai curries and stir-fries with authentic notes.',
    url: 'https://hot-thai-kitchen.com/',
    kind: 'Site',
  },
  {
    title: 'Knife skills — basic cuts',
    why: '10-minute video: dice, mince, slice safely.',
    url: 'https://www.youtube.com/results?search_query=basic+knife+skills+beginner',
    kind: 'Skill',
  },
  {
    title: 'How to cook rice (stovetop)',
    why: 'Foundation for dal bhat, bowls, and curry nights.',
    url: 'https://www.youtube.com/results?search_query=how+to+cook+perfect+rice+stovetop',
    kind: 'Skill',
  },
  {
    title: 'Salt Fat Acid Heat (framework)',
    why: 'Taste like a cook — not just follow a list.',
    url: 'https://www.saltfatacidheat.com/',
    kind: 'Book / show',
  },
]

export const cookTips = [
  'Taste before you plate — salt + acid fix most “meh” dinners.',
  'Prep once: chop onion/garlic for two meals while the pan heats.',
  'Burnt garlic is bitter. Medium heat, stay nearby.',
  'Leftover rice = next-day fried rice. Cool it first.',
  'Keep one jar of chili crisp or hot sauce. Instant lift.',
  'Wash the pan before you sit — future-you will high-five.',
]
