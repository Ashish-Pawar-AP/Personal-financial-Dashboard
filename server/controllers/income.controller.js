import Income from "../models/Income.js";

const addIncome = async (req, res)=>{
    try {
        const {amount, source, date, note} = req.body
        if(!amount || !source.trim()){
            res.status(401).json({message:"All fields are required"})
        }

        const user = req.user.id
        const income = await Income.create({
            user:user,
            amount,
            source,
            date,
            note,
        })

        res.status(200).json(income)

    } catch (error) {
        console.log(`Something went wrong while creating Income: ${error?.message}`);
        res.status(500).json({message:"Income creation failed"})
    }
}

const getincome = async (req, res)=>{
    try {
        const income = await Income.find({user:req.user.id}).sort({date:-1})

        res.status(200).json(income)
    } catch (error) {
        console.log(`Something went wrong while fetching income: ${error?.message}`);
        res.status(500).json({message:"Server error"})
    }
}

export {addIncome, getincome}
