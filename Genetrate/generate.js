// const { Input } = require("postcss");
const love = document.getElementById("love");
const lonely = document.getElementById("lonely");
const stress = document.getElementById("stress");
const general = document.getElementById("general");
const selectedRadio = document.querySelector("input[name='input']:checked");
const target = document.getElementById("target");
function Generate() {
  const selectedRadio = document.querySelector("input[name='input']:checked");

  if (!selectedRadio) {
    target.innerHTML = "Did not select a choice";
  } else if (selectedRadio === love) {
    //ARR OF QUOTES;
    const loveQuotes = [
      "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
      "You are my sun, my moon, and all my stars.",
      "In a sea of people, my eyes will always search for you.",
      "Love is the greatest refreshment in life.",
      "To love and be loved is to feel the sun from both sides.",
      "I have waited for this moment all my life, and I will love you all my life.",
      "Love is composed of a single soul inhabiting two bodies.",
      "True love is not about perfection, it is hidden in flaws.",
      "The best thing to hold onto in life is each other.",
      "Love is when the other person’s happiness is more important than your own.",
      "I would rather spend one lifetime with you, than face all the ages of this world alone.",
      "You don’t marry someone you can live with – you marry someone you cannot live without.",
      "When I am with you, the only place I want to be is closer.",
      "To love is to recognize yourself in another.",
      "Love doesn’t make the world go round; love is what makes the ride worthwhile.",
      "In your smile, I see something more beautiful than stars.",
      "Love is like the wind, you can’t see it, but you can feel it.",
      "When I look into your eyes, I see the future and all the love we will have.",
      "I love you not only for what you are, but for what I am when I am with you.",
      "The best love is the kind that awakens the soul and makes us reach for more.",
      "When we love, we are the best version of ourselves.",
      "There is no remedy for love but to love more.",
      "Love is a friendship set to music.",
      "In your arms, I found my home.",
      "Love is the only reality, and it is not a mere sentiment. It is the ultimate truth at the heart of creation.",
      "If I had a flower for every time I thought of you, I could walk through my garden forever.",
      "You are the one I want to spend every day of my life with.",
      "The heart wants what it wants, and it’s no use denying it.",
      "Love is a game that two can play and both win.",
      "You’re the reason I believe in love, and the reason I’ll never give up on it.",
      "No matter how far apart we are, you’ll always be the love of my life.",
    ];
    //RANDOM NUMBERS GENERATORS;
    const number = Math.floor(Math.random() * loveQuotes.length);
    const value = loveQuotes[number];
    //ADD TO THE D.O.M;
    target.textContent = value;
  } else if (selectedRadio === lonely) {
    //ARR OF QUOTES;
    const lonelyQuotes = [
      "Loneliness is not the absence of people, it’s the absence of connection.",
      "Sometimes, the loneliest place is inside your own mind.",
      "The worst kind of loneliness is not being able to talk to anyone about what’s on your mind.",
      "I would rather be alone than be surrounded by people who make me feel invisible.",
      "Loneliness is the silent killer of dreams.",
      "It’s strange how you can feel so alone, even when there’s a world of people around you.",
      "The hardest part of being alone is trying to convince yourself that you’re okay with it.",
      "Being alone is not the problem, it’s the feeling of being forgotten that hurts the most.",
      "Sometimes, I wonder if I’m destined to be alone forever, lost in a crowd of people who will never notice me.",
      "Loneliness is a mirror that reflects the emptiness you feel inside.",
      "There’s a difference between being alone and being lonely. Loneliness hurts more.",
      "It’s hard to find peace when your heart is still waiting for someone to return.",
      "I can live with being alone, but I can’t live with the silence that comes with it.",
      "The moments when you feel most alone are often the moments you need to be strongest.",
      "The loneliest people are often the ones who care the most.",
      "I never wanted to be alone, but somehow, loneliness feels more comforting than rejection.",
      "Loneliness is the feeling of being lost in a world that never stops moving.",
      "When you’re alone, it’s easy to believe that no one understands you.",
      "Sometimes, you don’t realize how alone you are until the silence becomes deafening.",
      "Being alone is like an open wound that no one can see, but it hurts all the same.",
      "Loneliness is a shadow that follows you, even when you're surrounded by light.",
      "The absence of love is not just a lack of affection—it’s the absence of warmth in a cold world.",
      "Loneliness makes you see the world as a place where everyone else is happy, except for you.",
      "There is a kind of loneliness that comes from being surrounded by people, yet feeling completely unseen.",
      "Sometimes, I wonder if my only companion is the silence that fills the room.",
      "Loneliness is the feeling of your heart screaming for something it can’t find.",
      "It’s easier to hide loneliness behind a smile than to let others see the emptiness inside.",
      "I have learned that the loudest cries often come from the quietest hearts.",
      "Loneliness isn’t about being alone, it’s about feeling disconnected from everyone around you.",
      "Some days, the loneliness is so thick, you feel like you could reach out and touch it.",
      "Being alone is hard, but what’s harder is feeling alone even when you’re with someone.",
    ];
    const number = Math.floor(Math.random() * lonelyQuotes.length);
    const value = lonelyQuotes[number];
    target.textContent = value;
  } else if (selectedRadio === stress) {
    //ARR OF QUOTES;
    const stressQuotes = [
      "Stress is the feeling you get when you’ve been trying to solve a problem for too long and can’t find the answer.",
      "Sometimes, the most productive thing you can do is relax.",
      "Stress is like a rocking chair: it gives you something to do, but it doesn’t get you anywhere.",
      "The greatest weapon against stress is our ability to choose one thought over another.",
      "It’s not the load that breaks you down, it’s the way you carry it.",
      "Stress is caused by being 'here' but wanting to be 'there.'",
      "Sometimes, the best way to cope with stress is to simply stop trying to control everything.",
      "When you let go of the things you cannot control, you free up space for peace.",
      "The time to relax is when you don’t have time for it.",
      "Don’t let stress make you forget the beauty of life.",
      "Stress is what happens when your mind overrides your body's desire to choke the life out of you.",
      "The biggest source of stress in your life is not your job, your family, or your finances—it’s your thoughts about them.",
      "You can’t pour from an empty cup. Take care of yourself first.",
      "Stress is the body’s way of telling you that you’re not living in alignment with your purpose.",
      "Life is 10% what happens to us and 90% how we react to it.",
      "The more stressed you are, the less productive you’ll be, so take a deep breath and slow down.",
      "When everything feels like it’s falling apart, remember that sometimes things have to fall apart to make way for something better.",
      "Stress doesn’t come from what’s going on in your life, it comes from your thoughts about what’s going on in your life.",
      "Let go of the things you can’t control, and watch the stress melt away.",
      "You don’t have to control your thoughts. You just have to stop letting them control you.",
      "If you want to conquer the anxiety of life, live in the moment, live in the breath.",
      "It’s okay to not be okay. Stress will pass, and so will you.",
      "Stress is an emotional reaction to an external situation. Calm comes when we change the way we respond to that situation.",
      "Worrying doesn’t take away tomorrow’s troubles, it only takes away today’s peace.",
      "Sometimes the best cure for stress is simply taking a break and letting your mind reset.",
      "Stress makes you believe that you have to control every situation, but life has a way of working itself out.",
      "You are stronger than you think, and more capable than you believe, even when stress is overwhelming.",
      "Sometimes the best way to reduce stress is to simply say 'no' to things that don’t bring you joy.",
      "Stress is not a reflection of your ability to cope—it’s a reflection of how much you’re carrying in the moment.",
      "You can’t avoid stress, but you can learn how to manage it better.",
      "Stress is the enemy of clarity. When you feel overwhelmed, take a step back and breathe.",
    ];
    const number = Math.floor(Math.random() * stressQuotes.length);
    const value = stressQuotes[number];
    target.textContent = value;
  } else if (selectedRadio === general) {
    //arr of quotes;
    const generalQuotes = [
      "The only way to do great work is to love what you do.",
      "In three words I can sum up everything I've learned about life: it goes on.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "The only limit to our realization of tomorrow is our doubts of today.",
      "It always seems impossible until it’s done.",
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      "You miss 100% of the shots you don’t take.",
      "The best way to predict your future is to create it.",
      "Life is what happens when you're busy making other plans.",
      "Don’t watch the clock; do what it does. Keep going.",
      "It is never too late to be what you might have been.",
      "Believe you can and you're halfway there.",
      "Everything you can imagine is real.",
      "The journey of a thousand miles begins with one step.",
      "If you want to go fast, go alone. If you want to go far, go together.",
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      "Do one thing every day that scares you.",
      "We do not remember days, we remember moments.",
      "The only way to find yourself is to lose yourself in the service of others.",
      "You must be the change you wish to see in the world.",
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
      "It does not matter how slowly you go as long as you do not stop.",
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      "Act as if what you do makes a difference. It does.",
      "The mind is everything. What you think you become.",
      "Happiness is not something ready-made. It comes from your own actions.",
      "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
      "You only live once, but if you do it right, once is enough.",
      "Do not wait for leaders; do it alone, person to person.",
      "Life is either a daring adventure or nothing at all.",
    ];
    const number = Math.floor(Math.random() * generalQuotes.length);
    const value = generalQuotes[number];
    target.textContent = value;
  }
}
