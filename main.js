$(document).ready(function() {
    $('.buscador').click(function() {
        let pokemonName = $('.pokemonNombre').val().toLowerCase();
        if (pokemonName) {
            $.ajax({
                url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
                dataType: 'json',
                success: function(data) {
                    console.log(data);
                    $('.pokemonInfoContainer').append(`
                        <div class="pokemonInfo">

                            <div class="contenido">
                            <h2>${data.name}</h2>
                            <p>Altura: ${data.height / 10} m</p>
                            <p>Peso: ${data.weight / 10} kg</p>
                            <p>Tipos: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p> 
                            </div>
                            
                            <div class="imagen">
                            <img src="${data.sprites.front_default}" alt="${data.name}">
                            </div>
                            
                        </div>
                    `);
                }
            });
        } else {
            alert('Por favor, introduce el nombre de un Pokémon.');
        }
    });
});
