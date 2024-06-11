import greekSalad from './Assets/Specials/greeksalad.jpg';
import bruschetta from './Assets/Specials/bruschetta.jpg';
import lemonDessert from './Assets/Specials/lemondessert.jpg';

import ethanMillerImage from './Assets/TestimonialsImage/EthanMiller.jpg'
import avaThompsonImage from './Assets/TestimonialsImage/AvaThompson.jpg'
import masonWhiteImage from './Assets/TestimonialsImage/MasonWhite.jpg'
import lucasJohnsonImage from './Assets/TestimonialsImage/LucasJohnson.jpg'

export const specials = [
  {
    id: 1,
    image: greekSalad,
    name: 'Greek Salad',
    price: '$ 12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    id: 2,
    image: bruschetta,
    name: 'Bruschetta',
    price: '$ 5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive.',
  },
  {
    id: 3,
    image: lemonDessert,
    name: 'Lemon Dessert',
    price: '$ 5.00',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
  },
];

export const testimonials = [
  {
    id: 1,
    image: ethanMillerImage,
    name: 'Ethan Miller',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
  },
  {
    id: 2,
    image: avaThompsonImage,
    name: 'Ava Thompson',
    rating: 4,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
  },
  {
    id: 3,
    image: masonWhiteImage,
    name: 'Mason White',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
  },
  {
    id: 4,
    image: lucasJohnsonImage,
    name: 'Lucas Johnson',
    rating: 3,
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
  },
];