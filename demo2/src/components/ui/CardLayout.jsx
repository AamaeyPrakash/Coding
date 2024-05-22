import React, { PureComponent } from 'react'
import CardData from './CardData.json'

export class CardLayout extends PureComponent {
  render() {
    return (
        <div>
            <div className="grid grid-cols-3 gap-5 p-5">
            {CardData.map((card)=>(
                <div className="max-w-sm rounded overflow—hidden shadow-lg">
                    <img className="w-max justify-" src={card.imageUrl} alt="400x400"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-left py-2">{card.title}</div>
                        <p className="text-gray-700 text-left">{card.description}</p>
                    </div>
                    <div className="flex px-5 py-4 gap-4 round left-0">
                        <div className="rounded-2xl px-3 py-1 bg-gray-300 text-sm">#tag1</div>
                        <div className="rounded-2xl px-3 py-1 bg-gray-300 text-sm">#tag2</div>
                        <div className="rounded-2xl px-3 py-1 bg-gray-300 text-sm" text-sm>#tag3</div>
                    </div>
                </div>
            ))}
            </div>       
        </div>
    )
  }
}

export default CardLayout