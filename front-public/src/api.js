  const categories = [
    { id: 1, title: 'Фелони' },
    { id: 2, title: 'Подрясники' },
    { id: 3, title: 'Рясы' },
    { id: 4, title: 'Епитрахили' },
    { id: 5, title: 'Поручи' },
    { id: 6, title: 'Литургические комплекты' },
    { id: 7, title: 'Воздухи' },
    { id: 8, title: 'Стихари' }
  ];
const products = [
  { id: 1, title: 'Фелонь праздничная', description: 'Праздничное облачение с золотым шитьём', price: 45000, image: '/images/фелонь1.jpg', categoryId: 1 },
  { id: 2, title: 'Фелонь будничная', description: 'Будничное облачение из качественной парчи', price: 35000, image: '/images/фелонь2.jpg', categoryId: 1 },
  { id: 3, title: 'Подрясник летний', description: 'Лёгкий подрясник из льна для летнего периода', price: 12000, image: '/images/подрясник1.jpg', categoryId: 2 },
  { id: 4, title: 'Подрясник зимний', description: 'Утеплённый подрясник на шерстяной подкладке', price: 15000, image: '/images/подрясник2.jpg', categoryId: 2 },
  { id: 5, title: 'Ряса чёрная', description: 'Классическая чёрная ряса из шерсти', price: 18000, image: '/images/ряса1.jpg', categoryId: 3 },
  { id: 6, title: 'Ряса синяя', description: 'Синяя ряса праздничная с серебряным шитьём', price: 19000, image: '/images/ряса2.jpg', categoryId: 3 },
  { id: 7, title: 'Епитрахиль шитая', description: 'Ручная вышивка золотыми нитями', price: 25000, image: '/images/епитрахиль1.jpg', categoryId: 4 },
  { id: 8, title: 'Епитрахиль золотая', description: 'Полностью шитая золотом епитрахиль', price: 35000, image: '/images/епитрахиль2.jpg', categoryId: 4 },
  { id: 9, title: 'Поручи с крестами', description: 'Поручи с вышитыми крестами на красном бархате', price: 8000, image: '/images/поручи1.jpg', categoryId: 5 },
  { id: 10, title: 'Поручи с архангелами', description: 'Поручи с ликами архангелов', price: 10000, image: '/images/поручи2.jpg', categoryId: 5 },
  { id: 11, title: 'Комплект литургический', description: 'Полный комплект для литургии: воздухи, покровцы, нахионы', price: 120000, image: '/images/комплект1.jpg', categoryId: 6 },
  { id: 12, title: 'Воздух малый', description: 'Малый воздух с вышитым крестом', price: 6000, image: '/images/воздух1.jpg', categoryId: 7 }
];

export const fetchProducts = async () => {
  return products;
}
export const fetchCategories = async () => {
  return categories;
}