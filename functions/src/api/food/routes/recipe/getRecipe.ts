import {Request, Response} from "express";

import * as food from "@api/food/food";

/**
 *
 * @param {Request} request
 * @param {Response} response
 * @return {Promise<Response>}
 */
export async function getRecipe(request: Request, response: Response): Promise<Response<any>> {
  const identifier = request.params.recipeId;

  return food.getRecipe(identifier)
      .then((data) => {
        return response.json(data);
      })
      .catch((error) => {
        // TODO: Handle error so we don't expose internal server errors to the user
        console.error(error);
        return response.status(500).json({error: error.message});
      });
}
