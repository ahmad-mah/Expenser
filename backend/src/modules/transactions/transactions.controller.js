import service from './transactions.service.js';
import { getAuth } from '@clerk/express';

const getAll = async (req, res) => {
  try {
    const { userId } = getAuth(req);
    const result = await service.getAll(userId);

    return res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
const create = async (req, res) => {
  try {
    const { userId } = getAuth(req);
    console.log('USER ID:', userId);
    console.log('hola', req.headers.authorization);

    const result = await service.create(req.body, userId);

    return res.status(201).json({
      success: true,
      data: result[0],
    });
  } catch (error) {
    // return res.status(400).json({
    //   success: false,
    //   error: error.message,
    // });

    console.error(error);

    return res.status(400).json({
      success: false,
      error: error.message,
      // stack: error.stack,
    });
  }
};
const update = async (req, res) => {
  try {
    const { userId } = getAuth(req);
    const { id } = req.params;

    const result = await service.update(id, req.body, userId);

    return res.json({
      success: true,
      data: result[0],
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
const remove = async (req, res) => {
  try {
    const { userId } = getAuth(req);
    const { id } = req.params;

    const result = await service.remove(id, userId);

    return res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

export default { getAll, create, update, remove };
