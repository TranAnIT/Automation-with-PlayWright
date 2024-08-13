// import .... from
// export function() {...}

// CommonJS Module System

// ES6 module system

// Declaration
const getWeight = function(yourCurrentBMI, standardBMI, height) {
    const weight = (height ** 2) * (yourCurrentBMI - standardBMI);
    return Math.abs(weight);
}

// export

module.exports = {getWeight};