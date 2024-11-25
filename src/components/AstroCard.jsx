import React from "react";
import { pramukh, manoj, rudrakh } from "../assets";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const AstroCard = () => {
  const astrologers = [
    {
      avatar: manoj,
      name: "Sri. Manoj Sastri",
      expertise: "Vedic, Numerology",
      languages: "Beng., Eng., Hindi",
      experience: "8 Years",
      rate: "₹ 21/min",
      button: "Call Now",
      rating: 5,
      chatLink: "https://t.ly/cMnKn",
      phone: "+91 8240060110",
    },
    {
      avatar: pramukh,
      name: "Pramukh Sastri",
      expertise: "Vastu, Vedic",
      languages: "Beng., Eng., Hindi",
      experience: "7 Years",
      rate: "₹ 31/min",
      button: "Call Now",
      rating: 4.5,
      chatLink: "https://wa.me/qr/L4VRGA5WDFCZC1",
      phone: "+91 7001492922",
    },
    {
      avatar: rudrakh,
      name: "Sri.Rudraksh Sastri",
      expertise: "Life Coach, Numerology",
      languages: "Beng., Eng., Hindi",
      experience: "6 Years",
      rate: "₹ 17/min",
      button: "Call Now",
      rating: 4,
      chatLink: "https://example-chat-url.com/rudrakh",
      phone: "+1122334455",
    },
    {
      avatar: manoj,
      name: "Sri. Manoj Sastri",
      expertise: "Vedic, Numerology",
      languages: "Beng., Eng., Hindi",
      experience: "8 Years",
      rate: "₹ 21/min",
      button: "Call Now",
      rating: 5,
      chatLink: "https://t.ly/cMnKn",
      phone: "+91 8240060110",
    },
    {
      avatar: pramukh,
      name: "Pramukh Sastri",
      expertise: "Vastu, Vedic",
      languages: "Beng., Eng., Hindi",
      experience: "7 Years",
      rate: "₹ 31/min",
      button: "Call Now",
      rating: 4.5,
      chatLink: "https://wa.me/qr/L4VRGA5WDFCZC1",
      phone: "+91 7001492922",
    },
    {
      avatar: rudrakh,
      name: "Sri.Rudraksh Sastri",
      expertise: "Life Coach, Numerology",
      languages: "Beng., Eng., Hindi",
      experience: "6 Years",
      rate: "₹ 17/min",
      button: "Call Now",
      rating: 4,
      chatLink: "https://example-chat-url.com/rudrakh",
      phone: "+1122334455",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} />);
    }

    return stars;
  };

  const handleChat = (chatLink) => {
    window.open(chatLink, "_blank");
  };
  const handleCall = (phone) => {
    window.open(`tel:${phone}`, "_self");
  }

  return (
    <div className="bg-gray-50 py-8 px-4 md:px-6 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {astrologers.map((astrologer, index) => (
          <div
            key={index}
            className="bg-pink-200 border grid grid-cols-2 rounded-lg shadow-md p-4 hover:bg-pink-300 transition duration-300 ease-in-out"
          >
            {/* Avatar */}
            <div className="w-16 h-16 mx-auto mt-4 bg-gray-200 rounded-full overflow-hidden">
              <img
                src={astrologer.avatar}
                alt={`${astrologer.name} Avatar`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-center text-sm font-bold mt-16">
              {astrologer.name}
            </h3>

            {/* Ratings */}
            <div className="flex justify-center items-center text-yellow-500 mt-2">
              {renderStars(astrologer.rating)}
            </div>

            {/* Expertise */}
            <p className="text-gray-600 text-xs text-center mt-1">
              {astrologer.expertise}
            </p>

            {/* Languages */}
            <p className="text-gray-600 text-xs text-center mt-1">
              {astrologer.languages}
            </p>

            {/* Experience */}
            <p className="text-gray-500 text-xs text-center mt-1">
              Exp: {astrologer.experience}
            </p>

            {/* Rate */}
            <p className="text-black font-semibold text-center mt-2">
              {astrologer.rate}
            </p>

            {/* Buttons */}
            <div className="mt-4 flex justify-center space-x-2">
              {/* Chat Button */}
              <button
                onClick={() => handleChat(astrologer.chatLink)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 text-xs rounded"
              >
                Chat
              </button>

              {/* Call Button */}
              <button
              onClick={() => handleCall(astrologer.callLink)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 text-xs rounded"
              >
                Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AstroCard;
