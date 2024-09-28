import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useSnack } from '../providers/SnackbarProvider';

export default function useEmail() {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    const setSnack = useSnack();
    const [loading, setLoading] = useState(false);
    const sendEmail = async (templateParams) => {
        setLoading(true);
        try {
            const result = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                userId
            );
            setSnack("success", 'Email sent successfully!');
            console.log(result.text);
        } catch (error) {
            console.log(error.text);
            setSnack("error", 'Failed to send email.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (data) => {
        sendEmail(data);
    };

    return { sendEmail, handleSubmit, loading };
};