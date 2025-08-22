import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const menuCategories = [
    {
      title: 'Бургеры',
      icon: '🍔',
      items: [
        { name: 'Орёл Классик', description: 'Говяжья котлета, салат, томат, сыр чеддер', price: 890 },
        { name: 'Премиум Трюфель', description: 'Мраморная говядина, трюфельный соус, руккола', price: 1290 },
        { name: 'Барбекю Делюкс', description: 'Двойная котлета, соус барбекю, лук карамель', price: 1090 }
      ]
    },
    {
      title: 'Стейки',
      icon: '🥩',
      items: [
        { name: 'Рибай', description: 'Мраморная говядина, 300г', price: 2890 },
        { name: 'Филе Миньон', description: 'Нежнейшая вырезка, 250г', price: 3290 },
        { name: 'Стриплойн', description: 'Сочный стейк с жирком, 280г', price: 2590 }
      ]
    },
    {
      title: 'Закуски',
      icon: '🥗',
      items: [
        { name: 'Устрицы', description: 'Свежие устрицы с мигонеттой, 6 шт', price: 1890 },
        { name: 'Тартар из тунца', description: 'Свежий тунец, авокадо, кунжут', price: 1290 },
        { name: 'Фуа-гра', description: 'Деликатес с грушевым чатни', price: 2490 }
      ]
    }
  ];

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gold-50 to-gold-100">
      {/* Header */}
      <header className="bg-brown-900 text-gold-100 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="text-2xl sm:text-3xl">🦅</div>
              <div>
                <h1 className="font-cormorant text-xl sm:text-2xl font-bold">Орёл Хаус</h1>
                <p className="text-xs sm:text-sm text-gold-400 hidden sm:block">Премиальный ресторан</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              <a href="#hero" className="hover:text-gold-400 transition-colors text-sm font-medium">Главная</a>
              <a href="#menu" className="hover:text-gold-400 transition-colors text-sm font-medium">Меню</a>
              <a href="#booking" className="hover:text-gold-400 transition-colors text-sm font-medium">Бронирование</a>
              <a href="#contact" className="hover:text-gold-400 transition-colors text-sm font-medium">Контакты</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm" className="text-gold-100 hover:text-gold-400">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-brown-900 border-gold-600 w-64">
                <div className="flex items-center space-x-2 mb-8 mt-4">
                  <div className="text-2xl">🦅</div>
                  <div>
                    <h1 className="font-cormorant text-xl font-bold text-gold-100">Орёл Хаус</h1>
                    <p className="text-xs text-gold-400">Премиальный ресторан</p>
                  </div>
                </div>
                <nav className="flex flex-col space-y-4">
                  <a 
                    href="#hero" 
                    className="text-gold-100 hover:text-gold-400 transition-colors font-medium py-2 border-b border-gold-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Главная
                  </a>
                  <a 
                    href="#menu" 
                    className="text-gold-100 hover:text-gold-400 transition-colors font-medium py-2 border-b border-gold-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Меню
                  </a>
                  <a 
                    href="#booking" 
                    className="text-gold-100 hover:text-gold-400 transition-colors font-medium py-2 border-b border-gold-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Бронирование
                  </a>
                  <a 
                    href="#contact" 
                    className="text-gold-100 hover:text-gold-400 transition-colors font-medium py-2 border-b border-gold-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Контакты
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-brown-900 via-brown-800 to-brown-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/img/4b145e6a-11eb-4f36-97f9-1ee2d33e6086.jpg')`
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="animate-fade-in">
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gold-100">
              Добро пожаловать в мир
              <span className="block text-gold-400">изысканной кухни</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-gold-200 px-4">
              Ресторан «Орёл Хаус» — это идеальное место, где традиции встречаются с современностью, 
              а каждый гость становится частью особой атмосферы уюта и гастрономического наслаждения.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-brown-900 font-semibold w-full sm:w-auto">
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать столик
              </Button>
              <Button size="lg" variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-brown-900 w-full sm:w-auto">
                <Icon name="Menu" size={20} className="mr-2" />
                Посмотреть меню
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-900 mb-4">Что мы предлагаем</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader className="pb-4">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🍽️</div>
                <CardTitle className="font-cormorant text-lg sm:text-xl">Авторская кухня</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Кулинарные шедевры от нашего шеф-повара, созданные с любовью и мастерством</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader className="pb-4">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🥩</div>
                <CardTitle className="font-cormorant text-lg sm:text-xl">Премиальные стейки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Отборное мясо высшего качества от лучших поставщиков, приготовленное до совершенства</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up sm:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🍷</div>
                <CardTitle className="font-cormorant text-lg sm:text-xl">Винная карта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Отборные вина со всего мира, подобранные нашим сомелье для каждого блюда</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-12 sm:py-16 bg-gradient-to-b from-gold-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-900 mb-4">Наше меню</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Каждое блюдо — это произведение искусства, созданное с использованием лучших ингредиентов
            </p>
          </div>
          
          <div className="space-y-8 sm:space-y-12">
            {menuCategories.map((category, index) => (
              <div key={index} className="animate-fade-in">
                <div className="flex items-center justify-center mb-6 sm:mb-8">
                  <div className="text-2xl sm:text-3xl mr-2 sm:mr-3">{category.icon}</div>
                  <h4 className="font-cormorant text-xl sm:text-2xl lg:text-3xl font-bold text-brown-900">{category.title}</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3 sm:pb-4">
                        <div className="flex justify-between items-start gap-3">
                          <CardTitle className="font-cormorant text-base sm:text-lg leading-tight">{item.name}</CardTitle>
                          <Badge variant="secondary" className="bg-gold-400 text-brown-900 text-xs sm:text-sm font-semibold shrink-0">
                            {item.price}₽
                          </Badge>
                        </div>
                        <CardDescription className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-brown-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="font-cormorant text-4xl font-bold text-gold-100 mb-4">Бронирование столика</h3>
              <p className="text-gold-200">
                Забронируйте столик и погрузитесь в атмосферу изысканного отдыха
              </p>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="order-2 xl:order-1">
                <Card className="bg-brown-800 border-gold-600">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-cormorant text-xl sm:text-2xl text-gold-100">Онлайн бронирование</CardTitle>
                    <CardDescription className="text-gold-200 text-sm sm:text-base">
                      Выберите удобные дату, время и количество гостей
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date" className="text-gold-200 text-sm font-medium">Дата</Label>
                        <Input
                          id="date"
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="bg-brown-700 border-gold-600 text-white mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="guests" className="text-gold-200 text-sm font-medium">Гости</Label>
                        <Select value={guests} onValueChange={setGuests}>
                          <SelectTrigger className="bg-brown-700 border-gold-600 text-white mt-1">
                            <SelectValue placeholder="Выберите" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? 'гость' : num < 5 ? 'гостя' : 'гостей'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-gold-200 text-sm font-medium">Время</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            size="sm"
                            variant={selectedTime === time ? "default" : "outline"}
                            onClick={() => setSelectedTime(time)}
                            className={`text-xs sm:text-sm ${
                              selectedTime === time 
                                ? "bg-gold-500 text-brown-900" 
                                : "border-gold-600 text-gold-200 hover:bg-gold-600 hover:text-brown-900"
                            }`}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="special" className="text-gold-200 text-sm font-medium">Особые пожелания</Label>
                      <Textarea
                        id="special"
                        placeholder="Укажите особые пожелания или диетические ограничения..."
                        className="bg-brown-700 border-gold-600 text-white mt-1 text-sm"
                        rows={3}
                      />
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full bg-gold-500 hover:bg-gold-600 text-brown-900 font-semibold text-sm sm:text-base"
                      disabled={!selectedDate || !selectedTime || !guests}
                    >
                      <Icon name="Check" size={18} className="mr-2" />
                      Подтвердить бронирование
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="order-1 xl:order-2">
                <div 
                  className="rounded-lg h-64 sm:h-80 lg:h-96 bg-cover bg-center relative overflow-hidden"
                  style={{
                    backgroundImage: `url('/img/678e4c24-056b-465f-9c20-3d1270cf6d94.jpg')`
                  }}
                >
                  <div className="absolute inset-0 bg-brown-900 bg-opacity-40 flex items-center justify-center p-4">
                    <div className="text-center">
                      <h4 className="font-cormorant text-2xl sm:text-3xl font-bold text-gold-100 mb-2">
                        Премиальные блюда
                      </h4>
                      <p className="text-gold-200 text-sm sm:text-base">
                        Авторская подача каждого блюда
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold text-brown-900 mb-4">Контакты</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Icon name="MapPin" size={40} className="mx-auto text-gold-500 mb-4" />
                <CardTitle className="font-cormorant">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  г. Сочи<br />
                  Аллея Челтенхема 21б
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Icon name="Phone" size={40} className="mx-auto text-gold-500 mb-4" />
                <CardTitle className="font-cormorant">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  +7 928 245-08-68
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Ежедневно с 12:00 до 23:00
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Icon name="Clock" size={40} className="mx-auto text-gold-500 mb-4" />
                <CardTitle className="font-cormorant">Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Пн-Чт: 12:00 - 23:00<br />
                  Пт-Вс: 12:00 - 01:00
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-900 text-gold-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="text-2xl mr-3">🦅</div>
            <h4 className="font-cormorant text-xl font-bold">Орёл Хаус</h4>
          </div>
          <p className="text-gold-400 mb-4">
            Премиальный ресторан в самом сердце Сочи
          </p>
          <p className="text-sm text-gold-500">
            © 2024 Орёл Хаус. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}