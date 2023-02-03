const categLi = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categLi.length);

const arreyLi = [...categLi];

// const itemLi = document.querySelectorAll('li.item h2')
// itemLi.forEach((item)=>console.log(item.textContent))
const result = arreyLi.map((item) => {
  const title = item.querySelector("h2");
  console.log("Category:", title.textContent);
  const list = item.querySelectorAll("li");
  console.log("Elements:", list.length);
});
