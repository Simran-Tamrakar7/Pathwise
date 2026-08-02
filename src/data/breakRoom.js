/** Break Room — rest without losing the plot. */

export const breakModes = [
  { id: 'focus25', label: 'Focus 25', seconds: 25 * 60, kind: 'focus' },
  { id: 'focus50', label: 'Deep 50', seconds: 50 * 60, kind: 'focus' },
  { id: 'break5', label: 'Break 5', seconds: 5 * 60, kind: 'break' },
  { id: 'break15', label: 'Break 15', seconds: 15 * 60, kind: 'break' },
  { id: 'walk20', label: 'Walk 20', seconds: 20 * 60, kind: 'break' },
  { id: 'stretch7', label: 'Stretch 7', seconds: 7 * 60, kind: 'break' },
  { id: 'cook30', label: 'Cook 30', seconds: 30 * 60, kind: 'break' },
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
    title: 'Chef',
    why: 'Cooking as reset. Pair with Pathwise Cookbook after.',
    url: 'https://www.imdb.com/title/tt2883512/',
  },
  {
    title: 'Julie & Julia',
    why: 'Recipes, persistence, and learning in public.',
    url: 'https://www.imdb.com/title/tt1135503/',
  },
  {
    title: 'Soul',
    why: 'Purpose without hustle cosplay. Soft landing film.',
    url: 'https://www.imdb.com/title/tt2948372/',
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
]

export const breakPodcasts = [
  {
    title: 'Soft Skills Engineering',
    why: 'Career friction without corporate fluff.',
    url: 'https://softskills.audio/',
  },
  {
    title: 'Design Details',
    why: 'Product/design chats when your eyes need a break from screens… ironically.',
    url: 'https://designdetails.fm/',
  },
  {
    title: 'The Happiness Lab',
    why: 'Evidence-based rest and mood — not hustle sermons.',
    url: 'https://www.happinesslab.fm/',
  },
  {
    title: 'Syntax / similar tech shows',
    why: 'Passive learning while you cook from the Cookbook.',
    url: 'https://syntax.fm/',
  },
]

export const breakStretches = [
  { name: 'Neck arcs', reps: '5 each side', how: 'Slow chin-to-chest, ear-to-shoulder. No forcing.' },
  { name: 'Wrist openers', reps: '20 sec each', how: 'Palm up / palm down against desk edge gently.' },
  { name: 'Chest doorway', reps: '30 sec', how: 'Forearm on doorframe, step through, breathe.' },
  { name: 'Hip flexor lunge', reps: '30 sec/side', how: 'Kneeling lunge, tuck pelvis, tall spine.' },
  { name: 'Figure-4 sit', reps: '30 sec/side', how: 'Ankle on opposite knee, hinge forward lightly.' },
  { name: 'Stand & shake', reps: '20 sec', how: 'Shake arms and legs like a ridiculous wet dog.' },
]

export const breakBreaths = [
  { name: 'Box 4-4-4-4', steps: ['Inhale 4', 'Hold 4', 'Exhale 4', 'Hold 4'], rounds: 4 },
  { name: 'Physiological sigh', steps: ['Inhale', 'Short top-up inhale', 'Long exhale'], rounds: 3 },
  { name: 'Long exhale', steps: ['Inhale 4', 'Exhale 6–8'], rounds: 6 },
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
    why: 'Cooking + soft saxophone energy.',
    url: 'https://www.youtube.com/results?search_query=jazz+cafe+ambience',
  },
  {
    title: 'Nepali / South Asian chill',
    why: 'Homey reset while you simmer dal.',
    url: 'https://www.youtube.com/results?search_query=nepali+lofi+chill',
  },
]

export const breakDoodles = [
  'Draw your bug as a comic villain. Name it.',
  'Sketch the UI you’re stuck on with only 3 boxes.',
  'Write a haiku about your failing test.',
  'Map tomorrow’s one mission as a treasure map.',
  'Doodle a plate of food you’ll cook tonight.',
  'Draw five icons for “focus” without using a brain.',
]

export const breakSnacks = [
  { title: 'Fruit + nuts', why: 'Fast glucose without a crash if you stop at a handful.' },
  { title: 'Yogurt + honey', why: 'Protein + calm. Eat away from the keyboard.' },
  { title: 'Toast + egg', why: 'Real food > doom-scrolling delivery apps.' },
  { title: 'Tea, then water', why: 'Hydration first; caffeine second.' },
  { title: 'Cookbook roulette', why: 'Pick tonight’s recipe before you open social.' },
]

export const breakRituals = [
  'Stand up. Water. Window. No phone for 3 minutes.',
  'Write one sentence: “I’m stuck on ___ because ___.” Then walk.',
  'Close every tab that isn’t the one chapter you’re on.',
  'Do 10 squats. Laugh at yourself. Resume.',
  'Text a friend one win from today — even tiny.',
  'Put the phone in another room for the next focus block.',
  'Open the Cookbook. Pick dinner. Set a 30-min cook timer.',
  'One stretch from the Break Room list. Then breathe once.',
]
