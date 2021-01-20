const Batismo = require('../models/batismo.js');

module.exports.list = () => {
    return Batismo.find({}, { _id: 1, date: 1, title: 1, ref: 1 }).exec();
}

module.exports.get = _id => {
    return Batismo.findOne({ _id }).exec();
}

module.exports.getByYear = year => {
    return Batismo.find({ date: { $regex: `${year}-[0-9]{1,2}-[0-9]{1,2}` } }).exec();
}

module.exports.listBatisados = () => {
    return Batismo
        .find({}, { batisado: 1 })
        .sort('batisado')
        .exec();
}

module.exports.listProgenitores = () => {
    return Batismo.find({}, { _id: 1, pai: 1, mae: 1 }).exec();
}

module.exports.stats = async () => {
    const batismos = await Batismo.find({}, { date: 1 }).exec();

    const batismosPorAno = {};
    
    for(let batismo of batismos) {
        let year = batismo.date.split('-')[0];

        if(!batismosPorAno[year]) {
            batismosPorAno[year] = 0;
        }

        batismosPorAno[year]++;
    }

    return batismosPorAno;
}
