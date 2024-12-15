const getItemInfo = () => {
  const items = document.querySelectorAll('#categories .item');
  console.log(`Number of categories: ${items.length}`);
  items.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });
};
getItemInfo();
