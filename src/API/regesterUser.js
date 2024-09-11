const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export const UserRegistration = async (name, email, resume) => {
    try {
        console.log('API-----> ', name, email, resume);

        if (resume.size > MAX_FILE_SIZE) {
            throw new Error("File size exceeds 10MB");
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('resume', resume);

        const response = await fetch('https://golaka-it-carrier-page.onrender.com/resume/upload', {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to upload');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
};
