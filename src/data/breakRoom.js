/** Break Room — rest without losing the plot. No cookbook here. */

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
    why: 'Tiny systems for showing up when motivation ghosts you.',
    url: 'https://jamesclear.com/atomic-habits',
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    why: 'Permission to protect attention like a scarce craft tool.',
    url: 'https://www.calnewport.com/books/deep-work/',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Thomas & Hunt',
    why: 'Craft mindset that transfers to testing and design alike.',
    url: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/',
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    why: 'See your own bias — useful in debugging and critique.',
    url: 'https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow',
  },
  {
    title: 'Range',
    author: 'David Epstein',
    why: 'Why generalists win — good when you’re learning many crafts.',
    url: 'https://davidepstein.com/the-books/',
  },
  {
    title: 'Bird by Bird',
    author: 'Anne Lamott',
    why: 'Short assignments beat perfect drafts. Applies to code too.',
    url: 'https://www.penguinrandomhouse.com/books/97362/bird-by-bird-by-anne-lamott/',
  },
  {
    title: 'Make Time',
    author: 'Knapp & Zeratsky',
    why: 'Highlight / laser / energize — practical anti-busywork.',
    url: 'https://maketime.blog/',
  },
  {
    title: 'Feeling Good',
    author: 'David Burns',
    why: 'CBT tools when your brain catastrophizes a failing test.',
    url: 'https://feelinggood.com/books/',
  },
  {
    title: 'Four Thousand Weeks',
    author: 'Oliver Burkeman',
    why: 'Time scarcity with kindness — not another productivity guilt trip.',
    url: 'https://www.oliverburkeman.com/books',
  },
  {
    title: 'The Art of Rest',
    author: 'Claudia Hammond',
    why: 'Rest is a skill. This helps you practice it without shame.',
    url: 'https://www.claudiahammond.com/',
  },
]

export const breakMovies = [
  {
    title: 'The Imitation Game',
    why: 'Puzzle energy + history. Light technical vibe without homework.',
    url: 'https://www.imdb.com/title/tt2084970/',
  },
  {
    title: 'Hidden Figures',
    why: 'Systems, rigor, and quiet excellence under pressure.',
    url: 'https://www.imdb.com/title/tt4846340/',
  },
  {
    title: 'Moneyball',
    why: 'Data over ego. Perfect post-debugging palate cleanser.',
    url: 'https://www.imdb.com/title/tt1210166/',
  },
  {
    title: 'Arrival',
    why: 'Language, patterns, patience — oddly relevant to locators.',
    url: 'https://www.imdb.com/title/tt2543164/',
  },
  {
    title: 'Spider-Man: Into the Spider-Verse',
    why: 'Visual feast. Pure joy when your brain is fried.',
    url: 'https://www.imdb.com/title/tt4633694/',
  },
  {
    title: 'The Social Dilemma (doc)',
    why: 'If notifications own you — watch, then delete one app.',
    url: 'https://www.imdb.com/title/tt11464826/',
  },
  {
    title: 'Soul',
    why: 'Purpose without hustle cosplay. Soft landing film.',
    url: 'https://www.imdb.com/title/tt2948372/',
  },
  {
    title: 'Wall-E',
    why: 'Quiet, beautiful, and a reminder to stand up from the chair.',
    url: 'https://www.imdb.com/title/tt0910970/',
  },
  {
    title: 'My Neighbor Totoro',
    why: 'Gentle world-building. Zero plot anxiety.',
    url: 'https://www.imdb.com/title/tt0096283/',
  },
  {
    title: 'Free Solo (doc)',
    why: 'Focus porn — then stretch your wrists and stay on the ground.',
    url: 'https://www.imdb.com/title/tt7775622/',
  },
]

export const breakGames = [
  {
    title: 'Human Resource Machine',
    why: 'Puzzle “assembly” that scratches coding itch playfully.',
    url: 'https://tomorrowcorporation.com/humanresourcemachine',
  },
  {
    title: 'Baba Is You',
    why: 'Rewrite the rules. Peak lateral thinking.',
    url: 'https://hempuli.com/baba/',
  },
  {
    title: 'Mini Metro',
    why: 'Calm systems design. Perfect 10-minute reset.',
    url: 'https://dinopoloclub.com/games/mini-metro/',
  },
  {
    title: 'The Witness',
    why: 'Quiet island of puzzles. Walk away clearer.',
    url: 'https://the-witness.net/',
  },
  {
    title: 'learngitbranching.js.org',
    why: 'Still learning — but it feels like a game.',
    url: 'https://learngitbranching.js.org/',
  },
  {
    title: 'CSS Battle',
    why: 'Tiny visual challenges. 5 minutes, then stop.',
    url: 'https://cssbattle.dev/',
  },
  {
    title: 'Flexbox Froggy',
    why: 'Layout practice that doesn’t feel like homework.',
    url: 'https://flexboxfroggy.com/',
  },
  {
    title: 'Patrick’s Parabox',
    why: 'Recursive puzzles. Weirdly calming.',
    url: 'https://store.steampowered.com/app/1260520/Patricks_Parabox/',
  },
  {
    title: 'Grid Garden',
    why: 'CSS Grid with vegetables that aren’t dinner plans — just puzzles.',
    url: 'https://cssgridgarden.com/',
  },
  {
    title: 'Screeps World (peek)',
    why: 'If you want code-as-game — cap the time hard.',
    url: 'https://screeps.com/',
  },
  {
    title: '2048',
    why: 'Classic number slide. One round, then close the tab.',
    url: 'https://play2048.co/',
  },
  {
    title: 'Little Alchemy 2',
    why: 'Combine ideas. Soft creativity without a deadline.',
    url: 'https://littlealchemy2.com/',
  },
  {
    title: 'Neal.fun',
    why: 'A shelf of tiny delightful toys. Pick one, not twelve.',
    url: 'https://neal.fun/',
  },
  {
    title: 'GeoGuessr (free modes)',
    why: 'Travel with your eyes. Great for a stuck brain.',
    url: 'https://www.geoguessr.com/',
  },
  {
    title: 'Chess.com puzzles',
    why: 'One puzzle = enough. Don’t start a ranked spiral.',
    url: 'https://www.chess.com/puzzles',
  },
  {
    title: 'Sudoku.com',
    why: 'Quiet logic. Paper optional.',
    url: 'https://sudoku.com/',
  },
  {
    title: 'Orisinal — Winterbells',
    why: 'Old-school browser calm. Jump a rabbit, smile, leave.',
    url: 'https://www.ferryhalim.com/orisinal/',
  },
  {
    title: 'A Dark Room',
    why: 'Minimal story game. Atmospheric and short sessions.',
    url: 'https://adarkroom.doublespeakgames.com/',
  },
]

export const breakLinks = [
  {
    title: 'Window Swap',
    why: 'Look out someone else’s window for 60 seconds.',
    url: 'https://www.window-swap.com/',
  },
  {
    title: 'Radio Garden',
    why: 'Spin the globe. Land on a station. Breathe.',
    url: 'https://radio.garden/',
  },
  {
    title: 'Nipaniku (calm typing)',
    why: 'Soft ambient typing practice — oddly soothing.',
    url: 'https://nipaniku.com/',
  },
  {
    title: 'Excalidraw',
    why: 'Doodle the bug. Sometimes the drawing is the fix.',
    url: 'https://excalidraw.com/',
  },
  {
    title: 'Pomofocus',
    why: 'External timer if you want a second screen.',
    url: 'https://pomofocus.io/',
  },
  {
    title: 'Stretch — 5 moves',
    why: 'Neck + wrists. Your future self says thanks.',
    url: 'https://www.youtube.com/results?search_query=desk+stretch+5+minutes',
  },
  {
    title: 'Noise — rain cafe',
    why: 'Background that isn’t a podcast yelling at you.',
    url: 'https://www.youtube.com/results?search_query=rainy+cafe+ambience',
  },
  {
    title: 'Tiny Habits prompt',
    why: 'Write one 2-minute habit. Then do it.',
    url: 'https://tinyhabits.com/',
  },
  {
    title: 'Virtual commute (train views)',
    why: 'Fake a train window when you can’t leave the room.',
    url: 'https://www.youtube.com/results?search_query=train+window+view+4k',
  },
  {
    title: 'NASA image of the day',
    why: 'Perspective check from orbit.',
    url: 'https://apod.nasa.gov/apod/astropix.html',
  },
]

export const breakPodcasts = [
  {
    title: 'Soft Skills Engineering',
    why: 'Career friction without corporate fluff.',
    url: 'https://softskills.audio/',
  },
  {
    title: 'Design Details',
    why: 'Product/design chats for ear-only rest.',
    url: 'https://designdetails.fm/',
  },
  {
    title: 'The Happiness Lab',
    why: 'Evidence-based rest and mood — not hustle sermons.',
    url: 'https://www.happinesslab.fm/',
  },
  {
    title: 'Syntax',
    why: 'Passive tech chat while you stretch or walk.',
    url: 'https://syntax.fm/',
  },
  {
    title: 'Hidden Brain',
    why: 'Human quirks explained — good walking companion.',
    url: 'https://hiddenbrain.org/',
  },
  {
    title: 'Maintenance Phase',
    why: 'Sharp, funny, anti-junk wellness myths.',
    url: 'https://www.maintenancephase.com/',
  },
]

export const breakStretches = [
  { name: 'Neck arcs', reps: '5 each side', how: 'Slow chin-to-chest, ear-to-shoulder. No forcing.' },
  { name: 'Wrist openers', reps: '20 sec each', how: 'Palm up / palm down against desk edge gently.' },
  { name: 'Chest doorway', reps: '30 sec', how: 'Forearm on doorframe, step through, breathe.' },
  { name: 'Hip flexor lunge', reps: '30 sec/side', how: 'Kneeling lunge, tuck pelvis, tall spine.' },
  { name: 'Figure-4 sit', reps: '30 sec/side', how: 'Ankle on opposite knee, hinge forward lightly.' },
  { name: 'Stand & shake', reps: '20 sec', how: 'Shake arms and legs like a ridiculous wet dog.' },
  { name: 'Shoulder rolls', reps: '10 each way', how: 'Slow circles. Drop the jaw. Soften the brow.' },
  { name: 'Calf raises', reps: '15', how: 'At the desk edge. Wake up circulation.' },
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
  },
  {
    title: 'Classical focus playlist',
    why: 'No lyrics = fewer rabbit holes.',
    url: 'https://www.youtube.com/results?search_query=classical+music+for+studying',
  },
  {
    title: 'Jazz cafe ambience',
    why: 'Soft saxophone energy without a plot.',
    url: 'https://www.youtube.com/results?search_query=jazz+cafe+ambience',
  },
  {
    title: 'Forest / nature sounds',
    why: 'Birds > group chats.',
    url: 'https://www.youtube.com/results?search_query=forest+sounds+birds+relaxing',
  },
  {
    title: 'Brown noise',
    why: 'Deep hush for noisy brains.',
    url: 'https://www.youtube.com/results?search_query=brown+noise+10+hours',
  },
  {
    title: 'Nepali / South Asian chill',
    why: 'Homey reset playlist energy.',
    url: 'https://www.youtube.com/results?search_query=nepali+lofi+chill',
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
]

export const breakEyes = [
  {
    title: '20-20-20 rule',
    why: 'Every 20 minutes: look 20 feet away for 20 seconds.',
  },
  {
    title: 'Palm cupping',
    why: 'Warm palms over closed eyes for 30 seconds. No pressure.',
  },
  {
    title: 'Blink set',
    why: 'Close eyes gently 10 times. Screens dry you out.',
  },
  {
    title: 'Horizon stare',
    why: 'Find a far window point. Soften focus. Count to 30.',
  },
]

export const breakWalks = [
  {
    title: 'Block loop',
    why: 'One city block. No podcast for the first half — just footsteps.',
  },
  {
    title: 'Stair climber',
    why: 'Up and down one flight twice. Heart rate nudge without a gym.',
  },
  {
    title: 'Errand walk',
    why: 'Mail, water refill, plant check — anything that needs standing.',
  },
  {
    title: 'Sunlight dose',
    why: 'Two minutes outside if you can. Morning light resets mood.',
  },
]

export const breakOutdoors = [
  {
    title: 'Cloud watch',
    why: 'Lie or sit. Name three cloud shapes. Leave the laptop inside.',
  },
  {
    title: 'Barefoot grass (if safe)',
    why: 'Sensory reset. Thirty seconds counts.',
  },
  {
    title: 'Bird count',
    why: 'How many birds in two minutes? Attention without screens.',
  },
  {
    title: 'Photo one color',
    why: 'Phone camera: find five greens (or blues). Then pocket it.',
  },
]

export const breakCreative = [
  {
    title: 'Quick collage',
    why: 'Tear magazine scraps or screenshot shapes into a moodboard.',
    url: 'https://www.canva.com/',
  },
  {
    title: 'One-line comic',
    why: 'Three panels. Your day as a stick-figure saga.',
    url: 'https://excalidraw.com/',
  },
  {
    title: 'Instrument toy',
    why: 'Play a free web synth for two minutes. No recording needed.',
    url: 'https://experiments.withgoogle.com/collection/chrome',
  },
  {
    title: 'Poem dump',
    why: 'Write six bad lines. Delete them. Weirdly cleansing.',
  },
]

export const breakMicroMoves = [
  {
    title: 'Wall push-ups',
    why: '10 slow ones. Shoulders awake, ego optional.',
  },
  {
    title: 'Desk squat',
    why: '8 sit-to-stands. Hold the chair if needed.',
  },
  {
    title: 'Jaw release',
    why: 'Tongue on roof of mouth, unclench teeth, sigh once.',
  },
  {
    title: 'Hand shake-out',
    why: 'Shake typing tension down into the floor.',
  },
]

export const breakSocial = [
  {
    title: 'Voice note a friend',
    why: '30 seconds: “thinking of you / tiny win today.”',
  },
  {
    title: 'Compliment IRL',
    why: 'If someone’s nearby — one specific, non-awkward kindness.',
  },
  {
    title: 'Async check-in',
    why: 'Message a study buddy: “shipping one chapter, you?”',
  },
  {
    title: 'Silence date',
    why: 'Sit with someone and don’t talk for two minutes. Shared calm.',
  },
]

export const breakLaughs = [
  {
    title: 'xkcd',
    why: 'One comic. Then close. Seriously.',
    url: 'https://xkcd.com/',
  },
  {
    title: 'The Oatmeal',
    why: 'Chaotic humor when your brain is mush.',
    url: 'https://theoatmeal.com/',
  },
  {
    title: 'FailArmy? Skip. Try Stand-up short',
    why: 'One clean 3-minute clip, then stop the autoplay.',
    url: 'https://www.youtube.com/results?search_query=clean+standup+3+minutes',
  },
  {
    title: 'False Knees',
    why: 'Gentle bird comics. Soft smile energy.',
    url: 'https://falseknees.com/',
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
]
