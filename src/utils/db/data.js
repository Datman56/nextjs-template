import { connection } from "./config";

export const getItems = async() => {
    try {
        const res = await connection.query(SELECT * FROM `portfolio` )
        console.log(res);

        return res;
    } catch (error) {
        console.log(error);
    }
}