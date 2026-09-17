import React from 'react';
import { StoreHeader } from './components/Header';
import { Hero } from './components/Hero';
import { LanguageStrip } from './components/LanguageStrip';
import { CustomizationService } from './components/CustomizationService';
import { ProductionProcess } from './components/ProductionProcess';
import { FactoryTour, CategorySection } from './components/ProductSection';
import { CompanyProfile, Footer } from './components/WhyChooseUs';

const luggageProducts = [
  { title: "New Large Capacity Neoprene Suitcase Lightweight Travel Gear", price: "64.61", moq: 20, image: "https://sc04.alicdn.com/kf/H883cee398d114d9aa25e44e2fe2daf392.png", material: "Premium Neoprene Composite", specs: "20\"/22\"/24\"/26\"/28\"/32\"", colors: "Rose Pink, Slate Blue, Dark Grey, Deep Green" },
  { title: "Simple PC ABS Spinner Suitcase With TSA Approved Lock", price: "79.61", moq: 50, image: "https://sc04.alicdn.com/kf/He4307526616f49108a45124f652ca19dI.png", material: "High-Impact PC + ABS Shell", specs: "Standard 20\"/24\"/28\" Trio", colors: "Oatmeal, Matcha Green, Desert Green, Black" },
  { title: "Waterproof Business Travel Luggage With USB Charging Port", price: "68.39", moq: 30, image: "https://sc04.alicdn.com/kf/H631bf3adf154467c8014e731b1baf49cU.png", material: "Waterproof Reinforced Polymer", specs: "20\" (4.2kg) / 24\" (5.1kg)", colors: "White/Orange, White/Black, Tech Blue" },
  { title: "Best Selling Forward Opening Business Suitcase Front Compartment", price: "55.95", moq: 10, image: "https://sc04.alicdn.com/kf/H9629d0ebb7ad4213a29094344d5968d1P.png", material: "Scratch-Resistant ABS", specs: "20\" (Front-Open) / 24\" / 27\"", colors: "Silver, Dark Night, Polar White, Moss Green" },
  { title: "Breathable Neoprene Carry On Luggage Small Spinner", price: "57.38", moq: 20, image: "https://sc04.alicdn.com/kf/H8bd2b5df03984a0e95a9a93cef5cc5e0p.png", material: "Breathable Soft-Shell Neoprene", specs: "13\" (Storage) / 20\" / 24\" / 28\"", colors: "Sakura Pink, Sky Blue, Khaki, Nebula Grey" },
  { title: "Modern Design Hard Shell Travel Luggage - Lightweight Series", price: "48.46", moq: 100, image: "https://sc04.alicdn.com/kf/H1cac6e1d3bad487e840fa2ffed9dc0f4M.png", material: "Ultra-Light ABS Alloy", specs: "20\"/24\"/28\" Full Set", colors: "Rose Gold, Lake Blue, Peacock Green, Grey" },
  { title: "Customizable Pastel Color Trolley Case Set - OEM Service", price: "35.76", moq: 200, image: "https://sc04.alicdn.com/kf/Hdb5f486565254bacb8eacd59dbd6b4fbe.png", material: "Pastel Grade Virgin ABS", specs: "20\" / 22\" / 24\" / 26\"", colors: "Candy Pink, Mint, Lemon, Sky Blue" },
  { title: "Premium Neoprene Business Travel Trolley Set - High End", price: "48.46", moq: 20, image: "https://sc04.alicdn.com/kf/Hdbc87340d5a1465096480bd5837d6917H.png", material: "Double-Layer Neoprene Fabric", specs: "20\" (International Carry-on)", colors: "Executive Black, Light Grey, Earth Gold" }
];

const backpackProducts = [
  { title: "Timeless Collegiate Plaid Bag - Durable Nylon School Design", price: "7.69", moq: 200, image: "https://s.alicdn.com/@sc04/kf/H68cb2b47de654d55bf5f042e3a26f7778/-.png", material: "Collegiate Grade Plaid Nylon", specs: "Reinforced Base / Laptop Sleeve", colors: "Classic Brown, Heritage Navy" },
  { title: "Fashion Minimalist Laptop Backpack With Anti-theft Pocket", price: "5.23", moq: 500, image: "https://s.alicdn.com/@sc04/kf/Hf1854c9d1fc64a86858d65f162efc2abi/-.png", material: "Anti-Slash Security Polyester", specs: "Hidden Rear Security Compartment", colors: "Security Grey, Stealth Black, Red" },
  { title: "Custom Logo Waterproof Nylon Backpack With Drawstring Closure", price: "12.15", moq: 50, image: "https://s.alicdn.com/@sc04/kf/Hab97c2351bdb436896eb584d23da80d9J/-.png", material: "Waterproof Microfiber Nylon", specs: "Custom Logo Support / Drawstring", colors: "Light Grey, Tactical Black" },
  { title: "Lightweight Denim-style Schoolbag For Gym Cycling & Getaway", price: "9.53", moq: 100, image: "https://s.alicdn.com/@sc04/kf/H98b75e3ee01645a1961270a265c45a21R/-.png", material: "Faux-Denim Durable Canvas", specs: "Multi-Pocket Quick-Access Design", colors: "Lavender, Deep Purple, Forest" },
  { title: "Vintage Pu Leather Backpack With Cute Dachshund Charm", price: "11.23", moq: 50, image: "https://s.alicdn.com/@sc04/kf/Hd7cefff3c40a4762bc5f4d4aec836aceY/-PU-.png", material: "Hand-Washed Vintage PU Leather", specs: "Retro Buckle / 15\" Laptop Capable", colors: "Cognac Brown, Espresso, Black" },
  { title: "Fashionable Business Student Backpack For Office Getaway", price: "4.55", moq: 100, image: "https://s.alicdn.com/@sc04/kf/Hfbff377b3bdc4cea973c2d32af842f96v/-.jpg", material: "Grade Water-resistant Fabric", specs: "Adjustable Straps / 20L Capacity", colors: "Midnight Blue, Stealth Black" },
  { title: "Wholesale Trendy School Backpack With Multi-pocket Design", price: "6.46", moq: 100, image: "https://s.alicdn.com/@sc04/kf/H4837c61497d744c7914e66d202b1b1abZ/-.png", material: "Polyester Oxford Hybrid", specs: "Spacious Multi-Compartment Layout", colors: "Classic Black, School Grey" },
  { title: "Fashionable Oxford Cloth Shoulder Bag For Women", price: "7.53", moq: 100, image: "https://s.alicdn.com/@sc04/kf/Hdc1c5c24b2f84e38bce610362dd59bcfu/-.png", material: "Matte-Finish Oxford Cloth", specs: "Dual-Handle Utility Backpack", colors: "Stealth Black, Milk Tea Beige" }
];

const casualProducts = [
  { title: "Breathable Lightweight Drawstring Bucket Bag For Women Men", price: "6.31", moq: 50, image: "https://s.alicdn.com/@sc04/kf/H904c56c91a61441fae348af4e58255106/-.png", material: "Air-Permeable Technical Mesh", specs: "Drawstring Bucket / Urban Sporty", colors: "Black, Royal Blue, Forest Green" },
  { title: "Versatile Waist Pack Lightweight Fitness Gym Bag", price: "7.69", moq: 50, image: "https://s.alicdn.com/@sc04/kf/Hc179d6b896754db2b2ad5fd007d596eeh/-.png", material: "Anti-Scratch Sports Nylon", specs: "Adjustable Sling / Phone Pocket", colors: "Charcoal, Sky Blue, Khaki" },
  { title: "Trendy Contrast Color Crossbody Bag Nylon Chest Pack", price: "9.23", moq: 100, image: "https://s.alicdn.com/@sc04/kf/Hc85e7350951a460bb443acefed2615da6/-.png", material: "Contrast Panel Nylon", specs: "High-Visibility Urban Sling", colors: "Black/Orange, Green/Grey" },
  { title: "Men's Japanese Workwear Nylon Crossbody Messenger Bag", price: "8.75", moq: 50, image: "https://s.alicdn.com/@sc04/kf/Hffac821b74324304b15a36db27482162o/-.png", material: "Heavy-Duty Workwear Nylon", specs: "Braided Rope Strap / Tactical", colors: "Field Green, Coyote Khaki, Black" },
  { title: "Men's Waterproof Nylon Chest Bag Streetwear Sling Pack", price: "11.38", moq: 20, image: "https://s.alicdn.com/@sc04/kf/He7badfb52bf646d3889d96f273429dc3c/-.jpg", material: "Waterproof Motorcycle Nylon", specs: "Ergonomic Cross-Body Harness", colors: "Iron Grey, Carbon Black" },
  { title: "Tie-dye Nylon Chest Bag With Cute Panda Charm", price: "6.46", moq: 50, image: "https://s.alicdn.com/@sc04/kf/H984b310e99e1491f8b20d5cf33924e9c0/-.png", material: "Tie-Dye Graphic Nylon", specs: "Mini-Sling / Sporty Aesthetic", colors: "Galaxy Blue, Aurora Purple" },
  { title: "Japanese Style Nylon Chest Bag Cute Waist Bag Fresh Niche", price: "6.92", moq: 30, image: "https://s.alicdn.com/@sc04/kf/Ha9d59182d39445bd8b8763c85ae98f6fS/-.png", material: "Soft-Touch Peach Skin Fabric", specs: "Niche Casual Crossbody Design", colors: "Sakura Pink, Matcha Green, Black" },
  { title: "Japanese Style Plaid Sling Bag Kawaii Crossbody Messenger", price: "12.50", moq: 50, image: "https://s.alicdn.com/@sc04/kf/Hd343b570c24a4eb794201416f632878d4/-.jpg", material: "Vintage Plaid Cotton Canvas", specs: "Kawaii Accessory Integration", colors: "Primary Yellow, Classic Blue" }
];

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F4F4F4]">
      <StoreHeader />
      <main className="flex flex-col">
        <Hero />
        <LanguageStrip />
        <FactoryTour />
        <CustomizationService />
        <ProductionProcess />
        <div className="flex flex-col gap-[20px] mt-[20px]">
          <CategorySection title="Hard & Soft Luggage" products={luggageProducts} />
          <CategorySection title="Student Backpacks" products={backpackProducts} />
          <CategorySection title="Casual & Crossbody Bags" products={casualProducts} />
          <CompanyProfile />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
