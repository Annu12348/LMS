import userModel from "../model/user.model.js";

export const createUser = async (data) => {
    return await userModel.create(data)
}

export const findOneUser = async (one) => {
    return await userModel.findOne(one)
}

export const updateOneUser = async (updates) => {
    return await userModel.findOneAndUpdate(updates)
} 