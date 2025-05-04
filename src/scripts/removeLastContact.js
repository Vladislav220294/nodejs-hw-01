import { readContacts } from "../utils/readContacts.js"
import { writeContacts } from "../utils/writeContacts.js"

export const removeLastContact = async () => { 
    try {
        const contacts = await readContacts();
    if (contacts.length > 0) {
        const removedLastContact = contacts.pop();
        
        await writeContacts(contacts);
        console.log("removed last contact:", removedLastContact);
    }
    } catch (error) {
        console.log(error.message);
    }
    
    
    
};

removeLastContact();
