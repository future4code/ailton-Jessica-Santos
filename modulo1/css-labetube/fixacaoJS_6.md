const tarefasTerminadas = tarefas.filter((terminada)=>{
    return terminadas.status === "done"
})
return tarefasTerminadas.map((titulos)=>{
    return titulos.titulo
})