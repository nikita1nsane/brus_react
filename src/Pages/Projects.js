import Cards from "../components/Cards";
import Free from "../components/Free";
import RangeSlider from "../components/RangeSlider";
import { useState } from 'react'

const doma = [
  {
      id: '1',
      title: 'Проект дома ДБ023',
      floor: '1',
      sizes: '8x7 м',
      square: '55.4 кв.м',
      balkon: 'нет',
      terrace: 'нет',
      krylco: 'есть',
      erker: 'нет',
      sanuzel: '1',
      bedroom: '2',
      roof: 'прямая',
      kukushka: 'нет',
      twoDoor: 'нет',
      garage: 'нет',
      topochnaya: 'есть',
      previewImg1: require('../images/Projects/db023/db023_01.webp'),
      previewImg2: require('../images/Projects/db023/db023_02.webp'),
      planImg1: require('../images/Projects/db023/db023_11.webp'),
      previewImg31: require('../images/Projects/db023/db023_31.webp'),
      previewImg32: require('../images/Projects/db023/db023_32.webp'),
      previewImg33: require('../images/Projects/db023/db023_33.webp'),
      previewImg34: require('../images/Projects/db023/db023_34.webp'),
  },
  {
      id: '2',
      title: 'Проект дома ДБ024',
      floor: '1+М',
      sizes: '8x7 м',
      square: '84.2 кв.м',
      balkon: 'нет',
      terrace: 'есть',
      krylco: 'нет',
      erker: 'нет',
      sanuzel: '1',
      bedroom: '4',
      roof: 'прямая',
      kukushka: 'нет',
      twoDoor: 'нет',
      garage: 'нет',
      topochnaya: 'нет',
      previewImg1: require('../images/Projects/db024/db024_01.webp'),
      previewImg2: require('../images/Projects/db024/db024_02.webp'),
      planImg1: require('../images/Projects/db024/db024_11.webp'),
      planImg2: require('../images/Projects/db024/db024_12.webp'),
      previewImg31: require('../images/Projects/db024/db024_31.webp'),
      previewImg32: require('../images/Projects/db024/db024_32.webp'),
      previewImg33: require('../images/Projects/db024/db024_33.webp'),
      previewImg34: require('../images/Projects/db024/db024_34.webp'),
  },
  {
      id: '3',
      title: 'Проект дома ДБ037',
      floor: '1+М',
      sizes: '9x6 м',
      square: '86.5 кв.м',
      balkon: 'нет',
      terrace: 'есть',
      krylco: 'нет',
      erker: 'нет',
      sanuzel: '1',
      bedroom: '4',
      roof: 'прямая',
      kukushka: 'нет',
      twoDoor: 'нет',
      garage: 'нет',
      topochnaya: 'нет',
      previewImg1: require('../images/Projects/db037/db037_01.webp'),
      previewImg2: require('../images/Projects/db037/db037_02.webp'),
      planImg1: require('../images/Projects/db037/db037_11.webp'),
      planImg2: require('../images/Projects/db037/db037_12.webp'),
      previewImg31: require('../images/Projects/db037/db037_31.webp'),
      previewImg32: require('../images/Projects/db037/db037_32.webp'),
      previewImg33: require('../images/Projects/db037/db037_33.webp'),
      previewImg34: require('../images/Projects/db037/db037_34.webp'),
  },
  {
      id: '4',
      title: 'Проект дома ДБ058',
      floor: '1+М',
      sizes: '8.5x7 м',
      square: '92.7 кв.м',
      balkon: 'нет',
      terrace: 'есть',
      krylco: 'нет',
      erker: 'нет',
      sanuzel: '1',
      bedroom: '4',
      roof: 'прямая',
      kukushka: 'нет',
      twoDoor: 'нет',
      garage: 'нет',
      topochnaya: 'нет',
      previewImg1: require('../images/Projects/db058/db058_01.webp'),
      previewImg2: require('../images/Projects/db058/db058_02.webp'),
      planImg1: require('../images/Projects/db058/db058_11.webp'),
      planImg2: require('../images/Projects/db058/db058_12.webp'),
      previewImg31: require('../images/Projects/db058/db058_31.webp'),
      previewImg32: require('../images/Projects/db058/db058_32.webp'),
      previewImg33: require('../images/Projects/db058/db058_33.webp'),
      previewImg34: require('../images/Projects/db058/db058_34.webp'),
  },
  {
      id: '5',
      title: 'Проект дома ДБ066',
      floor: '1.5',
      sizes: '8x8 м',
      square: '112 кв.м',
      balkon: 'есть',
      terrace: 'есть',
      krylco: 'нет',
      erker: 'нет',
      sanuzel: '2',
      bedroom: '4',
      roof: 'прямая',
      kukushka: 'нет',
      twoDoor: 'нет',
      garage: 'нет',
      topochnaya: 'нет',
      previewImg1: require('../images/Projects/db066/db066_01.webp'),
      previewImg2: require('../images/Projects/db066/db066_02.webp'),
      planImg1: require('../images/Projects/db066/db066_11.webp'),
      planImg2: require('../images/Projects/db066/db066_12.webp'),
      previewImg31: require('../images/Projects/db066/db066_31.webp'),
      previewImg32: require('../images/Projects/db066/db066_32.webp'),
      previewImg33: require('../images/Projects/db066/db066_33.webp'),
      previewImg34: require('../images/Projects/db066/db066_34.webp'),
  },
  {
      id: '6',
      title: 'Проект дома ДБ073',
      floor: '1.5',
      sizes: '7x6 м',
      square: '70.3 кв.м',
      balkon: 'есть',
      terrace: 'есть',
      krylco: 'нет',
      erker: 'нет',
      sanuzel: '1',
      bedroom: '3',
      roof: 'прямая',
      kukushka: 'нет',
      twoDoor: 'нет',
      garage: 'нет',
      topochnaya: 'нет',
      previewImg1: require('../images/Projects/db073/db073_01.webp'),
      previewImg2: require('../images/Projects/db073/db073_02.webp'),
      planImg1: require('../images/Projects/db073/db073_11.webp'),
      planImg2: require('../images/Projects/db073/db073_12.webp'),
      previewImg31: require('../images/Projects/db073/db073_31.webp'),
      previewImg32: require('../images/Projects/db073/db073_32.webp'),
      previewImg33: require('../images/Projects/db073/db073_33.webp'),
      previewImg34: require('../images/Projects/db073/db073_34.webp'),
  },
  {
      id: '7',
      title: 'Проект дома ДБ127',
      floor: '2',
      sizes: '',
      square: '71.9 кв.м',
      balkon: 'нет',
      terrace: 'нет',
      krylco: 'есть',
      erker: 'нет',
      sanuzel: '1',
      bedroom: '2',
      roof: 'прямая',
      kukushka: 'нет',
      twoDoor: 'нет',
      garage: '',
      topochnaya: 'нет',
      previewImg1: require('../images/Projects/db127/db127_01.webp'),
      previewImg2: require('../images/Projects/db127/db127_02.webp'),
      planImg1: require('../images/Projects/db127/db127_11.webp'),
      planImg2: require('../images/Projects/db127/db127_12.webp'),
      previewImg31: require('../images/Projects/db127/db127_31.webp'),
      previewImg32: require('../images/Projects/db127/db127_32.webp'),
      previewImg33: require('../images/Projects/db127/db127_33.webp'),
      previewImg34: require('../images/Projects/db127/db127_34.webp'),
  },
  {
      id: '8',
      title: 'Проект дома ДБ128',
      floor: '1',
      sizes: '',
      square: '69 кв.м',
      balkon: 'нет',
      terrace: 'есть',
      krylco: 'нет',
      erker: 'нет',
      sanuzel: '1',
      bedroom: '2',
      roof: 'вальмовая',
      kukushka: 'нет',
      twoDoor: 'есть',
      garage: '',
      topochnaya: 'нет',
      previewImg1: require('../images/Projects/db128/db128_01.webp'),
      previewImg2: require('../images/Projects/db128/db128_02.webp'),
      planImg1: require('../images/Projects/db128/db128_11.webp'),
      previewImg31: require('../images/Projects/db128/db128_31.webp'),
      previewImg32: require('../images/Projects/db128/db128_32.webp'),
      previewImg33: require('../images/Projects/db128/db128_33.webp'),
      previewImg34: require('../images/Projects/db128/db128_34.webp'),
  },
  {
      id: '9',
      title: 'Проект дома ДБ129',
      floor: '1+М',
      sizes: '',
      square: '63.6 кв.м',
      balkon: 'нет',
      terrace: 'нет',
      krylco: 'есть',
      erker: 'нет',
      sanuzel: '1',
      bedroom: '2',
      roof: 'прямая',
      kukushka: 'есть',
      twoDoor: 'нет',
      garage: '',
      topochnaya: 'нет',
      previewImg1: require('../images/Projects/db129/db129_01.webp'),
      previewImg2: require('../images/Projects/db129/db129_02.webp'),
      planImg1: require('../images/Projects/db129/db129_11.webp'),
      planImg2: require('../images/Projects/db129/db129_12.webp'),
      previewImg31: require('../images/Projects/db129/db129_31.webp'),
      previewImg32: require('../images/Projects/db129/db129_32.webp'),
      previewImg33: require('../images/Projects/db129/db129_33.webp'),
      previewImg34: require('../images/Projects/db129/db129_34.webp'),
  },
  {
      id: '10',
      title: 'Проект дома ДБ135',
      floor: '1+М',
      sizes: '8x6 м',
      square: '69,3 кв.м',
      balkon: 'есть',
      terrace: 'есть',
      krylco: 'нет',
      erker: 'нет',
      sanuzel: '0',
      bedroom: '2',
      roof: 'прямая',
      kukushka: 'нет',
      twoDoor: 'нет',
      garage: '',
      topochnaya: 'нет',
      previewImg1: require('../images/Projects/db135/db135_01.webp'),
      previewImg2: require('../images/Projects/db135/db135_02.webp'),
      planImg1: require('../images/Projects/db135/db135_11.webp'),
      planImg2: require('../images/Projects/db135/db135_12.webp'),
      previewImg31: require('../images/Projects/db135/db135_31.webp'),
      previewImg32: require('../images/Projects/db135/db135_32.webp'),
      previewImg33: require('../images/Projects/db135/db135_33.webp'),
      previewImg34: require('../images/Projects/db135/db135_34.webp'),
  },
  {
      id: '11',
      title: 'Проект дома ДБ174',
      floor: '1,5',
      sizes: '8x8 м',
      square: '96,2 кв.м',
      balkon: 'нет',
      terrace: 'есть',
      krylco: 'нет',
      erker: 'нет',
      sanuzel: '1',
      bedroom: '4',
      roof: 'прямая',
      kukushka: 'нет',
      twoDoor: 'нет',
      garage: '',
      topochnaya: 'нет',
      previewImg1: require('../images/Projects/db174/db174_01.webp'),
      previewImg2: require('../images/Projects/db174/db174_02.webp'),
      planImg1: require('../images/Projects/db174/db174_11.webp'),
      planImg2: require('../images/Projects/db174/db174_12.webp'),
      previewImg31: require('../images/Projects/db174/db174_31.webp'),
      previewImg32: require('../images/Projects/db174/db174_32.webp'),
      previewImg33: require('../images/Projects/db174/db174_33.webp'),
      previewImg34: require('../images/Projects/db174/db174_34.webp'),
  },
  {
      id: '12',
      title: 'Проект дома ДБ181',
      floor: '1,5',
      sizes: '9x7 м',
      square: '107,1 кв.м',
      balkon: 'есть',
      terrace: 'есть',
      krylco: 'нет',
      erker: 'нет',
      sanuzel: '2',
      bedroom: '4',
      roof: 'прямая',
      kukushka: 'нет',
      twoDoor: 'есть',
      garage: '',
      topochnaya: 'нет',
      previewImg1: require('../images/Projects/db181/db181_01.webp'),
      previewImg2: require('../images/Projects/db181/db181_02.webp'),
      planImg1: require('../images/Projects/db181/db181_11.webp'),
      planImg2: require('../images/Projects/db181/db181_12.webp'),
      previewImg31: require('../images/Projects/db181/db181_31.webp'),
      previewImg32: require('../images/Projects/db181/db181_32.webp'),
      previewImg33: require('../images/Projects/db181/db181_33.webp'),
      previewImg34: require('../images/Projects/db181/db181_34.webp'),
  },
  {
      id: '13',
      title: 'Проект дома ДБ188',
      floor: '1,5',
      sizes: '10x8 м',
      square: '141,5 кв.м',
      balkon: 'есть',
      terrace: 'есть',
      krylco: 'есть',
      erker: 'нет',
      sanuzel: '1',
      bedroom: '4',
      roof: 'прямая',
      kukushka: 'нет',
      twoDoor: 'нет',
      garage: '',
      topochnaya: 'нет',
      previewImg1: require('../images/Projects/db188/db188_01.webp'),
      previewImg2: require('../images/Projects/db188/db188_02.webp'),
      planImg1: require('../images/Projects/db188/db188_11.webp'),
      planImg2: require('../images/Projects/db188/db188_12.webp'),
      previewImg31: require('../images/Projects/db188/db188_31.webp'),
      previewImg32: require('../images/Projects/db188/db188_32.webp'),
      previewImg33: require('../images/Projects/db188/db188_33.webp'),
      previewImg34: require('../images/Projects/db188/db188_34.webp'),
  },
  {
      id: '14',
      title: 'Проект дома ДБ212',
      floor: '1',
      sizes: '15x8 м',
      square: '115,9 кв.м',
      balkon: 'нет',
      terrace: 'есть',
      krylco: 'есть',
      erker: 'нет',
      sanuzel: '1',
      bedroom: '3',
      roof: 'прямая',
      kukushka: 'нет',
      twoDoor: 'нет',
      garage: '',
      topochnaya: 'нет',
      previewImg1: require('../images/Projects/db212/db212_01.webp'),
      previewImg2: require('../images/Projects/db212/db212_02.webp'),
      planImg1: require('../images/Projects/db212/db212_11.webp'),
      previewImg31: require('../images/Projects/db212/db212_31.webp'),
      previewImg32: require('../images/Projects/db212/db212_32.webp'),
      previewImg33: require('../images/Projects/db212/db212_33.webp'),
      previewImg34: require('../images/Projects/db212/db212_34.webp'),
  },
]


function Projects() {

    const [filtered, setFiltered] = useState(doma)

    function todoFilter(status) {
      if (status === 'all') {
        setFiltered(doma)
      } else if (status ==='8x7 м') {
        let newTodo = [...doma].filter(item => item.sizes === status)
        setFiltered(newTodo)
      } else if (status ==='9x6 м') {
        let newTodo = [...doma].filter(item => item.sizes === status)
        setFiltered(newTodo)
      } else if (status ==='8.5x7 м') {
        let newTodo = [...doma].filter(item => item.sizes === status)
        setFiltered(newTodo)
      } else if (status ==='8x8 м') {
        let newTodo = [...doma].filter(item => item.sizes === status)
        setFiltered(newTodo)
      } else if (status ==='7x6 м') {
        let newTodo = [...doma].filter(item => item.sizes === status)
        setFiltered(newTodo)
      } else if (status ==='9x7 м') {
        let newTodo = [...doma].filter(item => item.sizes === status)
        setFiltered(newTodo)
      } else if (status ==='10x8 м') {
        let newTodo = [...doma].filter(item => item.sizes === status)
        setFiltered(newTodo)
      } else if (status ==='15x8 м') {
        let newTodo = [...doma].filter(item => item.sizes === status)
        setFiltered(newTodo)
      } else if (status ==='sanuzel') {
        let newTodo = [...doma].filter(item => item.sanuzel === '1' || item.sanuzel === '2')
        setFiltered(newTodo)
      } else if (status ==='terrace') {
        let newTodo = [...doma].filter(item => item.terrace === 'есть')
        setFiltered(newTodo)
      } else if (status ==='balkon') {
        let newTodo = [...doma].filter(item => item.balkon === 'есть')
        setFiltered(newTodo)
      } else if (status ==='kukushka') {
        let newTodo = [...doma].filter(item => item.kukushka === 'есть')
        setFiltered(newTodo)
      } else if (status ==='erker') {
        let newTodo = [...doma].filter(item => item.erker === 'есть')
        setFiltered(newTodo)
      } else if (status ==='topochnaya') {
        let newTodo = [...doma].filter(item => item.topochnaya === 'есть')
        setFiltered(newTodo)
      } else if (status ==='F1') {
        let newTodo = [...doma].filter(item => item.floor === '1')
        setFiltered(newTodo)
      } else if (status ==='F1M') {
        let newTodo = [...doma].filter(item => item.floor === '1+М')
        setFiltered(newTodo)
      } else if (status ==='F1.5') {
        let newTodo = [...doma].filter(item => item.floor === '1.5')
        setFiltered(newTodo)
      } else if (status ==='F2') {
        let newTodo = [...doma].filter(item => item.floor === '2')
        setFiltered(newTodo)
      } else if (status ==='Fb2') {
        let newTodo = [...doma].filter(item => item.bedroom === '2')
        setFiltered(newTodo)
      } else if (status ==='Fb3') {
        let newTodo = [...doma].filter(item => item.bedroom === '3')
        setFiltered(newTodo)
      } else if (status ==='Fb4') {
        let newTodo = [...doma].filter(item => item.bedroom === '4')
        setFiltered(newTodo)
      } else if (status ==='Fb5') {
        let newTodo = [...doma].filter(item => item.bedroom === '5')
        setFiltered(newTodo)
      } else if (status ==='F100') {
        let newTodo = [...doma].filter(item => item.square === status)
        setFiltered(newTodo)
      } else if (status ==='F105') {
        let newTodo = [...doma].filter(item => item.square === status)
        setFiltered(newTodo)
      } else if (status ==='F150') {
        let newTodo = [...doma].filter(item => item.square === status)
        setFiltered(newTodo)
      }
    }  

    return (
      <>
        <div className="custom__container">
          <div className="Page_navigation">Главная / Проекты</div>
          <div className="Page_title">Проекты</div>
        </div>
        <div className="custom__container Projects filter">
          <div className="sizeFilter topBlock">
          <div className="subtitle">По размеру</div>
          <div className="filterButtons">
          <button className="filterButton" onClick={()=>todoFilter('all')}>Все</button>
          <button className="filterOutline" onClick={()=>todoFilter('8x7 м')}>8x7</button>
          <button className="filterOutline" onClick={()=>todoFilter('9x6 м')}>9x6</button>
          <button className="filterOutline" onClick={()=>todoFilter('8.5x7 м')}>8.5x7</button>
          <button className="filterOutline" onClick={()=>todoFilter('8x8 м')}>8x8</button>
          <button className="filterOutline" onClick={()=>todoFilter('7x6 м')}>7x6</button>
          <button className="filterOutline" onClick={()=>todoFilter('9x7 м')}>9x7</button>
          <button className="filterOutline" onClick={()=>todoFilter('10x8 м')}>10x8</button>
          <button className="filterOutline" onClick={()=>todoFilter('15x8 м')}>15x8</button>
          </div>
          </div>
          <div className="midBlock">
            <div className="midLeftBlock">
              <div className="constructionFilter">
                <div className="subtitle">По особенности конструкции</div>
                <div className="filterButtons">
                <button className="filterButton" onClick={()=>todoFilter('sanuzel')}>С санузлом</button>
                <button className="filterOutline" onClick={()=>todoFilter('terrace')}>С террасой</button>
                <button className="filterOutline" onClick={()=>todoFilter('balkon')}>С балконом</button>
                <button className="filterOutline" onClick={()=>todoFilter('kukushka')}>С верандой</button>
                <button className="filterOutline" onClick={()=>todoFilter('erker')}>С эркером</button>
                <button className="filterOutline" onClick={()=>todoFilter('topochnaya')}>С котельной</button>
                </div>
              </div>
            </div>
            <div className="midRightBlock">
              <div className="floorAndSeason">
              <div className="floorFilter">
                <div className="subtitle">По этажности</div>
                <div className="filterButtons">
                <button className="filterButton" onClick={()=>todoFilter('F1')}>1</button>
                <button className="filterOutline" onClick={()=>todoFilter('F1M')}>1+М</button>
                <button className="filterOutline" onClick={()=>todoFilter('F1.5')}>1,5</button>
                <button className="filterOutline" onClick={()=>todoFilter('F2')}>2</button>
                </div>
              </div>
              <div className="seasonFilter">
                <div className="subtitle">По сезонности</div>
                <div className="filterButtons">
                <button className="filterButton">Дачные</button>
                <button className="filterOutline">ПМЖ</button>
                </div>
              </div>
              </div>

              <div className="squareAndBedroom">
              <div className="squareFilter">
                <div className="subtitle">По площади, кв. м</div>
                <div className="filterButtons">
                <button className="filterButton" onClick={()=>todoFilter('F100')}> 100- </button>
                <button className="filterOutline" onClick={()=>todoFilter('F105')}>100-150</button>
                <button className="filterOutline" onClick={()=>todoFilter('F150')}>150+</button>
                </div>
              </div>
              <div className="bedroomFilter">
                <div className="subtitle">По кол-ву спален</div>
                <div className="filterButtons">
                <button className="filterButton" onClick={()=>todoFilter('Fb2')}>2</button>
                <button className="filterOutline" onClick={()=>todoFilter('Fb3')}>3</button>
                <button className="filterOutline" onClick={()=>todoFilter('Fb4')}>4</button>
                <button className="filterOutline" onClick={()=>todoFilter('Fb5')}>5</button>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="bottomBlock">
            <div className="first">
              <div className="first_title subtitle">Цена, млн. руб</div>
              <div className="first_filter">
              <div className="text"><span className="from">от 36</span> <span className="to">до 45</span></div>
              <RangeSlider/>
              </div>
            </div>
            <div className="first">
              <div className="first_title subtitle">Площадь, м<sup><small>2</small></sup></div>
              <div className="first_filter">
              <div className="text"><span className="from">от 4,4</span> <span className="to">до 99,9</span></div>
                <RangeSlider/>
              </div>
            </div>
            <div className="third">
              <div className="main__button">Показать</div>
              <button className="main__button outline__button" onClick={()=>todoFilter('all')}>Сбросить</button>
            </div>
          </div>

        </div>
        <div className="catalog__bottom__content Built_container custom__container">
                <div className="catalog__cards">
                {filtered.map((res) =>
                  <Cards key={res.id} id={res.id} title={res.title} sizes={res.sizes} square={res.square} previewImg={res.previewImg1}/>
                )}
                </div>
                <div className="catalog__button main__button outline__button">
                    Все проекты
                </div>
            </div>
            <Free/>
      </>
    );
  }
  
  export default Projects;