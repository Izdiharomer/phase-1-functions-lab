function distanceFromHqInBlocks(street) {
    const hq = 42;
    return Math.abs(hq - street);
  }

  function distanceFromHqInFeet(street) {
    const blockInFeet = 264;
    return Math.abs(street - 42) * blockInFeet;
  }
  function distanceTravelledInFeet(start, end) {
    const blockInFeet = 264;
    const distanceInBlocks = Math.abs(end - start);
    return distanceInBlocks * blockInFeet;
  }
  function calculatesFarePrice(start, destination) {
    const blockInFeet = 264;
    const freeDistance = 400;
    const distanceInFeet = Math.abs(destination - start) * blockInFeet;
  
    if (distanceInFeet <= freeDistance) {
      return 0;
    } else if (distanceInFeet <= 2000) {
      const farePrice = (distanceInFeet - freeDistance) * 0.02;
      return parseFloat(farePrice.toFixed(2));
    } else if (distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
