"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Smile } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Image from "next/image";

const WHATSAPP_PHONE = "+212600000000"; // TODO: Replace with your WhatsApp number
const AGENT_NAME = "Essaouira Ride & Art";
const AGENT_AVATAR = "/images/logo.png"; // TODO: Replace with your avatar image

export function WhatsAppChatWidget({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const welcomeMessage = locale === "fr" 
    ? "Bonjour ! Comment puis-je vous aider ? 😊" 
    : "Hello! How can I help you? 😊";

  const headerText = locale === "fr" 
    ? "Discutons sur WhatsApp" 
    : "Let's chat on WhatsApp";

  const placeholderText = locale === "fr" 
    ? "Écrivez votre message..." 
    : "Write your message...";

  const handleSend = () => {
    if (message.trim()) {
      const url = buildWhatsAppUrl({ locale, customMessage: message.trim() });
      window.open(url, "_blank", "noopener,noreferrer");
      setMessage("");
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:bg-[#1ebe5b] hover:scale-105"
        aria-label="WhatsApp"
      >
        {!isOpen && (
          <>
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="hidden sm:inline text-sm font-semibold">
              {locale === "fr" ? "Contactez-nous" : "Contact us"}
            </span>
          </>
        )}
        {isOpen && <X className="h-6 w-6" />}
      </motion.button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[340px] overflow-hidden rounded-2xl bg-white shadow-2xl sm:w-[360px]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="flex-1 text-base font-semibold text-white">
                {headerText}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </button>
            </div>

            {/* Chat Body */}
            <div 
              className="relative min-h-[280px] bg-[#E5DDD5] p-4"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8c4bf' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              {/* Message Bubble */}
              <div className="flex items-start gap-2">
                <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-[#075E54]">
                  <div className="flex h-full w-full items-center justify-center text-white text-sm font-bold">
                    EA
                  </div>
                </div>
                <div className="relative max-w-[75%] rounded-lg rounded-tl-none bg-white px-3 py-2 shadow-sm">
                  <p className="text-sm text-gray-800">{welcomeMessage}</p>
                  <span className="mt-1 block text-right text-[10px] text-gray-400">
                    {new Date().toLocaleTimeString(locale === "fr" ? "fr-FR" : "en-US", { 
                      hour: "2-digit", 
                      minute: "2-digit" 
                    })}
                  </span>
                  {/* Bubble tail */}
                  <div className="absolute -left-2 top-0 h-0 w-0 border-r-8 border-t-8 border-r-white border-t-transparent" />
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="flex items-center gap-2 border-t border-gray-200 bg-[#F0F0F0] px-3 py-2">
              <button className="p-2 text-gray-500 transition-colors hover:text-gray-700">
                <Smile className="h-5 w-5" />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholderText}
                className="flex-1 rounded-full border-0 bg-white px-4 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#25D366]/50"
              />
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-all hover:bg-[#1ebe5b] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Close button when popup is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gray-600 text-white shadow-2xl transition-colors hover:bg-gray-700"
          >
            <X className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
