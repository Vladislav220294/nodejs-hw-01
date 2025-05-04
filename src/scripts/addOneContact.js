import { createFakeContact } from "../utils/createFakeContact.js"
import { readContacts } from "../utils/readContacts.js"
import {writeContacts} from "../utils/writeContacts.js"

export const addOneContact = async () => { 
    try {
        const contacts = await readContacts();
        const newContact = createFakeContact();
        
        const newContacts = [...contacts, ...[newContact]]
        await writeContacts(newContacts);
        console.log(newContact)
    } catch (error) {
        console.log(error.message) 
    }
};

addOneContact();
