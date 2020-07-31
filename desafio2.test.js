const Less = require('./desafio2');

test('adicionando 5 numeros a lista', () =>{
    const less = new Less()
    less.AdcNumero(3)
    less.AdcNumero(2)
    less.AdcNumero(4)
    less.AdcNumero(5)
    less.AdcNumero(1)
    expect(less.lista).toEqual([1,5,4,2,3])
    const qntNumero = less.DescoMenor(4)
    expect(qntNumero).toEqual(3)
})

test('testar ordenar crescente', ()=>{
    const less = new Less()
    const listaCrescente = less.OrdenaCres([5,4,3,2,1])
    expect(listaCrescente).toEqual([1,2,3,4,5])
})