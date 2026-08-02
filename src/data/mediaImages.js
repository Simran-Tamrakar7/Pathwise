/** Break Room thumbs — category + hint-aware (not food). */

const u = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=600&q=70`

const HINT = {
  rain: u('1515693413570-aaa07c629618'),
  cafe: u('1495474472287-4d71bcdd2085'),
  lofi: u('1511379938547-c1f69419868d'),
  fire: u('1515036551567-bf80f8faa93e'),
  ocean: u('1505142468610-359e7d316be0'),
  night: u('1419242902214-272b976ebd38'),
  tea: u('1544787219-7f47ccb76da5'),
  mug: u('1514432324607-a09dce0dd55c'),
  water: u('1548833225-198c0ac5b5d5'),
  herbal: u('1544787219-7f47ccb76da5'),
  puzzle: u('1606166180133-ee35d74cba8f'),
  transit: u('1515162816998-5730eaba4805'),
  island: u('1507525428034-b723cf961d3e'),
  code: u('1461749280684-dccba630e2f6'),
  map: u('1524661135-423995f22d0b'),
  cozy: u('1513690277738-c9a74b10dda6'),
  window: u('1493809842364-78817add7ffb'),
  draw: u('1513364776144-60967b0f800f'),
  stretch: u('1544367567-0f2fcb009e0b'),
  yoga: u('1518611012118-696072aa579a'),
  walk: u('1476480862126-209bfaa8edc8'),
  book: u('1495446815901-a7297e633e8d'),
  movie: u('1489599849927-2ee91cede3ba'),
  laugh: u('1529156069898-49953e39b3ac'),
  plant: u('1485955902532-bf6e16d5d1e5'),
}

export const breakImagePools = {
  books: ['1495446815901-a7297e633e8d', '1519682337058-a94d519337bc', '1524995997946-a1c2e315a42f', '1456513080890-44bfc1c00288'].map(u),
  movies: ['1489599849927-2ee91cede3ba', '1440404653325-ab127d49abc1', '1478720568477-152d9b164e26', '1594909122845-11baa439b7bf'].map(u),
  games: ['1511512578047-dfb367046420', '1542751371-adc38448a05e', '1493711662062-fa541adb3fc8', '1552820728-8b83bb6b773f'].map(u),
  music: ['1511379938547-c1f69419868d', '1514320291840-2e0a9bf2a9ae', '1470225620780-dba8ba36b745', '1487180144351-b8472da7d491'].map(u),
  podcasts: ['1590602847861-f357a9332bbc', '1598488035139-bdbb2231ce04', '1589903308904-1010c2294adc'].map(u),
  stretches: ['1544367567-0f2fcb009e0b', '1518611012118-696072aa579a', '1571019613454-1cb2f99b2d8b', '1518310383802-640565d39be3'].map(u),
  walk: ['1476480862126-209bfaa8edc8', '1551632811-561732d1e306', '1517836357463-d25dfeac3438'].map(u),
  outdoors: ['1501854140801-50d01698950b', '1470071459604-3b5ec3a7fe05', '1469474968028-56623f02e42e', '1506905925346-21bda4d32df4'].map(u),
  eyes: ['1464822759023-fed622ff2c3b', '1504280390367-361c6d9f38f4', '1470071459604-3b5ec3a7fe05'].map(u),
  creative: ['1513364776144-60967b0f800f', '1452860606245-08befc0ff44b', '1460661419201-fd4cecdf8a8b'].map(u),
  laugh: ['1529156069898-49953e39b3ac', '1513364776144-60967b0f800f', '1542751371-adc38448a05e'].map(u),
  social: ['1529156069898-49953e39b3ac', '1556761175-5973dc0f32e7', '1476480862126-209bfaa8edc8'].map(u),
  links: ['1501854140801-50d01698950b', '1469474968028-56623f02e42e', '1498050108023-c5249f4df085'].map(u),
  calm: ['1470071459604-3b5ec3a7fe05', '1501854140801-50d01698950b', '1464822759023-fed622ff2c3b'].map(u),
  breath: ['1506126613408-eca07ce68773', '1470071459604-3b5ec3a7fe05', '1506905925346-21bda4d32df4'].map(u),
  chill: [
    '1515693413570-aaa07c629618',
    '1495474472287-4d71bcdd2085',
    '1515036551567-bf80f8faa93e',
    '1505142468610-359e7d316be0',
  ].map(u),
  tea: ['1544787219-7f47ccb76da5', '1514432324607-a09dce0dd55c', '1548833225-198c0ac5b5d5'].map(u),
}

export function categoryCover(pool) {
  const list = breakImagePools[pool] || breakImagePools.calm
  return list[0]
}

export function pickImage(pool, key, hint) {
  if (hint && HINT[hint]) return HINT[hint]
  const list = breakImagePools[pool] || breakImagePools.calm
  let h = 0
  const s = String(key)
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return list[Math.abs(h) % list.length]
}
