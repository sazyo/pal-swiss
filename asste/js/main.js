document.addEventListener('DOMContentLoaded', () => {
    generateRecruitmentSteps();
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});


const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const theme = e.target.getAttribute('data-theme');
        const root = document.querySelector(':root');

        switch(theme) {
            case 'blue':
                root.style.setProperty('--primary-color', '#007bff');
                break;
            case 'green':
                root.style.setProperty('--primary-color', '#28a745');
                break;
            case 'purple':
                root.style.setProperty('--primary-color', '#6f42c1');
                break;
            default:
                root.style.setProperty('--primary-color', '#E31E24');
        }
    });
});

const offerings = [
    {
        title: "Access to Skilled Talent",
        description: "Engage with a rigorously screened pool of Palestinian ICT specialists, tailored to meet the high standards and specific needs of Swiss businesses."
    },
    {
        title: "Secure Employment Management",
        description: "We ensure a stable, secure, and conducive work environment that mirrors the expectations of Swiss corporate culture in localized offices."
    },
    {
        title: "Regulatory Compliance",
        description: "Financial and legal governance through Swiss organizations and fiduciaries, accommodating both Swiss and Palestinian laws."
    },
    {
        title: "Customized Training Programs",
        description: "Training to bridge any skill gaps, including multilingual proficiency in German, French, and more, to cater to the Swiss market."
    },
    {
        title: "Cost Efficiency",
        description: "Achieve significant cost savings with salary expenses that are competitively lower compared to Swiss and European standards."
    },
    {
        title: "Expansion Opportunities",
        description: "Explore the potential to establish and expand your company's presence in Palestine, fostering long-term growth and innovation."
    }
];

function generateOfferings() {
    const container = document.querySelector('#offeringsContainer');
    
    offerings.forEach(offering => {
        const offeringElement = document.createElement('div');
        offeringElement.className = 'col-md-6 col-lg-4 wow animate__animated animate__fadeInUp';
        offeringElement.setAttribute('data-wow-delay', '0.2s');
        
        offeringElement.innerHTML = `
            <div class="offering-card">
                <div class="card-inner">
                    <div class="card-front">
                        <h3>${offering.title}</h3>
                    </div>
                    <div class="card-back">
                        <p>${offering.description}</p>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(offeringElement);
    });
}

const recruitmentSteps = [
    {
        icon: './asste/public/Icon-1.png',
        title: 'Specify',
        description: 'Detail your hiring needs and job criteria.'
    },
    {
        icon: './asste/public/Icon-2.png',
        title: 'Evaluate',
        description: 'Perform detailed candidate evaluations.'
    },
    {
        icon: './asste/public/Icon-3.png',
        title: 'Select',
        description: 'Choose the most qualified candidates.'
    },
    {
        icon: './asste/public/Icon-4.png',
        title: 'Verify',
        description: 'Perform thorough background checks.'
    },
    {
        icon: './asste/public/Icon-5.png',
        title: 'Integrate',
        description: 'Smoothly transition new hires.'
    }
];

function generateRecruitmentSteps() {
    const container = document.querySelector('#recruitmentSteps');
    
    recruitmentSteps.forEach(step => {
        const stepElement = document.createElement('div');
        stepElement.className = 'swiper-slide';
        
        stepElement.innerHTML = `
            <img src="${step.icon}" alt="${step.title}">
            <h3>${step.title}</h3>
            <p>${step.description}</p>
        `;
        
        container.appendChild(stepElement);
    });
}

document.addEventListener('DOMContentLoaded', generateOfferings);
