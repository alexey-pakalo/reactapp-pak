import React , {Component} from 'react'
import './App.scss';
const FLOWERS =[
  {name: "rose", price: 10, image: "http://floranova.com.ua/upload/catalog/5a706aa9ec45a.jpg"},
  {name: "sunflower", price: 15, image: "http://floranova.com.ua/upload/catalog/5a706aa9ec45a.jpg"},
  {name: "tulip", price: 11, image: "http://floranova.com.ua/upload/catalog/5a706aa9ec45a.jpg"},
  {name: "lily", price: 12, image: "http://floranova.com.ua/upload/catalog/5a706aa9ec45a.jpg"}
]

class Catalog extends Component {
  render() {
    return(
      <div className="item-list">
        <h2>Каталог товаров</h2>
        {FLOWERS.map((item,index)=>
          <h3>Имя товара {item.name}</h3>
        )
        }
        <img src= "http://floranova.com.ua/upload/catalog/5a706aa9ec45a.jpg" height="50" width="50"></img>
      </div>
    );
  }
}
export default Catalog;
