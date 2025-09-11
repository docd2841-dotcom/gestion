import React from 'react';
import { MapPin, CreditCard, Globe, Building, ArrowRight, Users, Award, Star } from 'lucide-react';
import { Department } from '../types';
import AnimatedBackground from './AnimatedBackground';
import LanguageSwitcher from './LanguageSwitcher';

interface DepartmentSelectorProps {
  departments: Department[];
  onSelect: (department: Department) => void;
  t: (key: string) => string;
  language: string;
}

const iconMap = {
  MapPin,
  CreditCard,
  Building
};

const DepartmentSelector: React.FC<DepartmentSelectorProps> = ({ 
  departments, 
  onSelect, 
  t,
  language 
}) => {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-6">
      <AnimatedBackground />
      
      {/* Language Switcher - Top Right */}
      
      {/* Animated Background Elements */}
      
      <div className="relative z-10 max-w-7xl w-full">
        {/* Header with Company Logo */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <img
                src="/logo.png"
                alt="GeoCasa Group Logo"
                className="w-24 h-24"
              />
              <div className="absolute inset-0 rounded-3xl border-2 border-blue-400 animate-ping opacity-30"></div>
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              GeoCasa Group
            </span>
          </h1>
          <p className="text-blue-100 text-2xl mb-4 font-light">
            {language === 'en' ? 'Select Department' : 'Sélectionner le département'}
          </p>
          <p className="text-blue-200 text-xl">
            {language === 'en' ? 'Choose your work department' : 'Choisissez votre département de travail'}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Department Cards */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {departments.map((department, index) => {
              const IconComponent = iconMap[department.icon as keyof typeof iconMap];
              
              return (
                <div
                  key={department.id}
                  onClick={() => onSelect(department)}
                  className="group cursor-pointer transform transition-all duration-500 hover:scale-105 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative">
                    {/* Background Shape */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-[3rem] transform rotate-1 scale-105"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 to-orange-500/20 backdrop-blur-xl rounded-[3rem] transform -rotate-1"></div>
                    
                    <div className="relative bg-white/15 backdrop-blur-2xl rounded-[3rem] p-8 border border-white/30 shadow-2xl hover:bg-white/25 transition-all duration-300">
                      {/* Department Image */}
                      <div className="mb-6">
                        <img
                          src={department.image}
                          alt={language === 'en' ? department.nameEn : department.nameFr}
                          className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="flex flex-col items-center text-center space-y-4">
                        {/* Department Icon */}
                        <div className={`w-16 h-16 ${department.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Department Name */}
                        <div>
                          <h3 className="text-2xl font-bold text-white leading-tight mb-3">
                            {language === 'en' ? department.nameEn : department.nameFr}
                          </h3>
                          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full mx-auto mb-4"></div>
                          <p className="text-blue-100 text-sm leading-relaxed">
                            {language === 'en' ? department.descriptionEn : department.description}
                          </p>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 w-full pt-4 border-t border-white/20">
                          <div className="text-center">
                            <Users className="w-5 h-5 text-blue-300 mx-auto mb-1" />
                            <div className="text-lg font-bold text-white">15+</div>
                            <div className="text-xs text-blue-200">
                              {language === 'en' ? 'Experts' : 'Experts'}
                            </div>
                          </div>
                          <div className="text-center">
                            <Award className="w-5 h-5 text-orange-300 mx-auto mb-1" />
                            <div className="text-lg font-bold text-white">5+</div>
                            <div className="text-xs text-blue-200">
                              {language === 'en' ? 'Years' : 'Années'}
                            </div>
                          </div>
                          <div className="text-center">
                            <Star className="w-5 h-5 text-yellow-300 mx-auto mb-1" />
                            <div className="text-lg font-bold text-white">98%</div>
                            <div className="text-xs text-blue-200">
                              {language === 'en' ? 'Success' : 'Succès'}
                            </div>
                          </div>
                        </div>
                        
                        {/* Access Button */}
                        <div className="flex items-center justify-center space-x-2 text-blue-200 group-hover:text-white transition-colors duration-300 pt-4">
                          <span className="text-sm font-semibold">
                            {language === 'en' ? 'Access Department' : 'Accéder au département'}
                          </span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Information */}
        <div className="text-center text-blue-100 text-sm space-y-3">
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">
                {language === 'en' ? 'Online Services Available' : 'Services en ligne disponibles'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="font-medium">
                {language === 'en' ? '24/7 Support' : 'Support 24/7'}
              </span>
            </div>
          </div>
          <p className="font-medium">
            {language === 'en' ? 'Yaoundé, Cameroon' : 'Yaoundé, Cameroun'}
          </p>
          <p>
            {language === 'en' ? 'Business Hours: 08:00 - 18:00' : 'Heures d\'ouverture: 08:00 - 18:00'}
          </p>
          <p>+237 6XX XXX XXX • contact@geocasagroup.com</p>
        </div>
      </div>
    </div>
  );
};

export default DepartmentSelector;
                          {language === 'en' ? department.nameEn : department.nameFr}
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full mx-auto"></div>
                      </div>
                      
                      {/* Access Button */}
                      <div className="flex items-center justify-center space-x-2 text-blue-200 group-hover:text-white transition-colors duration-300">
                        <span className="text-sm font-semibold">
                          {language === 'en' ? 'Access Department' : 'Accéder au département'}
                        </span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Information */}
        <div className="text-center mt-12 text-blue-100 text-sm space-y-2">
          <p className="font-medium">
            {language === 'en' ? 'Yaoundé, Cameroon' : 'Yaoundé, Cameroun'}
          </p>
          <p>
            {language === 'en' ? 'Business Hours: 08:00 - 18:00' : 'Heures d\'ouverture: 08:00 - 18:00'}
          </p>
          <p>+237 6XX XXX XXX • contact@gocasagroup.com</p>
          <p className="text-xs">
            {language === 'en' ? '24/7 Customer Support' : 'Support Client 24/7'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DepartmentSelector;