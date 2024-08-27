import MessageCard from "../../Components/MessageCard/MessageCard";
import { useMessagesContext } from "../../contexts/MessagesContext";
import { ContainerMessages, NoMessagesText } from "./Messages.styles";

const Messages = () => {
  const { messages } = useMessagesContext();
  return (
    <ContainerMessages>
      {messages.length > 0 ? (
        messages.map((msg) => (
          <MessageCard
            key={msg.id}
            name={msg.name}
            email={msg.email}
            message={msg.message}
            subject={msg.subject}
          />
        ))
      ) : (
        <NoMessagesText>No hay mensajes para mostrar</NoMessagesText>
      )}
    </ContainerMessages>
  );
};

export default Messages;
