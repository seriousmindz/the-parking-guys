import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Car, 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp,
  Building,
  Plane,
  Hospital,
  GraduationCap,
  Trophy,
  ChevronRight,
  Star,
  CheckCircle
} from 'lucide-react'
import './App.css'
import parkingData from './assets/parking-data.json'
import nashvilleLogo from './assets/valet-nashville-logo.png'
import atlantaLogo from './assets/valet-atl-logo.png'

function App() {
  const [activeCity, setActiveCity] = useState('nashville')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const cities = {
    nashville: {
      ...parkingData.site.cities.nashville,
      logo: nashvilleLogo
    },
    atlanta: {
      ...parkingData.site.cities.atlanta,
      logo: atlantaLogo
    }
  }

  const getServiceIcon = (service) => {
    const iconMap = {
      'Hotel Valet': Building,
      'Event Parking': Trophy,
      'Corporate Services': Users,
      'Restaurant Valet': Car,
      'Airport Parking': Plane,
      'Downtown Valet': Building,
      'Stadium Events': Trophy,
      'Medical Center Parking': Hospital
    }
    return iconMap[service] || Car
  }

  const getSolutionIcon = (title) => {
    const iconMap = {
      'Hospitality': Building,
      'Healthcare': Hospital,
      'Municipal & University': GraduationCap,
      'Airports & Transportation': Plane,
      'Stadiums & Venues': Trophy
    }
    return iconMap[title] || Car
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Car className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-800">{parkingData.site.brand.logo_text}</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              {parkingData.navigation.primary.slice(0, 6).map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700">
                Book a Call
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-20 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
            {parkingData.pages[0].content.hero.eyebrow}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            {parkingData.pages[0].content.hero.headline}
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {parkingData.pages[0].content.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              {parkingData.pages[0].content.hero.primary_cta.label}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              {parkingData.pages[0].content.hero.secondary_cta.label}
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {parkingData.pages[0].content.hero.trust_badges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 text-slate-600">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Selection */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Locations</h2>
            <p className="text-xl text-slate-600">Professional valet services across major cities</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-slate-100 p-1 rounded-lg">
              {Object.keys(cities).map((cityKey) => (
                <Button
                  key={cityKey}
                  variant={activeCity === cityKey ? "default" : "ghost"}
                  onClick={() => setActiveCity(cityKey)}
                  className={`mx-1 ${activeCity === cityKey ? 'bg-blue-600 text-white' : 'text-slate-600'}`}
                >
                  {cities[cityKey].name}
                </Button>
              ))}
            </div>
          </div>

          {/* Active City Display */}
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-r from-blue-600 to-blue-700">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 text-white">
                    <div className="flex items-center space-x-4 mb-6">
                      <MapPin className="h-8 w-8" />
                      <h3 className="text-3xl font-bold">{cities[activeCity].name}</h3>
                    </div>
                    <p className="text-blue-100 text-lg mb-6">{cities[activeCity].description}</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-blue-200" />
                        <span className="text-blue-100">{cities[activeCity].contact.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-200" />
                        <span className="text-blue-100">{cities[activeCity].contact.email}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {cities[activeCity].services.map((service, index) => {
                        const IconComponent = getServiceIcon(service)
                        return (
                          <div key={index} className="flex items-center space-x-2 bg-white/10 rounded-lg p-3">
                            <IconComponent className="h-5 w-5 text-blue-200" />
                            <span className="text-sm font-medium text-blue-100">{service}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  
                  <div className="bg-white p-8 flex items-center justify-center">
                    <img 
                      src={cities[activeCity].logo} 
                      alt={`${cities[activeCity].name} Logo`}
                      className="max-w-full h-auto max-h-64 object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Solutions</h2>
            <p className="text-xl text-slate-600">Tailored parking solutions for every industry</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parkingData.pages[0].content.vertical_cards.map((card, index) => {
              const IconComponent = getSolutionIcon(card.title)
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                        <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white" />
                      </div>
                      <CardTitle className="text-xl">{card.title}</CardTitle>
                    </div>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {card.copy}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* The PG Way */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              {parkingData.pages[0].content.pg_way.headline}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {parkingData.pages[0].content.pg_way.pillars.map((pillar, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-to-b from-slate-50 to-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                    <Star className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {pillar.text}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Preview */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              {parkingData.pages[0].content.technology_preview.headline}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parkingData.pages[0].content.technology_preview.features.map((feature, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-400">{feature.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {feature.text}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
              {parkingData.pages[0].content.technology_preview.cta.label}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to modernize your parking program?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Request a tailored plan and 120‑day pilot structure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Talk to an Expert
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Download RFP Kit
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Car className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold">{parkingData.site.brand.logo_text}</h3>
              </div>
              <p className="text-slate-400 mb-4">{parkingData.site.brand.tagline}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Hospitality</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Municipal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Airports</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (XXX) XXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>support@theparkingguys.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 The Parking Guys LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
