function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsLimit = 12;
  
    if (speed < speedLimit) {
      console.log("Ok");
    } else {
      const excessSpeed = speed - speedLimit;
      const demeritPoints = (excessSpeed / kmPerDemeritPoint) | 0;
  
      if (demeritPoints > demeritPointsLimit) {
        console.log("License suspended");
      }else {
        console.log("Points: " + demeritPoints);
      }
    }
  }
  

  speedDetector(90);  
  speedDetector(50); 
  speedDetector(120); 
  speedDetector(150); 