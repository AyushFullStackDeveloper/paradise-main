 const trips = {
            1: {
                title: "Wilpattu Leopard Paradise",
                price: "LKR 26,500 Per Person",
                image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800",
                itinerary: [
                    "Day 1: Transfer to Wilpattu and check-in at park dormitory",
                    "Evening game drive focusing on leopard territories",
                    "Day 2: Dawn safari and wildlife photography session",
                    "Return transfer to your accommodation"
                ],
                highlights: [
                    "Highest chance of leopard sightings",
                    "Overnight stay inside the national park",
                    "Professional wildlife photography guidance",
                    "Expert naturalist guides"
                ],
                includes: [
                    "Transportation to and from Wilpattu",
                    "One night park accommodation",
                    "All meals and refreshments",
                    "Park entry fees and safari jeep",
                    "Professional guide and photography tips"
                ]
            },
            2: {
                title: "Ultimate Wildlife Expedition",
                price: "LKR 415,000 Per Person",
                image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800",
                itinerary: [
                    "Day 1: Arrival and transfer to Yala region",
                    "Day 2-3: Full day Yala safaris",
                    "Day 4-5: Udawalawe elephant encounters",
                    "Day 6: Bundala bird watching",
                    "Day 7: Cultural sites and departure"
                ],
                highlights: [
                    "Multi-park safari experience",
                    "Luxury resort accommodations",
                    "Guaranteed elephant encounters",
                    "Comprehensive bird watching",
                    "Cultural heritage visits"
                ],
                includes: [
                    "Airport transfers and transportation",
                    "6 nights luxury accommodation",
                    "All meals and special dietary needs",
                    "All park entries and fees",
                    "Air-conditioned safari vehicles",
                    "Travel insurance included"
                ]
            },
            3: {
                title: "Exclusive Walking Safari",
                price: "LKR 35,000 Per Person",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
                itinerary: [
                    "Early morning briefing and safety protocols",
                    "Guided nature walk through forest trails",
                    "Wildlife tracking with expert guides",
                    "Traditional bush lunch preparation",
                    "Afternoon photography and final encounters"
                ],
                highlights: [
                    "Intimate on-foot wildlife encounters",
                    "Expert indigenous tracker guides",
                    "Small groups (max 8 people)",
                    "Traditional bush lunch experience",
                    "Educational flora and fauna interpretation"
                ],
                includes: [
                    "Professional walking safari guide",
                    "All permits and conservation fees",
                    "Traditional bush lunch and refreshments",
                    "Photography guidance",
                    "Safety equipment and first aid",
                    "Transportation to forest reserve"
                ]
            }
        };

        function openModal(tripId) {
            const trip = trips[tripId];
            const modal = document.getElementById('modal');

            document.getElementById('modalImage').src = trip.image;
            document.getElementById('modalTitle').textContent = trip.title;
            document.getElementById('modalPrice').textContent = trip.price;

            const itineraryList = document.getElementById('modalItinerary');
            itineraryList.innerHTML = trip.itinerary.map(item => `<li>${item}</li>`).join('');

            const highlightsList = document.getElementById('modalHighlights');
            highlightsList.innerHTML = trip.highlights.map(item => `<li>${item}</li>`).join('');

            const includesList = document.getElementById('modalIncludes');
            includesList.innerHTML = trip.includes.map(item => `<li>${item}</li>`).join('');

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function bookTrip() {
            alert('Thank you for your interest! Call +94 77 224 30 00 or email info@wildsafari.lk to complete your booking.');
        }

        // Close modal when clicking outside
        window.onclick = function (event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        document.addEventListener('DOMContentLoaded', () => {
            let lastScrollY = window.scrollY;
            let ticking = false;

            // Sticky Navigation Handler
            const navContainer = document.getElementById("bottomNav");
            function handleStickyNav() {
                if (!navContainer) return;

                const currentScrollY = window.scrollY;
                const isScrollingDown = currentScrollY > lastScrollY;

                if (currentScrollY > 100) {
                    navContainer.classList.add("top");
                    navContainer.style.transform =
                        isScrollingDown && currentScrollY > 200
                            ? "translateY(-100%)"
                            : "translateY(0)";
                } else {
                    navContainer.classList.remove("top");
                    navContainer.style.transform = "translateY(0)";
                }

                lastScrollY = currentScrollY;
            }

            // Ripple + Active + Navigation Handler
            const navItems = document.querySelectorAll(".nav-item");
            navItems.forEach((item) => {
                item.addEventListener("click", (e) => {
                    e.preventDefault();
                    const href = item.getAttribute("href");

                    // Ripple effect
                    const ripple = document.createElement("span");
                    const rect = item.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);

                    Object.assign(ripple.style, {
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${e.clientX - rect.left - size / 2}px`,
                        top: `${e.clientY - rect.top - size / 2}px`,
                        position: "absolute",
                        background: "rgba(74, 222, 128, 0.4)",
                        borderRadius: "50%",
                        transform: "scale(0)",
                        animation: "ripple 0.6s linear",
                        pointerEvents: "none",
                        zIndex: "10",
                    });

                    item.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 600);

                    navItems.forEach((nav) => nav.classList.remove("active"));
                    item.classList.add("active");

                    // Delay navigation to let ripple show
                    setTimeout(() => {
                        window.location.href = href;
                    }, 100);
                });
            });

            // Scroll Listener for Sticky Nav Only
            window.addEventListener("scroll", () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        handleStickyNav();
                        ticking = false;
                    });
                    ticking = true;
                }
            });
        });
