//import { response } from "express";

const db = require("../../models");
//const Sequelize = require('sequelize');

export const createPlanta = (req, res) => {};
export const getPlantas = async (req, res) => {
    try{
        const plantas = await db.Plantas.findAll();
        let response = {
          meta: {
            status: 200,
            total: plantas.length,
          },
          data: plantas,
        };
        res.json(response);
    }catch(error){
        res.status(500).json({
            message: error.message,
        });
    };
    
  

  /* db.Plantas.findAll()
            .then(plantas => {

                for(let i = 0; i < plantas.length; i++){

                    plantas[i].setDataValue;
                }

                let respuesta = {

                    meta: {
                        
                        status: 200,
                        total: plantas.length,
                        url: 'http://localhost:4000/plantas'
                    },
                    data: plantas
                }

                res.json(respuesta)
            })
            .catch(error => {

                console.log(error);
            }) */
};
export const getPlantaById = (req, res) => {};
export const updatePlantaById = (req, res) => {};
export const deletePlantaById = (req, res) => {};
