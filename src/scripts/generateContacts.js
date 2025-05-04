import { createFakeContact } from "../utils/createFakeContact.js"
import { readContacts } from "../utils/readContacts.js"
import {writeContacts} from "../utils/writeContacts.js"

const generateContacts = async (number) => {
    try {
        const contacts = await readContacts();
        const newArray = [];
        for (let i = 0; i < number; i++){
            newArray.push(createFakeContact())
        }
        const addContacts = [...contacts, ...newArray]
        await writeContacts(addContacts);
        console.log(`adding ${number} of contacts`)
    } catch (error) {
      console.log(error.message)  
    }

};

generateContacts(5);
