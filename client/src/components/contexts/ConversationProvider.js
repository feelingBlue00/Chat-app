import React, { useContext, useState, useEffect, useCallbacks } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useContacts } from "./ContactsProvider";

const ConversationContext = React.createContext();

export function useConversation() {
  return useContext(ConversationContext);
}

export default function ConversationProvider({ id, children }) {
  const [conversations, setConversations] = useState();
}
