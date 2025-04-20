const { calculateCarbonFootprint } = require('../utils/trackerUtils');
const { analyzeDataWithAI } = require('../services/aiService');

exports.getFootprint = async (req, res) => {
  const userData = req.body;
  const baseFootprint = calculateCarbonFootprint(userData);
  const aiInsights = await analyzeDataWithAI(userData);

  res.json({ baseFootprint, aiInsights });
};