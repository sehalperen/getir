export default function Category({ category: { id, title, image} }) {
  return (
    <a href="#" className="group flex flex-col items-center text-center p-4 transition hover:bg-purple-50">
        <img src={image} alt={title} className="w-12 h-12 rounded-md border border-gray-200"/>
        <span className="text-sm gap-y-2 font-semibold text-gray-700 group-hover:text-brand-color">{title}</span>
    </a>
  )
}
