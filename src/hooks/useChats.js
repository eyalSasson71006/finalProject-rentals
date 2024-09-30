import { useCallback, useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";
import useAxios from "./useAxios";
import { useSnack } from "../providers/SnackbarProvider";
import { getChatById, getMyChats } from "../chat/services/chatsApiService";
import { useChatProvider } from "../providers/ChatProvider";

export default function useChats() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const { setChats, setCurrentChat } =
        useChatProvider();
    const setSnack = useSnack();

    useAxios();

    const getChat = useCallback(async (id) => {
        setIsLoading(true);
        setError(null);
        try {
            let chat = await getChatById(id);
            setCurrentChat(chat);
            setIsLoading(false);
            return chat;
        } catch (error) {
            setSnack("error", error.message);
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    const handleGetMyChats = useCallback(async (id) => {
        setIsLoading(true);
        setError(null);
        try {
            let chats = await getMyChats();
            setChats(chats);
            setIsLoading(false);
            return chats;
        } catch (error) {
            setSnack("error", error.message);
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        getChat,
        handleGetMyChats
    };
}