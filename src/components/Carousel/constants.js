import Clothe1 from '../../assets/products/clothes_1.png'
import Clothe2 from '../../assets/products/clothes_2.png'
import Shoe1 from '../../assets/products/s1.png'
import Shoe2 from '../../assets/products/s2.png'
import Shoe3 from '../../assets/products/s3.png'
import Shoe4 from '../../assets/products/s4.png'
import Shoe5 from '../../assets/products/s5.png'
import Shoe6 from '../../assets/products/s6.png'
import Shoe7 from '../../assets/products/s7.png'
import Hat1 from '../../assets/products/hat_1.png'
import Hat2 from '../../assets/products/hat_2.png'
import Hat3 from '../../assets/products/hat_3.png'
import Hat4 from '../../assets/products/hat_4.png'
import Hat5 from '../../assets/products/hat_5.png'
import Suit1 from '../../assets/products/suit_1.png'
import Suit2 from '../../assets/products/suit_2.png'

const Clothes = []
const Shoes = [
  {id: 'shoe-1', image: Shoe2, name: 'Black Checkered', cost:300, promo:150, gender: 'U' },
  {id: 'shoe-2', image: Shoe3, name: 'Red Sneakers', cost:250, promo:90, gender: 'U' },
  {id: 'shoe-3', image: Shoe4, name: 'Rainbow Checkered', cost:300, gender: 'U' },
  {id: 'shoe-4', image: Shoe5, name: 'Elite Force', cost:550, promo:485, gender: 'M' },
  {id: 'shoe-5', image: Shoe6, name: 'Blue Sneakers', cost:250, promo:100, gender: 'U' },
  {id: 'shoe-6', image: Shoe7, name: 'Sunset Dress', cost:420, gender: 'W' },
]
const Hats = [
  {id: 'hat-1', image: Hat1, name: 'Fancy Party Hat', cost:350, promo:150, gender: 'U' },
  {id: 'hat-2', image: Hat2, name: 'Rainbow Puffle Toque', cost:1000, promo:750, gender: 'U' }
]
const Suits = []


export const PRODUCTS = [...Shoes, ...Hats]