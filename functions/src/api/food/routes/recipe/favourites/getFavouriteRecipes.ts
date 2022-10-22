import {Request, Response} from "express";

import * as favourites from "@api/food/favourites";

/**
 *
 * @param {Request} request
 * @param {Response} response
 * @return {Promise<Response>}
 */
export async function getFavouriteRecipes(request: Request, response: Response): Promise<Response> {
  const userId = request.user.userId;

  return favourites.getFavouriteRecipe(userId)
      .then(() => {
        return response.json({message: "Successfully added recipe to favourites"});
      })
      .catch((error) => {
        return response.status(500).json({error: error.message});
      });
}
