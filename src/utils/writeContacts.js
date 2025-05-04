import * as fs from "node:fs/promises"
import { PATH_DB } from '../constants/contacts.js';


export const writeContacts = async (updatedContacts) => {
    try {
        const data = JSON.stringify(updatedContacts, undefined, 2)
        await fs.writeFile(PATH_DB, data, { encoding: "utf-8" });
        
    } catch (error) {
        throw new Error("Error");
        
    }
};
