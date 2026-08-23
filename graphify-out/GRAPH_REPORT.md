# Graph Report - PersonalResumeWebsite-1  (2026-08-23)

## Corpus Check
- 31 files · ~398,745 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 83 nodes · 62 edges · 30 communities (9 shown, 21 thin omitted)
- Extraction: 55% EXTRACTED · 45% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.88)
- Token cost: 1,076,969 input · 0 output

## Community Hubs (Navigation)
- UI Interaction Scripts
- Brianna Harris Portfolio Project
- Resume Site Sections
- Ryan Orozco Profile & Credentials
- Featured Projects Showcase
- Navbar Scroll Behavior
- Yankees Baseball Interest
- UConn Basketball Interest
- About Me Photo
- AWS Skill Badge
- Garden Plant Photo
- Boxing Interest
- Matrix-Style Header Background
- Running Interest
- Softball Interest
- Tennis Interest
- NailsXLauren Brand Logo
- Lockheed Martin Employer
- UConn Logo & University
- University of New Haven
- Golf Course Landscape Photo
- Decorative Swoosh Animation
- F-35 Jet Image (Images/)
- Tech Network Background Graphic
- Earth From Space Animation
- Isometric Dev Illustration
- UConn Campus Aerial Photo (Images/)
- UFC Logo Image
- F-35 Jet Image (Styles/)
- UConn Campus Aerial Photo (Styles/)

## God Nodes (most connected - your core abstractions)
1. `Featured Projects Section` - 6 edges
2. `Ryan Orozco (person/profile)` - 5 edges
3. `Modern Navbar Component` - 5 edges
4. `toggleProject() function` - 5 edges
5. `Everest Golf Course Project` - 4 edges
6. `Brianna Harris Portfolio Site Screenshot` - 4 edges
7. `Brianna Harris Portfolio Project` - 3 edges
8. `Nail X Lauren Project` - 3 edges
9. `initializeContactForm()` - 2 edges
10. `showNotification()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `PersonalResumeWebsite (README)` --semantically_similar_to--> `Ryan Orozco (person/profile)`  [INFERRED] [semantically similar]
  README.md → index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Navbar-to-Section Navigation Flow** — index_navbar, index_about_section, index_experience_section, index_projects_section, index_education_section, index_skills_section [EXTRACTED 1.00]
- **Collapsible Project Card Interaction Pattern** — index_toggleproject_function, index_creeks_edge_landscape_project, index_brianna_harris_portfolio_project, index_nail_x_lauren_project, index_everest_golf_course_project [EXTRACTED 1.00]

## Communities (30 total, 21 thin omitted)

### Community 1 - "Brianna Harris Portfolio Project"
Cohesion: 0.33
Nodes (6): Brianna Harris Portfolio Site Screenshot, Brianna Harris (portfolio site subject), Hero/About Me section with headshot and CTA buttons, Navigation bar (About Me, Experience, Projects, Giving Back, Contact Me), Pink/magenta color theme design pattern, Syracuse University (education credential)

### Community 2 - "Resume Site Sections"
Cohesion: 0.33
Nodes (6): About Me Section, Education Section, Professional Experience Section, Footer / Contact Section, Modern Navbar Component, Skills & Certifications Section

### Community 3 - "Ryan Orozco Profile & Credentials"
Cohesion: 0.33
Nodes (6): AWS Certified Cloud Practitioner, Lockheed Martin (Employer), Ryan Orozco (person/profile), University of Connecticut (BEng CS, 2024), University of New Haven (MBA, in progress), PersonalResumeWebsite (README)

### Community 4 - "Featured Projects Showcase"
Cohesion: 0.73
Nodes (6): Brianna Harris Portfolio Project, Creek's Edge Landscape Project, Everest Golf Course Project, Nail X Lauren Project, Featured Projects Section, toggleProject() function

### Community 6 - "Yankees Baseball Interest"
Cohesion: 0.67
Nodes (3): Baseball / Sports Interest, New York Yankees (MLB Team), New York Yankees Logo

### Community 7 - "UConn Basketball Interest"
Cohesion: 0.67
Nodes (3): Personal Hobbies & Interests, UConn Huskies Basketball, UConn Huskies Back-to-Back National Champions 2023-24 Logo

### Community 8 - "About Me Photo"
Cohesion: 0.67
Nodes (3): About Me Photo (Cropped), Outdoor Waterfront/Rooftop Cafe Setting, Portrait Subject (young man, curly dark hair, white collared shirt)

### Community 9 - "AWS Skill Badge"
Cohesion: 0.67
Nodes (3): Amazon Web Services (AWS), AWS Logo Image, Portfolio Skill/Technology Icon Usage

### Community 10 - "Garden Plant Photo"
Cohesion: 1.00
Nodes (3): Outdoor garden/wild ground cover scene, Photo of plant with dark berries (Solomon's seal-like), Plant with arching stem and clustered dark blue-black berries

## Knowledge Gaps
- **50 isolated node(s):** `style`, `PersonalResumeWebsite (README)`, `Professional Experience Section`, `Education Section`, `Skills & Certifications Section` (+45 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **21 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Modern Navbar Component` connect `Resume Site Sections` to `Featured Projects Showcase`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Why does `Featured Projects Section` connect `Featured Projects Showcase` to `Resume Site Sections`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Everest Golf Course Project` (e.g. with `Brianna Harris Portfolio Project` and `Nail X Lauren Project`) actually correct?**
  _`Everest Golf Course Project` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `style`, `PersonalResumeWebsite (README)`, `Professional Experience Section` to the rest of the system?**
  _50 weakly-connected nodes found - possible documentation gaps or missing edges._