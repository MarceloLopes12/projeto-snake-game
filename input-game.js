



function Teclado(w){ 

    return {
        setEventosTeclas: ( acaoTeclas ) => {  
            w.addEventListener("keypress", (t) => {
                const tecla = t.key.toLocaleLowerCase()
                const acao = acaoTeclas[tecla]

                if( acao ) acao()
            })
        }
    }
}