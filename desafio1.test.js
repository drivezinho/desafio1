const TrainComposition = require('./desafio1');

test('adicionar vagao a esquerda igual a 4', () =>{
    const train = new TrainComposition()
    train.AdcVagaoR()
    expect(train.vagao).toEqual([5,6])
    train.AdcVagaoL()
    expect(train.vagao).toEqual([4,5,6])
    train.RmvVagaoL()
    expect(train.vagao).toEqual([5,6])
    train.RmvVagaoR()
    expect(train.vagao).toEqual([5])
})