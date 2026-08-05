const CLOUD_NAME = "xkopeoyx"
const ABSOLUTE_PATH = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/`;

const projects = [
  {
    id: "senior-provost-awards",
    badge: "Photography",
    year: "2026",
    category: "Portraits",
    title: "Senior & Provost Awards",
    fullDescription: "Photography done for the 2026 Senior & Provost Award Ceremony. Showcased at the 2026 University of Arizona Commencement Ceremony",
    client: "University of Arizona",
    thumbnail: "https://res.cloudinary.com/xkopeoyx/image/upload/v1785954445/thumbnail.jpg",
    meta: {},
    tag: "provost",
    credits: []
  },
  {
    id: "wheelchair-rules",
    badge: "Video",
    year: "2026",
    category: "Educational",
    title: "Wheelchair Basketball: Rules of the Game",
    fullDescription: "Produced and edited a comprehensive rules guide for the 2026 National Championships. Collaborated with athletes from both Men's and Women's teams and consulted with coaching staff to ensure technical accuracy. The video followed strict tournament style guidelines and played during every game of the championship.",
    client: "University of Arizona | National Wheelchair Basketball Association (NWBA)",
    thumbnail: "https://res.cloudinary.com/xkopeoyx/image/upload/v1785952095/thumb_mfyzsw.png",
    tag: "rules",
    credits: [
      { role: "Video Editor", name: "Enrique Camou Villa" },
      { role: "Brand Design / Graphic Designer", name: "Jill Scott" }
    ]
  },
  {
    id: "barnetche-finance",
    badge: "Campaign",
    year: "2026",
    category: "Social Media",
    title: "@robertobarnetche Short-Form Video Campaign",
    fullDescription: "A multi-part social video campaign focusing on high-retention editing and visual storytelling. Developed high-converting Meta advertising creative alongside an organic short-form asset rollout that yielded a 55% engagement spike and scaled the creator's core digital audience.",
    client: "Roberto Barnetche",
    thumbnail: "https://res.cloudinary.com/xkopeoyx/image/upload/v1785952095/thumb_b1rw5b.png",
    meta: {},
    tag: "roberto"
  },
  {
    id: "nationals-teaser",
    badge: "Video",
    year: "2026",
    category: "Sports Promo",
    title: "2026 National Championship Hype Teaser",
    fullDescription: "Tasked with creating an electrifying promo video to drive attendance for the upcoming National Championship. The edit blends archival tournament footage with original cinematography to showcase the intensity of the athletes and incentivize the local community to fill the stands at McKale Center.",
    client: "University of Arizona | Adaptive Athletics",
    thumbnail: "https://res.cloudinary.com/xkopeoyx/image/upload/v1785952100/thumb_tsdd93.png",
    tag: "nationals",

    credits: [
      { role: "Editor / Cinematographer", name: "Enrique Camou Villa" },
      { role: "Brand Design / Graphic Designer", name: "Jill Scott" }
    ]
  },
  {
    id: "tusk",
    badge: "Music Video",
    year: "2025",
    category: "Music Video",
    title: "Alassane — Tusk (Music Video)",
    fullDescription: "Co-directed and produced a music video for a writer/singer. Created a unique choreography specific to the rythm alongside The Drop Dance Studio with the help of 10+ dancers. Colorgraded and edited by Enrique Camou Villa.",
    client: "University of Arizona | Adaptive Athletics",
    thumbnail: "https://res.cloudinary.com/xkopeoyx/image/upload/v1785952087/thumb_lpr7tv.png",
    tag: "tusk",

    credits: [
      { role: "Co-Director", name: "Enrique Camou Villa" },
      { role: "Co-Director", name: "Kayla Vazquez" },
      { role: "Artist", name: "Alassane Diarra" }
    ]
  },
  {
    id: "adaptive",
    badge: "Photography",
    year: "2026",
    category: "Series",
    title: "Adaptive Athletics Media Day",
    fullDescription: "Directed a comprehensive two-day media campaign for the University of Arizona Adaptive Athletics department, overseeing the production of high-end photography, social media assets, and video interviews.",
    client: "University of Arizona | Adaptive Athletics",
    thumbnail: "https://res.cloudinary.com/xkopeoyx/image/upload/v1785952098/thumb_gjoh0a.jpg",
    tag: "adaptive",
    credits: [
      { role: "Photography", name: "Enrique Camou Villa" },
      { role: "Event Planner", name: "Destani Grijalva" }
    ]
  },
  {
    id: "intramural-football",
    badge: "Commercial",
    year: "2025",
    category: "Sports Promo",
    title: "Intramural Football",
    fullDescription: "Season recap video covering three intramural football leagues — fraternity, mixed, and women's teams — filmed at Casino del Sol Stadium. Combined cinematic game footage with dynamic editing, original color grading, sound design, and motion graphics to deliver a high-energy highlight reel for Campus Recreation.",
    client: "Campus Recreation | University of Arizona",
    thumbnail: "https://res.cloudinary.com/xkopeoyx/image/upload/v1785952087/thumb_mricwn.jpg",
    tag: "football",
    credits: [
      { role: "Video Editing", name: "Enrique Camou Villa" }
    ]
  },
  {
    id: "ring",
    badge: "Video",
    year: "2025",
    category: "Commercial",
    title: "National Championship Ring Campaign",
    fullDescription: "Directed and edited a macro-style cinematic teaser for the Men's Wheelchair Basketball National Championship ring reveal. Coordinated with marketing teams, coaches, and McKale Center staff to execute high-end videography and photography of the rings for a large-scale jumbotron debut during a football game.",
    client: "University of Arizona | Adaptive Athletics",
    thumbnail: "https://res.cloudinary.com/xkopeoyx/image/upload/v1785952087/thumbnail_g86rwb.png",
    tag: "ring",
    videos: ["https://www.instagram.com/reel/DPehmFdkThr/embed"],
    credits: [
      { role: "Director / Editor", name: "Enrique Camou Villa" },
      { role: "Event Planner", name: "Destani Grijalva" }
    ]
  },
  {
    id: "hockey",
    badge: "Photography",
    year: "2025",
    category: "Series",
    title: "Arizona Hockey Media Day",
    fullDescription: "Photo campaign for the University of Arizona's Men's and Women's hockey teams for the 2025–2026 season.",
    client: "University of Arizona",
    thumbnail: "https://res.cloudinary.com/xkopeoyx/image/upload/v1785952091/thumbnail_td6vha.png",
    tag: "hockey",
    credits: [
      { role: "Photography", name: "Enrique Camou Villa" }
    ]
  },
  {
    id: "centennialAwards",
    badge: "Photography",
    year: "2025",
    category: "Portraits",
    title: "2025 Graduate Centennial Achievement Award Headshots",
    fullDescription: "Captured portraits professionally for the recipients of the 2025 Centennial Achievement Award.",
    client: "University of Arizona | Student Affairs",
    thumbnail: "https://res.cloudinary.com/xkopeoyx/image/upload/v1785954343/award2_ds1xxc.jpg",
    tag: "centennial",

    credits: [
      { role: "Photography", name: "Enrique Camou Villa" }
    ]
  }
];

const grid = document.getElementById("grid");

// ---------------------------------------------------------------------
// Editorial index: full-width numbered rows, image + title + meta always
// visible (no hover-gated info, so it reads the same on touch devices),
// click expands an inline dossier panel. Row background/text flip from
// cream to charcoal on hover/active — the brand's cream:black ratio
// performed as motion.
// ---------------------------------------------------------------------

function isInstagramUrl(url) {
  return /instagram\.com/i.test(url);
}

function buildEmbedCarousel(videoUrls) {
  if (!videoUrls || !videoUrls.length) return "";

  const items = videoUrls.map(url => {
    if (isInstagramUrl(url)) {
      return `
        <div class="carousel-instagram-item">
          <iframe src="${url}" loading="lazy" allowfullscreen></iframe>
        </div>`;
    }
    return `
      <div class="carousel-video-item">
        <video src="${url}" controls preload="metadata" playsinline></video>
      </div>`;
  }).join("");

  return `
    <div class="banner-section-title">Featured Video</div>
    <div class="media-scroll-carousel">${items}</div>`;
}

async function renderGrid(projectList) {
  grid.innerHTML = "";

  const projectPhotosList = await Promise.all(
    projectList.map(async (p) => {
      if (!p.tag) return [];

      const listEndpoint = `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${p.tag}.json`;

      try {
        const response = await fetch(listEndpoint);
        if (!response.ok) return [];

        const data = await response.json();
        return data.resources.map(img => `${img.public_id}.${img.format}`);
      } catch (err) {
        console.warn(`Failed to fetch photos for tag "${p.tag}":`, err);
        return [];
      }
    })
  );

  projectList.forEach((p, idx) => {
    const row = document.createElement("article");
    row.className = "work-row";
    row.style.animationDelay = `${0.03 + idx * 0.05}s`;

    const photos = projectPhotosList[idx] || [];

    const photoCarousel = photos.length
      ? `<div class="banner-section-title">Project Gallery</div>
         <div class="media-scroll-carousel image-carousel-row">
           ${photos.map(u => `
             <div class="carousel-photo-item">
               <img src="${ABSOLUTE_PATH}${u}" alt="${p.title} — gallery" loading="lazy"/>
             </div>`).join("")}
         </div>`
      : "";

    const videoCarousel = buildEmbedCarousel(p.videos);

    const creditsHtml = (p.credits && p.credits.length)
      ? `<div class="inline-credits-list">
           ${p.credits.map(c => `
             <div class="inline-credit-row">
               <span class="inline-role">${c.role}:</span>
               <span class="inline-name">${c.name}</span>
             </div>`).join("")}
         </div>`
      : "";

    row.innerHTML = `
      <div class="row-top">
        <div class="row-media-block">
          <div class="row-media">
            <img src="${p.thumbnail}" alt="${p.title}" loading="lazy"/>
          </div>
          <span class="row-tag">${p.badge}</span>
        </div>
        <div class="row-meta">
          <span class="row-eyebrow">${p.year} &mdash; ${p.category}</span>
          <h2 class="row-title">${p.title}</h2>
          <div class="row-client">${p.client}</div>
        </div>
        <button class="row-toggle" aria-label="Expand project details" aria-expanded="false">
          <svg class="icon-folder icon-folder-closed" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 7a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z"/>
          </svg>
          <svg class="icon-folder icon-folder-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 7a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1l-1.4 8.8a1 1 0 0 1-1 .9H5.4a1 1 0 0 1-1-.9L3 8.2V7z"/>
            <path d="M3 9.2h17"/>
          </svg>
        </button>
      </div>
      <div class="row-detail">
        <div class="row-detail-inner">
          <p class="banner-desc">${p.fullDescription || "No project description available."}</p>
          ${creditsHtml}
          ${videoCarousel}
          ${photoCarousel}
          <button class="banner-close-btn">Close</button>
        </div>
      </div>
    `;

    const toggleBtn = row.querySelector(".row-toggle");
    const closeBtn = row.querySelector(".banner-close-btn");

    const setActive = (active) => {
      row.classList.toggle("active", active);
      toggleBtn.setAttribute("aria-expanded", String(active));
      if (!active) {
        row.querySelectorAll("video").forEach(v => v.pause());
      }
    };

    row.addEventListener("click", (e) => {
      if (e.target.closest(".row-detail")) return;

      const isActive = row.classList.contains("active");

      document.querySelectorAll(".work-row").forEach(r => {
        if (r !== row) {
          r.classList.remove("active");
          r.querySelector(".row-toggle")?.setAttribute("aria-expanded", "false");
          r.querySelectorAll("video").forEach(v => v.pause());
        }
      });

      setActive(!isActive);

      if (!isActive) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            row.scrollIntoView({ behavior: "smooth", block: "nearest" });
          });
        });
      }
    });

    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setActive(false);
    });

    grid.appendChild(row);
  });
}

if (typeof projects !== "undefined") {
  renderGrid(projects).catch(err => {
    console.error("Error rendering grid:", err);
  });
}