exports.calculateCarbonFootprint = (data) => {
    const transport = data.kmTravelled * 0.21; // example multiplier
    const electricity = data.kwhUsed * 0.5; // example
    const food = data.foodConsumption * 1.2;
  
    return transport + electricity + food;
  };