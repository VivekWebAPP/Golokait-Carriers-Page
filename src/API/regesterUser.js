const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export const UserRegistration = async (name, email, resume) => {
    try {

        if (resume.size > MAX_FILE_SIZE) {
            throw new Error("File size exceeds 10MB");
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('resume', resume);

        const response = await fetch('https://golaka-it-carrier-page.onrender.com/resume/upload', {
            method: "POST",
            mode: "cors",
            body: formData,
        });

        const data = await response.json();

        if(data.error){
            throw new Error(data.error);
        }

        return data;

    } catch (error) {
        console.error(error.message);
        return error;
    }
};
