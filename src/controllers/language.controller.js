import res, { json } from "express/lib/response";
import { getConnection } from "./../database/databse";



const getLanguage = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM language ");

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addLanguage1 = async (req, res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM language  WHERE id= ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addLanguage = async (req, res) => {
    try {
        const { id } = req.params;
        if(name === undefined || programmers === undefined){
            res.status(400).json({ message: "Query Incorrecta. Por favor inserta un valor valido"});

        }
        const language = {
            name, programmers
        };

        const connection = await getConnection();
        const resultado = await connection.query("INSERT INTO language SET ?", language);

        res.json({message: "Lenguaje añadido correctamente"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteLanguage = async (req, res) => {
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM language WHERE id= ?", id);
        console.log(result)
        res.json({message: "Eliminado Correctamente"});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const updateLanguage = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, programmers} = req.body;
        if( id===undefined || name === undefined || programmers === undefined ){
            res.status(400).json({ message: "Query Incorrecta. Por favor inserta un valor valido"});

        }
        const language = {id, name, programmers};

        const connection = await getConnection();
        const result = await connection.query("UPDATE language SET ? WHERE id= ?", [language, id]);
        console.log(result)
        // res.json({message: "Dato Acutalizado Correctamente"});
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



export const methods = {
    getLanguage,
    addLanguage,
    addLanguage1,
    deleteLanguage,
    updateLanguage

};
