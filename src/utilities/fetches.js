export const login_fetch = async (username, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/${username}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
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
                job_description: description     
            }),
        });
        const data = await response.json();
        return data   
    } catch (error){
        console.log(error);
    }
}

export const loadJobsFetch = async (clientname, description, salary, phonenumber, email, language) => {

export const listedJobsFetch = async (setClientName, setDescription, setSalary, setPhoneNumber, setEmail, setLanguage) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}jobs`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                clientname: clientname,
                contact_number: phonenumber,
                email: email,
                language: language,
                pay_range: salary,
                job_description: description     
            }),
        });
        const data = await response.json();
        return data   
        });
        const data = await response.json();
        setClientName(data.jobs.clientname);
        setDescription(data.jobs.description);
        setSalary(data.jobs.salary);
        setPhoneNumber(data.jobs.phonenumber);
        setEmail(data.jobs.email);
        setLanguage(data.jobs.language);  
    } catch (error){
        console.log(error);
    }
}