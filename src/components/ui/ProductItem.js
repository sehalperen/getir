import { AiOutlinePlus } from 'react-icons/ai';

export default function ProductItem({ product }) {
  return (
    <div className="relative bg-white flex flex-col items-center gap-y-1 text-center text-sm font-semibold p-3">
        <button className="text-brand-color transition-colors bg-white absolute top-3 right-3 w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg shadow-md hover:border-brand-color">
            <AiOutlinePlus size={16}/>
        </button>
        <img src={product.image} alt={product.title}/>
        <div className="text-brand-color">{product.price}</div>
        <div className="text-gray-900">{product.title}</div>
        <div className="text-gray-500">{product.alt}</div>
    </div>
  )
}
