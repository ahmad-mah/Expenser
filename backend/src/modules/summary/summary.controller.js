import { getAuth } from '@clerk/express';
import * as service from './summary.service.js';

 const getSummary = async (req, res) => {
  try {
    const { userId } = getAuth(req);

    const summary = await service.getSummary(userId);

    res.json({
      success: true,
      data: summary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};


export default{getSummary}