export const login_fetch = async (username, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/${username}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                // username: username,
                password: password,
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const signup_fetch = async (username, password, fname, sname, email) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                firstname: fname,
                surname: sname,
                email: email,
                password: password,
                status: ""
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const createNewJobFetch = async (clientname, description, salary, phonenumber, email, language) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}jobs`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                clientname: clientname,
                contact_number: phonenumber,
                email: email,
                language: language,
                pay_range: salary,
                job_description: description,
                dev_name: ""     
            }),
        });
        const data = await response.json();
        return data   
    } catch (error){
        console.log(error);
    }
}


export const listedJobsFetch = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}jobs`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        });
        const data = await response.json();
        // console.log(data);        
        return data;
    } catch (error){
        console.log(error);
    }
}

export const availableJobsFetch = async (username) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}jobs/${username}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                dev_name: ""
            })
        });
        const data = await response.json();
        // console.log(data);        
        return data;
    } catch (error){
        console.log(error);
    }
}

export const appliedJobsFetch = async (username) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}jobs/${username}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        });
        const data = await response.json();
        // console.log(data);        
        return data;
    } catch (error){
        console.log(error);
    }
}

export const devnameFetch = async (username, id) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}jobs/${username}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                _id: id,
                dev_name: username
            })
        });
        const data = await response.json();
        // console.log(data);        
        return data;
    } catch (error){
        console.log(error);
    }
}

export const removeJobsFetch = async (id) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}jobs/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                _id: id,
                dev_name: ""
            })
        });
        const data = await response.json();
        // console.log(data);        
        return data;
    } catch (error){
        console.log(error);
    }
}

export const updateUserFetch = async (username, password, email) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

/*
export const deleteUserFetch = async (username) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/${username}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }, 
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
*/

export const userFetch = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        });
        const data = await response.json();
        // console.log(data);        
        return data;
    } catch (error){
        console.log(error);
    }
}

export const adminFetch = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/admin`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        });
        const data = await response.json();
        // console.log(data);        
        return data;
    } catch (error){
        console.log(error);
    }
}

export const developerFetch = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/dev`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        });
        const data = await response.json();
        // console.log(data);        
        return data;
    } catch (error){
        console.log(error);
    }
}

export const deleteFetch = async (id) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}jobs`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                _id: id,
            })
        });
        const data = await response.json();
        // console.log(data);        
        return data;
    } catch (error){
        console.log(error);
    }
}
