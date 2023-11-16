function matches(vitoria, derrota) {
    let resultado = vitoria - derrota
    return resultado
  }
  
  function podium() {
    let podiumResult = matches(100, 10)
    let nivel = ""
    if (podiumResult <= 10) {
      nivel = "Ferro"
     } else if (podiumResult <= 20) {
          nivel = "Bronze"
        } else if (podiumResult <= 50) {
              nivel = "Prata"
            } else if (podiumResult <= 80) {
                  nivel = "Ouro"
                } else if (podiumResult <= 90) {
                      nivel = "Diamante"
                    } else if (podiumResult <= 100) {
                          nivel = "Lendário"
                         } else if (podiumResult >= 100) {
                              nivel = "Imortal"
    }
    return `O Herói tem de saldo de ${podiumResult} e está no nível de ${nivel}`
  }
  
  console.log(podium())
