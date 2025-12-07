function Card({ produtos }) {
  return (<>
    {produtos.map(item => {
      return <div key={item.id}>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={item.photo_url} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{item.name}</div>
            <div className="flex justify-start">
            <p class="text-gray-700 text-base">
              {item.description}
            </p>
            <p> | </p>
            <p className="text-base">
              R$ {item.price}
            </p>
            </div>
          </div>
          <div class="px-6 pt-4 pb-2 flex justify-between">
            <button class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">Ver Mais</button>
            <button class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">Editar</button>
            <button class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">Deletar</button>
          </div>
        </div>
      </div>
    })}
  </>)
}

export default Card