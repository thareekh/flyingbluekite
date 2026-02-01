// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Reading Progress Bar
const readingProgress = document.getElementById('reading-progress');

window.addEventListener('scroll', () => {
    if (readingProgress) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        readingProgress.style.width = scrolled + "%";
    }
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// AI Blog Generator Logic
const blogGenerator = {
    // Content templates based on existing blog style (removed em dashes as requested)
    themes: [
        'travel', 'philosophy', 'poetry', 'social commentary', 'personal reflection', 
        'nature', 'solitude', 'human connections', 'urban life', 'memories'
    ],

    openings: [
        "Sometimes the best adventures are the ones you never see coming",
        "I have always felt like a wanderer in a world of settlers",
        "Last night, amidst the chaos of the city, I found a moment of clarity",
        "There is a peculiar kind of solitude that only comes from being surrounded by people",
        "The winds have carried me to unexpected places lately",
        "In the spaces between breaths, I found something I was not looking for"
    ],

    musings: [
        "We build walls to keep others out, but forget they also keep us in.",
        "Maybe the point was never to arrive, but to drift with intention.",
        "I watched the sunlight filter through the trees and realized how much I have missed by rushing.",
        "There is courage in admitting you do not have it all figured out.",
        "The city moves with its own rhythm, indifferent to our small dramas.",
        "We are all just stories waiting to be told, dust in the wind trying to make meaning."
    ],

    closings: [
        "So here I am, still drifting, still wondering, still alive.",
        "The kite flies higher when it stops fighting the wind.",
        "Tomorrow will bring its own revelations. Today, I am simply here.",
        "Perhaps that is enough: to be carried by the winds of thought and endless possibility.",
        "The strings we cut sometimes set us free.",
        "In the end, we are all just flying blue kites, wandering where the wind takes us."
    ],

    titles: [
        "The Art of Drifting",
        "Between Silence and Noise",
        "Notes from the Periphery",
        "When the Wind Changes Direction", 
        "The Weight of Wings",
        "Chaos Theory: Personal Edition",
        "Midnight Musings and Chai Stalls",
        "The Geometry of Solitude",
        "Borrowed Time, Returned Favors",
        "Unsent Letters to Strangers"
    ],

    cities: ["Delhi", "Manali", "Kerala", "Mumbai", "Jaipur", "Varanasi", "Goa", "Bangalore"],

    emotions: ["melancholy", "hope", "confusion", "wonder", "nostalgia", "restlessness", "peace"],

    objects: ["old photographs", "train tickets", "chai cups", "monsoon clouds", "street lamps", "abandoned books"],

    generatePost(theme = null) {
        const selectedTheme = theme || this.themes[Math.floor(Math.random() * this.themes.length)];
        const opening = this.openings[Math.floor(Math.random() * this.openings.length)];
        const musing1 = this.musings[Math.floor(Math.random() * this.musings.length)];
        const musing2 = this.musings[Math.floor(Math.random() * this.musings.length)];
        const closing = this.closings[Math.floor(Math.random() * this.closings.length)];
        const title = this.titles[Math.floor(Math.random() * this.titles.length)];
        const city = this.cities[Math.floor(Math.random() * this.cities.length)];
        const emotion = this.emotions[Math.floor(Math.random() * this.emotions.length)];
        const object = this.objects[Math.floor(Math.random() * this.objects.length)];

        // Generate content based on theme
        let content = "";

        if (selectedTheme === 'travel') {
            content = `${opening}. 

I found myself in ${city} last week, with nothing but a backpack and a vague sense of purpose. The streets here have a way of teaching you things that classrooms never could. 

${musing1}

I sat at a small dhaba, watching the world rush by while my chai grew cold. There was something poetic about the way the steam rose into the morning air, vanishing like unspoken words. ${object} littered the tables, each one a story of someone else's journey.

${musing2}

${closing}`;
        } else if (selectedTheme === 'philosophy') {
            content = `${opening}.

I have been thinking about the nature of ${emotion} lately. It seems to come in waves, indifferent to our schedules and plans. We try to capture it, categorize it, but it slips through our fingers like sand.

${musing1}

The ${object} on my desk reminds me that everything is temporary. We are all just passing through, leaving traces of ourselves in places we will never return to.

${musing2}

Maybe the truth is simpler than we make it. Maybe ${closing.toLowerCase()}`;
        } else if (selectedTheme === 'poetry') {
            content = `Look close at the ${object}, worn and weathered by time.
It holds the weight of journeys, yours and mine.

${opening},
but found instead a different kind of rhyme.

The ${city} streets whisper secrets old,
Of dreams abandoned and stories told.

${musing1}

So who holds the power? The lost or the found?
The muted voice or the battle sound?
We rule by the heart, by tradition and night,
While the wanderer spins free, both shadow and light.

${closing}`;
        } else {
            content = `${opening}.

It started with ${object}, randomly stumbled upon during a Tuesday that felt like any other. But Tuesdays have a way of becoming turning points when we are not paying attention.

${musing1}

There is a particular shade of ${emotion} that settles over ${city} in the evenings. It seeps into the cracks of buildings, hangs in the air like unspoken goodbyes.

${musing2}

I am learning that not every story needs a conclusion. Some are meant to remain open, like windows letting in the breeze. ${closing}`;
        }

        // Remove all em dashes (—) and replace with en dashes or spaces as requested
        content = content.replace(/—/g, '–'); // Replace em dash with en dash, or could use ' ' or ', '

        const today = new Date();
        const dateStr = today.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        return {
            title: title,
            content: content,
            theme: selectedTheme,
            date: dateStr,
            readTime: Math.ceil(content.split(' ').length / 200) + ' min read'
        };
    },

    generateDailyPosts() {
        const posts = [];
        const themes = [...this.themes].sort(() => 0.5 - Math.random()).slice(0, 5);

        themes.forEach((theme, index) => {
            const date = new Date();
            date.setDate(date.getDate() + index);
            const post = this.generatePost(theme);
            post.date = date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            posts.push(post);
        });

        return posts;
    }
};

// Initialize Generator on Generator Page
if (document.getElementById('generator-form')) {
    document.getElementById('generator-form').addEventListener('submit', function(e) {
        e.preventDefault();
        generatePosts();
    });

    // Auto-generate on page load
    window.addEventListener('load', generatePosts);
}

function generatePosts() {
    const container = document.getElementById('generated-posts');
    const count = parseInt(document.getElementById('post-count')?.value || 5);

    if (!container) return;

    container.innerHTML = '<div class="text-center"><i class="fas fa-spinner fa-spin"></i> Creating your stories...</div>';

    // Simulate thinking time for effect
    setTimeout(() => {
        const posts = [];
        for (let i = 0; i < count; i++) {
            posts.push(blogGenerator.generatePost());
        }

        container.innerHTML = posts.map((post, index) => `
            <article class="generated-card" style="animation: fadeInUp 0.5s ease ${index * 0.1}s both;">
                <div class="tags">
                    <span class="tag">${post.theme}</span>
                </div>
                <h3>${post.title}</h3>
                <div class="meta">${post.date} · ${post.readTime}</div>
                <p>${post.content.split('\n\n')[0]}</p>
                <button class="btn btn-secondary" onclick="expandPost(${index})">Read Full Story</button>
                <div id="full-content-${index}" style="display: none; margin-top: 1rem;">
                    ${post.content.split('\n\n').slice(1).map(p => `<p>${p}</p>`).join('')}
                </div>
            </article>
        `).join('');
    }, 800);
}

function expandPost(index) {
    const content = document.getElementById(`full-content-${index}`);
    if (content) {
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }
}

// Fade in elements on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.blog-card, .generated-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

console.log('🪁 Flying Blue Kite website loaded successfully!');
