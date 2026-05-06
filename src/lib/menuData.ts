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
        description: "Choose a selection of soft delicious breads. Add: cream cheese, butter or jelly: $0.50",
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
          "Thinly sliced avocado seasoned to perfection and seasoned with honey & balsamic glaze on your choice of 1 slice of bread. Add: bacon, egg or strawberry and feta $1.25 each.",
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
          "Light & fluffy mini pancakes served with powdered sugar, fresh fruit & whipped cream. Add: bacon $3.00, eggs $2.50 bacon & eggs $5.00.",
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
      { name: "Croissant Lovers Sandwich", price: "$7.50", description: "Flaky croissant stacked cafe-style." },
      { name: "B.L.T. Sandwich", price: "$6.95", description: "Bacon, lettuce, and tomato on your bread choice." },
      { name: "Chicken & Waffles", price: "$13.95", description: "Crispy chicken with warm waffles." },
      { name: "Small Assorted Egg Sandwiches", price: "$6.00", description: "Breakfast sandwich made simple and satisfying." },
      { name: "Small Yogurt Fruit Parfait", price: "$3.75", description: "Layered yogurt and fruit." },
      { name: "Large Yogurt Fruit Parfait", price: "$5.50", description: "A bigger cup of yogurt and fruit." },
      { name: "Muffins", price: "$2.00", description: "Bakery-style muffin selection." },
      { name: "Croissants", price: "$2.25", description: "Buttery, flaky croissants." },
    ],
  },
  {
    id: "sandwiches",
    label: "Gourmet Sandwiches",
    banner: "Combo options: Chips/Fruit & Drink $3.25 | Fries & Drink $4.25 | Soup Combo $6.25",
    items: [
      { name: "The Turkey & Avocado Sandwich", price: "$8.50", description: "Turkey layered with creamy avocado." },
      { name: "Turkey Club With Bacon Sandwich", price: "$9.50", description: "A stacked club with smoky bacon." },
      { name: "Grilled Chicken Caesar Wrap", price: "$9.00", description: "Grilled chicken with Caesar flavor in a wrap." },
      { name: "The Jerk Chicken Sandwich", price: "$10.50", description: "Bold jerk chicken with cafe-corner attitude." },
      { name: "The Italian Chicken Sandwich", price: "$9.50", description: "Chicken sandwich with Italian-inspired flavor." },
      { name: "House Tuna Sandwich", price: "$7.75", description: "House-made tuna sandwich." },
      { name: "Veggie & Hummus Wrap", price: "$9.00", description: "Fresh vegetables and hummus wrapped to go." },
      { name: "Egg Sandwich", price: "$5.25", description: "Simple, hot, and made for breakfast cravings." },
      { name: "Egg & Cheese Sandwich", price: "$6.10", description: "Egg sandwich with melted cheese." },
      { name: "Bacon, Egg, & Cheese Sandwich", price: "$6.95", description: "Brooklyn breakfast classic." },
    ],
  },
  {
    id: "salads-wings",
    label: "Salads Wings & Things",
    items: [
      { name: "Jerk Chicken Salad", price: "$14.50", description: "Fresh greens topped with jerk chicken." },
      { name: "Chicken Caesar Salad", price: "$13.00", description: "Crisp Caesar salad with chicken." },
      { name: "The Chicken & Avocado Salad", price: "$14.75", description: "Chicken, avocado, and fresh salad fixings." },
      { name: "Chicken Wings (6 flavors)", price: "$12.75", description: "Crispy wings with your choice of flavor." },
      { name: "French Fries", price: "$3.50", description: "Hot, crisp fries." },
      { name: "Sweet Plantains", price: "$3.50", description: "Tender, caramelized sweet plantains." },
      { name: "Bacon", price: "$3.50", description: "Crispy side of bacon." },
    ],
  },
  {
    id: "kids",
    label: "Kids Corner",
    note: "With chips or fruit and small drink.",
    items: [
      { name: "Kids Grilled Cheese", price: "$6.50", description: "Melted cheese on toast, kid-sized." },
      { name: "Kids Peanut Butter & Jelly", price: "$6.50", description: "A sweet classic with a small side and drink." },
      { name: "Kids Turkey With Lettuce", price: "$6.50", description: "Turkey sandwich with lettuce." },
      { name: "Kids Ham, Cheese With Lettuce", price: "$6.50", description: "Ham and cheese with lettuce." },
      { name: "Kids Nutella On Toast", price: "$6.50", description: "Nutella spread over toast." },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Chocolate Chip Cookie", price: "$2.00", description: "Classic chocolate chip cookie." },
      { name: "White Chocolate Macadamia Nut Cookie", price: "$2.00", description: "White chocolate and macadamia cookie." },
      { name: "Macarons (assorted)", price: "$2.00", description: "Assorted delicate macarons." },
      { name: "Cupcakes", price: "$3.50 each", description: "Lemon Raspberry, Chocolate, Vanilla, Strawberry, or Red Velvet." },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      { name: "Hot Chocolate", price: "TBD", description: "Rich, warm hot chocolate." },
      { name: "15oz Lemonades", price: "$4.25", description: "Bright lemonade served cold." },
      { name: "15oz Blueberry Basil Lemonade Fruit Smoothie", price: "$4.50", description: "Blueberry, basil, and lemonade blended fresh." },
    ],
  },
];
