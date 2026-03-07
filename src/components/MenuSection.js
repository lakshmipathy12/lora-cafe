import React, { useState } from "react";
import "./MenuSection.css";

/* ─── Menu Data ─────────────────────────────────────────────── */
const vegItems = [
  { name: "Paneer Tikka Masala", price: "₹220", desc: "Smoky cottage cheese in rich spiced gravy" },
  { name: "Dal Makhani", price: "₹180", desc: "Slow-cooked black lentils with cream & butter" },
  { name: "Veg Biryani", price: "₹200", desc: "Fragrant basmati with garden vegetables & saffron" },
  { name: "Palak Paneer", price: "₹190", desc: "Cottage cheese in velvety spinach sauce" },
  { name: "Mushroom Kadai", price: "₹175", desc: "Button mushrooms tossed in bell pepper masala" },
  { name: "Malai Kofta", price: "₹210", desc: "Delicate dumplings in creamy tomato gravy" },
  { name: "Hyderabadi Veg Biryani", price: "₹220", desc: "Dum-style layered rice with royal spices" },
  { name: "Veg Kolhapuri", price: "₹185", desc: "Fiery mix-veg in authentic Kolhapuri masala" },
];

const nonVegItems = [
  { name: "Butter Chicken", price: "₹280", desc: "Tender chicken in velvety tomato-butter sauce" },
  { name: "Mutton Rogan Josh", price: "₹340", desc: "Slow-cooked lamb in aromatic Kashmiri spices" },
  { name: "Chicken Biryani", price: "₹260", desc: "Dum-cooked basmati with succulent chicken" },
  { name: "Prawn Masala", price: "₹320", desc: "Juicy prawns in coastal coconut-chilli gravy" },
  { name: "Chicken Tikka", price: "₹240", desc: "Tandoor-char grilled maya chicken skewers" },
  { name: "Egg Bhurji", price: "₹160", desc: "Spiced scrambled eggs with onion & tomato" },
  { name: "Fish Curry", price: "₹290", desc: "Catch of the day in tamarind-based gravy" },
  { name: "Mutton Keema", price: "₹310", desc: "Minced lamb cooked with peas & whole spices" },
];

const drinkItems = [
  { name: "LORA Signature Mojito", price: "₹120", desc: "Fresh mint, lime & a hint of rose syrup" },
  { name: "Mango Lassi", price: "₹90", desc: "Thick chilled yoghurt blended with alphonso" },
  { name: "Cold Coffee", price: "₹100", desc: "Double-shot espresso over crushed ice & milk" },
  { name: "Masala Chai", price: "₹60", desc: "Ginger-cardamom brew the old-school way" },
  { name: "Virgin Sangria", price: "₹130", desc: "Mixed fruit punch with sparkling water & herbs" },
  { name: "Blue Lagoon Cooler", price: "₹130", desc: "Blue curacao syrup, lemon soda & coconut water" },
  { name: "Rose Sharbat", price: "₹80", desc: "Chilled rose & basil seed drink" },
  { name: "Watermelon Mint Fizz", price: "₹110", desc: "Fresh watermelon juice with sparkling water" },
];

/* ─── Single Menu Card ─────────────────────────────────────── */
const MenuCard = ({ category, accent, icon, items, badge }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={`mc-card mc-${accent}`}>
      {/* Card Header */}
      <div className="mc-header">
        <span className="mc-icon">{icon}</span>
        <div>
          <p className="mc-badge">{badge}</p>
          <h3 className="mc-title">{category}</h3>
        </div>
        <div className="mc-header-line" />
      </div>

      {/* Divider Rule */}
      <div className="mc-rule" />

      {/* Items */}
      <ul className="mc-list">
        {items.map((item, i) => (
          <li
            key={i}
            className={`mc-item ${hovered === i ? "mc-item--hover" : ""}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="mc-item-left">
              <span className="mc-dot" />
              <div>
                <p className="mc-item-name">{item.name}</p>
                <p className="mc-item-desc">{item.desc}</p>
              </div>
            </div>
            <span className="mc-item-price">{item.price}</span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mc-footer">
        <span className="mc-footer-text">All prices inclusive of taxes</span>
      </div>

      {/* Decorative corner glow */}
      <div className="mc-glow-tl" />
      <div className="mc-glow-br" />
    </div>
  );
};

/* ─── Section ──────────────────────────────────────────────── */
const MenuSection = () => (
  <section id="menu" className="menu">
    <div className="section-wrapper menu-wrapper">
      <div className="menu-header">
        <p className="section-label">Menu</p>
        <h2>Our Signature Menu</h2>
        <p className="menu-sub">
          Handcrafted flavours, carefully curated — explore our Veg, Non-Veg
          &amp; Drinks collections at LORA Artisan Café.
        </p>
      </div>

      <div className="menu-image-row">
        <MenuCard
          accent="green"
          icon="🌿"
          badge="Pure Vegetarian"
          category="Veg Menu"
          items={vegItems}
        />
        <MenuCard
          accent="red"
          icon="🍖"
          badge="Non Vegetarian"
          category="Non-Veg Menu"
          items={nonVegItems}
        />
        <MenuCard
          accent="blue"
          icon="🥂"
          badge="Beverages"
          category="Drinks"
          items={drinkItems}
        />
      </div>
    </div>
  </section>
);

export default MenuSection;
