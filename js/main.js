const elList = document.querySelector(".products__list");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => fnRender(data));

function fnRender(data) {
  data.map((item) => {
    const newLi = document.createElement("li")
    newLi.classList = 'products__item'
    newLi.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top card__img" alt="">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.description}</p>
      <div class="d-flex justify-content-between mt-2">
        <span class="card__see"><i class="bi bi-eye"></i>${item.rating.count}</span>
      <span class="card__star">
      ${item.rating.rate-1>0 ? '<i class="bi bi-star-fill"></i>': item.rating.rate-0>0 ? '<i class="bi bi-star-half"></i>' : '<i class="bi bi-star"></i>'}
      ${item.rating.rate-2>0 ? '<i class="bi bi-star-fill"></i>': item.rating.rate-1>0 ? '<i class="bi bi-star-half"></i>' : '<i class="bi bi-star"></i>'}
      ${item.rating.rate-3>0 ? '<i class="bi bi-star-fill"></i>': item.rating.rate-2>0 ? '<i class="bi bi-star-half"></i>' : '<i class="bi bi-star"></i>'}
      ${item.rating.rate-4>0 ? '<i class="bi bi-star-fill"></i>': item.rating.rate-3>0 ? '<i class="bi bi-star-half"></i>' : '<i class="bi bi-star"></i>'}
      ${item.rating.rate-5>0 ? '<i class="bi bi-star-fill"></i>': item.rating.rate-4>0 ? '<i class="bi bi-star-half"></i>' : '<i class="bi bi-star"></i>'}
        ${item.rating.rate}</span>
      </div>
      <div class="d-flex justify-content-between align-items-center mt-2">
        <button class="btn btn-primary">purchase</button>
        <p class="price__color">$${item.price}</p>
      </div>
    </div>
  </div>
        `
        elList.appendChild(newLi)
  });
}

