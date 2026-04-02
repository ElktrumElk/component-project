
export default async function render({
    components = null,
    id = ''
}) {
    console.log(components)
    if (components === null) {
        document.body.innerHTML = "Invalid component"
        return false;
    }
    else {
        if (id === '') {
            components.forEach(async _cmp => {
                document.body.appendChild(_cmp);
            })
        } else {
            components.forEach(async _cmp => {
                try {
                    // Check if element exists before trying to append
                    const targetElement = document.getElementById(id);
                    if (!targetElement) {
                        throw new Error(`Element with id '${id}' not found in DOM`);
                    }
                    targetElement.appendChild(_cmp);
                }
                catch (e) {
                    console.error(`Error appending component to ${id}:`, e);
                    document.body.innerHTML = "Error: Frame not found!";
                }
            })
        }
    }
}

export async function insert({
    components = null,
    id = null,
    pos = "before",
    
}) {

    if (components !== null && id !== null) {
        components.forEach(_cmp => {
        
            document.getElementById(id)[`${pos}`](_cmp);
        })
    } else {
        document.body.innerHTML = "Invalid arguments. Required atleast 2 argumants"
    }
}