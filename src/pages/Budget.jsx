const Budget = () => {
  const budgetItems = [
    { label: "Construction & aménagement modulaire", amount: 400000, percentage: 40, color: "blue" },
    { label: "Équipement médical & diagnostic (incl. télé-santé)", amount: 200000, percentage: 20, color: "red" },
    { label: "Microgrid solaire + batteries", amount: 150000, percentage: 15, color: "green" },
    { label: "Salaires & opérations — 1ère année", amount: 150000, percentage: 15, color: "amber" },
    { label: "Monitoring, M&E + data infrastructure", amount: 50000, percentage: 5, color: "purple" },
    { label: "Contingence & licences", amount: 50000, percentage: 5, color: "gray" }
  ];

  const timeline = [
    { month: "0-2", title: "Due diligence & permis", description: "Due diligence site, accords locaux, permis" },
    { month: "2-4", title: "Design & recrutement", description: "Design modulaire + recrutement local" },
    { month: "4-8", title: "Construction", description: "Construction & installation microgrid, équipement" },
    { month: "8-10", title: "Tests & formation", description: "Tests, formation du personnel, partenariats télé-santé" },
    { month: "10-12", title: "Lancement", description: "Lancement opérationnel" }
  ];

  const kpis = [
    { title: "Patients traités/an", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
    { title: "Consultations télé-santé", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { title: "Formations complétées", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
    { title: "Emplois créés", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { title: "MWh produits", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "Tonnes CO₂ évitées", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Satisfaction utilisateur", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Heures électricité fournies", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Budget Détaillé</h1>
            <p className="text-xl text-gray-200">Répartition complète de l'investissement de 1 000 000 $</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-amber-500 text-white px-8 py-4 rounded-full text-3xl md:text-4xl font-bold mb-4">
                1 000 000 $
              </div>
              <p className="text-gray-600 text-lg">Investissement total par hub</p>
            </div>

            <div className="space-y-6">
              {budgetItems.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-900">
                        {item.amount.toLocaleString('fr-FR')} $
                      </div>
                      <div className="text-sm text-gray-600">{item.percentage}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 h-3 rounded-full transition-all duration-1000`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Timeline du Premier Hub</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                {timeline.map((phase, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold">
                        Mois<br />{phase.month}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="hidden md:block w-px h-20 bg-gray-300 absolute left-10 mt-20"></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <p className="text-gray-700">
                  <span className="font-semibold">Rapport d'impact initial</span> à 12 mois ; 
                  <span className="font-semibold"> dashboard public</span> mis à jour trimestriellement.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">KPIs Mesurables</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Chaque hub fait l'objet d'un suivi rigoureux avec des indicateurs de performance clés pour garantir la transparence et l'impact
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {kpis.map((kpi, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={kpi.icon} />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{kpi.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Audit & Transparence</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Audit financier annuel par cabinet indépendant</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Audit d'impact tiers pour validation des KPIs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Rapports publics trimestriels</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Dashboard d'impact en temps réel accessible aux mécènes</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Risques & Mitigations</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Politique/Administratif:</span>
                    <span className="text-gray-700"> Partenariats locaux, assurances</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Opérationnel:</span>
                    <span className="text-gray-700"> Formation locale intensive, incitations</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Financier:</span>
                    <span className="text-gray-700"> Phasage paiements, fonds de réserve</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">Réputationnel:</span>
                    <span className="text-gray-700"> Audit indépendant, transparence totale</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Effet de Levier & Scaling</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-400 mb-2">1</div>
                <div className="text-gray-200">milliardaire</div>
                <div className="text-xl font-semibold mt-2">= 1 hub</div>
                <div className="text-sm text-gray-300 mt-1">Impact direct sur 30K vies/an</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-400 mb-2">10</div>
                <div className="text-gray-200">milliardaires</div>
                <div className="text-xl font-semibold mt-2">= 10 hubs</div>
                <div className="text-sm text-gray-300 mt-1">Impact sur 300K vies/an</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-400 mb-2">∞</div>
                <div className="text-gray-200">réseau</div>
                <div className="text-xl font-semibold mt-2">Synergies</div>
                <div className="text-sm text-gray-300 mt-1">Économies d'échelle</div>
              </div>
            </div>
            <p className="text-center text-gray-200 max-w-3xl mx-auto">
              La création d'un réseau de hubs permet des synergies, des économies d'échelle, et le développement d'une plateforme centrale de gestion et R&D.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Budget;
