/** Break Room thumbs — category-locked imagery (not food). */

const u = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=600&q=70`

export const breakImagePools = {
  books: ['1495446815901-a7297e633e8d', '1519682337058-a94d519337bc', '1524995997946-a1c2e315a42f', '1541781774459-bb2af2f05b55'].map(u),
  movies: ['1594909122845-11baa439b7bf', '1440404653325-ab127d49abc1', '1536440136628-849c177e76a1'].map(u),
  games: ['1511512578047-dfb367046420', '1542751371-adc38448a05e', '1493711662062-fa541adb3fc8', '1552820728-8b83bb6b773f'].map(u),
  music: ['1511379938547-c1f69419868d', '1514320291840-2e0a9bf2a9ae', '1470225620780-dba8ba36b745', '1487180144351-b8472da7d491'].map(u),
  podcasts: ['1590602847861-f357a9332bbc', '1598488035139-bdbb2231ce04', '1589903308904-1010c2294adc', '1556761175-5973dc0f32e7'].map(u),
  stretches: ['1544367567-0f2fcb009e0b', '1518611012118-696072aa579a', '1571019613454-1cb2f99b2d8b'].map(u),
  walk: ['1476480862126-209bfaa8edc8', '1551632811-561732d1e306', '1517836357463-d25dfeac3438'].map(u),
  outdoors: ['1501854140801-50d01698950b', '1470071459604-3b5ec3a7fe05', '1469474968028-56623f02e42e', '1506905925346-21bda4d32df4'].map(u),
  eyes: ['1506905925346-21bda4d32df4', '1464822759023-fed622ff2c3b', '1504280390367-361c6d9f38f4'].map(u),
  creative: ['1513364776144-60967b0f800f', '1452860606245-08befc0ff44b', '1460661419201-fd4cecdf8a8b'].map(u),
  laugh: ['1513364776144-60967b0f800f', '1452860606245-08befc0ff44b', '1542751371-adc38448a05e'].map(u),
  social: ['1556761175-5973dc0f32e7', '1476480862126-209bfaa8edc8', '1504280390367-361c6d9f38f4'].map(u),
  links: ['1501854140801-50d01698950b', '1469474968028-56623f02e42e', '1506905925346-21bda4d32df4'].map(u),
  calm: ['1470071459604-3b5ec3a7fe05', '1501854140801-50d01698950b', '1464822759023-fed622ff2c3b'].map(u),
  breath: ['1470071459604-3b5ec3a7fe05', '1506905925346-21bda4d32df4'].map(u),
}

/** Always the category cover — not a random dish from another pool. */
export function categoryCover(pool) {
  const list = breakImagePools[pool] || breakImagePools.calm
  return list[0]
}

export function pickImage(pool, key) {
  const list = breakImagePools[pool] || breakImagePools.calm
  let h = 0
  const s = String(key)
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return list[Math.abs(h) % list.length]
}
