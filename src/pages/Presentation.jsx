import { Link } from 'react-router-dom';

const Presentation = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Présentation Complète</h1>
            <p className="text-xl text-gray-200">Hubs LUMIÈRE : Un Modèle Innovant et Durable</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Description Complète des Hubs LUMIÈRE</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Les Hubs LUMIÈRE sont des centres modulaires autonomes qui combinent trois piliers essentiels : 
                <span className="font-semibold"> santé, éducation et énergie</span>. Chaque hub est conçu pour servir une communauté 
                d'environ 30 000 personnes par an dans des zones à fort besoin.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Avec un investissement de <span className="font-bold text-blue-600">1 million de dollars</span>, 
                chaque hub devient opérationnel en 12 mois et génère un impact mesurable et durable sur la santé publique, 
                l'éducation professionnelle et l'accès à l'énergie propre.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Pourquoi Financer ce Projet ?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Impact Tangible & Mesurable",
                    description: "Indicateurs clairs : patients soignés, taux de scolarisation, MWh produits, CO₂ évité",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    )
                  },
                  {
                    title: "Legacy & Branding",
                    description: "Chaque hub porte le nom du mécène avec plaque, rapport annuel public, présence média",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    )
                  },
                  {
                    title: "Diversification d'Impact",
                    description: "Santé + éducation + énergie = résilience communautaire complète",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z" />
                    )
                  },
                  {
                    title: "Scalabilité",
                    description: "Modèle modulaire, duplicable, franchisable pour expansion rapide",
                    icon: (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    )
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {item.icon}
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Objectifs Concrets par Hub</h2>
              <div className="space-y-6">
                {[
                  {
                    number: "30 000",
                    description: "personnes servies par an (soins primaires, prévention, téléconsultations)",
                    color: "blue"
                  },
                  {
                    number: "200",
                    description: "personnes formées par an en métiers techniques et santé communautaire",
                    color: "amber"
                  },
                  {
                    number: "24/7",
                    description: "électricité fournie à l'installation + points critiques du village (microgrid solaire + stockage)",
                    color: "green"
                  },
                  {
                    number: "100%",
                    description: "de réduction des générateurs diesel et amélioration de la résilience climatique",
                    color: "blue"
                  }
                ].map((objective, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 w-24 h-24 bg-${objective.color}-100 rounded-lg flex items-center justify-center`}>
                      <span className={`text-2xl font-bold text-${objective.color}-600`}>{objective.number}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 mt-4">{objective.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-8 italic">
                * Chiffres basés sur modèles opérationnels comparables et paramétrables selon le pays/paysage local.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Impacts Tangibles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Santé</h3>
                  <ul className="text-left text-gray-600 space-y-2">
                    <li>• Baisse hospitalisations évitables</li>
                    <li>• Amélioration indicateurs santé</li>
                    <li>• Accès téléconsultations</li>
                    <li>• Prévention maladies</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Emploi & Formation</h3>
                  <ul className="text-left text-gray-600 space-y-2">
                    <li>• Emplois locaux créés</li>
                    <li>• Compétences techniques</li>
                    <li>• Autonomie économique</li>
                    <li>• Développement professionnel</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Environnement</h3>
                  <ul className="text-left text-gray-600 space-y-2">
                    <li>• Réduction CO₂</li>
                    <li>• Énergie renouvelable</li>
                    <li>• Indépendance énergétique</li>
                    <li>• Résilience climatique</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Prêt à créer un impact durable ?</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Consultez notre budget détaillé ou contactez-nous pour discuter de votre contribution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/details/budget"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Voir le Budget
                </Link>
                <Link
                  to="/donate"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Contribuer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
