

var generateList=()=>{

    let table = document.getElementById("data_list")
    return (table.innerHTML = data_list.map((x)=>{
        return`
        <section class="serviceList">
            <table >
                <tr>
                    <th>Item</th>
                    <th>Cliente</th>
                    <th>Serviço</th>
                    <th>Previsão de Entrega</th>
                </tr>

                
                <tr>
                    <td>${x.id}</td>
                    <td>${x.cliente}</td>
                    <td>${x.serviço}</td>
                    <td>${x.data_entrega}</td>
                </tr>

            </table>
                
                
            
                <details>
                ${x.desc}

                    <details>
                        <summary>Imagens</summary>

                            <div class="containerImages">
                            
                                <img src="${x.img01}" alt="">
                                <img src="${x.img02}" alt="">
                                <img src="${x.img03}" alt="">
                            </div>
                    </details>
                </details>

                <hr>
            </section>
                    
        
        `
    }).join(""))
}

generateList()

