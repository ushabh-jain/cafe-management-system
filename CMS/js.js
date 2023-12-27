
const btns = document.getElementsByClassName("cart-btn");
var cartItems = [];

const existingcart = localStorage.getItem("cartitems");

if(existingcart != null){
  cartItems =  JSON.parse(existingcart);
}

function itemincart(item){
  let i;
  for(i = 0; i < cartItems.length; i++){
    if(item == cartItems[i]){
      return true;
    }
  }
  return false;
}

Array.from(btns).forEach(btn => {
    btn.addEventListener('click', (event) => {
        const parentDiv = event.target.parentNode;
        const content = parentDiv.innerHTML;
        const item = content.substring(0, 100) + " <button class='remove'> Remove </button> ";

        if(itemincart(item)){
          console.log("yes")
          alert("item is present in cart choose another");
        }else{
          cartItems.push(item);
          localStorage.setItem("cartitems",JSON.stringify(cartItems));
          btn.innerHTML = "Added";
          btn.classList.add("clicked");
        }

      });
});

const remove = document.getElementsByClassName("remove");
          Array.from(remove).forEach(btn => {
            btn.addEventListener('click', (event) => {
              const parentDiv = event.target.parentNode;
              const content = parentDiv.innerHTML;
              const item = content.substring(0, 40) ;
              const item1 = item.replace(/<[^>]+>/g, '');
              console.log(item1);
              var i;
              for(i = 0; i < cartItems.length; i++){
                console.log("comparing...",typeof(cartItems[i]))

                if(cartItems[i].trim().includes(item1.trim())){
                  var removed = cartItems.splice(i, 1);
                  console.log(removed[0]);
                  var newarr = cartItems.filter(item => item.trim() !== removed[0].trim());
                  cartItems = newarr;
                  localStorage.setItem("cartitems",JSON.stringify(cartItems));
                  break;
                }
                console.log(cartItems);        
                location.reload();
      }
    })
  })
