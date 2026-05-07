export type OptionChoice = {
  name: string;
  price?: number;
};

export type OptionGroup = {
  id: string;
  label: string;
  type: "single" | "multi";
  required?: boolean;
  choices: OptionChoice[];
};

export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  addOn?: string;
  subCategory?: string;
  options?: OptionGroup[];
};

export type MenuCategory = {
  id: string;
  label: string;
  note?: string;
  banner?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "breakfast",
    label: "All Day Breakfast",
    note: "Please contact the takeaway for choice of breads.",
    items: [
      {
        name: "Bagels",
        price: "$2.00",
        description: "Choose a selection of soft delicious breads. Add: cream cheese, butter, or jelly: $0.50.",
        options: [
          {
            id: "bagel-flavour",
            label: "Please select your flavour",
            type: "single",
            required: true,
            choices: [{ name: "Plain" }, { name: "Cinnamon" }, { name: "Everything" }],
          },
          {
            id: "bagel-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Cream Cheese", price: 0.5 },
              { name: "Butter", price: 0.5 },
              { name: "Jelly", price: 0.5 },
            ],
          },
        ],
      },
      {
        name: "Avocado Toast",
        price: "$4.75",
        description:
          "Thinly sliced avocado seasoned to perfection with honey & balsamic glaze on your choice of 1 slice of bread. Add: bacon, egg, or strawberry and feta $1.25 each.",
        options: [
          {
            id: "avocado-toast-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Bacon", price: 1.25 },
              { name: "Egg", price: 1.25 },
              { name: "Strawberry And Feta", price: 1.25 },
              { name: "Slice Of Avocado", price: 4.0 },
            ],
          },
        ],
      },
      {
        name: "Mini Pancakes",
        price: "$7.00",
        description:
          "Light & fluffy mini pancakes served with powdered sugar, fresh fruit & whipped cream. Add: bacon $3.00, eggs $2.50, bacon & eggs $5.00.",
        options: [
          {
            id: "mini-pancakes-extra",
            label: "Please select extra",
            type: "multi",
            choices: [
              { name: "Bacon", price: 3.0 },
              { name: "Eggs", price: 2.5 },
              { name: "Bacon & Eggs", price: 5.0 },
            ],
          },
        ],
      },
      {
        name: "Croissant Lovers Sandwich",
        price: "$7.50",
        description:
          "Your choice of sliced ham or turkey & cheese, toasted with honey on a croissant. Add: lettuce $0.25, tomatoes $0.50, avocado $1.25.",
        options: [
          {
            id: "croissant-lovers-option",
            label: "Please select option",
            type: "single",
            required: true,
            choices: [{ name: "Sliced Ham" }, { name: "Sliced Turkey" }],
          },
          {
            id: "croissant-lovers-addons",
            label: "Please select addons",
            type: "multi",
            choices: [
              { name: "Lettuce", price: 0.25 },
              { name: "Tomatoes", price: 0.5 },
              { name: "Avocado", price: 1.25 },
            ],
          },
        ],
      },
      {
        name: "B.L.T. Sandwich",
        price: "$6.95",
        description:
          "Bacon, lettuce, and tomatoes on a roll with mayo. Add: avocado $1.25, extra bacon $1.75, mixed fruits (watermelon, grapes, pineapple, strawberry) $5.00.",
        options: [
          {
            id: "blt-extra",
            label: "Please select extra",
            type: "multi",
            choices: [
              { name: "Avocado", price: 1.25 },
              { name: "Bacon", price: 1.75 },
              { name: "Mixed Fruits (Watermelon, Grapes, Pineapple, Strawberry)", price: 5.0 },
            ],
          },
        ],
      },
      {
        name: "Chicken & Waffles",
        price: "$13.95",
        description: "Crispy chicken bites with 2 waffles, paired with fresh fruit, powdered sugar, honey & syrup.",
      },
      {
        name: "Small Assorted Egg Sandwiches",
        price: "$6.00",
        description: "Egg & cheese, or bacon, egg & cheese. Add: avocado $1.25.",
        options: [
          {
            id: "assorted-egg-extra",
            label: "Please select extra",
            type: "multi",
            choices: [
              { name: "Avocado", price: 1.25 },
              { name: "Bacon", price: 1.75 },
            ],
          },
        ],
      },
      {
        name: "Small Yogurt Fruit Parfait",
        price: "$3.75",
        description: "Vanilla yogurt with berries, granola & honey.",
      },
      {
        name: "Large Yogurt Fruit Parfait",
        price: "$5.50",
        description: "Vanilla yogurt with berries, granola & honey.",
      },
      {
        name: "Muffins",
        price: "$2.00",
        description: "Add: cream cheese, butter, or jelly $0.50.",
        options: [
          {
            id: "muffin-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Cream Cheese", price: 0.5 },
              { name: "Butter", price: 0.5 },
              { name: "Jelly", price: 0.5 },
            ],
          },
        ],
      },
      {
        name: "Croissants",
        price: "$2.25",
        description: "Add: cream cheese, butter, or jelly $0.50.",
        options: [
          {
            id: "croissant-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Cream Cheese", price: 0.5 },
              { name: "Butter", price: 0.5 },
              { name: "Jelly", price: 0.5 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sandwiches",
    label: "Gourmet Sandwiches",
    banner:
      "Make it a combo: Chips or Fruit & Bottled Drink $3.25 · French Fries & Bottled Drink $4.25 · Soup Combo $6.25 · Large Soup $7.50",
    items: [
      {
        name: "The Turkey & Avocado Sandwich",
        price: "$8.50",
        description:
          "Turkey, avocado, lettuce, tomato & pesto dressing on Texas toast. Add: avocado $1.25, bacon $1.75.",
        options: [
          {
            id: "turkey-avocado-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Avocado", price: 1.25 },
              { name: "Bacon", price: 1.75 },
            ],
          },
        ],
      },
      {
        name: "Turkey Club With Bacon Sandwich",
        price: "$9.50",
        description:
          "Turkey, cheese, bacon, lettuce, tomatoes & mayo on Texas toast. Add: avocado $1.25, bacon $1.75.",
        options: [
          {
            id: "turkey-club-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Avocado", price: 1.25 },
              { name: "Bacon", price: 1.75 },
            ],
          },
        ],
      },
      {
        name: "Grilled Chicken Caesar Wrap",
        price: "$9.00",
        description:
          "Grilled chicken, romaine lettuce, parmesan cheese, crushed croutons & Caesar dressing. Make it crispy chicken +$1.00. Add: avocado $1.25, bacon $1.75.",
        options: [
          {
            id: "caesar-wrap-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Crispy Chicken", price: 1.0 },
              { name: "Avocado", price: 1.25 },
              { name: "Bacon", price: 1.75 },
            ],
          },
        ],
      },
      {
        name: "The Jerk Chicken Sandwich",
        price: "$10.50",
        description:
          "House jerk chicken stacked on sweet plantains & cabbage slaw, served with mango salsa & plantain chips. Add: avocado $1.25, bacon $1.75.",
        options: [
          {
            id: "jerk-chicken-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Avocado", price: 1.25 },
              { name: "Bacon", price: 1.75 },
            ],
          },
        ],
      },
      {
        name: "The Italian Chicken Sandwich",
        price: "$9.50",
        description:
          "Thinly sliced marinated chicken breast, mozzarella, lettuce, tomato, fresh basil & balsamic glaze on a brioche bun. Add: avocado $1.25, bacon $1.75.",
        options: [
          {
            id: "italian-chicken-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Avocado", price: 1.25 },
              { name: "Bacon", price: 1.75 },
            ],
          },
        ],
      },
      {
        name: "House Tuna Sandwich",
        price: "$7.75",
        description:
          "House-made tuna on multigrain bread with lettuce & tomatoes, finished with honey & balsamic glaze. Make it a tuna melt $0.85. Add: cheese $1.25, avocado $1.25, bacon $1.75.",
        options: [
          {
            id: "tuna-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Make It A Tuna Melt", price: 0.85 },
              { name: "Add Cheese", price: 1.25 },
              { name: "Avocado", price: 1.25 },
              { name: "Bacon", price: 1.75 },
            ],
          },
        ],
      },
      {
        name: "Veggie & Hummus Wrap",
        price: "$9.00",
        description:
          "Cucumbers, carrots, tomatoes, avocado, hummus & spring mix lettuce with balsamic glaze in a wrap. Add: avocado $1.25, bacon $1.75.",
        options: [
          {
            id: "veggie-hummus-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Avocado", price: 1.25 },
              { name: "Bacon", price: 1.75 },
            ],
          },
        ],
      },
      {
        name: "Egg Sandwich",
        price: "$5.25",
        description: "Add bacon: $1.75.",
        options: [
          {
            id: "egg-sandwich-extras",
            label: "Please select extras",
            type: "multi",
            choices: [{ name: "Bacon", price: 1.75 }],
          },
        ],
      },
      {
        name: "Egg & Cheese Sandwich",
        price: "$6.10",
        description: "Add bacon: $1.75.",
        options: [
          {
            id: "egg-cheese-extras",
            label: "Please select extras",
            type: "multi",
            choices: [{ name: "Bacon", price: 1.75 }],
          },
        ],
      },
      {
        name: "Bacon, Egg & Cheese Sandwich",
        price: "$6.95",
        description: "Add bacon: $1.75.",
        options: [
          {
            id: "bec-extras",
            label: "Please select extras",
            type: "multi",
            choices: [{ name: "Bacon", price: 1.75 }],
          },
        ],
      },
    ],
  },
  {
    id: "salads-wings",
    label: "Salads, Wings & Things",
    items: [
      {
        name: "Jerk Chicken Salad",
        price: "$14.50",
        description: "House jerk chicken, cabbage, tomatoes, carrots, cucumber & mangoes.",
      },
      {
        name: "Chicken Caesar Salad",
        price: "$13.00",
        description: "Grilled or crispy chicken, crushed croutons, parmesan cheese & dressing.",
        options: [
          {
            id: "caesar-salad-chicken",
            label: "Please select chicken style",
            type: "single",
            required: true,
            choices: [{ name: "Grilled" }, { name: "Crispy" }],
          },
        ],
      },
      {
        name: "The Chicken & Avocado Salad",
        price: "$14.75",
        description: "Grilled chicken, carrots, cucumbers, tomatoes, craisins, walnuts & avocado.",
      },
      {
        name: "Chicken Wings",
        price: "$12.75",
        description: "Flavors: plain, honey garlic, mango jerk, BBQ, buffalo, lemon pepper.",
        options: [
          {
            id: "wings-flavour",
            label: "Please select flavour",
            type: "single",
            required: true,
            choices: [
              { name: "Plain" },
              { name: "Honey Garlic" },
              { name: "Mango Jerk" },
              { name: "BBQ" },
              { name: "Buffalo" },
              { name: "Lemon Pepper" },
            ],
          },
        ],
      },
      { name: "French Fries", price: "$3.50" },
      { name: "Sweet Plantains", price: "$3.50" },
      { name: "Bacon", price: "$3.50" },
    ],
  },
  {
    id: "kids",
    label: "Kids Corner",
    note: "Served with chips or fruit and a small drink. Add fruit $0.50, kids side of bacon $2.00. Please contact the takeaway for small drink flavors.",
    items: [
      {
        name: "Kids Grilled Cheese",
        price: "$6.50",
        options: [
          {
            id: "kids-grilled-cheese-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Fruit", price: 0.5 },
              { name: "Kids Side Of Bacon", price: 2.0 },
            ],
          },
        ],
      },
      {
        name: "Kids Peanut Butter & Jelly",
        price: "$6.50",
        options: [
          {
            id: "kids-pbj-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Fruit", price: 0.5 },
              { name: "Kids Side Of Bacon", price: 2.0 },
            ],
          },
        ],
      },
      {
        name: "Kids Turkey With Lettuce",
        price: "$6.50",
        options: [
          {
            id: "kids-turkey-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Fruit", price: 0.5 },
              { name: "Kids Side Of Bacon", price: 2.0 },
            ],
          },
        ],
      },
      {
        name: "Kids Ham & Cheese With Lettuce",
        price: "$6.50",
        options: [
          {
            id: "kids-ham-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Fruit", price: 0.5 },
              { name: "Kids Side Of Bacon", price: 2.0 },
            ],
          },
        ],
      },
      {
        name: "Kids Nutella On Toast",
        price: "$6.50",
        options: [
          {
            id: "kids-nutella-extras",
            label: "Please select extras",
            type: "multi",
            choices: [
              { name: "Fruit", price: 0.5 },
              { name: "Kids Side Of Bacon", price: 2.0 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Chocolate Chip Cookie", price: "$2.00" },
      { name: "White Chocolate Macadamia Nut Cookie", price: "$2.00" },
      { name: "Macarons", price: "$2.00", description: "Assorted flavors." },
      { name: "Lemon Raspberry Cupcake", price: "$3.50", subCategory: "Cupcakes" },
      { name: "Chocolate Cupcake", price: "$3.50", subCategory: "Cupcakes" },
      { name: "Vanilla Cupcake", price: "$3.50", subCategory: "Cupcakes" },
      { name: "Strawberry Cupcake", price: "$3.50", subCategory: "Cupcakes" },
      { name: "Red Velvet Cupcake", price: "$3.50", subCategory: "Cupcakes" },
    ],
  },
  {
    id: "hot-drinks",
    label: "Hot Drinks",
    items: [
      { name: "Small Hot Coffee", price: "$1.25", subCategory: "Hot Coffee" },
      { name: "Large Hot Coffee", price: "$2.25", subCategory: "Hot Coffee" },
      { name: "Small Hot Tea", price: "$1.25", subCategory: "Hot Tea" },
      { name: "Large Hot Tea", price: "$2.25", subCategory: "Hot Tea" },
      { name: "Small Honey Citrus Ginger Tea", price: "$1.25", subCategory: "Honey Citrus Ginger Tea" },
      { name: "Large Honey Citrus Ginger Tea", price: "$2.75", subCategory: "Honey Citrus Ginger Tea" },
      { name: "Small Matcha Latte", price: "$3.75", subCategory: "Matcha Latte" },
      { name: "Large Matcha Latte", price: "$4.75", subCategory: "Matcha Latte" },
      { name: "Small Hot Chocolate", price: "$1.50", subCategory: "Hot Chocolate" },
      { name: "Large Hot Chocolate", price: "$2.50", subCategory: "Hot Chocolate" },
    ],
  },
  {
    id: "cold-drinks",
    label: "Cold Drinks",
    items: [
      { name: "15oz Iced Coffee", price: "$3.50" },
      { name: "15oz Iced Tea", price: "$3.00" },
      { name: "15oz Lemonades", price: "$4.25" },
      { name: "15oz Blueberry Basil Lemonade Fruit Smoothie", price: "$4.50" },
    ],
  },
];
