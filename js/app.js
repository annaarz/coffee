const menuButton = document.querySelectorAll('.menu-button')
const popup = document.getElementById('popup')
const menuBtn1 = document.getElementById('btn-1')
const menuBtn2 = document.getElementById('btn-2')
const menuBtn3 = document.getElementById('btn-3')
const coffeeMenu = document.querySelector('.coffee-menu')
const teaMenu = document.querySelector('.tea-menu')
const dessertMenu = document.querySelector('.dessert-menu')



function renderPopupCoffee(img, title, description, price){
    const templateCoffee = ` <div class="popup__content">
    <img src="${img}" alt="" width="310px" height="310px">
    <div class="product-info">
      <div class="popup_name">${title}</div>
      <div class="popup_description">${description}</div>
      <div class="size">
        <div class="size-text">Size</div>
        <div class="size-buttons">
          <button class="size-btn clicked" id="s-1"><span>S</span> 200ml</button>
          <button class="size-btn" id="s-2"><span>M</span> 300ml</button>
          <button class="size-btn" id="s-3"><span>L</span> 400ml</button>
        </div>
      </div>
      <div class="additives">Additives
        <div class="additives-buttons">
          <button class="additives-btn" id="a-1"><span>1</span> Sugar</button>
          <button class="additives-btn" id="a-2"><span>2</span> Cinnamon</button>
          <button class="additives-btn" id="a-3"><span>3</span> Syrup</button>
        </div>
      </div>
      <div class="popup_total">
        <div>Total:</div>
        <div>${price}</div>
      </div>
      <div class="warning">
        <img src="img/info-empty.png" alt="">
        <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
      </div>
      <div class="close">
        Close
      </div>
    </div>
</div>`
popup.innerHTML = templateCoffee
}

function renderPopupTea(img, title, description, price){
  const templateTea = ` <div class="popup__content">
  <img src="${img}" alt="" width="310px" height="310px">
  <div class="product-info">
    <div class="popup_name">${title}</div>
    <div class="popup_description">${description}</div>
    <div class="size">
      <div class="size-text">Size</div>
      <div class="size-buttons">
        <button class="size-btn clicked" id="s-1"><span>S</span> 200ml</button>
        <button class="size-btn" id="s-2"><span>M</span> 300ml</button>
        <button class="size-btn" id="s-3"><span>L</span> 400ml</button>
      </div>
    </div>
    <div class="additives">Additives
      <div class="additives-buttons">
        <button class="additives-btn" id="a-1"><span>1</span> Sugar</button>
        <button class="additives-btn" id="a-2"><span>2</span> Lemon</button>
        <button class="additives-btn" id="a-3"><span>3</span> Syrup</button>
      </div>
    </div>
    <div class="popup_total">
      <div>Total:</div>
      <div>${price}</div>
    </div>
    <div class="warning">
      <img src="img/info-empty.png" alt="">
      <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
    </div>
    <div class="close">
      Close
    </div>
  </div>
</div>`
popup.innerHTML = templateTea
}


function renderPopupDessert(img, title, description, price){
  const templateDessert = ` <div class="popup__content">
  <img src="${img}" alt="" width="310px" height="310px">
  <div class="product-info">
    <div class="popup_name">${title}</div>
    <div class="popup_description">${description}</div>
    <div class="size">
      <div class="size-text">Size</div>
      <div class="size-buttons">
        <button class="size-btn clicked" id="s-1"><span>S</span> 200g</button>
        <button class="size-btn" id="s-2"><span>M</span> 300g</button>
        <button class="size-btn" id="s-3"><span>L</span> 400g</button>
      </div>
    </div>
    <div class="additives">Additives
      <div class="additives-buttons">
        <button class="additives-btn" id="a-1"><span>1</span> Berries</button>
        <button class="additives-btn" id="a-2"><span>2</span> Nuts</button>
        <button class="additives-btn" id="a-3"><span>3</span> Jam</button>
      </div>
    </div>
    <div class="popup_total">
      <div>Total:</div>
      <div>${price}</div>
    </div>
    <div class="warning">
      <img src="img/info-empty.png" alt="">
      <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
    </div>
    <div class="close">
      Close
    </div>
  </div>
</div>`
popup.innerHTML = templateDessert
}

window.addEventListener('click', (e) =>{
    const clickedElement = e.target;
    if (clickedElement.closest('.cardCoffee')){
        const activeCard = clickedElement.closest('.card')
        const imgUrl = activeCard.querySelector('img').getAttribute('src')
        const title = activeCard.querySelector('h5').innerHTML
        const description = activeCard.querySelector('.card-text').innerHTML
        const price = activeCard.querySelector('.price').innerHTML
        popup.classList.add('opened')
        renderPopupCoffee(imgUrl, title, description, price)

    }
    if (clickedElement.matches('.close') || clickedElement.matches('#popup')) {
        popup.classList.remove('opened')
    }

    if (clickedElement.closest('.cardTea')){
      const activeCard = clickedElement.closest('.card')
      const imgUrl = activeCard.querySelector('img').getAttribute('src')
      const title = activeCard.querySelector('h5').innerHTML
      const description = activeCard.querySelector('.card-text').innerHTML
      const price = activeCard.querySelector('.price').innerHTML
      popup.classList.add('opened')
      renderPopupTea(imgUrl, title, description, price)

  }
  if (clickedElement.matches('.close') || clickedElement.matches('#popup')) {
      popup.classList.remove('opened')
  }

  if (clickedElement.closest('.cardDessert')){
    const activeCard = clickedElement.closest('.card')
    const imgUrl = activeCard.querySelector('img').getAttribute('src')
    const title = activeCard.querySelector('h5').innerHTML
    const description = activeCard.querySelector('.card-text').innerHTML
    const price = activeCard.querySelector('.price').innerHTML
    popup.classList.add('opened')
    renderPopupDessert(imgUrl, title, description, price)

}
if (clickedElement.matches('.close') || clickedElement.matches('#popup')) {
    popup.classList.remove('opened')
}

    if (clickedElement.matches('#btn-1')) {
      menuBtn1.classList.add('active')
      menuBtn2.classList.remove('active')
      menuBtn3.classList.remove('active')

      coffeeMenu.classList.add('visible')
      teaMenu.classList.remove('visible')
      dessertMenu.classList.remove('visible')

    }
    if (clickedElement.matches('#btn-2')) {
      menuBtn1.classList.remove('active')
      menuBtn2.classList.add('active')
      menuBtn3.classList.remove('active')

      coffeeMenu.classList.remove('visible')
      teaMenu.classList.add('visible')
      dessertMenu.classList.remove('visible')
    }
    if (clickedElement.matches('#btn-3')) {
      menuBtn1.classList.remove('active')
      menuBtn2.classList.remove('active')
      menuBtn3.classList.add('active')

      coffeeMenu.classList.remove('visible')
      teaMenu.classList.remove('visible')
      dessertMenu.classList.add('visible')
    }

    if (clickedElement.matches('#s-1')) {
      document.getElementById('s-1').classList.add('clicked')
      document.getElementById('s-2').classList.remove('clicked')
      document.getElementById('s-3').classList.remove('clicked')
    }
    if (clickedElement.matches('#s-2')) {
      document.getElementById('s-1').classList.remove('clicked')
      document.getElementById('s-2').classList.add('clicked')
      document.getElementById('s-3').classList.remove('clicked')
    }
    if (clickedElement.matches('#s-3')) {
      document.getElementById('s-1').classList.remove('clicked')
      document.getElementById('s-2').classList.remove('clicked')
      document.getElementById('s-3').classList.add('clicked')
    }

    if (clickedElement.matches('#a-1')) {
      document.getElementById('a-1').classList.toggle('clicked')
    }

    if (clickedElement.matches('#a-2')) {
      document.getElementById('a-2').classList.toggle('clicked')

    }

    if (clickedElement.matches('#a-3')) {
      document.getElementById('a-3').classList.toggle('clicked')
    }

})



