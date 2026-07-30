const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -30px 0px",
  },
);

revealItems.forEach((item) => observer.observe(item));

const modal = document.getElementById("imageModal");
const modalImage = document.querySelector(".modal-image");
const modalCaption = document.querySelector(".modal-caption");
const modalClose = document.querySelector(".modal-close");

const heroSection = document.getElementById("heroSection");
const heroImages = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1800&q=80",
];
let heroIndex = 0;

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  if (heroSection) {
    heroSection.style.backgroundImage = `linear-gradient(120deg, rgba(14, 40, 69, 0.65), rgba(0, 0, 0, 0.24)), url('${heroImages[heroIndex]}')`;
  }
}, 4000);

const storageKey = "beautyExplorerGallery";

const readStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
};

const saveStorage = (data) => {
  localStorage.setItem(storageKey, JSON.stringify(data));
};

const openModal = (imageSrc, caption) => {
  modalImage.src = imageSrc;
  modalCaption.textContent = caption;
  modal.style.setProperty("--modal-image", `url('${imageSrc}')`);
  modal.classList.add("open");
  document.body.classList.add("modal-open");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  modal.classList.remove("open");
  document.body.classList.remove("modal-open");
  modal.setAttribute("aria-hidden", "true");
};

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

const galleryData = {
  animals: [
    {
      title: "Majestic Lion",
      description: "Royal, powerful, and timeless in the golden grasslands.",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Gentle Elephant",
      description: "Quiet strength and deep wisdom in every step.",
      image:
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Playful Panda",
      description: "A soft reminder of calm and comfort in the forest.",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Wild Tiger",
      description: "Stripes of beauty wrapped in fierce grace.",
      image:
        "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Ocean Dolphin",
      description: "Joyful movement that feels almost like music.",
      image:
        "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Arctic Wolf",
      description: "Free spirits roaming through crisp white landscapes.",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Koala in Eucalyptus",
      description: "Relaxed and adorable beneath the Australian trees.",
      image:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Colorful Bird",
      description: "Bright wings and lively energy in the treetops.",
      image:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Penguin Parade",
      description: "Charming little swimmers with endless character.",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Fox in Snow",
      description: "Soft fur and sharp eyes against a winter glow.",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Graceful Giraffe",
      description: "Gentle elegance stretched high above the plain.",
      image:
        "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Beautiful Zebra",
      description: "Bold patterns that look almost painted by nature.",
      image:
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Snow Leopard",
      description: "A striking silhouette in the crisp mountain air.",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Sea Turtle",
      description: "A calm traveler beneath the ocean surface.",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Brown Bear",
      description: "A powerful presence framed by forest greens.",
      image:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Flamingo",
      description: "Graceful pink elegance along the shoreline.",
      image:
        "https://images.unsplash.com/photo-1521651201144-634f700b36ef?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Alpine Ibex",
      description: "Steady and poised on rocky heights.",
      image:
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Orca",
      description: "A majestic hunter slicing through cool waters.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Red Panda",
      description: "A fluff of color in the canopy of trees.",
      image:
        "https://images.unsplash.com/photo-1565035010268-5c4f3f1d84e0?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Meerkat",
      description: "Bright eyes and playful curiosity in the desert.",
      image:
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Kangaroo",
      description: "A bold, graceful figure across the outback.",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Peacock",
      description: "A vibrant display of color and elegance.",
      image:
        "https://images.unsplash.com/photo-1526336274115-6d8e6de1b0f2?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Otter",
      description: "Playful movement in a crystal stream.",
      image:
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Bengal Tiger",
      description: "A fierce glow in the jungle shadows.",
      image:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Polar Bear",
      description: "A legend of the icy wilderness.",
      image:
        "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Macaw",
      description: "Colorful and full of life in the rainforest.",
      image:
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Hedgehog",
      description: "Sweet little charm tucked in the brush.",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Dolphin Leap",
      description: "A burst of joy above the waves.",
      image:
        "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Siberian Husky",
      description: "A bright companion in frozen landscapes.",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Snowy Owl",
      description: "Quiet wings and moonlit eyes.",
      image:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Cheetah",
      description: "Swift elegance in the golden plain.",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Giant Panda",
      description: "Soft, curious, and wonderfully calm.",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
    },
  ],
  cars: [
    {
      title: "Red Sports Car",
      description: "Performance and elegance wrapped in one bold design.",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Luxury Sedan",
      description: "Refined comfort with a commanding visual presence.",
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Classic Convertible",
      description: "Vintage charm paired with effortless style.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Supercar",
      description: "Sharp angles and stunning speed in a dark finish.",
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Blue Coupe",
      description: "Clean geometry and polished surfaces that shine brightly.",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "White Performance Car",
      description: "Modern lines and pure presence on the open road.",
      image:
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Yellow Roadster",
      description: "Bright energy and fearless design in every angle.",
      image:
        "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Silver Machine",
      description: "Shimmering elegance with a smooth aerodynamic silhouette.",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Orange Beast",
      description: "Bold, vibrant, and impossible to ignore.",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Green SUV",
      description: "Modern utility with a polished and luxurious finish.",
      image:
        "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Gray Avant-Garde Car",
      description: "Understated design with futuristic styling.",
      image:
        "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Black Icon",
      description: "A powerful presence that looks perfect under every light.",
      image:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Night Racer",
      description: "Dark chrome and aggressive curves at speed.",
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Electric Hatch",
      description: "Modern efficiency with sleek design language.",
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "City Cruiser",
      description: "Smooth style for the contemporary urban drive.",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Champagne Coupe",
      description: "A luxurious silhouette with a soft glow.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Coral Roadster",
      description: "Warm color and bold personality.",
      image:
        "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Steel GT",
      description: "Tough lines and polished craftsmanship.",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Midnight Coupe",
      description: "Elegant and dramatic under evening light.",
      image:
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Desert Rally",
      description: "Adventure-ready with a daring hue.",
      image:
        "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Luxe SUV",
      description: "Spacious comfort with premium presence.",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Velvet Sedan",
      description: "Soft finishes and refined lines.",
      image:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Emerald Sport",
      description: "Vivid color and sleek motion in one frame.",
      image:
        "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Silver Skyline",
      description: "A polished finish under the city lights.",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Dune Racer",
      description: "Built for open roads and wide horizons.",
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Ocean Drift",
      description: "Cool tones and fluid curves.",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Golden Coupe",
      description: "A warm blend of prestige and style.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Chrome Speedster",
      description: "An iconic shape with modern sparkle.",
      image:
        "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Ice Blue GT",
      description: "Cool elegance with impressive stance.",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Canyon Roadster",
      description: "Adventurous spirit and sculpted beauty.",
      image:
        "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Royal Sedan",
      description: "Refined luxury with graceful proportions.",
      image:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Glacier Coupe",
      description: "Smooth and striking in cool-toned light.",
      image:
        "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Velvet GT",
      description: "Luxury and boldness in a single frame.",
      image:
        "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80",
    },
  ],
  nature: [
    {
      title: "Mountain View",
      description: "Majestic peaks glowing in the early morning light.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Forest Path",
      description: "Quiet trees and soft light create a calm escape.",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Still Lake",
      description: "A peaceful mirror reflecting the sky above.",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Golden Desert",
      description: "Wide horizons and warm light stretching endlessly.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Blooming Meadow",
      description: "Soft colors and fresh air in a quiet valley.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Coastal Beauty",
      description: "Blue water meeting shore in a calm rhythm.",
      image:
        "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Rolling Hills",
      description: "Green layers flowing over the landscape with grace.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Snowy Peaks",
      description: "Bright white contrasts against the deep blue sky.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "River Flow",
      description: "Water winding gently through the natural world.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Volcanic Landscape",
      description: "Powerful natural formations shaped over time.",
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Sunlit Beach",
      description: "Golden sand and soft waves at the edge of the horizon.",
      image:
        "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Colorful Canyon",
      description: "Layers of stone glowing with natural warmth.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Misty Pines",
      description: "A cool and dreamy forest scene.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Wildflower Field",
      description: "Bright blossoms across a soft meadow.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Cloudy Ridge",
      description: "A dramatic line of hills under soft clouds.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Autumn Grove",
      description: "Warm leaves and golden shadows in the woods.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Moonlit Water",
      description: "Still water reflecting the night sky.",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Cedar Forest",
      description: "A deep forest path wrapped in calm.",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Desert Dunes",
      description: "Golden ripples across an endless horizon.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Rugged Coast",
      description: "Rocky shoreline and pounding blue water.",
      image:
        "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Alpine Meadow",
      description: "Soft flowers and fresh air above the trees.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Lakeside Pines",
      description: "A bright shoreline framed by tall pines.",
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Seaside Cliffs",
      description: "Dramatic rock faces meeting the ocean.",
      image:
        "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Rainforested Valley",
      description: "A lush green haven hidden among the hills.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Sulphur Springs",
      description: "Warm earth and glowing natural pools.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Starlit Meadow",
      description: "A quiet field under a soft evening sky.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Emerald Canyon",
      description: "Color-rich stone and lush greenery together.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Ocean Sunrise",
      description: "A brilliant beginning over glassy waters.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Serene Marsh",
      description: "A calm wetland alive with reeds and sky.",
      image:
        "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Stone Garden",
      description: "A sculpted natural landscape full of calm.",
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Quiet Fjord",
      description: "Deep blue water wrapped by dramatic cliffs.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Golden Meadow",
      description: "Soft light and open beauty in one scene.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Cloud Forest",
      description: "An airy, mossy wonderland in the mountains.",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    },
  ],
  waterfalls: [
    {
      title: "Forest Waterfall",
      description: "Water pouring in soft layers through a green jungle.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Mountain Cascade",
      description: "Falling from icy cliffs into the valley below.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Desert Falls",
      description: "A rare and stunning burst of life in the dry landscape.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Rainforest Deluge",
      description: "Powerful white water cutting through the dense forest.",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Lake Edge Falls",
      description: "Gentle flow meeting still, reflective water.",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Tall Curtain Falls",
      description: "A dramatic sheet of water tumbling from above.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Rocky Cascade",
      description: "Water dancing over stone in dazzling motion.",
      image:
        "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Hidden Falls",
      description: "Secret beauty tucked away in the wilderness.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Evening Cascade",
      description: "Soft twilight colors around a flowing masterpiece.",
      image:
        "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Wide Falls",
      description: "A broad and powerful sweep of falling water.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Lush Falls",
      description: "Vibrant greenery framing a bright stream.",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Canyon Cascade",
      description: "Water carving through stone with striking force.",
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Misty Falls",
      description: "A glowing veil of water in the fog.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "River Bend Falls",
      description: "A sparkling flow around a curved valley.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Moonlit Cascade",
      description: "A calm and luminous flow at night.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Cliffside Falls",
      description: "Water dropping dramatically from rocky heights.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Jungle Torrent",
      description: "A wild rush through dense green life.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Pine Falls",
      description: "A peaceful cascade in the heart of the forest.",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Bright Cove Falls",
      description: "Water glimmering where the river meets the sea.",
      image:
        "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Silver Falls",
      description: "A smooth and shining rush of water.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Echoing Falls",
      description: "A powerful cascade surrounded by rock.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Emerald Falls",
      description: "Bright green surroundings frame rich water motion.",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Icy Ribbon",
      description: "A delicate flow over frozen rocks.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Dreamfall",
      description: "A soft and airy waterfall in mist.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Sunlit Rapids",
      description: "Bright, rushing water in golden light.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Fern Falls",
      description: "A hidden gem wrapped by lush greenery.",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Velvet Cascade",
      description: "Soft water meeting rich earth tones.",
      image:
        "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Glacier Waterfall",
      description: "Pure water falling through icy scenery.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Wild Canyon Falls",
      description: "A dramatic opening in the rock face.",
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Fjord Cascade",
      description: "Water slipping into a dark blue inlet.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Golden Mist Falls",
      description: "Warm light and gentle water together.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Baby Falls",
      description: "A small but charming waterfall in the wild.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    },
  ],
  sunsets: [
    {
      title: "Ocean Sunset",
      description: "Warm color melting into the evening sea.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Mountain Glow",
      description: "Soft orange light highlighting the peaks.",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Golden Field",
      description: "Fields turning amber as daylight fades.",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Beach Horizon",
      description: "Quiet waves and glowing skies at dusk.",
      image:
        "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Seaside Evening",
      description: "Colors brightening as the day slowly closes.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Desert Sunset",
      description: "A warm glow stretching over endless sand.",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Sky Painted Gold",
      description: "Clouds lit with glowing shades of amber and rose.",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Lagoon Glow",
      description: "Soft reflections and a dreamy evening palette.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "City Twilight",
      description: "Evening light around tall buildings and calm streets.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Valley at Dusk",
      description: "Gentle colors settling across the landscape.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Cliffside Glow",
      description: "Golden light resting on the edge of the world.",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Alpine Sunset",
      description: "Soft pink and blue colors wrapping the mountain peaks.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Cove at Dusk",
      description: "A radiant calm above the sea.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Golden Hour",
      description: "The sky filled with glowing warm tones.",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Sunset Over Hills",
      description: "Warm hues across the ridgeline.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Rose Skyline",
      description: "A skyline washed in blush and gold.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Plain at Sunset",
      description: "Open land glowing with rich color.",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Harbor Glow",
      description: "Soft sunset reflections near the water.",
      image:
        "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Misty Sunset",
      description: "Fog and gold blending into evening calm.",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Amber Coast",
      description: "A warm evening line by the shore.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Glow Across Fields",
      description: "Golden light stretching through the grasslands.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Velvet Sunset",
      description: "Deep orange and rose in the fading sky.",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Dusk on the Lake",
      description: "A shimmering finish to a quiet day.",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Sunset Through Trees",
      description: "Warm light filtering through leaves.",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Pacific Glow",
      description: "Golden rays over a wide horizon.",
      image:
        "https://images.unsplash.com/photo-1500522144261-ea64433bbe27?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Forest Twilight",
      description: "A deep blue canopy lit by sunset.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Quiet Horizon",
      description: "A peaceful line between sky and sea.",
      image:
        "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Sunset Over Water",
      description: "The sky reflected in one endless shimmer.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Golden Dunes",
      description: "A soft glow across the desert at dusk.",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Crescent Glow",
      description: "The day ending in rose and violet.",
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Evening Over Ocean",
      description: "A vast sky slowly turning to gold.",
      image:
        "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Riverlight Sunset",
      description: "A calm river shining under the evening sky.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
    },
  ],
};

const initGallery = (category) => {
  const target = document.getElementById("galleryGrid");
  if (!target) return;
  target.innerHTML = "";
  const items = galleryData[category] || [];

  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "gallery-card reveal";
    article.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    target.appendChild(article);
  });

  target.querySelectorAll(".gallery-card").forEach((card) => {
    const image = card.querySelector("img");
    const title = card.querySelector("h3")?.textContent || "Beautiful image";
    const key = image?.getAttribute("src") || title;
    const body = card.querySelector(".card-body");

    const state = readStorage()[key] || { likes: 0, comments: [], shares: 0 };
    const actions = document.createElement("div");
    actions.className = "card-actions";
    actions.innerHTML = `
    <button class="action-btn like-btn" type="button">❤ <span class="like-count">${state.likes}</span></button>
    <button class="action-btn comment-btn" type="button">💬 Comment</button>
    <button class="action-btn share-btn" type="button">↗ Share <span class="share-count">${state.shares}</span></button>
  `;

    const commentPanel = document.createElement("div");
    commentPanel.className = "comment-panel";
    commentPanel.innerHTML = `
    <textarea class="comment-input" placeholder="Write your thought..."></textarea>
    <button class="action-btn submit-comment" type="button">Save comment</button>
    <ul class="comment-list"></ul>
  `;

    body.appendChild(actions);
    body.appendChild(commentPanel);

    const likeBtn = actions.querySelector(".like-btn");
    const likeCount = actions.querySelector(".like-count");
    const shareBtn = actions.querySelector(".share-btn");
    const shareCount = actions.querySelector(".share-count");
    const commentBtn = actions.querySelector(".comment-btn");
    const submitComment = commentPanel.querySelector(".submit-comment");
    const commentInput = commentPanel.querySelector(".comment-input");
    const commentList = commentPanel.querySelector(".comment-list");

    const renderComments = () => {
      commentList.innerHTML = "";
      const comments = (readStorage()[key] || state).comments || [];
      comments.slice(-4).forEach((item) => {
        const li = document.createElement("li");
        li.className = "comment-item";
        li.textContent = item;
        commentList.appendChild(li);
      });
    };

    const saveState = () => {
      const storage = readStorage();
      storage[key] = {
        likes: state.likes,
        comments: state.comments,
        shares: state.shares,
      };
      saveStorage(storage);
    };

    const refreshUi = () => {
      likeCount.textContent = state.likes;
      shareCount.textContent = state.shares;
      renderComments();
    };

    likeBtn.addEventListener("click", () => {
      state.likes += 1;
      saveState();
      refreshUi();
    });

    shareBtn.addEventListener("click", async () => {
      state.shares += 1;
      saveState();
      refreshUi();

      if (navigator.share) {
        try {
          await navigator.share({
            title: title,
            text: `Check out this beautiful image from Beauty Explorer.`,
            url: window.location.href,
          });
        } catch (error) {
          console.log("Share cancelled", error);
        }
      } else {
        await navigator.clipboard.writeText(window.location.href);
      }
    });

    commentBtn.addEventListener("click", () => {
      commentPanel.classList.toggle("open");
    });

    submitComment.addEventListener("click", () => {
      const value = commentInput.value.trim();
      if (!value) return;
      state.comments.push(value);
      saveState();
      commentInput.value = "";
      refreshUi();
    });

    image.addEventListener("click", () => {
      openModal(image.getAttribute("src"), title);
    });

    refreshUi();
  });
};

const applyTheme = (theme) => {
  document.body.classList.remove(
    "theme-midnight",
    "theme-aurora",
    "theme-espresso",
    "theme-ocean",
    "theme-light",
  );
  document.body.classList.add(`theme-${theme}`);
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === theme);
  });
};

document.querySelectorAll(".theme-btn").forEach((button) => {
  button.addEventListener("click", () => applyTheme(button.dataset.theme));
});

const initialTheme = document.body.classList.value.match(
  /theme-(midnight|aurora|espresso|ocean|light)/,
);
applyTheme(initialTheme ? initialTheme[1] : "midnight");

const galleryGrid = document.getElementById("galleryGrid");
if (galleryGrid) {
  initGallery(galleryGrid.dataset.category || "animals");
}

document.querySelectorAll(".login-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
      name: form.querySelector('input[type="text"]').value,
      email: form.querySelector('input[type="email"]').value,
      time: new Date().toLocaleString(),
    };
    localStorage.setItem("beautyExplorerLogin", JSON.stringify(data));
    form.reset();
    alert("Login saved locally for this browser.");
  });
});

document.querySelectorAll(".review-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const review = form.querySelector("textarea").value.trim();
    if (!review) return;
    const reviews =
      JSON.parse(localStorage.getItem("beautyExplorerReviews") || "[]") || [];
    reviews.push({ review, time: new Date().toLocaleString() });
    localStorage.setItem("beautyExplorerReviews", JSON.stringify(reviews));
    form.reset();
    alert("Your review has been saved locally.");
  });
});
