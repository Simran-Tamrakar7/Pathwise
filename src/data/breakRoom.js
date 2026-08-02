/** Break Room — fun resets. No cookbook here. */

const img = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=600&q=70`

export const breakModes = [
  { id: 'focus25', label: 'Focus 25', seconds: 25 * 60, kind: 'focus' },
  { id: 'focus50', label: 'Deep 50', seconds: 50 * 60, kind: 'focus' },
  { id: 'break5', label: 'Break 5', seconds: 5 * 60, kind: 'rest' },
  { id: 'break15', label: 'Break 15', seconds: 15 * 60, kind: 'rest' },
  { id: 'walk20', label: 'Walk 20', seconds: 20 * 60, kind: 'rest' },
  { id: 'stretch7', label: 'Stretch 7', seconds: 7 * 60, kind: 'rest' },
  { id: 'eyes3', label: 'Eyes 3', seconds: 3 * 60, kind: 'rest' },
  { id: 'nap20', label: 'Power nap 20', seconds: 20 * 60, kind: 'rest' },
]

export const breakBooks = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    why: 'Stack tiny habits until they stick — even on meh days.',
    url: 'https://jamesclear.com/atomic-habits',
    image: img('1519682337058-a94d519337bc'),
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    why: 'Close the tabs. One hard thing. Headphones optional.',
    url: 'https://www.calnewport.com/books/deep-work/',
    image: img('1434030216411-0b793f4b4173'),
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Thomas & Hunt',
    why: 'Craft tips that make debugging feel less cursed.',
    url: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/',
    image: img('1461749280684-dccba630e2f6'),
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    why: 'Catch your brain lying to you mid-bug-hunt.',
    url: 'https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow',
    image: img('1507003211169-0a1dd7228f2d'),
  },
  {
    title: 'Range',
    author: 'David Epstein',
    why: 'Generalists get more sandboxes. Nice.',
    url: 'https://davidepstein.com/the-books/',
    image: img('1506905925346-21bda4d32df4'),
  },
  {
    title: 'Bird by Bird',
    author: 'Anne Lamott',
    why: 'One short assignment. Perfection can wait outside.',
    url: 'https://www.penguinrandomhouse.com/books/97362/bird-by-bird-by-anne-lamott/',
    image: img('1524995997946-a1c2e315a42f'),
  },
  {
    title: 'Make Time',
    author: 'Knapp & Zeratsky',
    why: 'Pick one highlight for today. Ignore the rest loudly.',
    url: 'https://maketime.blog/',
    image: img('1501139083538-0139583c060f'),
  },
  {
    title: 'Feeling Good',
    author: 'David Burns',
    why: 'CBT tools when a red test feels personal.',
    url: 'https://feelinggood.com/books/',
    image: img('1506126613408-eca07ce68773'),
  },
  {
    title: 'Four Thousand Weeks',
    author: 'Oliver Burkeman',
    why: 'You can’t do it all. Weirdly freeing once it lands.',
    url: 'https://www.oliverburkeman.com/books',
    image: img('1495446815901-a7297e633e8d'),
  },
  {
    title: 'The Art of Rest',
    author: 'Claudia Hammond',
    why: 'Rest is a skill — practice it like a weird hobby.',
    url: 'https://www.claudiahammond.com/',
    image: img('1470071459604-3b5ec3a7fe05'),
  },
]

export const breakMovies = [
  {
    title: 'The Imitation Game',
    why: 'Wartime puzzle brain candy. No homework.',
    url: 'https://www.imdb.com/title/tt2084970/',
    image: img('1518770660439-4636190af475'),
  },
  {
    title: 'Hidden Figures',
    why: 'Math, rockets, and quiet legends getting it done.',
    url: 'https://www.imdb.com/title/tt4846340/',
    image: img('1446776811953-b23d57bd21aa'),
  },
  {
    title: 'Moneyball',
    why: 'Stats vs gut feelings. Root for the spreadsheet.',
    url: 'https://www.imdb.com/title/tt1210166/',
    image: img('1566577739112-5180d4bf9390'),
  },
  {
    title: 'Arrival',
    why: 'Alien linguistics and patience. Weirdly calming.',
    url: 'https://www.imdb.com/title/tt2543164/',
    image: img('1464822759023-fed622ff2c3b'),
  },
  {
    title: 'Spider-Man: Into the Spider-Verse',
    why: 'Neon comic chaos. Brain fried? Press play.',
    url: 'https://www.imdb.com/title/tt4633694/',
    image: img('1542751371-adc38448a05e'),
  },
  {
    title: 'The Social Dilemma (doc)',
    why: 'Watch once, then mute one loud app.',
    url: 'https://www.imdb.com/title/tt11464826/',
    image: img('1512941937669-90a1b58e7e9c'),
  },
  {
    title: 'Soul',
    why: 'Jazz, purpose, and soft Pixar feelings.',
    url: 'https://www.imdb.com/title/tt2948372/',
    image: img('1487180144351-b8472da7d491'),
  },
  {
    title: 'Wall-E',
    why: 'Quiet robot love story. Stand up for a stretch mid-film.',
    url: 'https://www.imdb.com/title/tt0910970/',
    image: img('1446776653964-20c1d3a81b06'),
  },
  {
    title: 'My Neighbor Totoro',
    why: 'Forest spirits. Zero plot anxiety. Soft mode.',
    url: 'https://www.imdb.com/title/tt0096283/',
    image: img('1441974231531-c6227db76b6e'),
  },
  {
    title: 'Free Solo (doc)',
    why: 'Insane cliff focus — then stretch your wrists indoors.',
    url: 'https://www.imdb.com/title/tt7775622/',
    image: img('1551632811-561732d1e306'),
  },
]

export const breakGames = [
  {
    title: 'Human Resource Machine',
    why: 'Office robots doing assembly puzzles. Oddly fun.',
    url: 'https://tomorrowcorporation.com/humanresourcemachine',
    image: img('1498050108023-c5249f4df085'),
  },
  {
    title: 'Baba Is You',
    why: 'Rewrite the game rules. Peak “wait, what?” energy.',
    url: 'https://hempuli.com/baba/',
    image: img('1460661419201-fd4cecdf8a8b'),
  },
  {
    title: 'Mini Metro',
    why: 'Draw subway lines. Calm chaos in ten minutes.',
    url: 'https://dinopoloclub.com/games/mini-metro/',
    image: img('1524661135-423995f22d0b'),
  },
  {
    title: 'The Witness',
    why: 'Quiet island puzzles. Walk away clearer.',
    url: 'https://the-witness.net/',
    image: img('1507525428034-b723cf961d3e'),
  },
  {
    title: 'learngitbranching.js.org',
    why: 'Git as a game. Commit, merge, feel clever.',
    url: 'https://learngitbranching.js.org/',
    image: img('1556075798-4825dfaaf498'),
  },
  {
    title: 'CSS Battle',
    why: 'Pixel-perfect CSS duels. Five mins, then bail.',
    url: 'https://cssbattle.dev/',
    image: img('1507238691740-187a5b1d37b8'),
  },
  {
    title: 'GeoGuessr free modes',
    why: 'Guess the planet from a street view. One round.',
    url: 'https://www.geoguessr.com/',
    image: img('1506905925346-21bda4d32df4'),
  },
  {
    title: 'Orisinal calm games',
    why: 'Tiny browser toys with soft vibes.',
    url: 'https://www.ferryhalim.com/orisinal/',
    image: img('1495474472287-4d71bcdd2085'),
  },
  {
    title: 'Windowswap',
    why: 'Peek out a stranger’s window for half a minute.',
    url: 'https://www.window-swap.com/',
    image: img('1493809842364-78817add7ffb'),
  },
  {
    title: 'Quick, Draw!',
    why: 'Doodle vs a neural net. Laugh, then close it.',
    url: 'https://quickdraw.withgoogle.com/',
    image: img('1513364776144-60967b0f800f'),
  },
  {
    title: 'Flexbox Froggy',
    why: 'Help frogs with flexbox. Weirdly wholesome.',
    url: 'https://flexboxfroggy.com/',
    image: img('1416879595882-3373a0480b5b'),
  },
  {
    title: 'Patrick’s Parabox',
    why: 'Boxes inside boxes. Recursive and oddly soothing.',
    url: 'https://store.steampowered.com/app/1260520/Patricks_Parabox/',
    image: img('1582735689369-4fe89db7114c'),
  },
  {
    title: 'Grid Garden',
    why: 'CSS Grid with carrots. Not dinner — just puzzles.',
    url: 'https://cssgridgarden.com/',
    image: img('1512621776951-a57141f2eefd'),
  },
  {
    title: '2048',
    why: 'Slide tiles. One round. Don’t chase a high-score spiral.',
    url: 'https://play2048.co/',
    image: img('1552820728-8b83bb6b773f'),
  },
  {
    title: 'Little Alchemy 2',
    why: 'Mix earth + fire + weird ideas. Soft creativity.',
    url: 'https://littlealchemy2.com/',
    image: img('1532094349884-543bc11b234d'),
  },
  {
    title: 'Neal.fun',
    why: 'A shelf of tiny delightful toys. Pick one.',
    url: 'https://neal.fun/',
    image: img('1511512578047-dfb367046420'),
  },
  {
    title: 'Chess.com puzzles',
    why: 'One puzzle. Don’t open ranked. You know yourself.',
    url: 'https://www.chess.com/puzzles',
    image: img('1493711662062-fa541adb3fc8'),
  },
  {
    title: 'Sudoku.com',
    why: 'Quiet number logic. Paper optional.',
    url: 'https://sudoku.com/',
    image: img('1606166180133-ee35d74cba8f'),
  },
  {
    title: 'A Dark Room',
    why: 'Minimal text adventure. Atmospheric short sessions.',
    url: 'https://adarkroom.doublespeakgames.com/',
    image: img('1470252649378-9c29740c9fa8'),
  },
]

export const breakLinks = [
  {
    title: 'Window Swap',
    why: 'Look out someone else’s window for 60 seconds.',
    url: 'https://www.window-swap.com/',
    image: img('1493809842364-78817add7ffb'),
  },
  {
    title: 'Radio Garden',
    why: 'Spin the globe. Land on a station. Smile.',
    url: 'https://radio.garden/',
    image: img('1511379938547-c1f69419868d'),
  },
  {
    title: 'Nipaniku (calm typing)',
    why: 'Soft ambient typing practice — oddly soothing.',
    url: 'https://nipaniku.com/',
    image: img('1486312338219-ce68d2c6f44d'),
  },
  {
    title: 'Excalidraw',
    why: 'Doodle the bug. Sometimes the drawing is the fix.',
    url: 'https://excalidraw.com/',
    image: img('1452860606245-08befc0ff44b'),
  },
  {
    title: 'Pomofocus',
    why: 'External timer if you want a second screen.',
    url: 'https://pomofocus.io/',
    image: img('1501139083538-0139583c060f'),
  },
  {
    title: 'Stretch — 5 moves',
    why: 'Neck + wrists. Future-you says thanks.',
    url: 'https://www.youtube.com/results?search_query=desk+stretch+5+minutes',
    image: img('1544367567-0f2fcb009e0b'),
  },
  {
    title: 'Noise — rain cafe',
    why: 'Background that isn’t a podcast yelling at you.',
    url: 'https://www.youtube.com/results?search_query=rainy+cafe+ambience',
    image: img('1495474472287-4d71bcdd2085'),
  },
  {
    title: 'Tiny Habits prompt',
    why: 'Write one 2-minute habit. Then actually do it.',
    url: 'https://tinyhabits.com/',
    image: img('1519682337058-a94d519337bc'),
  },
  {
    title: 'Virtual commute (train views)',
    why: 'Fake a train window when you can’t leave the room.',
    url: 'https://www.youtube.com/results?search_query=train+window+view+4k',
    image: img('1476480862126-209bfaa8edc8'),
  },
  {
    title: 'NASA image of the day',
    why: 'Perspective check from orbit.',
    url: 'https://apod.nasa.gov/apod/astropix.html',
    image: img('1446776653964-20c1d3a81b06'),
  },
]

export const breakPodcasts = [
  {
    title: 'Soft Skills Engineering',
    why: 'Career friction without corporate fluff.',
    url: 'https://softskills.audio/',
    image: img('1590602847861-f357a9332bbc'),
  },
  {
    title: 'Design Details',
    why: 'Product/design chats for ear-only rest.',
    url: 'https://designdetails.fm/',
    image: img('1589903308904-1010c2294adc'),
  },
  {
    title: 'The Happiness Lab',
    why: 'Science-y mood tips without the hustle sermon.',
    url: 'https://www.happinesslab.fm/',
    image: img('1598488035139-bdbb2231ce04'),
  },
  {
    title: 'Syntax',
    why: 'Passive tech chat while you stretch or walk.',
    url: 'https://syntax.fm/',
    image: img('1514320291840-2e0a9bf2a9ae'),
  },
  {
    title: 'Hidden Brain',
    why: 'Human quirks explained — good walking buddy.',
    url: 'https://hiddenbrain.org/',
    image: img('1470225620780-dba8ba36b745'),
  },
  {
    title: 'Maintenance Phase',
    why: 'Sharp, funny takedowns of junk wellness myths.',
    url: 'https://www.maintenancephase.com/',
    image: img('1556761175-b413da4baf72'),
  },
]

export const breakStretches = [
  {
    name: 'Neck arcs',
    reps: '5 each side',
    how: 'Slow chin-to-chest, ear-to-shoulder. No forcing.',
    image: img('1544367567-0f2fcb009e0b'),
  },
  {
    name: 'Wrist openers',
    reps: '20 sec each',
    how: 'Palm up / palm down against desk edge gently.',
    image: img('1571019613454-1cb2f99b2d8b'),
  },
  {
    name: 'Chest doorway',
    reps: '30 sec',
    how: 'Forearm on doorframe, step through, breathe.',
    image: img('1518611012118-696072aa579a'),
  },
  {
    name: 'Hip flexor lunge',
    reps: '30 sec/side',
    how: 'Kneeling lunge, tuck pelvis, tall spine.',
    image: img('1517836357463-d25dfeac3438'),
  },
  {
    name: 'Figure-4 sit',
    reps: '30 sec/side',
    how: 'Ankle on opposite knee, hinge forward lightly.',
    image: img('1506126613408-eca07ce68773'),
  },
  {
    name: 'Stand & shake',
    reps: '20 sec',
    how: 'Shake arms and legs like a ridiculous wet dog.',
    image: img('1476480862126-209bfaa8edc8'),
  },
  {
    name: 'Shoulder rolls',
    reps: '10 each way',
    how: 'Slow circles. Drop the jaw. Soften the brow.',
    image: img('1599901860904-17e6ed7083a0'),
  },
  {
    name: 'Calf raises',
    reps: '15',
    how: 'At the desk edge. Wake up your feet.',
    image: img('1571019614242-c5c5dee9f50b'),
  },
]

export const breakBreaths = [
  { name: 'Box 4-4-4-4', steps: ['Inhale 4', 'Hold 4', 'Exhale 4', 'Hold 4'], rounds: 4 },
  { name: 'Physiological sigh', steps: ['Inhale', 'Short top-up inhale', 'Long exhale'], rounds: 3 },
  { name: 'Long exhale', steps: ['Inhale 4', 'Exhale 6–8'], rounds: 6 },
  { name: 'Counting breath', steps: ['Inhale', 'Exhale — count 1', 'Next exhale — count 2', 'Up to 10, restart if lost'], rounds: 2 },
]

export const breakMusic = [
  {
    title: 'lofi hip hop radio',
    why: 'Study wallpaper audio. Volume low.',
    url: 'https://www.youtube.com/results?search_query=lofi+hip+hop+radio',
    image: img('1511379938547-c1f69419868d'),
  },
  {
    title: 'Classical focus playlist',
    why: 'No lyrics = fewer rabbit holes.',
    url: 'https://www.youtube.com/results?search_query=classical+music+for+studying',
    image: img('1487180144351-b8472da7d491'),
  },
  {
    title: 'Jazz cafe ambience',
    why: 'Soft saxophone energy without a plot.',
    url: 'https://www.youtube.com/results?search_query=jazz+cafe+ambience',
    image: img('1495474472287-4d71bcdd2085'),
  },
  {
    title: 'Forest / nature sounds',
    why: 'Birds beat group chats.',
    url: 'https://www.youtube.com/results?search_query=forest+sounds+birds+relaxing',
    image: img('1441974231531-c6227db76b6e'),
  },
  {
    title: 'Brown noise',
    why: 'Deep hush for noisy brains.',
    url: 'https://www.youtube.com/results?search_query=brown+noise+10+hours',
    image: img('1470225620780-dba8ba36b745'),
  },
  {
    title: 'Nepali / South Asian chill',
    why: 'Homey reset playlist energy.',
    url: 'https://www.youtube.com/results?search_query=nepali+lofi+chill',
    image: img('1514320291840-2e0a9bf2a9ae'),
  },
]

export const breakDoodles = [
  'Draw your bug as a comic villain. Name it.',
  'Sketch the UI you’re stuck on with only 3 boxes.',
  'Write a haiku about your failing test.',
  'Map tomorrow’s one mission as a treasure map.',
  'Draw five icons for “focus” without using a brain.',
  'Doodle your ideal desk from a bird’s-eye view.',
  'Invent a logo for “Break Room Inc.” in 60 seconds.',
  'Draw the snack you wish was in your kitchen right now.',
]

export const breakEyes = [
  {
    title: '20-20-20 rule',
    why: 'Every 20 minutes: look 20 feet away for 20 seconds.',
    image: img('1504280390367-361c6d9f38f4'),
  },
  {
    title: 'Palm cupping',
    why: 'Warm palms over closed eyes for 30 seconds. No pressure.',
    image: img('1506126613408-eca07ce68773'),
  },
  {
    title: 'Blink set',
    why: 'Close eyes gently 10 times. Screens dry you out.',
    image: img('1464822759023-fed622ff2c3b'),
  },
  {
    title: 'Horizon stare',
    why: 'Find a far window point. Soften focus. Count to 30.',
    image: img('1470071459604-3b5ec3a7fe05'),
  },
]

export const breakWalks = [
  {
    title: 'Block loop',
    why: 'One city block. No podcast for the first half — just feet.',
    image: img('1476480862126-209bfaa8edc8'),
  },
  {
    title: 'Stair climber',
    why: 'Up and down one flight twice. Mini heart nudge.',
    image: img('1551632811-561732d1e306'),
  },
  {
    title: 'Errand walk',
    why: 'Mail, water refill, plant check — anything that needs standing.',
    image: img('1517836357463-d25dfeac3438'),
  },
  {
    title: 'Sunlight dose',
    why: 'Two minutes outside if you can. Morning light hits different.',
    image: img('1469474968028-56623f02e42e'),
  },
]

export const breakOutdoors = [
  {
    title: 'Cloud watch',
    why: 'Sit. Name three cloud shapes. Leave the laptop inside.',
    image: img('1501854140801-50d01698950b'),
  },
  {
    title: 'Barefoot grass (if safe)',
    why: 'Sensory reset. Thirty seconds counts.',
    image: img('1416879595882-3373a0480b5b'),
  },
  {
    title: 'Bird count',
    why: 'How many birds in two minutes? Attention without a screen.',
    image: img('1441974231531-c6227db76b6e'),
  },
  {
    title: 'Photo one color',
    why: 'Find five greens (or blues). Then pocket the phone.',
    image: img('1469474968028-56623f02e42e'),
  },
]

export const breakCreative = [
  {
    title: 'Quick collage',
    why: 'Tear scraps or screenshot shapes into a tiny moodboard.',
    url: 'https://www.canva.com/',
    image: img('1460661419201-fd4cecdf8a8b'),
  },
  {
    title: 'One-line comic',
    why: 'Three panels. Your day as a stick-figure saga.',
    url: 'https://excalidraw.com/',
    image: img('1513364776144-60967b0f800f'),
  },
  {
    title: 'Instrument toy',
    why: 'Play a free web synth for two minutes. No recording needed.',
    url: 'https://experiments.withgoogle.com/collection/chrome',
    image: img('1514320291840-2e0a9bf2a9ae'),
  },
  {
    title: 'Poem dump',
    why: 'Write six bad lines. Delete them. Weirdly cleansing.',
    image: img('1452860606245-08befc0ff44b'),
  },
]

export const breakMicroMoves = [
  {
    title: 'Wall push-ups',
    why: '10 slow ones. Shoulders awake, ego optional.',
    image: img('1571019613454-1cb2f99b2d8b'),
  },
  {
    title: 'Desk squat',
    why: '8 sit-to-stands. Hold the chair if needed.',
    image: img('1517836357463-d25dfeac3438'),
  },
  {
    title: 'Jaw release',
    why: 'Tongue on roof of mouth, unclench teeth, sigh once.',
    image: img('1506126613408-eca07ce68773'),
  },
  {
    title: 'Hand shake-out',
    why: 'Shake typing tension down into the floor.',
    image: img('1544367567-0f2fcb009e0b'),
  },
]

export const breakSocial = [
  {
    title: 'Voice note a friend',
    why: '30 seconds: “thinking of you / tiny win today.”',
    image: img('1529156069898-49953e39b3ac'),
  },
  {
    title: 'Compliment IRL',
    why: 'If someone’s nearby — one specific, non-awkward kindness.',
    image: img('1556761175-5973dc0f32e7'),
  },
  {
    title: 'Async check-in',
    why: 'Ping a study buddy: “one chapter, you?”',
    image: img('1516321318423-f06f85e504b3'),
  },
  {
    title: 'Silence date',
    why: 'Sit with someone and don’t talk for two minutes. Shared calm.',
    image: img('1476480862126-209bfaa8edc8'),
  },
]

export const breakLaughs = [
  {
    title: 'xkcd',
    why: 'One comic. Then close. Seriously.',
    url: 'https://xkcd.com/',
    image: img('1513364776144-60967b0f800f'),
  },
  {
    title: 'The Oatmeal',
    why: 'Chaotic humor when your brain is mush.',
    url: 'https://theoatmeal.com/',
    image: img('1529156069898-49953e39b3ac'),
  },
  {
    title: 'Stand-up short',
    why: 'One clean 3-minute clip, then kill autoplay.',
    url: 'https://www.youtube.com/results?search_query=clean+standup+3+minutes',
    image: img('1489599849927-2ee91cede3ba'),
  },
  {
    title: 'False Knees',
    why: 'Gentle bird comics. Soft smile energy.',
    url: 'https://falseknees.com/',
    image: img('1501854140801-50d01698950b'),
  },
]

export const breakRituals = [
  'Stand up. Water. Window. No phone for 3 minutes.',
  'Write one sentence: “I’m stuck on ___ because ___.” Then walk.',
  'Close every tab that isn’t the one chapter you’re on.',
  'Do 10 squats. Laugh at yourself. Resume.',
  'Text a friend one win from today — even tiny.',
  'Put the phone in another room for the next focus block.',
  'One stretch from the deck. Then breathe once.',
  'Shuffle a doodle prompt and actually draw it.',
  '20-20-20: look far away, blink, come back.',
  'Step outside for sunlight — even 90 seconds.',
  'Make tea. Sit until the cup is warm in both hands. Then resume.',
  'One song, eyes closed, no multitasking. Then timer.',
]

export const breakChill = [
  {
    title: 'Rain ambience',
    why: 'Soft rain while you stretch or doodle.',
    url: 'https://rain.mp3yoyo.com/',
    image: img('1504280390367-361c6d9f38f4'),
  },
  {
    title: 'Coffee shop murmur',
    why: 'Café noise without leaving your chair.',
    url: 'https://coffitivity.com/',
    image: img('1495474472287-4d71bcdd2085'),
  },
  {
    title: 'Lo-fi beats',
    why: 'Chill study energy. Volume low.',
    url: 'https://www.youtube.com/results?search_query=lofi+hip+hop+radio',
    image: img('1511379938547-c1f69419868d'),
  },
  {
    title: 'Fireplace crackle',
    why: 'Cozy audio when the room feels sterile.',
    url: 'https://www.youtube.com/results?search_query=fireplace+sounds+1+hour',
    image: img('1470252649378-9c29740c9fa8'),
  },
  {
    title: 'Ocean waves',
    why: 'Breathe with the tide sound for a minute.',
    url: 'https://www.youtube.com/results?search_query=ocean+waves+relaxing',
    image: img('1505142468610-359e7d316be0'),
  },
  {
    title: 'Night window',
    why: 'Dim lights, one lamp, phone face-down for five.',
    url: 'https://www.youtube.com/results?search_query=cozy+night+ambience',
    image: img('1446776653964-20c1d3a81b06'),
  },
]

export const breakTeaRituals = [
  {
    title: 'Slow tea steep',
    why: 'Boil, pour, wait the full steep. No phone until it dings.',
    image: img('1517676204124-4c6bf5cffccd'),
  },
  {
    title: 'Warm mug hold',
    why: 'Both hands on the cup for 60 seconds. Notice the heat.',
    image: img('1525351484163-7529414344d8'),
  },
  {
    title: 'Water first',
    why: 'Full glass before caffeine. Free hydration buff.',
    image: img('1505253216199-d4e4c2a4bcd0'),
  },
  {
    title: 'Herbal wind-down',
    why: 'Chamomile or mint when coffee would ruin a nap.',
    image: img('1499636136210-6f4ee915583e'),
  },
]

export const breakMoods = [
  { id: 'chill', label: 'Chill', cats: ['chill', 'tea', 'breath', 'music', 'doodle'] },
  { id: 'move', label: 'Move', cats: ['stretch', 'moves', 'walk', 'outside', 'eyes'] },
  { id: 'play', label: 'Play', cats: ['games', 'laugh', 'create'] },
  { id: 'learn-lite', label: 'Learn-lite', cats: ['books', 'podcasts', 'movies', 'links'] },
]
