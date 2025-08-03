"use client";

import { useTour } from "../hooks/useTour";
import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Function to sort tour dates by date
const sortTourDatesByDate = (tourDates) => {
  return tourDates.sort((a, b) => {
    const monthNames = {
      january: 0,
      february: 1,
      march: 2,
      april: 3,
      may: 4,
      june: 5,
      july: 6,
      august: 7,
      september: 8,
      october: 9,
      november: 10,
      december: 11,
    };

    // Extract day number (remove 'th', 'st', 'nd', 'rd')
    const dayA = parseInt(a.content.day.replace(/\D/g, ""));
    const dayB = parseInt(b.content.day.replace(/\D/g, ""));

    // Get month index
    const monthA = monthNames[a.content.month.toLowerCase()];
    const monthB = monthNames[b.content.month.toLowerCase()];

    // Create date objects for comparison (using current year as default)
    const currentYear = new Date().getFullYear();
    const dateA = new Date(currentYear, monthA, dayA);
    const dateB = new Date(currentYear, monthB, dayB);

    return dateA - dateB; // Changed back to ascending order (earliest first)
  });
};

export default function Tour() {
  const { data: tourDates, isLoading } = useTour();
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  // Sort tour dates before rendering
  const sortedTourDates = tourDates ? sortTourDatesByDate([...tourDates]) : [];

  // Handle screen size changes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 375); // Button goes underneath
      setIsSmallMobile(window.innerWidth < 425); // Button gets smaller
    };

    // Set initial value
    checkScreenSize();

    // Create resize observer
    const resizeObserver = new ResizeObserver(() => {
      checkScreenSize();
    });

    // Observe the body element
    resizeObserver.observe(document.body);

    // Also listen to window resize as backup
    window.addEventListener("resize", checkScreenSize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Calculate pagination based on screen size
  const actualItemsPerPage = isMobile ? 2 : 4;
  const totalPages = Math.ceil(sortedTourDates.length / actualItemsPerPage);

  console.log("Total Pages:", totalPages);

  // Reset to first page when screen size changes
  useEffect(() => {
    setCurrentPage(0);
  }, [isMobile]);

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="page-section third" id="Tour">
      <div className="flex items-center justify-between px-6 pt-24">
        <h2 className="text-brown text-2xl sm:text-3xl font-semibold">TOUR</h2>
        <div className="flex gap-4">
          <button
            onClick={goToPrevPage}
            className="text-brown hover:text-brown/70 transition-colors p-2 disabled:text-brown/20"
            disabled={totalPages <= 1}
          >
            <AiOutlineLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={goToNextPage}
            className="text-brown hover:text-brown/70 transition-colors p-2 disabled:text-brown/20"
            disabled={totalPages <= 1}
          >
            <AiOutlineRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
      <div className="pt-6 overflow-hidden">
        <div className="relative w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              return (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6">
                    {isLoading ? (
                      <p>Loading tour dates...</p>
                    ) : (
                      sortedTourDates
                        .slice(
                          pageIndex * actualItemsPerPage,
                          pageIndex * actualItemsPerPage + actualItemsPerPage
                        )
                        .map((tour) => {
                          const content = tour.content;
                          console.log("Tour Dates:", content.tickets.url);

                          return (
                            <div
                              key={tour.id}
                              className="bg-brown border-2 border-white text-white p-4 sm:p-6 rounded-lg flex items-center gap-1 justify-between"
                            >
                              <div className="flex items-center gap-4 sm:gap-6 w-full">
                                <div className="border-2 border-white rounded-lg p-3 sm:p-4 text-center min-w-[80px] sm:min-w-[100px]">
                                  <div className="text-white text-xs sm:text-sm uppercase truncate">
                                    {content.month}
                                  </div>
                                  <div className="text-2xl sm:text-4xl font-bold">
                                    {content.day}
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                  <h3
                                    className={`text-lg sm:text-xl font-semibold mb-1 ${
                                      isMobile ? "text-center" : "text-left"
                                    }`}
                                  >
                                    {content.venue}
                                  </h3>
                                  <p
                                    className={`text-white text-sm sm:text-base mb-3 sm:mb-0 ${
                                      isMobile ? "text-center" : "text-left"
                                    }`}
                                  >
                                    {content.location}
                                  </p>
                                  <div
                                    className={`flex ${
                                      isMobile
                                        ? "justify-center"
                                        : "justify-start"
                                    }`}
                                    style={{
                                      display: isMobile ? "flex" : "none",
                                    }}
                                  >
                                    {content.tickets?.url ? (
                                      <a
                                        href={content.tickets.url}
                                        className="border-2 border-white px-4 py-1 rounded-full hover:bg-white hover:text-brown transition-colors text-sm"
                                      >
                                        Tickets
                                      </a>
                                    ) : (
                                      <div className="border-2 text-center border-white px-4 py-1 rounded-full text-sm cursor-default">
                                        Free Entry
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              {content.tickets?.url ? (
                                <a
                                  href={content.tickets.url}
                                  className={`border-2 border-white rounded-full hover:bg-white hover:text-brown transition-colors text-base ${
                                    isSmallMobile
                                      ? "px-4 py-1 text-sm"
                                      : "px-6 py-2"
                                  }`}
                                  style={{
                                    display: isMobile ? "none" : "block",
                                  }}
                                >
                                  Tickets
                                </a>
                              ) : (
                                <div
                                  className={`border-2 border-white text-center rounded-full text-base cursor-default ${
                                    isSmallMobile
                                      ? "px-4 py-1 text-sm"
                                      : "px-6 py-2"
                                  }`}
                                  style={{
                                    display: isMobile ? "none" : "block",
                                  }}
                                >
                                  Free Entry
                                </div>
                              )}
                            </div>
                          );
                        })
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
