-- Keeps the existing public recipe section populated after the first D1 setup.
-- Admin edits can update or delete these seeded rows later.

INSERT OR IGNORE INTO recipes
  (id, slug, status, servings, prep_minutes, cook_minutes, total_minutes, difficulty, published_at)
VALUES
  ('seed-mapo', 'mapo-tofu', 'published', 2, 10, 15, 25, 'medium', strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  ('seed-dandan', 'dan-dan-noodles', 'published', 2, 5, 10, 15, 'easy', strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  ('seed-bok-choy', 'garlic-bok-choy-shiitake', 'published', 2, 5, 5, 10, 'easy', strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  ('seed-fried-rice', 'egg-scallion-fried-rice', 'published', 2, 5, 7, 12, 'easy', strftime('%Y-%m-%dT%H:%M:%fZ', 'now'));

INSERT OR IGNORE INTO recipe_translations
  (recipe_id, locale, title, description, origin, occasion, notes, ingredients_json, steps_json, nutrition_json)
VALUES
  (
    'seed-mapo',
    'en',
    'Mapo Tofu',
    'Sichuan classic - silken tofu in a numbing chili-bean sauce.',
    'Sichuan',
    'Weeknight',
    '',
    '[{"name":"silken tofu","amount":"400","unit":"g","aisle":"Fresh / fridge","inStore":true},{"name":"doubanjiang broad-bean paste","amount":"2","unit":"tbsp","aisle":"Sauces","inStore":true},{"name":"Sichuan peppercorns","amount":"1","unit":"tsp","aisle":"Spices","inStore":true},{"name":"ground pork","amount":"150","unit":"g","inStore":false},{"name":"scallions","amount":"2","unit":"","inStore":false},{"name":"light soy sauce","amount":"1","unit":"tbsp","aisle":"Sauces","inStore":true}]',
    '[{"text":"Cube tofu, blanch 1 minute in salted water, drain.","timerSeconds":60},{"text":"Toast Sichuan peppercorns, grind and set aside."},{"text":"Brown pork in oil. Add ginger, garlic and doubanjiang until red oil separates."},{"text":"Add stock, soy and tofu. Simmer gently for 4 minutes.","timerSeconds":240},{"text":"Thicken with slurry, fold in scallions and dust with peppercorn."}]',
    '{}'
  ),
  (
    'seed-dandan',
    'en',
    'Dan Dan Noodles',
    'Chengdu street bowl - sesame, chili oil, vinegar, crisp pork.',
    'Chengdu',
    'Quick lunch',
    '',
    '[{"name":"wheat noodles","amount":"200","unit":"g","aisle":"Noodles","inStore":true},{"name":"Chinese sesame paste","amount":"2","unit":"tbsp","aisle":"Sauces","inStore":true},{"name":"chili crisp or chili oil","amount":"2","unit":"tbsp","aisle":"Sauces","inStore":true},{"name":"Chinkiang black vinegar","amount":"1","unit":"tbsp","aisle":"Sauces","inStore":true},{"name":"ground pork","amount":"100","unit":"g","inStore":false},{"name":"scallions","amount":"","unit":"","inStore":false}]',
    '[{"text":"Whisk sesame paste, chili oil, vinegar, soy and a splash of noodle water."},{"text":"Crisp pork in a dry pan until dark and fragrant."},{"text":"Boil noodles to bite and reserve a ladle of water."},{"text":"Pile noodles over sauce, crown with pork and scallions, then toss."}]',
    '{}'
  ),
  (
    'seed-bok-choy',
    'en',
    'Garlic Bok Choy & Shiitake',
    'Two ingredients, big flavour. Glossy, garlicky, ready in minutes.',
    '',
    'Vegetarian side',
    '',
    '[{"name":"baby bok choy","amount":"4","unit":"heads","inStore":false},{"name":"dried shiitake","amount":"6","unit":"","aisle":"Pantry","inStore":true},{"name":"vegetarian oyster mushroom sauce","amount":"2","unit":"tbsp","aisle":"Sauces","inStore":true},{"name":"Shaoxing wine","amount":"1","unit":"tbsp","aisle":"Pantry","inStore":true},{"name":"garlic cloves","amount":"4","unit":"","inStore":false},{"name":"sesame oil","amount":"","unit":"","aisle":"Sauces","inStore":true}]',
    '[{"text":"Soak shiitake for 20 minutes in warm water and keep the soaking liquid.","timerSeconds":1200},{"text":"Halve bok choy, blanch briefly and shock in cold water."},{"text":"Sizzle garlic in oil, add shiitake and a splash of wine."},{"text":"Add bok choy, mushroom sauce and a little soaking liquid."},{"text":"Tighten with cornstarch slurry and finish with sesame oil."}]',
    '{}'
  ),
  (
    'seed-fried-rice',
    'en',
    'Egg & Scallion Fried Rice',
    'Day-old jasmine rice, hot wok, three ingredients done right.',
    '',
    'Weeknight',
    '',
    '[{"name":"day-old jasmine rice","amount":"400","unit":"g","aisle":"Pantry","inStore":true},{"name":"eggs","amount":"3","unit":"","inStore":false},{"name":"scallions","amount":"4","unit":"","inStore":false},{"name":"light soy sauce","amount":"","unit":"","aisle":"Sauces","inStore":true},{"name":"white pepper","amount":"","unit":"","aisle":"Spices","inStore":true},{"name":"sesame oil","amount":"","unit":"","aisle":"Sauces","inStore":true}]',
    '[{"text":"Beat eggs with a pinch of salt and slice scallion whites and greens separately."},{"text":"Scramble eggs in a smoking-hot wok and lift out."},{"text":"Add scallion whites and rice. Press, toss and break clumps."},{"text":"Return eggs, add soy sauce down the side of the wok and season with white pepper."},{"text":"Off heat, add scallion greens and sesame oil, then serve immediately."}]',
    '{}'
  );

INSERT OR IGNORE INTO recipe_tags (recipe_id, tag) VALUES
  ('seed-mapo', 'spicy'),
  ('seed-dandan', 'spicy'),
  ('seed-dandan', 'quick'),
  ('seed-bok-choy', 'vegetarian'),
  ('seed-bok-choy', 'quick'),
  ('seed-fried-rice', 'vegetarian'),
  ('seed-fried-rice', 'quick');
