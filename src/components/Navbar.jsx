import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">L</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">LUMIÈRE</h1>
                <p className="text-xs text-gray-600">Hubs Modulaires</p>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700'
              } hover:text-blue-600 transition-colors px-3 py-2`}
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-blue-600 font-semibold' : 'text-gray-700'
              } hover:text-blue-600 transition-colors px-3 py-2`}
            >
              À propos
            </Link>
            
            <div
              className="relative"
              onMouseEnter={() => setIsDetailsOpen(true)}
              onMouseLeave={() => setIsDetailsOpen(false)}
            >
              <button
                className={`${
                  isActive('/details/presentation') || isActive('/details/budget')
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700'
                } hover:text-blue-600 transition-colors px-3 py-2 flex items-center space-x-1`}
              >
                <span>Détails</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isDetailsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDetailsOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                  <Link
                    to="/details/presentation"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-medium">Présentation</div>
                    <div className="text-xs text-gray-500">Description complète</div>
                  </Link>
                  <Link
                    to="/details/budget"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-medium">Budget</div>
                    <div className="text-xs text-gray-500">Répartition & KPIs</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-blue-600 font-semibold' : 'text-gray-700'
              } hover:text-blue-600 transition-colors px-3 py-2`}
            >
              Contact
            </Link>

            <Link
              to="/donate"
              className="bg-gradient-to-r from-blue-600 to-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Contribuer
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <div className="px-3 py-2">
              <div className="font-medium text-gray-900 mb-2">Détails</div>
              <Link
                to="/details/presentation"
                className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Présentation
              </Link>
              <Link
                to="/details/budget"
                className="block pl-4 py-2 text-sm text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Budget
              </Link>
            </div>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/donate"
              className="block mx-3 mt-2 px-3 py-2 rounded-md text-center bg-gradient-to-r from-blue-600 to-amber-500 text-white font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contribuer
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
