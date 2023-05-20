function openPDF() {
    window.open('./assets/docs/menu.pdf', '_blank');
}

function addClickEventToRestaurante() {
    // Get all the restaurant elements
    const restaurantes = document.getElementsByClassName('restaurante');

    // Loop through each restaurant element
    for (let i = 0; i < restaurantes.length; i++) {
      // Add a click event listener to each restaurant element
        restaurantes[i].addEventListener('click', function() {
            const restauranteInfo = this.querySelector('.restaurante-info');
            
            // Change the opacity of the restaurante-info to 1
            restauranteInfo.style.opacity = '1';

            setTimeout(() => {
                restauranteInfo.style.opacity = '0';
            }, 5000);
        });
    }
}
  
  // Call the function to add click event to restaurantes
  addClickEventToRestaurante();