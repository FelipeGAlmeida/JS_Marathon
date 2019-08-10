class BMIService {

    static getIndex(weight, height){
        return weight / Math.pow(height,2)
    }

}

module.exports = BMIService