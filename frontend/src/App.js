import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('sandwichs');

  const menuData = {
    sandwichs: {
      title: 'Sandwichs',
      subtitle: 'Viandes Fraîches - Escalope de poulet, Cordon bleu, Steak haché, Merguez, Kebab, Tenders - Pain ou Galette, Viande au choix, sauce au choix, salade, tomates, oignons',
      items: [
        { name: 'Sandwich seul', price: '6.00€' },
        { name: 'Menu sandwich', price: '8.00€' }
      ]
    },
    burgers: {
      title: 'Burgers',
      subtitle: 'Classique - Steak haché, sauce au choix, salade, tomates, oignons, cheddar',
      items: [
        { name: 'Classique', price: '4.50€', menu: '6.50€' },
        { name: 'Chicken - Escalope de poulet pour maison, sauce au choix, tomates, cheddar', price: '5.50€', menu: '7.50€' },
        { name: 'MB Burger - Steak haché, sauce au choix, cordon, ratatouille, oignons', price: '6.50€', menu: '8.50€' }
      ]
    },
    tacos: {
      title: 'Tacos',
      subtitle: 'Viandes Fraîches - Escalope de poulet, Cordon bleu, Steak haché, Nuggets, Kebab, Tenders',
      items: [
        { name: 'Taco M - 1 Viande au choix, Sauce au choix, Sauce Fromagère, Frites', price: '5.00€', menu: '8.00€' },
        { name: 'Taille L - 2 Viandes au choix, Sauce au choix, Sauce Fromagère, Frites', price: '7.50€', menu: '9.50€' },
        { name: 'Taille XL - 3 Viandes au choix, Sauce au choix, Sauce Fromagère, Frites', price: '8.50€', menu: '10.50€' },
        { name: 'MB Gold - 1 viande au choix, Sauce au choix, Sauce Fromagère, Frites', price: '6.00€', menu: '8.00€' }
      ]
    },
    paninis: {
      title: 'Paninis',
      subtitle: '',
      items: [
        { name: '3 Fromages - Chèvre, Mozzarella, Emmental', price: '4.50€', menu: '6.50€' },
        { name: 'L\'Italien - Tomates, Mozzarella, Pesto', price: '4.50€', menu: '6.50€' },
        { name: 'Chicken - Poulet, Mozzarella, Tomates', price: '4.50€', menu: '6.50€' }
      ]
    },
    mbkids: {
      title: 'MB Kids',
      subtitle: 'Menu',
      items: [
        { name: '1 Cheese Burger ou 4 Nuggets, Frites, Capri Sun, Compote, Surprise', price: '5.00€' }
      ]
    },
    assiettes: {
      title: 'Assiettes',
      subtitle: 'Complètes Fraîches - Escalope de poulet pour maison, Steak haché, Merguez, Kebab, Tenders - Roquettes, Tomate, Feta/Chèvre, Betterave',
      items: [
        { name: 'Viande au choix, Sauce au choix, Frites Fraîches maison, Salade, Tomates', price: '8.00€' },
        { name: '2 Viandes au choix, Sauce au choix, Frites Fraîches maison, Salade, Tomates', price: '15.00€' }
      ]
    },
    petitesfaims: {
      title: 'Petites Faims',
      subtitle: '',
      items: [
        { name: 'Cheese Burger', price: '3.50€' },
        { name: 'Frite wings chevre ou poulet', price: '3.50€' },
        { name: 'Mexi poules X 4', price: '3.50€' },
        { name: 'Tenders Croquettes X 4', price: '3.50€' },
        { name: 'Stick Mozza X 4', price: '3.50€' },
        { name: 'Oignons Rings X 4', price: '3.00€' },
        { name: 'Frites Fraîches maison', price: '3.00€' },
        { name: 'Nuggets', price: '4.00€' },
        { name: 'Samoussa', price: '4.00€' }
      ]
    },
    supplements: {
      title: 'Suppléments',
      subtitle: 'Suppléments - Cheddar, Sauce cheddar, Sauce Fromagère, Crispy Oignons, Fromage raclé, œuf, oignons cru, oignons cuit',
      items: [
        { name: 'Supplément au choix', price: '0.50€' }
      ]
    },
    sauces: {
      title: 'Sauces',
      subtitle: 'Ketchup, Mayonnaise, Moutarde, Algérienne, Burger, Kraal, Barbecue, Poivre, Sauce blanche, Harissa, Samourai, Andalouse',
      items: [
        { name: 'Sauce au choix', price: 'Incluse' }
      ]
    },
    desserts: {
      title: 'Desserts',
      subtitle: '',
      items: [
        { name: 'Tarte au daim', price: '2.50€' },
        { name: 'Tiramisu', price: '3.00€' },
        { name: 'Tarte de jour', price: '3.50€' },
        { name: 'Donuts', price: '1.50€' }
      ]
    },
    boissons: {
      title: 'Boissons',
      subtitle: '',
      items: [
        { name: 'Bouteille d\'eau', price: '1.00€' },
        { name: 'Canette de Soda', price: '1.00€' },
        { name: 'Jus Rio', price: '0.60€' },
        { name: 'Capri Sun', price: '1.50€' },
        { name: 'Bouteille de verre', price: '1.50€' },
        { name: 'Bouteille Nestea', price: '1.50€' },
        { name: 'Grande Bouteille', price: '3.00€' },
        { name: 'Redbull', price: '2.00€' },
        { name: 'Jus Wow', price: '2.00€' },
        { name: 'Monster', price: '2.00€' },
        { name: 'Café', price: '1.00€' }
      ]
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">MB FOOD</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#menu" className="text-white hover:text-orange-400 transition-colors">Menu</a>
                <a href="#about" className="text-white hover:text-orange-400 transition-colors">À Propos</a>
                <a href="#contact" className="text-white hover:text-orange-400 transition-colors">Contact</a>
                <a href="tel:0698398025" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105">
                  Commander
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-orange-400"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#menu" className="block px-3 py-2 text-white hover:text-orange-400">Menu</a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-orange-400">À Propos</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-orange-400">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/11690674/pexels-photo-11690674.jpeg" 
            alt="Burgers MB Food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-orange-900/30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            <span className="block">MB</span>
            <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">FOOD</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            Snack halal urbain, rapide et généreux
          </p>
          <p className="text-lg text-orange-300 mb-8">
            Spécialités tacos • burgers • assiettes maison
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0698398025"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-2xl"
            >
              📞 Commander Maintenant
            </a>
            <a 
              href="#menu"
              className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-400 hover:text-black transition-all transform hover:scale-105"
            >
              Voir le Menu
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">
                Notre <span className="text-orange-400">Passion</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Chez MB Food, nous proposons une cuisine halal urbaine qui allie rapidité et générosité. 
                Nos spécialités incluent des tacos authentiques, des burgers savoureux et des assiettes maison préparées avec soin.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <div className="text-2xl font-bold text-orange-400">100%</div>
                  <div className="text-white">Halal</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <div className="text-2xl font-bold text-orange-400">Rapide</div>
                  <div className="text-white">Service</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1620395458832-6436796c2d4c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fG9yYW5nZXwxNzUwNjY4NzQ4fDA&ixlib=rb-4.1.0&q=85"
                alt="Restaurant MB Food"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-orange-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Notre <span className="text-orange-400">Menu</span>
            </h2>
            <p className="text-xl text-gray-300">Découvrez nos spécialités halal</p>
          </div>

          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(menuData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {menuData[category].title}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">{menuData[activeCategory].title}</h3>
              {menuData[activeCategory].subtitle && (
                <p className="text-orange-300 text-sm italic max-w-4xl mx-auto">
                  {menuData[activeCategory].subtitle}
                </p>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData[activeCategory].items.map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all hover:transform hover:scale-105">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white flex-1">{item.name}</h3>
                    <div className="text-right ml-4">
                      <span className="text-xl font-bold text-orange-400">{item.price}</span>
                      {item.menu && (
                        <div className="text-sm text-orange-300">Menu: {item.menu}</div>
                      )}
                    </div>
                  </div>
                  {item.description && (
                    <p className="text-sm text-orange-300 italic">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="tel:0698398025"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-2xl"
            >
              Commander par Téléphone
            </a>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Nous <span className="text-orange-400">Trouver</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Adresse</h3>
                    <p className="text-gray-300">2 Place de la République</p>
                    <p className="text-gray-300">13640 La Roque-d'Anthéron, France</p>
                    <a 
                      href="https://www.google.com/maps?q=2+Place+de+la+République,+13640+La+Roque-d%27Anthéron,+France"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 underline"
                    >
                      Voir sur Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Horaires</h3>
                    <p className="text-gray-300">Lundi - Dimanche</p>
                    <p className="text-orange-400 font-semibold">11h00 - 23h00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Téléphone</h3>
                    <a 
                      href="tel:0698398025"
                      className="text-orange-400 hover:text-orange-300 text-lg font-semibold"
                    >
                      06 98 39 80 25
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Réseaux Sociaux</h3>
              <div className="space-y-4">
                <a 
                  href="https://www.instagram.com/mb__food__?igsh=aXl2cmJ4MDdlcmVi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">IG</span>
                  </div>
                  <span className="text-white font-semibold">@mb__food__</span>
                </a>

                <a 
                  href="https://m.facebook.com/m.b.food.341323?wtsid=rdr_0oHetTxGAKzHh2YPL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition-all"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">FB</span>
                  </div>
                  <span className="text-white font-semibold">M.B Food</span>
                </a>

                <a 
                  href="https://www.snapchat.com/add/mbfood13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30 transition-all"
                >
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold">SC</span>
                  </div>
                  <span className="text-white font-semibold">mbfood13</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Déguster ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Appelez-nous dès maintenant pour passer votre commande
          </p>
          <a 
            href="tel:0698398025"
            className="bg-white text-orange-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            📞 06 98 39 80 25
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">MB FOOD</h3>
            <p className="text-gray-400 mb-6">Snack halal urbain, rapide et généreux</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://www.instagram.com/mb__food__?igsh=aXl2cmJ4MDdlcmVi" className="text-orange-400 hover:text-orange-300">Instagram</a>
              <a href="https://m.facebook.com/m.b.food.341323?wtsid=rdr_0oHetTxGAKzHh2YPL" className="text-orange-400 hover:text-orange-300">Facebook</a>
              <a href="https://www.snapchat.com/add/mbfood13" className="text-orange-400 hover:text-orange-300">Snapchat</a>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500">© 2025 MB Food. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;