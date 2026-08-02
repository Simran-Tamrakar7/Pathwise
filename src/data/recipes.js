/** Pathwise Cookbook — curated dishes with cooking ways + YouTube. */
export { imageForRecipe, cookResources, cookTips } from './foodImages.js'

export const recipeCuisines = [
  {
    "id": "italian",
    "label": "Italian",
    "color": "#C2410C"
  },
  {
    "id": "indian",
    "label": "Indian",
    "color": "#B45309"
  },
  {
    "id": "mexican",
    "label": "Mexican",
    "color": "#BE123C"
  },
  {
    "id": "japanese",
    "label": "Japanese",
    "color": "#0369A1"
  },
  {
    "id": "thai",
    "label": "Thai",
    "color": "#15803D"
  },
  {
    "id": "chinese",
    "label": "Chinese",
    "color": "#A16207"
  },
  {
    "id": "mediterranean",
    "label": "Mediterranean",
    "color": "#0F766E"
  },
  {
    "id": "french",
    "label": "French",
    "color": "#1D4ED8"
  },
  {
    "id": "korean",
    "label": "Korean",
    "color": "#BE123C"
  },
  {
    "id": "nepali",
    "label": "Nepali",
    "color": "#0D9488"
  },
  {
    "id": "middle-eastern",
    "label": "Middle Eastern",
    "color": "#B45309"
  },
  {
    "id": "american",
    "label": "American comfort",
    "color": "#A16207"
  }
]

export const recipes = [
  {
    "id": "nepali-dal-bhat",
    "name": "Dal Bhat Tarkari",
    "cuisine": "nepali",
    "cuisineLabel": "Nepali",
    "color": "#0D9488",
    "meal": "lunch",
    "servings": 2,
    "tags": [
      "dal",
      "rice",
      "nepali",
      "comfort",
      "vegetarian"
    ],
    "why": "Nepal’s everyday plate: lentil soup, steamed rice, and a simple vegetable tarkari. Pick a cooking way below — same soul, different oil and pace.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Dal bhat walkthrough",
        "url": "https://www.youtube.com/results?search_query=dal%20bhat%20tarkari%20nepali%20recipe"
      },
      {
        "label": "Light tadka ideas",
        "url": "https://www.youtube.com/results?search_query=healthy%20low%20oil%20dal%20tadka"
      },
      {
        "label": "Tarkari sides",
        "url": "https://www.youtube.com/results?search_query=nepali%20tarkari%20vegetable%20curry"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Classic ghee tadka",
        "blurb": "Home-style comfort with a fragrant ghee-cumin finish.",
        "minutes": 45,
        "difficulty": "easy",
        "ingredients": [
          "1 cup masoor or mixed dal, rinsed",
          "3 cups water + salt",
          "1 cup rice",
          "1 onion, 1 tomato, 2 garlic cloves",
          "1 tsp cumin, ½ tsp turmeric, chili to taste",
          "1–2 tbsp ghee for tadka",
          "Seasonal veg for tarkari (potato, cauliflower, or greens)"
        ],
        "steps": [
          "Pressure-cook or simmer dal with turmeric and salt until soft; whisk lightly.",
          "Cook rice separately until fluffy.",
          "Sauté onion-garlic-tomato with spices for tarkari; add veg + splash of water; cover until tender.",
          "For tadka: heat ghee, crackle cumin (+ dried chili), pour over dal.",
          "Plate rice, ladle dal, add tarkari + pickle/achar if you have it."
        ],
        "tip": "Dal thickens as it sits — keep a kettle of hot water to loosen."
      },
      {
        "id": "healthy",
        "label": "Healthy · low oil",
        "blurb": "Same plate, lighter: steam-heavy veg, measured oil, skip deep fry.",
        "minutes": 40,
        "difficulty": "easy",
        "ingredients": [
          "1 cup dal + plenty of water",
          "1 cup brown or white rice",
          "Steamed greens or mixed veg",
          "1 tsp oil (not tbsp) for tadka",
          "Garlic, cumin, turmeric, lemon",
          "Fresh cilantro"
        ],
        "steps": [
          "Boil dal with turmeric; skim foam; salt late.",
          "Steam or water-sauté tarkari instead of frying — finish with lemon.",
          "Tiny tadka: 1 tsp oil, cumin, garlic — pour over dal.",
          "Serve with extra salad/cucumber for volume without oil."
        ],
        "tip": "Flavor comes from spice bloom + acid (lemon), not extra fat."
      },
      {
        "id": "rich",
        "label": "Restaurant · oil tadka",
        "blurb": "Glossier dal with a hotter oil temper — weekend treat.",
        "minutes": 50,
        "difficulty": "medium",
        "ingredients": [
          "1 cup dal",
          "Rice",
          "2–3 tbsp mustard or veg oil",
          "Cumin, hing (asafoetida), dried red chili, garlic",
          "Butter optional finish",
          "Fried dried chili garnish"
        ],
        "steps": [
          "Cook dal soft and slightly thick.",
          "Heat oil until shimmering; add cumin, hing, chili, garlic — don’t burn.",
          "Pour sizzling tadka over dal; cover 1 minute to trap aroma.",
          "Serve with richer tarkari (potato + more oil) and rice."
        ],
        "tip": "Oil must be hot enough to crackle spices, not smoke-bitter."
      },
      {
        "id": "one-pot",
        "label": "Busy-day one pot",
        "blurb": "When time is short: rice cooker / Instant Pot friendly.",
        "minutes": 30,
        "difficulty": "easy",
        "ingredients": [
          "½ cup dal + ½ cup rice (rinsed)",
          "2½ cups water",
          "Turmeric, salt, cumin",
          "Frozen mixed veg",
          "1 tsp ghee or oil"
        ],
        "steps": [
          "Combine dal, rice, water, turmeric, salt in pot or cooker.",
          "Cook until soft; stir in frozen veg to warm through.",
          "Quick tadka in a spoon of fat; pour on top.",
          "Eat as a thick khichdi-style bowl — still counts as dal-bhat energy."
        ],
        "tip": "Ratio ~1 grain:2.5 water; adjust for your cooker."
      }
    ],
    "minutes": 45,
    "difficulty": "easy"
  },
  {
    "id": "nepali-momo",
    "name": "Momo (steamed dumplings)",
    "cuisine": "nepali",
    "cuisineLabel": "Nepali",
    "color": "#0D9488",
    "meal": "dinner",
    "servings": 3,
    "tags": [
      "momo",
      "dumpling",
      "nepali"
    ],
    "why": "Filled dumplings with achar. Choose chicken, veg, or a lighter pan-steam approach.",
    "image": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Steamed momo",
        "url": "https://www.youtube.com/results?search_query=nepali%20momo%20recipe%20steamed"
      },
      {
        "label": "Achar",
        "url": "https://www.youtube.com/results?search_query=momo%20achar%20tomato"
      }
    ],
    "ways": [
      {
        "id": "chicken",
        "label": "Chicken filling",
        "blurb": "Classic street-style chicken momo.",
        "minutes": 70,
        "difficulty": "medium",
        "ingredients": [
          "Wrapper dough or store wrappers",
          "250g minced chicken",
          "Onion, garlic, ginger, cilantro",
          "Cumin, salt, pepper",
          "Tomato-sesame achar for dipping"
        ],
        "steps": [
          "Mix filling; keep cold.",
          "Wrap into half-moons; seal edges tight.",
          "Steam 12–15 min until wrappers turn translucent.",
          "Serve hot with spicy achar."
        ],
        "tip": "Don’t overfill — leaks ruin the steam batch."
      },
      {
        "id": "veg",
        "label": "Veg cabbage-carrot",
        "blurb": "Crisp veg filling, less grease.",
        "minutes": 65,
        "difficulty": "medium",
        "ingredients": [
          "Wrappers",
          "Shredded cabbage + carrot",
          "Onion, ginger, garlic",
          "Soy + salt",
          "Oil 1 tsp"
        ],
        "steps": [
          "Salt cabbage 5 min; squeeze water out.",
          "Mix aromatics + soy; wrap and steam.",
          "Serve with sesame-tomato achar."
        ],
        "tip": "Dry filling = no soggy bottoms."
      },
      {
        "id": "healthy",
        "label": "Healthy · less oil achar",
        "blurb": "Steamed only; roasted tomato dip instead of fried achar.",
        "minutes": 60,
        "difficulty": "medium",
        "ingredients": [
          "Lean filling",
          "Wrappers",
          "Roasted tomato + garlic + chili + lemon"
        ],
        "steps": [
          "Steam momo as usual.",
          "Blend roasted tomato dip — skip frying spices in oil.",
          "Plate with cucumber salad."
        ],
        "tip": "Batch-freeze uncooked momo on a tray, then bag."
      }
    ],
    "minutes": 70,
    "difficulty": "medium"
  },
  {
    "id": "nepali-sel-roti",
    "name": "Sel Roti",
    "cuisine": "nepali",
    "cuisineLabel": "Nepali",
    "color": "#0D9488",
    "meal": "snack",
    "servings": 6,
    "tags": [
      "sel roti",
      "rice",
      "festival"
    ],
    "why": "Ring-shaped rice bread — festival classic. Try classic fry, lighter rings, or oven-assist ideas.",
    "image": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Sel roti video",
        "url": "https://www.youtube.com/results?search_query=sel%20roti%20nepali%20recipe"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Classic deep-fried",
        "blurb": "Crisp outside, soft chew — celebration mode.",
        "minutes": 90,
        "difficulty": "hard",
        "ingredients": [
          "Rice flour batter (soaked rice blend)",
          "Sugar",
          "Ghee/oil for frying",
          "Cardamom"
        ],
        "steps": [
          "Ferment/rest batter",
          "Pipe rings into hot oil",
          "Flip once golden",
          "Drain on rack"
        ],
        "tip": "Oil temp steady — too hot burns sugar."
      },
      {
        "id": "lighter",
        "label": "Smaller · less oil soak",
        "blurb": "Thinner rings, drain well, smaller batch.",
        "minutes": 75,
        "difficulty": "hard",
        "ingredients": [
          "Same batter",
          "Neutral oil",
          "Paper towels"
        ],
        "steps": [
          "Pipe thinner rings",
          "Fry quickly",
          "Double-drain"
        ],
        "tip": "Share the batch — sel roti is rich by design."
      },
      {
        "id": "airfry",
        "label": "Idea · air-fryer finish",
        "blurb": "Not traditional — briefly air-fry steamed rings for crisp without a vat of oil.",
        "minutes": 80,
        "difficulty": "hard",
        "ingredients": [
          "Batter",
          "Oil spray"
        ],
        "steps": [
          "Shape and lightly steam or pan-set",
          "Air-fry with mist of oil until edged",
          "Accept it’s a remix"
        ],
        "tip": "Call it “sel-inspired” so grandma doesn’t riot."
      }
    ],
    "minutes": 90,
    "difficulty": "hard"
  },
  {
    "id": "indian-dal-tadka",
    "name": "Dal Tadka",
    "cuisine": "indian",
    "cuisineLabel": "Indian",
    "color": "#B45309",
    "meal": "dinner",
    "servings": 3,
    "tags": [
      "dal",
      "vegetarian",
      "indian"
    ],
    "why": "Yellow dal with a sizzling temper. Healthy, classic, or buttery dhaba vibes.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Restaurant dal",
        "url": "https://www.youtube.com/results?search_query=dal%20tadka%20restaurant%20style"
      },
      {
        "label": "Low oil",
        "url": "https://www.youtube.com/results?search_query=healthy%20dal%20tadka%20less%20oil"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Classic tadka",
        "blurb": "Cumin-garlic-chili in ghee over soft toor/masoor.",
        "minutes": 35,
        "difficulty": "easy",
        "ingredients": [
          "1 cup dal",
          "Turmeric, salt",
          "Ghee",
          "Cumin, garlic, chili",
          "Cilantro"
        ],
        "steps": [
          "Cook dal soft",
          "Temper spices in ghee",
          "Pour over",
          "Rest 2 minutes"
        ],
        "tip": "Whisk dal for creamy body without cream."
      },
      {
        "id": "healthy",
        "label": "Healthy · 1 tsp oil",
        "blurb": "Water-forward simmer; micro tadka.",
        "minutes": 30,
        "difficulty": "easy",
        "ingredients": [
          "Dal",
          "Garlic",
          "1 tsp oil",
          "Lemon",
          "Spinach handful"
        ],
        "steps": [
          "Boil dal",
          "Stir in spinach",
          "Micro tadka",
          "Lemon finish"
        ],
        "tip": "Add hing for “fried” aroma with less fat."
      },
      {
        "id": "butter",
        "label": "With butter finish",
        "blurb": "Restaurant gloss — butter + kasuri methi.",
        "minutes": 40,
        "difficulty": "easy",
        "ingredients": [
          "Dal",
          "Butter",
          "Kasuri methi",
          "Cream optional"
        ],
        "steps": [
          "Cook dal thick",
          "Butter tadka",
          "Crush methi on top"
        ],
        "tip": "Serve with jeera rice or roti — not both if watching portions."
      }
    ],
    "minutes": 35,
    "difficulty": "easy"
  },
  {
    "id": "indian-chana-masala",
    "name": "Chana Masala",
    "cuisine": "indian",
    "cuisineLabel": "Indian",
    "color": "#B45309",
    "meal": "lunch",
    "servings": 3,
    "tags": [
      "chickpea",
      "vegan",
      "curry"
    ],
    "why": "Chickpea curry — protein bowl that reheats beautifully.",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Chana masala",
        "url": "https://www.youtube.com/results?search_query=chana%20masala%20recipe"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Onion-tomato gravy",
        "blurb": "Standard punjabi-leaning home curry.",
        "minutes": 40,
        "difficulty": "easy",
        "ingredients": [
          "2 cups cooked chickpeas",
          "Onion tomato",
          "Garam masala",
          "Oil 2 tbsp",
          "Ginger garlic"
        ],
        "steps": [
          "Bhuno onion-tomato",
          "Add spices + chana",
          "Simmer",
          "Cilantro"
        ],
        "tip": "Mash a few chickpeas to thicken naturally."
      },
      {
        "id": "healthy",
        "label": "Healthy dry-ish",
        "blurb": "Less oil, more lemon and fresh onion.",
        "minutes": 30,
        "difficulty": "easy",
        "ingredients": [
          "Chickpeas",
          "1 tsp oil",
          "Amchur or lemon",
          "Cumin",
          "Chili"
        ],
        "steps": [
          "Toast spices lightly",
          "Toss chana",
          "Lemon + onion garnish"
        ],
        "tip": "Great wrap filling with salad."
      },
      {
        "id": "rich",
        "label": "With oil + tea bag trick",
        "blurb": "Darker color via black tea; richer oil tadka.",
        "minutes": 45,
        "difficulty": "medium",
        "ingredients": [
          "Chickpeas",
          "Tea bag",
          "Oil",
          "Anardana optional"
        ],
        "steps": [
          "Simmer with tea bag",
          "Remove bag",
          "Finish with hot oil tadka"
        ],
        "tip": "Don’t leave tea too long — bitterness creeps in."
      }
    ],
    "minutes": 40,
    "difficulty": "easy"
  },
  {
    "id": "indian-khichdi",
    "name": "Khichdi",
    "cuisine": "indian",
    "cuisineLabel": "Indian",
    "color": "#B45309",
    "meal": "dinner",
    "servings": 2,
    "tags": [
      "khichdi",
      "comfort",
      "sick-day"
    ],
    "why": "Rice + dal porridge — gentle fuel after long study sessions.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Khichdi",
        "url": "https://www.youtube.com/results?search_query=moong%20dal%20khichdi%20recipe"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Ghee khichdi",
        "blurb": "Soft, spoonable, cumin ghee on top.",
        "minutes": 30,
        "difficulty": "easy",
        "ingredients": [
          "Rice + moong",
          "Turmeric",
          "Ghee",
          "Cumin"
        ],
        "steps": [
          "Cook soft with extra water",
          "Tadka ghee-cumin",
          "Serve with yogurt"
        ],
        "tip": "Loosen with hot water at the table."
      },
      {
        "id": "healthy",
        "label": "Veg-loaded · low ghee",
        "blurb": "Peas, carrot, spinach; teaspoon ghee.",
        "minutes": 35,
        "difficulty": "easy",
        "ingredients": [
          "Rice + dal",
          "Mixed veg",
          "1 tsp ghee"
        ],
        "steps": [
          "Cook grains",
          "Fold veg",
          "Tiny tadka"
        ],
        "tip": "Use frozen veg — still counts."
      },
      {
        "id": "rich",
        "label": "With fried toppings",
        "blurb": "Papad + more ghee — comfort max.",
        "minutes": 35,
        "difficulty": "easy",
        "ingredients": [
          "Khichdi base",
          "Extra ghee",
          "Roasted papad"
        ],
        "steps": [
          "Make classic",
          "Extra ghee swirl",
          "Crush papad on top"
        ],
        "tip": "Pair with mango pickle carefully — salty."
      }
    ],
    "minutes": 30,
    "difficulty": "easy"
  },
  {
    "id": "italian-margherita",
    "name": "Margherita pizza",
    "cuisine": "italian",
    "cuisineLabel": "Italian",
    "color": "#C2410C",
    "meal": "dinner",
    "servings": 2,
    "tags": [
      "pizza",
      "italian"
    ],
    "why": "Tomato, mozzarella, basil. Skillet, oven, or lighter tortilla hack.",
    "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Margherita",
        "url": "https://www.youtube.com/results?search_query=homemade%20margherita%20pizza%20recipe"
      },
      {
        "label": "Light hack",
        "url": "https://www.youtube.com/results?search_query=healthy%20tortilla%20pizza"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Oven classic",
        "blurb": "Hot stone/steel energy if you have it.",
        "minutes": 25,
        "difficulty": "medium",
        "ingredients": [
          "Dough",
          "Crushed tomato",
          "Mozzarella",
          "Basil",
          "Olive oil"
        ],
        "steps": [
          "Stretch dough",
          "Sauce lightly",
          "Cheese",
          "Bake very hot",
          "Basil after"
        ],
        "tip": "Less sauce = crispier crust."
      },
      {
        "id": "healthy",
        "label": "Healthy · thin + lots of veg",
        "blurb": "Whole-wheat or tortilla base, light cheese, pile vegetables.",
        "minutes": 20,
        "difficulty": "easy",
        "ingredients": [
          "Tortilla or thin dough",
          "Tomato",
          "Light mozzarella",
          "Peppers, arugula"
        ],
        "steps": [
          "Bake base briefly",
          "Top",
          "Finish with arugula"
        ],
        "tip": "Pat mozzarella dry to avoid sogginess."
      },
      {
        "id": "skillet",
        "label": "Cast-iron skillet",
        "blurb": "Crisp bottom without a pizza oven.",
        "minutes": 30,
        "difficulty": "medium",
        "ingredients": [
          "Dough",
          "Oil",
          "Sauce",
          "Cheese"
        ],
        "steps": [
          "Oil skillet",
          "Press dough",
          "Stovetop then broil top"
        ],
        "tip": "Preheat skillet for blistered bottom."
      }
    ],
    "minutes": 25,
    "difficulty": "medium"
  },
  {
    "id": "italian-aglio-olio",
    "name": "Spaghetti aglio e olio",
    "cuisine": "italian",
    "cuisineLabel": "Italian",
    "color": "#C2410C",
    "meal": "dinner",
    "servings": 2,
    "tags": [
      "pasta",
      "garlic",
      "fast"
    ],
    "why": "Garlic, oil, chili, pasta water emulsion — weeknight hero.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Aglio e olio",
        "url": "https://www.youtube.com/results?search_query=spaghetti%20aglio%20e%20olio%20recipe"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "With olive oil",
        "blurb": "Generous EVOO, golden garlic.",
        "minutes": 20,
        "difficulty": "easy",
        "ingredients": [
          "Spaghetti",
          "Garlic",
          "Chili flakes",
          "Olive oil",
          "Parsley"
        ],
        "steps": [
          "Boil pasta",
          "Gently fry garlic in oil",
          "Emulsify with pasta water",
          "Parsley"
        ],
        "tip": "Garlic should be blonde, not brown-bitter."
      },
      {
        "id": "healthy",
        "label": "Healthy · less oil",
        "blurb": "Measured oil + extra lemon and parsley.",
        "minutes": 20,
        "difficulty": "easy",
        "ingredients": [
          "Pasta",
          "4 garlic",
          "1 tbsp oil",
          "Lemon",
          "Chili"
        ],
        "steps": [
          "Same method with less oil",
          "More pasta water",
          "Lemon zest"
        ],
        "tip": "Whole-wheat pasta works if you cook it properly."
      },
      {
        "id": "anchovy",
        "label": "Idea · anchovy umami",
        "blurb": "Melt 2 anchovies into the oil for depth.",
        "minutes": 20,
        "difficulty": "easy",
        "ingredients": [
          "Pasta",
          "Anchovies",
          "Garlic",
          "Oil"
        ],
        "steps": [
          "Melt anchovy in oil",
          "Garlic",
          "Toss pasta"
        ],
        "tip": "They dissolve — not “fishy chunks.”"
      }
    ],
    "minutes": 20,
    "difficulty": "easy"
  },
  {
    "id": "italian-tomato-soup-pasta",
    "name": "Tomato basil pasta",
    "cuisine": "italian",
    "cuisineLabel": "Italian",
    "color": "#C2410C",
    "meal": "lunch",
    "servings": 2,
    "tags": [
      "pasta",
      "tomato"
    ],
    "why": "Pantry tomato sauce done three ways.",
    "image": "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Tomato pasta",
        "url": "https://www.youtube.com/results?search_query=simple%20tomato%20basil%20pasta"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Olive oil soffritto",
        "blurb": "Onion + garlic + tomato + basil.",
        "minutes": 25,
        "difficulty": "easy",
        "ingredients": [
          "Pasta",
          "Canned tomato",
          "Onion",
          "Garlic",
          "Oil",
          "Basil"
        ],
        "steps": [
          "Sauté aromatics",
          "Simmer tomato",
          "Toss pasta"
        ],
        "tip": "Pinch of sugar only if tomatoes are sharp."
      },
      {
        "id": "healthy",
        "label": "Healthy · no cream",
        "blurb": "Blend roasted peppers into sauce for body.",
        "minutes": 30,
        "difficulty": "easy",
        "ingredients": [
          "Tomato",
          "Roasted pepper",
          "1 tsp oil",
          "Basil"
        ],
        "steps": [
          "Blend sauce",
          "Warm",
          "Toss"
        ],
        "tip": "Finish with nutritional yeast if you miss cheese."
      },
      {
        "id": "rich",
        "label": "With butter + parmesan",
        "blurb": "Glossy finish for date-night carbs.",
        "minutes": 25,
        "difficulty": "easy",
        "ingredients": [
          "Tomato sauce",
          "Butter",
          "Parmesan"
        ],
        "steps": [
          "Classic sauce",
          "Mount butter off heat",
          "Cheese"
        ],
        "tip": "Save pasta water — sauce cling depends on it."
      }
    ],
    "minutes": 25,
    "difficulty": "easy"
  },
  {
    "id": "mexican-bean-tacos",
    "name": "Bean tacos",
    "cuisine": "mexican",
    "cuisineLabel": "Mexican",
    "color": "#BE123C",
    "meal": "dinner",
    "servings": 3,
    "tags": [
      "taco",
      "beans",
      "vegetarian"
    ],
    "why": "Weeknight tacos — black beans three ways.",
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Bean tacos",
        "url": "https://www.youtube.com/results?search_query=vegetarian%20black%20bean%20tacos"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Skillet beans + salsa",
        "blurb": "Warm tortillas, lime, cilantro.",
        "minutes": 25,
        "difficulty": "easy",
        "ingredients": [
          "Tortillas",
          "Black beans",
          "Onion",
          "Salsa",
          "Lime",
          "Oil"
        ],
        "steps": [
          "Sauté onion",
          "Mash beans lightly",
          "Warm tortillas",
          "Assemble"
        ],
        "tip": "Char tortillas on open flame carefully for flavor."
      },
      {
        "id": "healthy",
        "label": "Healthy · lettuce cups option",
        "blurb": "Same filling in romaine or corn tortillas, light toppings.",
        "minutes": 20,
        "difficulty": "easy",
        "ingredients": [
          "Beans",
          "Cumin",
          "Tomato",
          "Avocado ¼",
          "Lime"
        ],
        "steps": [
          "Spice beans",
          "Load greens or tortillas",
          "Lime"
        ],
        "tip": "Greek yogurt > sour cream for protein."
      },
      {
        "id": "cheesy",
        "label": "With oil-crisped cheese",
        "blurb": "Cheese skirt on the skillet — fun texture.",
        "minutes": 30,
        "difficulty": "medium",
        "ingredients": [
          "Tortillas",
          "Cheese",
          "Beans",
          "Oil"
        ],
        "steps": [
          "Melt cheese ring",
          "Set tortilla",
          "Fill",
          "Fold"
        ],
        "tip": "Medium heat — burned cheese is bitter."
      }
    ],
    "minutes": 25,
    "difficulty": "easy"
  },
  {
    "id": "mexican-guacamole-toast",
    "name": "Guacamole toast",
    "cuisine": "mexican",
    "cuisineLabel": "Mexican",
    "color": "#BE123C",
    "meal": "breakfast",
    "servings": 1,
    "tags": [
      "avocado",
      "toast",
      "breakfast"
    ],
    "why": "Fast fuel between chapters — classic, spicy, or lighter.",
    "image": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Guac",
        "url": "https://www.youtube.com/results?search_query=guacamole%20recipe%20authentic"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Classic lime guac",
        "blurb": "Avocado, onion, tomato, cilantro, lime.",
        "minutes": 10,
        "difficulty": "easy",
        "ingredients": [
          "Avocado",
          "Lime",
          "Onion",
          "Tomato",
          "Salt",
          "Toast"
        ],
        "steps": [
          "Mash avocado",
          "Fold mix-ins",
          "Pile on toast"
        ],
        "tip": "Salt early; lime late to keep green."
      },
      {
        "id": "healthy",
        "label": "Healthy · half avocado",
        "blurb": "Stretch with cucumber and tomato.",
        "minutes": 10,
        "difficulty": "easy",
        "ingredients": [
          "½ avocado",
          "Cucumber",
          "Tomato",
          "Egg white optional"
        ],
        "steps": [
          "Mash light",
          "Add crunch veg",
          "Toast"
        ],
        "tip": "Everything bagel seasoning is free flavor."
      },
      {
        "id": "rich",
        "label": "With olive oil drizzle",
        "blurb": "Finishing oil + flaky salt.",
        "minutes": 10,
        "difficulty": "easy",
        "ingredients": [
          "Guac",
          "EVOO",
          "Chili flakes"
        ],
        "steps": [
          "Classic guac",
          "Oil + chili"
        ],
        "tip": "Good sourdough changes everything."
      }
    ],
    "minutes": 10,
    "difficulty": "easy"
  },
  {
    "id": "japanese-soy-rice-bowl",
    "name": "Soy butter rice bowl",
    "cuisine": "japanese",
    "cuisineLabel": "Japanese",
    "color": "#0369A1",
    "meal": "lunch",
    "servings": 1,
    "tags": [
      "rice",
      "bowl",
      "fast"
    ],
    "why": "Donburi energy without sushi skills — three topping paths.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Rice bowl",
        "url": "https://www.youtube.com/results?search_query=japanese%20rice%20bowl%20recipe%20easy"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Egg + soy butter",
        "blurb": "Jammy egg, soy, tiny butter.",
        "minutes": 15,
        "difficulty": "easy",
        "ingredients": [
          "Rice",
          "Egg",
          "Soy",
          "Butter",
          "Scallion"
        ],
        "steps": [
          "Cook rice",
          "Fry/soft boil egg",
          "Soy-butter drizzle"
        ],
        "tip": "Furikake if you have it."
      },
      {
        "id": "healthy",
        "label": "Healthy · tofu veg",
        "blurb": "Baked tofu, steamed greens, less butter.",
        "minutes": 20,
        "difficulty": "easy",
        "ingredients": [
          "Rice",
          "Tofu",
          "Greens",
          "Soy",
          "Sesame"
        ],
        "steps": [
          "Crisp tofu",
          "Steam greens",
          "Assemble"
        ],
        "tip": "Press tofu 5 minutes for better browning."
      },
      {
        "id": "rich",
        "label": "With sesame oil finish",
        "blurb": "Toasted sesame oil + mayo swirl.",
        "minutes": 15,
        "difficulty": "easy",
        "ingredients": [
          "Rice",
          "Egg",
          "Sesame oil",
          "Mayo",
          "Soy"
        ],
        "steps": [
          "Bowl base",
          "Sauces",
          "Egg"
        ],
        "tip": "A little sesame oil goes far."
      }
    ],
    "minutes": 15,
    "difficulty": "easy"
  },
  {
    "id": "japanese-miso-soup",
    "name": "Miso soup",
    "cuisine": "japanese",
    "cuisineLabel": "Japanese",
    "color": "#0369A1",
    "meal": "snack",
    "servings": 2,
    "tags": [
      "miso",
      "soup"
    ],
    "why": "Five-minute reset soup between study blocks.",
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Miso soup",
        "url": "https://www.youtube.com/results?search_query=homemade%20miso%20soup%20tofu"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Tofu + wakame",
        "blurb": "Dashi or instant dashi + miso.",
        "minutes": 10,
        "difficulty": "easy",
        "ingredients": [
          "Miso",
          "Dashi or stock",
          "Tofu",
          "Wakame",
          "Scallion"
        ],
        "steps": [
          "Warm stock",
          "Add tofu/wakame",
          "Dissolve miso off boil"
        ],
        "tip": "Never hard-boil miso — kills aroma."
      },
      {
        "id": "healthy",
        "label": "Healthy · extra greens",
        "blurb": "Spinach/cabbage, lighter miso portion.",
        "minutes": 12,
        "difficulty": "easy",
        "ingredients": [
          "Miso",
          "Stock",
          "Greens",
          "Mushroom"
        ],
        "steps": [
          "Simmer veg",
          "Miso finish"
        ],
        "tip": "White miso is milder for beginners."
      },
      {
        "id": "rich",
        "label": "With sesame oil drop",
        "blurb": "One drop sesame oil + chili.",
        "minutes": 10,
        "difficulty": "easy",
        "ingredients": [
          "Miso soup",
          "Sesame oil",
          "Chili"
        ],
        "steps": [
          "Classic soup",
          "Finish aromatics"
        ],
        "tip": "Pair with rice for a mini meal."
      }
    ],
    "minutes": 10,
    "difficulty": "easy"
  },
  {
    "id": "thai-garlic-fried-rice",
    "name": "Thai-style fried rice",
    "cuisine": "thai",
    "cuisineLabel": "Thai",
    "color": "#15803D",
    "meal": "dinner",
    "servings": 2,
    "tags": [
      "fried rice",
      "thai"
    ],
    "why": "Day-old rice is the secret. Classic, light, or spicy-oil.",
    "image": "https://images.unsplash.com/photo-1603133875290-d28b4f8b5b5e?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Thai fried rice",
        "url": "https://www.youtube.com/results?search_query=thai%20fried%20rice%20recipe%20khao%20pad"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "With oil + fish sauce",
        "blurb": "Hot wok, scrambled egg, fish sauce.",
        "minutes": 20,
        "difficulty": "easy",
        "ingredients": [
          "Cold rice",
          "Egg",
          "Garlic",
          "Oil",
          "Fish sauce",
          "Lime"
        ],
        "steps": [
          "Fry garlic",
          "Egg",
          "Rice",
          "Season",
          "Lime"
        ],
        "tip": "Spread rice — don’t steam-clump."
      },
      {
        "id": "healthy",
        "label": "Healthy · less oil + veg",
        "blurb": "Nonstick pan, spray oil, double veg.",
        "minutes": 20,
        "difficulty": "easy",
        "ingredients": [
          "Rice",
          "Egg white or tofu",
          "Veg mix",
          "1 tsp oil",
          "Soy"
        ],
        "steps": [
          "Veg first",
          "Rice",
          "Light sauce"
        ],
        "tip": "Cauliflower rice mix stretches volume."
      },
      {
        "id": "spicy",
        "label": "Chili oil idea",
        "blurb": "Finish with chili crisp / oil.",
        "minutes": 20,
        "difficulty": "easy",
        "ingredients": [
          "Fried rice base",
          "Chili oil",
          "Cucumber"
        ],
        "steps": [
          "Cook base",
          "Chili oil",
          "Cool cucumber side"
        ],
        "tip": "Cucumber resets the heat."
      }
    ],
    "minutes": 20,
    "difficulty": "easy"
  },
  {
    "id": "thai-cucumber-salad",
    "name": "Thai cucumber salad",
    "cuisine": "thai",
    "cuisineLabel": "Thai",
    "color": "#15803D",
    "meal": "side",
    "servings": 2,
    "tags": [
      "salad",
      "thai",
      "fresh"
    ],
    "why": "Sweet-sour-spicy side that makes heavy mains feel lighter.",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Cucumber salad",
        "url": "https://www.youtube.com/results?search_query=thai%20cucumber%20salad%20ajad"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Ajad-style",
        "blurb": "Vinegar, sugar, chili, shallot.",
        "minutes": 10,
        "difficulty": "easy",
        "ingredients": [
          "Cucumber",
          "Shallot",
          "Chili",
          "Vinegar",
          "Sugar",
          "Salt"
        ],
        "steps": [
          "Dissolve dressing",
          "Toss",
          "Rest 5 min"
        ],
        "tip": "Salt cucumbers briefly if watery."
      },
      {
        "id": "healthy",
        "label": "Healthy · less sugar",
        "blurb": "More lime/vinegar, stevia optional.",
        "minutes": 10,
        "difficulty": "easy",
        "ingredients": [
          "Cucumber",
          "Lime",
          "Chili",
          "Fish sauce splash"
        ],
        "steps": [
          "Toss bright dressing",
          "Serve cold"
        ],
        "tip": "Herbs (mint/cilantro) add sweetness perception."
      },
      {
        "id": "peanut",
        "label": "Idea · crushed peanut",
        "blurb": "Crunch on top — almost satay-adjacent.",
        "minutes": 12,
        "difficulty": "easy",
        "ingredients": [
          "Salad",
          "Roasted peanuts",
          "Sesame"
        ],
        "steps": [
          "Classic salad",
          "Peanut finish"
        ],
        "tip": "Great next to grilled anything."
      }
    ],
    "minutes": 10,
    "difficulty": "easy"
  },
  {
    "id": "chinese-egg-fried-rice",
    "name": "Egg fried rice",
    "cuisine": "chinese",
    "cuisineLabel": "Chinese",
    "color": "#A16207",
    "meal": "lunch",
    "servings": 2,
    "tags": [
      "fried rice",
      "egg"
    ],
    "why": "The universal leftover upgrade.",
    "image": "https://images.unsplash.com/photo-1603133875290-d28b4f8b5b5e?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Egg fried rice",
        "url": "https://www.youtube.com/results?search_query=egg%20fried%20rice%20recipe%20wok"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Wok oil classic",
        "blurb": "High heat, soy, scallion.",
        "minutes": 15,
        "difficulty": "easy",
        "ingredients": [
          "Cold rice",
          "Eggs",
          "Oil",
          "Soy",
          "Scallion"
        ],
        "steps": [
          "Scramble egg",
          "Rice",
          "Season",
          "Scallion"
        ],
        "tip": "Wet rice = glue. Use day-old."
      },
      {
        "id": "healthy",
        "label": "Healthy · spray oil",
        "blurb": "Nonstick + lots of frozen peas.",
        "minutes": 15,
        "difficulty": "easy",
        "ingredients": [
          "Rice",
          "Egg",
          "Peas",
          "Low-sodium soy"
        ],
        "steps": [
          "Peas",
          "Egg",
          "Rice",
          "Soy"
        ],
        "tip": "Msg-free mushroom powder adds savor."
      },
      {
        "id": "rich",
        "label": "With sesame oil",
        "blurb": "Finish oil + white pepper.",
        "minutes": 15,
        "difficulty": "easy",
        "ingredients": [
          "Fried rice",
          "Sesame oil",
          "White pepper"
        ],
        "steps": [
          "Classic",
          "Finish aromatics"
        ],
        "tip": "Add off heat so sesame stays fragrant."
      }
    ],
    "minutes": 15,
    "difficulty": "easy"
  },
  {
    "id": "chinese-garlic-greens",
    "name": "Garlic stir-fried greens",
    "cuisine": "chinese",
    "cuisineLabel": "Chinese",
    "color": "#A16207",
    "meal": "side",
    "servings": 2,
    "tags": [
      "greens",
      "stir-fry",
      "garlic"
    ],
    "why": "Bok choy / gai lan energy — fast green side.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Garlic greens",
        "url": "https://www.youtube.com/results?search_query=garlic%20bok%20choy%20stir%20fry"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "With oil blanch-fry",
        "blurb": "Hot oil, garlic, splash soy.",
        "minutes": 12,
        "difficulty": "easy",
        "ingredients": [
          "Bok choy",
          "Garlic",
          "Oil",
          "Soy"
        ],
        "steps": [
          "Sear garlic",
          "Greens",
          "Splash water",
          "Soy"
        ],
        "tip": "Stems first, leaves last."
      },
      {
        "id": "healthy",
        "label": "Healthy · water sauté",
        "blurb": "Minimal oil, lid-steam finish.",
        "minutes": 12,
        "difficulty": "easy",
        "ingredients": [
          "Greens",
          "Garlic",
          "1 tsp oil",
          "Salt"
        ],
        "steps": [
          "Water + garlic",
          "Steam-lid",
          "Salt"
        ],
        "tip": "Still delicious with chili crisp on the side."
      },
      {
        "id": "oyster",
        "label": "Idea · oyster sauce glaze",
        "blurb": "Glossier cantonese takeout vibe.",
        "minutes": 12,
        "difficulty": "easy",
        "ingredients": [
          "Greens",
          "Oyster sauce",
          "Oil",
          "Garlic"
        ],
        "steps": [
          "Classic stir",
          "Oyster sauce glaze"
        ],
        "tip": "Vegetarian oyster sauce exists."
      }
    ],
    "minutes": 12,
    "difficulty": "easy"
  },
  {
    "id": "med-greek-salad",
    "name": "Greek salad bowl",
    "cuisine": "mediterranean",
    "cuisineLabel": "Mediterranean",
    "color": "#0F766E",
    "meal": "lunch",
    "servings": 2,
    "tags": [
      "salad",
      "mediterranean"
    ],
    "why": "Crunchy, briny, no cooking required (unless you want grilled bits).",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Greek salad",
        "url": "https://www.youtube.com/results?search_query=greek%20salad%20authentic"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "With olive oil",
        "blurb": "Tomato, cucumber, olive, feta, oregano oil.",
        "minutes": 15,
        "difficulty": "easy",
        "ingredients": [
          "Tomato",
          "Cucumber",
          "Olives",
          "Feta",
          "EVOO",
          "Oregano"
        ],
        "steps": [
          "Chop",
          "Dress",
          "Feta last"
        ],
        "tip": "No lettuce in classic Greek — optional."
      },
      {
        "id": "healthy",
        "label": "Healthy · less feta",
        "blurb": "Extra veg, measured oil, herbs.",
        "minutes": 15,
        "difficulty": "easy",
        "ingredients": [
          "Veg",
          "1 tsp oil",
          "Lemon",
          "Herbs",
          "Small feta"
        ],
        "steps": [
          "Chop",
          "Lemon-herb",
          "Crumbled feta"
        ],
        "tip": "Chickpeas make it a full meal."
      },
      {
        "id": "grain",
        "label": "Idea · add quinoa",
        "blurb": "Same salad over warm grains.",
        "minutes": 25,
        "difficulty": "easy",
        "ingredients": [
          "Salad",
          "Cooked quinoa"
        ],
        "steps": [
          "Cook grain",
          "Top with salad"
        ],
        "tip": "Packs well for campus days."
      }
    ],
    "minutes": 15,
    "difficulty": "easy"
  },
  {
    "id": "med-shakshuka",
    "name": "Shakshuka",
    "cuisine": "middle-eastern",
    "cuisineLabel": "Middle Eastern",
    "color": "#B45309",
    "meal": "breakfast",
    "servings": 2,
    "tags": [
      "eggs",
      "tomato",
      "shakshuka"
    ],
    "why": "Eggs poached in spiced tomato — one pan, three moods.",
    "image": "https://images.unsplash.com/photo-1590412200982-f595c5a2e2a1?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Shakshuka",
        "url": "https://www.youtube.com/results?search_query=shakshuka%20recipe%20easy"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "With olive oil",
        "blurb": "Pepper-onion-tomato, cumin, eggs.",
        "minutes": 30,
        "difficulty": "easy",
        "ingredients": [
          "Eggs",
          "Tomato",
          "Pepper",
          "Onion",
          "Cumin",
          "Oil",
          "Bread"
        ],
        "steps": [
          "Sauté base",
          "Simmer sauce",
          "Nest eggs",
          "Cover"
        ],
        "tip": "Sauce must be thick enough to hold eggs."
      },
      {
        "id": "healthy",
        "label": "Healthy · extra veg",
        "blurb": "Spinach + less oil, serve with salad not bread.",
        "minutes": 30,
        "difficulty": "easy",
        "ingredients": [
          "Eggs",
          "Tomato",
          "Spinach",
          "1 tsp oil",
          "Spices"
        ],
        "steps": [
          "Sauce",
          "Greens",
          "Eggs"
        ],
        "tip": "Egg whites + one yolk still feels rich."
      },
      {
        "id": "rich",
        "label": "With feta + oil",
        "blurb": "Feta crumble and chili oil finish.",
        "minutes": 30,
        "difficulty": "easy",
        "ingredients": [
          "Shakshuka",
          "Feta",
          "Chili oil"
        ],
        "steps": [
          "Classic",
          "Feta",
          "Oil"
        ],
        "tip": "Labneh on the side is elite."
      }
    ],
    "minutes": 30,
    "difficulty": "easy"
  },
  {
    "id": "me-hummus-plate",
    "name": "Hummus plate",
    "cuisine": "middle-eastern",
    "cuisineLabel": "Middle Eastern",
    "color": "#B45309",
    "meal": "snack",
    "servings": 2,
    "tags": [
      "hummus",
      "chickpea"
    ],
    "why": "Blend once, eat all week — swirl oil or keep it light.",
    "image": "https://images.unsplash.com/photo-1571066811602-716937eda2c1?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Hummus",
        "url": "https://www.youtube.com/results?search_query=creamy%20hummus%20recipe%20tahini"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "With olive oil swirl",
        "blurb": "Tahini-forward, ice-cold water trick.",
        "minutes": 15,
        "difficulty": "easy",
        "ingredients": [
          "Chickpeas",
          "Tahini",
          "Lemon",
          "Garlic",
          "EVOO"
        ],
        "steps": [
          "Blend",
          "Adjust lemon/salt",
          "Oil swirl + paprika"
        ],
        "tip": "Peel chickpeas for ultra-smooth (optional)."
      },
      {
        "id": "healthy",
        "label": "Healthy · less oil",
        "blurb": "Skip top oil; rely on tahini + lemon.",
        "minutes": 15,
        "difficulty": "easy",
        "ingredients": [
          "Chickpeas",
          "Tahini",
          "Lemon",
          "Cumin"
        ],
        "steps": [
          "Blend",
          "Serve with veg sticks"
        ],
        "tip": "Aquafaba helps creaminess without oil."
      },
      {
        "id": "spiced",
        "label": "Idea · warm spiced oil",
        "blurb": "Cumin-chili oil on top.",
        "minutes": 18,
        "difficulty": "easy",
        "ingredients": [
          "Hummus",
          "Oil",
          "Cumin",
          "Chili"
        ],
        "steps": [
          "Warm spices in oil",
          "Pour"
        ],
        "tip": "Pita chips optional — cucumbers first."
      }
    ],
    "minutes": 15,
    "difficulty": "easy"
  },
  {
    "id": "korean-bibimbap",
    "name": "Bibimbap bowl",
    "cuisine": "korean",
    "cuisineLabel": "Korean",
    "color": "#BE123C",
    "meal": "dinner",
    "servings": 2,
    "tags": [
      "bibimbap",
      "rice",
      "bowl"
    ],
    "why": "Colorful rice bowl — gojolban energy without a restaurant.",
    "image": "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Bibimbap",
        "url": "https://www.youtube.com/results?search_query=bibimbap%20recipe%20homemade"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "With sesame oil + egg",
        "blurb": "Veg banchan, gochujang, fried egg.",
        "minutes": 40,
        "difficulty": "medium",
        "ingredients": [
          "Rice",
          "Spinach",
          "Carrot",
          "Mushroom",
          "Egg",
          "Gochujang",
          "Sesame oil"
        ],
        "steps": [
          "Prep veg separately",
          "Rice bowl",
          "Egg",
          "Sauce",
          "Mix"
        ],
        "tip": "Season each veg lightly — bowl shouldn’t be bland."
      },
      {
        "id": "healthy",
        "label": "Healthy · more veg less oil",
        "blurb": "Steam/sauté with spray oil; turkey or tofu.",
        "minutes": 35,
        "difficulty": "medium",
        "ingredients": [
          "Rice or cauliflower mix",
          "Veg",
          "Tofu",
          "Gochujang light"
        ],
        "steps": [
          "Veg prep",
          "Assemble",
          "Mix"
        ],
        "tip": "Brown rice works if cooked ahead."
      },
      {
        "id": "dol",
        "label": "Idea · crispy bottom",
        "blurb": "Hot stone / oiled skillet for nurungji crunch.",
        "minutes": 45,
        "difficulty": "medium",
        "ingredients": [
          "Rice",
          "Oil",
          "Toppings"
        ],
        "steps": [
          "Heat oiled skillet",
          "Press rice",
          "Toppings",
          "Crust forms"
        ],
        "tip": "Don’t scrape too early."
      }
    ],
    "minutes": 40,
    "difficulty": "medium"
  },
  {
    "id": "korean-kimchi-fried-rice",
    "name": "Kimchi fried rice",
    "cuisine": "korean",
    "cuisineLabel": "Korean",
    "color": "#BE123C",
    "meal": "lunch",
    "servings": 2,
    "tags": [
      "kimchi",
      "fried rice"
    ],
    "why": "Spicy leftover magic — butter optional.",
    "image": "https://images.unsplash.com/photo-1603133875290-d28b4f8b5b5e?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Kimchi fried rice",
        "url": "https://www.youtube.com/results?search_query=kimchi%20fried%20rice%20recipe"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "With oil + gochujang",
        "blurb": "Chopped kimchi, rice, egg.",
        "minutes": 20,
        "difficulty": "easy",
        "ingredients": [
          "Kimchi",
          "Rice",
          "Oil",
          "Gochujang",
          "Egg",
          "Sesame"
        ],
        "steps": [
          "Fry kimchi",
          "Rice",
          "Sauce",
          "Egg"
        ],
        "tip": "Older kimchi = better fry."
      },
      {
        "id": "healthy",
        "label": "Healthy · less oil",
        "blurb": "Nonstick, extra cabbage, turkey bacon skip.",
        "minutes": 20,
        "difficulty": "easy",
        "ingredients": [
          "Kimchi",
          "Rice",
          "1 tsp oil",
          "Egg white"
        ],
        "steps": [
          "Fry",
          "Rice",
          "Egg"
        ],
        "tip": "Rinse kimchi lightly if too salty."
      },
      {
        "id": "butter",
        "label": "With butter finish",
        "blurb": "Butter + mozzarella optional melt.",
        "minutes": 20,
        "difficulty": "easy",
        "ingredients": [
          "Kimchi rice",
          "Butter",
          "Cheese optional"
        ],
        "steps": [
          "Classic",
          "Butter melt",
          "Cheese broil optional"
        ],
        "tip": "Spam is traditional-ish — your call."
      }
    ],
    "minutes": 20,
    "difficulty": "easy"
  },
  {
    "id": "french-omelette",
    "name": "French omelette",
    "cuisine": "french",
    "cuisineLabel": "French",
    "color": "#1D4ED8",
    "meal": "breakfast",
    "servings": 1,
    "tags": [
      "eggs",
      "omelette",
      "french"
    ],
    "why": "Soft rolled eggs — technique practice that feeds you.",
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "French omelette",
        "url": "https://www.youtube.com/results?search_query=french%20omelette%20technique"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "With butter",
        "blurb": "Pale, creamy, barely colored.",
        "minutes": 10,
        "difficulty": "medium",
        "ingredients": [
          "3 eggs",
          "Butter",
          "Salt",
          "Chives"
        ],
        "steps": [
          "Beat eggs",
          "Butter pan",
          "Stir rapidly",
          "Roll"
        ],
        "tip": "Medium-low heat; patience > browning."
      },
      {
        "id": "healthy",
        "label": "Healthy · 1 yolk",
        "blurb": "Two whites + one yolk; oil spray.",
        "minutes": 10,
        "difficulty": "medium",
        "ingredients": [
          "Eggs",
          "Herbs",
          "Spinach"
        ],
        "steps": [
          "Same technique",
          "Fold greens"
        ],
        "tip": "Nonstick is your friend."
      },
      {
        "id": "cheese",
        "label": "Idea · cheese filling",
        "blurb": "Gruyère melt inside the roll.",
        "minutes": 12,
        "difficulty": "medium",
        "ingredients": [
          "Eggs",
          "Butter",
          "Cheese"
        ],
        "steps": [
          "Cook",
          "Cheese before roll"
        ],
        "tip": "Still keep the outside pale."
      }
    ],
    "minutes": 10,
    "difficulty": "medium"
  },
  {
    "id": "american-sheet-veg",
    "name": "Sheet-pan veggies + protein",
    "cuisine": "american",
    "cuisineLabel": "American comfort",
    "color": "#A16207",
    "meal": "dinner",
    "servings": 2,
    "tags": [
      "sheet-pan",
      "easy",
      "meal-prep"
    ],
    "why": "Hands-off dinner while you finish a chapter.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Sheet pan",
        "url": "https://www.youtube.com/results?search_query=sheet%20pan%20dinner%20chicken%20vegetables"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "With oil roast",
        "blurb": "Veg + chicken/tofu, 220°C.",
        "minutes": 35,
        "difficulty": "easy",
        "ingredients": [
          "Veg",
          "Protein",
          "2 tbsp oil",
          "Salt",
          "Spices"
        ],
        "steps": [
          "Toss",
          "Spread",
          "Roast",
          "Rest"
        ],
        "tip": "Crowding steams — use two pans if needed."
      },
      {
        "id": "healthy",
        "label": "Healthy · parchment + spray",
        "blurb": "Minimal oil, more brassicas.",
        "minutes": 35,
        "difficulty": "easy",
        "ingredients": [
          "Veg",
          "Lean protein",
          "Spices",
          "Lemon"
        ],
        "steps": [
          "Season",
          "Roast",
          "Lemon"
        ],
        "tip": "Add delicate greens after roasting."
      },
      {
        "id": "bbq",
        "label": "Idea · BBQ glaze",
        "blurb": "Brush glaze last 8 minutes.",
        "minutes": 40,
        "difficulty": "easy",
        "ingredients": [
          "Sheet pan",
          "BBQ sauce"
        ],
        "steps": [
          "Roast almost done",
          "Glaze",
          "Finish"
        ],
        "tip": "Sugar burns — glaze late."
      }
    ],
    "minutes": 35,
    "difficulty": "easy"
  },
  {
    "id": "american-overnight-oats",
    "name": "Overnight oats",
    "cuisine": "american",
    "cuisineLabel": "American comfort",
    "color": "#A16207",
    "meal": "breakfast",
    "servings": 1,
    "tags": [
      "oats",
      "breakfast",
      "meal-prep"
    ],
    "why": "Set at night, study in the morning.",
    "youtube": [
      {
        "label": "Overnight oats",
        "url": "https://www.youtube.com/results?search_query=overnight%20oats%20healthy%20recipe"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Milk + peanut butter",
        "blurb": "Creamy jar breakfast.",
        "minutes": 5,
        "difficulty": "easy",
        "ingredients": [
          "Oats",
          "Milk",
          "PB",
          "Banana",
          "Pinch salt"
        ],
        "steps": [
          "Mix jar",
          "Fridge overnight",
          "Stir"
        ],
        "tip": "Ratio ~1:1 oats to liquid; adjust."
      },
      {
        "id": "healthy",
        "label": "Healthy · chia + berries",
        "blurb": "Yogurt water mix, no PB.",
        "minutes": 5,
        "difficulty": "easy",
        "ingredients": [
          "Oats",
          "Yogurt",
          "Chia",
          "Berries"
        ],
        "steps": [
          "Mix",
          "Fridge",
          "Berries AM"
        ],
        "tip": "Cinnamon tricks sweetness perception."
      },
      {
        "id": "rich",
        "label": "With coconut oil drizzle",
        "blurb": "Weekend treat oats.",
        "minutes": 5,
        "difficulty": "easy",
        "ingredients": [
          "Oats",
          "Milk",
          "Coconut",
          "Chocolate chips"
        ],
        "steps": [
          "Mix",
          "Top rich"
        ],
        "tip": "Still oats — still breakfast."
      }
    ],
    "minutes": 5,
    "difficulty": "easy"
  },
  {
    "id": "french-tomato-tartine",
    "name": "Tomato tartine",
    "cuisine": "french",
    "cuisineLabel": "French",
    "color": "#1D4ED8",
    "meal": "lunch",
    "servings": 1,
    "tags": [
      "toast",
      "tomato",
      "french"
    ],
    "why": "Open-faced tomato toast — café vibes at the desk.",
    "image": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&h=675&q=75",
    "youtube": [
      {
        "label": "Tartine",
        "url": "https://www.youtube.com/results?search_query=tomato%20tartine%20recipe"
      }
    ],
    "ways": [
      {
        "id": "classic",
        "label": "Olive oil + salt",
        "blurb": "Rub garlic on toast, tomato, oil.",
        "minutes": 10,
        "difficulty": "easy",
        "ingredients": [
          "Bread",
          "Tomato",
          "Garlic",
          "EVOO",
          "Salt"
        ],
        "steps": [
          "Toast",
          "Garlic rub",
          "Tomato",
          "Oil"
        ],
        "tip": "Flaky salt matters."
      },
      {
        "id": "healthy",
        "label": "Healthy · ricotta light",
        "blurb": "Thin ricotta layer, pile tomato.",
        "minutes": 10,
        "difficulty": "easy",
        "ingredients": [
          "Bread",
          "Low-fat ricotta",
          "Tomato",
          "Basil"
        ],
        "steps": [
          "Toast",
          "Spread",
          "Tomato"
        ],
        "tip": "Whole-grain bread keeps you fuller."
      },
      {
        "id": "rich",
        "label": "With butter + anchovy idea",
        "blurb": "Butter base, optional anchovy.",
        "minutes": 10,
        "difficulty": "easy",
        "ingredients": [
          "Bread",
          "Butter",
          "Tomato",
          "Anchovy optional"
        ],
        "steps": [
          "Butter toast",
          "Tomato",
          "Anchovy"
        ],
        "tip": "Cornichons on the side slap."
      }
    ],
    "minutes": 10,
    "difficulty": "easy"
  }
]

export function recipeOfTheDay(date = new Date()) {
  const key = date.toISOString().slice(0, 10)
  let h = 0
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) | 0
  return recipes[Math.abs(h) % recipes.length]
}

export function getWay(recipe, wayId) {
  if (!recipe?.ways?.length) return null
  return recipe.ways.find((w) => w.id === wayId) || recipe.ways[0]
}
