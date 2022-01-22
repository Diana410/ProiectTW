import Bug from "../Entitati_Tabele/./Bug.js";
const bug={
    create:async(bug)=>{
        try{
            const result=await Bug.create(bug);
            return result;
        }
        catch(err){
            throw new Error(err.message);
        }
    },
    getAll: async()=>{
        try{
            const bugs=await Bug.findAll();
            return bugs;
        }catch(err){
            throw new Error(err.message);
        }
    },
    delete: async(id)=>{
        try{
            return await Bug.destrpy({
                where:{
                    Bug_id: id
                }
            });
        }
        catch(err){
            throw new Error(err.message);
        }
    }
}

const createBug= async(req, res)=>{
    const b= req.body;
    if(b.detalii&&b.prioritate&&b.echipa){
        const result= await bug.create(b);
        res.status(201).send({
            message: 'Bug-ul a fost creat cu succes'
        });
    }
    else{
        res.status(400).send({
            message:'A existat o eraore-Bug'
        })
    }
};

const getAllBugs = async (req, res, next) => {
    try {
        const b = await bug.getAll();
        res.status(200).send(b);
    } catch(err) {
        res.status(500).send({
            message: `Eroare: ${err.message}`
        });
    }
};

const deleteBug = async (req, res) => {
    try {
        await bug.delete(req.params.id);
        res.status(200).send();
    } catch(err) {
        res.status(500).send({
            message: `Error occured: ${err.message}`
        });
    }
};


export default {createBug, getAllBugs,deleteBug};
