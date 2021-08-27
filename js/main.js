function mainInitAcc() {
    const navItem = document.querySelectorAll('.nav_items');
    const panelItem = document.querySelectorAll('.panel_item');

    navItem.forEach((e) => {
        e.addEventListener('click', function () {
            navItem.forEach((e) => {
                e.classList.remove('active');
            });
            this.classList.add('active');
            let id = this.getAttribute('data-id');
            panelItem.forEach((e) => {
                e.classList.remove('active');
            });
            panelItem[id].classList.add('active');

        });
    });
}
mainInitAcc();

// Mobile Menu...===============================================
function mobileMenu() {
    let menuBtn = document.querySelector('.mkr_mobile_menu');
    let navMenu = document.querySelector('.mkr_navbar_menu');
    let navUl = document.querySelector('.mkr_navbar_ul');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        const navMenuHeight = navMenu.getBoundingClientRect().height;
        const navMenuUlHeight = navUl.getBoundingClientRect().height;
        if (navMenuHeight == 0) {
            navMenu.style.height = `${navMenuUlHeight}px`;
            navMenu.style.padding = '1rem 0';
        } else {
            navMenu.style.height = 0;
            navMenu.style.padding = 0;
        }
    });
}
mobileMenu();
// Mobile Menu End...==============================================


// About Dynamic Date Object Start==================================
function dynamicDate() {
    const aboutPersonalInfo = document.querySelector('.mkr_about_personal_info');
    const age = aboutPersonalInfo.querySelector('.age');
    const year = new Date().getFullYear();
    let obj = {
        year: 2000,
        func: function (year) {
            return year - this.year;
        }
    }
    age.innerHTML = `<b>Age :</b> ${obj.func(year)}.`;
}
dynamicDate();
// About Dynamic Date Object End=========================================


// modal Box for single page...========================================
function singllePageModal() {
    let modalBox = document.querySelectorAll('.modal_box');
    let openModal = document.querySelectorAll('.open_modal');

    openModal.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            let btnDataId = event.currentTarget.dataset.id;
            modalBox.forEach((modal) => {
                let modalDataId = modal.dataset.id;
                if (modalDataId === btnDataId) {
                    modal.classList.add('active');
                }
            });
        });
    });

    let modalCloseBtn = document.querySelectorAll('.close_modal');
    modalCloseBtn.forEach((e) => {
        e.addEventListener('click', () => {
            modalBox.forEach((modal) => {
                modal.classList.remove('active');
            });
        });
    });
};
singllePageModal();
// Modal Box End......==================================


// Portfolio Filter Gallery Start=========================
function portfolioFilter() {
    const portfFilterBtn = document.querySelectorAll('.portf_button');
    const portfTabs = document.querySelectorAll('.mkr_portf_photos_item');

    portfFilterBtn.forEach(btn => {
        btn.addEventListener('click', function () {
            portfFilterBtn.forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');

            let portfBtnDataId = this.getAttribute('data-id');

            portfTabs.forEach(tabs => {
                tabs.style.transform = "scale(0)";
                setTimeout(() => {
                    tabs.style.display = "none";
                }, 500);

                if ((tabs.className.match(portfBtnDataId)) || portfBtnDataId === "all") {
                    tabs.style.transform = "scale(1)";
                    setTimeout(() => {
                        tabs.style.display = "flex";
                    }, 500);
                }
            });
        });
    });
}
portfolioFilter();
//Portfolio Filter Gallery End.++++++++++========================


// Portfolio Modal Box Start==========================
function displayPortfolio(portfolioMenu) {
    const portfModalBox = document.querySelector('.modal_box_portf');
    const closePortfModal = document.querySelector('.close_modal_portf');
    const portfolioWrap = document.querySelector('.modal_box_wrap_portf');

    let displayPortfolioData = portfolioMenu.map((items) => {
        return `<div class="container">
                    <div class="modal_portf_img">
                        <img src=${items.img} alt="">
                    </div>
                    <h3 class="modal_portf_title">${items.title}</h3>
                    <p class="modal_portf_desc">${items.desc}</p>
                </div>`;
    });
    portfolioWrap.innerHTML = displayPortfolioData.join('');

    // Active Modal
    portfModalBox.classList.add('active');

    // Close Modal 
    closePortfModal.addEventListener('click', () => {
        portfModalBox.classList.remove('active');
    });
}

const openPortfModal = document.querySelectorAll('.open_portf_modal');
openPortfModal.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let portfCategory = event.currentTarget.dataset.id;
        let filterPortf = portfolioMenu.filter((items) => {
            if (items.category === portfCategory) {
                return items;
            }
        });
        if (portfCategory) {
            displayPortfolio(filterPortf);
        }
    });
});
// // Portfolio Modal Box End========================



// Blogs Menu Item Modal Box=============================
// Open Blogs Modal....
const openBlogsModal = document.querySelectorAll('.open_blogs_modal');
openBlogsModal.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let category = event.currentTarget.dataset.id;
        let filterBlogsModal = blogsMenu.filter((items) => {
            if (items.cate === category) {
                return items;
            }
        });
        if (category) {
            displayBlogs(filterBlogsModal);
        };
    });
});

function displayBlogs(blogsMenu) {
    const modalBoxx = document.querySelector('.modal_box_blogs');
    const closeModal = document.querySelector('.close_modal_blogs');
    const modalWrap = document.querySelector('.modal_box_wrap_blogs');

    let showBlogs = blogsMenu.map((itms) => {
        return `
            <div class="container modal_container">
                <div class="mkr_blogs_modal_img">
                    <img src=${itms.img} alt="">
                    <div class="mkr_blogs_modal_img_caption">
                        ${itms.caption}
                    </div>
                </div>
                <h3 class="mkr_blogs_modal_header">
                    ${itms.header}
                </h3>
                <div class="mkr_blogs_modal_text_content">
                    <strong>${itms.strong}</strong>
                    <p>
                        ${itms.desc}
                        <i>${itms.italic}</i>
                        ${itms.desc2}
                    </p>
                </div>
            </div>
        `;
    });
    modalWrap.innerHTML = showBlogs.join('');
    // Open Modal Box
    modalBoxx.classList.add('active');

    // Close Blogs Modal....
    closeModal.addEventListener('click', () => {
        modalBoxx.classList.remove('active');
    });

}
// Blogs Menu Item Modal Box=============================


// Contact validation Start+====================
const fName = document.getElementById('fname');
const email = document.getElementById('email');
const formBtn = document.getElementById('form_btn');
const textArea = document.getElementById('textArea');
const showAlert = document.querySelector('.show_alert');

function validationMsg(event, alrt) {
    event.innerHTML = alrt;
}

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (fName.value === "") {
        validationMsg(showAlert, "Please Enter Your Name...");
        return false
    }

    if (email.value === "") {
        validationMsg(showAlert, "Please Enter Email Address...")
        return false;
    } else if (!email.value.match(validRegex)) {
        validationMsg(showAlert, "Email Address Is Not Valid...");
        return false;
    }

    if (textArea.value === "") {
        validationMsg(showAlert, "Write Something...");
        return false;
    }
}
// Contact validation End+====================
