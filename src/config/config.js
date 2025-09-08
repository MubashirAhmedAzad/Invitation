const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Wedding of Almas Banu & Mohammed Arif",
    // Opening message/description of the invitation
    description:
      "Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini.", // Nanti ini dibikin random
    // Groom's name
    groomName: "Mohammed Arif",
    // Bride's name
    brideName: "Almas Banu",
    // Groom's parents names
    parentGroom: "Mr. Mohammed Rafique Shah",
    // Bride's parents names
    parentBride: "Mohammed Anwar",
    // Wedding date (format: YYYY-MM-DD)
    date: "2025-09-28",
    // Google Maps link for location (short clickable link)
    maps_url: "https://maps.app.goo.gl/wbsg6sbCXC8zkFGy8",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.309827160367!2d74.5381748!3d13.9996342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc437dce233375%3A0x4a757cfb8e24b442!2sAmeer%20Hall!5e0!3m2!1sen!2sin!4v1757323017533!5m2!1sen!2sin",
    // Event time (free format, example: "10:00 - 12:00 WIB")
    time: "11:30 AM IST",
    // Venue/building name
    location: "Ameer Hall",
    // Full address of the wedding venue
    address: "YMSA ground, Nawayath Coloney, Bhatkal -581320, Karnataka, India",
    // Image that appears when link is shared on social media
    ogImage: "/images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "/images/favicon.ico",
    // List of event agenda/schedule
    agenda: [
      {
        // First event name
        title: "Pre-Wedding celebration (Baitak)",
        // Event date (format: YYYY-MM-DD)
        date: "2025-09-07",
        // Start time (format: HH:MM)
        startTime: "09:00 PM",
        // End time (format: HH:MM)
        //endTime: "17:30",
        // Event venue
        location: "Ameer Hall",
        // Full address
        address: "YMSA ground, Nawayath Coloney, Bhatkal -581320, Karnataka, India",
      },
      {
        // Second event name
        title: "Nikhah Ceremony",
        date: "2025-09-28",
        startTime: "11:30 AM",
        //endTime: "17:30",
        location: "Ameer Hall",
        // Full address
        address: "YMSA ground, Nawayath Coloney, Bhatkal -581320, Karnataka, India",
      }
      // You can add more agenda items with the same format
    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "/audio/wedding.mp3", // or /audio/nature-sound.mp3
      // Music title to display
      title: "Bi Saraha", // or Nature Sound
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true
    },

    // List of bank accounts for digital envelope/gifts
    banks: [
      {
        // Bank name
        bank: "Bank Central Asia",
        // Account number
        accountNumber: "1234567890",
        // Account holder name (all uppercase)
        accountName: "FULAN",
      },
      {
        bank: "Bank Mandiri",
        accountNumber: "0987654321",
        accountName: "FULANA",
      }
      // You can add more banks with the same format
    ]
  }
};

export default config;