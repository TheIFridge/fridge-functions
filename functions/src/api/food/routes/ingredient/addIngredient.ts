import { Request, Response } from "express";

import * as food from "@api/food/food";

import { Ingredient } from "@api/food/types";

export async function addIngredient(request: Request, response: Response): Promise<Response<any>> {
    const ingredientData: Ingredient = {
        identifier: request.body.identifier,
        name: request.body.name,
        flagged: request.body.flagged,
        stores: request.body.stores,
        images: request.body.images,
        description: request.body.description,
        price: request.body.price,
        weight: request.body.weight,
        dietary: request.body.dietary,
    }

    // TODO: Validator

    return await food.addIngredient(ingredientData)
        .then((data) => {
            return response.json(data);
        })
        .catch((error) => {
            // TODO: Handle error so we don't expose internal server errors to the user
            console.error(error);
            return response.status(500).json({ error: error.message });
        });
}