import { NextFunction, Request, response, Response } from "express";
import MobileModel from "../Models/mobileModel";



export const addMobiles = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { product_name, brand, model, color, storage_capacity, price, discount_percentage, release_date, screen_size, processor } = req.body;

        const mobile = new MobileModel({
            product_name, brand, model, color, storage_capacity, price, discount_percentage, release_date, screen_size, processor
        })
        mobile.save();
        res.status(200).json({ mobile })

    } catch (error) {
        next(error);
    }
}

export const getMobile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const mobile = await MobileModel.find({})
        res.status(200).json(mobile)
    } catch (error) {
        next(error)
    }
}

export const updateMobile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const mobile = await MobileModel.findByIdAndUpdate(id, req.body)
        if (!mobile) {
            res.status(404).json({ message: "Mobile Not Found" });
            return;
        }
        await mobile.save();
        res.status(200).json(mobile)

    } catch (error) {
        next(error)
    }
}

export const deleteMobile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const mobile = await MobileModel.findByIdAndDelete(id);
        if (!mobile) {
            res.status(404).json({ message: "Mobile Not Found" })
            return
        }
        res.status(204).json(mobile)
    } catch (error) {
        next(error)
    }
}