

var generateList=()=>{

    let table = document.getElementById("data_list")
    return (table.innerHTML = data_list.map((x)=>{
        return`
        <section class="serviceList">
            <div class="mainTable">
                <div class="tableHeader">
                    <div class="divItensTable">Item</div>
                    <div class="divItensTable">Cliente</div>
                    <div class="divItensTable">Serviço</div>
                    <div class="divItensTable">Previsão de Entrega</div>
                </div>

                
                <div class="descTable">
                    <div class="divItensTable">${x.id}</div>
                    <div class="divItensTable">${x.cliente}</div>
                    <div class="divItensTable">${x.serviço}</div>
                    <div class="divItensTable">${x.data_entrega}</div>
                </div>

            </div>
                
                
            
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

                
            </section>
                    
        
        `
    }).join(""))
}

generateList()

