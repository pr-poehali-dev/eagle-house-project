import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState('');
  
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
      <header className="bg-brown-900 text-gold-100 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🦅</div>
              <div>
                <h1 className="font-cormorant text-2xl font-bold">Орёл Хаус</h1>
                <p className="text-sm text-gold-400">Премиальный ресторан</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#hero" className="hover:text-gold-400 transition-colors">Главная</a>
              <a href="#menu" className="hover:text-gold-400 transition-colors">Меню</a>
              <a href="#booking" className="hover:text-gold-400 transition-colors">Бронирование</a>
              <a href="#contact" className="hover:text-gold-400 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 bg-gradient-to-r from-brown-900 via-brown-800 to-brown-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/img/4b145e6a-11eb-4f36-97f9-1ee2d33e6086.jpg')`
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="animate-fade-in">
            <h2 className="font-cormorant text-6xl font-bold mb-6 text-gold-100">
              Добро пожаловать в мир
              <span className="block text-gold-400">изысканной кухни</span>
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gold-200">
              Ресторан «Орёл Хаус» — это идеальное место, где традиции встречаются с современностью, 
              а каждый гость становится частью особой атмосферы уюта и гастрономического наслаждения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-brown-900 font-semibold">
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать столик
              </Button>
              <Button size="lg" variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-brown-900">
                <Icon name="Menu" size={20} className="mr-2" />
                Посмотреть меню
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-cormorant text-4xl font-bold text-brown-900 mb-4">Что мы предлагаем</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader>
                <div className="text-4xl mb-4">🍽️</div>
                <CardTitle className="font-cormorant text-xl">Авторская кухня</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Кулинарные шедевры от нашего шеф-повара, созданные с любовью и мастерством</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader>
                <div className="text-4xl mb-4">🥩</div>
                <CardTitle className="font-cormorant text-xl">Премиальные стейки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Отборное мясо высшего качества от лучших поставщиков, приготовленное до совершенства</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader>
                <div className="text-4xl mb-4">🍷</div>
                <CardTitle className="font-cormorant text-xl">Винная карта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Отборные вина со всего мира, подобранные нашим сомелье для каждого блюда</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-gradient-to-b from-gold-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-cormorant text-4xl font-bold text-brown-900 mb-4">Наше меню</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Каждое блюдо — это произведение искусства, созданное с использованием лучших ингредиентов
            </p>
          </div>
          
          <div className="grid gap-12">
            {menuCategories.map((category, index) => (
              <div key={index} className="animate-fade-in">
                <div className="flex items-center justify-center mb-8">
                  <div className="text-3xl mr-3">{category.icon}</div>
                  <h4 className="font-cormorant text-3xl font-bold text-brown-900">{category.title}</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="font-cormorant text-lg">{item.name}</CardTitle>
                          <Badge variant="secondary" className="bg-gold-400 text-brown-900">
                            {item.price}₽
                          </Badge>
                        </div>
                        <CardDescription className="text-gray-600">
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="bg-brown-800 border-gold-600">
                  <CardHeader>
                    <CardTitle className="font-cormorant text-2xl text-gold-100">Онлайн бронирование</CardTitle>
                    <CardDescription className="text-gold-200">
                      Выберите удобные дату, время и количество гостей
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date" className="text-gold-200">Дата</Label>
                        <Input
                          id="date"
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="bg-brown-700 border-gold-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="guests" className="text-gold-200">Гости</Label>
                        <Select value={guests} onValueChange={setGuests}>
                          <SelectTrigger className="bg-brown-700 border-gold-600 text-white">
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
                      <Label className="text-gold-200">Время</Label>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            size="sm"
                            variant={selectedTime === time ? "default" : "outline"}
                            onClick={() => setSelectedTime(time)}
                            className={selectedTime === time 
                              ? "bg-gold-500 text-brown-900" 
                              : "border-gold-600 text-gold-200 hover:bg-gold-600 hover:text-brown-900"
                            }
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="special" className="text-gold-200">Особые пожелания</Label>
                      <Textarea
                        id="special"
                        placeholder="Укажите особые пожелания или диетические ограничения..."
                        className="bg-brown-700 border-gold-600 text-white"
                      />
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full bg-gold-500 hover:bg-gold-600 text-brown-900 font-semibold"
                      disabled={!selectedDate || !selectedTime || !guests}
                    >
                      <Icon name="Check" size={20} className="mr-2" />
                      Подтвердить бронирование
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div 
                className="rounded-lg h-96 bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: `url('/img/678e4c24-056b-465f-9c20-3d1270cf6d94.jpg')`
                }}
              >
                <div className="absolute inset-0 bg-brown-900 bg-opacity-40 flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-cormorant text-3xl font-bold text-gold-100 mb-2">
                      Премиальные блюда
                    </h4>
                    <p className="text-gold-200">
                      Авторская подача каждого блюда
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-cormorant text-4xl font-bold text-brown-900 mb-4">Контакты</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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