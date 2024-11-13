const computer = {
    cpu: "Ryzen 7500g",
    ram: "32GB DRR4 3200Mz",
    ssd: "2TB Nvme",
    gpu: "RTX 2060 Super"
}

console.log(computer)


// Ambas as formas adicionam novos atributos ao objeto
computer["fonte"] = "600W"
console.log(computer)

computer.cor = "Withe"
console.log(computer)