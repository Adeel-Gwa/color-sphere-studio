import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/923001234567"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-sky flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-6 w-6 text-primary-foreground" />
  </motion.a>
);

export default WhatsAppButton;
