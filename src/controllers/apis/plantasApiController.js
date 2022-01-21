const db = require("../../models");


export const createPlanta = async (req, res) => {
  try {
    const { nombre, grupo, descripcion, temporada, ambiente } = req.body;
    const planta = await db.Plantas.create({
      nombre,
      grupo,
      descripcion,
      temporada,
      ambiente,
    });
    const response = {
      meta: {
        status: 200,
        message: "Planta creada correctamente",
      },
      data: planta,
    };
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getPlantas = async (req, res) => {
  try {
    const plantas = await db.Plantas.findAll();
    const response = {
      meta: {
        status: 200,
        message: "Plantas obtenidas correctamente",
        total: plantas.length,
      },
      data: plantas,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getPlantaById = async (req, res) => {
  try {
    const { plantaId } = req.params;
    const planta = await db.Plantas.findByPk(plantaId);
    const response = {
      meta: {
        status: 200,
        message: "Planta encontrada",
      },
      data: planta,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updatePlantaById = async (req, res) => {
  try {
    const { plantaId } = req.params;
    const { nombre, grupo, descripcion, temporada, ambiente } = req.body;
    await db.Plantas.update(
      {
        nombre,
        grupo,
        descripcion,
        temporada,
        ambiente,
      },
      {
        where: {
          id: plantaId,
        },
      }
    );
    const response = {
      meta: {
        status: 200,
        message: `Planta con id = '${plantaId}', con nombre = '${nombre}' actualizada correctamente`,
      },
      data: req.body,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deletePlantaById = async (req, res) => {
  try {
    const { plantaId } = req.params;
    await db.Plantas.destroy({
      where: {
        id: plantaId,
      },
    });
    const response = {
      meta: {
        status: 200,
        message: `Planta con id = '${plantaId}' eliminada correctamente`,
      },
      data: req.body,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
