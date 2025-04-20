exports.analyzeDataWithAI = async (data) => {
    // Placeholder for AI logic (e.g., pattern recognition, predictions)
    const suggestion = data.kmTravelled > 50
      ? 'Consider using public transport or carpooling to reduce your footprint.'
      : 'Great job keeping your travel emissions low!';
  
    return {
      suggestion,
      riskLevel: data.kwhUsed > 100 ? 'High' : 'Low'
    };
  };