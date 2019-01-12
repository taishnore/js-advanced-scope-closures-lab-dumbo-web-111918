function produceDrivingRange(blockRange) {
  return function numBlockRange(start, end) {
    let a = parseInt(start);
    let b = parseInt(end);
    let diff = Math.abs(a - b);
    let dist = Math.abs(blockRange - diff)
    console.log(diff)
    if (diff > blockRange) {
      return `${dist} blocks out of range`
    }
    else {
      return `within range by ${dist}`
    }
  }

}


function produceTipCalculator(percent) {
  return function percentTip(amount) {
    return percent * amount;
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
    this.name = name;
    this.id = ++driverId;
  }
  }
}
