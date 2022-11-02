export const config = {
  url: "https://rw-api-production.up.railway.app/",
};

export const Bag = ({ bag }) => {
  return (
    <div className="text-center ps-5 pe-5 pt-5 text-white">
      <h4 className="description text-dark">{bag.description}</h4>
      <h6>
        <span>Cod:</span> {bag.id}
      </h6>
      <h6 className="text-gray-200">Detalhe: {bag.detail}</h6>
      <h6>Cor: {bag.color}</h6>
      <h6>Modelo: {bag.model}</h6>
      <h6>Marca: {bag.brand}</h6>
      <h6 className="price pb-3 text-warning">Preço: {bag.price}</h6>
      <img
        className="img-fluid"
        src={`${config.url}files/${bag.image}`}
        alt={bag.id}
      />
    </div>
  );
};
