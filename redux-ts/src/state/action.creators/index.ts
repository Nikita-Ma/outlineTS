import axios from "axios";
import {ActionType} from "../action-types";
import {Action} from "../actions";

const searchRepositories = (term: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })
        try {
            const {data} = await axios.get(`http://registry.npmjs.org/-/v1/search`, {
                params: {
                    text: term
                }
            })

            const names = data.objects.map((result) => {
                return result.package.name
            })

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })

        } catch (error) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: error.message
            })
        }
    }
}

