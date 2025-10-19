import { useState } from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
  const [donationType, setDonationType] = useState('custom');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert('Veuillez sélectionner une méthode de paiement');
      return;
    }
    
    if (paymentMethod === 'stripe') {
      alert('Redirection vers Stripe... (Intégration nécessite clé API)');
    } else if (paymentMethod === 'paypal') {
      alert('Redirection vers PayPal... (Intégration nécessite compte marchand)');
    } else if (paymentMethod === 'wire') {
      setShowPaymentOptions(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const totalGoal = 10000000;
  const currentAmount = 2500000;
  const progressPercentage = (currentAmount / totalGoal) * 100;

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Devenir Mécène</h1>
            <p className="text-xl text-gray-200">Créez un impact durable et mesurable</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Objectif de Collecte</h2>
              <p className="text-gray-600">10 premiers hubs LUMIÈRE</p>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Collecté : {currentAmount.toLocaleString('fr-FR')} $</span>
                <span>Objectif : {totalGoal.toLocaleString('fr-FR')} $</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6">
                <div
                  className="bg-gradient-to-r from-blue-600 to-amber-500 h-6 rounded-full flex items-center justify-end pr-4 transition-all duration-1000"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <span className="text-white text-xs font-semibold">{progressPercentage.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">2</div>
                <div className="text-gray-600">Hubs financés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600">1</div>
                <div className="text-gray-600">Hub en cours</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">7</div>
                <div className="text-gray-600">Hubs à financer</div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Options de Contribution</h2>
              
              <div className="space-y-4 mb-8">
                <div
                  onClick={() => setDonationType('full-hub')}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                    donationType === 'full-hub'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Hub Complet</h3>
                      <p className="text-gray-600 mb-2">Financez un hub entier et voyez votre nom associé à ce projet</p>
                      <div className="text-3xl font-bold text-blue-600">1 000 000 $</div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      donationType === 'full-hub' ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                    }`}>
                      {donationType === 'full-hub' && (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setDonationType('partial-hub')}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                    donationType === 'partial-hub'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Partie d'un Hub</h3>
                      <p className="text-gray-600 mb-2">Contribuez à une section spécifique (santé, éducation, énergie)</p>
                      <div className="space-y-1">
                        <div className="text-gray-700">• Équipement médical : <span className="font-semibold">200 000 $</span></div>
                        <div className="text-gray-700">• Microgrid solaire : <span className="font-semibold">150 000 $</span></div>
                        <div className="text-gray-700">• École professionnelle : <span className="font-semibold">150 000 $</span></div>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      donationType === 'partial-hub' ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                    }`}>
                      {donationType === 'partial-hub' && (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setDonationType('custom')}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                    donationType === 'custom'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Montant Personnalisé</h3>
                      <p className="text-gray-600 mb-4">Choisissez le montant de votre contribution</p>
                      {donationType === 'custom' && (
                        <input
                          type="number"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder="Entrez le montant"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                      )}
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      donationType === 'custom' ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                    }`}>
                      {donationType === 'custom' && (
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise / Organisation</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">Méthode de Paiement *</label>
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('stripe')}
                      className={`w-full px-6 py-4 border-2 rounded-lg flex items-center justify-between transition-all ${
                        paymentMethod === 'stripe' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold">S</div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Carte Bancaire (Stripe)</div>
                          <div className="text-sm text-gray-600">Paiement sécurisé par carte</div>
                        </div>
                      </div>
                      {paymentMethod === 'stripe' && (
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`w-full px-6 py-4 border-2 rounded-lg flex items-center justify-between transition-all ${
                        paymentMethod === 'paypal' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center text-white font-bold">P</div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">PayPal</div>
                          <div className="text-sm text-gray-600">Paiement rapide et sécurisé</div>
                        </div>
                      </div>
                      {paymentMethod === 'paypal' && (
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('wire')}
                      className={`w-full px-6 py-4 border-2 rounded-lg flex items-center justify-between transition-all ${
                        paymentMethod === 'wire' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center text-white font-bold">€</div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">Virement Bancaire</div>
                          <div className="text-sm text-gray-600">Pour montants importants</div>
                        </div>
                      </div>
                      {paymentMethod === 'wire' && (
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {showPaymentOptions && paymentMethod === 'wire' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Informations de Virement Bancaire</h4>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-semibold">Bénéficiaire:</span> LUMIÈRE Foundation</div>
                      <div><span className="font-semibold">IBAN:</span> FR76 3000 6000 0112 3456 7890 189</div>
                      <div><span className="font-semibold">BIC:</span> AGRIFRPP882</div>
                      <div><span className="font-semibold">Banque:</span> Crédit Agricole</div>
                      <div><span className="font-semibold">Référence:</span> Merci d'indiquer votre nom et email</div>
                    </div>
                    <p className="text-xs text-gray-600 mt-4">
                      Après réception du virement, notre équipe vous contactera pour confirmer votre contribution.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-amber-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  {paymentMethod === 'stripe' ? 'Procéder au Paiement Stripe' : paymentMethod === 'paypal' ? 'Procéder au Paiement PayPal' : paymentMethod === 'wire' ? 'Confirmer la Demande' : 'Sélectionner Méthode de Paiement'}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  En soumettant ce formulaire, notre équipe vous contactera pour finaliser les modalités de votre contribution.
                </p>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Valeur pour le Mécène</h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ce que vous recevez</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
                      title: "Naming & Reconnaissance",
                      description: "Votre nom sur le hub + plaque inaugurale"
                    },
                    {
                      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                      title: "Rapports d'Impact",
                      description: "Rapports trimestriels personnalisés"
                    },
                    {
                      icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
                      title: "Visite VIP",
                      description: "Invitation à l'inauguration + visites VIP"
                    },
                    {
                      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                      title: "Données & Études",
                      description: "Accès aux études et benchmarks"
                    },
                    {
                      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                      title: "Co-branding",
                      description: "Options co-branding événements & médias"
                    },
                    {
                      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                      title: "Board Stratégique",
                      description: "Possibilité de siéger au Board (pour hubs complets)"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d={benefit.icon} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Méthodes de Paiement</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Virement bancaire sécurisé</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Stripe (carte bancaire)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>PayPal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Chèque ou traite bancaire</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Toutes les transactions sont sécurisées et conformes aux normes bancaires internationales.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  to="/contact"
                  className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Des questions ? Contactez-nous →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
