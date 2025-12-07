import { Link } from "react-router-dom";
import { TagButton } from "./TagButton";

async function deleteProduct(id) {
  await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });

  window.location.href = "/products"
}

function Card({ produtos }) {
  return (<>
    {produtos.map(item => {
      return <div key={item.id}>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-80 h-60" src={item.photo_url} />
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
            <TagButton
              url={`/products/${item.id}`}
              color={"green"}>
              Ver mais
            </TagButton>

            <TagButton
              url={`/products/edit/${item.id}`}
              color={"blue"}>
              Editar
            </TagButton>

            <TagButton
              color={"red"}
              onClick={() => {
                if (confirm("Tem certeza que deseja excluir?")) {
                  deleteProduct(item.id)
                }
              }}>
              Excluir
            </TagButton>
          </div>
        </div>
      </div>
    })}
  </>)
}

export default Card