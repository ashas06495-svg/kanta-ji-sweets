import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingCart, Star, Award, Flame } from 'lucide-react';

const vegIcon = (
  <div className="w-4 h-4 border border-green-600 p-[2px] flex items-center justify-center rounded-sm shrink-0 bg-white">
    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
  </div>
);

const menuCategories = [
  'All',
  'Popular Snacks',
  'South Indian',
  'Indian Sweets',
  'Chaat Corner',
  'Fast Food',
  'Bakery & Cakes',
  'Main Course',
  'Beverages'
];

const filterTags = ['All', 'Sweets', 'Snacks', 'Fast Food', 'Bakery', 'Beverages'];

const menuData = [
  // Popular Snacks
  { id: 's1', category: 'Popular Snacks', filterTag: 'Snacks', name: 'Samosa', price: '₹15', desc: 'Crispy golden pastry stuffed with spiced potatoes and peas.', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80', isBestSeller: true, rating: 4.8 },
  { id: 's2', category: 'Popular Snacks', filterTag: 'Snacks', name: 'Chole Samosa', price: '₹35', desc: 'Crushed samosa topped with spicy chickpea curry and chutneys.', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
  { id: 's3', category: 'Popular Snacks', filterTag: 'Snacks', name: 'Pyaz Kachori', price: '₹25', desc: 'Flaky deep-fried pastry filled with spicy onion mixture.', img: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?auto=format&fit=crop&w=400&q=80', isBestSeller: true, rating: 4.9 },
  { id: 's4', category: 'Popular Snacks', filterTag: 'Snacks', name: 'Bread Pakoda', price: '₹20', desc: 'Spiced potato sandwiched in bread and deep-fried in gram flour.', img: 'https://images.unsplash.com/photo-1626082929544-774431526685?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
  { id: 's5', category: 'Popular Snacks', filterTag: 'Snacks', name: 'Paneer Bread', price: '₹30', desc: 'Crispy bread pakoda with a generous slice of fresh paneer.', img: 'https://plus.unsplash.com/premium_photo-1694508493192-3c819280d90d?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
  { id: 's6', category: 'Popular Snacks', filterTag: 'Snacks', name: 'Paneer Bread Chole', price: '₹50', desc: 'Paneer loaded bread pakoda served with spicy chole.', img: 'https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?auto=format&fit=crop&w=400&q=80', isChefRecommended: true, rating: 4.9 },
  { id: 's7', category: 'Popular Snacks', filterTag: 'Snacks', name: 'Pyaz Kachori Chole', price: '₹40', desc: 'Crispy onion kachori served with delicious chole gravy.', img: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
  { id: 's8', category: 'Popular Snacks', filterTag: 'Snacks', name: 'Chole Bhature', price: '₹80', desc: 'Large fluffy bhature served with rich and spicy Punjabi chole.', img: 'https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?auto=format&fit=crop&w=400&q=80', isChefRecommended: true, rating: 4.9 },
  { id: 's9', category: 'Popular Snacks', filterTag: 'Snacks', name: 'Paneer Pakoda', price: '₹25', desc: 'Soft paneer cubes deep-fried in a seasoned gram flour batter.', img: 'https://plus.unsplash.com/premium_photo-1694508493192-3c819280d90d?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
  { id: 's10', category: 'Popular Snacks', filterTag: 'Snacks', name: 'Mixed Pakoda', price: '₹50/plate', desc: 'Assorted vegetable fritters crispy fried to perfection.', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80', rating: 4.4 },
  { id: 's11', category: 'Popular Snacks', filterTag: 'Snacks', name: 'Dhokla', price: '₹40/plate', desc: 'Soft and spongy steamed gram flour snack, tempered with mustard seeds.', img: 'https://images.unsplash.com/photo-1599557618055-096d2e0dc3d4?auto=format&fit=crop&w=400&q=80', rating: 4.6 },

  // South Indian
  { id: 'si1', category: 'South Indian', filterTag: 'Snacks', name: 'Plain Dosa', price: '₹90', desc: 'Thin and crispy fermented crepe served with sambar and chutney.', img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
  { id: 'si2', category: 'South Indian', filterTag: 'Snacks', name: 'Masala Dosa', price: '₹120', desc: 'Crispy dosa wrapped around a spiced potato filling.', img: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
  { id: 'si3', category: 'South Indian', filterTag: 'Snacks', name: 'Paneer Dosa', price: '₹150', desc: 'Special dosa stuffed with seasoned grated paneer.', img: 'https://images.unsplash.com/photo-1610192244199-56b009ba4737?auto=format&fit=crop&w=400&q=80', rating: 4.7 },

  // Indian Sweets
  { id: 'sw1', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Kanta Special Barfi', price: '₹600/kg', desc: 'Our signature melt-in-mouth milk sweet crafted with a secret recipe.', img: 'https://images.unsplash.com/photo-1605197177583-09be736fa202?auto=format&fit=crop&w=400&q=80', rating: 4.9 },
  { id: 'sw2', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Kaju Katli', price: '₹900/kg', desc: 'Premium cashew fudge with delicate silver leaf.', img: 'https://images.unsplash.com/photo-1631481546944-d6215f92ffae?auto=format&fit=crop&w=400&q=80', isChefRecommended: true, rating: 5.0 },
  { id: 'sw3', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Milk Cake', price: '₹550/kg', desc: 'Rich and granular traditional sweet made from caramelized milk.', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80', isBestSeller: true, rating: 4.9 },
  { id: 'sw4', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Gulab Jamun', price: '₹20/pc', desc: 'Soft khoya dumplings soaked in warm rose-scented syrup.', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80', isChefRecommended: true, rating: 4.8 },
  { id: 'sw5', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Rasmalai', price: '₹35/pc', desc: 'Soft cottage cheese patties immersed in rich saffron milk.', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80', isChefRecommended: true, rating: 4.9 },
  { id: 'sw6', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Motichoor Laddu', price: '₹400/kg', desc: 'Fine gram flour pearls slow-fried and bound with sugar syrup.', img: 'https://images.unsplash.com/photo-1605197136005-9ca00b0d35b9?auto=format&fit=crop&w=400&q=80', isBestSeller: true, rating: 4.8 },
  { id: 'sw7', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Sada Peda Barfi', price: '₹450/kg', desc: 'Classic milk solid sweet infused with cardamom.', img: 'https://images.unsplash.com/photo-1605197177583-09be736fa202?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
  { id: 'sw8', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Roasted Peda', price: '₹500/kg', desc: 'Deep-roasted milk solids offering an intense caramelized flavor.', img: 'https://images.unsplash.com/photo-1631481546944-d6215f92ffae?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
  { id: 'sw9', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Balushahi', price: '₹380/kg', desc: 'Flaky deep-fried dough discs soaked in fragrant syrup.', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
  { id: 'sw10', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Besan Laddu', price: '₹400/kg', desc: 'Roasted gram flour delicacies packed with dry fruits.', img: 'https://images.unsplash.com/photo-1605197136005-9ca00b0d35b9?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
  { id: 'sw11', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Gujiya', price: '₹450/kg', desc: 'Crispy pastry stuffed with sweet khoya and nuts.', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
  { id: 'sw12', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Rasgulla', price: '₹20/pc', desc: 'Soft and spongy fresh cheese balls in light sugar syrup.', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
  { id: 'sw13', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Rabdi', price: '₹40/cup', desc: 'Thickened, sweetened milk with layers of cream and nuts.', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
  { id: 'sw14', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Boondi Laddu', price: '₹350/kg', desc: 'Sweet treats made from tiny fried gram flour drops.', img: 'https://images.unsplash.com/photo-1605197136005-9ca00b0d35b9?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
  { id: 'sw15', category: 'Indian Sweets', filterTag: 'Sweets', name: 'Mawa Kachori', price: '₹40/pc', desc: 'Rich pastry crust filled with sweet mawa and dipped in syrup.', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80', rating: 4.9 },

  // Chaat Corner
  { id: 'c1', category: 'Chaat Corner', filterTag: 'Snacks', name: 'Suji Golgappa', price: '₹30/plate', desc: 'Crispy semolina puris served with spicy and sweet water.', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
  { id: 'c2', category: 'Chaat Corner', filterTag: 'Snacks', name: 'Papdi Chaat', price: '₹50', desc: 'Crisp dough wafers topped with potato, yogurt, chutneys and spices.', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
  { id: 'c3', category: 'Chaat Corner', filterTag: 'Snacks', name: 'Aloo Tikki Chutney', price: '₹40', desc: 'Golden potato patties served with tangy tamarind and mint chutneys.', img: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
  { id: 'c4', category: 'Chaat Corner', filterTag: 'Snacks', name: 'Aloo Tikki Chole', price: '₹60', desc: 'Crispy aloo tikki drowned in spicy and flavorful chole.', img: 'https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?auto=format&fit=crop&w=400&q=80', rating: 4.9 },
  { id: 'c5', category: 'Chaat Corner', filterTag: 'Snacks', name: 'Dahi Bhalla Papdi Chaat', price: '₹60', desc: 'Soft lentil fritters and crispy papdi soaked in sweet yogurt.', img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80', rating: 4.8 },

  // Fast Food
  { id: 'f1', category: 'Fast Food', filterTag: 'Fast Food', name: 'Veg Burger', price: '₹50', desc: 'Crispy vegetable patty in a toasted bun with fresh lettuce and mayo.', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
  { id: 'f2', category: 'Fast Food', filterTag: 'Fast Food', name: 'Paneer Burger', price: '₹70', desc: 'Premium burger with a generous thick cottage cheese slice.', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
  { id: 'f3', category: 'Fast Food', filterTag: 'Fast Food', name: 'Singapore Chowmein', price: '₹120', desc: 'Spicy and tangy stir-fried noodles with assorted fresh vegetables.', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
  { id: 'f4', category: 'Fast Food', filterTag: 'Fast Food', name: 'Veg Sandwich', price: '₹60', desc: 'Grilled sandwich loaded with fresh veggies and melted cheese.', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
  { id: 'f5', category: 'Fast Food', filterTag: 'Fast Food', name: 'French Fries', price: '₹60', desc: 'Crispy, golden, and lightly salted potato fries.', img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=400&q=80', rating: 4.4 },
  { id: 'f6', category: 'Fast Food', filterTag: 'Fast Food', name: 'Pizza Slice', price: '₹80', desc: 'Oven-baked pizza slice with loaded cheese and vegetable toppings.', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80', rating: 4.6 },

  // Bakery & Cakes
  { id: 'b1', category: 'Bakery & Cakes', filterTag: 'Bakery', name: 'Fresh Cream Cakes', price: '₹350/0.5kg', desc: 'Soft sponge generously layered with freshly whipped cream.', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
  { id: 'b2', category: 'Bakery & Cakes', filterTag: 'Bakery', name: 'Chocolate Cake', price: '₹400/0.5kg', desc: 'Rich chocolate sponge enveloped in dark chocolate ganache.', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80', rating: 4.9 },
  { id: 'b3', category: 'Bakery & Cakes', filterTag: 'Bakery', name: 'Butterscotch Cake', price: '₹380/0.5kg', desc: 'Caramel infused cake with crunchy butterscotch bits.', img: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
  { id: 'b4', category: 'Bakery & Cakes', filterTag: 'Bakery', name: 'Pineapple Cake', price: '₹350/0.5kg', desc: 'Classic sponge with fresh pineapple chunks and light cream.', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
  { id: 'b5', category: 'Bakery & Cakes', filterTag: 'Bakery', name: 'Chocolate Brownies', price: '₹60/pc', desc: 'Dense and fudgy chocolate walnut brownies.', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80', rating: 4.8 },

  // Main Course
  { id: 'm1', category: 'Main Course', filterTag: 'Main Course', name: 'Paneer Butter Masala', price: '₹180', desc: 'Cottage cheese cubes bathed in a velvety makhani gravy.', img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&w=400&q=80', rating: 4.9 },
  { id: 'm2', category: 'Main Course', filterTag: 'Main Course', name: 'Shahi Paneer', price: '₹190', desc: 'Royal paneer dish in a rich cashew and cream sauce.', img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
  { id: 'm3', category: 'Main Course', filterTag: 'Main Course', name: 'Dal Fry', price: '₹120', desc: 'Yellow lentils tempered with ghee, cumin, and garlic.', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
  { id: 'm4', category: 'Main Course', filterTag: 'Main Course', name: 'Mix Veg', price: '₹140', desc: 'Assortment of seasonal vegetables slow-cooked in Indian spices.', img: 'https://images.unsplash.com/photo-1565557612262-e5684f529db7?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
  { id: 'm5', category: 'Main Course', filterTag: 'Main Course', name: 'Butter Naan', price: '₹40', desc: 'Soft and fluffy tandoori flatbread brushed with butter.', img: 'https://images.unsplash.com/photo-1626777553531-bc6e5743b171?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
  { id: 'm6', category: 'Main Course', filterTag: 'Main Course', name: 'Jeera Rice', price: '₹90', desc: 'Aromatic basmati rice tossed with toasted cumin seeds.', img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80', rating: 4.7 },

  // Beverages
  { id: 'v1', category: 'Beverages', filterTag: 'Beverages', name: 'Special Tea', price: '₹20', desc: 'Authentic Indian chai brewed with ginger and cardamom.', img: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27bcf?auto=format&fit=crop&w=400&q=80', rating: 4.9 },
  { id: 'v2', category: 'Beverages', filterTag: 'Beverages', name: 'Cold Coffee', price: '₹80', desc: 'Frothy and refreshing blended iced coffee.', img: 'https://images.unsplash.com/photo-1461023058943-07cb14a1a5b8?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
  { id: 'v3', category: 'Beverages', filterTag: 'Beverages', name: 'Sweet Lassi', price: '₹60', desc: 'Thick, creamy, and chilled traditional yogurt drink.', img: 'https://images.unsplash.com/photo-1571114515286-90c74fb7c166?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
  { id: 'v4', category: 'Beverages', filterTag: 'Beverages', name: 'Badam Milk', price: '₹50', desc: 'Warm milk enriched with saffron and crushed almonds.', img: 'https://images.unsplash.com/photo-1605197177583-09be736fa202?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const filteredMenu = useMemo(() => {
    return menuData.filter((item) => {
      const matchCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchFilter = activeFilter === 'All' || item.filterTag === activeFilter || item.category.includes(activeFilter);
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchCategory && matchFilter && matchSearch;
    });
  }, [activeCategory, activeFilter, searchQuery]);

  return (
    <section id="menu" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-brand-saffron font-bold tracking-widest uppercase text-sm mb-4">Discover Our Treasures</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-maroon font-bold mb-6">Our Authentic <span className="italic text-brand-saffron">Menu</span></h2>
          <p className="text-brand-dark/70 text-lg font-medium">Indulge in our wide variety of authentic offerings, crafted with premium ingredients and traditional recipes.</p>
        </div>

        {/* Search and Main Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 bg-white p-4 rounded-2xl shadow-sm border border-brand-saffron/20 border-b-4 border-b-brand-saffron/40">
          
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search for sweets, snacks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-paper pl-12 pr-4 py-3 rounded-xl border border-transparent focus:border-brand-saffron outline-none transition-all placeholder:text-brand-dark/40 font-medium"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-saffron" size={20} />
          </div>

          <div className="flex overflow-x-auto w-full md:w-auto pb-2 md:pb-0 gap-2 hide-scrollbar scroll-smooth">
            {filterTags.map(tag => (
              <button
                key={tag}
                onClick={() => {
                  setActiveFilter(tag);
                  setActiveCategory('All');
                }}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm border-2 ${
                  activeFilter === tag 
                    ? 'bg-brand-maroon border-brand-maroon text-white' 
                    : 'bg-white text-brand-dark border-brand-paper hover:border-brand-saffron hover:text-brand-saffron'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Categories */}
        <div className="mb-12 overflow-x-auto hide-scrollbar bg-white rounded-xl shadow-sm border border-brand-paper inline-flex max-w-full">
          <div className="flex min-w-max p-1">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveFilter('All');
                }}
                className={`px-5 py-2.5 text-sm font-bold transition-all rounded-lg relative ${
                  activeCategory === category 
                    ? 'bg-brand-saffron/10 text-brand-maroon' 
                    : 'text-brand-dark/60 hover:bg-brand-paper hover:text-brand-saffron'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredMenu.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif text-brand-dark/60">No items found</h3>
            <button onClick={() => {setSearchQuery(''); setActiveCategory('All'); setActiveFilter('All');}} className="mt-4 text-brand-saffron font-bold hover:underline">Clear Filters</button>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredMenu.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col relative"
                >
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    {item.isChefRecommended && (
                      <div className="bg-brand-dark/90 backdrop-blur text-brand-saffron text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                        <Award size={14} /> Recommended
                      </div>
                    )}
                    {item.isBestSeller && (
                      <div className="bg-brand-maroon/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                        <Flame size={14} /> Best Seller
                      </div>
                    )}
                  </div>

                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden bg-brand-paper shrink-0">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow bg-white">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="text-xl font-serif font-bold text-brand-dark leading-tight group-hover:text-brand-maroon transition-colors flex items-center gap-2">
                        {item.name}
                        {vegIcon}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-3">
                      <Star size={14} className="fill-brand-saffron text-brand-saffron" />
                      <span className="text-sm font-bold text-brand-dark/80">{item.rating}</span>
                      <span className="text-xs text-brand-dark/50 ml-1 font-medium">• {item.category}</span>
                    </div>

                    <p className="text-brand-dark/70 text-sm leading-relaxed mb-6 font-medium flex-grow">
                      {item.desc}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-paper">
                      <span className="text-xl font-bold text-brand-maroon">{item.price}</span>
                      <button 
                        onClick={() => setCartCount(c => c + 1)}
                        className="bg-brand-paper hover:bg-brand-saffron hover:text-white text-brand-dark w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm hover:shadow-brand-saffron/30 active:scale-95 border border-brand-saffron/20"
                        aria-label="Add to order"
                      >
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Mobile Sticky Order Button */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm"
          >
            <div className="bg-brand-maroon text-brand-cream rounded-full p-2 pl-6 pr-2 shadow-[0_10px_40px_rgba(116,0,1,0.3)] flex items-center justify-between border border-brand-saffron/30 backdrop-blur-md">
               <div className="flex items-center gap-3">
                 <div className="bg-brand-saffron w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white">
                   {cartCount}
                 </div>
                 <span className="font-bold text-sm">Items Added</span>
               </div>
               <button className="bg-white text-brand-maroon px-6 py-3 rounded-full font-bold text-sm hover:bg-brand-paper transition-colors shadow-sm">
                 View Order
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

