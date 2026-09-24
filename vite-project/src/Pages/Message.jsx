import { useState } from "react";
import {
    FiArrowLeft,
    FiMessageCircle,
    FiSend,
    FiUser
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Message.css";
function Message() {
    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "client",
            text: "Hello! I saw your profile and I'm interested in working with you."
        },
        {
            id: 2,
            sender: "me",
            text: "Hi! Thank you. I'd be happy to discuss the project with you."
        }
    ]);

    const handleSendMessage = (e) => {
        e.preventDefault();

        if (!message.trim()) {
            return;
        }

        const newMessage = {
            id: Date.now(),
            sender: "me",
            text: message.trim()
        };

        setMessages((previous) => [
            ...previous,
            newMessage
        ]);

        setMessage("");
    };

    return (
        <main className="message-page">
            <div className="message-container">

                <Link to="/dashboard" className="message-back">
                    <FiArrowLeft />
                    Back to Dashboard
                </Link>

                <section className="message-header">
                    <div>
                        <span className="message-label">
                            SkillBridge
                        </span>

                        <h1>Messages</h1>

                        <p>
                            Communicate with clients and manage your
                            project conversations.
                        </p>
                    </div>
                </section>

                <div className="message-layout">

                    {/* Conversations */}
                    <aside className="conversation-sidebar">

                        <div className="conversation-title">
                            <h2>Conversations</h2>
                            <span>1</span>
                        </div>

                        <button
                            type="button"
                            className="conversation-item active"
                        >
                            <div className="conversation-avatar">
                                <FiUser />
                            </div>

                            <div className="conversation-info">
                                <strong>SkillBridge Client</strong>

                                <p>
                                    I'm interested in working...
                                </p>
                            </div>
                        </button>

                    </aside>

                    {/* Chat */}
                    <section className="chat-section">

                        <div className="chat-header">

                            <div className="chat-user-avatar">
                                <FiUser />
                            </div>

                            <div>
                                <h2>SkillBridge Client</h2>
                                <span>
                                    Client
                                </span>
                            </div>

                        </div>

                        <div className="chat-messages">

                            {messages.map((item) => (
                                <div
                                    key={item.id}
                                    className={`chat-message ${
                                        item.sender === "me"
                                            ? "sent"
                                            : "received"
                                    }`}
                                >
                                    <div className="chat-message-bubble">
                                        {item.text}
                                    </div>
                                </div>
                            ))}

                        </div>

                        <form
                            className="chat-input-area"
                            onSubmit={handleSendMessage}
                        >

                            <input
                                type="text"
                                placeholder="Write a message..."
                                value={message}
                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }
                            />

                            <button
                                type="submit"
                                aria-label="Send message"
                            >
                                <FiSend />
                            </button>

                        </form>

                    </section>

                </div>

                <section className="message-empty-info">

                    <FiMessageCircle />

                    <div>
                        <h3>Keep your conversations professional</h3>

                        <p>
                            Use SkillBridge messages to discuss project
                            requirements, deadlines, and other important
                            details with clients.
                        </p>
                    </div>

                </section>

            </div>
        </main>
    );
}

export default Message;