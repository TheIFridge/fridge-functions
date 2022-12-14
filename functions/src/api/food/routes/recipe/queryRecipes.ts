import {Request, Response} from "express";

import * as food from "@api/food/food";

import {SearchRecipeQuery} from "../../types";

/**
 *
 * @param {Request} request
 * @param {Response} response
 * @return {Promise<Response>}
 */
export async function queryRecipes(request: Request, response: Response) {
  const queryData: SearchRecipeQuery = {
    ingredients: request.body.ingredients,
  };

  return await food.queryRecipes(queryData.ingredients)
      .then((data) => {
        return response.json(data);
      })
      .catch((error) => {
        console.error(error);
        return response.status(500).json({error: error.message});
      });
}
