function openPDF() {
    window.open('./assets/VICENZOmenu.pdf', '_blank');
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
            // restaurantes[i].style.filter = 'saturate(1)';
            
            setTimeout(() => {
                restauranteInfo.style.opacity = '0';
                // restaurantes[i].style.filter = 'saturate(0)';
            }, 10000);
        });
    }
}

/// Call the function to add click event to restaurantes
addClickEventToRestaurante();

// Função para renderizar os vouchers
function renderVouchers() {
    // Valores dos vouchers
    let values = [50, 75, 100, 125, 150, 200, 300];

    // Buscar o container dos vouchers
    let container = document.getElementById('voucher-wrapper');

    for(let i = 0; i < values.length; i++) {
        let newRadio = document.createElement('input');
        newRadio.setAttribute('type', 'radio');
        newRadio.setAttribute('name', 'voucher');
        newRadio.setAttribute('class', 'voucher-radio-input')
        newRadio.setAttribute('id', `voucher-${values[i]}`);

        // Adiciona o radio button ao container
        container.appendChild(newRadio);

        // Criar a label para cada radio
        let newLabel = document.createElement('label');
        newLabel.setAttribute('for', `voucher-${values[i]}`);
        newLabel.setAttribute('class', 'voucher-radio-label rounded');
        newLabel.innerText = `${values[i]}€`;

        // Adiciona a label ao container
        container.appendChild(newLabel);
    }
}

// Função para trocar a visibilidade do destinatário
// e adicionar o atributo required ao input
function controllerVoucherDest() {
    // Buscar a checkbox
    let input = document.getElementById('oferta');
    // Buscar o nome do destinatário + div
    let dest = document.getElementById('nome_dest');
    let dest_div = document.getElementById('nome_dest_div');
    
    if(input.checked) {
        dest_div.classList.remove('hidden');
        dest.setAttribute('required', '');
    } else {
        dest_div.classList.add('hidden');
        dest.removeAttribute('required');
    }
    
    // Buscar a mensagem para o destinatário + div
    let msgdest_div = document.getElementById('msg_dest_div');

    if(input.checked) {
        msgdest_div.classList.remove('hidden');
    } else {
        msgdest_div.classList.add('hidden');
    }
}

// Função para validar o Formulário
function validateForm() {
    let radios = document.querySelectorAll('.voucher-radio-input');
    console.log(radios);
    return;
}