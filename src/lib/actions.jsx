"use server";

export async function newsletterForm(formData) {
    try {
        const response = await fetch(
            `${process.env.API_BASE_URL}/newsletter/subscribe/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );
        const data = await response.json();
        if (response.status === 201) {
            return {
                status: response.status,
                message: data.message,
            };
        } else {
            return {
                status: response.status,
                message: data.message,
            };
        }
    } catch (error) {
        return {
            status: 500,
            message: "Something went wrong",
        };
    }
}

export async function CreateEventBooking(formData) {
    try {
        const response = await fetch(
            `${process.env.API_BASE_URL}/event-booking/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );
        const data = await response.json();
        if (response.status === 201) {
            return {
                status: response.status,
                message: data.message,
            };
        } else {
            return {
                status: response.status,
                message: data.message,
            };
        }
    } catch (error) {
        return {
            status: 500,
            message: "Something went wrong",
        };
    }
}

export async function CreateSponsorshipRequest(formData) {
    try {
        const response = await fetch(
            `${process.env.API_BASE_URL}/sponsorship/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }
        );
        const data = await response.json();
        if (response.status === 201) {
            return {
                status: response.status,
                message: data.message,
            };
        } else {
            return {
                status: response.status,
                message: data.message,
            };
        }
    } catch (error) {
        return {
            status: 500,
            message: "Something went wrong",
        };
    }
}
