// Loading animation
window.addEventListener('load', function() {
    let loadingBar = document.getElementById('loading-bar');
    let loading = document.getElementById('loading');
    
    let width = 0;
    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            loading.style.opacity = '0';
            setTimeout(function() {
                loading.style.display = 'none';
            }, 500);
        } else {
            width += 25; // Increase the width by 33.33% every 200ms
            loadingBar.style.width = width + '%';
        }
    }, 100);
});

// Typewriter effect
const typewriter = new Typewriter('#typewriter', {
    loop: true,
    delay: 75,
});

typewriter
    .typeString('AI Engineer')
    .pauseFor(1000)
    .deleteChars(15)
    .typeString('AI addiction')
    .pauseFor(1000)
    .deleteChars(25)
    .typeString('Optimization devotee')
    .pauseFor(1000)
    .start();

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const html = document.documentElement;

function toggleTheme() {
    if (html.classList.contains('light-mode')) {
        html.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        `;
        themeToggleMobile.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        `;
    } else {
        html.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        `;
        themeToggleMobile.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        `;
    }
}

// Check for saved theme preference
if (localStorage.getItem('theme') === 'light') {
    html.classList.add('light-mode');
    themeToggle.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    `;
    themeToggleMobile.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    `;
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);

// Language toggle
const languageToggle = document.getElementById('language-toggle');
const languageToggleMobile = document.getElementById('language-toggle-mobile');
let currentLanguage = localStorage.getItem('language') || 'vi';

function updateLanguage() {
    const nav_elements = document.querySelectorAll('.nav-link');
    nav_elements.forEach(el => {
        const text = el.getAttribute(`data-${currentLanguage}`);
        if (text) el.textContent = text;
    });

    const elements = document.querySelectorAll('.i18n');
    elements.forEach(el => {
        const text = el.getAttribute(`data-${currentLanguage}`);
        if (text) el.textContent = text;
    });
    
    // Update typewriter effect based on language
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        typewriterElement.innerHTML = '';
        const newTypewriter = new Typewriter('#typewriter', {
            loop: true,
            delay: 75,
        });
        
        if (currentLanguage === 'vi') {
            newTypewriter
                .typeString('Kỹ sư AI')
                .pauseFor(1000)
                .deleteChars(10)
                .typeString('Nghiện AI')
                .pauseFor(1000)
                .deleteChars(20)
                .typeString('Tín đồ tối ưu')
                .pauseFor(1000)
                .start();
        } else {
            newTypewriter
                .typeString('AI Engineer')
                .pauseFor(1000)
                .deleteChars(15)
                .typeString('AI addiction')
                .pauseFor(1000)
                .deleteChars(25)
                .typeString('Optimization devotee')
                .pauseFor(1000)
                .start();
        }
    }
    
    // Update loading text
    const loadingText = document.getElementById('loading-text');
    const loadingSubtext = document.getElementById('loading-subtext');
    if (loadingText && loadingSubtext) {
        loadingText.textContent = currentLanguage === 'vi' ? 'Đang tải hệ thống...' : 'Loading system...';
        loadingSubtext.textContent = currentLanguage === 'vi' ? 'Khởi động AI Engine...' : 'Starting AI Engine...';
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'vi' ? 'en' : 'vi';
    localStorage.setItem('language', currentLanguage);
    updateLanguage();
    
    // Update toggle switch position
    languageToggle.checked = currentLanguage === 'en';
    languageToggleMobile.checked = currentLanguage === 'en';
}

// Initialize language
if (currentLanguage === 'en') {
    languageToggle.checked = true;
    languageToggleMobile.checked = true;
}
updateLanguage();

languageToggle.addEventListener('change', toggleLanguage);
languageToggleMobile.addEventListener('change', toggleLanguage);

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("language-toggle");
    const textElement = document.querySelector(".i18n");

    function updateTextSize() {
        if (textElement.getAttribute("data-vi") === textElement.innerText) {
            textElement.style.fontSize = "0.8em"; // Smaller size for Vietnamese
        } else {
            textElement.style.fontSize = "1em"; // Default size for English
        }
    }

    langToggle.addEventListener("change", updateTextSize);
    updateTextSize(); // Ensure it updates on page load
});

// Particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#00f0ff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 5,
                "size_min": 0.5,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00f0ff",
            "opacity": 0.5,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 6,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js2', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});

const container = document.querySelector(".group");
const afterImage = document.getElementById("afterImage");
const sliderHandle = document.getElementById("sliderHandle");

container.addEventListener("mousemove", (e) => {
const rect = container.getBoundingClientRect();
const x = e.clientX - rect.left;
const percentage = (x / rect.width) * 100;
afterImage.style.clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
sliderHandle.style.left = `${percentage}%`;
});