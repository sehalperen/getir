import { useState, useEffect } from 'react'
import cardsData from  'api/cards'

export default function Cards() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    //data isteği
    setCards(cardsData)
  }, [])



  return ( 
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0">
        {cards.length && cards.map(card => (
          <div className="bg-white p-14  rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
            <img src={card.image} className="w-[150px] h-[150px] mb-6"/>
            <h6 className="font-semibold text-lg text-primary-brand-color">{card.title}</h6>
            <p className="mt-2 text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
    </div>
  )
}
