import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti';
import Marquee from "@/components/ui/marquee";
import {
    Calendar,
    Clock,
    ChevronDown,
    User,
    MessageCircle,
    Send,
    Smile,
    CheckCircle,
    XCircle,
    HelpCircle,
} from 'lucide-react'
import { useState } from 'react';
import { formatEventDate } from '@/lib/formatEventDate';

export default function Wishes() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [name, setName] = useState(''); // <-- Add state for name
    const [newWish, setNewWish] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [attendance, setAttendance] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        { value: 'attending', label: 'Yes, I will attend' },
        { value: 'not-attending', label: 'No, I cannot attend' },
        { value: 'maybe', label: 'Maybe, I will confirm later' }
    ];

    const [wishes, setWishes] = useState([
      {
        id: 1,
        name: "Azeem Shaik",
        message: "Wishing you both a lifetime of love, laughter, and happiness! 🎉",
        timestamp: "2024-12-26T10:00:00Z",
        attending: "attending"
      },
      {
        id: 2,
        name: "Shoukat",
        message: "Congratulations on your special day! May Allah bless your union! 🤲",
        timestamp: "2024-12-26T10:05:00Z",
        attending: "attending"
      },
      {
        id: 3,
        name: "Apsar",
        message: "Best wishes for a wonderful journey ahead together 💐",
        timestamp: "2024-12-26T10:10:00Z",
        attending: "maybe"
      },
      {
        id: 4,
        name: "Sadath",
        message: "May your marriage be filled with joy, peace, and endless blessings 🌸",
        timestamp: "2024-12-26T10:15:00Z",
        attending: "attending"
      },
      {
        id: 5,
        name: "Shareef",
        message: "Congratulations! Wishing you both love and happiness always 💞",
        timestamp: "2024-12-26T10:20:00Z",
        attending: "attending"
      },
      {
        id: 6,
        name: "Jabiulla",
        message: "May your bond be blessed with faith, love, and happiness 🤲",
        timestamp: "2024-12-26T10:25:00Z",
        attending: "attending"
      },
      {
        id: 7,
        name: "Nisar",
        message: "Wishing you endless love and a beautiful life together ❤",
        timestamp: "2024-12-26T10:30:00Z",
        attending: "maybe"
      },
      {
        id: 8,
        name: "Wazeer",
        message: "Mabrook! May Allah grant you barakah in your marriage 🌙",
        timestamp: "2024-12-26T10:35:00Z",
        attending: "attending"
      },
      {
        id: 9,
        name: "Areef",
        message: "Wishing you both a happy married life filled with blessings 💐",
        timestamp: "2024-12-26T10:40:00Z",
        attending: "attending"
      },
      {
        id: 10,
        name: "Asif",
        message: "Congratulations! May your union be filled with love and laughter 🎊",
        timestamp: "2024-12-26T10:45:00Z",
        attending: "attending"
      },
      {
        id: 11,
        name: "Gulzar",
        message: "Wishing you both a lifetime of joy and endless happiness 😊",
        timestamp: "2024-12-26T10:50:00Z",
        attending: "attending"
      },
      {
        id: 12,
        name: "Umar",
        message: "May Allah bless your marriage with love, harmony, and happiness 🤲",
        timestamp: "2024-12-26T10:55:00Z",
        attending: "maybe"
      },
      {
        id: 13,
        name: "Fazil",
        message: "Best wishes on this wonderful journey as you build your new lives together 🌸",
        timestamp: "2024-12-26T11:00:00Z",
        attending: "attending"
      },
      {
        id: 14,
        name: "Mubashir",
        message: "May your love grow stronger each and every year 💞",
        timestamp: "2024-12-26T11:05:00Z",
        attending: "attending"
      },
      {
        id: 15,
        name: "Sameer",
        message: "Congratulations on your marriage! Wishing you joy and love always 🎉",
        timestamp: "2024-12-26T11:10:00Z",
        attending: "attending"
      }
    ]);

    const handleSubmitWish = async (e) => {
        e.preventDefault();
        if (!newWish.trim() || !name.trim() || !attendance) return;

        setIsSubmitting(true);
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newWishObj = {
            id: wishes.length + 1,
            name: name, // Use entered name
            message: newWish,
            attending: attendance, // Use selected attendance
            timestamp: new Date().toISOString()
        };

        setWishes(prev => [newWishObj, ...prev]);
        setName('');
        setNewWish('');
        setAttendance('');
        setIsSubmitting(false);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
    };
    const getAttendanceIcon = (status) => {
        switch (status) {
            case 'attending':
                return <CheckCircle className="w-4 h-4 text-emerald-500" />;
            case 'not-attending':
                return <XCircle className="w-4 h-4 text-rose-500" />;
            case 'maybe':
                return <HelpCircle className="w-4 h-4 text-amber-500" />;
            default:
                return null;
        }
    };
    return (<>
        <section id="wishes" className="min-h-screen relative overflow-hidden">
            {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-4 mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block text-rose-500 font-medium"
                    >
                        Send love and blessings 
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-serif text-gray-800"
                    >
                        Warm Wishes
                    </motion.h2>

                    {/* Decorative Divider */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-4 pt-4"
                    >
                        <div className="h-[1px] w-12 bg-rose-200" />
                        <MessageCircle className="w-5 h-5 text-rose-400" />
                        <div className="h-[1px] w-12 bg-rose-200" />
                    </motion.div>
                </motion.div>

                {/* Wishes List */}
                <div className="max-w-2xl mx-auto space-y-6">
                    <AnimatePresence>
                        <Marquee
                            speed={5} // Slower speed (default was 20)
                            gradient={false}
                            pauseOnHover={true} // Pause when hovered
                            className="[--duration:40s] py-2"
                        >
                            {wishes.map((wish, index) => (
                                <motion.div
                                    key={wish.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative w-[280px]"
                                >
                                    {/* Background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-xl transform transition-transform group-hover:scale-[1.02] duration-300" />

                                    {/* Card content */}
                                    <div className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-rose-100/50 shadow-md">
                                        {/* Header */}
                                        <div className="flex items-start space-x-3 mb-2">
                                            {/* Avatar */}
                                            <div className="flex-shrink-0">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
                                                    {wish.name[0].toUpperCase()}
                                                </div>
                                            </div>

                                            {/* Name, Time, and Attendance */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center space-x-2">
                                                    <h4 className="font-medium text-gray-800 text-sm truncate">
                                                        {wish.name}
                                                    </h4>
                                                    {getAttendanceIcon(wish.attending)}
                                                </div>
                                                <div className="flex items-center space-x-1 text-gray-500 text-xs">
                                                    <Clock className="w-3 h-3" />
                                                    <time className="truncate">
                                                        {formatEventDate(wish.timestamp)}
                                                    </time>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-3">
                                            {wish.message}
                                        </p>

                                        {/* Optional: Time indicator for recent messages */}
                                        {Date.now() - new Date(wish.timestamp).getTime() < 3600000 && (
                                            <div className="absolute top-2 right-2">
                                                <span className="px-2 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-medium">
                                                    New
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </Marquee>
                    </AnimatePresence>
                </div>
                {/* Wishes Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto mt-12"
                >
                    <form onSubmit={handleSubmitWish} className="relative">
                        <div className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-rose-100/50 shadow-lg">
                            <div className='space-y-2'>
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                                        <User className="w-4 h-4" />
                                        <span>Your Name</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name..."
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700 placeholder-gray-400"
                                        required
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                {/* Attendance Select */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="space-y-2 relative"
                                >
                                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>Attending Status?</span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all duration-200 text-left flex items-center justify-between"
                                    >
                                        <span className={attendance ? 'text-gray-700' : 'text-gray-400'}>
                                            {attendance ?
                                                options.find(opt => opt.value === attendance)?.label
                                                : 'Choose Option...'}
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg border border-rose-100 overflow-hidden"
                                            >
                                                {options.map((option) => (
                                                    <motion.button
                                                        key={option.value}
                                                        type="button"
                                                        onClick={() => {
                                                            setAttendance(option.value);
                                                            setIsOpen(false);
                                                        }}
                                                        whileHover={{ backgroundColor: 'rgb(255, 241, 242)' }}
                                                        className={`w-full px-4 py-2.5 text-left transition-colors
                                        ${attendance === option.value
                                                                ? 'bg-rose-50 text-rose-600'
                                                                : 'text-gray-700 hover:bg-rose-50'
                                                            }`}
                                                    >
                                                        {option.label}
                                                    </motion.button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                                {/* Wish Textarea */}
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Your Wishes</span>
                                    </div>
                                    <textarea
                                        placeholder="Send your wishes and prayers for the Bride and Groom..."
                                        className="w-full h-32 p-4 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 resize-none transition-all duration-200"
                                        required
                                        value={newWish}
                                        onChange={e => setNewWish(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center space-x-2 text-gray-500">
                                    <Smile className="w-5 h-5" />
                                    <span className="text-sm">Well Wishes</span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-white font-medium transition-all duration-200
                    ${isSubmitting
                                            ? 'bg-gray-300 cursor-not-allowed'
                                            : 'bg-rose-500 hover:bg-rose-600'}`}
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    <Send className="w-4 h-4" />
                                    <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
                                </motion.button>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    </>)
}
