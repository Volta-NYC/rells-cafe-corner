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
  image?: string;
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

const PLACEHOLDER = "/images/menu/placeholder.svg";

const comboOption: OptionGroup = {
  id: "combo-option",
  label: "Please select make it a combo option",
  type: "single",
  required: true,
  choices: [
    { name: "Chips And Bottled Drink", price: 3.25 },
    { name: "Fruit And Bottled Drink", price: 3.25 },
    { name: "French Fries And Bottled Drink", price: 4.25 },
    { name: "On Its Own" },
  ],
};

const soupComboOption: OptionGroup = {
  id: "soup-combo-option",
  label: "Please select soup combo option",
  type: "single",
  required: true,
  choices: [
    { name: "On Its Own" },
    { name: "Regular Chicken Noodle Soup", price: 6.25 },
    { name: "Regular Broccoli Cheddar Soup", price: 6.25 },
    { name: "Regular Turkey Chilli Soup", price: 6.25 },
    { name: "Regular Harvest Vegetable Soup", price: 6.25 },
    { name: "Large Chicken Noodle Soup", price: 7.5 },
    { name: "Large Broccoli Cheddar Soup", price: 7.5 },
    { name: "Large Turkey Chilli Soup", price: 7.5 },
    { name: "Large Harvest Vegetable Soup", price: 7.5 },
  ],
};

const avocadoBaconExtras: OptionGroup = {
  id: "extras",
  label: "Please select extras",
  type: "multi",
  choices: [
    { name: "Avocado", price: 1.25 },
    { name: "Bacon", price: 1.75 },
  ],
};

const baconExtra: OptionGroup = {
  id: "extras",
  label: "Please select extras",
  type: "multi",
  choices: [{ name: "Bacon", price: 1.75 }],
};

const smallMilkChoice: OptionGroup = {
  id: "milk-choice",
  label: "Please select your milk choice",
  type: "single",
  required: true,
  choices: [
    { name: "No Milk" },
    { name: "Regular" },
    { name: "Half And Half" },
    { name: "Creamer" },
    { name: "Almond Milk", price: 0.75 },
    { name: "Oat Milk", price: 0.75 },
  ],
};

const smallCupChoice: OptionGroup = {
  id: "cup-choice",
  label: "Please select your choice",
  type: "multi",
  choices: [{ name: "Bring Your Own Cup", price: 1.0 }],
};

const largeCupChoice: OptionGroup = {
  id: "cup-choice",
  label: "Please select your choice",
  type: "multi",
  choices: [{ name: "Bring Your Own Cup", price: 1.75 }],
};

const kidsExtras: OptionGroup = {
  id: "kids-extras",
  label: "Please select extra",
  type: "multi",
  choices: [
    { name: "Fruit", price: 0.5 },
    { name: "Kids Side Of Bacon", price: 2.0 },
  ],
};

const kidsOption: OptionGroup = {
  id: "kids-option",
  label: "Please select option",
  type: "single",
  required: true,
  choices: [
    { name: "With Chips And Small Drink" },
    { name: "With Fruit And Small Drink" },
  ],
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
        image: PLACEHOLDER,
        description: "Choose a selection of soft delicious breads. Add: cream cheese, butter or jelly: $0.50.",
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
        image: PLACEHOLDER,
        description:
          "Thinly sliced avocado seasoned to perfection and seasoned with honey and balsamic glaze on your choice of 1 slice of bread. Add: bacon, egg or strawberry and feta $1.25 each.",
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
        image: PLACEHOLDER,
        description:
          "Light and fluffy mini pancakes served with powdered sugar, fresh fruit and whipped cream. Add: bacon $3.00, eggs $2.50 bacon and eggs $5.00.",
        options: [
          {
            id: "mini-pancakes-extra",
            label: "Please select extra",
            type: "multi",
            choices: [
              { name: "Bacon", price: 3.0 },
              { name: "Eggs", price: 2.5 },
              { name: "Bacon And Eggs", price: 5.0 },
            ],
          },
        ],
      },
      {
        name: "Croissant Lovers Sandwich",
        price: "$7.50",
        image: PLACEHOLDER,
        description:
          "Your Choice of sliced ham or turkey and cheese toasted with honey on a croissant. Add: lettuce $0.25, tomatoes $0.50, avocado $1.25.",
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
        image: PLACEHOLDER,
        description:
          "(bacon lettuce tomatoes) bacon with lettuce and tomatoes on a roll with mayo. Add: avocado $1.25, Add Bacon: $1.75, Mixed Fruits (Watermelon, Grapes, Pineapple, Strawberry): $5.00.",
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
        name: "Chicken And Waffles",
        price: "$13.95",
        image: PLACEHOLDER,
        description: "Crispy chicken bites with 2 waffles paired with fresh fruit and powdered sugar honey and syrup.",
      },
      {
        name: "Small Assorted Egg Sandwiches",
        price: "$6.00",
        image: PLACEHOLDER,
        description: "Eggs and cheese, bacon and egg and cheese. Add: avocado $1.25.",
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
        image: PLACEHOLDER,
        description: "Vanilla yogurt with berries and granola and honey.",
      },
      {
        name: "Large Yogurt Fruit Parfait",
        price: "$5.50",
        image: PLACEHOLDER,
        description: "Vanilla yogurt with berries and granola and honey.",
      },
      {
        name: "Muffins",
        price: "$2.00",
        image: PLACEHOLDER,
        description: "Add: cream cheese, butter or jelly: $0.50.",
        options: [
          {
            id: "muffin-flavour",
            label: "Please select your flavour",
            type: "single",
            required: true,
            choices: [{ name: "Blueberry" }, { name: "Corn" }, { name: "Banana Nut" }],
          },
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
        image: PLACEHOLDER,
        description: "Add: cream cheese, butter or jelly: $0.50.",
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
        name: "The Turkey And Avocado Sandwich",
        price: "$8.50",
        image: PLACEHOLDER,
        description:
          "Turkey, avocado, lettuce, tomato and pesto dressing on texas toast. Add: Avocado $1.25 Bacon $1.75.",
        options: [
          { ...avocadoBaconExtras },
          { ...comboOption },
          { ...soupComboOption },
        ],
      },
      {
        name: "Turkey Club With Bacon Sandwich",
        price: "$9.50",
        image: PLACEHOLDER,
        description:
          "Turkey, cheese, bacon, lettuce, tomatoes and mayo on texas toast. Add: Avocado $1.25 Bacon $1.75.",
        options: [
          { ...avocadoBaconExtras },
          { ...comboOption },
          { ...soupComboOption },
        ],
      },
      {
        name: "Grilled Chicken Caesar Wrap",
        price: "$9.00",
        image: PLACEHOLDER,
        description:
          "Grilled chicken, romaine lettuce, parmesan cheese, crushed croutons and caesar dressing. Make It Crispy Chicken +$1.00. Add: Avocado $1.25 Bacon $1.75.",
        options: [
          {
            id: "caesar-wrap-salad",
            label: "Please select salad",
            type: "single",
            required: true,
            choices: [{ name: "Salad" }, { name: "No Salad" }],
          },
          {
            id: "caesar-wrap-sauce",
            label: "Please select sauce",
            type: "single",
            required: true,
            choices: [{ name: "Sauce" }, { name: "No Sauce" }],
          },
          {
            id: "caesar-wrap-extra-option",
            label: "Please select extra option",
            type: "multi",
            choices: [{ name: "Make It Crispy Chicken", price: 1.0 }],
          },
          { ...avocadoBaconExtras },
          { ...comboOption },
          { ...soupComboOption },
        ],
      },
      {
        name: "The Jerk Chicken Sandwich",
        price: "$10.50",
        image: PLACEHOLDER,
        description:
          "House jerk chicken stacked on top of a sweet plantains and a cabbage slaw served with a side of mango salsa and plantain chips. Add: Avocado $1.25 Bacon $1.75.",
        options: [
          { ...avocadoBaconExtras },
          { ...comboOption },
          { ...soupComboOption },
        ],
      },
      {
        name: "The Italian Chicken Sandwich",
        price: "$9.50",
        image: PLACEHOLDER,
        description:
          "Thinly sliced marinated chicken breast, mozzarella, lettuce, tomato, fresh basil and drizzled with balsamic glaze on brioche bun. Add: Avocado $1.25 Bacon $1.75.",
        options: [
          { ...avocadoBaconExtras },
          { ...comboOption },
          { ...soupComboOption },
        ],
      },
      {
        name: "House Tuna Sandwich",
        price: "$7.75",
        image: PLACEHOLDER,
        description:
          "House made tuna on multigrain bread with lettuce and tomatoes with a light drizzle of honey and balsamic glaze. Make It A Tuna Melt: $0.85. Add Cheese: $1.25. Add: Avocado $1.25 Bacon $1.75.",
        options: [
          {
            id: "tuna-extra",
            label: "Please select extra",
            type: "multi",
            choices: [
              { name: "Make It A Tuna Melt", price: 0.85 },
              { name: "Add Cheese", price: 1.25 },
            ],
          },
          { ...avocadoBaconExtras },
          { ...comboOption },
          { ...soupComboOption },
        ],
      },
      {
        name: "Veggie And Hummus Wrap",
        price: "$9.00",
        image: PLACEHOLDER,
        description:
          "Cucumbers, carrots, tomatoes, avocado, hummus and spring mix lettuce with balsamic glaze inside a wrap. Add: Avocado $1.25 Bacon $1.75.",
        options: [
          {
            id: "veggie-wrap-salad",
            label: "Please select salad",
            type: "single",
            required: true,
            choices: [{ name: "Salad" }, { name: "No Salad" }],
          },
          {
            id: "veggie-wrap-sauce",
            label: "Please select sauce",
            type: "single",
            required: true,
            choices: [{ name: "Sauce" }, { name: "No Sauce" }],
          },
          { ...avocadoBaconExtras },
          { ...comboOption },
          { ...soupComboOption },
        ],
      },
      {
        name: "Egg Sandwich",
        price: "$5.25",
        image: PLACEHOLDER,
        description: "Add on for Bacon: $1.75.",
        options: [
          { ...baconExtra },
          { ...comboOption },
          { ...soupComboOption },
        ],
      },
      {
        name: "Egg And Cheese Sandwich",
        price: "$6.10",
        image: PLACEHOLDER,
        description: "Add on for Bacon: $1.75.",
        options: [
          { ...baconExtra },
          { ...comboOption },
          { ...soupComboOption },
        ],
      },
      {
        name: "Bacon, Egg, And Cheese Sandwich",
        price: "$6.95",
        image: PLACEHOLDER,
        description: "Add on for Bacon: $1.75.",
        options: [
          { ...baconExtra },
          { ...comboOption },
          { ...soupComboOption },
        ],
      },
    ],
  },
  {
    id: "salads-wings",
    label: "Salads, Wings And Things",
    items: [
      {
        name: "Jerk Chicken Salad",
        price: "$14.50",
        image: PLACEHOLDER,
        description: "House jerk chicken, cabbage, tomatoes, carrots, cucumber and mangoes.",
      },
      {
        name: "Chicken Caesar Salad",
        price: "$13.00",
        image: PLACEHOLDER,
        description: "Grilled or crispy chicken, crushed croutons, parmesan cheese and dressing.",
        options: [
          {
            id: "caesar-salad-option",
            label: "Please select option",
            type: "single",
            required: true,
            choices: [{ name: "Grilled Chicken" }, { name: "Crispy Chicken" }],
          },
        ],
      },
      {
        name: "The Chicken And Avocado Salad",
        price: "$14.75",
        image: PLACEHOLDER,
        description: "Grilled chicken, carrots, cucumbers, tomatoes, craisins, walnuts and avocado.",
      },
      {
        name: "Chicken Wings",
        price: "$12.75",
        image: PLACEHOLDER,
        description: "Flavours: Plain, honey garlic, mango jerk, bbq, buffalo, lemon pepper.",
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
              { name: "Bbq" },
              { name: "Buffalo" },
              { name: "Lemon Pepper" },
            ],
          },
          {
            id: "wings-extras",
            label: "Please select extras",
            type: "multi",
            choices: [{ name: "French Fries", price: 3.0 }],
          },
        ],
      },
      { name: "French Fries", price: "$3.50", image: PLACEHOLDER },
      { name: "Sweet Plantains", price: "$3.50", image: PLACEHOLDER },
      { name: "Bacon", price: "$3.50", image: PLACEHOLDER },
    ],
  },
  {
    id: "kids",
    label: "Kids Corner",
    note: "With Chips Or Fruit And Small Drink, Add Fruit $0.50 And Kids Side Of Bacon: $2.00. Please Contact The Takeaway For Small Drink Flavours.",
    items: [
      {
        name: "Kids Grilled Cheese",
        price: "$6.50",
        image: PLACEHOLDER,
        options: [kidsExtras, kidsOption],
      },
      {
        name: "Kids Peanut Butter And Jelly",
        price: "$6.50",
        image: PLACEHOLDER,
        options: [kidsExtras, kidsOption],
      },
      {
        name: "Kids Turkey With Lettuce",
        price: "$6.50",
        image: PLACEHOLDER,
        options: [kidsExtras, kidsOption],
      },
      {
        name: "Kids Ham, Cheese With Lettuce",
        price: "$6.50",
        image: PLACEHOLDER,
        options: [kidsExtras, kidsOption],
      },
      {
        name: "Kids Nutella On Toast",
        price: "$6.50",
        image: PLACEHOLDER,
        options: [kidsExtras, kidsOption],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Chocolate Chip Cookie", price: "$2.00", image: PLACEHOLDER },
      { name: "White Chocolate Macadamia Nut Cookie", price: "$2.00", image: PLACEHOLDER },
      { name: "Macarons", price: "$2.00", image: PLACEHOLDER, description: "Assorted flavors." },
      { name: "Lemon Raspberry Cupcake", price: "$3.50", image: PLACEHOLDER, subCategory: "Cupcakes" },
      { name: "Chocolate Cupcake", price: "$3.50", image: PLACEHOLDER, subCategory: "Cupcakes" },
      { name: "Vanilla Cupcake", price: "$3.50", image: PLACEHOLDER, subCategory: "Cupcakes" },
      { name: "Strawberry Cupcake", price: "$3.50", image: PLACEHOLDER, subCategory: "Cupcakes" },
      { name: "Red Velvet Cupcake", price: "$3.50", image: PLACEHOLDER, subCategory: "Cupcakes" },
    ],
  },
  {
    id: "hot-drinks",
    label: "Hot Drinks",
    items: [
      {
        name: "Small Hot Coffee",
        price: "$1.25",
        image: PLACEHOLDER,
        subCategory: "Hot Coffee",
        options: [
          {
            id: "sm-coffee-flavor",
            label: "Please select your flavor",
            type: "single",
            required: true,
            choices: [
              { name: "Caramel", price: 0.5 },
              { name: "Hazelnut", price: 0.5 },
              { name: "Vanilla", price: 0.5 },
              { name: "Nutella", price: 0.5 },
            ],
          },
          { ...smallMilkChoice },
          { ...smallCupChoice },
        ],
      },
      {
        name: "Large Hot Coffee",
        price: "$2.25",
        image: PLACEHOLDER,
        subCategory: "Hot Coffee",
        options: [
          {
            id: "lg-coffee-flavor",
            label: "Please select your flavor",
            type: "single",
            required: true,
            choices: [
              { name: "Caramel", price: 0.75 },
              { name: "Hazelnut", price: 0.75 },
              { name: "Vanilla", price: 0.75 },
              { name: "Nutella", price: 0.75 },
            ],
          },
          { ...smallMilkChoice },
          { ...largeCupChoice },
        ],
      },
      {
        name: "Small Hot Tea",
        price: "$1.25",
        image: PLACEHOLDER,
        subCategory: "Hot Tea",
        options: [
          {
            id: "sm-tea-flavour",
            label: "Please select your flavour",
            type: "single",
            required: true,
            choices: [
              { name: "Black" },
              { name: "Green" },
              { name: "Peppermint" },
              { name: "Apple" },
              { name: "Lemon" },
              { name: "Chamomile" },
            ],
          },
          { ...smallMilkChoice },
          { ...smallCupChoice },
        ],
      },
      {
        name: "Large Hot Tea",
        price: "$2.25",
        image: PLACEHOLDER,
        subCategory: "Hot Tea",
        options: [
          {
            id: "lg-tea-flavour",
            label: "Please select your flavour",
            type: "single",
            required: true,
            choices: [
              { name: "Black" },
              { name: "Green" },
              { name: "Peppermint" },
              { name: "Apple" },
              { name: "Lemon" },
              { name: "Chamomile" },
            ],
          },
          { ...smallMilkChoice },
          { ...largeCupChoice },
        ],
      },
      {
        name: "Small Honey Citrus Ginger Tea",
        price: "$1.25",
        image: PLACEHOLDER,
        subCategory: "Honey Citrus Ginger Tea",
        options: [
          {
            id: "sm-hcg-flavour",
            label: "Please select your flavour",
            type: "single",
            required: true,
            choices: [{ name: "Black Tea" }, { name: "Green Tea" }],
          },
          { ...smallMilkChoice },
          { ...smallCupChoice },
        ],
      },
      {
        name: "Large Honey Citrus Ginger Tea",
        price: "$2.75",
        image: PLACEHOLDER,
        subCategory: "Honey Citrus Ginger Tea",
        options: [
          {
            id: "lg-hcg-flavour",
            label: "Please select your flavour",
            type: "single",
            required: true,
            choices: [{ name: "Black Tea" }, { name: "Green Tea" }],
          },
          { ...smallMilkChoice },
          { ...largeCupChoice },
        ],
      },
      {
        name: "Small Matcha Latte",
        price: "$3.75",
        image: PLACEHOLDER,
        subCategory: "Matcha Latte",
        options: [
          {
            id: "sm-matcha-flavor",
            label: "Please select your flavor",
            type: "multi",
            choices: [
              { name: "Strawberry", price: 0.75 },
              { name: "Vanilla", price: 0.75 },
            ],
          },
          { ...smallMilkChoice },
          { ...smallCupChoice },
        ],
      },
      {
        name: "Large Matcha Latte",
        price: "$4.75",
        image: PLACEHOLDER,
        subCategory: "Matcha Latte",
        options: [
          {
            id: "lg-matcha-flavor",
            label: "Please select your flavor",
            type: "multi",
            choices: [
              { name: "Strawberry", price: 0.75 },
              { name: "Vanilla", price: 0.75 },
            ],
          },
          { ...smallMilkChoice },
          { ...largeCupChoice },
        ],
      },
      {
        name: "Small Hot Chocolate",
        price: "$1.50",
        image: PLACEHOLDER,
        subCategory: "Hot Chocolate",
        options: [
          { ...smallMilkChoice },
          { ...smallCupChoice },
        ],
      },
      {
        name: "Large Hot Chocolate",
        price: "$2.50",
        image: PLACEHOLDER,
        subCategory: "Hot Chocolate",
        options: [
          { ...smallMilkChoice },
          { ...largeCupChoice },
        ],
      },
    ],
  },
  {
    id: "cold-drinks",
    label: "Cold Drinks",
    items: [
      {
        name: "15oz Iced Coffee",
        price: "$3.50",
        image: PLACEHOLDER,
        options: [
          {
            id: "iced-coffee-flavor",
            label: "Please select your flavor",
            type: "multi",
            choices: [
              { name: "Caramel", price: 0.75 },
              { name: "Hazelnut", price: 0.75 },
              { name: "Vanilla", price: 0.75 },
            ],
          },
        ],
      },
      {
        name: "15oz Iced Tea",
        price: "$3.00",
        image: PLACEHOLDER,
        options: [
          {
            id: "iced-tea-choice",
            label: "Please select your choice",
            type: "single",
            required: true,
            choices: [{ name: "Black Tea" }, { name: "Green Tea" }],
          },
          {
            id: "iced-tea-flavor",
            label: "Please select your flavor",
            type: "multi",
            choices: [
              { name: "Peach", price: 0.75 },
              { name: "Strawberry", price: 0.75 },
              { name: "Mango", price: 0.75 },
            ],
          },
        ],
      },
      {
        name: "15oz Lemonades",
        price: "$4.25",
        image: PLACEHOLDER,
        options: [
          {
            id: "lemonade-flavor",
            label: "Please select your flavor",
            type: "multi",
            choices: [
              { name: "Peach", price: 0.75 },
              { name: "Strawberry", price: 0.75 },
              { name: "Mango", price: 0.75 },
            ],
          },
        ],
      },
      {
        name: "15oz Blueberry Basil Lemonade Fruit Smoothie",
        price: "$4.50",
        image: PLACEHOLDER,
        options: [
          {
            id: "smoothie-flavor",
            label: "Please select your flavor",
            type: "multi",
            choices: [
              { name: "Peach", price: 0.75 },
              { name: "Strawberry", price: 0.75 },
              { name: "Mango", price: 0.75 },
            ],
          },
        ],
      },
    ],
  },
];
