import categoryService from './categories.service.js';

const getAll = async (req, res) => {
  try {
    const result = await categoryService.getCategories();

    return res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export default { getAll };
